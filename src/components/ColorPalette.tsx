'use client'

import { useState } from 'react'
import { DesignSystem } from '@/lib/types'

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

export function ColorPalette({ system }: { system: DesignSystem }) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const copy = async (value: string, token: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 1500)
  }

  return (
    <section id="colors" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">Color Palette</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-[10px] text-neutral-400">{system.colors.length} tokens</span>
      </div>

      <div className="space-y-5">
        {system.colorGroups.map((group) => {
          const groupColors = system.colors.filter((c) => c.group === group)
          return (
            <div key={group} className="flex gap-6 items-start">
              <div className="w-16 shrink-0 pt-1">
                <span className="text-[11px] font-semibold text-neutral-500">{group}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {groupColors.map((color) => (
                  <button
                    key={color.token}
                    onClick={() => copy(color.hex, color.token)}
                    className="group text-left w-[144px] rounded-md border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-sm transition-all"
                  >
                    <div
                      className="w-full h-16"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="px-2.5 pt-2 pb-2.5 space-y-0.5">
                      <div className="text-[11px] font-semibold text-neutral-800">{color.display}</div>
                      <div className="text-[11px] font-mono" style={{ color: '#5E6AD2' }}>
                        {copiedToken === color.token ? '✓ Copied!' : color.hex}
                      </div>
                      <div className="text-[10px] text-neutral-400 leading-tight">{color.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
