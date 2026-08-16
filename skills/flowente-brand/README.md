# Flowente Design System

**Flowente** is a Milan-based applied-AI studio ("Studio di AI applicata"). Tagline: **"Il lavoro che scorre"** — work that flows. They turn slow processes into self-running flows: advisory, app development, and models in production. One product surface in the source: the **marketing website** (Next.js + Tailwind), which doubles as the brand's React design system — style name **"Flow / Kinetic Minimal"**.

## Sources
- GitHub: `flowente/flowente-site` @ `d5647493a08abf7f6a6619a2bbd1dd5c5a84a5f4`, subtree `flowente-site-clean/flowente-site/` — https://github.com/flowente/flowente-site . Tokens from `tailwind.config.ts` + `app/globals.css`; components from `components/*.tsx`; marks from `lib/marks.tsx`. Explore the repo for anything not captured here (the repo README references a fuller `DESIGN.md` not present in this subtree).

## Content fundamentals
- **Language: Italian.** All product copy is Italian; keep it Italian unless asked otherwise.
- **Voice**: first-person plural "noi" implied ("Trasformiamo i processi…"), addressing the reader as informal **tu** ("il tuo team").
- **Tone**: calm, concrete, anti-hype. Benefits over features, with measurability ("Misurabile dal primo mese", "−70% sul lavoro ripetitivo"). Short declaratives; sentence fragments allowed ("Niente dispersione.", "Zero dispersione.").
- **Casing**: sentence case everywhere; wordmark always lowercase "flowente"; mono labels UPPERCASE ("© 2026 FLOWENTE · MILANO").
- **Flow metaphor everywhere**: scorrere, flussi, senza attrito. Headlines often break mid-phrase with a muted connector word ("Il lavoro **che** scorre.").
- **No emoji.** Punctuation: em-dash for pivots, "·" as mono-label separator, curly „&ldquo;&rdquo;" for quotes, minus sign for metrics (−70%).
- CTAs are verbs/invitations: "Parliamone", "Come lavoriamo", "Scopri lo Studio".

## Visual foundations
- **Colors**: warm neutral Ink scale (#0B0B0C→#F5F5F2) + paper #FBFBF9. Single accent **Flow Blue #2540FF** (dark theme #3A55FF). Rule: **color only on the mark, shapes, and tag dots — never on buttons or text**. Semantic roles (`--bg --surface --surface-2 --border --text --text-2 --muted --accent`) switch via `[data-theme="dark"]`. Components use roles, never hex.
- **Type**: Space Grotesk (display, 600, tracking −0.03/−0.04em, line-height ~1) · Inter (body 400/500) · JetBrains Mono (meta/tags/legal, 0.64–0.7rem, often uppercase). Hero clamp(2.8rem→4.6rem).
- **Backgrounds**: flat paper; texture only as **dot-grid** (text @5%, 24px) hero panel and `--surface-2` rounded panels (radius 20px). No gradients, no photography, no imagery beyond the hand-drawn marks.
- **Illustration = Flow Marks**: hand-drawn strokes (coil/onde/flusso/onda/freccia) that "boil" — 3 SVG pencil-filter frames (feTurbulence+displacement, seeds 1/7/13) flipping every .12s. Composed as **MarkBadge**: solid accent shape (square/circle/triangle/blob, slightly rotated) behind an overflowing mark.
- **Motion**: slow & calm — page fade .7s ease; button hover micro-zoom scale(1.02) .18s; card hover −2px lift + `0 8px 30px rgba(11,11,12,.08)` (the ONLY shadow); links darken to `--text`. Everything respects `prefers-reduced-motion`.
- **Borders/layout**: 1px `--border` hairlines divide every section full-width; content column max 1160px, 40px side padding, ~88–96px section padding; nav 66px sticky with 88% bg + blur(12px).
- **Grid** (generalized, see caveats): 12 columns / 24px gutter / 40px margin on desktop, collapsing to 8 columns/1024px and 4 columns/640px — for any layout beyond the homepage (slides, mockups, new screens). Tokens in `tokens/grid.css`, utility classes `.grid-wrap` + `.grid-row`, specimen in `guidelines/layout-grid.html`.
- **Radii**: 6 default · 8 buttons · 10/14 panels · 16 cards · 20 large panels. No pills.
- **Buttons**: primary = ink fill on paper; ghost = hairline. Never Flow Blue, no arrows/icons.
- **Cards**: surface bg, 1px border, radius 16, mark thumbnail on surface-2, no resting shadow.

## Iconography
- **No icon system.** No icon font, no icon set, no PNGs. The only "icons" are: the knot logo mark, the Flow Marks (hand-drawn strokes), accent shapes, and a 6px Flow Blue dot before tags. Unicode ◐/◑ acceptable for utilitarian toggles. **Do not introduce Lucide/Heroicons etc.** — render labels as text.
- Assets copied: `assets/logo.svg` (knot mark), `assets/wordmark.svg` (full lockup), `assets/icon.svg` (favicon).

## Components (namespace `FlowenteDesignSystem_a30345`)
Core (`components/core/`): **SvgFilters** (required once per page), **FlowMark** (+ `Marks`), **AccentShape**, **MarkBadge**, **Button**, **Logo** (+ `LogoMark`).
Site (`components/site/`): **Nav**, **Hero**, **FeatureSection**, **Card**, **CardGrid**, **QuoteRow**, **Footer**.
This is the complete inventory from the source repo — no invented additions.

## Scope of this package
One job: **apply Flowente's own brand** to any asset requested for Flowente (UI, slides, copy, image-gen prompts). Read `prompts/BRAND-SYSTEM-PROMPT.md`; `SKILL.md` has the working order.

Generating a *new, unrelated* brand from a reference is a separate skill: **`brand-forge`**. It lived here as "Mode B" until it was split out, so that it could be distributed to clients without carrying Flowente's own material with it.

**Out of scope:** social media post templates/dimensions are explicitly excluded from this skill.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, grid, base utility classes `.btn .boil .dot-grid .page-fade`)
- `components/core/`, `components/site/` — see `*.prompt.md` per component
- `guidelines/` — specimen cards (colors, type, foundations incl. grid, brand)
- `ui_kits/website/` — full homepage recreation (`index.html`, light/dark toggle)
- `assets/` — logo, wordmark, favicon
- `prompts/BRAND-SYSTEM-PROMPT.md` — self-contained system prompt for applying the brand
- `github.md` — source repo association · `SKILL.md` — agent skill entry point

## Caveats
- Fonts load from **Google Fonts** (as the source site does via next/font); no font binaries are shipped. Provide .woff2 files if offline use is needed.
- The repo README mentions a `DESIGN.md` with the full rules; it is not in the provided subtree — this readme reconstructs the rules from tokens and components.
- **The grid is a generalization, not a scrape.** The source site only fixes numbers for the homepage (1160px / 40px padding). `tokens/grid.css` extrapolates a reusable 12/8/4-column grid from those numbers — verify against the live site if a task needs precision.
- **No logo clear-space, minimum size, or reversed/dark-background version documented.** Only the mark:wordmark ratio and the color rule are known. Flag this to the user if a task depends on exact logo placement.
- No chart/data-viz color mapping, no English-language tone-of-voice guidance, no legal/contact boilerplate (company name, address, VAT, social handles), and color-contrast pairs aren't verified against WCAG AA. None of these are guessed in this package — ask if a task genuinely needs them.
