import { DesignSystem } from './types'

export function toCssVars(system: DesignSystem): string {
  const lines: string[] = [`:root {`]

  lines.push(`  /* Colors */`)
  for (const c of system.colors) {
    lines.push(`  --${c.token}: ${c.hex};`)
  }

  lines.push(`\n  /* Spacing */`)
  for (const s of system.spacing) {
    lines.push(`  --${s.token}: ${s.value}px;`)
  }

  lines.push(`\n  /* Radius */`)
  for (const r of system.radius) {
    lines.push(`  --${r.token}: ${r.value === 9999 ? '9999px' : `${r.value}px`};`)
  }

  lines.push(`\n  /* Typography */`)
  for (const t of system.typography) {
    lines.push(`  --font-size-${t.token}: ${t.size}px;`)
    lines.push(`  --font-weight-${t.token}: ${t.weight};`)
    lines.push(`  --line-height-${t.token}: ${t.lineHeight}px;`)
    if (t.tracking !== 0) lines.push(`  --letter-spacing-${t.token}: ${t.tracking}px;`)
  }

  lines.push(`}`)
  return lines.join('\n')
}

export function toJson(system: DesignSystem): string {
  const tokens: Record<string, Record<string, unknown>> = {
    color: {},
    spacing: {},
    radius: {},
    typography: {},
  }

  for (const c of system.colors) {
    tokens.color[c.token] = { value: c.hex, role: c.role, group: c.group }
  }
  for (const s of system.spacing) {
    tokens.spacing[s.token] = { value: `${s.value}px`, usage: s.usage }
  }
  for (const r of system.radius) {
    tokens.radius[r.token] = { value: r.value === 9999 ? '9999px' : `${r.value}px`, usage: r.usage }
  }
  for (const t of system.typography) {
    tokens.typography[t.token] = {
      fontFamily: t.family,
      fontSize: `${t.size}px`,
      fontWeight: t.weight,
      lineHeight: `${t.lineHeight}px`,
      letterSpacing: `${t.tracking}px`,
      usage: t.usage,
    }
  }

  return JSON.stringify(tokens, null, 2)
}

export function toTailwind(system: DesignSystem): string {
  const colors: Record<string, string> = {}
  for (const c of system.colors) {
    colors[c.token] = c.hex
  }

  const spacing: Record<string, string> = {}
  for (const s of system.spacing) {
    spacing[s.token.replace('spacing-', '')] = `${s.value}px`
  }

  const borderRadius: Record<string, string> = {}
  for (const r of system.radius) {
    borderRadius[r.token.replace('radius-', '')] = r.value === 9999 ? '9999px' : `${r.value}px`
  }

  const config = {
    theme: {
      extend: {
        colors,
        spacing,
        borderRadius,
      },
    },
  }

  return `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${JSON.stringify(config, null, 2)}`
}
