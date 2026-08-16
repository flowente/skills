---
name: brand-design-system
description: 'Use whenever the user wants to design, mock up, or write anything for Flowente (Milan applied-AI studio, "Il lavoro che scorre") — a UI screen, a slide/deck, a landing page, a one-pager, an image-generation prompt, or copy — so exact brand rules (hex colors, font weights, grid, radii, motion, logo, tone of voice) get applied automatically. Also use when the user gives an external reference (screenshot, logo, moodboard, competitor site, manifesto, product description) and wants a new brand/design system built from it ("brand this", "make a style guide like Flowente but for X") — the generator mode matches Flowente-level depth and asks onboarding questions when purpose or tone is unclear. Trigger proactively on brand consistency, "on-brand", or design-system questions — do not wait for explicit naming. Out of scope: social media templates.'
---

# Brand Design System

This skill has two modes. Figure out which one applies before doing anything else.

## Mode A — Apply the Flowente brand
Use this whenever the ask is to produce an asset *for Flowente itself*: a UI mockup, a slide, a landing page, a component, an image-generation prompt, copy, etc.

1. Read `prompts/BRAND-SYSTEM-PROMPT.md` first — it's a self-contained rulebook (color, type, layout/grid, illustration, motion, tone of voice, a "never do" list) written specifically so an AI can produce on-brand work from it alone.
2. For deeper detail on any one area, `README.md` is the superset, and `guidelines/*.html` are visual specimens (open them if you want to see the actual rendered swatches/type/grid rather than just reading hex codes).
3. For layout and grid work (slides, mockups, any new screen — not just the homepage), use `tokens/grid.css` (`.grid-wrap` / `.grid-row`, 12/8/4-column responsive grid) — this generalizes the site's fixed homepage measurements into something reusable. It's flagged in that file as a proposed addition, not something scraped from the live site, so sanity-check it against `ui_kits/website/index.html` if precision matters.
4. If building a UI screen or component, check `components/core/` and `components/site/` first — read the relevant `.prompt.md` before using or adapting a component. Don't invent new component variants outside this inventory; compose from these or plain HTML following the tokens.
5. `ui_kits/website/index.html` is the canonical reference for how everything hangs together (layout rhythm, motion, light/dark).
6. Assets: `assets/logo.svg`, `assets/wordmark.svg`, `assets/icon.svg`. Logo/wordmark clear-space and minimum-size rules are not documented in the source — if precise control over a small or cropped logo placement matters, flag this gap to the user rather than guessing a clear-space value.
7. **Do not build social media post templates or dimensions** — this is explicitly out of scope for this skill. If asked for a social asset, say so and ask what the user actually wants instead.
8. When producing a throwaway visual (mock, prototype, slide), output it as a static self-contained HTML file so it can be viewed directly. For production code, use the components/tokens as-is.

## Mode B — Generate a new brand from a reference
Use this whenever the user hands you something that is *not* Flowente — an image, a logo, a moodboard, a competitor site, a manifesto, a product description — and wants a brand or design system built from it.

1. Read `prompts/SKILL-BRAND-GENERATOR.md` in full before starting. It walks through: ingesting the reference, defining the brand core (metaphor, tagline, positioning), tone of voice with concrete examples, visual foundations with exact values (not adjectives), and the deliverable file structure (mirrors this package: README, tokens, assets, component inventory, a standalone system prompt).
2. **Onboarding questions are not optional when the reference is thin.** Before committing to colors, fonts, or tone, make sure you actually know: what the brand is for / who it's for (its purpose — not just "a startup," but what it does and for whom), and the tone of voice it should have (formal/informal, technical/warm, playful/serious). If the reference doesn't make these clear on its own, ask — 3-5 sharp, specific questions, not a generic intake form. Only commit to visual and verbal choices once these are answered or the user says to just go with your best judgment.
3. If the reference is an image, extract colors programmatically from the actual pixels (sample the file, don't eyeball it) so the resulting hex codes are as precise as Flowente's. Be upfront about what you can't do reliably from an image alone: cloning an exact font (suggest the closest real, licensable family instead) and vectorizing a complex logo (redraw simple geometric marks in SVG; for anything more complex, write a precise brief instead of guessing).
4. Flowente is the quality benchmark and template structure for this mode — never the aesthetic to copy. Every generated brand needs its own distinct personality, metaphor, and rules.
5. Same scope limit as Mode A: don't produce social media templates/formats unless the user explicitly asks and you flag that it's outside this skill's normal scope.

## Known gaps in the Flowente material (flag, don't silently fill in)
- No `DESIGN.md` — the source repo references a fuller rules doc that isn't in this package; `README.md` reconstructs what it can from tokens and components.
- No logo clear-space / minimum size / reversed-on-dark version.
- No data-visualization / chart color mapping.
- No English-language tone-of-voice guidance (source is Italian-only).
- No legal/contact boilerplate (company name, address, VAT, social handles) for footers or signatures.
- Color-contrast pairs aren't documented against WCAG AA (likely fine given ink/paper contrast, but unverified).
If a task needs one of these and the gap actually matters for the output, ask the user rather than inventing a value that will look precise but isn't sourced.

## Index
- `prompts/BRAND-SYSTEM-PROMPT.md` — Mode A system prompt (apply Flowente's own brand)
- `prompts/SKILL-BRAND-GENERATOR.md` — Mode B system prompt (build a new brand from a reference)
- `README.md` — full written rulebook for Flowente (superset of the Mode A prompt)
- `tokens/` — fonts, colors, typography, spacing, grid (new), base utility classes
- `guidelines/` — visual specimen cards (colors, type, foundations incl. the new grid, brand)
- `components/core/`, `components/site/` — React components, see each `.prompt.md`
- `ui_kits/website/` — full homepage recreation, light/dark toggle
- `assets/` — logo, wordmark, favicon
- `github.md` — source repo association for the Flowente material
