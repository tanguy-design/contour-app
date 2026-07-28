# Contributing to Contour

There are two ways to help.

**Reporting a problem.** A bug, a color named oddly, documentation that no longer matches the app: [open an issue](https://github.com/tanguy-design/contour-app/issues). For a security issue, use the [private advisory form](https://github.com/tanguy-design/contour-app/security/advisories/new) instead of a public one.

**Translating.** One file of strings, and any language is welcome. The rest of this page covers it.

Code contributions are closed for now.

## Translating

Contour is English today. A French translation is written and waiting on a review pass, and any other language is open.

The catalogs are one file per language under `src/i18n/`. `en.ts` is the source of truth: around 280 strings, roughly a thousand words, with comments explaining what each one is for.

1. Copy `src/i18n/en.ts` to `src/i18n/<code>.ts` for your language.
2. Translate the values. Leave the keys and the `{param}` slots exactly as they are.
3. Open a pull request.

A partial translation is fine. Any key you leave out falls back to English rather than breaking, so a first pass can cover the visible surface and grow later. Wiring a new language into the app itself is a small change on the maintainer's side, so mention the language code in the pull request.

Please do not submit machine-translated strings without review.

### Voice and tone

Contour speaks calmly. It explains, it does not sell. When you translate, carry the register, not just the words. A translation that sounds louder or more formal than the source is a mistranslation of the voice.

- **Calm and unhurried.** Invitations, not commands. Even corrections stay gentle: outliers are "gently pulled back," never forced.
- **Plain and declarative.** Short sentences that say the true thing simply: "There's nothing to sort here."
- **It explains, it does not dictate.** Give the reason behind a result ("so the ramp leans that way instead of turning muddy"). Describe, don't prescribe.
- **Quietly confident.** No hype, no exclamation marks, no "instantly" or "powerful." "A good fit for product interfaces" is as strong as it gets.
- **Honest, never absolute.** Contour frames its own work as readability, an advisory reading, never a guarantee. It never claims to check or certify contrast for you. Keep that hedge intact in every language.
- **A little wonder.** The color facts are small notes about perception ("There is no wavelength for magenta. Your brain invents it."). Translate them for feeling, not word for word.

### In practice

- Match tone over literal wording. Use the phrase a calm native speaker would actually reach for.
- Keep sentences short. Do not inflate or add politeness the source does not have.
- No em dashes. Use periods, commas, or colons.
- No exclamation marks.
- Keep the readability tiers as one coherent ascending set, and keep human terms human ("Feel", "Quiet", "Loud").
- Never make Contour claim it guarantees or checks contrast.
- When two translations both work, choose the calmer, plainer one.

### Terms

By submitting a translation, you confirm that you have the right to submit it.

You retain copyright in your translation. You grant the Contour maintainer, and its successors and assigns, a perpetual, worldwide, non-exclusive, irrevocable, royalty-free license to use, reproduce, modify, distribute, sublicense, and relicense that translation as part of Contour. Unless separately agreed, translation contributions are also made available under the project license.
