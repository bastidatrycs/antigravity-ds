import { DesignSystem } from '@/lib/types'

export const fchHansaRostockSystem: DesignSystem = {
  id: 'fch-hansa-rostock',
  name: 'F.C. Hansa Rostock',
  description: 'FCH-Blau als dominante Markenfarbe, Factoria-Bold in Großbuchstaben und Pinsel-Textur-Buttons — stark, norddeutsch, unsinkbar seit 1965.',
  source: 'https://www.fch.de/',
  extractedAt: '2026-06-18',

  fontFaces: `
    @font-face {
      font-family: 'Factoria-Bold';
      src: url('/fonts/fch/Factoria-Bold.woff2') format('woff2'),
           url('/fonts/fch/Factoria-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'noway-regular-webfont';
      src: url('/fonts/fch/noway-regular-webfont.woff2') format('woff2'),
           url('/fonts/fch/noway-regular-webfont.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'noway-regular-webfont';
      src: url('/fonts/fch/noway-medium-webfont.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'noway-regular-webfont';
      src: url('/fonts/fch/noway-light-webfont.woff2') format('woff2');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
  `,

  colorGroups: ['Brand', 'Surface', 'Border', 'Text', 'Semantic'],

  colors: [
    // Brand
    { token: 'brand-primary',   display: 'primary',   hex: '#0080C9', role: 'FCH-Blau · Header · H1/H2 · primäre CTAs',    group: 'Brand' },
    { token: 'brand-navy',      display: 'navy',      hex: '#143A77', role: 'Dunkles Navy · Gradient-Akzent',               group: 'Brand' },
    { token: 'brand-red',       display: 'red',       hex: '#9E0101', role: 'Vereinsrot · Roter Button-Variant',            group: 'Brand' },
    // Surface
    { token: 'surface-default', display: 'default',   hex: '#FFFFFF', role: 'Seiten-Hintergrund',                           group: 'Surface' },
    { token: 'surface-raised',  display: 'raised',    hex: '#FFFFFF', role: 'Leicht erhobene Fläche',                       group: 'Surface' },
    { token: 'surface-card',    display: 'card',      hex: '#EFEFEF', role: 'Card · Teaser-Hintergrund',                    group: 'Surface' },
    { token: 'surface-overlay', display: 'overlay',   hex: '#000000', role: 'Modal · Mobile-Overlay 85%',                   group: 'Surface' },
    // Border
    { token: 'border-default',  display: 'default',   hex: '#DDDDDD', role: 'Standard-Trennlinien · Rahmen',                group: 'Border' },
    { token: 'border-subtle',   display: 'subtle',    hex: '#EFEFEF', role: 'Subtile Rahmen',                               group: 'Border' },
    // Text
    { token: 'text-primary',    display: 'primary',   hex: '#333333', role: 'Body-Text',                                    group: 'Text' },
    { token: 'text-secondary',  display: 'secondary', hex: '#8D8D8D', role: 'Gedämpft · Hilfstext · Metadaten',             group: 'Text' },
    { token: 'text-muted',      display: 'muted',     hex: '#8D8D8D', role: 'De-emphasized · Zeitstempel',                  group: 'Text' },
    { token: 'text-inverse',    display: 'inverse',   hex: '#FFFFFF', role: 'Text auf Blau / dunklern Flächen',             group: 'Text' },
    { token: 'text-link',       display: 'link',      hex: '#0080C9', role: 'Interaktive Links',                            group: 'Text' },
    // Semantic
    { token: 'semantic-success', display: 'success',  hex: '#2D7A2D', role: 'Positive Zustände',                            group: 'Semantic' },
    { token: 'semantic-error',   display: 'error',    hex: '#9E0101', role: 'Fehler · destruktive Aktionen',                group: 'Semantic' },
    { token: 'semantic-warning', display: 'warning',  hex: '#E07800', role: 'Warnzustände',                                 group: 'Semantic' },
  ],

  typography: [
    { token: 'display', family: 'Factoria-Bold', size: 87, weight: 700, lineHeight: 87, tracking: 0, usage: 'Hero-Score · übergroße Zahlen · display-1', section: 'display' },
    { token: 'h1',      family: 'Factoria-Bold', size: 60, weight: 700, lineHeight: 72, tracking: 0, usage: 'Hauptüberschrift · UPPERCASE · FCH-Blau',    section: 'display' },
    { token: 'h2',      family: 'Factoria-Bold', size: 50, weight: 700, lineHeight: 60, tracking: 0, usage: 'Abschnittsüberschrift · UPPERCASE · FCH-Blau', section: 'display' },
    { token: 'h3',      family: 'Factoria-Bold', size: 38, weight: 700, lineHeight: 46, tracking: 0, usage: 'Unterabschnitt · UPPERCASE · FCH-Blau',       section: 'display' },
    { token: 'h4',      family: 'Factoria-Bold', size: 30, weight: 700, lineHeight: 36, tracking: 0, usage: 'Karten-Titel · UPPERCASE · FCH-Blau',         section: 'display' },
    { token: 'h5',      family: 'Factoria-Bold', size: 26, weight: 700, lineHeight: 32, tracking: 0, usage: 'Karten-Unterzeile · UPPERCASE · FCH-Blau',    section: 'display' },
    { token: 'h6',      family: 'Factoria-Bold', size: 20, weight: 700, lineHeight: 28, tracking: 0, usage: 'Membership-Titel · kleine Sektionsköpfe',     section: 'display' },
    { token: 'body-lg', family: 'noway-regular-webfont', size: 20, weight: 400, lineHeight: 28, tracking: 0, usage: 'Nav-Links · Button-Labels', section: 'body' },
    { token: 'body-md', family: 'noway-regular-webfont', size: 16, weight: 400, lineHeight: 24, tracking: 0, usage: 'Standard-Fließtext',        section: 'body' },
    { token: 'label-md',family: 'noway-regular-webfont', size: 14, weight: 400, lineHeight: 20, tracking: 0, usage: 'Sekundärer Text · Bildunterschriften', section: 'body' },
    { token: 'caption', family: 'noway-regular-webfont', size: 13, weight: 400, lineHeight: 18, tracking: 0, usage: 'Metadaten · Zeitstempel',     section: 'body' },
  ],

  spacing: [
    { token: 'spacing-xxs',     value: 4,   usage: 'Inline-Abstände, Icon-Margins' },
    { token: 'spacing-xs',      value: 8,   usage: 'Grid-Gutter, enge Padding (Bootstrap: 8px)' },
    { token: 'spacing-sm',      value: 16,  usage: 'Standard-Eingabe-Padding' },
    { token: 'spacing-md',      value: 24,  usage: 'Card-internes Padding' },
    { token: 'spacing-lg',      value: 32,  usage: 'Komponenten-Gruppenabstände' },
    { token: 'spacing-xl',      value: 48,  usage: 'Sektions-internes Padding' },
    { token: 'spacing-xxl',     value: 64,  usage: 'Sektions-Abstände' },
    { token: 'spacing-section', value: 96,  usage: 'Große Editorial-Band-Abstände' },
  ],

  radius: [
    { token: 'radius-none',   value: 0,    usage: 'Buttons, harte Kanten — dominantes Muster' },
    { token: 'radius-xs',     value: 2,    usage: 'Minimale Abrundung' },
    { token: 'radius-sm',     value: 4,    usage: 'Standard-Tags, kleine Inputs' },
    { token: 'radius-md',     value: 20,   usage: 'Cards, Teaser-Boxen, Panels' },
    { token: 'radius-lg',     value: 20,   usage: 'Große Panels' },
    { token: 'radius-full',   value: 9999, usage: 'Pills, Badge-Elemente' },
  ],

  componentGroups: ['Buttons', 'Navigation', 'Badges & Labels', 'Cards', 'Form Controls'],

  components: [
    // ── Buttons (Figma Members Page node 1569:1146) ──────────────────────────
    // Factoria-Bold · radius-none · vollständiges System
    {
      name: 'button-primary',
      group: 'Buttons',
      description: 'Primärer CTA — FCH-Blau, 48px, Factoria Bold 16px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Jetzt Mitglied werden',
      variants: [
        { label: 'Default',  bg: '#0080C9', textColor: '#FFFFFF' },
        { label: 'Hover',    bg: '#006FA2', textColor: '#FFFFFF' },
        { label: 'Disabled', bg: '#CCCCCC', textColor: '#999999', opacity: 0.6 },
      ],
    },
    {
      name: 'button-secondary',
      group: 'Buttons',
      description: 'Sekundärer CTA — Weiß mit FCH-Blau Rahmen, 48px, Factoria Bold 14px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 14, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Mehr erfahren',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#0080C9', border: '2px solid #0080C9' },
        { label: 'Hover',    bg: '#FFFFFF', textColor: '#006FA2', border: '2px solid #006FA2' },
        { label: 'Disabled', bg: '#FFFFFF', textColor: '#CCCCCC', border: '2px solid #CCCCCC', opacity: 0.6 },
      ],
    },
    {
      name: 'button-link',
      group: 'Buttons',
      description: 'Link-CTA — FCH-Blau, Factoria Bold 15px, nur Unterstrich-Rahmen',
      type: 'button',
      height: 23, paddingX: 0, radiusValue: 0,
      fontSize: 15, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Details ansehen',
      variants: [
        { label: 'Default', bg: 'transparent', textColor: '#0080C9', borderBottom: '2px solid #0080C9' },
        { label: 'Hover',   bg: 'transparent', textColor: '#006FA2', borderBottom: '2px solid #006FA2' },
      ],
    },
    {
      name: 'icon-button-primary',
      group: 'Buttons',
      description: 'Icon-CTA quadratisch — FCH-Blau, 46×46px, kein Radius',
      type: 'button',
      height: 46, paddingX: 0, radiusValue: 0,
      fontSize: 0, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: '→',
      variants: [
        { label: 'Default',  bg: '#0080C9', textColor: '#FFFFFF' },
        { label: 'Hover',    bg: '#006FA2', textColor: '#FFFFFF' },
        { label: 'Disabled', bg: '#CCCCCC', textColor: '#999999', opacity: 0.6 },
      ],
    },
    {
      name: 'nav-item',
      group: 'Navigation',
      description: 'Haupt-Navigationslink in der blauen Header-Bar — Factoria-Bold UPPERCASE',
      type: 'button',
      height: 56, paddingX: 16, radiusValue: 0,
      fontSize: 20, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'News',
      variants: [
        { label: 'Default', bg: 'transparent',       textColor: '#FFFFFF' },
        { label: 'Hover',   bg: 'rgba(0,0,0,0.15)', textColor: '#FFFFFF' },
        { label: 'Active',  bg: '#143A77',            textColor: '#FFFFFF' },
      ],
    },
    // ── Badges (Figma-Quelle: Components Page → "Badges" Component Set) ─────
    // height: 23px · paddingX: 6px · paddingY: 3px · radius: 0 · Factoria Bold 13px
    {
      name: 'badge-produkt',
      group: 'Badges & Labels',
      description: 'Produktkachel-Label — Factoria Bold 13px, radius-none (Figma-spec)',
      type: 'badge-set',
      height: 23, paddingX: 6, radiusValue: 0,
      fontSize: 13, fontWeight: 700,
      defaultContent: 'Neu',
      variants: [
        { label: 'Neu',    bg: '#007E54', textColor: '#FFFFFF', content: 'Neu' },
        { label: 'Sale',   bg: '#E52721', textColor: '#FFFFFF', content: '%' },
        { label: 'Tipp',   bg: '#0080C9', textColor: '#FFFFFF', content: 'Tipp' },
        { label: 'Damen',  bg: '#143A77', textColor: '#FFFFFF', content: 'Damen' },
        { label: 'Kinder', bg: '#143A77', textColor: '#FFFFFF', content: 'Kinder' },
        { label: 'Herren', bg: '#143A77', textColor: '#FFFFFF', content: 'Herren' },
      ],
    },
    {
      name: 'news-teaser-card',
      group: 'Cards',
      description: 'News-Artikel-Teaser mit Bild, Überschrift und kurzem Text',
      type: 'card',
      height: 0, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 400,
      defaultContent: 'Meldung lesen',
      variants: [
        { label: 'Default', bg: '#FFFFFF', textColor: '#333333', border: '1px solid #DDDDDD' },
        { label: 'Hover',   bg: '#EFEFEF', textColor: '#333333', border: '1px solid #DDDDDD' },
      ],
      cardContent: { heading: 'Meldung-Titel des Artikels', body: 'Kurze Beschreibung der News-Meldung in zwei bis drei Zeilen Fließtext.' },
    },
    {
      name: 'match-ticker',
      group: 'Cards',
      description: 'Spieltag-Karte mit Vereinswappen, Ergebnis und Datum — FCH-Blau-Hintergrund',
      type: 'card',
      height: 160, paddingX: 32, radiusValue: 0,
      fontSize: 52, fontWeight: 400,
      defaultContent: '2 : 1',
      variants: [
        { label: 'Heimspiel',  bg: '#0080C9', textColor: '#FFFFFF' },
        { label: 'Auswärtsspiel', bg: '#143A77', textColor: '#FFFFFF' },
      ],
      cardContent: { heading: '2 : 1', body: 'Hansa Rostock · Heimspiel' },
    },
    {
      name: 'membership-card',
      group: 'Cards',
      description: 'Mitgliedschafts-Kategorie-Box mit Titel und CTA',
      type: 'card',
      height: 0, paddingX: 24, radiusValue: 20,
      fontSize: 16, fontWeight: 400,
      defaultContent: 'Jetzt Mitglied werden',
      variants: [
        { label: 'Default',     bg: '#FFFFFF', textColor: '#333333', border: '1px solid #DDDDDD' },
        { label: 'Highlighted', bg: '#0080C9', textColor: '#FFFFFF' },
      ],
      cardContent: { heading: 'Mitgliedschaft Erwachsene', body: 'Ab 25 Jahre · Alle Vereinsvorteile' },
    },
    {
      name: 'search-input',
      group: 'Form Controls',
      description: 'Suchfeld mit Submit-Button',
      type: 'input',
      height: 48, paddingX: 16, radiusValue: 0,
      fontSize: 16, fontWeight: 400,
      defaultContent: 'Suche...',
      variants: [
        { label: 'Default', bg: '#FFFFFF', textColor: '#333333', border: '1px solid #DDDDDD' },
        { label: 'Focused', bg: '#FFFFFF', textColor: '#333333', border: '1px solid #0080C9', ringColor: '#0080C9' },
      ],
    },
  ],

  principles: {
    do: [
      'FCH-Blau (#0080C9) für Überschriften, Header-Hintergrund und primäre CTAs verwenden',
      'Factoria-Bold für alle Display-Elemente und CTAs in UPPERCASE setzen',
      'Kantige Formen einhalten — radius-none dominiert das gesamte UI',
      'Blau und Navy für Tiefe in Headern und Hero-Bereichen kombinieren',
      'noway-regular-webfont für alle Fließtexte und Beschreibungen nutzen',
    ],
    dont: [
      'Keine weichen, gerundeten CTAs — Hansa ist kantig, nicht freundlich-rund',
      'Factoria-Bold nicht in Kleinschreibung verwenden',
      'Keine pastelligen oder gesättigten Fremdfarben einsetzen',
      'Body-Copy nicht in Factoria-Bold setzen — noway ist der Fließtext-Font',
      'Niemals mehr als 3 Schriftgrößen in einem einzelnen Sektionsblock mischen',
    ],
  },

  breakpoints: [
    { name: 'Mobile',  width: '< 768px',    changes: 'Hamburger-Menü, gestapelte Cards, Buttons full-width' },
    { name: 'Tablet',  width: '768–992px',  changes: '2-Spalten-Layout, reduzierte Heading-Größen' },
    { name: 'Desktop', width: '992–1200px', changes: 'Standard 12-Spalten Bootstrap-Grid' },
    { name: 'Wide',    width: '> 1200px',   changes: 'Max-Width Container, großzügige Section-Abstände' },
  ],
}
