# Contour: the palette tool

**A color palette builder that takes perception seriously.**

Give it the colors you already have. It builds each into a complete, readable scale, keeps a dozen families feeling like one system, and stays honest about how every shade will be seen.

> Part of [Contour](./README.md). Try it at [thecontour.app](https://thecontour.app/).
>
> This page is why the tool exists and what using it feels like. For how any of it works, or any question with a definite answer, the **[FAQ](./FAQ.md)** is the reference.

## Contents

- [At a glance](#at-a-glance)
- [Why Contour exists](#why-contour-exists)
- [Start with the colors you have](#start-with-the-colors-you-have)
- [Every shade earns its place](#every-shade-earns-its-place)
- [Honest about how it's seen](#honest-about-how-its-seen)
- [Dark mode, rebuilt](#dark-mode-rebuilt)
- [Families that belong together](#families-that-belong-together)
- [Worth exploring](#worth-exploring)
- [Take it with you](#take-it-with-you)
- [Simple, not simplistic](#simple-not-simplistic)

## At a glance

| Step | What happens |
| --- | --- |
| **[Start](#start-with-the-colors-you-have)** | Paste colors in almost any format; they sort into perceptual families you can rearrange. |
| **[Review](#start-with-the-colors-you-have)** | Reconcile colors that read as one, sit too close, or drift too far. |
| **[Build](#every-shade-earns-its-place)** | Readable twelve-step OKLCH scales, with dark mode built separately rather than inverted. |
| **[Check](#honest-about-how-its-seen)** | Rate every shade against the background it will live on, and see the palette through simulated color vision deficiencies. |
| **[Tune](#families-that-belong-together)** | One Feel control sets the palette's intensity; a tinted neutral scale ties it together. |
| **[Extend](#worth-exploring)** | Sourced suggestions fill real gaps, from art, film, music, nature, games, objects, or color theory. |
| **[Export](#take-it-with-you)** | Download DTCG design tokens, or share the whole palette as a link. |

## Why Contour exists

Yes, this is another color palette tool, and there are a million of them. This one exists because none of the others did the thing it was built for: start from the colors you already have.

You rarely design a palette from a blank page. More often you inherit a product with no real palette, just a few brand colors you cannot throw away, and you have to build from those.

Most tools take each brand color on its own and darken it into a ramp. That falls apart the moment two colors sit close, say a red-orange and an orange: you get two near-identical ramps that fight, and neither earns its place. Contour starts from two ideas instead:

- **Rationalize what you have.** When two colors are close enough to read as one, Contour folds them into a single family and runs the scale between them, instead of pretending they are two.
- **Faithful, and in tune.** Each family stays as close as it can to your original color while still working with the rest. A palette here is not a stack of independent ramps: every color you add reshapes the whole, and the colors answer each other.

That founding case is a palette you inherit, but nothing about the engine needs one. Start from a single color, or from nothing and let Contour suggest a place to begin. It builds out around whatever you give it.

Getting that right means paying attention to how color is seen. Two shades that measure the same can read differently, and HSL will insist yellow and blue are equally bright at fifty percent lightness while your eyes disagree. So Contour works in [OKLCH](https://bottosson.github.io/posts/oklab/), a perceptual space where lightness and chroma behave more like your eye expects than HSL ever did.

Everything runs in your browser. No account, and nothing you bring it leaves the page, colors and pictures alike. The [FAQ](./FAQ.md#your-data-and-privacy) sets out exactly what that means.

The rest of this page follows the same path your colors take: in the door, into scales, checked against real eyes, tuned as one system, extended where it helps, and out again as tokens.

## Start with the colors you have

**Paste them in almost any format.** Hex, `rgb()`, `oklch()`, `lab()`, `color(display-p3 …)`, named colors, on their own or buried in pasted JSON or YAML. Contour finds them. Fully opaque colors only. ([Every format it takes](./FAQ.md#colors-in-colors-out).)

**Or read them off a picture.** *From an image*, beside the color picker, pulls the dominant colors out of a PNG, JPEG, WebP, HEIC or AVIF and stages them in the field as ordinary text you can still edit before you build. The file is decoded in the page and never uploaded. ([Formats, limits, and why an iPhone photo may not open](./FAQ.md#colors-in-colors-out).)

**Watch them sort themselves.** Colors are grouped by how the eye reads their hue, into families like Red, Blue, and Green, using soft Gaussian membership rather than hard wheel slices. That leaves room for the ones simple wheels get wrong: **Gold, Salmon, Beige, Olive, Navy** and friends are handled as their own families instead of collapsing into the nearest primary.

**Arrange the grouping.** Rename families, create new ones, drag a color between them, or drop it entirely. When a color sits on the border between two families, Contour flags it rather than guessing silently.

**Reconcile the close calls.** When colors *read as one*, *sit too close* to share a slot, or have *drifted too far* from their family, Contour surfaces them under **Worth reviewing**, along with four looks it would otherwise choose silently: a family *losing its hue* in the dark, the pale steps of an *earthy* family or a *metallic* Gold, and how much tint your *neutrals* carry. Each card shows what the alternative would look like, and nothing changes until you decide. Near-identical colors that cannot each hold a distinct step collapse onto one shade, marked with an honest `N ×` count. ([What each card offers](./FAQ.md#families-conflicts-and-names).)

## Every shade earns its place

Once the families are settled, each becomes a twelve-step ramp, lightest to darkest. Shaped in OKLCH rather than HSL, lightness moves evenly to the eye and hue holds instead of drifting or washing out at the ends. Wide-gamut color stays in Display P3, narrowed to sRGB only where a plain hex needs it.

Your original colors are not lost in the process: each is pinned to its step and marked as kept exactly or gently adjusted.

## Honest about how it's seen

A scale is only as good as it reads. This is the part the header promises: staying honest about how every shade will be seen, on a real background, by real eyes.

**Rated against your background.** Each step carries a readability label in plain words, from *Indistinct* at the decorative end through to *Effortless*, the one you would set long body text in. They are measured against the background you choose: pick any swatch as that ground and the whole scale re-rates against it. ([What each tier is good for](./FAQ.md#readability).)

> These labels are advisory guidance, not a claim of conformance with WCAG or APCA. When you need a formal check, reach for a dedicated contrast tool such as [Stark](https://www.getstark.co/for-designers/).

Readability is derived from [APCA](https://github.com/Myndex/apca-w3) (Accessible Perceptual Contrast Algorithm) by Andrew Somers / Myndex, adapted for Contour's advisory tiers rather than reproducing APCA's exact output. See [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).

**Aligned across families.** The tiers line up across the palette. Each label comes from a step's lightness alone, not its hue, so a color's natural glow or gloom never shifts its tier. Step 600 reads the same in Teal as in Red, so you can drop a shade into a component slot and trust it to match its counterpart in every family.

**Seen through other eyes.** Around one in twelve men and one in two hundred women see color differently. A *Seen with* picker re-renders the whole palette under seven kinds of color vision deficiency, grouped by mechanism: anomalous trichromacy (protanomaly, deuteranomaly, tritanomaly), dichromacy (protanopia, deuteranopia, tritanopia), and monochromacy (achromatopsia). Only the colors themselves are recolored; labels and controls stay legible while you compare, so you can tell at a glance whether two families still read as different or have quietly become the same.

> An approximate simulation. Explore, then verify with real tools and real people.

## Dark mode, rebuilt

Dark mode is not the light scale turned upside down. As brightness drops, hues drift, saturation refuses to stay put, and a yellow that was cheerful in daylight turns to mud. So Contour builds the dark scale on its own terms, mirroring each shade's *role* rather than its value: a surface stays a surface and text stays text, while the colors themselves are re-derived for an eye that has adapted to the dark. ([The corrections it applies, and why yellows are the hard case](./FAQ.md#dark-mode).)

## Families that belong together

A red and a blue at the same step should carry the same weight, not one shouting while the other whispers. A single **Feel** control moves the palette along a *Quiet to Loud* axis:

| Mode | What it does | A good fit for |
| --- | --- | --- |
| **Natural** | Every color keeps its own intensity, quiet or bold | marketing sites, creative work |
| **Balanced** | Colors keep their voice; outliers are gently pulled back | product interfaces |
| **Grounded** | Colors gather around a shared intensity, as far as each hue allows | data-heavy work |

Grays are built in two zones, in both modes: a dense band of background surfaces and a wider band of text tiers, split at a real legibility threshold rather than evenly, so nothing muddies together. Leave them untinted, or **infuse** any family in your palette for a warmer or cooler gray.

## Worth exploring

Contour can suggest colors to add, and it is careful about why.

It reads your palette as a field of *needs* across the hue wheel: a step that will not read on your background, an unfilled UI role, a gap between hues, a temperature it is short on. Those needs weight the suggestions, so a real hole pulls harder than a crowded corner. The candidates are drawn from a corpus of real palettes and scored, not conjured.

**Pull from everything, or from one medium:**

`Art` · `Film & TV` · `Music` · `Nature` · `Games` · `Objects` · `Color theory`

Every suggestion is honest about itself. It says which gap or role it fills, why it belongs near your colors, and where it came from, crediting the work and the artist when they are known. When your palette is nearly empty, it offers a place to start. ([How a suggestion is chosen](./FAQ.md#suggestions).)

Every source in the corpus is openly licensed (MIT or CC0), and the work names are used only to say what a palette is drawn from. See [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md).

## Take it with you

**Export design tokens.** Download the palette as [W3C DTCG](https://www.designtokens.org/) design tokens in a JSON file, ready to feed a design system. Both backgrounds come with it, and the neutral scale arrives twice: once opaque, and once as alpha companions for the borders, dividers, and shadows that should thin rather than sit flat. ([What a token carries](./FAQ.md#colors-in-colors-out).) The engine also has CSS and Tailwind generators, not yet surfaced in the interface.

**Share a link.** The address bar always *is* your palette: the whole thing encodes into the URL as you work, so copying it from the address bar shares exactly what is on screen. The link is a complete snapshot, decisions included, so whoever opens it sees the palette you settled on rather than being asked your questions again. Reopening your own link resumes your work. No account, no storage.

**Work without fear.** Destructive actions are reversible, and work in progress survives a refresh: recent palettes come back under *Saved palettes* on the empty canvas. ([How far undo reaches](./FAQ.md#colors-in-colors-out), [how long a draft keeps](./FAQ.md#your-data-and-privacy), and [the shortcuts](./FAQ.md#the-small-things).)

## Simple, not simplistic

All of that machinery does a lot of work, and none of it is in your face. The complexity lives in the engine; the surface stays calm and clear. One control sets the palette's feel, where another tool would hand you a wall of sliders. Contour resolves what it safely can on its own and shows you only the decisions that are genuinely yours to make. It does the heavy lifting quietly, and asks, gently, when it should.

Now and then it offers a quiet fact about how color and vision behave.

> Every color you see is a guess. Three types of cone, a lifetime of context, and your brain deciding what must be true.
