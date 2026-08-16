---
name: brand-forge
description: 'Build a complete brand and design system from a reference the user provides — a screenshot, logo, moodboard, competitor site, manifesto, pitch, product description, or just a few adjectives. Use whenever the user asks to "create a brand", "make a design system from this", "brand my product", "build a style guide for X", or hands over a reference and wants a full identity: name treatment, tagline, central metaphor, tone of voice with examples, color/type/layout/motion foundations with exact values, and a deliverable package. Asks onboarding questions about purpose and tone whenever the reference does not answer them — it does not guess. NOT for applying an existing in-house brand you already have documented (use that brand''s own skill, e.g. `flowente-brand`). Out of scope: social media templates.'
---

# Brand Forge

Generates a brand that is **not** yours: a client identity, a product brand, a design system built from a reference.

If the job is applying a brand that already exists and is already documented in its own skill package, this is the wrong skill — use that one.

## How to run it

1. Read `references/brand-generator.md` in full before starting. It is the working method: ingesting the reference, defining the brand core (metaphor, tagline, positioning), tone of voice with concrete examples, visual foundations with exact values (not adjectives), and the deliverable file structure.

2. **Onboarding questions are not optional when the reference is thin.** Before committing to colors, fonts, or tone, make sure you actually know: what the brand is for and who it's for (its purpose — not just "a startup," but what it does and for whom), and the tone of voice it should have (formal/informal, technical/warm, playful/serious). If the reference doesn't make these clear on its own, ask — 3-5 sharp, specific questions, not a generic intake form. Only commit to visual and verbal choices once these are answered or the user says to just go with your best judgment.

3. If the reference is an image, extract colors programmatically from the actual pixels (sample the file, don't eyeball it) so the resulting hex codes are precise.

4. Be upfront about what can't be done reliably from an image alone: cloning an exact font (suggest the closest real, licensable family instead) and vectorizing a complex logo (redraw simple geometric marks in SVG; for anything more complex, write a precise brief instead of guessing).

5. Every generated brand needs its own distinct personality, metaphor, and rules. A reference calibrates the expected *depth*, never the aesthetic to copy.

6. Same scope limit as any brand skill here: don't produce social media templates/formats unless the user explicitly asks and you flag that it's outside this skill's normal scope.

## Quality bar

- Every rule must be **falsifiable** — a reviewer can point at output and say "this violates rule X". "Clean and modern" is not a rule; "no pills, radii 6/8/16/20 only" is.
- The system must be **coherent under the metaphor**: copy, motion, and illustration all express the same idea.
- Fewer, stricter rules beat many loose ones. Include a "never do" list.
- Default to restraint: one accent, one shadow, no emoji — unless the reference demands otherwise.

## Index
- `references/brand-generator.md` — the full working method, read it first
