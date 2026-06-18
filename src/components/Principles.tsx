import { DesignSystem } from '@/lib/types'

export function Principles({ system }: { system: DesignSystem }) {
  return (
    <section id="principles" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Key Principles</h2>
        <div className="flex-1 h-px bg-neutral-100" />
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-3">
          <div className="text-[11px] font-semibold text-emerald-600">DO</div>
          {system.principles.do.map((item, i) => (
            <div key={i} className="flex gap-2.5 text-[12px] text-neutral-700 leading-relaxed">
              <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-[11px] font-semibold text-red-500">{"DON'T"}</div>
          {system.principles.dont.map((item, i) => (
            <div key={i} className="flex gap-2.5 text-[12px] text-neutral-700 leading-relaxed">
              <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
