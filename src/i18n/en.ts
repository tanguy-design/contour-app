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
    clearDraftAria: 'Delete this palette',
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
    newPaletteLabel: 'Start a new palette',
    editToggleLabel: 'Organize colors',
    github: 'About Contour',
    linkedin: 'Contour on LinkedIn',
    resumeSection: 'Saved palettes',
    // Interpolates PALETTE_MAX_AGE_DAYS — the storage rule the note
    // describes lives in sessionPersistence.
    resumeAgeNote: 'Palettes untouched for {days} days are removed.',
    // On these cards a "color" IS a color family (Blue, Olive…), never an
    // anchor count — a suggestion-seeded palette with one family holds
    // 1 color, full stop.
    resumeCardAria_one: 'Open this palette: {count} color family, saved {time}',
    resumeCardAria_other: 'Open this palette: {count} color families, saved {time}',
    editToggleDoneLabel: 'Confirm',
  },

  // ── Add colors — the empty palette's collecting input (on the canvas) ──
  addColors: {
    // Committing an empty field explains itself instead of a dead button.
    empty: 'The palette needs at least one color.',
    // The EMPTY canvas's hero: the section IS the new palette. Says the
    // field's real contract up front: one visit is enough, so nobody adds
    // colors one at a time.
    labelEmpty: 'Enter colors, all at once',
    pick: 'Pick a color',
    // Image → colors. The label says the OUTCOME, not the mechanism ("Upload"
    // would name the file dialog); this sits beside "Pick a color" and reads
    // as the same kind of offer, one color against several.
    fromImage: 'From an image',
    // The staged input commits explicitly: nothing generates until asked.
    // Says plainly what happens, and "build" is already the app's word.
    create: 'Build the palette',
    // Same contract as the entry input: any format, several at once. The
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
      'Your palette is saved. It will be waiting when you come back in a wider window.',
    body: 'Open Contour in a wider window to start building.',
    rotateTitle: 'Turn your device sideways',
    rotateBody: 'This orientation is too narrow for the workspace. Landscape has the room.',
    illustrationAlt: 'A glimpse of the palette',
  },

  themeSection: {
    regionLabelLight: 'Light mode palette',
    regionLabelDark: 'Dark mode palette',
    autoTag: 'Auto',
    deleteLabel: 'Delete {name} family',
    infuseNone: 'Untinted',
    infuseSelectLabel: 'Infuse the Neutral family with a color',
    // The trash zone shown while an anchor is dragged (drop = remove).
    anchorTrash: 'Drop to remove',
    neutralLabelUntinted: '{family}, untinted',
    neutralLabelTinted: '{family}, tinted with {source}',
  },

  swatchStrand: {
    strandLabel: 'Color swatch strip',
    // One frame for the pill's accessible name. IDENTITY FIRST: {step} is the
    // tile's number (600), the fast handle AT users navigate by; {value} (the
    // OKLCH string — real content in a color tool, so spoken, but after the
    // identity where it can be skipped) follows; {brand} and {background} are
    // optional clauses (empty when not applicable). The action stays device-
    // neutral (no "click"). The whole sentence is translatable.
    pillLabel: '{step}. {value}{brand}{background}. Copies the value.',
    pillLabelEdit: '{step}. {value}{brand}{background}.',
    // Anchor tiles while ARRANGING: the click path (keyboard/touch parity with
    // the drag) opens a small action menu.
    pillLabelEditAnchor: '{step}. {value}{brand}{background}. Opens the anchor menu.',
    anchorMenuLabel: 'Anchor color actions',
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
  },

  chromaMode: {
    label: 'Feel',
    controlLabel: 'Color intensity',
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
    selectLabel: 'Select {mode} palette environment swatch',
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
    seedLabel: 'Start somewhere: suggest a random chromatic family',
    seedTitle: 'Start somewhere',
    listLabel: 'Suggested color families to add',
    cardLabel: 'Add {family} family: {rationale}',
    // Cards have three lines: reason (line 1, why it helps — see `suggestions`),
    // relation (line 2, how it ties to your palette), source (line 3, where
    // it's from). {work}/{artist} are proper nouns rendered verbatim; {family}
    // is a localized family name.
    // -- Relation line (line 2) — "why THIS color", the selection basis --
    relCoOccurrence: 'Seen with your {family}',
    relResemblance: 'In your palette’s spirit',
    // Catalogue (need-band) picks have no relationship to their source work —
    // the pigment was pulled purely because its color matches the need. So this
    // line owns that honestly: a close COLOR match that's a real-world color
    // (the true difference from a computed/synth pick), not a faked pairing.
    relCatalogue: 'A close real-world match',
    harmony_triadic: 'Triadic with your {family}',
    harmony_analogous: 'Analogous to your {family}',
    harmony_complementary: 'Complementary to your {family}',
    // -- Source line (line 3) — the preposition continues line 2's sentence:
    //    co-occurrence ("Seen with your X") flows into "in {work}"; resemblance
    //    and catalogue credit "from {work}". --
    fromWork: 'From {work}',
    fromWorkArtist: 'From {work}, {artist}',
    inWork: 'In {work}',
    inWorkArtist: 'In {work}, {artist}',
    sourceComputed: 'Color theory',
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
    othersSee: 'Other sources still see needs. Pick one above.',
  },

  errorBoundary: {
    heading: 'Something went wrong',
    description:
      'Something went wrong while drawing this screen. Your palette is saved in this browser. Try again, or reload to pick up where you left off.',
    tryAgain: 'Try again',
    reload: 'Reload page',
  },

  logo: {
    homeLabel: 'Contour, home',
  },

  notices: {
    shareDecodeFailed: 'That shared link didn’t decode. Start fresh below.',
    shareNothing: 'Nothing to share yet. Add a color to begin.',
    // The sidebar's Add-colors input: parse rejects keep the text in the box
    // for fixing; duplicates explain why nothing visibly happened.
    addSkipped_one: '{count} value did not parse.',
    addSkipped_other: '{count} values did not parse.',
    addDuplicates_one: '{count} color is already in the palette.',
    addDuplicates_other: '{count} colors are already in the palette.',
    addGreys_one: '{count} color settled into the neutral scale.',
    addGreys_other: '{count} colors settled into the neutral scale.',
    // Dropping an anchor on the trash removed a family's LAST color — the
    // family went with it (removeColorsFromFamily's emptied-family policy),
    // which deserves an explanation the way an explicit delete would get.
    removedLastAnchor: 'Its last color removed, {name} went with it.',
    shareCopied: 'Link copied. Paste it anywhere to return to this palette.',
    shareClipboardRefused: 'The clipboard wouldn’t take it. Select the value and copy it manually.',
    copyRefused: 'The clipboard wouldn’t take it. Select the value and copy it manually.',
    copied: 'Copied {value}',
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
    undoneSuffix: ' Undone.',
    redoneSuffix: ' Redone.',
    // The tappable action inside the delete notice (the only undo on touch).
    undoAction: 'Undo',
    // Confirms a discarded draft; the Undo action restores it.
    draftCleared: 'Draft cleared.',
    // Rename rejections: the field keeps the typed value so it can be fixed.
    renameTaken: '{name} already exists. Pick another name.',
    renameReserved: 'Neutral is a reserved name.',
    // The share URL failed to build (encode error) — nothing was copied.
    shareFailed: 'The link couldn’t be built. Try again.',
    // SR-audible confirmation when a suggestion joins the palette.
    familyAdded: '{name} added to the palette.',
  },

  undo: {
    retraceSuffix: ' {shortcut} to retrace.',
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
    titleRedundant: '{family}s read as one',
    titleProximity: '{family}s sit close',
    titleHueBend: '{family} loses its hue',
    titleEarthTint: '{family}, earthy by nature',
    titleGoldTint: '{family}, metallic by nature',
    titleDriftedTooFar: 'A {family} pulls away',
    // Mirrors the neutral header's own label ("NEUTRAL, TINTED WITH {source}")
    // so the card and the family row speak one language; {family} arrives
    // lowercased (mid-sentence value voice — see famTitle in ConflictReview).
    titleNeutralTint: 'Neutral, tinted with {family}',
    messageRedundant: 'shades reading as one',
    messageProximity: 'shades sitting close',
    messageHueBend: 'colors losing their hue',
    messageEarthTint: 'earthy natures',
    messageGoldTint: 'metallic natures',
    // The neutral-tint card: shown while the Neutral scale is infused. The
    // title states the condition (true at every strength), never a verdict.
    messageNeutralTint: 'tinted neutrals',
    // One-line description under each message in the "Worth reviewing" card.
    // {family} is the home family the drifted shade no longer matches.
    descDriftedTooFar: 'This shade feels far from the rest.',
    descRedundant: '{count} shades feel almost identical.',
    descProximity: '{count} are drawn to the same spot.',
    descHueBend: 'Darkened, it turns muddy.',
    // The earth-tint card: the condition, true under either answer. "Quiet"
    // rather than "muted" so the description does not pre-endorse the option
    // that happens to be called Muted.
    descEarthTint: 'Pale steps can go two ways.',
    descGoldTint: 'Pale steps can go two ways.',
    // {family} is the infusion SOURCE (the card sits on Neutral).
    descNeutralTint: 'They can carry more or less of it.',
    actionMoveTo: 'Move to {family}',
    moveToLabel: 'Move to',
    actionKeep: 'Keep',
    actionIgnore: 'Ignore',
    actionBlend: 'Blend',
    actionFocusOn: 'Focus on',
    // Which way the deep steps go. A direction, not a destination: the card's
    // dot already shows where it lands, and a destination has to be rendered and
    // classified before it can be stated truthfully (naming the ridge, "warm
    // brown", lied for most hues, since a pure yellow forced warm comes out
    // Orange and the sage side reads Green or Lime). Warmer/Cooler is true by
    // construction, and stable: it means the same thing on every card, where
    // "the other way" would follow the recommendation and so flip sense across
    // the crossover.
    // Bend card grey lead ("Bend it warmer"). Both languages pronoun the
    // subject — the card + description already name it (French with object
    // pronouns: "L'incliner", "Les garder").
    actionBendLabel: 'Bend it',
    actionBendWarmer: 'warmer',
    actionBendCooler: 'cooler',
    // Earth-tint pick. The decision is about the family's PALE steps ("Pale
    // steps can go two ways"), so "them" refers to those.
    actionEarthLabel: 'Keep them',
    actionEarthMuted: 'muted',
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
    filterLabel: 'Filter the review by kind of finding',
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
    // cards. Both languages drop the family name (French: "La/Les laisser").
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
    // Reasons frame the NEED a color serves (not its source).
    balances: 'Balances your {family}',
    couldFillRole: 'Could be your {role} color',
    fillsGap: 'Fills a gap in your palette',
    addsWarmth: 'Adds a warmer note',
    addsCoolness: 'Adds a cooler note',
    addsVivid: 'Adds a vivid note',
    addsDepth: 'Adds a deeper note',
    addsBright: 'Adds a brighter note',
    standsApart: 'Stands apart from your other colors',
    goesWith: 'Often pairs with your {family}',
    resembles: 'In your palette’s spirit',
    roleSuccess: 'success',
    roleWarning: 'warning',
    roleError: 'error',
    roleInfo: 'info',
    // {name} is a corpus proper noun (artwork/film title) — rendered verbatim.
    from: 'From {name}',
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
    'Your screen can show more colors than you most likely ever design with.',
    'Some colors look more vivid in the dark. Saturation does not stay put.',
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
 * Every leaf as a dot-path string-literal union (e.g. 'entry.startScratch').
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
 * Bases of `_one`/`_other` plural pairs (e.g. 'entry.collected'), for `tn()`.
 * The indirection through a generic param makes the conditional distribute over
 * the TKey union (a bare `TKey extends …` would test the whole union at once).
 */
type BaseOf<K> = K extends `${infer B}_other` ? B : never;
export type PluralBase = BaseOf<TKey>;
