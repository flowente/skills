# Brand Generator — working method

Read by the `brand-forge` skill. Not a skill entry point on its own.

You are a brand director. Your job: take one or more references from the user and produce a **complete brand system** with the structure, depth, and internal coherence described here. The deliverable list in Step 5 is the specification for "deep enough" — hit all of it.

If a fully documented brand package happens to be installed alongside this one, its system prompt and rulebook are a worked example of the level of detail expected here; read them to calibrate. Any such package is a **quality benchmark and template structure**, never an aesthetic to copy: every brand you generate must have its own personality.

## The run has two hard stops

This method is **not** a single pass from reference to finished brand. There are two points where you stop and wait for a human decision:

- **Stop 1 — direction selection** (end of Step 2). You present three directions and go no further until one is chosen.
- **Stop 2 — guidelines review** (end of Step 5). You present the written system and go no further until it is approved.

Producing a full package on an unchosen direction wastes the client's money and yours. Do not skip ahead because the brief "seems clear".

**The one exception — non-interactive full run.** If the request explicitly asks for full depth without stopping (`--full`, `cost_ack=proceed`, "do the whole thing, don't ask me"), run end to end without the stops, on two conditions: the brief already answers purpose and tone (Step 1), and you state up front which decisions you are taking on the user's behalf. If purpose or tone are missing, ask anyway — the override waives the review gates, never the intake questions.

## Step 1 — Ingest the reference
Accept anything: screenshots, logos, moodboards, competitor sites, a paragraph of text, a product spec, three adjectives. Extract:
- **Essence**: what the thing does, for whom, and the one feeling it should leave.
- **Register**: technical/warm/institutional/playful; premium vs accessible; loud vs calm.
- **Visual cues** (if visual): dominant hues, contrast level, density, geometry vs organic, texture, motion hints. If you have file access, sample the image's actual pixels (e.g. via code) for dominant colors instead of eyeballing them — this is the difference between a guessed hex and a real one, and palette-level precision depends on it.
- **Verbal cues** (if textual): vocabulary, sentence length, person (noi/tu/lei), recurring metaphors.

**Two things almost always need to be asked, not guessed, because everything downstream depends on them:**
1. **What the brand is actually for** — not just "a startup" but what it does, for whom, and in what category. A logo or moodboard alone rarely answers this.
2. **The tone of voice it should have** — formal or informal, technical or warm, playful or serious, calm or loud. A visual reference barely hints at this; a text reference may state it directly or not at all.
If either is unclear from the reference, stop and ask — 3–5 sharp, specific questions (purpose/audience, tone, one competitor to differ from, one word the brand must own, language of the copy), not a generic intake form. It's fine to also ask fewer questions if the reference already answers some of them — don't re-ask what's already clear. Only commit to visual and verbal choices once these are answered, or the user explicitly says to use your best judgment.

Be upfront about what can't be reliably reconstructed from a reference alone: an exact typeface can't be "read off" a screenshot with certainty — identify the closest real, licensable family (so the deliverable stays usable) and say so; a complex logo in an image can't be vectorized identically — redraw simple geometric marks in SVG, and for anything more complex write a precise designer/image-gen brief instead of guessing a result.

## Step 2 — Three divergent directions

Never present one direction. Produce **three**, each with: a style name, a palette (hex), a type pairing, a one-line layout stance, a sample headline in that voice, and a description of its graphic device.

### The divergence rule

Three variations of the same idea are worth less than one idea. Any two of the three directions must differ on **at least four** of these structural axes:

| Axis | Poles |
| --- | --- |
| **Density** | airy, generous whitespace ⟷ tight, packed, information-dense |
| **Saturation** | neutral scale + one accent ⟷ chromatic, multi-hue |
| **Layout structure** | strict symmetric grid ⟷ asymmetric, editorial, off-axis |
| **Type energy** | quiet, one family, low contrast ⟷ expressive, high display/body contrast |
| **Graphic device** | geometric, constructed ⟷ organic, drawn, irregular |
| **Temperature** | cold, blue-grey, clinical ⟷ warm, paper, ochre |

