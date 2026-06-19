import Link from 'next/link'
import Image from 'next/image'
import { systems } from '@/data/registry'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[52px] shrink-0 bg-white border-r flex flex-col items-center pt-4" style={{ borderColor: '#D4D4D4' }}>
        <Link href="/">
          <Image src="/logos/datrycs-picto.svg" alt="Datrycs" width={24} height={29} />
        </Link>
      </aside>

      {/* Main area */}
      <main className="flex-1 bg-[#fafafa]">
        <div className="max-w-[1256px] mx-auto px-10 py-10">
          <div className="mb-10">
            <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-neutral-900 mb-1.5">
              Design System Library
            </h1>
            <p className="text-[13px] text-meta max-w-lg leading-relaxed">
              Extracted design tokens from real products — color palettes, typography, spacing and components, ready for developers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {systems.map((system) => {
              const brandPrimary = system.colors.find((c) => c.token === 'brand-primary')
              const surfaceDefault = system.colors.find((c) => c.token === 'surface-default')
              const isDark = surfaceDefault && parseInt(surfaceDefault.hex.replace('#', ''), 16) < 0x808080 * 3

              return (
                <Link
                  key={system.id}
                  href={`/${system.id}`}
                  className="group block rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all duration-200 bg-white"
                >
                  {/* Cover image / gradient */}
                  <div className="relative h-[140px] overflow-hidden">
                    {system.coverImage ? (
                      <Image
                        src={system.coverImage}
                        alt={system.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: surfaceDefault?.hex ?? '#111111',
                          backgroundImage: brandPrimary
                            ? `radial-gradient(ellipse at 30% 50%, ${brandPrimary.hex}33 0%, transparent 70%)`
                            : undefined,
                        }}
                      />
                    )}
                  </div>

                  {/* Card info */}
                  <div className="px-4 pt-3.5 pb-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      {system.logo ? (
                        <div className="w-8 h-8 rounded-lg border border-neutral-150 bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <Image src={system.logo} alt={system.name} width={20} height={20} className="object-contain" />
                        </div>
                      ) : brandPrimary ? (
                        <div className="w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: brandPrimary.hex }} />
                      ) : null}
                      <span className="text-[14px] font-semibold text-neutral-900 tracking-[-0.01em]">
                        {system.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-meta leading-relaxed line-clamp-2 mb-3.5">
                      {system.description}
                    </p>
                  </div>

                  {/* Stats bar */}
                  <div className="flex items-center gap-4 px-4 py-3 border-t border-neutral-100">
                    <Stat value={system.colors.length} label="Colors" />
                    <Stat value={system.typography.length} label="Type" />
                    <Stat value={system.spacing.length} label="Spacing" />
                    <Stat value={system.components.length} label="Components" />
                    <span className="ml-auto text-[10px] text-meta tabular-nums">{system.extractedAt}</span>
                  </div>
                </Link>
              )
            })}

            {/* Add placeholder */}
            <div className="rounded-xl border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center gap-3 min-h-[260px] bg-neutral-50/50">
              <div className="w-9 h-9 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
                <span className="text-meta text-lg leading-none">+</span>
              </div>
              <div>
                <div className="text-[12px] font-medium text-meta">Add a design system</div>
                <div className="text-[11px] text-meta mt-0.5">Run the extractor on any website</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-[11px] font-semibold text-neutral-800 tabular-nums">{value}</span>
      <span className="text-[10px] text-meta">{label}</span>
    </div>
  )
}
