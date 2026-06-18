'use client'
import { useState } from 'react'
import { DesignSystem, ComponentSpec, ComponentVariant } from '@/lib/types'

// ─── Per-type renderers ────────────────────────────────────────────────────

function ButtonPreview({ comp, variant }: { comp: ComponentSpec; variant: ComponentVariant }) {
  const content = variant.content ?? comp.defaultContent
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: comp.height,
        paddingLeft: comp.paddingX,
        paddingRight: comp.paddingX,
        borderRadius: comp.radiusValue,
        backgroundColor: variant.bg,
        color: variant.textColor,
        fontSize: comp.fontSize,
        fontWeight: comp.fontWeight,
        border: variant.border ?? 'none',
        opacity: variant.opacity ?? 1,
        whiteSpace: 'nowrap',
        cursor: variant.opacity ? 'not-allowed' : 'default',
        fontFamily: 'Inter, system-ui, sans-serif',
        letterSpacing: '-0.01em',
        transition: 'all 0.15s',
        boxShadow: variant.ringColor ? `0 0 0 2px ${variant.ringColor}40` : 'none',
      }}
    >
      {content}
    </div>
  )
}

function BadgeSetPreview({ comp }: { comp: ComponentSpec }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {comp.variants.map((v) => (
        <div
          key={v.label}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: comp.height,
            paddingLeft: comp.paddingX,
            paddingRight: comp.paddingX,
            borderRadius: comp.radiusValue,
            backgroundColor: v.bg,
            color: v.textColor,
            fontSize: comp.fontSize,
            fontWeight: comp.fontWeight,
            border: v.border ?? 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          {v.content ?? v.label}
        </div>
      ))}
    </div>
  )
}

function CardPreview({ comp, variant }: { comp: ComponentSpec; variant: ComponentVariant }) {
  const isIssueCard = comp.name === 'issue-card'
  return (
    <div
      style={{
        borderRadius: comp.radiusValue,
        backgroundColor: variant.bg,
        color: variant.textColor,
        border: variant.border ?? 'none',
        padding: `${comp.paddingX}px`,
        fontFamily: 'Inter, system-ui, sans-serif',
        opacity: variant.opacity ?? 1,
        width: '100%',
      }}
    >
      {isIssueCard ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight, color: variant.textColor }}>
            {comp.cardContent?.heading}
          </div>
          <div style={{ fontSize: 11, color: '#62666D', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {comp.cardContent?.body}
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight, marginBottom: 8, lineHeight: 1.3 }}>
            {comp.cardContent?.heading}
          </div>
          <div style={{ fontSize: 14, fontWeight: 400, color: '#8A8F98', lineHeight: 1.55 }}>
            {comp.cardContent?.body}
          </div>
        </>
      )}
    </div>
  )
}

function InputPreview({ comp, variant }: { comp: ComponentSpec; variant: ComponentVariant }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: comp.height,
        paddingLeft: comp.paddingX,
        paddingRight: comp.paddingX,
        borderRadius: comp.radiusValue,
        backgroundColor: variant.bg,
        color: variant.textColor,
        fontSize: comp.fontSize,
        fontWeight: comp.fontWeight,
        border: variant.border ?? 'none',
        opacity: variant.opacity ?? 1,
        fontFamily: 'Inter, system-ui, sans-serif',
        boxShadow: variant.ringColor ? `0 0 0 2px ${variant.ringColor}40` : 'none',
        width: '100%',
      }}
    >
      <span style={{ opacity: 0.5 }}>{variant.content ?? comp.defaultContent}</span>
    </div>
  )
}

// ─── Single component card ─────────────────────────────────────────────────

function ComponentCard({ comp }: { comp: ComponentSpec }) {
  const [hovered, setHovered] = useState<number | null>(null)

  const radiusLabel =
    comp.radiusValue === 9999 ? 'radius-full' :
    comp.radiusValue === 12 ? 'radius-lg' :
    comp.radiusValue === 6 ? 'radius-md' :
    comp.radiusValue === 4 ? 'radius-sm' :
    comp.radiusValue === 2 ? 'radius-xs' :
    `${comp.radiusValue}px`

  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
      {/* Dark canvas */}
      <div
        className="p-5 flex flex-col"
        style={{ backgroundColor: '#08090A', minHeight: 120 }}
      >
        {comp.type === 'badge-set' ? (
          <div className="flex-1 flex items-center">
            <BadgeSetPreview comp={comp} />
          </div>
        ) : comp.type === 'card' ? (
          <div className="flex flex-col gap-3 w-full">
            {comp.variants.map((v, i) => (
              <CardPreview key={i} comp={comp} variant={v} />
            ))}
          </div>
        ) : comp.type === 'input' ? (
          <div className="flex flex-col gap-2 w-full">
            {comp.variants.map((v, i) => (
              <div key={i} className="flex flex-col gap-1">
                <InputPreview comp={comp} variant={v} />
                <div style={{ fontSize: 10, color: '#62666D', fontFamily: 'Inter, sans-serif' }}>{v.label}</div>
              </div>
            ))}
          </div>
        ) : (
          // button / nav-button
          <div className="flex-1 flex flex-wrap items-center gap-2">
            {comp.variants.map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <ButtonPreview comp={comp} variant={v} />
                <div style={{ fontSize: 10, color: '#62666D', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Token info */}
      <div className="px-4 py-3 space-y-1 border-t border-neutral-100">
        <div className="text-[13px] font-semibold text-neutral-800">{comp.name}</div>
        <div className="text-[11px] text-neutral-400 leading-snug">{comp.description}</div>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 pt-1">
          <span className="text-[11px] font-mono text-neutral-400">{comp.fontSize}px/{comp.fontWeight}</span>
          <span className="text-[11px] font-mono text-neutral-400">{radiusLabel}</span>
          {comp.height > 0 && <span className="text-[11px] font-mono text-neutral-400">h={comp.height}px</span>}
        </div>
      </div>
    </div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────

export function Components({ system }: { system: DesignSystem }) {
  const totalComponents = system.components.length
  const totalVariants = system.components.reduce((sum, c) => sum + c.variants.length, 0)

  return (
    <section id="components" className="space-y-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Components</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{totalComponents} components · {totalVariants} states</span>
      </div>

      <div className="space-y-10">
        {system.componentGroups.map((group) => {
          const groupComps = system.components.filter((c) => c.group === group)
          if (groupComps.length === 0) return null
          return (
            <div key={group} className="space-y-3">
              <div className="text-sm font-semibold text-neutral-500">{group}</div>
              <div className="grid grid-cols-3 gap-4">
                {groupComps.map((comp) => (
                  <ComponentCard key={comp.name} comp={comp} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
