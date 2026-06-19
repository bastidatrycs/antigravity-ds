import Link from 'next/link'
import Image from 'next/image'
import { systems } from '@/data/registry'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-8 py-5 flex items-center justify-between border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <Image src="/logos/datrycs-picto.svg" alt="Datrycs" width={22} height={27} />
          <span className="text-[13px] font-semibold text-neutral-900 tracking-[-0.01em]">ANtigravity</span>
        </div>
        <span className="text-[11px] text-neutral-400 tracking-wide uppercase">Design Systems</span>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-14">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-neutral-900 mb-2">
            Design System Library
          </h1>
          <p className="text-[14px] text-neutral-500 max-w-lg leading-relaxed">
            Extracted design tokens from real products — color palettes, typography, spacing and components, ready for developers.
          </p>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-2 gap-5">
          {systems.map((system) => {
            const brandPrimary = system.colors.find((c) => c.token === 'brand-primary')
            const surfaceDefault = system.colors.find((c) => c.token === 'surface-default')
            const isDark = surfaceDefault && parseInt(surfaceDefault.hex.slice(1), 16) < 0x888888 * 3
            const cardBg = surfaceDefault?.hex ?? '#F8F8F8'
            const cardText = isDark ? '#FFFFFF' : '#111111'
            const cardMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'

            return (
              <Link
                key={system.id}
                href={`/${system.id}`}
                className="group block rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-200"
              >
                {/* Card visual area */}
                <div
                  className="relative px-8 pt-10 pb-8"
                  style={{ backgroundColor: cardBg, minHeight: '200px' }}
                >
                  {/* Color dots strip top-right */}
                  <div className="absolute top-5 right-5 flex gap-1.5">
                    {system.colors
                      .filter((c) => !c.token.startsWith('text-') && !c.token.startsWith('border-') && !c.token.startsWith('semantic-'))
                      .slice(0, 5)
                      .map((c) => (
                        <div
                          key={c.token}
                          className="w-3 h-3 rounded-full border border-black/10"
                          title={c.token}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                  </div>

                  {/* Logo */}
                  <div className="mb-6">
                    {system.logo ? (
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                        }}
                      >
                        <Image
                          src={system.logo}
                          alt={system.name}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                    ) : brandPrimary ? (
                      <div
                        className="w-12 h-12 rounded-xl"
                        style={{ backgroundColor: brandPrimary.hex }}
                      />
                    ) : null}
                  </div>

                  {/* Name */}
                  <div
                    className="text-[18px] font-semibold tracking-[-0.02em] mb-1"
                    style={{ color: cardText }}
                  >
                    {system.name}
                  </div>
                  <div
                    className="text-[12px] leading-relaxed line-clamp-2 max-w-[280px]"
                    style={{ color: cardMuted }}
                  >
                    {system.description}
                  </div>
                </div>

                {/* Stats bar */}
                <div className="flex items-center gap-5 px-8 py-4 bg-white border-t border-neutral-100">
                  <Stat label="Colors" value={system.colors.length} />
                  <Stat label="Type" value={system.typography.length} />
                  <Stat label="Spacing" value={system.spacing.length} />
                  <Stat label="Components" value={system.components.length} />
                  <span className="ml-auto text-[10px] text-neutral-400 tabular-nums">{system.extractedAt}</span>
                </div>
              </Link>
            )
          })}

          {/* Add placeholder */}
          <div className="rounded-2xl border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center gap-3 min-h-[280px] bg-neutral-50/50 hover:bg-neutral-50 transition-colors cursor-default">
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
              <span className="text-neutral-400 text-xl leading-none">+</span>
            </div>
            <div>
              <div className="text-[12px] font-medium text-neutral-500">Add a design system</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Run the extractor on any website</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-[12px] font-semibold text-neutral-800 tabular-nums">{value}</span>
      <span className="text-[10px] text-neutral-400">{label}</span>
    </div>
  )
}
