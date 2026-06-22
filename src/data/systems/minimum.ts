import { DesignSystem } from '@/lib/types'

export const minimumSystem: DesignSystem = {
  id: 'minimum',
  name: 'minimum',
  description:
    'Ultra-minimalistischer Möbel- und Design-Onlineshop — reine Schwarz-Weiß-Identität, null border-radius, Outfit-Variable-Font und warme Off-White-Akzentflächen.',
  source: 'https://www.minimum.de/',
  platform: 'shopware',
  extractedAt: '2026-06-19',

  fontFaces: `
    @font-face {
      font-family: 'Outfit';
      src: url('/fonts/minimum/Outfit-VariableFont_wght.ttf') format('truetype');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }
  `,

  colorGroups: ['Brand', 'Surface', 'Border', 'Text', 'Semantic'],
  colorGroupDescriptions: {
    Brand: 'Primäre Markenfarben — konsequent schwarz.',
    Surface: 'Hintergrundflächen — weiß, warm-weiß, dunkel.',
    Border: 'Rahmen und Trennlinien.',
    Text: 'Textfarben für alle Hierarchiestufen.',
    Semantic: 'Statusfarben für Verfügbarkeit, Fehler und Warnungen.',
  },
  colors: [
    { token: 'brand-primary',   display: 'primary',   hex: '#000000', role: 'Primäre CTAs · Buttons · Links',         group: 'Brand' },
    { token: 'surface-default', display: 'default',   hex: '#FFFFFF', role: 'Seitenbackground',                        group: 'Surface' },
    { token: 'surface-card',    display: 'card',      hex: '#F9F9F9', role: 'Kartenbackground · erhöhte Flächen',      group: 'Surface' },
    { token: 'surface-warm',    display: 'warm',      hex: '#F5F3EE', role: 'Warme Akzentfläche · Teaser-Sektionen',  group: 'Surface' },
    { token: 'surface-dark',    display: 'dark',      hex: '#0B1215', role: 'Footer · invertierte Sektionen',          group: 'Surface' },
    { token: 'border-default',  display: 'default',   hex: '#E5E5E5', role: 'Standard-Trennlinien · Rahmen',           group: 'Border' },
    { token: 'border-subtle',   display: 'subtle',    hex: '#EFEFEF', role: 'Subtile Divider',                         group: 'Border' },
    { token: 'border-strong',   display: 'strong',    hex: '#000000', role: 'Betonter Rahmen · aktive Inputs',         group: 'Border' },
    { token: 'text-primary',    display: 'primary',   hex: '#000000', role: 'Haupttext · Headlines',                   group: 'Text' },
    { token: 'text-secondary',  display: 'secondary', hex: '#4A545B', role: 'Sekundärer Text · Beschreibungen',        group: 'Text' },
    { token: 'text-muted',      display: 'muted',     hex: '#798490', role: 'Metadaten · deemphasized',                group: 'Text' },
    { token: 'text-inverse',    display: 'inverse',   hex: '#FFFFFF', role: 'Text auf dunklem Hintergrund',            group: 'Text' },
    { token: 'semantic-success', display: 'success',  hex: '#007E4E', role: 'Positiver Status · Auf Lager',            group: 'Semantic' },
    { token: 'semantic-error',   display: 'error',    hex: '#C20017', role: 'Fehler · Pflichtfeld-Hinweise',           group: 'Semantic' },
    { token: 'semantic-warning', display: 'warning',  hex: '#974200', role: 'Warnungen · Highlight',                   group: 'Semantic' },
  ],

  typographyGroupDescriptions: {
    display: 'Headlines und Display-Stile — verwendet für Hero, Sektions- und Card-Überschriften.',
    body: 'Fließtext, Labels und Captions für UI-Text.',
  },
  typography: [
    { token: 'display-xl', family: 'Outfit', size: 60, weight: 700, lineHeight: 72, tracking: 0, usage: 'Hero-Slider-Headlines',             section: 'display' },
    { token: 'display-lg', family: 'Outfit', size: 28, weight: 700, lineHeight: 34, tracking: 0, usage: 'Seitenüberschriften h1/h2',         section: 'display' },
    { token: 'display-md', family: 'Outfit', size: 24, weight: 700, lineHeight: 36, tracking: 0, usage: 'Kategorietitel',                    section: 'display' },
    { token: 'display-sm', family: 'Outfit', size: 22, weight: 700, lineHeight: 34, tracking: 0, usage: 'Sub-Sektionsüberschriften',          section: 'display' },
    { token: 'title-lg',   family: 'Outfit', size: 20, weight: 700, lineHeight: 24, tracking: 0, usage: 'Kachel-/Card-Titel',                section: 'display' },
    { token: 'title-md',   family: 'Outfit', size: 18, weight: 700, lineHeight: 18, tracking: 0, usage: 'Produktnamen',                      section: 'display' },
    { token: 'title-sm',   family: 'Outfit', size: 16, weight: 400, lineHeight: 24, tracking: 0, usage: 'Body large',                       section: 'body' },
    { token: 'body-md',    family: 'Outfit', size: 14, weight: 400, lineHeight: 21, tracking: 0, usage: 'Standard-Fließtext',               section: 'body' },
    { token: 'label-md',   family: 'Outfit', size: 13, weight: 400, lineHeight: 20, tracking: 0, usage: 'Labels · Metadaten',               section: 'body' },
    { token: 'caption',    family: 'Outfit', size: 12, weight: 700, lineHeight: 18, tracking: 0, usage: 'Captions · Preisangaben',          section: 'body' },
  ],

  spacing: [
    { token: 'spacing-xxs',     value: 4,  usage: 'Icon-Margins · Inline-Gaps' },
    { token: 'spacing-xs',      value: 8,  usage: 'Enge Component-Padding' },
    { token: 'spacing-sm',      value: 12, usage: 'Button-Padding X · Nav-Items' },
    { token: 'spacing-md',      value: 16, usage: 'Card-Innenabstand · Formularfelder' },
    { token: 'spacing-lg',      value: 24, usage: 'Komponentengruppen-Abstände' },
    { token: 'spacing-xl',      value: 40, usage: 'Sektions-Innenabstand' },
    { token: 'spacing-xxl',     value: 64, usage: 'Vertikale Sektions-Padding' },
    { token: 'spacing-section', value: 96, usage: 'Große Editorial-Band-Abstände' },
  ],

  radius: [
    { token: 'radius-none', value: 0,    usage: 'Alle UI-Elemente — konsequent eckig (Markenprinzip)' },
    { token: 'radius-xs',   value: 2,    usage: 'Reserviert — wird nicht verwendet' },
    { token: 'radius-sm',   value: 4,    usage: 'Reserviert — wird nicht verwendet' },
    { token: 'radius-md',   value: 6,    usage: 'Reserviert — wird nicht verwendet' },
    { token: 'radius-lg',   value: 12,   usage: 'Reserviert — wird nicht verwendet' },
    { token: 'radius-full', value: 9999, usage: 'Reserviert — wird nicht verwendet' },
  ],

  componentGroups: ['Buttons', 'Badges & Labels', 'Cards', 'Formularfelder'],
  componentGroupDescriptions: {
    Buttons: 'Primäre, Outline- und helle CTAs — exakt auf Bootstrap-5-Basis.',
    'Badges & Labels': 'Verfügbarkeits- und Status-Chips.',
    Cards: 'Merkmals- und Kategorie-Karten.',
    Formularfelder: 'Texteingaben und Suchfelder mit allen Zuständen.',
  },
  components: [
    {
      name: 'button-primary',
      group: 'Buttons',
      description: 'Primärer CTA — schwarze Füllung, weißer Text, kantig',
      type: 'button',
      height: 28,
      paddingX: 12,
      radiusValue: 0,
      fontSize: 14,
      fontWeight: 600,
      defaultContent: 'Alle Marken',
      variants: [
        { label: 'Default',  bg: '#000000', textColor: '#FFFFFF', border: '1px solid #000000' },
        { label: 'Hover',    bg: '#222222', textColor: '#FFFFFF', border: '1px solid #222222' },
        { label: 'Disabled', bg: '#000000', textColor: '#BCC1C7', border: '1px solid #000000' },
      ],
    },

    {
      name: 'button-outline',
      group: 'Buttons',
      description: 'Outline-Button — transparente Füllung, schwarzer Rahmen; Hover invertiert',
      type: 'button',
      height: 28,
      paddingX: 12,
      radiusValue: 0,
      fontSize: 14,
      fontWeight: 600,
      defaultContent: 'Mehr erfahren',
      variants: [
        { label: 'Default',  bg: 'transparent', textColor: '#000000', border: '1px solid #000000' },
        { label: 'Hover',    bg: '#000000',      textColor: '#FFFFFF', border: '1px solid #000000' },
        { label: 'Disabled', bg: 'transparent',  textColor: '#798490', border: '1px solid #D5D4D1' },
      ],
    },

    {
      name: 'button-light',
      group: 'Buttons',
      description: 'Heller Button — für Einsatz auf dunklem Hintergrund',
      type: 'button',
      height: 28,
      paddingX: 12,
      radiusValue: 0,
      fontSize: 14,
      fontWeight: 600,
      defaultContent: 'Entdecken',
      variants: [
        { label: 'Default', bg: '#F9F9F9', textColor: '#000000', border: '1px solid #F9F9F9' },
        { label: 'Hover',   bg: '#FFFFFF', textColor: '#000000', border: '1px solid #E5E5E5' },
      ],
    },

    {
      name: 'availability-badge',
      group: 'Badges & Labels',
      description: 'Verfügbarkeitsstatus-Chips — alle Zustände nebeneinander',
      type: 'badge-set',
      height: 22,
      paddingX: 8,
      radiusValue: 0,
      fontSize: 12,
      fontWeight: 700,
      defaultContent: 'Status',
      variants: [
        { label: 'Auf Lager',       bg: '#007E4E', textColor: '#FFFFFF',                                       content: 'Auf Lager' },
        { label: 'Bald verfügbar',  bg: '#F5F3EE', textColor: '#4A545B', border: '1px solid #D5D4D1',         content: 'Bald verfügbar' },
        { label: 'Nicht verfügbar', bg: '#F9F9F9', textColor: '#798490', border: '1px solid #EFEFEF',         content: 'Nicht verfügbar' },
        { label: 'Sale',            bg: '#C20017', textColor: '#FFFFFF',                                       content: 'Sale' },
      ],
    },

    {
      name: 'feature-card',
      group: 'Cards',
      description: 'Merkmals- und Kategorie-Karte mit Überschrift und Begleittext',
      type: 'card',
      height: 0,
      paddingX: 16,
      radiusValue: 0,
      fontSize: 18,
      fontWeight: 700,
      defaultContent: 'Stilvolles Wohnen',
      cardContent: {
        heading: 'Stilvolles Wohnen',
        body: 'Entdecke ausgewählte Designermöbel für dein Zuhause.',
      },
      variants: [
        { label: 'Default', bg: '#FFFFFF', textColor: '#000000', border: '1px solid #E5E5E5' },
        { label: 'Warm',    bg: '#F5F3EE', textColor: '#000000' },
      ],
    },

    {
      name: 'input-labeled',
      group: 'Formularfelder',
      description: 'Beschriftetes Texteingabefeld für Formulare',
      type: 'input',
      height: 40,
      paddingX: 12,
      radiusValue: 0,
      fontSize: 14,
      fontWeight: 400,
      hasLabel: true,
      labelText: 'E-Mail-Adresse',
      defaultContent: 'deine@email.de',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#000000', border: '1px solid #000000' },
        { label: 'Focused',  bg: '#FFFFFF', textColor: '#000000', border: '2px solid #000000' },
        { label: 'Error',    bg: '#FFFFFF', textColor: '#000000', border: '1px solid #C20017', labelColor: '#C20017' },
        { label: 'Filled',   bg: '#FFFFFF', textColor: '#000000', border: '1px solid #000000', content: 'bastian@datrycs.com' },
        { label: 'Disabled', bg: '#F9F9F9', textColor: '#798490', border: '1px solid #D5D4D1', labelColor: '#798490' },
      ],
    },

    {
      name: 'input-search',
      group: 'Formularfelder',
      description: 'Suchfeld ohne Label, mit Such-Icon rechts',
      type: 'input',
      height: 40,
      paddingX: 12,
      radiusValue: 0,
      fontSize: 14,
      fontWeight: 400,
      rightIcon: 'search',
      defaultContent: 'Suche nach Produkten …',
      variants: [
        { label: 'Default', bg: '#FFFFFF', textColor: '#666977', border: '1px solid #000000' },
        { label: 'Focused', bg: '#FFFFFF', textColor: '#000000', border: '2px solid #000000', iconColor: '#000000' },
      ],
    },
  ],

  principles: {
    do: [
      'Ausschließlich eckige Elemente (border-radius: 0) — konsequentes Markenzeichen',
      'Schwarz/Weiß als primäres Farbsystem; Farbe nur für Semantik (Grün/Rot)',
      'Outfit-Variable-Font für alle Textstufen (kein Font-Mix)',
      'Großzügigen Weißraum einsetzen — minimum lebt durch Stille zwischen Elementen',
      'Typografie-Gewichte (400/600/700) statt Farbe für Hierarchie nutzen',
    ],
    dont: [
      'Keine abgerundeten Ecken — auch nicht radius-xs (2px)',
      'Keine farbigen CTAs (außer Semantik) — Buttons immer schwarz oder Outline',
      'Keine zweite Schriftfamilie einführen',
      'Kein Letter-Spacing für gesperrte Labels (minimum nutzt kein Tracking)',
      'Keine Drop-Shadows — Rahmen statt Schatten für Tiefe',
    ],
  },

  breakpoints: [
    { name: 'Mobile',  width: '< 576px',    changes: 'Single column, Hamburger-Nav, kompakte Buttons' },
    { name: 'Small',   width: '576–768px',  changes: '2-spaltig (Bootstrap sm)' },
    { name: 'Tablet',  width: '768–992px',  changes: '3-spaltig, Nav sichtbar (Bootstrap md/lg)' },
    { name: 'Desktop', width: '992–1400px', changes: 'Vollständige Nav, 4-spaltig, max-width Container' },
    { name: 'Wide',    width: '> 1400px',   changes: 'Erweiterter Container (Bootstrap xxl: 1400px)' },
  ],
}
