import { DesignSystem } from '@/lib/types'
import { CopyButton } from './CopyButton'

export function SpacingRadius({ system }: { system: DesignSystem }) {
  return (
    <section id="spacing" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Spacing & Radius</h2>
        <div className="flex-1 h-px bg-neutral-100" />
      </div>

      <div className="grid grid-cols-2 gap-12">
        {/* Spacing */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-neutral-500 mb-4">Spacing Scale · base 4px</div>
          {system.spacing.map((s) => (
            <div key={s.token} className="flex items-center gap-4 group">
              <div className="w-24 shrink-0 text-[13px] font-semibold text-neutral-700">
                {s.token.replace('spacing-', '')}
              </div>
              <div
                className="h-5 rounded bg-indigo-400/50 shrink-0"
                style={{ width: `${Math.min(s.value * 3.8, 320)}px` }}
              />
              <div className="text-xs text-neutral-400 w-10">{s.value}px</div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton value={`var(--${s.token})`} label={`--${s.token.replace('spacing-', '')}`} />
              </span>
            </div>
          ))}
        </div>

        {/* Radius */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-neutral-500 mb-4">Border Radius</div>
          <div className="flex flex-wrap gap-6">
            {system.radius.map((r) => (
              <div key={r.token} className="flex flex-col items-center gap-2.5 group">
                <div
                  className="w-16 h-16 border border-neutral-200 bg-neutral-100"
                  style={{ borderRadius: r.value === 9999 ? '9999px' : `${r.value}px` }}
                />
                <div className="text-center">
                  <div className="text-[12px] font-semibold text-neutral-600">
                    {r.token.replace('radius-', '')}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {r.value === 9999 ? '∞' : `${r.value}px`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
