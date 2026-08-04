# Contributing to Contour

There are three ways to help.

**Proposing a palette.** The colors Contour suggests are drawn from a corpus of real works: paintings, films, albums, birds, national parks. You can propose new entries, if the color data is openly licensed. The first section below covers it.

**Translating.** One file of strings, and any language is welcome.

**Reporting a problem.** A bug, an [accessibility issue](ACCESSIBILITY.md), a color named oddly, documentation that no longer matches the app: [open an issue](https://github.com/tanguy-design/contour-app/issues). For a security issue, use the [private advisory form](https://github.com/tanguy-design/contour-app/security/advisories/new) instead of a public one.

Code contributions are closed for now.

## Proposing palettes for the corpus

Every "Worth exploring" suggestion credits a real source, and every source in the corpus is openly licensed. A proposal has to clear the same bar, so the licensing comes first:

- **The color data must be MIT or CC0.** The cleanest proposal points at an existing openly-licensed palette dataset (an R color package, a published palette collection) whose license file says MIT or CC0-1.0. If you picked the colors yourself, you can dedicate your selection to the public domain (CC0) in the proposal.
- **The work's name is used nominatively.** Contour names works and creators only to say where a palette is drawn from. Proposals must not include logos, images, or anything beyond names and hex values.
- **Contour keeps its honesty rules.** A palette extracted from a specific work is credited as such; a palette merely inspired by an artist's look says so. Do not present an interpretation as an extraction.

Open [an issue](https://github.com/tanguy-design/contour-app/issues) titled `Palette proposal: {name of the work or collection}` with this template:

```
Source: <link to the dataset or work>
License: <MIT | CC0-1.0, with a link to the license file>
Category: <art | film | music | nature | games | objects>
Provenance: <extracted from the work | inspired by its look>

Entries (one per palette):
- Work: <name, e.g. "The Starry Night">
  Creator: <if known, e.g. "Vincent van Gogh">
  Colors: <hex values in source order, e.g. #1D2951 #E8C662 …>
```

A proposal can carry one palette or a whole dataset. What happens next is on the maintainer's side: entries are normalized, deduplicated against the existing corpus, and wired into the suggestion engine; the source is credited in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md). Not every proposal lands: the corpus favors palettes with a distinct character over near-duplicates of what it already holds, and the maintainer's taste is the final filter.

## Translating

Contour ships in English and French, and any other language is open.

The catalogs are one file per language under `src/i18n/`. `en.ts` is the source of truth: about 330 strings, over a thousand words, with comments explaining what each one is for.

1. Copy `src/i18n/en.ts` to `src/i18n/<code>.ts` for your language.
2. Translate the values. Leave the keys and the `{param}` slots exactly as they are.
3. Open a pull request.

A partial translation is fine. Any key you leave out falls back to English rather than breaking, so a first pass can cover the visible surface and grow later. Wiring a new language into the app itself is a small change on the maintainer's side, so mention the language code in the pull request.

Please do not submit machine-translated strings without review.

### Voice and tone

Contour speaks calmly. It explains, it does not sell. When you translate, carry the register, not just the words. A translation that sounds louder or more formal than the source is a mistranslation of the voice.

- **Calm and unhurried.** Invitations, not commands. Nothing is ever forced: every review card keeps "Leave them as-is" on offer, and a source that runs dry says "Other sources still see needs." rather than telling you to switch.
- **Plain and declarative.** Short sentences that say the true thing simply: "Your colors, all at once" is the whole contract of the input field, in five words.
- **It explains, it does not dictate.** Give the reason behind a result: "As it darkens, this color loses its glow." is why the hue-bend card exists at all. Describe, don't prescribe.
- **Quietly confident.** No hype, no exclamation marks, no "instantly" or "powerful." "A good fit for product interfaces" is as strong as it gets.
- **Honest, never absolute.** Contour frames its own work as readability, an advisory reading, never a guarantee. It never claims to check or certify contrast for you. Keep that hedge intact in every language.
- **A little wonder.** The color facts are small notes about perception ("There is no wavelength for magenta. Your brain invents it to fill the gap between red and blue."). Translate them for feeling, not word for word.

### In practice

- Match tone over literal wording. Use the phrase a calm native speaker would actually reach for.
- Keep sentences short. Do not inflate or add politeness the source does not have.
- No em dashes. Use periods, commas, or colons.
- No exclamation marks.
- No disability terms as metaphors, in any language.
- Keep the readability tiers as one coherent ascending set, and keep human terms human ("Feel", "Natural", "Grounded").
- Never make Contour claim it guarantees or checks contrast.
- A value shown in a picker is always capitalized, even mid-phrase: the grey lead and the value are styled apart, so the capital marks where the value begins.
- When a preposition has to change with the word after it, put the preposition in the value, not in the frame. French needs "de succès" but "d'erreur", and no single frame string can do both.
- Read your strings **composed**, not one per line. A catalog can look clean line by line and still ship a card whose title and description say the same thing twice, or an option that contradicts the title above it. Most of the faults found in the French pass were only visible once a whole card was rendered.
- When two translations both work, choose the calmer, plainer one.

### Terms

By submitting a translation, you confirm that you have the right to submit it.

You retain copyright in your translation. You grant the Contour maintainer, and its successors and assigns, a perpetual, worldwide, non-exclusive, irrevocable, royalty-free license to use, reproduce, modify, distribute, sublicense, and relicense that translation as part of Contour. Unless separately agreed, translation contributions are also made available under the project license.

The same terms apply to palette proposals, alongside the open-license requirement above.
