#!/usr/bin/env python3
"""Validate a generated logo and emit the size set a brand pack must ship.

A logo produced by an image model is not a deliverable until someone has
checked it. This does the checking that is mechanical — transparency, squared
canvas, trimmed margins, and whether the mark survives being shrunk to a 16px
favicon — and then writes the eight PNG sizes.

What it cannot judge: whether the mark is any good, whether it is original, or
whether it reads as the brand. That stays human.

    python3 validate_logo.py mark.png --out assets/
    python3 validate_logo.py mark.png --check-only

Requires Pillow (pip install Pillow).
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Serve Pillow per validare il logo:  pip install Pillow")

SIZES = [16, 32, 48, 64, 128, 256, 512, 1024]

# Sotto questa soglia il mark a 16px è una macchia: troppo pochi pixel restano
# distinguibili dallo sfondo dopo il downscale.
FAVICON_MIN_INK = 0.06
# Sopra questa, a 16px è un blocco pieno: altrettanto illeggibile.
FAVICON_MAX_INK = 0.72


def load(path):
    try:
        img = Image.open(path)
    except FileNotFoundError:
        sys.exit(f"file non trovato: {path}")
    except Exception as e:
        sys.exit(f"non è un'immagine leggibile: {e}")
    return img.convert("RGBA")


def alpha_bbox(img):
    """Bounding box del contenuto non trasparente."""
    return img.getchannel("A").getbbox()


def check_transparency(img):
    alpha = img.getchannel("A")
    lo, hi = alpha.getextrema()
    if hi == 0:
        return False, "l'immagine è interamente trasparente"
    if lo == 255:
        return False, ("nessun pixel trasparente — il modello ha reso uno sfondo pieno. "
                       "Serve un PNG con canale alpha, non un rettangolo bianco")
    return True, f"canale alpha presente (alpha da {lo} a {hi})"


def check_margins(img):
    """Un mark con margini grossi si rimpicciolisce male: va ritagliato."""
    bbox = alpha_bbox(img)
    if not bbox:
        return False, "nessun contenuto visibile", None
    w, h = img.size
    left, top, right, bottom = bbox
    pad = min(left, top, w - right, h - bottom) / max(w, h)
    if pad > 0.12:
        return False, (f"margine trasparente del {pad:.0%} attorno al mark — "
                       f"ritaglia prima di generare le taglie"), bbox
    return True, f"margine {pad:.0%}, accettabile", bbox


def check_square(img):
    w, h = img.size
    ratio = max(w, h) / min(w, h)
    if ratio > 1.02:
        return False, f"canvas {w}×{h}, non quadrata (rapporto {ratio:.2f}) — le favicon si deformano"
    return True, f"canvas quadrata {w}×{h}"


def check_favicon_legibility(img):
    """Rimpicciolisce a 16px e misura quanta area resta effettivamente coperta."""
    small = img.resize((16, 16), Image.LANCZOS)
    alpha = small.getchannel("A").tobytes()
    ink = sum(1 for a in alpha if a > 32) / len(alpha)
    if ink < FAVICON_MIN_INK:
        return False, (f"a 16px resta coperto solo il {ink:.0%} della superficie — "
                       f"il mark sparisce come favicon, serve un tratto più spesso")
    if ink > FAVICON_MAX_INK:
        return False, (f"a 16px è coperto il {ink:.0%} della superficie — "
                       f"a quella dimensione diventa un blocco pieno")
    return True, f"a 16px copre il {ink:.0%} della superficie, leggibile"


def check_min_source(img):
    """Il sorgente deve reggere la taglia più grande senza essere ingrandito."""
    w, h = img.size
    largest = max(SIZES)
    if min(w, h) < largest:
        return False, (f"sorgente {w}×{h}: sotto i {largest}px la taglia da {largest} "
                       f"viene ingrandita per interpolazione, non è nitida")
    return True, f"sorgente {w}×{h}, regge tutte le taglie fino a {largest}px"


CHECKS = [
    ("sorgente", check_min_source),
    ("trasparenza", check_transparency),
    ("canvas", check_square),
    ("margini", lambda i: check_margins(i)[:2]),
    ("favicon 16px", check_favicon_legibility),
]


def main():
    ap = argparse.ArgumentParser(description="Valida un logo e genera le taglie del brand pack")
    ap.add_argument("logo", type=Path, help="PNG sorgente, preferibilmente ≥1024px e quadrato")
    ap.add_argument("--out", type=Path, default=None, help="cartella dove scrivere le taglie")
    ap.add_argument("--check-only", action="store_true", help="valida soltanto, non scrive")
    ap.add_argument("--force", action="store_true", help="genera le taglie anche se una verifica fallisce")
    args = ap.parse_args()

    img = load(args.logo)
    print(f"logo: {args.logo}\n")

    failures = []
    for label, check in CHECKS:
        ok, message = check(img)
        print(f"  {'ok     ' if ok else 'FALLITO'}  {label:<14} {message}")
        if not ok:
            failures.append(label)

    if args.check_only:
        print()
        return 1 if failures else 0

    if failures and not args.force:
        print(f"\n{len(failures)} verifiche fallite: {', '.join(failures)}.")
        print("Correggi il sorgente e rilancia, oppure forza con --force sapendo cosa spedisci.")
        return 1

    out = args.out or args.logo.parent
    out.mkdir(parents=True, exist_ok=True)
    stem = args.logo.stem

    print("\nscritti:")
    for size in SIZES:
        dest = out / f"{stem}-{size}.png"
        img.resize((size, size), Image.LANCZOS).save(dest, "PNG")
        print(f"  {dest.name}")

    print("\nManca ancora, e non lo può fare uno script:")
    print("  - i lockup SVG (mark, wordmark, orizzontale, impilato)")
    print("  - la versione reversed su fondo scuro")
    print("  - clear-space e dimensione minima, da dichiarare nel pack")
    return 0 if not failures else 1


if __name__ == "__main__":
    sys.exit(main())
