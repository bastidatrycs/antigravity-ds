import { DesignSystem } from '@/lib/types'
import { CopyButton } from './CopyButton'

export function SpacingRadius({ system }: { system: DesignSystem }) {
  return (
    <section id="spacing" className="space-y-10">
      {/* Section header */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-meta">Spacing & Radius</span>
          <span className="text-[10px] text-meta">
            {system.spacing.length} spacing · {system.radius.length} radius
          </span>
        </div>
        <div className="h-px bg-neutral-200 mt-3" />
      </div>

      <div className="grid grid-cols-2 gap-16">
        {/* Spacing */}
        <div className="space-y-5">
          <div>
            <h3 className="text-[22px] font-bold text-neutral-900">Spacing Scale</h3>
            <p className="text-[13px] text-meta mt-2">Basis 4px-Grid. Konsistente Abstände von xxs (4px) bis section (96px).</p>
          </div>
          <div className="border-t border-neutral-200">
            {system.spacing.map((s) => (
              <div key={s.token} className="flex items-center gap-4 py-3 border-b border-neutral-200 group">
                <div className="w-20 shrink-0">
                  <div className="text-[13px] font-bold text-neutral-800">{s.token.replace('spacing-', '')}</div>
                  <div className="text-[11px] text-meta">{s.value}px</div>
                </div>
                <div
                  className="h-4 rounded-sm shrink-0"
                  style={{
                    width: `${Math.min(s.value * 2.4, 280)}px`,
                    backgroundColor: '#5E6AD2',
                    opacity: 0.35,
                  }}
                />
                <span className="ml-auto opacity-100">
                  <CopyButton value={`var(--${s.token})`} label={`--${s.token.replace('spacing-', '')}`} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Radius */}
        <div className="space-y-5">
          <div>
            <h3 className="text-[22px] font-bold text-neutral-900">Border Radius</h3>
            <p className="text-[13px] text-meta mt-2">Von kantig (none) bis Pill (full). Bei FCH dominiert radius-none.</p>
          </div>
          <div className="border-t border-neutral-200">
            {system.radius.map((r) => (
              <div key={r.token} className="flex items-center gap-5 py-4 border-b border-neutral-200 group">
                <div
                  className="w-12 h-12 shrink-0 border-2 border-neutral-300 bg-neutral-100"
                  style={{ borderRadius: r.value === 9999 ? '9999px' : `${r.value}px` }}
                />
                <div className="flex-1">
                  <div className="text-[13px] font-bold text-neutral-800">{r.token.replace('radius-', '')}</div>
                  <div className="text-[11px] text-meta mt-0.5">
                    {r.value === 9999 ? '∞ / pill' : `${r.value}px`}
                    {r.usage ? ` · ${r.usage}` : ''}
                  </div>
                </div>
                <span className="opacity-100">
                  <CopyButton value={`var(--${r.token})`} label={`--${r.token.replace('radius-', '')}`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
