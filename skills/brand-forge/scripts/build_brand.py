#!/usr/bin/env python3
"""Build a brand pack's derived files from brand.json.

brand.json is the single source of truth. Everything else — the CSS custom
properties, the Tailwind fragment — is generated from it, so a colour can never
disagree with itself across the package.

Also runs the WCAG AA contrast check that the method requires. Contrast is
computed from the real hex values, never assumed: a failing pair exits non-zero
so the pack cannot ship red without someone deciding to.

Stdlib only, on purpose — a client must be able to rebuild their own pack
without installing anything.

    python3 build_brand.py brand.json --out .
    python3 build_brand.py brand.json --check-only
"""

import argparse
import json
import sys
from pathlib import Path

# WCAG 2.1 minimums
AA_BODY = 4.5
AA_LARGE = 3.0


# ---------------------------------------------------------------- colour math

def hex_to_rgb(value):
    h = value.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if len(h) != 6:
        raise ValueError(f"not a hex colour: {value!r}")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def relative_luminance(rgb):
    def channel(c):
        c = c / 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (channel(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(fg, bg):
    l1, l2 = relative_luminance(hex_to_rgb(fg)), relative_luminance(hex_to_rgb(bg))
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


# ------------------------------------------------------------------- contrast

# (foreground role, background role, minimum) — the pairs a real page produces.
PAIRS = [
    ("text", "bg", AA_BODY),
    ("text", "surface", AA_BODY),
    ("text-2", "bg", AA_BODY),
    ("text-2", "surface", AA_BODY),
    ("muted", "bg", AA_LARGE),
    ("accent", "bg", AA_LARGE),
    ("accent", "surface", AA_LARGE),
]


def check_contrast(brand):
    """Return (rows, failures). Never assume a pair is fine because it looks it."""
    rows, failures = [], []
    for theme, roles in brand["color"]["semantic"].items():
        for fg, bg, minimum in PAIRS:
            if fg not in roles or bg not in roles:
                continue
            ratio = contrast_ratio(roles[fg], roles[bg])
            ok = ratio >= minimum
            rows.append((theme, fg, bg, roles[fg], roles[bg], ratio, minimum, ok))
            if not ok:
                failures.append((theme, fg, bg, ratio, minimum))
    return rows, failures


def print_contrast(rows):
    print("\nWCAG AA — contrasto calcolato sui hex reali\n")
    print(f"  {'tema':<6} {'coppia':<20} {'colori':<20} {'ratio':>7}  {'min':>4}  esito")
    print("  " + "-" * 66)
    for theme, fg, bg, fghex, bghex, ratio, minimum, ok in rows:
        pair = f"{fg} su {bg}"
        cols = f"{fghex}/{bghex}"
        print(f"  {theme:<6} {pair:<20} {cols:<20} {ratio:>6.2f}:1  {minimum:>4.1f}  "
              f"{'ok' if ok else 'FALLITO'}")


# ------------------------------------------------------------------ generators

def css_block(selector, entries, indent="  "):
    lines = [f"{selector} {{"]
    lines += [f"{indent}--{k}: {v};" for k, v in entries.items()]
    lines.append("}")
    return "\n".join(lines)


def build_colors_css(brand):
    color = brand["color"]
    scale = {f"n-{k}": v for k, v in color.get("neutral", {}).items()}
    light = {k: v for k, v in color["semantic"]["light"].items()}
    dark = {k: v for k, v in color["semantic"].get("dark", {}).items()}

    out = [
        "/* GENERATO da brand.json — non modificare a mano.",
        "   Rigenera con: python3 scripts/build_brand.py brand.json */",
        "",
        css_block(":root", {**scale, **light}),
    ]
    if dark:
        out += ["", css_block('[data-theme="dark"]', dark)]
        out += ["", "@media (prefers-color-scheme: dark) {",
                "  " + css_block(':root:not([data-theme="light"])', dark).replace("\n", "\n  "),
                "}"]
    return "\n".join(out) + "\n"


def build_typography_css(brand):
    t = brand["type"]
    entries = {}
    for role in ("display", "body", "mono"):
        if role in t:
            f = t[role]
            entries[f"font-{role}"] = f["family"]
            if "tracking" in f:
                entries[f"tracking-{role}"] = f["tracking"]
            if "lineHeight" in f:
                entries[f"leading-{role}"] = f["lineHeight"]
    for k, v in t.get("scale", {}).items():
        entries[f"text-{k}"] = v
    if "heroClamp" in t:
        entries["text-hero"] = t["heroClamp"]
    return ("/* GENERATO da brand.json — non modificare a mano. */\n\n"
            + css_block(":root", entries) + "\n")


def build_spacing_css(brand):
    entries = {}
    for k, v in brand.get("layout", {}).items():
        if isinstance(v, str):
            entries[k.replace("_", "-")] = v
    for k, v in brand.get("radii", {}).items():
        entries[f"radius-{k}"] = v
    if brand.get("shadow", {}).get("value"):
        entries["shadow"] = brand["shadow"]["value"]
    return ("/* GENERATO da brand.json — non modificare a mano. */\n\n"
            + css_block(":root", entries) + "\n")


def build_grid_css(brand):
    g = brand.get("layout", {}).get("grid")
    if not g:
        return None
    entries = {
        "grid-columns": str(g["columns"]),
        "grid-gutter": g["gutter"],
        "grid-margin": g["margin"],
    }
    out = ["/* GENERATO da brand.json — non modificare a mano. */", "",
           css_block(":root", entries), "",
           ".grid-wrap {",
           "  width: 100%;",
           "  max-width: var(--maxWidth, 1160px);",
           "  margin-inline: auto;",
           "  padding-inline: var(--grid-margin);",
           "}", "",
           ".grid-row {",
           "  display: grid;",
           "  grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));",
           "  gap: var(--grid-gutter);",
           "}"]
    for bp, cols in sorted(g.get("breakpoints", {}).items(),
                           key=lambda kv: int(str(kv[0]).rstrip("px")), reverse=True):
        out += ["", f"@media (max-width: {bp}) {{",
                f"  :root {{ --grid-columns: {cols}; }}", "}"]
    return "\n".join(out) + "\n"


def build_tailwind(brand):
    color = brand["color"]
    t = brand["type"]
    theme = {
        "colors": {
            "neutral": color.get("neutral", {}),
            "accent": color["accent"]["default"],
            **{k: f"var(--{k})" for k in color["semantic"]["light"]},
        },
        "fontFamily": {r: [t[r]["family"]] for r in ("display", "body", "mono") if r in t},
        "borderRadius": brand.get("radii", {}),
    }
    body = json.dumps(theme, indent=2, ensure_ascii=False)
    return ("// GENERATO da brand.json — non modificare a mano.\n"
            "// Rigenera con: python3 scripts/build_brand.py brand.json\n\n"
            f"module.exports = {{ theme: {{ extend: {body} }} }};\n")


# ------------------------------------------------------------------------ main

def main():
    ap = argparse.ArgumentParser(description="Genera i file derivati di un brand pack da brand.json")
    ap.add_argument("spec", type=Path, help="percorso di brand.json")
    ap.add_argument("--out", type=Path, default=None, help="cartella del pack (default: quella di brand.json)")
    ap.add_argument("--check-only", action="store_true", help="solo il controllo contrasto, non scrive niente")
    ap.add_argument("--allow-contrast-fail", action="store_true",
                    help="non uscire in errore su una coppia fallita (va motivato nel pack)")
    args = ap.parse_args()

    try:
        brand = json.loads(args.spec.read_text(encoding="utf-8"))
    except FileNotFoundError:
        sys.exit(f"brand.json non trovato: {args.spec}")
    except json.JSONDecodeError as e:
        sys.exit(f"brand.json non è JSON valido: {e}")

    for key in ("name", "color", "type"):
        if key not in brand:
            sys.exit(f"brand.json incompleto: manca '{key}'")

    print(f"brand: {brand['name']}")

    rows, failures = check_contrast(brand)
    print_contrast(rows)

    if args.check_only:
        return 1 if failures and not args.allow_contrast_fail else 0

    out = args.out or args.spec.parent
    tokens = out / "tokens"
    tokens.mkdir(parents=True, exist_ok=True)

    written = []
    for name, content in [
        ("colors.css", build_colors_css(brand)),
        ("typography.css", build_typography_css(brand)),
        ("spacing.css", build_spacing_css(brand)),
        ("grid.css", build_grid_css(brand)),
    ]:
        if content is None:
            continue
        (tokens / name).write_text(content, encoding="utf-8")
        written.append(f"tokens/{name}")

    (out / "tailwind.brand.js").write_text(build_tailwind(brand), encoding="utf-8")
    written.append("tailwind.brand.js")

    print("\nscritti:")
    for w in written:
        print(f"  {w}")

    if failures:
        print(f"\n{len(failures)} coppie sotto la soglia AA:")
        for theme, fg, bg, ratio, minimum in failures:
            print(f"  {theme}: {fg} su {bg} = {ratio:.2f}:1, serve {minimum}:1")
        if not args.allow_contrast_fail:
            print("\nIl pack non è pronto a spedire. Correggi i colori, oppure documenta")
            print("la coppia come display-only e rilancia con --allow-contrast-fail.")
            return 1
        print("\nFallimenti accettati esplicitamente — motivali nel README del pack.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
