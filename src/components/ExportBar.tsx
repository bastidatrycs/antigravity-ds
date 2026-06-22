'use client'

import { useState } from 'react'
import { DesignSystem } from '@/lib/types'
import { toCssVars, toCssSection, toJson, toTailwind, toShopwareScss, toShopwareThemeFields } from '@/lib/export'

type Format = 'css' | 'json' | 'tailwind'
type CssSection = 'colors' | 'typography' | 'spacing' | 'radius'

function downloadFile(content: string, name: string) {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = name; a.click()
  URL.revokeObjectURL(url)
}

export function ExportBar({ system }: { system: DesignSystem }) {
  const [active, setActive] = useState<Format | null>(null)
  const [copied, setCopied] = useState(false)
  const isShopware = system.platform === 'shopware'

  const content = active === 'css'
    ? (isShopware ? toShopwareScss(system) : toCssVars(system))
    : active === 'json'
    ? (isShopware ? toShopwareThemeFields(system) : toJson(system))
    : active === 'tailwind'
    ? toTailwind(system)
    : null

  const copy = async () => {
    if (!content) return
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const download = () => {
    if (!content || !active) return
    let filename: string
    if (isShopware) {
      filename = active === 'css' ? `_variables.scss`
        : active === 'json' ? `${system.id}-theme-fields.json`
        : `${system.id}-tokens.js`
    } else {
      const ext = active === 'json' ? 'json' : active === 'tailwind' ? 'js' : 'css'
      filename = `${system.id}-tokens.${ext}`
    }
    downloadFile(content, filename)
  }

  const downloadSection = (section: CssSection) => {
    downloadFile(toCssSection(system, section), `${system.id}-${section}.css`)
  }

  const tabLabel = (fmt: Format): string => {
    if (isShopware) {
      if (fmt === 'css') return 'SCSS (_variables.scss)'
      if (fmt === 'json') return 'theme.json fields'
    }
    return fmt === 'css' ? 'CSS Variables' : fmt === 'json' ? 'JSON' : 'Tailwind Config'
  }

  const CSS_SECTIONS: { key: CssSection; label: string }[] = [
    { key: 'colors',     label: 'Colors' },
    { key: 'typography', label: 'Typography' },
    { key: 'spacing',    label: 'Spacing' },
    { key: 'radius',     label: 'Radius' },
  ]

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden shrink-0">
      {/* Header row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex-wrap">
        <span className="text-[11px] font-semibold text-neutral-600 mr-1">Export tokens</span>
        {isShopware && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 font-medium mr-1">Shopware 6</span>
        )}
        {(['css', 'json', 'tailwind'] as Format[]).map((fmt) => (
          <button
            key={fmt}
            onClick={() => setActive(active === fmt ? null : fmt)}
            className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
              active === fmt
                ? 'bg-neutral-900 text-white'
                : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300'
            }`}
          >
            {tabLabel(fmt)}
          </button>
        ))}

        {active && (
          <div className="ml-auto flex gap-2">
            <button
              onClick={copy}
              className="px-3 py-1 rounded-md text-[11px] font-medium bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-600 transition-colors"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
            <button
              onClick={download}
              className="px-3 py-1 rounded-md text-[11px] font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Download
            </button>
          </div>
        )}
      </div>

      {/* Code preview */}
      {active && content && (
        <pre className="p-4 text-[11px] font-mono text-neutral-700 bg-white overflow-x-auto max-h-64 leading-relaxed border-b border-neutral-100">
          {content.slice(0, 2000)}{content.length > 2000 ? '\n\n… (truncated — use Download for full file)' : ''}
        </pre>
      )}

      {/* Per-section downloads */}
      <div className="flex items-center gap-1 px-4 py-2.5 bg-neutral-50 flex-wrap">
        {isShopware ? (
          <>
            <span className="text-[10px] text-meta mr-1.5">Download:</span>
            <button
              onClick={() => downloadFile(toShopwareScss(system), `_variables.scss`)}
              className="px-2.5 py-1 rounded text-[10px] font-medium bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 transition-colors"
            >
              _variables.scss ↓
            </button>
            <button
              onClick={() => downloadFile(toShopwareThemeFields(system), `${system.id}-theme-fields.json`)}
              className="px-2.5 py-1 rounded text-[10px] font-medium bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 transition-colors"
            >
              theme-fields.json ↓
            </button>
          </>
        ) : (
          <>
            <span className="text-[10px] text-meta mr-1.5">Download by section:</span>
            {CSS_SECTIONS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => downloadSection(key)}
                className="px-2.5 py-1 rounded text-[10px] font-medium bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 transition-colors"
              >
                {label} .css ↓
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
