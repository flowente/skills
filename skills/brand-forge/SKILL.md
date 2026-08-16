---
name: brand-forge
description: 'Build a complete brand and design system from a reference the user provides — a screenshot, logo, moodboard, competitor site, manifesto, pitch, product description, or just a few adjectives. Use whenever the user asks to "create a brand", "make a design system from this", "brand my product", "build a style guide for X", or hands over a reference and wants a full identity: three divergent directions to choose from, then name treatment, tagline, central metaphor, tone of voice with examples, color/type/layout/motion foundations with exact values, and a deliverable package. Asks onboarding questions about purpose and tone whenever the reference does not answer them, and stops for approval before expensive work — it does not guess and it does not run straight through. NOT for applying an in-house brand that already has its own documented skill package — use that package instead. Out of scope: social media templates.'
---

# Brand Forge

Generates a brand that is **not** yours: a client identity, a product brand, a design system built from a reference.

If the job is applying a brand that already exists and is already documented in its own skill package, this is the wrong skill — use that one.

This package is brand-neutral by design: it ships no other company's identity, and nothing in it should name one. If a reference brand is needed as a depth benchmark, it is read from a separate installed package, never bundled here.

## Read this first

`references/brand-generator.md` is the working method — read it in full before starting. It carries the six steps, the divergence rule, and the enforcement rules. What follows here is only the shape of the run.

`references/layout-system.md` is the second mandatory read, before building **any** page or document. Colours, fonts and rules can all be right and the result still look amateur: what gives it away is proportion — a flat type scale, uniform gaps, lines too long, padding that ignores the size of the thing it pads.

## The shape of the run

1. **Intake** — ingest the reference, and ask about purpose, tone and **mandate** if it doesn't answer them.
2. **Three divergent directions** → **stop for a choice**. *Skipped when the mandate is formalisation.*
3. **Brand core, tone of voice, visual foundations** → **stop for approval**.
4. **Fill the pack** from `templates/brand-pack/`, generate what is derived, validate the logo.
5. **Ship** — PDF, ZIP, install line.

## What gets delivered

Not a folder of documents: **an installable skill package**. The client installs it and their agent produces on-brand work on its own, without anyone re-explaining the brand. That is what they are paying for.

`brand.json` is the pack's single source of truth. `tokens/*.css` and `tailwind.brand.js` are generated from it and never hand-edited — a rebuild would silently overwrite the edit and the pack would start disagreeing with itself.

```
python3 scripts/build_brand.py <pack>/brand.json      # tokens + Tailwind + contrasto
python3 scripts/validate_logo.py <pack>/assets/mark.png --out <pack>/assets/
```

Both are gates, not reports: they exit non-zero when the pack is not fit to ship. `build_brand.py` needs nothing but Python — a client must be able to rebuild their own pack without installing anything. `validate_logo.py` needs Pillow.

## The three rules that make it worth paying for

**Ask what the mandate is before working.** A reference containing a logo is ambiguous: new identity, partial lock, or formalisation of something already approved. If it is formalisation, the three directions are *wrong* — the client already chose, and offering alternatives ignores the brief. Never infer this from how polished the reference looks.

**Three directions, genuinely different.** When they apply: never present one, and never present three variations of the same idea — any two must differ on at least four structural axes (density, saturation, layout structure, type energy, graphic device, temperature). The method has the check: run it and show the result, so the divergence is visible rather than claimed.

**Two hard stops.** After the directions, and after the written system. Producing a full package on a direction nobody chose wastes the client's money and yours. The exception is an explicit non-interactive request (`--full`, `cost_ack=proceed`) — that waives the review stops, never the intake questions.

**Constraints, not adjectives.** Every rule must be one a reviewer can fail an output against. "Clean and modern" is not a rule; "no pills, radii 6/8/16/20 only" is. Contrast pairs get computed against WCAG AA by the build script, not assumed — and a failing pair blocks the pack.

**Proportion is judged before content.** A modular type scale with real contrast (a hero is 4–6× the body, not 2×), 45–75 characters per line, space inside a group smaller than space between groups, section rhythm that varies with importance, padding proportional to the component. These are in `references/layout-system.md` and they are not taste — they are the difference between a deliverable and a filled-in template.

**Look at what you ship.** Never hand over a visual deliverable you have not rendered and viewed. A page count, a passing build and a clean grep prove a file exists, not that it is any good — that is how a PDF goes out with the wrong font, no margins and the logo missing. Render at 1440 and 390, read the screenshots, fix, look again. When a shape or composition is uncertain, render two or three variants side by side and choose by looking instead of guessing in code.

## Standing limits

- If the reference is an image, extract colors programmatically from the actual pixels — don't eyeball hex codes.
- Be upfront about what can't be done from an image alone: cloning an exact font (name the closest licensable family instead) and vectorizing a complex logo (redraw simple geometric marks; write a precise brief for anything harder).
- A reference calibrates the expected *depth*, never the aesthetic to copy. Every brand gets its own personality, metaphor, and rules.
- Declare what you don't know rather than inventing a precise-looking value — logo clear-space, minimum size, chart colors and legal boilerplate are the usual gaps.
- Don't produce social media templates or formats unless explicitly asked, and flag that it's outside this skill's normal scope.

## Index
- `references/brand-generator.md` — the full working method, read it first
- `references/layout-system.md` — spacing and proportion, read it before building anything
- `templates/brand-pack/` — the skeleton to copy and fill (`.tmpl` files lose the extension)
- `scripts/build_brand.py` — brand.json → tokens, Tailwind, contrast gate
- `scripts/validate_logo.py` — logo checks + the eight PNG sizes
