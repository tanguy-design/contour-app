# Changelog

What changed in Contour, for people who use it. Internal refactors, tooling, and repo housekeeping are left out. Newest first.

## August 2026

- "Worth reviewing" cards were rebuilt to match the suggestion cards: same rail layout, same sentence style, so the two sections read as one system.
- A public accessibility statement (ACCESSIBILITY.md) now states plainly where Contour's accessibility stands.

## July 2026

### Colors from an image

- A "From an image" chip next to the color picker reads the dominant colors out of a photo and stages them in the input for you to edit before building. Everything runs locally in your browser; nothing is uploaded. HEIC and AVIF (iPhone photos) are supported.

### French goes live

- Visitors with a French browser locale now arrive in French, and a language picker sits in the standing chrome. The French copy is a native rewrite, not a translation pass.
- Family names are unique across both languages, so "Blue" and "Bleu" can no longer appear as twins on a French screen.

### The workspace becomes the front door

- The separate entry screen is gone: typing or pasting colors pours straight into the palette workspace, which is the single place you work. Families can be renamed in place. thecontour.app opens directly on it.
- Every palette has a shareable link. The URL mirrors your palette, including your review decisions, so a link reproduces the exact work. The browser Back button navigates palette to palette.
- Undo learned redo, and every action gives feedback; no edit is silently lost.
- New animated cone logo that blooms on load, now also the favicon, with a social preview card for shared links.
- Saved palettes appear as cards on the empty canvas, ready to reopen, and keep for 30 days.
- Below 960px the workspace is replaced by a palette glimpse and honest advice to come back on a larger screen; a shared link carries your palette along.

### The engine asks instead of deciding

- The dark-end hue bend became a choice. When a color loses its hue as it darkens (a yellow heading toward bronze or toward sage), Contour surfaces a "Losing its hue" card with Bend Warmer / Bend Cooler / leave as-is, each option previewing the exact shade it produces.
- Earth families got the same treatment: an "Earthy by nature" card offers a muted tinting model that holds the anchor's perceived character, or As-is. Gold gets "Metallic by nature".
- A neutral-tint card lets you choose how strongly the infused neutral carries its source color: Whisper, Soft, or Deep.
- The same input now always produces the same palette: two hidden random tiebreakers were removed, so reopening a shared link can no longer build a subtly different result.
- Your review answers persist across reload, undo, and drafts, and shared links no longer carry your answers into someone else's palette.

### Look and feel

- The app chrome went achromatic on a new token system, with frosted sticky headers, a new type scale, and a subtle grain texture. On the palette screen, the chrome (surfaces, text inks, borders, scrollbars) is painted with steps of your own generated neutral scale.
- The Feel control gained a half-starburst chart: each family rides a ray between Gathered and Natural, animating as you switch.
- "Worth exploring" suggestion cards were rebuilt from stacked fragments into single flowing sentences that weave together the reason, the relation to your palette, and the credited source work and artist, in both languages.
- An info dot next to each section label opens a plain-language description of that module.
- Colors accepted from suggestions wear their own square mark on the palette; your own typed colors keep the circle.
- "Organize colors" was renamed "Remix colors", with a blend icon: the mode mixes colors between families.
- Brand tooltips became natively anchored popovers that never get clipped, and undo notices show the shortcut as a real key cap (⌘Z).

### Faster, lighter, better on touch

- The initial download dropped from 403 KB to 124 KB gzipped.
- A large mobile and touch pass: content clears the notch, family notes became tappable disclosures, bigger touch targets, no more iOS zoom when renaming.
- Anchors became keyboard- and touch-accessible: clicking one opens the same options a drag would. The color picker and anchor menus work on iPad.
- A saved draft no longer auto-opens; a resume strip shows your palette and when you left it, next to "Start from scratch" and "Clear draft" (with undo).
- Fonts are self-hosted: no visitor IP goes to Google, and loading no longer blocks. Visitors without JavaScript see real content instead of an empty page.

### Correctness and hardening

- The color-vision simulation was rebuilt on the Brettel/Viénot/Mollon model with a wide-gamut Display-P3 pipeline, so wide-gamut swatches are simulated faithfully.
- Design-token export now produces a spec-correct DTCG 2025.10 file.
- Renaming a family no longer changes what gets suggested: suggestions and duplicate-blocking follow the family's underlying character, not its display name.
- The drift warning card names the actual drifting shade instead of blaming the wrong color.
- Classifier fixes: muddy browns no longer misread as Orange, and brown tints no longer render peach.
- Hostile pasted text can no longer freeze the app, corrupted local storage no longer breaks it, and palette data is no longer sent along with analytics.
- The public FAQ was rewritten end to end: collapsible answers, a one-line table of contents, and stale claims removed.

### Dark mode, color vision, and persistence

- Dark mode arrived on the palette screen, with a neutral scale tuned for clear surface separation.
- A color-vision picker previews your palette as seen with different color-vision deficiencies, Safari included.
- Your work persists: the palette is saved locally and survives the visit.
- Families whose rendered ramp drifts in hue from the input carry an explanatory note.
- A screen-reader and keyboard pass: proper landmarks, real list semantics, focus that survives view transitions, and clipboard copies announced to assistive tech.

## June 2026

### Worth reviewing

- Conflicts became a queue. Crowded, duplicated, or drifting input colors moved out of inline warnings into a dedicated "Worth reviewing" section: each card shows the clashing shades as a segmented dot, describes the situation in a sentence, offers a dropdown of resolutions with live preview, and a check to confirm.
- "Mode" was renamed "Feel".
- Shade tiles show an "N ×" badge when one brand color is shared by several shades.

### Suggestions grow a library

- "Worth exploring" was rebuilt around real, credited sources: artwork palettes with provenance, birds, national parks, transit systems, album covers, games, and more, matched perceptually and framed by need (contrast, role, gap, temperature).
- Accepted art pigments are credited on the swatch: "Color from {work} by {artist}".
- A source lens lets you choose which slice of the library suggestions draw from.
- Suggestion cards name the actual relationship: "Seen with your Blue in {work}", "Triadic with your Red".
- Better color names: #FF0000 reads Red, #FFA500 reads Orange, and Pink, Navy, Salmon, and Beige joined the vocabulary.
- A "your palette now feels complete" state appears when there is nothing left to suggest.
- A new Mist family catches pale, barely-chromatic cool colors, and brown suggestions stay brown.

### Structure and language

- The palette view was restructured into a sidebar and a palette column, with Share and Export pinned in the sidebar.
- Palette changes animate: adding and removing families, accepting suggestions, and the light/dark toggle transition instead of snapping.
- Every string moved to English/French dictionaries, laying the ground for the French release.
- Malformed share links fail safely, and a rare 4-second blank screen before the palette reveal was fixed.

## May 2026

- A quality overhaul: inline notices when typed colors are dropped, clipboard feedback, undo (⌘Z) for destructive actions, automatic session restore, and visible keyboard-focus outlines.
- Suggestions stopped being pure color-wheel math: nature pairings, well-known design-system palettes, semantic UI roles, and cultural references entered the mix, each with its own rationale.
- Dark-mode text was pulled below the halation glare threshold, and darker backgrounds spread further apart.

## April 2026

- Contour lands: an OKLCH color palette generator that turns a handful of brand colors into a full, structured palette.
