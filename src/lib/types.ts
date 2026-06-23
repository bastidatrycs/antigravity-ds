export interface ColorToken {
  token: string
  display: string
  hex: string
  role: string
  group: string
}

export interface TypographyToken {
  token: string
  family: string
  size: number
  weight: number
  lineHeight: number
  tracking: number
  usage: string
  section: 'display' | 'body'
  textTransform?: 'none' | 'uppercase' | 'capitalize' | 'lowercase'
}

export interface SpacingToken {
  token: string
  value: number
  usage: string
}

export interface RadiusToken {
  token: string
  value: number
  usage: string
}

export interface ComponentVariant {
  label: string
  bg: string
  textColor: string
  border?: string
  borderBottom?: string
  opacity?: number
  ringColor?: string
  content?: string
  labelColor?: string   // overrides label text color (e.g. disabled)
  iconColor?: string    // explicit icon color override
  variantIcon?: string  // per-variant icon override (e.g. loader for loading state)
}

export interface ComponentSpec {
  name: string
  group: string
  description: string
  type: 'button' | 'badge-set' | 'card' | 'input' | 'custom'
  height: number
  paddingX: number
  radiusValue: number
  fontSize: number
  fontWeight: number
  fontFamily?: string
  icon?: string
  defaultContent: string
  variants: ComponentVariant[]
  cardContent?: { heading: string; body: string }
  hasLabel?: boolean   // render a label row above the field
  labelText?: string   // label string shown above the field
  rightIcon?: string   // icon key for the right side of the field
  customHtml?: string  // raw HTML snippet rendered directly — for product cards and complex components
}

export interface DesignSystem {
  id: string
  name: string
  description: string
  source: string
  platform?: 'shopware' | 'shopify' | 'headless'
  figmaFile?: string
  fontFaces?: string
  logo?: string
  coverImage?: string
  extractedAt: string
  colorGroups: string[]
  colors: ColorToken[]
  typography: TypographyToken[]
  spacing: SpacingToken[]
  radius: RadiusToken[]
  colorGroupDescriptions?: Record<string, string>
  typographyGroupDescriptions?: Partial<Record<'display' | 'body', string>>
  componentGroups: string[]
  componentGroupDescriptions?: Record<string, string>
  components: ComponentSpec[]
  principles: {
    do: string[]
    dont: string[]
  }
  breakpoints: { name: string; width: string; changes: string }[]
}
