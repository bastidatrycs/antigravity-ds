import Link from 'next/link'
import { systems } from '@/data/registry'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">AG</span>
          </div>
          <span className="text-[13px] font-semibold text-neutral-800">ANtigravity Design Systems</span>
        </div>
        <span className="text-[11px] text-neutral-400">by Datrycs</span>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-3">Design System Library</h1>
          <p className="text-neutral-500 text-[15px] leading-relaxed max-w-xl">
            Extracted design tokens from real products. Browse color palettes, typography scales, spacing systems, and more — with one-click export for developers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {systems.map((system) => {
            const brandColor = system.colors.find((c) => c.token.includes('brand-primary') && !c.token.includes('text'))
            return (
              <Link
                key={system.id}
                href={`/${system.id}`}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                {/* Color preview strip */}
                <div className="flex gap-1 mb-5">
                  {system.colors.slice(0, 8).map((c) => (
                    <div
                      key={c.token}
                      className="flex-1 h-8 rounded-sm first:rounded-l-md last:rounded-r-md"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {brandColor && (
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brandColor.hex }} />
                      )}
                      <h2 className="text-[15px] font-semibold text-neutral-900">{system.name}</h2>
                    </div>
                    <p className="text-[12px] text-neutral-500 leading-relaxed line-clamp-2 max-w-xs">
                      {system.description}
                    </p>
                  </div>
                  <span className="text-neutral-400 group-hover:text-neutral-600 transition-colors mt-0.5 shrink-0">→</span>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-100">
                  <span className="text-[10px] text-neutral-400">{system.colors.length} colors</span>
                  <span className="text-[10px] text-neutral-400">{system.typography.length} type tokens</span>
                  <span className="text-[10px] text-neutral-400">{system.spacing.length} spacing</span>
                  <span className="text-[10px] text-neutral-400 ml-auto">{system.extractedAt}</span>
                </div>
              </Link>
            )
          })}

          {/* Placeholder for future systems */}
          <div className="bg-neutral-50 border border-dashed border-neutral-200 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[160px]">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
              <span className="text-neutral-400 text-lg leading-none">+</span>
            </div>
            <div className="text-[12px] font-medium text-neutral-400">Add a design system</div>
            <div className="text-[11px] text-neutral-300">Run the extractor on any website</div>
          </div>
        </div>
      </main>
    </div>
  )
}
