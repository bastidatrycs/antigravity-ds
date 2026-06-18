'use client'

import { useState } from 'react'
import { DesignSystem } from '@/lib/types'

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 210
}

export function ColorPalette({ system }: { system: DesignSystem }) {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const copy = async (value: string, token: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 1500)
  }

  return (
    <section id="colors" className="space-y-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Color Palette</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{system.colors.length} tokens</span>
      </div>

      <div className="space-y-10">
        {system.colorGroups.map((group) => {
          const groupColors = system.colors.filter((c) => c.group === group)
          return (
            <div key={group} className="space-y-3">
              <div className="text-sm font-semibold text-neutral-500">{group}</div>
              <div className="grid grid-cols-5 gap-4">
                {groupColors.map((color) => (
                  <div
                    key={color.token}
                    onClick={() => copy(color.hex, color.token)}
                    className="cursor-pointer rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-400 hover:shadow-lg transition-all bg-white group"
                  >
                    {/* Full-bleed swatch — no gap, clipped by overflow-hidden + rounded-xl */}
                    <div
                      className="w-full h-24"
                      style={{
                        backgroundColor: color.hex,
                        boxShadow: isLight(color.hex) ? 'inset 0 0 0 1px rgba(0,0,0,0.07)' : 'none',
                      }}
                    />
                    <div className="px-3 pt-3 pb-3 space-y-1">
                      <div className="text-[13px] font-semibold text-neutral-800 truncate">{color.display}</div>
                      <div className="text-[12px] font-mono font-medium" style={{ color: '#5E6AD2' }}>
                        {copiedToken === color.token ? '✓ Copied!' : color.hex.toUpperCase()}
                      </div>
                      <div className="text-[11px] text-neutral-400 leading-snug">{color.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
