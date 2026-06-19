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
import { SystemSidebar } from '@/components/SystemSidebar'

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

      <SystemSidebar />

      {/* Main content */}
      <div className="flex-1 bg-[#fafafa] overflow-auto">
        <main className="max-w-[1256px] mx-auto px-10 py-10 space-y-28">
          {/* System header */}
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-3">
                {system.logo && (
                  <Image src={system.logo} alt={system.name} width={36} height={36} className="object-contain" />
                )}
                <h1 className="text-[28px] font-semibold tracking-[-0.02em] text-neutral-900">{system.name}</h1>
              </div>
              <p className="text-meta text-[13px] leading-relaxed max-w-2xl">{system.description}</p>
              <div className="flex items-center gap-3 pt-1">
                <a href={system.source} target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-meta hover:text-neutral-600 transition-colors">
                  {system.source} ↗
                </a>
                <span className="text-neutral-200">·</span>
                <span className="text-[11px] text-meta">
                  {system.colors.length} colors · {system.typography.length} type tokens · {system.spacing.length} spacing
                </span>
                {system.figmaFile && (
                  <>
                    <span className="text-neutral-200">·</span>
                    <a href={`https://www.figma.com/design/${system.figmaFile}`} target="_blank" rel="noopener noreferrer"
                      className="text-[11px] text-meta hover:text-neutral-600 transition-colors">
                      Open in Figma ↗
                    </a>
                  </>
                )}
              </div>
            </div>
            <ExportBar system={system} />
          </div>

          {/* Sections */}
          <ColorPalette system={system} />
          <Typography system={system} />
          <SpacingRadius system={system} />
          <Components system={system} />
          <Principles system={system} />

          {/* Footer */}
          <footer className="border-t border-neutral-100 pt-8 pb-4 flex items-center justify-between">
            <span className="text-[11px] text-meta">Design Systems · by Datrycs · {system.extractedAt}</span>
            <a href={system.source} target="_blank" rel="noopener noreferrer"
              className="text-[11px] text-meta hover:text-neutral-600">
              {system.source}
            </a>
          </footer>
        </main>
      </div>
    </div>
  )
}
