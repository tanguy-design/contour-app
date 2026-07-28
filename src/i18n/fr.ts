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
    title: 'Contour : des outils de design conçus autour de la perception',
  },

  language: {
    label: 'Langue',
    en: 'English',
    fr: 'Français',
  },


  entry: {
    clearDraft: 'Supprimer cette palette',
    clearDraftAria: 'Supprimer cette palette',
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
    shareLabel: 'Copier le lien vers cette palette',
    exportLabel: 'Exporter au format W3C Design Tokens',
    newPaletteLabel: 'Créer une nouvelle palette',
    editToggleLabel: 'Organiser les couleurs',
    github: 'À propos de Contour',
    linkedin: 'Contour sur LinkedIn',
    resumeSection: 'Palettes sauvegardées',
    resumeAgeNote: 'Les palettes laissées de côté pendant {days} jours sont supprimées.',
    resumeCardAria_one: 'Ouvrir cette palette : {count} famille de couleurs, sauvegardée {time}',
    resumeCardAria_other: 'Ouvrir cette palette : {count} familles de couleurs, sauvegardée {time}',
    editToggleDoneLabel: 'Valider',
  },

  addColors: {
    empty: 'Une couleur est nécessaire pour créer une palette.',
    labelEmpty: 'Ajoutez toutes vos couleurs en une fois',
    pick: 'Choisir une couleur',
    fromImage: 'Depuis une image',
    create: 'Construire la palette',
    placeholder: '#2a6ef5, gold, {example}',
  },

  viewportGate: {
    title: 'Contour se travaille sur grand écran',
    lead: "L'espace de travail demande une fenêtre d'au moins 960 pixels de large.",
    bodyPalette:
      'Votre palette est enregistrée. Elle vous attendra dans une fenêtre plus large.',
    body: 'Ouvrez Contour dans une fenêtre plus large pour commencer.',
    rotateTitle: 'Tournez votre appareil',
    rotateBody: "Cette orientation est trop étroite pour l'espace de travail. Le paysage a la place.",
    illustrationAlt: 'Un aperçu de la palette',
  },

  themeSection: {
    regionLabelLight: 'Palette en mode clair',
    regionLabelDark: 'Palette en mode sombre',
    autoTag: 'Auto',
    deleteLabel: 'Supprimer la famille {name}',
    infuseNone: 'Sans teinte',
    infuseSelectLabel: 'Choisir une influence pour la famille Neutre',
    anchorTrash: 'Déposer pour retirer',
    neutralLabelUntinted: '{family}, sans teinte',
    neutralLabelTinted: '{family}, teintée de {source}',
  },

  swatchStrand: {
    strandLabel: 'Bande d’échantillons de couleur',
    pillLabel: '{step}. {value}{brand}{background}. Copie la valeur.',
    pillLabelEdit: '{step}. {value}{brand}{background}.',
    pillLabelEditAnchor: "{step}. {value}{brand}{background}. Ouvre le menu du point d'ancrage.",
    anchorMenuLabel: "Actions de la couleur d'origine",
    anchorMenuMove: 'Déplacer vers {family}',
    anchorMenuRemove: 'Retirer de la palette',
    pillCurrentBg: ', fond actuel',
    pillSource: ', {label}',
    sourceYours: 'Votre couleur de marque',
    sourceYoursShared: 'Vos {count} couleurs de marque',
    // Guillemets mark the verbatim (often English) work title and sidestep the
    // impossible static elision before a vowel ("de Adoration" → 'de « Adoration »').
    sourceFromBy: 'Couleur tirée de « {work} », par {artist}',
    sourceFrom: 'Couleur tirée de « {work} »',
    sourceAdjusted_one: '{label}, ajustée',
    sourceAdjusted_other: '{label}, ajustées',
  },

  chromaMode: {
    label: 'Ressenti',
    controlLabel: 'Mode d’intensité',
    naturalTitle: 'Naturel',
    naturalDescription: 'Idéal pour le marketing et la création',
    balancedTitle: 'Équilibré',
    balancedDescription: 'Idéal pour les interfaces produit',
    groundedTitle: 'Stable',
    groundedDescription: 'Idéal pour la visualisation de données',
  },

  environment: {
    /** Picker value with its self-describing prefix, e.g. "Readability on
     *  Neutral 100"; the "Readability on" part renders muted. */
    onValue: 'Lisibilité sur {value}',
    selectLabel: 'Choisir l’échantillon de fond pour la palette {mode}',
    surfacesGroup: 'Surfaces',
  },

  cvd: {
    // "Seen with Typical vision / Protanopia / …": the CVD simulation picker.
    prefix: 'Vu avec',
    selectLabel: 'Simuler une déficience de perception des couleurs',
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
    ariaLabel: 'Mode de palette',
    light: 'Clair',
    dark: 'Sombre',
  },

  colorSuggestions: {
    sectionLabel: 'À explorer',
    seedLabel: 'Un point de départ : suggérer une famille chromatique au hasard',
    seedTitle: 'Un point de départ',
    listLabel: 'Familles de couleurs suggérées',
    cardLabel: 'Ajouter la famille {family} : {rationale}',
    // -- Relation line (line 2) --
    relCoOccurrence: 'Vu avec la famille {family}',
    relResemblance: 'Dans l’esprit de votre palette',
    relCatalogue: 'Proche d’une référence réelle',
    harmony_triadic: 'Triadique avec la famille {family}',
    harmony_analogous: 'Analogue à la famille {family}',
    harmony_complementary: 'Complémentaire de la famille {family}',
    // -- Source line (line 3) -- Guillemets: verbatim titles, no elision issue.
    fromWork: 'Tiré de « {work} »',
    fromWorkArtist: 'Tiré de « {work} », {artist}',
    inWork: 'Dans « {work} »',
    inWorkArtist: 'Dans « {work} », {artist}',
    sourceComputed: 'Théorie des couleurs',
  },

  sourceLens: {
    label: 'Source des suggestions',
    // "Le meilleur de {value}" would break on bare values ("de Art"), so the
    // prefix keeps "dans": "Le meilleur, puisé dans Art".
    drawingFrom: 'Le meilleur, puisé dans',
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
    exhausted: '{lens} n\u2019a plus rien pour cette palette.',
    othersSee: 'D\u2019autres sources voient encore des besoins. Choisissez-en une ci-dessus.',
  },

  errorBoundary: {
    heading: 'Une erreur s’est produite',
    description:
      'Quelque chose s’est mal passé en dessinant cet écran. Votre palette est enregistrée dans ce navigateur. Réessayez, ou rechargez pour reprendre où vous en étiez.',
    tryAgain: 'Réessayer',
    reload: 'Recharger la page',
  },

  logo: {
    homeLabel: 'Contour, accueil',
  },

  notices: {
    addSkipped_one: '{count} valeur n’a pas été reconnue.',
    addSkipped_other: '{count} valeurs n’ont pas été reconnues.',
    addDuplicates_one: '{count} couleur est déjà dans la palette.',
    addDuplicates_other: '{count} couleurs sont déjà dans la palette.',
    addGreys_one: '{count} couleur s’est déposée dans l’échelle neutre.',
    addGreys_other: '{count} couleurs se sont déposées dans l’échelle neutre.',
    removedLastAnchor: 'Sa dernière couleur retirée, {name} a disparu.',
    shareDecodeFailed: 'Ce lien partagé n’a pas pu être lu. Repartez de zéro ci-dessous.',
    shareNothing: 'Rien à partager pour l’instant. Ajoutez une couleur pour commencer.',
    shareCopied: 'Lien copié. Collez-le n’importe où pour retrouver cette palette.',
    shareClipboardRefused: 'Le presse-papiers n’en a pas voulu. Sélectionnez la valeur et copiez-la manuellement.',
    copyRefused: 'Le presse-papiers n’en a pas voulu. Sélectionnez la valeur et copiez-la manuellement.',
    copied: 'Copié : {value}',
    imageTooLarge: 'Cette image est trop lourde. Essayez-en une sous {limit} Mo.',
    imageTooManyPixels: 'Cette image est trop grande à ouvrir. Essayez-en une sous {limit} mégapixels.',
    imageTooLong: 'Un côté de cette image est trop long. Essayez-en une dont les côtés font moins de {limit} pixels.',
    imageUnsupported: 'Ce type de fichier ne peut pas être lu. Essayez un PNG, un JPEG, un WebP, un HEIC ou un AVIF.',
    imageFormatUndecodable: 'Ce navigateur n’a pas pu ouvrir cette image {format}. Essayez de l’exporter en JPEG.',
    imageNoColors: 'Aucune couleur n’a pu être lue depuis cette image.',
    imageBusy: 'Lecture de l’image précédente en cours. Un instant.',
    imageAdded_one: '{count} couleur lue depuis l’image.',
    imageAdded_other: '{count} couleurs lues depuis l’image.',
    exportNothing: 'Rien à exporter pour l’instant. Ajoutez une couleur pour commencer.',
    exportFailed: 'Le téléchargement n’a pas démarré. Vérifiez les réglages de téléchargement du navigateur.',
    undoneSuffix: ' Annulé.',
    redoneSuffix: ' Rétabli.',
    undoAction: 'Annuler',
    draftCleared: 'Brouillon effacé.',
    renameTaken: '{name} existe déjà. Choisissez un autre nom.',
    renameReserved: 'Neutral est un nom réservé.',
    shareFailed: 'Le lien n’a pas pu être créé. Réessayez.',
    familyAdded: '{name} ajouté à la palette.',
  },

  undo: {
    retraceSuffix: ' {shortcut} pour revenir en arrière.',
    addedFamily: '{name} ajoutée.',
    deletedFamily: 'Famille {name} supprimée.',
    renamedFamily: 'Famille {from} renommée en {to}.',
    addedColors_one: '{count} couleur ajoutée.',
    addedColors_other: '{count} couleurs ajoutées.',
    movedAnchors_one: '{count} couleur déplacée vers {name}.',
    movedAnchors_other: '{count} couleurs déplacées vers {name}.',
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
    Brown: 'Brun',
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
    messageDriftedTooFar: 'nuances qui s\u2019éloignent',
    titleRedundant: '{family} : se lisent comme une seule',
    titleProximity: '{family} : très proches',
    titleHueBend: '{family} perd sa teinte',
    titleEarthTint: '{family}, terreux par nature',
    titleGoldTint: '{family}, métallique par nature',
    titleDriftedTooFar: 'Une nuance de {family} s\u2019éloigne',
    titleNeutralTint: 'Neutre, teinté de {family}',
    messageRedundant: 'nuances qui se lisent comme une',
    messageProximity: 'nuances très proches',
    messageHueBend: 'couleurs qui perdent leur teinte',
    messageEarthTint: 'natures terreuses',
    messageGoldTint: 'natures métalliques',
    messageNeutralTint: 'neutres teintés',
    descDriftedTooFar: 'Cette nuance semble loin des autres.',
    descRedundant: '{count} nuances semblent presque identiques.',
    descProximity: '{count} sont attirées vers le même point.',
    descHueBend: 'Assombrie, elle se brouille.',
    descEarthTint: 'Les pas clairs peuvent aller dans deux directions.',
    descGoldTint: 'Les pas clairs peuvent aller dans deux directions.',
    descNeutralTint: 'Ils peuvent en porter plus ou moins.',
    actionMoveTo: 'Déplacer vers {family}',
    moveToLabel: 'Déplacer vers',
    actionKeep: 'Garder',
    actionIgnore: 'Ignorer',
    actionBlend: 'Fusionner',
    actionFocusOn: 'Privilégier',
    actionBendLabel: 'L’incliner',
    actionBendWarmer: 'vers le chaud',
    actionBendCooler: 'vers le froid',
    actionEarthLabel: 'Les garder',
    // "les pas clairs" (masculin pluriel) — l'accord suit le sujet de la
    // description, comme les pronoms.
    actionEarthMuted: 'adoucis',
    // « Ils peuvent en porter plus ou moins » — accord masculin pluriel.
    tintWhisper: 'À peine',
    tintSoft: 'Légèrement',
    tintDeep: 'Fortement',
    tintSuffix: 'teintés',
  },

  reconcile: {
    reviewTitle: 'Mérite un coup d’œil',
    filterLead: 'Afficher',
    filterAll: 'tous les types',
    filterLabel: 'Filtrer la revue par type de constat',
    // Each resolution shows as a grey label + ink value (like "Pulling from").
    // Ink values are capitalized.
    blendRowLead: 'Les fusionner en',
    keepOneRow: '{ordinal} nuance',
    blendValue: 'une seule',
    /* « en l'état » est INVARIABLE — le même mot suit « La laisser » (elle,
       la couleur) et « Les laisser » (nuances ou pas), là où « tel quel »
       exigeait plusieurs accords différents. */
    keepValue: 'en l’état',
    leaveItLabel: 'La laisser',
    leaveThemLabel: 'Les laisser',
    keepTheLabel: 'Garder la',
    keepInLabel: 'Garder dans',
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
    balances: 'Équilibre la famille {family}',
    couldFillRole: 'Peut servir de couleur {role}',
    fillsGap: 'Comble un manque dans votre palette',
    addsWarmth: 'Ajoute une note plus chaude',
    addsCoolness: 'Ajoute une note plus froide',
    addsVivid: 'Ajoute une note plus vive',
    addsDepth: 'Ajoute une note plus profonde',
    addsBright: 'Ajoute une note plus claire',
    standsApart: 'Se détache de vos autres couleurs',
    goesWith: 'S’associe souvent à la famille {family}',
    resembles: 'Dans l’esprit de votre palette',
    roleSuccess: 'succès',
    roleWarning: 'avertissement',
    roleError: 'erreur',
    roleInfo: 'info',
    from: 'Tiré de « {name} »',
  },

  // Order matches en.facts exactly (index = same fact).
  facts: [
    'Fermez les yeux. La couleur que vous voyez n’est pas noire. C’est de l’eigengrau, environ #16161D. Votre rétine n’est jamais tout à fait silencieuse.',
    'Il n’existe pas de longueur d’onde pour le magenta. Votre cerveau l’invente pour combler l’écart entre le rouge et le bleu.',
    'Le ciel n’est pas bleu. Il contient toutes les longueurs d’onde, dispersées de façon inégale. Le bleu l’emporte, c’est tout.',
    'La zone la plus nette de votre vision couvre environ 1° de votre champ visuel. Vous lisez ceci par un trou de serrure.',
    'La majeure partie de votre rétine voit la lumière, pas la couleur.',
    'Placez la même couleur sur deux fonds différents et elle paraîtra différente. Tout le problème est là.',
    'Le blanc de votre écran est une approximation de la lumière du jour : une norme sur laquelle des gens se sont mis d’accord dans les années 1960.',
    'En faible lumière, le bleu paraît plus lumineux que le rouge. En plein jour, ils échangent discrètement leurs rôles.',
    'Une chemise blanche paraît blanche sous un néon comme au coucher du soleil. Votre cerveau corrige les couleurs en temps réel.',
    'La couleur n’est pas une propriété des objets. C’est un événement entre la lumière, une surface et votre système nerveux.',
    'Si vous avez déjà débattu pour savoir si quelque chose était vert ou bleu, l’un de vous a peut-être raison d’une manière que l’autre ne peut pas voir.',
    'Dans une pièce de 30 personnes, deux ou trois voient une palette de couleurs différente.',
    'HSL dit que le jaune et le bleu sont également lumineux à 50 % de luminosité. Vos yeux ne sont pas d’accord.',
    'Un bleu saturé paraît plus sombre. Un jaune saturé paraît plus clair. La luminosité s’improvise.',
    'Votre écran peut afficher plus de couleurs que vous n’en utiliserez sans doute jamais.',
    'Certaines couleurs semblent plus vives dans la pénombre. La saturation ne reste pas en place.',
    'Quand la luminosité baisse, les teintes dérivent. C’est l’une des raisons pour lesquelles le mode sombre n’est pas juste un mode clair inversé.',
    'Les ombres ne sont jamais noires. Elles portent la couleur de la lumière autour d’elles.',
    'La couleur s’efface sur les bords de votre vision. Ce que vous voyez en périphérie est surtout gris, complété par la mémoire.',
    'L’infrarouge existe. Vous ne le verrez jamais. Vos yeux sont une porte, pas une fenêtre.',
    'Plus l’eau est profonde, plus le rouge disparaît tôt. Le bleu tient le plus longtemps.',
    'Deux couleurs peuvent correspondre parfaitement sous une lumière et jurer sous une autre. C’est le métamérisme. La lumière a toujours fait partie de la couleur.',
    'Le daltonisme n’est pas de l’obscurité. C’est un autre vocabulaire pour la même lumière.',
    'Sous la lumière de la lune, les rouges deviennent gris foncé.',
    'Un même pigment paraît différent sur toile, sur papier et sur écran. La surface fait partie de la couleur.',
    'Vos yeux s’adaptent continuellement à la couleur. L’écran, non. Ce que vous voyez maintenant n’est pas ce que vous voyiez il y a une minute.',
    'Le spectre des couleurs est continu. Les noms de couleur ne sont que les frontières dont on débat.',
    'En faible lumière, la couleur ne disparaît pas. Vos yeux la relèguent simplement au second plan.',
    'Chaque couleur que vous voyez est une hypothèse. Trois types de cônes, une vie entière de contexte, et votre cerveau qui décide de ce qui doit être vrai.',
  ],
};
