import { DesignSystem } from '@/lib/types'

export const fchHansaRostockSystem: DesignSystem = {
  id: 'fch-hansa-rostock',
  name: 'F.C. Hansa Rostock',
  description: 'FCH-Rot as the dominant brand color, Factoria-Bold in uppercase, and sharp-edged buttons — strong, North German, unsinkable since 1965.',
  source: 'https://www.fch.de/',
  platform: 'shopware',
  logo: '/logos/hansa.svg',
  coverImage: '/logos/hansa-cover.jpg',
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

  colorGroupDescriptions: {
    'Brand':    'FCH-Rot (#E52721) as the dominant brand color — headers, headings, and primary CTAs. Navy (#143A77) as a dark depth accent in headers and gradients. Club Red (#9E0101) for specific hero moments.',
    'Surface':  'White as the page and card background, light grey (#EFEFEF) for teaser boxes, black (85% opacity) for modal overlays.',
    'Border':   'Subtle dividers — default #DDDDDD, lighter #EFEFEF for barely visible borders.',
    'Text':     'Dark grey (#333333) for body text, mid-grey (#8D8D8D) for metadata. FCH-Rot as the link color.',
    'Semantic': 'Green for positive actions, red for errors and destructive actions, orange for warning states.',
  },

  typographyGroupDescriptions: {
    display: 'Factoria-Bold in uppercase, always in FCH-Rot (#E52721). From the hero number (87px) down to the smallest sub-heading h6 (20px). All heading sizes match Bootstrap 5 h1–h6.',
    body: 'noway-regular-webfont for all body copy, nav links, and labels. Readable, clear, and matter-of-fact — no uppercase, no Factoria.',
  },

  colors: [
    // Brand
    { token: 'brand-primary',   display: 'primary',   hex: '#E52721', role: 'FCH-Rot · Header · H1/H2 · Primary CTAs',  group: 'Brand' },
    { token: 'brand-navy',      display: 'navy',      hex: '#143A77', role: 'Dark Navy · Gradient Accent',                group: 'Brand' },
    { token: 'brand-red',       display: 'red',       hex: '#9E0101', role: 'Club Red · Red Button Variant',              group: 'Brand' },
    // Surface
    { token: 'surface-default', display: 'default',   hex: '#FFFFFF', role: 'Page Background',                            group: 'Surface' },
    { token: 'surface-raised',  display: 'raised',    hex: '#FFFFFF', role: 'Slightly Elevated Surface',                  group: 'Surface' },
    { token: 'surface-card',    display: 'card',      hex: '#EFEFEF', role: 'Card · Teaser Background',                   group: 'Surface' },
    { token: 'surface-overlay', display: 'overlay',   hex: '#000000', role: 'Modal · Mobile Overlay 85%',                 group: 'Surface' },
    // Border
    { token: 'border-default',  display: 'default',   hex: '#DDDDDD', role: 'Default Dividers · Borders',                 group: 'Border' },
    { token: 'border-subtle',   display: 'subtle',    hex: '#EFEFEF', role: 'Subtle Borders',                             group: 'Border' },
    // Text
    { token: 'text-primary',    display: 'primary',   hex: '#333333', role: 'Body Text',                                  group: 'Text' },
    { token: 'text-secondary',  display: 'secondary', hex: '#8D8D8D', role: 'Muted · Supporting Text · Metadata',         group: 'Text' },
    { token: 'text-muted',      display: 'muted',     hex: '#8D8D8D', role: 'De-emphasized · Timestamps',                 group: 'Text' },
    { token: 'text-inverse',    display: 'inverse',   hex: '#FFFFFF', role: 'Text on Blue / Dark Surfaces',               group: 'Text' },
    { token: 'text-link',       display: 'link',      hex: '#E52721', role: 'Interactive Links',                          group: 'Text' },
    // Semantic
    { token: 'semantic-success', display: 'success',  hex: '#2D7A2D', role: 'Positive States',                            group: 'Semantic' },
    { token: 'semantic-error',   display: 'error',    hex: '#9E0101', role: 'Errors · Destructive Actions',               group: 'Semantic' },
    { token: 'semantic-warning', display: 'warning',  hex: '#E07800', role: 'Warning States',                             group: 'Semantic' },
  ],

  typography: [
    { token: 'display', family: 'Factoria-Bold', size: 87, weight: 700, lineHeight: 87, tracking: 0, usage: 'Hero score · oversized numbers · display-1', section: 'display' },
    { token: 'h1',      family: 'Factoria-Bold', size: 60, weight: 700, lineHeight: 72, tracking: 0, usage: 'Main heading · UPPERCASE · FCH-Rot',          section: 'display' },
    { token: 'h2',      family: 'Factoria-Bold', size: 50, weight: 700, lineHeight: 60, tracking: 0, usage: 'Section heading · UPPERCASE · FCH-Rot',        section: 'display' },
    { token: 'h3',      family: 'Factoria-Bold', size: 38, weight: 700, lineHeight: 46, tracking: 0, usage: 'Sub-section · UPPERCASE · FCH-Rot',            section: 'display' },
    { token: 'h4',      family: 'Factoria-Bold', size: 30, weight: 700, lineHeight: 36, tracking: 0, usage: 'Card title · UPPERCASE · FCH-Rot',             section: 'display' },
    { token: 'h5',      family: 'Factoria-Bold', size: 26, weight: 700, lineHeight: 32, tracking: 0, usage: 'Card subtitle · UPPERCASE · FCH-Rot',          section: 'display' },
    { token: 'h6',      family: 'Factoria-Bold', size: 20, weight: 700, lineHeight: 28, tracking: 0, usage: 'Membership title · small section heads',        section: 'display' },
    { token: 'body-lg', family: 'noway-regular-webfont', size: 20, weight: 400, lineHeight: 28, tracking: 0, usage: 'Nav links · button labels', section: 'body' },
    { token: 'body-md', family: 'noway-regular-webfont', size: 16, weight: 400, lineHeight: 24, tracking: 0, usage: 'Default body copy',         section: 'body' },
    { token: 'label-md',family: 'noway-regular-webfont', size: 14, weight: 400, lineHeight: 20, tracking: 0, usage: 'Secondary text · captions', section: 'body' },
    { token: 'caption', family: 'noway-regular-webfont', size: 13, weight: 400, lineHeight: 18, tracking: 0, usage: 'Metadata · timestamps',     section: 'body' },
  ],

  spacing: [
    { token: 'spacing-xxs',     value: 4,   usage: 'Inline gaps, icon margins' },
    { token: 'spacing-xs',      value: 8,   usage: 'Grid gutters, tight padding (Bootstrap: 8px)' },
    { token: 'spacing-sm',      value: 16,  usage: 'Default input padding' },
    { token: 'spacing-md',      value: 24,  usage: 'Card internal padding' },
    { token: 'spacing-lg',      value: 32,  usage: 'Component group gaps' },
    { token: 'spacing-xl',      value: 48,  usage: 'Section internal padding' },
    { token: 'spacing-xxl',     value: 64,  usage: 'Section spacing' },
    { token: 'spacing-section', value: 96,  usage: 'Large editorial band gaps' },
  ],

  radius: [
    { token: 'radius-none',   value: 0,    usage: 'Buttons, hard edges — dominant pattern' },
    { token: 'radius-xs',     value: 2,    usage: 'Minimal rounding' },
    { token: 'radius-sm',     value: 4,    usage: 'Default tags, small inputs' },
    { token: 'radius-md',     value: 20,   usage: 'Cards, teaser boxes, panels' },
    { token: 'radius-lg',     value: 20,   usage: 'Large panels' },
    { token: 'radius-full',   value: 9999, usage: 'Pills, badge elements' },
  ],

  componentGroups: ['Buttons', 'Badges & Labels', 'Form Controls'],

  componentGroupDescriptions: {
    'Buttons': 'The FCH button system follows a sharp design principle — radius-none on all CTAs, Factoria-Bold as the typeface, FCH-Rot as the primary accent color. Buttons come in four variants: Primary (filled), Secondary (outlined), Link (underline), and Icon Button (square). Each variant is defined in Default, Hover, and Disabled states.',
    'Badges & Labels': 'Product tile labels in the shop — Factoria-Bold 13px, radius-none, color-coded by category.',
    'Form Controls': 'All form fields follow the same base pattern: 54px height, 2px border, 14px horizontal padding, radius-none. Border color signals state — default #E1E7EE, focused FCH-Rot, error red. Disabled fields use a grey background (#F5F5F5) and muted text.',
  },

  components: [
    {
      name: 'button-primary-with-icon',
      group: 'Buttons',
      description: 'Primary CTA with icon left — FCH-Rot, 48px, Factoria Bold 16px, icon 24×24px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      icon: 'wallet',
      defaultContent: 'Add to Wallet',
      variants: [
        { label: 'Default',  bg: '#E52721', textColor: '#FFFFFF' },
        { label: 'Hover',    bg: '#006FA2', textColor: '#FFFFFF' },
        { label: 'Disabled', bg: '#A6D3EC', textColor: '#FFFFFF' },
      ],
    },
    {
      name: 'button-primary',
      group: 'Buttons',
      description: 'Primary CTA — FCH-Rot, 48px, Factoria Bold 16px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Become a Member',
      variants: [
        { label: 'Default',  bg: '#E52721', textColor: '#FFFFFF' },
        { label: 'Hover',    bg: '#006FA2', textColor: '#FFFFFF' },
        { label: 'Disabled', bg: '#A6D3EC', textColor: '#FFFFFF' },
      ],
    },
    {
      name: 'button-secondary-with-icon',
      group: 'Buttons',
      description: 'Secondary CTA with icon — outlined, 48px, Factoria Bold 16px, icon 24×24px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      icon: 'file-invoice',
      defaultContent: 'Invoices & SEPA',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#E52721', border: '2px solid #E52721' },
        { label: 'Hover',    bg: '#FFFFFF', textColor: '#006FA2', border: '2px solid #006FA2' },
        { label: 'Disabled', bg: '#FFFFFF', textColor: '#A6D3EC', border: '2px solid #A6D3EC' },
      ],
    },
    {
      name: 'button-secondary',
      group: 'Buttons',
      description: 'Secondary CTA — white with FCH-Rot border, 48px, Factoria Bold 16px',
      type: 'button',
      height: 48, paddingX: 24, radiusValue: 0,
      fontSize: 16, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Invoices & SEPA',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#E52721', border: '2px solid #E52721' },
        { label: 'Hover',    bg: '#FFFFFF', textColor: '#006FA2', border: '2px solid #006FA2' },
        { label: 'Disabled', bg: '#FFFFFF', textColor: '#A6D3EC', border: '2px solid #A6D3EC' },
      ],
    },
    {
      name: 'button-link',
      group: 'Buttons',
      description: 'Link CTA — FCH-Rot, Factoria Bold 15px, underline border',
      type: 'button',
      height: 23, paddingX: 0, radiusValue: 0,
      fontSize: 15, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      defaultContent: 'Link Text',
      variants: [
        { label: 'Default',  bg: 'transparent', textColor: '#E52721', borderBottom: '2px solid #E52721' },
        { label: 'Hover',    bg: 'transparent', textColor: '#006FA2', borderBottom: '2px solid #006FA2' },
        { label: 'Disabled', bg: 'transparent', textColor: '#A6D3EC', borderBottom: '2px solid #A6D3EC' },
      ],
    },
    {
      name: 'icon-button-primary',
      group: 'Buttons',
      description: 'Primary icon button — FCH-Rot, 46×46px, radius-none, arrow icon',
      type: 'button',
      height: 46, paddingX: 0, radiusValue: 0,
      fontSize: 0, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      icon: 'arrow-right',
      defaultContent: '',
      variants: [
        { label: 'Default',  bg: '#E52721', textColor: '#FFFFFF' },
        { label: 'Hover',    bg: '#006FA2', textColor: '#FFFFFF' },
        { label: 'Disabled', bg: '#A6D3EC', textColor: '#FFFFFF' },
      ],
    },
    {
      name: 'icon-button-secondary',
      group: 'Buttons',
      description: 'Secondary icon button — outlined, 46×46px, radius-none, pen icon',
      type: 'button',
      height: 46, paddingX: 0, radiusValue: 0,
      fontSize: 0, fontWeight: 700,
      fontFamily: 'Factoria-Bold',
      icon: 'pen-line',
      defaultContent: '',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#E52721', border: '2px solid #E52721' },
        { label: 'Hover',    bg: '#FFFFFF', textColor: '#006FA2', border: '2px solid #006FA2' },
        { label: 'Disabled', bg: '#FFFFFF', textColor: '#A6D3EC', border: '2px solid #A6D3EC' },
      ],
    },
    {
      name: 'badge-product',
      group: 'Badges & Labels',
      description: 'Product tile label — Factoria Bold 13px, radius-none',
      type: 'badge-set',
      height: 23, paddingX: 6, radiusValue: 0,
      fontSize: 13, fontWeight: 700,
      defaultContent: 'New',
      variants: [
        { label: 'New',    bg: '#007E54', textColor: '#FFFFFF', content: 'New' },
        { label: 'Sale',   bg: '#E52721', textColor: '#FFFFFF', content: '%' },
        { label: 'Tip',    bg: '#E52721', textColor: '#FFFFFF', content: 'Tip' },
        { label: 'Women',  bg: '#143A77', textColor: '#FFFFFF', content: 'Women' },
        { label: 'Kids',   bg: '#143A77', textColor: '#FFFFFF', content: 'Kids' },
        { label: 'Men',    bg: '#143A77', textColor: '#FFFFFF', content: 'Men' },
      ],
    },
    {
      name: 'dropdown',
      group: 'Form Controls',
      description: 'Select dropdown — Noway Regular 15px, radius-none, 54px height, chevron icon right',
      type: 'input',
      height: 54, paddingX: 14, radiusValue: 0,
      fontSize: 15, fontWeight: 400,
      fontFamily: 'noway-regular-webfont',
      hasLabel: true, labelText: 'Label',
      rightIcon: 'chevron-down',
      defaultContent: 'Select an option...',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E1E7EE' },
        { label: 'Focused',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E52721' },
        { label: 'Filled',   bg: '#FDEAEA', textColor: '#111111', border: '2px solid #E52721', content: 'Option selected' },
        { label: 'Disabled', bg: '#F5F5F5', textColor: '#A1A1AB', border: '2px solid #E1E7EE', labelColor: '#A1A1AB', iconColor: '#A1A1AB' },
        { label: 'Error',    bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E02020' },
      ],
    },
    {
      name: 'search',
      group: 'Form Controls',
      description: 'Search field — Noway Regular 15px, radius-none, 54px height, no label, search icon right',
      type: 'input',
      height: 54, paddingX: 14, radiusValue: 0,
      fontSize: 15, fontWeight: 400,
      fontFamily: 'noway-regular-webfont',
      hasLabel: false,
      rightIcon: 'search',
      defaultContent: 'Enter search term...',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E1E7EE' },
        { label: 'Focused',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E52721' },
        { label: 'Filled',   bg: '#FDEAEA', textColor: '#111111', border: '2px solid #E52721', content: 'FC Hansa Rostock' },
        { label: 'Loading',  bg: '#FFFFFF', textColor: '#8D8D8D', border: '2px solid #E1E7EE', variantIcon: 'loader', iconColor: '#E52721' },
        { label: 'Disabled', bg: '#F5F5F5', textColor: '#A1A1AB', border: '2px solid #E1E7EE', iconColor: '#A1A1AB' },
      ],
    },
    {
      name: 'input-with-icon',
      group: 'Form Controls',
      description: 'Text input with right-side icon — Noway Regular 15px, radius-none, 54px height, calendar icon',
      type: 'input',
      height: 54, paddingX: 14, radiusValue: 0,
      fontSize: 15, fontWeight: 400,
      fontFamily: 'noway-regular-webfont',
      hasLabel: true, labelText: 'Label',
      rightIcon: 'calendar',
      defaultContent: 'Select date...',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E1E7EE' },
        { label: 'Focused',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E52721' },
        { label: 'Filled',   bg: '#FDEAEA', textColor: '#111111', border: '2px solid #E52721', content: '12.06.2026' },
        { label: 'Disabled', bg: '#F5F5F5', textColor: '#A1A1AB', border: '2px solid #E1E7EE', labelColor: '#A1A1AB', iconColor: '#A1A1AB' },
        { label: 'Error',    bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E02020' },
      ],
    },
    {
      name: 'input',
      group: 'Form Controls',
      description: 'Standard text input — Noway Regular 15px, radius-none, 54px height, no icon',
      type: 'input',
      height: 54, paddingX: 14, radiusValue: 0,
      fontSize: 15, fontWeight: 400,
      fontFamily: 'noway-regular-webfont',
      hasLabel: true, labelText: 'Label',
      defaultContent: 'Enter text...',
      variants: [
        { label: 'Default',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E1E7EE' },
        { label: 'Focused',  bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E52721' },
        { label: 'Filled',   bg: '#FDEAEA', textColor: '#111111', border: '2px solid #E52721', content: 'Text value' },
        { label: 'Disabled', bg: '#F5F5F5', textColor: '#A1A1AB', border: '2px solid #E1E7EE', labelColor: '#A1A1AB' },
        { label: 'Error',    bg: '#FFFFFF', textColor: '#333333', border: '2px solid #E02020' },
      ],
    },
  ],

  principles: {
    do: [
      'Use FCH-Rot (#E52721) for headings, header backgrounds, and primary CTAs',
      'Set Factoria-Bold in UPPERCASE for all display elements and CTAs',
      'Maintain sharp shapes — radius-none dominates the entire UI',
      'Combine blue and navy for depth in headers and hero sections',
      'Use noway-regular-webfont for all body copy and descriptions',
    ],
    dont: [
      'No soft, rounded CTAs — Hansa is sharp, not friendly-round',
      'Never use Factoria-Bold in lowercase',
      'Do not use pastel or saturated non-brand colors',
      'Do not set body copy in Factoria-Bold — noway is the body text font',
      'Never mix more than 3 type sizes in a single section block',
    ],
  },

  breakpoints: [
    { name: 'Mobile',  width: '< 768px',    changes: 'Hamburger menu, stacked cards, full-width buttons' },
    { name: 'Tablet',  width: '768–992px',  changes: '2-column layout, reduced heading sizes' },
    { name: 'Desktop', width: '992–1200px', changes: 'Standard 12-column Bootstrap grid' },
    { name: 'Wide',    width: '> 1200px',   changes: 'Max-width container, generous section spacing' },
  ],
}
