import { DesignSystem } from '@/lib/types'

export function Components({ system }: { system: DesignSystem }) {
  return (
    <section id="components" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Components</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{system.components.length} components</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {system.components.map((comp) => (
          <div key={comp.name} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 space-y-3">
            <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">{comp.name}</div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex gap-2">
                <span className="text-neutral-400 w-20 shrink-0">Element</span>
                <span className="text-neutral-700 font-mono">{comp.element}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neutral-400 w-20 shrink-0">Size</span>
                <span className="text-neutral-700">{comp.dimensions}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neutral-400 w-20 shrink-0">Colors</span>
                <span className="text-neutral-700">{comp.colors}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neutral-400 w-20 shrink-0">Type</span>
                <span className="text-neutral-700">{comp.typography}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neutral-400 w-20 shrink-0">Radius</span>
                <span className="text-neutral-700">{comp.radius}</span>
              </div>
            </div>
            {comp.notes && (
              <div className="text-[10px] text-neutral-400 border-t border-neutral-200 pt-2 leading-relaxed">
                {comp.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
