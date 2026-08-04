/**
 * English strings — the SOURCE OF TRUTH for the app's copy.
 *
 * Shape rules:
 * - Nested objects = namespaces. Leaves are strings.
 * - `{param}` marks an interpolation slot, filled at call time: t(key, { param }).
 * - Plural pairs use `_one` / `_other`; `tn()` picks the form via the locale's
 *   `Intl.PluralRules` CLDR category (see translate.ts), falling back to
 *   `_other` when the selected form is absent.
 *
 * `fr.ts` mirrors this shape (DeepPartial) and falls back here per-key, so an
 * untranslated string shows English rather than breaking. See i18n parity test.
 */
export const en = {
  meta: {
    title: 'Contour: Design tools that take perception seriously',
  },

  language: {
    label: 'Language',
    en: 'English',
    fr: 'Français',
  },

  // The discard affordance on the palette's resume cards.
  entry: {
    clearDraft: 'Delete this palette',
  },

  // The palette's click-to-rename.
  liveCategorization: {
    renameLabel: 'Rename the {name} family',
    renameTitle: 'Rename this family',
  },

  paletteScreen: {
    // "content", not "palette": the same link serves the empty canvas, where
    // the target is the collecting form and no palette exists yet.
    skipLink: 'Skip to content',
    // The document's page-level heading (sr-only, and the focus target after a
    // canvas swap — see focusPhaseHeading). Names the PAGE, deliberately not
    // the column: `title` below is the visible h2 on the palette itself, and
    // when the two said the same word a screen reader announced "Palette"
    // twice in a row, at h1 then h2.
    heading: 'Contour',
    sidebarLabel: 'Palette controls',
    title: 'Palette',
    shareLabel: 'Copy link to this palette',
    exportLabel: 'Export as W3C design tokens',
    // "Remix", not "Organize"/"Edit": the mode regroups colors between
    // families and recomposes the scales — users who read "Organize"
    // expected row reordering and found an opinionated mixer instead.
    editToggleLabel: 'Remix colors',
    // Names the destination's CONTENT, not its host: the repo holds the
    // documentation, so "GitHub" would describe where it happens to live
    // rather than what the reader gets. Opens in a new tab.
    github: 'Contour documentation (opens in a new tab)',
    linkedin: 'Contour on LinkedIn (opens in a new tab)',
    resumeSection: 'Saved palettes',
    // Interpolates PALETTE_MAX_AGE_DAYS — the storage rule the note
    // describes lives in sessionPersistence. The second sentence is not
    // hedging: our rule is a ceiling, and WebKit clears localStorage on its
    // own schedule regardless of it. Do not restore a bare guarantee.
    resumeAgeNote: 'Palettes untouched for {days} days are removed. Your browser may clear them sooner.',
    // Replaces the age note while nothing is saved: a retention rule about
    // zero palettes says nothing. Carries the shelf's meaning for screen
    // readers too, since the face-down card is decorative.
    resumeEmptyNote: 'No palettes saved yet. The ones you build are kept here.',
    // On these cards a "color" IS a color family (Blue, Olive…), never an
    // anchor count — a suggestion-seeded palette with one family holds
    // 1 color, full stop.
    // Leads with the count: the rank digit is the card's only visible text,
    // so the accessible name must begin with it (WCAG 2.5.3 Label in Name).
    resumeCardAria_one: '{count} color family, saved {time}. Open this palette.',
    resumeCardAria_other: '{count} color families, saved {time}. Open this palette.',
    // Exits arranging. NOT "Confirm": nothing is pending — every pick applies
    // live, and rename/delete work in both modes — so there is nothing to
    // confirm.
    editToggleDoneLabel: 'Done',
  },

  // Eyebrow hints — the ⓘ toggletips beside section labels (see InfoHint).
  // Each says what a module DOES in a sentence or two; the FAQ keeps the
  // long answers.
  hints: {
    // The trigger's accessible name; {subject} is the section's own label.
    trigger: 'About {subject}',
    feel: 'Sets how closely the families share a common intensity. Each can keep its own character, or move closer to the rest. Each dot marks a family’s current intensity; its trail shows how far it can shift between modes.',
    exploring: 'Colors that could fill a real gap in your palette, drawn from art, film, nature, color theory, and more. Each suggestion explains why it belongs and where it comes from.',
    reviewing: 'Some colors need a closer look, while other decisions come down to taste. Contour has already applied one option; choose another to update the palette immediately.',
    collecting: 'Paste or type colors in any common format, several at once: hex, named colors, OKLCH, RGB, HSL, and more. The two squares feed the same field: one picks a color, the other reads an image. Nothing is built until you ask.',
  },

  // ── Add colors — the empty palette's collecting input (on the canvas) ──
  addColors: {
    // Committing an empty field explains itself instead of a dead button.
    empty: 'The palette needs at least one color.',
    // The EMPTY canvas's hero: the section IS the new palette. Says the
    // field's real contract up front: one visit is enough, so nobody adds
    // colors one at a time.
    labelEmpty: 'Your colors, all at once',
    pick: 'Pick a color',
    // Image → colors. Names what Contour DOES to the picture, not the file
    // dialog ("Upload") and not the clinical verb ("Extract"): the engine
    // reads the whole bitmap rather than sampling a point. Cut to its
    // neighbour's shape on purpose — verb, article, noun, the same length as
    // "Pick a color" — so the two read as one pair of offers.
    fromImage: 'Read an image',
    // The staged input commits explicitly: nothing generates until asked.
    // Says plainly what happens, and "build" is already the app's word.
    create: 'Build the palette',
    // Says the field's contract: any format, several at once. The
    // {example} slot types/erases its way through real formats
    // (PLACEHOLDER_EXAMPLES in PaletteScreen) so the placeholder itself
    // demonstrates the breadth; the hex and the named color stay put as
    // the stable anchors. Static under reduced motion.
    placeholder: '#2a6ef5, gold, {example}',
  },

  viewportGate: {
    title: 'Contour works best on larger screens',
    lead: 'The workspace needs a window at least 960 pixels wide.',
    bodyPalette:
      'Your palette is saved in this browser. It will be waiting when you open a wider window here.',
    body: 'Open Contour in a wider window to start building.',
    // Small-screen variants — a device that can never host a 960px window
    // (a phone): "wider window" is impossible advice there, so the copy
    // points at a larger screen, and the palette case at the URL, which
    // carries the palette.
    leadSmallScreen: 'The workspace needs a screen at least 960 pixels wide.',
    bodyPaletteSmallScreen:
      'This link carries your palette. Open it on a larger screen to keep building.',
    bodySmallScreen: 'Come back on a larger screen to start building.',
    rotateTitle: 'Turn your device sideways',
    rotateBody: 'This orientation is too narrow for the workspace. Landscape has the room.',
    illustrationAlt: 'A glimpse of the palette',
  },

  themeSection: {
    regionLabelLight: 'Light mode palette',
    regionLabelDark: 'Dark mode palette',
    autoTag: 'Auto',
    deleteLabel: 'Delete the {name} family',
    infuseNone: 'Untinted',
    // Optgroup label over the color options: says what CHOOSING one does.
    infuseGroup: 'Tint with',
    // {family} is always Neutral (the slot can't be renamed), but it arrives
    // through familyLabel so the name translates instead of being frozen in
    // English.
    infuseSelectLabel: 'Infuse the {family} family with a color',
    // The trash zone shown while an anchor is dragged (drop = remove).
    anchorTrash: 'Drop to remove',
    neutralLabelUntinted: '{family}, untinted',
    neutralLabelTinted: '{family}, tinted with {source}',
  },

  swatchStrand: {
    strandLabel: 'Color swatch strip',
    // A tile's accessible NAME: the action, then {step} — the tile's number
    // (600), the handle AT users navigate by. Short on purpose. The OKLCH
    // value is the button's PAYLOAD, not its identity, so it lives in
    // pillDescription below: read digit by digit it runs about four seconds,
    // which is too long to sit in front of every tab stop through a strip of
    // twelve. Action leads and stays active ("Copy", not "Copies the value"),
    // and device-neutral (no "click").
    pillLabel: 'Copy {step}',
    // Arranging, generated tile: copy is off and nothing opens, so the name is
    // bare identity.
    pillLabelEdit: '{step}',
    // Arranging, anchor tile. Names the PURPOSE, not the mechanism: the menu
    // holds exactly these two actions, and "anchor" appears in no visible
    // string anywhere.
    pillLabelEditAnchor: 'Move or remove {step}',
    // The tile's DESCRIPTION, announced after the name and skippable. {brand}
    // and {background} are optional clauses, and mutually exclusive: only a
    // Neutral swatch can be the background, and Neutral never carries a brand
    // marker.
    pillDescription: '{value}{brand}{background}',
    // Named for what it does, not for the internal "anchor" concept, which
    // appears in no visible string anywhere.
    anchorMenuLabel: 'Actions for this color',
    anchorMenuMove: 'Move to {family}',
    anchorMenuRemove: 'Remove from the palette',
    pillCurrentBg: ', current background',
    // Anchor-dot label. {label} is the composed source phrase below; the
    // wrapper carries the aria separator so it stays translatable.
    pillSource: ', {label}',
    // A pinned anchor's origin: a typed brand color, or a pigment credited to
    // its source work (+ artist when known). The "by" connector lives here so
    // the credit is fully translatable.
    sourceYours: 'Your brand color',
    // When several near-identical brand colors collapsed onto this one shade (the
    // "N ×" badge), the count folds into the label — one sentence, e.g.
    // "Your 2 brand colors, adjusted".
    sourceYoursShared: 'Your {count} brand colors',
    sourceFromBy: 'Color from {work} by {artist}',
    sourceFrom: 'Color from {work}',
    // Suffix when the pinned pigment was nudged to fit the scale (vs. kept
    // exactly). Plural pair (not just singular) because the label it wraps can
    // itself be plural (sourceYoursShared, "N brand colors") — English "adjusted"
    // is invariable either way, but a translation may need to agree in number.
    sourceAdjusted_one: '{label}, adjusted',
    sourceAdjusted_other: '{label}, adjusted',
    // Touch ⓘ summary when only SOME of a family's anchors were adjusted
    // ("Your 3 brand colors, 1 adjusted"); count = the adjusted ones.
    noteSomeAdjusted_one: '{label}, {count} adjusted',
    noteSomeAdjusted_other: '{label}, {count} adjusted',
  },

  chromaMode: {
    label: 'Feel',
    naturalTitle: 'Natural',
    naturalDescription: 'A good fit for marketing and creative work',
    balancedTitle: 'Balanced',
    balancedDescription: 'A good fit for product interfaces',
    groundedTitle: 'Grounded',
    groundedDescription: 'A good fit for data-heavy work',
  },

  environment: {
    /** Picker value with its self-describing prefix, e.g. "Readability on
     *  Neutral 100" — the "Readability on" part renders muted. */
    onValue: 'Readability on {value}',
    // Shares its wording with the visible value above ("Readability on
    // {value}") so speech input and the accessible name agree. Carries no
    // mode slot: the picker only renders in light mode.
    selectLabel: 'Readability measured on',
    // <optgroup> heading over the background-swatch options.
    surfacesGroup: 'Surfaces',
  },

  cvd: {
    // "Seen with Typical vision / Protanopia / …" — the CVD simulation picker.
    prefix: 'Seen with',
    selectLabel: 'Simulate color vision deficiency',
    approximate:
      'An approximate simulation (Brettel 1997, Machado 2009). Explore, then verify with real tools and real people.',
    groupAnomalous: 'Anomalous trichromacy',
    groupDichromacy: 'Dichromacy',
    groupMonochromacy: 'Monochromacy',
    none: 'Typical vision',
    protanomaly: 'Protanomaly',
    deuteranomaly: 'Deuteranomaly',
    tritanomaly: 'Tritanomaly',
    protanopia: 'Protanopia',
    deuteranopia: 'Deuteranopia',
    tritanopia: 'Tritanopia',
    achromatopsia: 'Achromatopsia',
  },

  themeToggle: {
    ariaLabel: 'Palette mode',
    light: 'Light',
    dark: 'Dark',
  },

  colorSuggestions: {
    sectionLabel: 'Worth exploring',
    seedLabel: 'Start somewhere: add a random color family',
    seedTitle: 'Start somewhere',
    listLabel: 'Suggested color families to add',
    // sr-only suffix INSIDE the card, after its visible lines: the content is
    // the accessible name (WCAG 2.5.3), and this adds the action it performs.
    cardAction: 'Add this family.',
    // Each card is ONE sentence: "{reason} …" woven with its origin (no
    // "It" subject — the clause opens the sentence and is capitalized at
    // render, since the clause strings must stay lowercase for the
    // englishReason mirror) —
    // authored whole per origin kind, never assembled from fragments (that
    // path bred clause salad). {reason} is a suggestions.* clause;
    // {work}/{artist} are proper nouns rendered verbatim; {family} is a
    // localized family name.
    // Catalogue picks say nothing beyond the credit ON PURPOSE: the other
    // origins CLAIM a relationship ("was seen with", "carries your spirit"),
    // so plain attribution with no claim is itself the honest statement that
    // the work did not drive the pick. (The old three-line cards spelled it
    // out — "its origin played no part" — because line 2 had to say
    // something; the sentence form retires that.)
    sentCoOccurrence: '{reason} and was seen with your {family} in {work}.',
    sentCoOccurrenceArtist: '{reason} and was seen with your {family} in {work} by {artist}.',
    // Echo forms: the reason already names the same family — "beside it"
    // instead of naming your Pink twice in one breath.
    sentCoOccurrenceEcho: '{reason} and was seen beside it in {work}.',
    sentCoOccurrenceEchoArtist: '{reason} and was seen beside it in {work} by {artist}.',
    sentResemblance: '{reason} and carries your palette’s spirit, drawn from {work} by {artist}.',
    sentResemblanceNoArtist: '{reason} and carries your palette’s spirit, drawn from {work}.',
    // When the reason IS the spirit clause (suggestions.resembles), the
    // resemblance sentence would say it twice — this form says it once.
    sentSpirit: 'It carries your palette’s spirit, drawn from {work} by {artist}.',
    sentSpiritNoArtist: 'It carries your palette’s spirit, drawn from {work}.',
    // Plain provenance: catalogue picks, and any credited work with no
    // stated relation (e.g. a sighting whose family did not resolve).
    sentFrom: '{reason} and comes from {work} by {artist}.',
    sentFromNoArtist: '{reason} and comes from {work}.',
    // Computed picks in PLAIN words: the harmony phrases say the color-wheel
    // geometry the terms stand for ("triadic" said as a third of the wheel),
    // and the no-harmony close owns the honest content — nothing behind the
    // pick but the palette's own geometry.
    sentComputedHarmony: '{reason}, and it sits {harmony}.',
    sentComputedNoHarmony: '{reason}, worked out from your palette alone.',
    // Nothing to weave (no credit, no relation): the reason stands alone.
    sentReasonOnly: '{reason}.',
    // ── Medium wraps — the {work} slot's richer form ──
    // Noun phrases with their own article, substituted where {work} stood
    // (the title keeps its <cite> italics inside). Keys are stamped on the
    // corpus at ingest (DATASET_MEDIUM in corpusIngest.ts), audited against
    // each dataset's real contents. French contracts de+le/les at render
    // (contractFrench in ColorSuggestions) — author FR wraps with their
    // natural articles and let the rule do the grammar.
    medium: {
      plumage: 'the plumage of the {work}',
      coloring: 'the coloring of the {work}',
      seaSlug: 'the sea slug {work}',
      species: 'the species {work}',
      park: 'the {work} national park',
      soil: 'the {work} soil',
      crayons: 'the {work} crayon box',
      candy: 'the {work} candy',
      keyboard: 'the {work} keyboard',
      joycon: 'the {work} Joy-Cons',
      metro: 'the {work} metro',
      nba: 'the NBA’s {work}',
      film: 'the film {work}',
      series: 'the series {work}',
      character: 'the character {work}',
      characterIn: 'the character {work}, from {series}',
      inWork: '{work}, in {series}',
      album: 'the album {work}',
      painting: 'the painting {work}',
      watercolor: 'the watercolor {work}',
      poster: 'the poster {work}',
      pattern: 'the pattern {work}',
      chart: 'the statistical chart {work}',
      artwork: 'the artwork {work}',
      photograph: 'the photograph {work}',
      spine: 'the spine of {work}',
    },
    // Whole phrases, family included: each locale keeps its own word order
    // and prepositions.
    harmonyTriadic: 'a third of the color wheel from your {family}',
    harmonyAnalogous: 'right beside your {family} on the color wheel',
    harmonyComplementary: 'directly across the color wheel from your {family}',
  },

  // Source-lens picker for "Worth exploring": which slice of the suggestion
  // supply to draw from. A personal preference (localStorage), not palette state.
  sourceLens: {
    label: 'Suggestion source',
    // Muted prefix before the selected source (e.g. "Pulling the best from
    // All sources"). "The best" carries the ranked-cut honesty: each lens shows
    // its strongest picks, not its full inventory.
    drawingFrom: 'Pulling the best from',
    all: 'All sources',
    art: 'Art',
    film: 'Film & TV',
    music: 'Music',
    nature: 'Nature',
    games: 'Games',
    objects: 'Objects',
    computed: 'Color theory',
    // <optgroup> heading for the individual sources (art/film/…/color theory).
    subjectGroup: 'Sources',
    // The current lens has nothing need-filling left. Two sentence TYPES, by
    // source kind, because they claim different things: color theory is a
    // judge, so its emptiness is a VERDICT (all relations satisfied);
    // catalogues are samples, so theirs is a SUPPLY statement — claiming
    // "complete by Art's lights" would be borrowed authority. Both advisory-
    // voiced: "by color theory", never a bare "complete".
    satisfiedComputed: 'Complete, by color theory.',
    exhausted: '{lens} has nothing more for this palette.',
    // Follows the verdict when other categories still hold need-filling
    // picks: points at the picker above, never switches on its own — whether
    // to keep going is the user's decision.
    // Points, never instructs: the picker sits directly above this line, and
    // whether to keep going is the user's decision.
    othersSee: 'Other sources still see needs.',
  },

  errorBoundary: {
    heading: 'Something went wrong',
    // Does not restate the heading above it, which already says what happened.
    description:
      'Your palette is saved in this browser. Try again, or reload to pick up where you left off.',
    tryAgain: 'Try again',
    reload: 'Reload page',
  },

  logo: {
    homeLabel: 'Contour home',
  },

  notices: {
    // Accessible name for the <output> status channel itself (a form
    // control needs one even while empty); the messages are its content.
    channelLabel: 'Notices',
    shareDecodeFailed: 'That shared link couldn’t be read. Start fresh below.',
    shareNothing: 'Nothing to share yet. Add a color to begin.',
    // The canvas's Add-colors input: parse rejects keep the text in the box
    // for fixing; duplicates explain why nothing visibly happened.
    addSkipped_one: 'Couldn’t read {count} value.',
    addSkipped_other: 'Couldn’t read {count} values.',
    addDuplicates_one: '{count} color is already in the palette.',
    addDuplicates_other: '{count} colors are already in the palette.',
    addGreys_one: '{count} color settled into the neutral scale.',
    addGreys_other: '{count} colors settled into the neutral scale.',
    // Dropping an anchor on the trash removed a family's LAST color — the
    // family went with it (removeColorsFromFamily's emptied-family policy),
    // which deserves an explanation the way an explicit delete would get.
    removedLastAnchor: 'Its last color removed, {name} went with it.',
    shareCopied: 'Link copied. Paste it anywhere to return to this palette.',
    // NOT copyRefused's wording: the share URL is never rendered, so there is
    // no value on screen to select.
    shareClipboardRefused: 'The clipboard wouldn’t take the link. Try again.',
    copyRefused: 'The clipboard wouldn’t take it. Select the value and copy it manually.',
    copied: 'Copied {value}.',
    // Image extraction. Read failures are one message on purpose: a corrupt
    // file, an unsupported format and a decode error are the same dead end
    // for someone holding a picture, and naming the cause helps nobody.
    // The refusals are the exception, because each one names a different
    // thing to do next: pick a lighter file, pick a smaller one, pick another
    // format. Weight and size are separate messages because they are separate
    // limits: a 2MB file can still hold a canvas too big to open.
    imageTooLarge: 'That image is too large. Try one under {limit} MB.',
    imageTooManyPixels: 'That image is too big to open. Try one under {limit} megapixels.',
    // Separate from the one above because it is a separate limit: a long thin
    // image can be well under the megapixel count and still too long to open.
    imageTooLong: 'One side of that image is too long. Try one with sides under {limit} pixels.',
    imageUnsupported: 'That file type can’t be read. Try a PNG, JPEG, WebP, HEIC or AVIF.',
    // The file IS an image of a kind this app takes, but this browser has no
    // decoder for it — Chrome and Firefox ship none for HEIC. Says "couldn’t"
    // rather than "can’t" because a corrupt file lands here too, and the same
    // advice answers both.
    imageFormatUndecodable: 'This browser couldn’t open that {format} image. Try exporting it as a JPEG.',
    imageNoColors: 'No colors could be read from that image.',
    // A second pick while one image is still being read. Says it is working,
    // because a click that does nothing reads as a broken control.
    imageBusy: 'Still reading the last image. One moment.',
    imageAdded_one: '{count} color read from the image.',
    imageAdded_other: '{count} colors read from the image.',
    exportNothing: 'Nothing to export yet. Add a color to begin.',
    exportFailed: 'The download didn’t start. Check your browser’s download settings.',
    // No leading space: the join site owns the separator. A space living
    // inside a translated value is invisible in the file and the first
    // thing translation tooling trims.
    undoneSuffix: 'Undone.',
    redoneSuffix: 'Redone.',
    // The tappable action inside the delete notice (the only undo on touch).
    undoAction: 'Undo',
    // Confirms a discarded SAVED palette (the shelf's corner ×); the Undo
    // action restores it. "Palette", not "draft": the button and the shelf
    // heading both call it that. Clearing the working canvas is
    // undo.clearedPalette, a different string.
    draftCleared: 'Palette removed.',
    // Rename rejections: the field keeps the typed value so it can be fixed.
    renameTaken: '{name} already exists. Pick another name.',
    // Same shape as renameTaken above: state the fact, then the way out.
    renameReserved: 'Neutral is already the grey scale. Pick another name.',
    // The share URL failed to build (encode error) — nothing was copied.
    shareFailed: 'The link couldn’t be built. Try again.',
    // SR-audible confirmation when a suggestion joins the palette.
    familyAdded: '{name} added to the palette.',
  },

  undo: {
    // No leading space; see notices.undoneSuffix.
    retraceSuffix: '{shortcut} to retrace.',
    addedFamily: 'Added {name}.',
    deletedFamily: 'Deleted {name}.',
    renamedFamily: 'Renamed {from} to {to}.',
    addedColors_one: 'Added {count} color.',
    addedColors_other: 'Added {count} colors.',
    movedAnchors_one: 'Moved {count} color to {name}.',
    movedAnchors_other: 'Moved {count} colors to {name}.',
    removedAnchors_one: 'Removed {count} color.',
    removedAnchors_other: 'Removed {count} colors.',
    clearedPalette: 'Cleared the palette.',
  },

  // -- Engine-produced copy (translated at the UI boundary) -------------------

  families: {
    Red: 'Red',
    Orange: 'Orange',
    Yellow: 'Yellow',
    Lime: 'Lime',
    Green: 'Green',
    Teal: 'Teal',
    Cyan: 'Cyan',
    Blue: 'Blue',
    Indigo: 'Indigo',
    Purple: 'Purple',
    Pink: 'Pink',
    Brown: 'Brown',
    Gold: 'Gold',
    Olive: 'Olive',
    Sage: 'Sage',
    Navy: 'Navy',
    Salmon: 'Salmon',
    Beige: 'Beige',
    Mist: 'Mist',
    Gray: 'Gray',
    Neutral: 'Neutral',
  },

  conflicts: {
    messageDriftedTooFar: 'shades pulling away',
    // Card titles with the family as the subject ('{family}s' pluralizes in
    // English by suffix; FR phrases around it instead).
    // The title is the SYMPTOM headline; the description sentence below
    // carries the full condition, so the title must not paraphrase it.
    // {family} arrives pre-articled where the locale needs it (see
    // titleFamily in ConflictReview): EN gets the plain label except
    // drifted ("An Orange"); FR gets "Le Jaune" / "d’Orange" forms.
    titleRedundant: '{family} shades blur together',
    titleProximity: '{family} shades crowd each other',
    titleHueBend: '{family} goes dull',
    titleEarthTint: '{family}, earthy by nature',
    titleGoldTint: '{family}, metallic by nature',
    // The article sits on "shade", never on the interpolated name, which
    // would give "A Orange". Same shape as the French.
    titleDriftedTooFar: '{family} shade stands apart',
    // Mirrors the neutral header's own label ("NEUTRAL, TINTED WITH {source}")
    // so the card and the family row speak one language; {family} arrives
    // lowercased (mid-sentence value voice — see famTitle in ConflictReview).
    titleNeutralTint: 'Neutral, tinted with {family}',
    messageRedundant: 'shades reading as one',
    messageProximity: 'shades sitting close',
    messageHueBend: 'colors losing their hue',
    messageEarthTint: 'earthy tones',
    messageGoldTint: 'metallic tones',
    // The neutral-tint card: shown while the Neutral scale is infused. The
    // title states the condition (true at every strength), never a verdict.
    messageNeutralTint: 'tinted neutrals',
    // One-line description under each message in the "Worth reviewing" card.
    // {family} is the home family the drifted shade no longer matches.
    descDriftedTooFar: 'One shade sits far enough from the rest to jar in the family.',
    descRedundant: '{count} shades sit so close the eye reads one.',
    descProximity: '{count} shades are pulling toward the same spot.',
    descHueBend: 'As it darkens, this color loses its glow.',
    // The earth-tint card: the condition, true under either answer. "Quiet"
    // rather than "muted" so the description does not pre-endorse the option
    // that happens to be called Muted.
    descEarthTint: 'Its pale steps can stay understated or keep their full color.',
    descGoldTint: 'Its pale steps can stay matte or keep their shine.',
    // {family} is the infusion SOURCE (the card sits on Neutral).
    descNeutralTint: 'The tint can run lighter or deeper.',
    // ── Current-pick STATE sentences (the value line) ──
    // Second sentence of each card: a factual statement of the active
    // choice, completing the description above it ("The tint can run
    // lighter or deeper." → "For now, it runs light."). {value} is the ink
    // span; the surrounding prose renders grey. Never a verdict: it states
    // what IS, the description states the fork.
    stateSteered: 'For now, it’s steered {value}.',
    stateHolds: 'For now, it {value}.',
    stateHoldsValue: 'holds its course',
    stateTheyStay: 'For now, they stay {value}.',
    stateTheyKeep: 'For now, they keep {value}.',
    stateEarthKeepValue: 'their full color',
    stateGoldKeepValue: 'their shine',
    stateTintRuns: 'For now, it runs {value}.',
    stateTintWhisper: 'faint',
    stateTintSoft: 'light',
    stateTintDeep: 'deep',
    stateTheyAre: 'For now, they {value}.',
    stateBlendValue: 'blend into one',
    stateLeaveValue: 'stay as they are',
    stateKeepOne: 'For now, only the {value} shade stays.',
    stateStaysIn: 'For now, it stays in {value}.',
    stateMovesTo: 'For now, it joins {value}.',
    actionMoveTo: 'Move to {family}',
    moveToLabel: 'Move to',
    // Which way the deep steps go. A direction, not a destination: the card's
    // dot already shows where it lands, and a destination has to be rendered and
    // classified before it can be stated truthfully (naming the ridge, "warm
    // brown", lied for most hues, since a pure yellow forced warm comes out
    // Orange and the sage side reads Green or Lime). Warmer/Cooler is true by
    // construction, and stable: it means the same thing on every card, where
    // "the other way" would follow the recommendation and so flip sense across
    // the crossover.
    // Bend card grey lead ("Bend it warmer"). Both languages pronoun the
    // subject — the card + description already name it (French with an object
    // pronoun: "La pousser").
    actionBendLabel: 'Bend it',
    actionBendWarmer: 'warmer',
    actionBendCooler: 'cooler',
    // Earth-tint pick. The decision is about the family's PALE steps ("Pale
    // steps can go two ways"), so "them" refers to those.
    actionEarthLabel: 'Keep them',
    actionEarthMuted: 'muted',
    // Gold's counterpart to actionEarthMuted. The two cards share one engine
    // action but not one word: "muted" under "metallic by nature" read as a
    // contradiction. Matte is what a restrained metal is.
    actionGoldMatte: 'matte',
    // Neutral-tint: the strength adverb is the GREY LEAD, "tinted" the ink
    // value — the same grey-then-ink anatomy as every other select row.
    // Quietest first; Softly is the engine default.
    tintWhisper: 'Barely',
    tintSoft: 'Softly',
    tintDeep: 'Deeply',
    tintSuffix: 'tinted',
  },

  reconcile: {
    reviewTitle: 'Worth reviewing',
    // The kind filter above the cards ("Showing every kind" / one kind).
    filterLead: 'Showing',
    filterAll: 'every kind',
    // "kind", the word the visible value already uses. No "finding": that
    // noun appeared nowhere else in the interface.
    filterLabel: 'Filter by kind',
    // Each resolution shows as a grey label + ink value (like "Pulling from").
    // Ink values are capitalized.
    // Row phrases. The family name is gone from both — the card title and
    // description already carry it ("Blend them into one" / "first shade").
    blendRowLead: 'Blend them into',
    keepOneRow: '{ordinal} shade',
    blendValue: 'one',
    // The "do nothing" resolution. Named "Leave as-is" (not "Keep all") because
    // near-identical shades can't all be kept as distinct steps — they collapse
    // onto shared shades (surfaced by the "N ×" marker). "Keep all" over-promised.
    // The lead word comes from leaveItLabel / leaveThemLabel below, which carry
    // the subject number; this is only the value half.
    keepValue: 'as-is',
    // Pronoun forms of the "leave" grey lead, by subject number: "it" for
    // single-shade cards (bend, drift), "them" for the cluster / pale-step
    // cards. Both drop the family name (French: a bare "Laisser" either way).
    leaveItLabel: 'Leave it',
    leaveThemLabel: 'Leave them',
    keepTheLabel: 'Keep the',
    keepInLabel: 'Keep in',
    // Ordinals for "Keep the {ordinal} shade" (ink-cased); fallback past twelve.
    ord1: 'first',
    ord2: 'second',
    ord3: 'third',
    ord4: 'fourth',
    ord5: 'fifth',
    ord6: 'sixth',
    ord7: 'seventh',
    ord8: 'eighth',
    ord9: 'ninth',
    ord10: 'tenth',
    ord11: 'eleventh',
    ord12: 'twelfth',
    ordinalFallback: '{n}th',
    // Cardinal words for the cluster descriptions ("Two shades feel almost
    // identical."). Counts past twelve fall back to the numeral.
    card2: 'Two',
    card3: 'Three',
    card4: 'Four',
    card5: 'Five',
    card6: 'Six',
    card7: 'Seven',
    card8: 'Eight',
    card9: 'Nine',
    card10: 'Ten',
    card11: 'Eleven',
    card12: 'Twelve',
  },

  readability: {
    tier_0: 'Indistinct',
    tier_1: 'Discernible',
    tier_2: 'Noticeable',
    tier_3: 'Identifiable',
    tier_4: 'Legible',
    tier_5: 'Comfortable',
    tier_6: 'Effortless',
  },

  suggestions: {
    // Reasons frame the NEED a color serves (not its source). Each is a
    // CLAUSE that OPENS the card's one sentence (the colorSuggestions.sent*
    // templates; capitalized at render): lowercase start, no terminal
    // period, and it must read as a sentence head ("balances your Pink and
    // comes from…").
    balances: 'balances your {family}',
    couldFillRole: 'could be your {role} color',
    fillsGap: 'fills a gap in your palette',
    addsWarmth: 'adds a warmer note',
    addsCoolness: 'adds a cooler note',
    addsVivid: 'adds a vivid note',
    addsDepth: 'adds a deeper note',
    addsBright: 'adds a brighter note',
    standsApart: 'stands apart from your other colors',
    goesWith: 'often pairs with your {family}',
    resembles: 'carries your palette’s spirit',
    roleSuccess: 'success',
    roleWarning: 'warning',
    roleError: 'error',
    roleInfo: 'info',
  },

  facts: [
    'Close your eyes. The color you see isn’t black. It’s eigengrau, roughly #16161D. Your retina is never fully quiet.',
    'There is no wavelength for magenta. Your brain invents it to fill the gap between red and blue.',
    'The sky isn’t blue. It’s every wavelength, scattered unevenly. Blue just wins the most.',
    'The sharpest part of your vision covers about 1° of your visual field. You’re reading this through a keyhole.',
    'Most of your retina sees light, not color.',
    'Place the same color on two different backgrounds and it will look different. This is the whole problem.',
    'White on your screen is an approximation of daylight: a standard people agreed on in the 1960s.',
    'In dim light, blue glows brighter than red. In daylight, they quietly trade places.',
    'A white shirt looks white both under fluorescent light and at sunset. Your brain is color-correcting in real time.',
    'Color isn’t a property of objects. It’s an event that happens between light, a surface, and your nervous system.',
    'If you’ve ever argued about whether something is green or blue, one of you may be right in a way the other can’t see.',
    'In a room of 30 people, two or three are seeing a different color palette.',
    'HSL says yellow and blue are equally bright at 50% lightness. Your eyes disagree.',
    'Saturated blue looks darker. Saturated yellow looks lighter. Brightness is being improvised.',
    'Your screen can show more colors than you will ever design with.',
    'Some colors look more vivid in the dark. Saturation doesn’t stay put.',
    'As brightness drops, hues drift. One of many reasons dark mode isn’t just light mode reversed.',
    'Shadows are never black. They carry the color of the light around them.',
    'Color fades toward the edges of your vision. What you see in your periphery is mostly gray, filled in by memory.',
    'Infrared exists. You will never see it. Your eyes are a gate, not a window.',
    'The deeper the water, the sooner red disappears. Blue survives longest.',
    'Two colors can match perfectly under one light and clash under another. This is metamerism. The light was always part of the color.',
    'Color blindness isn’t darkness. It’s a different vocabulary for the same light.',
    'Under moonlight, reds turn dark gray.',
    'The same pigment looks different on canvas, paper, and screen. The surface is part of the color.',
    'Your eyes adapt to color continuously. The screen doesn’t. What you see now isn’t what you saw a minute ago.',
    'The color spectrum is continuous. Color names are just the lines we argue about.',
    'In low light, color doesn’t disappear. It’s just deprioritized by your eyes.',
    'Every color you see is a guess. Three types of cone, a lifetime of context, and your brain deciding what must be true.',
  ],
};

export type Dict = typeof en;

/**
 * Every leaf as a dot-path string-literal union (e.g. 'paletteScreen.title').
 * Arrays (facts) are excluded — they're addressed dynamically by index. Used to
 * type `t()` so call sites with a typo fail at compile time.
 */
type Leaf<T, P extends string> = T extends string
  ? P
  : T extends readonly unknown[]
    ? never
    : {
        [K in keyof T & string]: Leaf<T[K], P extends '' ? K : `${P}.${K}`>;
      }[keyof T & string];

export type TKey = Leaf<Dict, ''>;

/**
 * Bases of `_one`/`_other` plural pairs (e.g. 'undo.addedColors'), for `tn()`.
 * The indirection through a generic param makes the conditional distribute over
 * the TKey union (a bare `TKey extends …` would test the whole union at once).
 */
type BaseOf<K> = K extends `${infer B}_other` ? B : never;
export type PluralBase = BaseOf<TKey>;
