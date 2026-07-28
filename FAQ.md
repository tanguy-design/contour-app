# Contour: questions and answers

<!-- Maintainers: every answer here is checked against the code, not against the
     last time it was written, and it is in Contour's voice so passages can be
     lifted into help text and tooltips with light editing. If an answer ever
     stops matching the product, the product is right and this file is stale. -->

What the step numbers mean, why a color was ignored, where the suggestions come
from, what happens to an image you pick. If you would rather read it as a tour
than look things up, the [palette tool's page](./palette.md)
covers the same ground in order.

[The basics](#the-basics) · [Your data and privacy](#your-data-and-privacy) · [Colors in, colors out](#colors-in-colors-out) · [How a palette is built](#how-a-palette-is-built) · [Dark mode](#dark-mode) · [Neutrals](#neutrals) · [Families, conflicts, and names](#families-conflicts-and-names) · [Feel](#feel) · [Readability](#readability) · [Color vision](#color-vision) · [Suggestions](#suggestions) · [The small things](#the-small-things) · [What Contour does not do](#what-contour-does-not-do)

---

## The basics

<details>
<summary><strong>What is Contour?</strong></summary>

A small suite of design tools for the parts of design where what you see outruns what you compute. It begins with color. The first tool, Palette, is what this page is mostly about: you give it the colors you already have, and it expands each into a complete, readable twelve-step scale, keeps a dozen families feeling like one system, and stays honest about how every shade will be seen. A type scale tool is next.

</details>

<details>
<summary><strong>What makes Palette different from the hundred other palette tools?</strong></summary>

Most tools take each color on its own and darken it into a ramp. That falls apart the moment two colors sit close, say a red-orange and an orange: you get two near-identical ramps that fight. Contour starts from the opposite instinct. When two colors read as one, it folds them into a single family and runs the scale between them. Every color you add reshapes the whole, and the colors answer each other rather than ignoring one another.

</details>

<details>
<summary><strong>Do I need an account? Is it free?</strong></summary>

No account, and yes, free. There is no sign-up, no paywall, and no plan to upgrade to.

</details>

<details>
<summary><strong>Do I have to start from a blank page?</strong></summary>

No, and you rarely should. Paste the colors you already have and build from those. If you have only one color, start there. If you have nothing, press *Start somewhere* and let Contour suggest a place to begin.

</details>

<details>
<summary><strong>What do the step numbers mean, 100 through 1200?</strong></summary>

They describe a shade's job, not its raw lightness. **100** is always the shade nearest the background, the quietest. **1200** is always the highest-contrast text shade.

| Step | Light mode | Dark mode |
| --- | --- | --- |
| **100** | the palest | the darkest |
| **1200** | the darkest | the lightest |

The numbering flips because the background it sits against flipped too. The job each step does stays the same.

Step 600 in Teal is meant to read like step 600 in Red, which is the point of keeping them on one backbone.

</details>

<details>
<summary><strong>Why twelve steps?</strong></summary>

Twelve gives roughly one to two shades per readability tier, enough to carry a full range of surfaces and text weights without padding the scale with shades nobody would reach for.

</details>

---

## Your data and privacy

<details>
<summary><strong>Does anything I paste leave my browser?</strong></summary>

No. Your colors never leave the page. Nothing you paste is uploaded or stored on a server. The palette lives in your browser and nowhere else.

</details>

<details>
<summary><strong>What happens to an image I pick?</strong></summary>

It is read in this page and nowhere else. Contour has no upload, in the strongest sense: there is no code anywhere in it that can send a file, so the picture never leaves your device.

Nothing is kept either, not the file, not a copy, not a preview. The filename and the metadata are not merely discarded but never read, so the date, the camera, and any location the image carries are not looked at once.

What comes out the other side is a handful of color values, exactly as if you had typed them.

</details>

<details>
<summary><strong>Is the picture itself decoded by Contour?</strong></summary>

No. Contour reads the file's structure to check its size and shape before anything opens it, then hands the picture to your browser to decode. That is deliberate: the browser's decoder is sandboxed and kept patched by the people who wrote it. Contour will never ship a decoder of its own.

</details>

<details>
<summary><strong>Then how does a shared link work?</strong></summary>

The entire palette is encoded into the link itself, in the part after the `#`. Opening the link decodes it back into the same palette. Nothing about the palette was ever sent anywhere; the link carries it.

</details>

<details>
<summary><strong>Is there any tracking?</strong></summary>

There is anonymous, cookieless usage measurement (Umami): page views, referrer, browser, device type, and country. No cookies, no personal data, and nothing about the palettes you make or the images you open. Neither your colors nor your pictures are part of it.

It is also refusable, on purpose. The script loads from its own host rather than through Contour's domain, so any content blocker can turn it away, and it honors your browser's Do Not Track setting for anyone who does not run one. Undercounting is the right price for that.

</details>

<details>
<summary><strong>Where does my work go when I refresh?</strong></summary>

A draft of your work is kept in your browser's local storage for up to two weeks, so a refresh or a closed tab does not lose it. It holds only your own work, with no identifiers. You resume it from the *Saved palettes* strip at the foot of the input screen rather than being dropped back in automatically.

</details>

---

## Colors in, colors out

<details>
<summary><strong>What formats can I paste?</strong></summary>

Almost any. You can paste them on their own or buried inside JSON or YAML, and Contour will find them. One rule: fully opaque colors only. Anything with transparency is skipped.

| Format | Looks like |
| --- | --- |
| Hex | `#2a6ef5`, `2a6ef5` |
| `rgb()` / `hsl()` / `hwb()` | `rgb(42 110 245)`, `hsl(220 91% 56%)` |
| `oklch()` / `oklab()` | `oklch(0.6 0.17 258)` |
| `lab()` / `lch()` / `cmyk()` | `lch(52% 68 280)` |
| `okhsl()` / `okhsv()` | `okhsl(258 0.9 0.56)` |
| Wide gamut | `color(display-p3 0.16 0.43 0.96)` |
| Named | `rebeccapurple` |

</details>

<details>
<summary><strong>Can I pull colors from an image?</strong></summary>

Yes. *From an image*, beside the color picker, reads the dominant colors out of a PNG, JPEG, WebP, HEIC or AVIF and puts them in the field alongside anything else you have collected. They arrive as ordinary text, so you can edit them, add to them, or delete the ones you did not want before you build.

A file is refused rather than opened when it is:

- larger than **25 MB** on disk
- more than **40 megapixels**
- longer than **16,384 pixels** on either side
- built in a way Contour cannot read with certainty

Opening one of the first three is what would freeze the page. The fourth is the same caution applied to a file that will not describe itself.

</details>

<details>
<summary><strong>Can Contour read HEIC?</strong></summary>

Yes, wherever your browser can. HEIC is what an iPhone camera writes, and Safari reads it; Chrome and Firefox ship no decoder for it on any platform, including macOS. Contour says so when that is what happened, rather than leaving you to guess. Open the photo in Safari, or export it as a JPEG first.

</details>

<details>
<summary><strong>Why did it ignore one of my colors?</strong></summary>

Almost always because it was not fully opaque. Contour builds scales from solid colors; a semi-transparent value has no single shade to anchor.

</details>

<details>
<summary><strong>How do I export?</strong></summary>

Download the palette as W3C DTCG design tokens (2025.10), a single `palette.tokens.json` file ready to feed a design system. Every shade carries:

- its **OKLCH value**, as a structured color object
- an **sRGB hex fallback**, for consumers that cannot resolve the color space
- its **dark-mode twin**
- a note of **which shades were your brand colors**

Two more things travel with it:

- **Both background colors**, light and dark.
- **An alpha companion for every neutral step**: the same grey solved back into a translucent color, which reproduces the opaque step exactly over Neutral 100 and thins honestly over anything else, the way a border or a divider should.

CSS custom properties and Tailwind theme generators exist inside the engine but are not surfaced in the interface yet.

</details>

<details>
<summary><strong>How do I share a palette?</strong></summary>

Copy the link. The whole palette encodes into the URL, so the link reopens exactly what you made, with no account and no storage.

</details>

<details>
<summary><strong>Why is the share link so long?</strong></summary>

Because it stores each color as its full OKLCH value rather than a short hex. A bare hex would clamp wide-gamut color back to sRGB and quietly dull your vivid shades. The length is the price of a faithful round trip.

</details>

<details>
<summary><strong>Can I reopen a palette someone shared with me?</strong></summary>

Yes. Opening a Contour link decodes the palette straight into the editor. If a link is damaged, Contour tells you it could not decode and drops you at the input screen to start fresh.

</details>

<details>
<summary><strong>Can I undo?</strong></summary>

Yes. `Cmd` / `Ctrl` + `Z`, up to twenty steps back, and `Shift` with it to redo. Destructive edits like deleting a family are reversible.

Two things are deliberately left out of the undo history: **the Feel mode** and **neutral infusion**. Those are sticky settings, not edits, so undoing a structural change never silently reverts a mode you chose afterward.

</details>

---

## How a palette is built

<details>
<summary><strong>Why OKLCH instead of HSL or RGB?</strong></summary>

Because two shades that measure the same can read differently, and HSL will insist yellow and blue are equally bright at fifty percent lightness while your eyes disagree. Contour works in OKLCH, a perceptual space where lightness and chroma behave more like your eye expects. Hue holds instead of drifting, and lightness moves evenly.

</details>

<details>
<summary><strong>What is Display P3, and why do some colors look more vivid than usual?</strong></summary>

P3 is a wider gamut than sRGB, with more saturated primaries. Contour builds at P3 boundaries and only narrows a color back to sRGB when a plain hex demands it. On a P3 display, a vivid teal or blue can reach a chroma that sRGB simply cannot hold, so it looks richer than the same palette would elsewhere.

</details>

<details>
<summary><strong>Does OKLCH fix everything?</strong></summary>

No, and Contour does not pretend it does. OKLCH is close but not perfect, so several small corrections patch the errors it leaves behind.

The largest is the **Helmholtz-Kohlrausch adjustment**: equally-measured colors do not look equally bright, so a saturated blue reads darker than its number and a yellow reads lighter. Contour nudges each shade toward the brightness your eye actually reports.

There are gentler corrections too, for how hue drifts and how reds and blues shift in dim light.

</details>

<details>
<summary><strong>Why does one hue hold its color almost to white while another gives out sooner?</strong></summary>

Because gamut is not the same width at every lightness or every hue. Teal can stay chromatic almost to white; blue runs out earlier. Contour's chroma curves are gamut-aware, so each family follows what its own hue can actually sustain rather than a single fixed shape.

</details>

<details>
<summary><strong>The lightness of my shades is not evenly spaced. Why?</strong></summary>

The lightness backbone is not fixed. It shifts so the readability targets can be met for every chromatic family you brought, not just the forgiving ones. If one family needs the scale to sit a little darker to stay legible, the whole spine adapts so nothing is left behind. That is also what lets step 600 read the same across families.

</details>

<details>
<summary><strong>Why did my bright brand color get muted in the ramp?</strong></summary>

If the family is named for restraint, like Brown, Olive, Beige or Mist, that is on purpose.

A brown's dark anchor sits in a narrow slice of gamut where even a modest chroma is a large share of what is available. Reused at lighter steps, where the gamut is wide, that same share would blaze into vivid orange or peach. So earth-named families are capped: no shade may be louder than your own most chromatic anchor, and the palest steps ease down further still, because real tints wash out faster than a straight line.

Gold is treated differently. Its hue is pinned so dark gold keeps its olive-bronze character, while its chroma is still allowed to harmonize. Because that leaves its pale steps genuinely open, Gold gets its own card, *Metallic by nature*, with the same two answers the earth tones get.

</details>

<details>
<summary><strong>Which step does my own color land on?</strong></summary>

The one that costs the least to move it to. Contour matches your colors to steps with a monotone minimum-cost search: it keeps their lightness order intact, so a color you consider darker never ends up above a lighter one, and within that constraint it picks the arrangement that drifts each color least. Each pinned shade is then marked as kept exactly or gently adjusted, so you can see which of your colors survived untouched.

</details>

<details>
<summary><strong>Between two of my colors, how does the scale travel?</strong></summary>

In a straight line through the underlying color space rather than around the hue wheel. A teal-to-cyan family blends directly instead of swinging through green on the way.

</details>

---

## Dark mode

<details>
<summary><strong>Why does the dark neutral scale not go all the way to plain white?</strong></summary>

Halation. Bright text on a dark background blooms, a soft glow around the letters that is worse with astigmatism and after your eyes have adapted to the dark. Past a certain point, extra brightness stops buying legibility and only adds scatter. So the lightest dark-mode neutral stops just short of pure white, around a very light grey, where the gains have already saturated. It is a readability decision, not an oversight.

</details>

<details>
<summary><strong>Why is dark mode not just my light palette inverted?</strong></summary>

Because inversion lies. As brightness drops, hues drift and saturation refuses to stay put, so a flipped light scale would look wrong. Contour generates the dark scale on its own terms. It mirrors the readability of each shade's role, so a surface stays a surface and text stays text across modes, then compensates the perception shifts of dim light, which the light scale never needs. Same roles, honestly rebuilt.

Two of those shifts have names:

- The **Bezold-Brücke shift** slides perceived hue toward a few stable anchors as light drops, so Contour corrects each step against it.
- The **Purkinje shift** is the eye handing over from cones to rods, trading sensitivity in the reds for the blues. Reds are darkened and blues lifted to answer it.

</details>

<details>
<summary><strong>Why do my yellows go brown or green at the deep end?</strong></summary>

Because dark yellow is olive, and olive is where hues go to die.

Yellows and chartreuses that would turn muddy when darkened are rotated up to forty degrees toward a safer target, warm or sage, and given back the chroma that rotation frees. This happens at the deep end of both scales, not only in dark mode: light mode's deepest steps are dark too, and they mud just the same.

Where that rotation is large enough to change what the family reads as, it is offered under *Worth reviewing* rather than applied quietly, with both directions available.

</details>

<details>
<summary><strong>Why do the tier labels disappear in dark mode?</strong></summary>

The dark scale is resampled in a way that would make a stable, comparable label for each step unreliable. Rather than show a number Contour does not fully trust, it shows none in dark mode. The readability work still happens; the label is simply not displayed there.

</details>

---

## Neutrals

<details>
<summary><strong>What is the neutral family?</strong></summary>

The grey backbone of your palette, purpose-built rather than a color with its chroma set to zero. It is split into two zones, in both modes:

- a **dense band of surface shades**, for hierarchy
- a **wider band of text tiers**, for legibility

</details>

<details>
<summary><strong>Can my greys be tinted?</strong></summary>

Yes. Leave them untinted, or infuse any family in your palette into the neutral to make a warmer or cooler grey. The tint is even across hues, so infusing a green does not produce a louder grey than infusing a blue would; every hue lands on the same restraint per step, scaled gently by how vivid the source family is.

</details>

---

## Families, conflicts, and names

<details>
<summary><strong>What is a family?</strong></summary>

A group of your input colors that share one perceptual identity and one name, like Red or Teal. Contour sorts pasted colors into families by hue, using a soft membership rather than hard cutoffs, so a color near a boundary is weighed against both neighbors rather than snapped to one.

</details>

<details>
<summary><strong>Why did two of my colors merge into one family?</strong></summary>

Because they read as one. When a color sits close enough to a confident neighbor that its identity is ambiguous, Contour pulls it in rather than pretending a red-orange and an orange are two separate stories. The result is one family with the scale running between them, instead of two near-identical ramps competing for the same space.

</details>

<details>
<summary><strong>Why is Contour asking me to reconcile some colors?</strong></summary>

Because within a single family, two of your anchors either sit almost on top of each other, compete for the same slot, or one has drifted far from the rest. Those show up under *Worth reviewing* as *Reds read as one*, *Reds sit close* or *A Red pulls away*, with your family's own name in place of Red.

Four more cards are not clashes between your colors at all, but looks Contour would otherwise choose silently:

- *Loses its hue* appears when a family's deep steps cannot stay that hue, and asks which way they should go instead.
- *Earthy by nature* appears on browns, olives and other earth tones, whose pale steps Contour quiets down like a pigment mixed with white.
- *Metallic by nature* is the same question for Gold, whose pale steps can go two ways too.
- *Neutral, tinted with Blue* appears while your greys carry a family's tint, and offers how much of it they should carry.

All of them are recommendations. Each card shows what the alternative would look like, nothing is changed behind your back, and the note stays until you decide.

</details>

<details>
<summary><strong>What are my options when I reconcile?</strong></summary>

It depends on the card.

**Colors that crowd each other**

- **Blend them into one** merges them into a single anchor.
- **Leave them as-is** keeps them, and lets near-identical shades collapse onto a shared step, marked with an honest count.
- **Keep the first shade**, or the second, or the third, drops the rest. Past two shades this one is withdrawn, because a list of text rows cannot say which shade is which once there are several.

**A color that drifted**

- **Keep in Red** holds it where it is.
- **Move to Orange** sends it to a family that fits its hue better.

**A family losing its hue**

- **Bend it warmer** and **Bend it cooler** each carry a dot showing the exact shade the deep steps would become.
- **Leave it as-is** keeps the family's own hue all the way down, mud and all.

**An earth tone or a Gold**

- **Keep them muted** holds every shade at the anchor's own perceived saturation.
- **Leave them as-is** keeps the ramp untouched, vivid tints and all.

**Tinted greys**

- The choice is how much: **Barely**, **Softly**, or **Deeply tinted**.

Your own family names stand in for Red and Orange throughout, and on the cards that show dots, the dots are the two versions of the same shade.

Whatever Contour is already doing is the option shown as selected. It usually leads the list too, though not always: the tint strengths run quietest first, so Softly, the standing choice, sits in the middle.

</details>

<details>
<summary><strong>How are families named?</strong></summary>

By hue, with targeted rules for tonal regions. Most families take their name from where their hue lands.

On top of that, a handful of special names catch colors a plain hue label would misdescribe:

- **Salmon** for light red-oranges
- **Navy** for dark blues
- **Mist** for pale cool tints
- **Beige** for pale warm creams
- **Brown**, **Gold**, **Olive** and **Pink** for their own tonal characters

</details>

---

## Feel

<details>
<summary><strong>What does <em>Feel</em> do?</strong></summary>

It sets how much your colors negotiate their intensity. One control over the whole palette, rather than a slider per family.

| Mode | What it does |
| --- | --- |
| **Natural** | Each color speaks at its own volume. |
| **Balanced** | Only the loudest outliers are reined in. |
| **Grounded** | Everyone gathers around a shared intensity, as far as each color's own gamut allows. |

</details>

<details>
<summary><strong>What is the graph showing?</strong></summary>

The negotiation. Each dot is one chromatic family, read at its loudest shade, placed by how much the Feel modes can move it. A dot's trail is the room it has to move; a bare line with no trail means the modes cannot change it perceptibly. Switch modes and watch the dots travel: in *Grounded* they gather onto the inner arc, in *Natural* they spread to the ends of their trails.

</details>

<details>
<summary><strong>Why do some dots not move when I switch modes?</strong></summary>

Because those colors genuinely do not change. If a family's loudest shade shifts by less than the eye can notice across all three modes, its dot holds still on the inner arc and its ray stays bare. That is an honest zero, not a glitch. It is telling you *Feel* has no real leverage on that color.

</details>

<details>
<summary><strong>What are the arcs?</strong></summary>

- The **inner arc** is the gathered state, where every color lands under *Grounded*.
- The **outer arc** is the longest reach any color in your palette has.
- The **arc between them** marks the average reach of the colors that do move.

When the average happens to fall on one of the other two, Contour hides it rather than draw two lines on top of each other.

</details>

<details>
<summary><strong>Why is one color's dot sitting right on the inner arc in every mode?</strong></summary>

Because it does not negotiate. Either it is already at the shared intensity, or its own gamut leaves it no room to move. Its bare ray says the same thing.

</details>

---

## Readability

<details>
<summary><strong>Does Contour check contrast?</strong></summary>

Contour reports readability, and it is careful about the difference. It rates every shade against the background it will live on and labels it, but those labels are advisory.

They are not a conformance check against WCAG, APCA Silver or any accessibility standard, and Contour does not claim to guarantee contrast.

Treat the labels as guidance, then verify with real accessibility tools and real people before you ship. [Stark](https://www.getstark.co/for-designers/) is a good one.

</details>

<details>
<summary><strong>What do the labels mean?</strong></summary>

Seven tiers. They come from a perceptual measure of how a shade stands out against its background, not from a simple ratio.

| Tier | Roughly good for |
| --- | --- |
| **Effortless** | fine print, long body text |
| **Comfortable** | body text |
| **Legible** | large text, buttons |
| **Identifiable** | large headings, bold UI |
| **Noticeable** | borders, dividers |
| **Discernible** | subtle separators |
| **Indistinct** | decorative only |

Most legible at the top. What a tier is good for is a starting point, not a rule: a shade that carries body text on one background may not on another.

</details>

<details>
<summary><strong>Why words instead of a contrast ratio?</strong></summary>

Because a number would answer a question you have not asked yet. There is no such thing as a readable color, only a readable pairing: a shade that carries body text on one surface vanishes on another. So Contour rates each shade against the background you chose, and tells you the job it can do there. That is also why the background is yours to pick.

The measure underneath is APCA-derived rather than a plain ratio, because a ratio does not track how text actually reads, especially light-on-dark and at the extremes. It is calibrated to Contour's own tiers, so the numbers drive the labels but are not canonical APCA output.

</details>

<details>
<summary><strong>What is the <em>Readability on</em> control?</strong></summary>

It picks which background the readability labels are measured against. By default that is your lightest neutral surface; you can switch it to any of your other surface shades to see how the same palette reads on a different ground. It only changes the labels, not the palette itself, and it appears in light mode, since dark mode does not show tier labels.

</details>

---

## Color vision

<details>
<summary><strong>What is <em>Seen with Typical vision</em>?</strong></summary>

A simulation of color vision deficiencies. Switch it and the palette's colors are recolored to approximate how someone with that condition would see them. It covers seven, grouped by mechanism:

- **Anomalous trichromacy**: *Protanomaly*, *Deuteranomaly*, *Tritanomaly*
- **Dichromacy**: *Protanopia*, *Deuteranopia*, *Tritanopia*
- **Monochromacy**: *Achromatopsia*

</details>

<details>
<summary><strong>How accurate is it?</strong></summary>

Approximate, and honest about it. Each condition gets the model that suits it best:

- **Dichromacies** use the Brettel model from 1997.
- **Anomalous types** use the Machado model from 2009, at a representative mid severity.
- **Achromatopsia** is a true luminance greyscale.

Two limits are worth knowing. The anomalous types are shown at one fixed severity rather than a range, and because these models were derived from sRGB stimuli, wide-gamut input is an extrapolation. Explore with it, then verify with real tools and real people.

Only the palette colors are recolored, not the interface text around them.

</details>

<details>
<summary><strong>Why does Contour's simulation differ from my browser's DevTools?</strong></summary>

By design. DevTools apply one model to every condition and clamp to sRGB first. Contour picks the stronger model per condition and stays wide-gamut, so the two will not match exactly.

</details>

---

## Suggestions

<details>
<summary><strong>What is <em>Worth exploring</em>?</strong></summary>

Sourced color suggestions that fill real gaps in your palette. Each one is a color plus a reason it earns its place, drawn from a large body of real palettes rather than random generation.

</details>

<details>
<summary><strong>Where do the suggested colors come from?</strong></summary>

From real palettes across six subjects: *Art*, *Film & TV*, *Music*, *Nature*, *Games* and *Objects*. A seventh option, *Color theory*, drops the real-world corpus and computes harmonies directly instead.

Accepted picks that carry a real pigment keep their credit, so an anchor can read as coming from a specific work.

</details>

<details>
<summary><strong>What does <em>Pulling the best from All sources</em> mean, and the dropdown next to it?</strong></summary>

That is the source lens.

- *All sources* draws from everything.
- A single subject, say *Nature* or *Film & TV*, shows only that world's strongest picks.
- *Color theory* drops the real-world corpus and shows computed harmonies instead.

Each lens shows its best picks, not its full inventory, which is why the wording is *the best* rather than *all*.

Your choice is a personal preference, kept locally and never encoded in a shared link.

</details>

<details>
<summary><strong>What do the reasons on each suggestion mean?</strong></summary>

The first line is why the color is suggested, chosen by the sharpest need it serves.

| The line reads | Which means |
| --- | --- |
| **Balances your Teal** | it offers a complement |
| **Could be your success color** | it fills an uncovered UI role: success, warning, error or info |
| **Fills a gap** | it sits in an empty stretch of your hue range |
| **Adds a deeper, brighter, vivid, warmer or cooler note** | it extends a range your palette is short on |
| **Stands apart** | it breaks out of a palette that has clustered |

The lines below name the relationship and the source.

</details>

<details>
<summary><strong>How does it decide which suggestions to show?</strong></summary>

Two things are kept apart: how good a candidate is on its own, and how much your palette needs it.

A candidate's **confidence** blends four terms:

- whether it is a genuinely sourced color rather than a computed one
- how strong that source's signal is
- how well it sits with the colors you already have
- whether its hue can render vividly at all

Your palette's **demand** across the hue wheel then multiplies that confidence, so the same pigment scores higher when it lands on a real gap than when it crowds a corner.

The reason you are shown is the strongest need it serves, never the mechanism that found it.

</details>

<details>
<summary><strong>What does <em>Start somewhere</em> do on an empty palette?</strong></summary>

With no colors yet, there is no hue to reason from, so Contour seeds a random chromatic family to give the suggestion engine something to work with. Once that first color lands, the normal suggestions take over.

</details>

---

## The small things

<details>
<summary><strong>What is the faint texture behind everything?</strong></summary>

A fine grain, and it is made from your own palette rather than painted on top of it. The speckle is mixed from your neutral's ink and the surface it sits on, so it re-tints itself whenever the palette changes: infuse the greys with a blue and the grain cools with them. It is there to keep large flat areas from looking like empty space, nothing more.

</details>

<details>
<summary><strong>Can I turn the background off?</strong></summary>

There is no toggle for it. It carries no motion to quiet, and it sits far enough back that it never competes with the colors you are judging.

</details>

<details>
<summary><strong>What are the little circles on some swatches?</strong></summary>

They mark your brand colors, the shades you brought.

- A **fully filled** circle: the color was kept exactly.
- A **half-filled** circle: it was nudged slightly to fit the scale.
- A **count**, like `3 ×`: several near-identical brand colors collapsed onto this one shade.

</details>

<details>
<summary><strong>What is the changing line in the footer?</strong></summary>

A quiet fact about how color and vision behave, one picked per session. They are there to reward a glance, nothing more.

</details>

<details>
<summary><strong>Does the light and dark toggle follow my system?</strong></summary>

No. It is a preview toggle for your palette's two modes and defaults to light. The app's own chrome stays light on purpose, so the toggle is about the palette you are building, not the interface around it. Your export always carries both light and dark shades regardless of which one you are previewing.

</details>

<details>
<summary><strong>Why does it ask for a wider window?</strong></summary>

Because a palette is judged by comparison, and comparison needs the shades side by side. Squeezed into a phone's width they stack into a column, where two families you are trying to tell apart never share a screen. Rather than ship a cramped version of the thing, Contour steps aside below 960 pixels with a note. Your saved work is untouched and waits for a wider window.

</details>

<details>
<summary><strong>What languages does Contour speak?</strong></summary>

English, for now. A French translation is written and lives in the app, but the language picker is off until it has had a proper review pass, so every visitor gets English. When it comes on, the choice will follow your browser's language and stay switchable. That detection is a local read, with no geolocation and no network.

</details>

<details>
<summary><strong>Are there keyboard shortcuts?</strong></summary>

| Keys | What they do |
| --- | --- |
| `Cmd` / `Ctrl` + `Z` | Undo, up to twenty steps back |
| `Shift` + `Cmd` / `Ctrl` + `Z` | Redo |
| `Enter` | Submit the colors you have collected |
| `Shift` + `Enter` | Break a line instead, for laying a long list out yourself |
| `Esc` | Back out of whatever is open: closes a swatch's menu, cancels a rename without saving |

Clicking any swatch copies its `oklch()` value.

</details>

---

## What Contour does not do

<details>
<summary><strong>Guarantee accessibility.</strong></summary>

The readability labels and the color-vision simulation are advisory. They are good for exploring and catching obvious problems, but they are not a conformance check. Verify with dedicated tools and real people before you rely on a palette.

</details>

<details>
<summary><strong>Store anything for you.</strong></summary>

No account, no cloud, no saved library. Your work lives in your browser and in the links you copy. If you want a palette back later, keep its link.

</details>
