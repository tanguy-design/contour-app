# Accessibility statement

Contour is built to be usable by everyone, and this page says plainly where that stands. It covers the application itself: the workspace, its controls, its documentation. What Contour's readability labels claim about *your* colors is a separate question, answered honestly in the [FAQ](./FAQ.md#readability).

This is a self-assessment. Contour has not been audited by a third party.

## The target

Contour aims for **WCAG 2.1 AA** across the application. Today it is partially conformant: the measures below are in place, the limitations below are known, and the gap between the two is worked on as it is found.

## What is in place

These are standing rules of the codebase, not aspirations:

- **Semantic HTML first.** Native elements before ARIA: real buttons, real selects, real labels, landmarks a screen reader can navigate.
- **Everything works with a keyboard.** Every pointer interaction has a keyboard path, including moving a color between families, which offers a menu where the pointer offers a drag. Focus is visible everywhere, and a skip link jumps straight to the content, or on the empty canvas straight into the color field.
- **Announcements reach assistive tech.** Outcomes flash through a polite live region, controls carry accessible names that match their visible labels, and decorative graphics are hidden from the accessibility tree.
- **Motion respects your settings.** Under `prefers-reduced-motion`, animations are removed or rest in their final state; nothing meaningful is carried by motion alone.
- **High contrast is treated as a mode, not an accident.** Under Windows High Contrast / forced colors, controls keep their borders, color swatches remain data, and separators that exist in the default theme exist there too.
- **Touch targets hold 42px**, comfortably past the WCAG minimum, and the interface stays usable at 200% zoom.
- **Color is never the only cue.** Readability tiers are words, states are labeled, and the color-vision simulation recolors only the palette being examined, never the controls around it.
- The interface ships in English and French, translated for tone as well as words.

## Known limitations

Stated as facts, not apologies:

- **The workspace needs a window at least 960 pixels wide.** On smaller screens Contour shows a gate explaining this rather than a degraded workspace. A phone is not a supported place to build a palette today.
- **The color-vision simulation is approximate by nature.** It is framed in-app as something to explore and then verify with real tools and real people.
- **The readability labels on your colors are advisory.** They are not a WCAG or APCA conformance check, and the [FAQ](./FAQ.md#readability) explains exactly what they are instead.
- Some of the palette's richer visuals (the gradient strands, the swatch grid) are dense by design; their information is always also available as text.

## Feedback

An accessibility problem in Contour is a bug. [Open an issue](https://github.com/tanguy-design/contour-app/issues) and say what assistive technology or setting was involved; it will be treated with the same seriousness as any other defect. For anything you would rather not post publicly, the [security advisory form](https://github.com/tanguy-design/contour-app/security/advisories/new) reaches the maintainer privately.

## Scope and review

This statement covers the Contour application at [thecontour.app](https://www.thecontour.app/) and the documentation in this repository. Last reviewed: July 2026. It is revisited when the application changes in ways that affect it.
