'use client'

import { useState } from 'react'
import { DesignSystem } from '@/lib/types'
import { toCssVars, toJson, toTailwind } from '@/lib/export'

type Format = 'css' | 'json' | 'tailwind'

export function ExportBar({ system }: { system: DesignSystem }) {
  const [active, setActive] = useState<Format | null>(null)
  const [copied, setCopied] = useState(false)

  const content = active === 'css' ? toCssVars(system)
    : active === 'json' ? toJson(system)
    : active === 'tailwind' ? toTailwind(system)
    : null

  const copy = async () => {
    if (!content) return
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const download = () => {
    if (!content || !active) return
    const ext = active === 'json' ? 'json' : active === 'tailwind' ? 'js' : 'css'
    const name = `${system.id}-tokens.${ext}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = name; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-200">
        <span className="text-[11px] font-semibold text-neutral-600 mr-2">Export tokens as</span>
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
            {fmt === 'css' ? 'CSS Variables' : fmt === 'json' ? 'JSON (SD)' : 'Tailwind Config'}
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

      {active && content && (
        <pre className="p-4 text-[11px] font-mono text-neutral-700 bg-white overflow-x-auto max-h-64 leading-relaxed">
          {content.slice(0, 2000)}{content.length > 2000 ? '\n\n… (truncated — use Download for full file)' : ''}
        </pre>
      )}
    </div>
  )
}
