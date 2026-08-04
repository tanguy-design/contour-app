<div align="center">

# Contour

**Design tools that take perception seriously.**

Brand systems look right in the guidelines and lose some of their character when they reach real interfaces. Contour carries it through by extending what is already there instead of redesigning it, and stays clear about what it can and cannot infer. It begins with color. Cadence is next.

[![License: PolyForm Perimeter 1.0.1](https://img.shields.io/badge/license-PolyForm%20Perimeter%201.0.1-blue.svg)](./LICENSE)
![Color: OKLCH / P3](https://img.shields.io/badge/color-OKLCH%20%2F%20P3-8a5cf6)
![Runs in your browser](https://img.shields.io/badge/runs-in%20your%20browser-brightgreen)

**[thecontour.app](https://www.thecontour.app/)**

**[FAQ](./FAQ.md)** · **[Contributing](./CONTRIBUTING.md)** · **[Third-party notices](./THIRD-PARTY-NOTICES.md)** · **[License](./LICENSE)**

[Report an issue](https://github.com/tanguy-design/contour-app/issues)

</div>

<!-- No product screenshot yet: add one as a centered <p><img> here when there is one to show. -->

## Tools

Contour is growing into a small suite of perception-first design tools. Each tool lives in its own corner of the source tree with its own README.

| Tool | What it does | |
| --- | --- | --- |
| **Palette** | Builds complete, readable OKLCH scales from the colors you already have: perceptual families, honest readability tiers, a dark mode built rather than inverted, and sourced suggestions. Colors come in as text in any format, from the OS picker, or read out of an image. | |
| **Cadence** | Coming soon. | |

Nothing to install for users; Contour runs in the browser. It is built for keyboard, screen reader, and forced-colors use, with a visible focus ring and reduced-motion support. The interface speaks English and French; the language picker follows your browser's language until you switch it. It is made for landscape tablets and desktops: below 960 pixels of width it steps aside with a note, and saved work waits for a wider window.

## What is in this repository

```
README.md                 what Contour is
FAQ.md                    every question with a definite answer
CHANGELOG.md              what changed, newest first
ACCESSIBILITY.md          the accessibility statement
THIRD-PARTY-NOTICES.md    attribution for the corpus, the code and the fonts
CONTRIBUTING.md           the three ways to contribute
src/i18n/                 every string in the interface, English and French
```

The application's source is not here. This repository holds Contour's public
documentation and its string catalogs, which is what a translation or a bug
report needs.

## Contributing

Three things are open: proposing a palette for the corpus, translating Contour into a new language, and reporting a problem. Code contributions are closed. [CONTRIBUTING.md](./CONTRIBUTING.md) covers each one.

## AI disclosure

AI had a hand in making Contour, and how much of one depends on the kind of work. The difference is worth stating precisely, so the ratings below follow the [Badge AI](https://www.badgeai.org) scale: 0 is human only, 4 is AI only, and the grades between mark how much of the work the AI carried.

| Category | Badge | What it means for Contour |
|---|---|---|
| **Ideas** | AI-0 | What Contour is, what it takes in, and what it refuses to do was set by its author before any AI touched the project. |
| **Brainstorming & decisions** | AI-1 | Design questions are occasionally bounced off an AI for a second opinion or a missing option. The thinking and the calls, product and design alike, are the author's. |
| **Texts** | AI-2 | Interface copy and documentation are a genuine mix: the intent, the vocabulary and the final cut are human; the drafting, tightening and the coherence between English and French lean on AI. |
| **Code** | AI-3 | The code is AI-written from the author's specification and corrections, then reviewed, tested, and judged against the rendered result before it stays. |

Two honest footnotes. Nothing here was prompted and left unchecked: I push back on the code constantly, reject shortcuts, and everything ships only once it behaves exactly as I intended. I know HTML and CSS far better than I know JavaScript, so I won't pretend I understand every line, but what I can't read I test: against real palettes, against other AIs asked to break it, and with the people who use it. And the ethics of AI are a question I'm not fully at peace with. Using these tools while questioning them is a tension this project lives with rather than resolves; this disclosure exists because of that tension, not despite it.

## License

PolyForm Perimeter 1.0.1 governs Contour itself: you may use it for any purpose except providing a product that competes with it. See [LICENSE](./LICENSE).

Development happens in a private repository. This one is updated when something lands; the [changelog](./CHANGELOG.md) says what is in the tool today.
