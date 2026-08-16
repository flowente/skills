---
name: flowente-brand
description: 'Use whenever the user wants to design, mock up, or write anything for Flowente (Milan applied-AI studio, "Il lavoro che scorre") — a UI screen, a slide/deck, a landing page, a one-pager, an image-generation prompt, or copy — so exact brand rules (hex colors, font weights, grid, radii, motion, logo, tone of voice) get applied automatically. Trigger proactively on brand consistency, "on-brand", or design-system questions about Flowente — do not wait for explicit naming. NOT for building a brand from a reference or for a brand other than Flowente — use `brand-forge` for that. Out of scope: social media templates.'
---

# Flowente Brand

Applies Flowente's own brand to any asset requested *for Flowente*: a UI mockup, a slide, a landing page, a component, an image-generation prompt, copy.

For a brand that is not Flowente — generating an identity from a reference, a client project — this is the wrong skill. Use `brand-forge`.

1. Read `prompts/BRAND-SYSTEM-PROMPT.md` first — it's a self-contained rulebook (color, type, layout/grid, illustration, motion, tone of voice, a "never do" list) written specifically so an AI can produce on-brand work from it alone.
2. For deeper detail on any one area, `README.md` is the superset, and `guidelines/*.html` are visual specimens (open them if you want to see the actual rendered swatches/type/grid rather than just reading hex codes).
3. For layout and grid work (slides, mockups, any new screen — not just the homepage), use `tokens/grid.css` (`.grid-wrap` / `.grid-row`, 12/8/4-column responsive grid) — this generalizes the site's fixed homepage measurements into something reusable. It's flagged in that file as a proposed addition, not something scraped from the live site, so sanity-check it against `ui_kits/website/index.html` if precision matters.
4. If building a UI screen or component, check `components/core/` and `components/site/` first — read the relevant `.prompt.md` before using or adapting a component. Don't invent new component variants outside this inventory; compose from these or plain HTML following the tokens.
5. `ui_kits/website/index.html` is the canonical reference for how everything hangs together (layout rhythm, motion, light/dark).
6. Assets: `assets/logo.svg`, `assets/wordmark.svg`, `assets/icon.svg`. Logo/wordmark clear-space and minimum-size rules are not documented in the source — if precise control over a small or cropped logo placement matters, flag this gap to the user rather than guessing a clear-space value.
7. **Do not build social media post templates or dimensions** — this is explicitly out of scope for this skill. If asked for a social asset, say so and ask what the user actually wants instead.
8. When producing a throwaway visual (mock, prototype, slide), output it as a static self-contained HTML file so it can be viewed directly. For production code, use the components/tokens as-is.

## Known gaps in the Flowente material (flag, don't silently fill in)
- No `DESIGN.md` — the source repo references a fuller rules doc that isn't in this package; `README.md` reconstructs what it can from tokens and components.
- No logo clear-space / minimum size / reversed-on-dark version.
- No data-visualization / chart color mapping.
- No English-language tone-of-voice guidance (source is Italian-only).
- No legal/contact boilerplate (company name, address, VAT, social handles) for footers or signatures.
- Color-contrast pairs aren't documented against WCAG AA (likely fine given ink/paper contrast, but unverified).
If a task needs one of these and the gap actually matters for the output, ask the user rather than inventing a value that will look precise but isn't sourced.

## Index
- `prompts/BRAND-SYSTEM-PROMPT.md` — self-contained system prompt for applying the brand
- `README.md` — full written rulebook for Flowente (superset of the system prompt)
- `tokens/` — fonts, colors, typography, spacing, grid, base utility classes
- `guidelines/` — visual specimen cards (colors, type, foundations incl. grid, brand)
- `components/core/`, `components/site/` — React components, see each `.prompt.md`
- `ui_kits/website/` — full homepage recreation, light/dark toggle
- `assets/` — logo, wordmark, favicon
- `github.md` — source repo association for the Flowente material
