import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getSystem, systems } from '@/data/registry'
import { ColorPalette } from '@/components/ColorPalette'
import { Typography } from '@/components/Typography'
import { SpacingRadius } from '@/components/SpacingRadius'
import { Components } from '@/components/Components'
import { Principles } from '@/components/Principles'
import { ExportBar } from '@/components/ExportBar'

export function generateStaticParams() {
  return systems.map((s) => ({ system: s.id }))
}

export default async function SystemPage({ params }: { params: Promise<{ system: string }> }) {
  const { system: systemId } = await params
  const system = getSystem(systemId)
  if (!system) notFound()

  const brandColor = system.colors.find((c) => c.token.includes('brand-primary') && !c.token.includes('text'))

  return (
    <div className="min-h-screen bg-white">
      {system.fontFaces && (
        <style dangerouslySetInnerHTML={{ __html: system.fontFaces }} />
      )}
      {/* Top nav */}
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-8 py-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-700 transition-colors">
            <div className="w-5 h-5 rounded bg-neutral-900 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">AG</span>
            </div>
            <span className="text-[11px] font-medium">All Systems</span>
          </Link>
          <span className="text-neutral-200">/</span>
          <div className="flex items-center gap-2">
            {brandColor && (
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brandColor.hex }} />
            )}
            <span className="text-[13px] font-semibold text-neutral-800">{system.name}</span>
          </div>

          {/* Jump nav */}
          <nav className="ml-auto flex items-center gap-1">
            {['colors', 'typography', 'spacing', 'components', 'principles'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="px-2.5 py-1 text-[11px] text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors capitalize"
              >
                {section}
              </a>
            ))}
            {system.figmaFile && (
              <a
                href={`https://www.figma.com/design/${system.figmaFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-3 py-1 text-[11px] font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-700 transition-colors"
              >
                Open in Figma ↗
              </a>
            )}
          </nav>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-8 py-10 space-y-14">
        {/* System header */}
        <div className="flex items-start justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">{system.name}</h1>
            <p className="text-neutral-500 text-[14px] leading-relaxed max-w-2xl">{system.description}</p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={system.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {system.source} ↗
              </a>
              <span className="text-neutral-200">·</span>
              <span className="text-[11px] text-neutral-400">Extracted {system.extractedAt}</span>
              <span className="text-neutral-200">·</span>
              <span className="text-[11px] text-neutral-400">
                {system.colors.length} colors · {system.typography.length} type tokens · {system.spacing.length} spacing
              </span>
            </div>
          </div>

          {/* Brand color preview */}
          {brandColor && (
            <div
              className="w-20 h-20 rounded-xl shrink-0 shadow-sm"
              style={{ backgroundColor: brandColor.hex }}
            />
          )}
        </div>

        {/* Export bar */}
        <ExportBar system={system} />

        {/* Sections */}
        <ColorPalette system={system} />
        <Typography system={system} />
        <SpacingRadius system={system} />
        <Components system={system} />
        <Principles system={system} />

        {/* Footer */}
        <footer className="border-t border-neutral-100 pt-8 pb-4 flex items-center justify-between">
          <span className="text-[11px] text-neutral-400">
            ANtigravity Design Systems · by Datrycs · {system.extractedAt}
          </span>
          <a href={system.source} target="_blank" rel="noopener noreferrer" className="text-[11px] text-neutral-400 hover:text-neutral-600">
            Source: {system.source}
          </a>
        </footer>
      </main>
    </div>
  )
}
