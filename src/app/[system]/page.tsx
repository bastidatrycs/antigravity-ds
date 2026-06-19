import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getSystem, systems } from '@/data/registry'
import { ColorPalette } from '@/components/ColorPalette'
import { Typography } from '@/components/Typography'
import { SpacingRadius } from '@/components/SpacingRadius'
import { Components } from '@/components/Components'
import { Principles } from '@/components/Principles'
import { ExportBar } from '@/components/ExportBar'

const NAV_ITEMS = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'components', label: 'Components' },
  { id: 'principles', label: 'Principles' },
]

export function generateStaticParams() {
  return systems.map((s) => ({ system: s.id }))
}

export default async function SystemPage({ params }: { params: Promise<{ system: string }> }) {
  const { system: systemId } = await params
  const system = getSystem(systemId)
  if (!system) notFound()

  return (
    <div className="flex min-h-screen">
      {system.fontFaces && (
        <style dangerouslySetInnerHTML={{ __html: system.fontFaces }} />
      )}

      {/* Sidebar */}
      <aside className="w-[200px] shrink-0 bg-white border-r border-neutral-100 flex flex-col sticky top-0 h-screen">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-neutral-100">
          <Link href="/">
            <Image src="/logos/datrycs-picto.svg" alt="Datrycs" width={22} height={27} />
          </Link>
        </div>

        {/* System info */}
        <div className="px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2 mb-1">
            {system.logo && (
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0">
                <Image src={system.logo} alt={system.name} width={18} height={18} className="object-contain" />
              </div>
            )}
            <span className="text-[12px] font-semibold text-neutral-800 truncate">{system.name}</span>
          </div>
          <div className="text-[10px] text-neutral-400">{system.extractedAt}</div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-3 flex-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-neutral-400 px-2 mb-2">Sections</div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-neutral-100">
          {system.figmaFile && (
            <a
              href={`https://www.figma.com/design/${system.figmaFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-neutral-400 hover:text-neutral-600 transition-colors block"
            >
              Open in Figma ↗
            </a>
          )}
          <div className="text-[10px] text-neutral-400 mt-1">by Datrycs</div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-[#fafafa] overflow-auto">
        {/* Top bar */}
        <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/90 backdrop-blur-sm px-8 py-3 flex items-center gap-2">
          <Link href="/" className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors">
            Library
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-[11px] font-medium text-neutral-800">{system.name}</span>

          <div className="ml-auto">
            <ExportBar system={system} />
          </div>
        </header>

        <main className="max-w-[1256px] mx-auto px-8 py-10 space-y-14">
          {/* System header */}
          <div className="space-y-2">
            <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-neutral-900">{system.name}</h1>
            <p className="text-neutral-500 text-[14px] leading-relaxed max-w-2xl">{system.description}</p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={system.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {system.source} ↗
              </a>
              <span className="text-neutral-200">·</span>
              <span className="text-[11px] text-neutral-400">
                {system.colors.length} colors · {system.typography.length} type tokens · {system.spacing.length} spacing
              </span>
            </div>
          </div>

          {/* Sections */}
          <ColorPalette system={system} />
          <Typography system={system} />
          <SpacingRadius system={system} />
          <Components system={system} />
          <Principles system={system} />

          {/* Footer */}
          <footer className="border-t border-neutral-100 pt-8 pb-4 flex items-center justify-between">
            <span className="text-[11px] text-neutral-400">Design Systems · by Datrycs · {system.extractedAt}</span>
            <a href={system.source} target="_blank" rel="noopener noreferrer" className="text-[11px] text-neutral-400 hover:text-neutral-600">
              {system.source}
            </a>
          </footer>
        </main>
      </div>
    </div>
  )
}