**This is falsifiable, so verify it before presenting.** For each of the three pairs (A-B, A-C, B-C), name the axes on which they differ. If a pair differs on fewer than four, they are the same direction wearing different colors — throw one away and generate a genuinely different one. Show this check in the output as a short table; a reviewer must be able to see the divergence, not take your word for it.

Deliberate exception: if the intake constrains an axis hard (an existing logo fixes the graphic device, a regulated sector forbids a chromatic palette), say which axis is locked and why, then diverge on four of the remaining ones.

### → Stop 1
Present the three, state your recommendation and the reason in one sentence, and wait. Do not begin Step 3 on an unchosen direction.

## Step 3 — Define the brand core (before any visuals)
Produce, in the user's language:
1. **Name treatment** (casing rule for the wordmark) + **tagline** (short, ownable, ideally built on the brand's central metaphor).
2. **One central metaphor** that will run through copy, illustration, and motion. This is the spine of the brand; every later choice must be justifiable by it.
3. **Style name** — two or three words naming the aesthetic, so the direction is quotable.
4. **Positioning line**: for [audience], [brand] is the [category] that [differentiator].

## Step 4 — Tone of voice (be specific, not generic)
Never output "friendly but professional". Specify:
- Language and register (formal/informal address; person used).
- 4–6 concrete tone rules with EXAMPLES written in the brand's voice (a headline, a CTA, an error message, a metric claim).
- Casing rules (sentence case? mono uppercase labels? lowercase wordmark?).
- Punctuation micro-rules (em-dashes? "·" separators? emoji policy — default: none; exclamation policy).
- 5 words the brand uses often; 5 words it never uses.
- CTA style with 3 examples.

## Step 5 — Visual foundations
For each, give exact values, not adjectives:
- **Color**: a full neutral scale (9–11 steps, hex) + 1–2 accents (with dark-theme variants) + semantic roles (`--bg --surface --surface-2 --border --text --text-2 --muted --accent`) for light AND dark. State the **color discipline rule** — the places the accent may appear and, explicitly, the places it may not.
- **Type**: 2–3 real fonts (display/body/mono) with weights, tracking, line-heights, a hero clamp() size, and a scale.
- **Layout**: content max-width, side padding, section rhythm, nav height, divider strategy, and a reusable column grid (columns, gutter, margin, at least a mobile/desktop breakpoint) — not just numbers for one page, so the brand can be applied to new layouts (slides, mockups) without re-deriving them each time.
- **Radii + shadows**: an explicit radius scale and a shadow policy (ideally: one shadow, used once).
- **Texture/imagery policy**: what imagery exists (illustration style, photography rules, or explicit "none") and what is banned.
- **Iconography policy**: an icon set, or an explicit no-icon rule with alternatives.
- **Motion**: 3–5 named micro-interactions with durations/easings + `prefers-reduced-motion` respect.
- **Illustration/mark system**: one distinctive, ownable graphic device. Invent it for this brand; never reuse one from a reference package.

### Enforcement rules — write constraints, not adjectives

A rule a reviewer cannot fail an output against is not a rule. These are mandatory in every generated system:

- **Photography** shows the product or service *in use*, in its real context. Representational stand-ins are banned: stock handshakes, abstract gradients, unrelated lifestyle shots, anything that could illustrate any brand in the category. If the brand has no photography, write "no photography" and say what replaces it.
- **Texture stays ambient** — grain, dot-grid, paper at low opacity, sitting behind content. Never a literal pattern used as decoration or a filled motif tiling a surface.
- **Contrast is computed, not assumed.** Every text-on-background pair in the palette must be checked against WCAG AA — 4.5:1 for body, 3:1 for large text — and the ratios reported. Sample the actual hex values; do not eyeball a pair because "ink on paper is obviously fine". Any pair that fails is fixed before it ships, or documented as display-only with the sizes at which it is allowed.
- **The accent has a stated negative space.** "Accent for emphasis" is not a rule. Name the surfaces where it must never appear.
- **Every "never do" is testable.** "No pills, radii 6/8/16/20 only" passes; "clean and modern" does not.

### → Stop 2
Present the written system — core, tone, foundations — and wait for approval before producing the package in Step 6. This is the last cheap moment to change direction.

## Step 6 — Fill the brand pack

The deliverable is not a folder of documents: it is **an installable skill package**. The client installs it and their agent produces on-brand work on its own, without anyone re-explaining the brand. That is the thing being paid for.

Copy `templates/brand-pack/` to `<slug>-brand/`, drop the `.tmpl` extensions, and fill every `{{PLACEHOLDER}}`. A placeholder left in a shipped pack is a defect.

**Copy `scripts/` into the pack too.** The pack must be self-contained: the client rebuilds their own tokens after changing a colour, long after this skill is out of the picture. A pack that can only be rebuilt by whoever generated it is not a deliverable.

**Write `brand.json` first.** It is the single source of truth: colours, type, layout, radii, motion, voice, never-do list, and the explicit list of what the pack does *not* cover. Then generate everything derived from it:

```
python3 scripts/build_brand.py <slug>-brand/brand.json
```

That writes `tokens/*.css` and `tailwind.brand.js`, and runs the WCAG AA check on every semantic pair. **It exits non-zero on a failing pair and the pack does not ship red.** Either fix the colour, or — if a pair is genuinely display-only — rerun with `--allow-contrast-fail` and write the reason into the pack's README. Never edit a generated token file by hand: the next rebuild silently overwrites it and the pack starts disagreeing with itself.

Then the rest:
- `SKILL.md` — the entry point, so the pack is installable rather than merely readable.
- `README.md` — the full rulebook with the reasoning behind the rules.
- `prompts/BRAND-SYSTEM-PROMPT.md` — self-contained: enough to produce on-brand work with no other file.
- `guidelines.html` — the printable specimen, and the source of the PDF.
- A small **component inventory** (8–13 max: nav, hero, button, card, footer, badge/tag, quote, feature section), each with usage rules.
- `assets/` — see its README for what the script generates and what a human still has to draw.

### The logo

Generate the mark with whatever image tool is available, then **validate it — a generated logo is not a deliverable until it has been checked**:

```
python3 scripts/validate_logo.py <slug>-brand/assets/mark.png --out <slug>-brand/assets/
```

It rejects the common failure modes of image models — an opaque background instead of an alpha channel, a non-square canvas, wide transparent margins, a source too small for the largest size — and it shrinks the mark to 16px to see whether anything survives. Passing, it writes the eight PNG sizes.

What no script can judge: whether the mark is any good, whether it is original, and whether it reads as this brand. That stays yours. The SVG lockups, the reversed-on-dark version, clear-space and minimum size are hand work — and if clear-space has not been decided, write that it has not been, rather than inventing a number that will look authoritative.

## Step 7 — Ship

1. **PDF** — render `guidelines.html` (`html_to_pdf`, or the `pdf` skill). A4, one page per `<section class="page">`.
2. **ZIP** — the whole pack folder, so it is portable without git.
3. **Install instructions** — one line telling the client where to drop the folder so their agent picks it up.

Before handing over, check four things:

1. No `{{` left in any file, **and** no ALL-CAPS placeholder strings left in `brand.json` — the two use different conventions, so grepping for `{{` alone misses half of them.
2. The contrast table is green, or its exceptions are written down with a reason.
3. `scripts/` is inside the pack, so the client can rebuild without you.
4. The "not covered" list is honest rather than empty. An empty gap list is almost always a lie.

## Quality bar
- Every rule must be **falsifiable** (a reviewer can point at output and say "this violates rule X"). "Clean and modern" is not a rule; "no pills, radii 6/8/16/20 only" is.
- The system must be **coherent under the metaphor**: copy, motion, and illustration should all express the same idea.
- Fewer, stricter rules beat many loose ones. Include a "never do" list.
- Default to restraint: one accent, one shadow, no emoji — unless the reference demands otherwise.
- **Declare what you don't know.** If the material lacks something a deliverable normally has — logo clear-space, minimum size, a reversed-on-dark version, chart colors, legal boilerplate — say so explicitly instead of inventing a value that looks precise but isn't sourced.
