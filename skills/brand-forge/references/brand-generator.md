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

## Step 6 — Deliverables (this list is the package structure)
Produce the brand as files:
- `README.md` — the full rulebook: fundamentals, visual foundations, iconography, components, caveats.
- `styles.css` + `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/grid.css` — working CSS custom properties, light + dark, including the reusable column grid.
- `assets/` — logo/wordmark as SVG if generatable, otherwise precise briefs for a designer.
- A small **component inventory** (8–13 components max: nav, hero, button, card, footer, badge/tag, quote, feature section) each with usage rules.
- Specimen cards or one HTML sample page proving the system hangs together.
- `BRAND-SYSTEM-PROMPT.md` — a standalone system prompt that lets any AI produce on-brand work without other context: package map, color rules, type, layout, illustration, motion, tone with examples, and a final "never do" list.

## Quality bar
- Every rule must be **falsifiable** (a reviewer can point at output and say "this violates rule X"). "Clean and modern" is not a rule; "no pills, radii 6/8/16/20 only" is.
- The system must be **coherent under the metaphor**: copy, motion, and illustration should all express the same idea.
- Fewer, stricter rules beat many loose ones. Include a "never do" list.
- Default to restraint: one accent, one shadow, no emoji — unless the reference demands otherwise.
- **Declare what you don't know.** If the material lacks something a deliverable normally has — logo clear-space, minimum size, a reversed-on-dark version, chart colors, legal boilerplate — say so explicitly instead of inventing a value that looks precise but isn't sourced.
