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

export interface ComponentSpec {
  name: string
  element: string
  dimensions: string
  colors: string
  typography: string
  radius: string
  notes: string
}

export interface DesignSystem {
  id: string
  name: string
  description: string
  source: string
  figmaFile?: string
  extractedAt: string
  colorGroups: string[]
  colors: ColorToken[]
  typography: TypographyToken[]
  spacing: SpacingToken[]
  radius: RadiusToken[]
  components: ComponentSpec[]
  principles: {
    do: string[]
    dont: string[]
  }
  breakpoints: { name: string; width: string; changes: string }[]
}
