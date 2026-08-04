/**
 * French strings.
 *
 * Mirrors the shape of en.ts (the source of truth). Keys and `{param}` slots
 * must match en; any key left out falls back to the English value at runtime,
 * so partial coverage stays safe. The i18n parity test flags gaps. No em
 * dashes in values, same voice rule as en.
 */
import type { Dict } from '@/i18n/en';

type DeepPartial<T> = T extends readonly (infer U)[]
  ? readonly DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export const fr: DeepPartial<Dict> = {
  meta: {
    title: 'Contour : des outils de design fondés sur la perception',
  },

  language: {
    label: 'Langue',
    en: 'English',
    fr: 'Français',
  },


  entry: {
    clearDraft: 'Supprimer cette palette',
  },

  liveCategorization: {
    renameLabel: 'Renommer la famille {name}',
    renameTitle: 'Renommer cette famille',
  },

  paletteScreen: {
    skipLink: 'Aller au contenu',
    heading: 'Contour',
    sidebarLabel: 'Réglages de la palette',
    title: 'Palette',
    shareLabel: 'Copier le lien de cette palette',
    exportLabel: 'Exporter au format W3C Design Tokens',
    editToggleLabel: 'Remixer les couleurs',
    github: 'Documentation de Contour (s’ouvre dans un nouvel onglet)',
    linkedin: 'Contour sur LinkedIn (s’ouvre dans un nouvel onglet)',
    resumeSection: 'Palettes enregistrées',
    resumeAgeNote: 'Les palettes laissées de côté pendant {days} jours sont supprimées. Votre navigateur peut le faire plus tôt.',
    resumeEmptyNote: 'Aucune palette enregistrée pour l’instant. Les prochaines seront conservées ici.',
    resumeCardAria_one: '{count} famille de couleurs, palette enregistrée {time}. Ouvrir cette palette.',
    resumeCardAria_other: '{count} familles de couleurs, palette enregistrée {time}. Ouvrir cette palette.',
    editToggleDoneLabel: 'Terminé',
  },

  hints: {
    trigger: 'En savoir plus : {subject}',
    feel: 'Règle à quel point les familles se rapprochent d’un même niveau d’intensité. Chacune peut garder son caractère ou se rapprocher des autres. Chaque point montre où en est une famille, et la traînée jusqu’où elle peut aller selon le mode choisi.',
    exploring: 'Des couleurs choisies pour combler un vrai manque dans la palette, venues de l’art, du cinéma, de la nature, de la théorie des couleurs et d’ailleurs. Chaque suggestion dit pourquoi elle a sa place et d’où elle vient.',
    reviewing: 'Certaines couleurs demandent un peu d’attention. Pour d’autres, c’est juste une question de goût. Contour a déjà choisi une option, mais vous pouvez en tester une autre et voir tout de suite ce que ça change dans la palette.',
    collecting: 'Écrivez ou collez toutes vos couleurs d’un coup, peu importe le format : hex, noms de couleurs, OKLCH, RGB, HSL et bien d’autres. Les deux carrés à gauche remplissent le même champ, l’un avec une couleur choisie, l’autre avec celles d’une image. Rien ne se génère tant que vous ne le demandez pas.',
  },

  addColors: {
    empty: 'Ajoutez au moins une couleur.',
    labelEmpty: 'Vos couleurs, en une seule fois',
    pick: 'Choisir une couleur',
    fromImage: 'Partir d’une image',
    create: 'Générer la palette',
    placeholder: '#2a6ef5, gold, {example}',
  },

  viewportGate: {
    title: 'Contour a besoin de plus de place.',
    lead: 'Comptez 960 pixels de large au minimum.',
    bodyPalette:
      'Votre palette est enregistrée dans ce navigateur. Elle vous y attend.',
    body: 'Agrandissez la fenêtre pour commencer.',
    leadSmallScreen: 'Comptez un écran de 960 pixels de large au minimum.',
    bodyPaletteSmallScreen:
      'Ce lien contient votre palette. Ouvrez-le sur un écran plus grand pour continuer.',
    bodySmallScreen: 'Revenez sur un écran plus grand pour commencer.',
    rotateTitle: 'Passez en mode paysage.',
    rotateBody: 'En hauteur, la fenêtre est trop étroite. En largeur, la place y est.',
    illustrationAlt: 'Un aperçu de la palette',
  },

  themeSection: {
    regionLabelLight: 'Palette en mode clair',
    regionLabelDark: 'Palette en mode sombre',
    autoTag: 'Auto',
    deleteLabel: 'Supprimer la famille {name}',
    infuseNone: 'Sans teinte',
    // « de », pas « avec » (choix 2026-07-30) : suit « teinté de {source} »,
    // même convention d'élision assumée que neutralLabelTinted.
    infuseGroup: 'Teinter de',
    infuseSelectLabel: 'Teinter la famille {family} avec une couleur',
    anchorTrash: 'Déposez ici pour retirer',
    neutralLabelUntinted: '{family}, sans teinte',
    // Masculin : « Neutre » est le nom de l'échelle, et le mot « famille »
    // n'apparaît pas ici, donc rien ne justifierait un féminin à l'écran.
    // conflicts.titleNeutralTint et conflicts.tintSuffix suivent le même sujet.
    neutralLabelTinted: '{family}, teinté de {source}',
  },

  swatchStrand: {
    strandLabel: 'Nuancier',
    pillLabel: 'Copier {step}',
    pillLabelEdit: '{step}',
    pillLabelEditAnchor: 'Déplacer ou retirer {step}',
    pillDescription: '{value}{brand}{background}',
    anchorMenuLabel: 'Actions pour cette couleur',
    anchorMenuMove: 'Déplacer vers la famille {family}',
    anchorMenuRemove: 'Retirer de la palette',
    pillCurrentBg: ', arrière-plan actuel',
    pillSource: ', {label}',
    sourceYours: 'Votre couleur de marque',
    sourceYoursShared: 'Vos {count} couleurs de marque',
    // Guillemets mark the verbatim (often English) work title and sidestep the
    // impossible static elision before a vowel ("de Adoration" → 'de « Adoration »').
    sourceFromBy: 'Couleur tirée de {work}, par {artist}',
    sourceFrom: 'Couleur tirée de {work}',
    sourceAdjusted_one: '{label}, ajustée',
    sourceAdjusted_other: '{label}, ajustées',
    // « dont » porte le partitif ; l'accord suit les couleurs ajustées.
    noteSomeAdjusted_one: '{label}, dont {count} ajustée',
    noteSomeAdjusted_other: '{label}, dont {count} ajustées',
  },

  chromaMode: {
    label: 'Ressenti',
    naturalTitle: 'Naturel',
    naturalDescription: 'Bien adapté au marketing et au graphisme',
    balancedTitle: 'Équilibré',
    balancedDescription: 'Bien adapté aux interfaces numériques',
    groundedTitle: 'Uniforme',
    groundedDescription: 'Bien adapté à la visualisation de données',
  },

  environment: {
    /** Picker value with its self-describing prefix, e.g. "Readability on
     *  Neutral 100"; the "Readability on" part renders muted. */
    onValue: 'Lisibilité sur {value}',
    selectLabel: 'Lisibilité mesurée sur',
    surfacesGroup: 'Surfaces',
  },

  cvd: {
    // "Seen with Typical vision / Protanopia / …": the CVD simulation picker.
    prefix: 'Vu avec',
    selectLabel: 'Simuler une déficience de la vision des couleurs',
    approximate:
      'Simulation approximative (Brettel 1997, Machado 2009). Explorez, puis vérifiez avec de vrais outils et de vraies personnes.',
    groupAnomalous: 'Trichromatie anormale',
    groupDichromacy: 'Dichromatie',
    groupMonochromacy: 'Monochromatie',
    none: 'Vision typique',
    protanomaly: 'Protanomalie',
    deuteranomaly: 'Deutéranomalie',
    tritanomaly: 'Tritanomalie',
    protanopia: 'Protanopie',
    deuteranopia: 'Deutéranopie',
    tritanopia: 'Tritanopie',
    achromatopsia: 'Achromatopsie',
  },

  themeToggle: {
    ariaLabel: 'Mode clair ou sombre',
    light: 'Clair',
    dark: 'Sombre',
  },

  colorSuggestions: {
    sectionLabel: 'À explorer',
    seedLabel: 'Laisser faire le hasard : ajouter une famille de couleurs',
    seedTitle: 'Laisser faire le hasard',
    listLabel: 'Familles de couleurs suggérées',
    cardAction: 'Ajouter cette famille.',
    // Une seule phrase par carte : « {reason} … » tissée avec son origine
    // (voir le bloc anglais pour le contrat). Pas de sujet « Elle » : la
    // proposition ouvre la phrase et prend la majuscule au rendu.
    // Pas de guillemets autour de {work} : le titre est rendu en italique
    // (<cite>), la convention typographique suffit — les deux ensemble
    // surchargeaient.
    sentCoOccurrence: '{reason} et a été vue avec votre {family} dans {work}.',
    sentCoOccurrenceArtist: '{reason} et a été vue avec votre {family} dans {work} par {artist}.',
    sentCoOccurrenceEcho: '{reason} et a été vue à ses côtés dans {work}.',
    sentCoOccurrenceEchoArtist: '{reason} et a été vue à ses côtés dans {work} par {artist}.',
    sentResemblance: '{reason} et reste dans l’esprit de votre palette, tirée de {work} par {artist}.',
    sentResemblanceNoArtist: '{reason} et reste dans l’esprit de votre palette, tirée de {work}.',
    sentSpirit: 'Elle reste dans l’esprit de votre palette, tirée de {work} par {artist}.',
    sentSpiritNoArtist: 'Elle reste dans l’esprit de votre palette, tirée de {work}.',
    sentFrom: '{reason} et vient de {work} par {artist}.',
    sentFromNoArtist: '{reason} et vient de {work}.',
    sentComputedHarmony: '{reason}, et elle se place {harmony}.',
    sentComputedNoHarmony: '{reason}, déduite de votre seule palette.',
    sentReasonOnly: '{reason}.',
    medium: {
      plumage: 'le plumage de {work}',
      coloring: 'la livrée de {work}',
      seaSlug: 'la limace de mer {work}',
      species: 'l’espèce {work}',
      park: 'le parc national de {work}',
      soil: 'le sol {work}',
      crayons: 'la boîte de crayons {work}',
      candy: 'les bonbons {work}',
      keyboard: 'le clavier {work}',
      joycon: 'les Joy-Con {work}',
      metro: 'le métro de {work}',
      nba: 'l’équipe NBA des {work}',
      film: 'le film {work}',
      series: 'la série {work}',
      character: 'le personnage {work}',
      characterIn: 'le personnage {work}, dans {series}',
      inWork: '{work}, dans {series}',
      album: 'l’album {work}',
      painting: 'le tableau {work}',
      watercolor: 'l’aquarelle {work}',
      poster: 'l’affiche {work}',
      pattern: 'le motif {work}',
      chart: 'le graphique {work}',
      artwork: 'l’œuvre {work}',
      photograph: 'la photographie {work}',
      spine: 'la reliure de {work}',
    },
    harmonyTriadic: 'à un tiers de la roue chromatique de votre {family}',
    harmonyAnalogous: 'juste à côté de votre {family} sur la roue chromatique',
    harmonyComplementary: 'juste en face de votre {family} sur la roue chromatique',
  },

  sourceLens: {
    label: 'Source des suggestions',
    // "dans", not "de": bare values would give "de Art". Not "parmi" either,
    // which needs a plural and breaks on six of the eight values ("parmi Art").
    // The prefix must leave the widest value ("Théorie des couleurs") room to
    // render untruncated in the pill; "le meilleur" was dropped with it —
    // it read as a judgement the English "the best" doesn't carry (owner's
    // call 2026-07-30, superseding the 2026-07-24 keep).
    drawingFrom: 'Déniché dans',
    all: 'Toutes les sources',
    art: 'Art',
    film: 'Cinéma et TV',
    music: 'Musique',
    nature: 'Nature',
    games: 'Jeux',
    objects: 'Objets',
    computed: 'Théorie des couleurs',
    subjectGroup: 'Sources',
    satisfiedComputed: 'Complète, selon la théorie des couleurs.',
    exhausted: 'Rien de plus côté {lens}.',
    othersSee: 'D’autres sources ont encore de quoi proposer.',
  },

  errorBoundary: {
    heading: 'Une erreur s’est produite',
    description:
      'Votre palette est enregistrée dans ce navigateur. Réessayez, ou actualisez la page pour reprendre où vous en étiez.',
    tryAgain: 'Réessayer',
    reload: 'Actualiser la page',
  },

  logo: {
    homeLabel: 'Accueil Contour',
  },

  notices: {
    channelLabel: 'Notifications',
    addSkipped_one: 'Impossible de lire {count} valeur.',
    addSkipped_other: 'Impossible de lire {count} valeurs.',
    addDuplicates_one: '{count} couleur est déjà dans la palette.',
    addDuplicates_other: '{count} couleurs sont déjà dans la palette.',
    addGreys_one: '{count} couleur s’est déposée dans les neutres.',
    addGreys_other: '{count} couleurs se sont déposées dans les neutres.',
    removedLastAnchor: 'La famille {name} a disparu avec sa dernière couleur.',
    shareDecodeFailed: 'Impossible de lire ce lien. Repartez de zéro ci-dessous.',
    shareNothing: 'Rien à partager pour l’instant. Ajoutez une couleur pour commencer.',
    shareCopied: 'Lien copié. Collez-le n’importe où pour retrouver cette palette.',
    shareClipboardRefused: 'Le presse-papiers n’a pas voulu du lien. Réessayez.',
    copyRefused: 'Le presse-papiers n’en a pas voulu. Sélectionnez la valeur et copiez-la manuellement.',
    copied: 'Copié : {value}.',
    imageTooLarge: 'Cette image est trop lourde. Essayez-en une sous {limit} Mo.',
    imageTooManyPixels: 'Cette image est trop grande pour être ouverte. Essayez-en une sous {limit} mégapixels.',
    imageTooLong: 'Un côté de cette image est trop long. Essayez-en une de moins de {limit} pixels de côté.',
    imageUnsupported: 'Ce type de fichier ne peut pas être lu. Essayez un PNG, un JPEG, un WebP, un HEIC ou un AVIF.',
    imageFormatUndecodable: 'Ce navigateur n’a pas pu ouvrir cette image {format}. Essayez de l’exporter en JPEG.',
    imageNoColors: 'Aucune couleur trouvée dans cette image.',
    imageBusy: 'Lecture de l’image précédente en cours. Un instant.',
    imageAdded_one: '{count} couleur trouvée dans l’image.',
    imageAdded_other: '{count} couleurs trouvées dans l’image.',
    exportNothing: 'Rien à exporter pour l’instant. Ajoutez une couleur pour commencer.',
    exportFailed: 'Le téléchargement n’a pas démarré. Vérifiez les réglages de votre navigateur.',
    undoneSuffix: 'Annulé.',
    redoneSuffix: 'Rétabli.',
    undoAction: 'Annuler',
    draftCleared: 'Palette supprimée.',
    renameTaken: '{name} existe déjà. Choisissez un autre nom.',
    renameReserved: 'Neutre est déjà l’échelle de gris. Choisissez un autre nom.',
    shareFailed: 'Le lien n’a pas pu être créé. Réessayez.',
    familyAdded: 'Famille {name} ajoutée à la palette.',
  },

  undo: {
    retraceSuffix: '{shortcut} pour revenir en arrière.',
    addedFamily: 'Famille {name} ajoutée.',
    deletedFamily: 'Famille {name} supprimée.',
    renamedFamily: 'Famille {from} renommée en {to}.',
    addedColors_one: '{count} couleur ajoutée.',
    addedColors_other: '{count} couleurs ajoutées.',
    movedAnchors_one: '{count} couleur déplacée vers la famille {name}.',
    movedAnchors_other: '{count} couleurs déplacées vers la famille {name}.',
    removedAnchors_one: '{count} couleur retirée.',
    removedAnchors_other: '{count} couleurs retirées.',
    clearedPalette: 'Palette effacée.',
  },

  families: {
    Red: 'Rouge',
    Orange: 'Orange',
    Yellow: 'Jaune',
    Lime: 'Vert citron',
    Green: 'Vert',
    Teal: 'Bleu canard',
    Cyan: 'Cyan',
    Blue: 'Bleu',
    Indigo: 'Indigo',
    Purple: 'Violet',
    Pink: 'Rose',
    Brown: 'Marron',
    Gold: 'Doré',
    Olive: 'Olive',
    Sage: 'Sauge',
    Navy: 'Bleu marine',
    Salmon: 'Saumon',
    Beige: 'Beige',
    Mist: 'Brume',
    Gray: 'Gris',
    Neutral: 'Neutre',
  },

  conflicts: {
    messageDriftedTooFar: 'les nuances qui détonnent',
    // {family} arrive pré-articulé (voir titleFamily dans ConflictReview) :
    // « Le Jaune » / « L’Or » pour les cartes-famille, « d’Orange » /
    // « de Marron » pour les cartes-nuances.
    titleRedundant: 'Des nuances {family} font doublon',
    titleProximity: 'Des nuances {family} se marchent dessus',
    titleHueBend: '{family} devient terne',
    titleEarthTint: '{family}, terreux de nature',
    titleGoldTint: '{family}, métal avant tout',
    titleDriftedTooFar: 'Une nuance {family} fait bande à part',
    titleNeutralTint: 'Neutre, teinté de {family}',
    messageRedundant: 'les nuances qui ne font qu’une',
    messageProximity: 'les nuances très proches',
    messageHueBend: 'les couleurs qui perdent leur teinte',
    messageEarthTint: 'les couleurs qui tirent vers la terre',
    messageGoldTint: 'les couleurs qui tirent vers le métal',
    messageNeutralTint: 'les neutres teintés',
    descDriftedTooFar: 'Une nuance s’éloigne assez du reste pour détonner dans la famille.',
    descRedundant: '{count} nuances si proches que l’œil n’en voit qu’une.',
    descProximity: '{count} nuances se disputent la même place.',
    descHueBend: 'Quand elle s’assombrit, cette couleur perd de son éclat.',
    descEarthTint: 'Ses tons clairs peuvent rester en retrait ou garder tout leur éclat.',
    descGoldTint: 'Ses tons clairs peuvent rester mats ou garder leur brillant.',
    descNeutralTint: 'La teinte peut être plus ou moins marquée.',
    // Phrases d'ÉTAT (la ligne de valeur) : le constat factuel du choix
    // actif, dans la continuité de la description ({value} = la part encre,
    // le reste en gris). Jamais un verdict.
    stateSteered: 'Pour l’instant, elle est amenée {value}.',
    stateHolds: 'Pour l’instant, elle {value}.',
    stateHoldsValue: 'garde son cap',
    stateTheyStay: 'Pour l’instant, ils restent {value}.',
    stateTheyKeep: 'Pour l’instant, ils gardent {value}.',
    stateEarthKeepValue: 'tout leur éclat',
    stateGoldKeepValue: 'leur brillant',
    stateTintRuns: 'Pour l’instant, elle l’est {value}.',
    stateTintWhisper: 'à peine',
    stateTintSoft: 'légèrement',
    stateTintDeep: 'franchement',
    stateTheyAre: 'Pour l’instant, elles {value}.',
    stateBlendValue: 'sont fondues en une',
    stateLeaveValue: 'restent telles quelles',
    stateKeepOne: 'Pour l’instant, seule la {value} reste.',
    stateStaysIn: 'Pour l’instant, elle reste dans {value}.',
    stateMovesTo: 'Pour l’instant, elle rejoint {value}.',
    actionMoveTo: 'Déplacer vers la famille {family}',
    moveToLabel: 'Déplacer vers la famille',
    actionBendLabel: 'La pousser',
    actionBendWarmer: 'vers le chaud',
    actionBendCooler: 'vers le froid',
    actionEarthLabel: 'Les garder',
    // "les tons clairs" (masculin pluriel) : l'accord suit le sujet de la
    // description, comme les pronoms.
    actionEarthMuted: 'adoucis',
    actionGoldMatte: 'mats',
    // « Ils peuvent en porter plus ou moins » — accord masculin pluriel.
    tintWhisper: 'À peine',
    tintSoft: 'Légèrement',
    tintDeep: 'Fortement',
    tintSuffix: 'teinté',
  },

  reconcile: {
    reviewTitle: 'À revoir',
    filterLead: 'Afficher',
    filterAll: 'tous les types',
    filterLabel: 'Filtrer par type',
    // Each resolution shows as a grey label + ink value (like "Pulling from").
    // Ink values are capitalized.
    blendRowLead: 'Les fusionner en',
    keepOneRow: '{ordinal} nuance',
    blendValue: 'une seule',
    /* « en l'état » est INVARIABLE — le même mot suit « La laisser » (elle,
       la couleur) et « Les laisser » (nuances ou pas), là où « tel quel »
       exigeait plusieurs accords différents. */
    keepValue: 'en l’état',
    leaveItLabel: 'Laisser',
    leaveThemLabel: 'Laisser',
    keepTheLabel: 'Garder la',
    keepInLabel: 'Garder dans la famille',
    // Ordinals for "Keep the {ordinal} shade" (ink-cased); fallback past twelve.
    ord1: 'première',
    ord2: 'deuxième',
    ord3: 'troisième',
    ord4: 'quatrième',
    ord5: 'cinquième',
    ord6: 'sixième',
    ord7: 'septième',
    ord8: 'huitième',
    ord9: 'neuvième',
    ord10: 'dixième',
    ord11: 'onzième',
    ord12: 'douzième',
    ordinalFallback: '{n}e',
    card2: 'Deux',
    card3: 'Trois',
    card4: 'Quatre',
    card5: 'Cinq',
    card6: 'Six',
    card7: 'Sept',
    card8: 'Huit',
    card9: 'Neuf',
    card10: 'Dix',
    card11: 'Onze',
    card12: 'Douze',
  },

  readability: {
    tier_0: 'Indistinct',
    tier_1: 'Perceptible',
    tier_2: 'Repérable',
    tier_3: 'Identifiable',
    tier_4: 'Lisible',
    tier_5: 'Confortable',
    tier_6: 'Sans effort',
  },

  suggestions: {
    // Des PROPOSITIONS complétant « Elle … » (voir le bloc anglais) :
    // minuscule initiale, pas de point final.
    balances: 'équilibre votre {family}',
    couldFillRole: 'peut servir de couleur {role}',
    fillsGap: 'comble un manque dans votre palette',
    addsWarmth: 'ajoute une note chaude',
    addsCoolness: 'ajoute une note froide',
    addsVivid: 'ajoute une note vive',
    addsDepth: 'ajoute une note profonde',
    addsBright: 'ajoute une note claire',
    standsApart: 'se détache de vos autres couleurs',
    goesWith: 's’associe souvent à votre {family}',
    resembles: 'reste dans l’esprit de votre palette',
    roleSuccess: 'de succès',
    roleWarning: 'd’avertissement',
    roleError: 'd’erreur',
    roleInfo: 'd’information',
  },

  // Order matches en.facts exactly (index = same fact).
  facts: [
    'Fermez les yeux. La couleur que vous voyez n’est pas noire. C’est de l’eigengrau, environ #16161D. Votre rétine n’est jamais complètement au repos.',
    'Il n’existe pas de longueur d’onde pour le magenta. Votre cerveau l’invente pour combler l’écart entre le rouge et le bleu.',
    'Le ciel n’est pas bleu. Il contient toutes les longueurs d’onde, dispersées de façon inégale. Le bleu l’emporte, c’est tout.',
    'La zone la plus nette de votre vision couvre environ 1° de votre champ visuel. Vous lisez ceci par un trou de serrure.',
    'La majeure partie de votre rétine voit la lumière, pas la couleur.',
    'Placez la même couleur sur deux fonds différents et elle paraîtra différente. Tout le problème est là.',
    'Le blanc de votre écran est une approximation de la lumière du jour : une norme sur laquelle des gens se sont mis d’accord dans les années 60.',
    'Dans la pénombre, le bleu paraît plus lumineux que le rouge. En plein jour, c’est l’inverse.',
    'Une chemise blanche paraît blanche sous un néon comme au coucher du soleil. Votre cerveau corrige les couleurs en temps réel.',
    'La couleur n’appartient pas aux objets. Elle se produit entre la lumière, une surface et votre système nerveux.',
    'Si vous avez déjà débattu pour savoir si quelque chose était vert ou bleu, l’un de vous a peut-être raison d’une manière que l’autre ne peut pas voir.',
    'Dans une pièce de 30 personnes, deux ou trois voient une palette de couleurs différente.',
    'HSL affirme qu’à 50 % de luminosité, le jaune et le bleu sont aussi lumineux. Vos yeux ne sont pas d’accord.',
    'Un bleu saturé paraît plus sombre, un jaune saturé plus clair : la luminosité s’improvise.',
    'Votre écran peut afficher plus de couleurs que vous n’en utiliserez jamais.',
    'Certaines couleurs semblent plus vives dans la pénombre. La saturation ne reste pas en place.',
    'Quand la luminosité baisse, les teintes dérivent. C’est l’une des raisons pour lesquelles le mode sombre n’est pas juste un mode clair inversé.',
    'Les ombres ne sont jamais noires. Elles portent la couleur de la lumière autour d’elles.',
    'La couleur s’efface sur les bords. Votre vision périphérique est surtout grise, complétée par la mémoire.',
    'L’infrarouge existe. Vous ne le verrez jamais. Vos yeux sont un filtre, pas une vitre.',
    'Plus l’eau est profonde, plus le rouge disparaît tôt. Le bleu tient le plus longtemps.',
    'Deux couleurs peuvent s’accorder sous une lumière et jurer sous une autre. C’est le métamérisme. La lumière a toujours fait partie de la couleur.',
    'Le daltonisme n’assombrit rien. C’est un autre vocabulaire pour la même lumière.',
    'Au clair de lune, les rouges deviennent gris foncé.',
    'Un même pigment paraît différent sur toile, papier ou écran. La surface fait partie de la couleur.',
    'Vos yeux s’adaptent continuellement à la couleur. L’écran, non. Ce que vous voyez maintenant n’est pas ce que vous voyiez il y a une minute.',
    'Le spectre des couleurs est continu. Les noms de couleur ne sont que les frontières dont on débat.',
    'En faible lumière, la couleur ne disparaît pas. Vos yeux la relèguent simplement au second plan.',
    'Chaque couleur que vous voyez est une hypothèse. Trois types de cônes, une vie entière de contexte, et votre cerveau qui tranche.',
  ],
};
