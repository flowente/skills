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

## The shape of the run

1. **Intake** — ingest the reference, and ask about purpose and tone if it doesn't answer them.
2. **Three divergent directions** → **stop for a choice**.
3. **Brand core, tone of voice, visual foundations** → **stop for approval**.
4. **Package**.

## The three rules that make it worth paying for

**Three directions, genuinely different.** Never present one. And never present three variations of the same idea — any two directions must differ on at least four structural axes (density, saturation, layout structure, type energy, graphic device, temperature). The method has the check: run it and show the result, so the divergence is visible rather than claimed.

**Two hard stops.** After the directions, and after the written system. Producing a full package on a direction nobody chose wastes the client's money and yours. The exception is an explicit non-interactive request (`--full`, `cost_ack=proceed`) — that waives the review stops, never the intake questions.

**Constraints, not adjectives.** Every rule must be one a reviewer can fail an output against. "Clean and modern" is not a rule; "no pills, radii 6/8/16/20 only" is. Contrast pairs get computed against WCAG AA, not assumed.

## Standing limits

- If the reference is an image, extract colors programmatically from the actual pixels — don't eyeball hex codes.
- Be upfront about what can't be done from an image alone: cloning an exact font (name the closest licensable family instead) and vectorizing a complex logo (redraw simple geometric marks; write a precise brief for anything harder).
- A reference calibrates the expected *depth*, never the aesthetic to copy. Every brand gets its own personality, metaphor, and rules.
- Declare what you don't know rather than inventing a precise-looking value — logo clear-space, minimum size, chart colors and legal boilerplate are the usual gaps.
- Don't produce social media templates or formats unless explicitly asked, and flag that it's outside this skill's normal scope.

## Index
- `references/brand-generator.md` — the full working method, read it first
