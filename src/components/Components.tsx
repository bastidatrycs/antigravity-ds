'use client'
import { DesignSystem, ComponentSpec, ComponentVariant } from '@/lib/types'

// ─── Render a single component state ──────────────────────────────────────

function renderComponent(comp: ComponentSpec, variant: ComponentVariant) {
  const base: React.CSSProperties = {
    fontFamily: 'Inter, system-ui, sans-serif',
    opacity: variant.opacity ?? 1,
    transition: 'all 0.15s',
  }

  if (comp.type === 'button') {
    return (
      <div
        style={{
          ...base,
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
          whiteSpace: 'nowrap',
          cursor: variant.opacity ? 'not-allowed' : 'default',
          letterSpacing: '-0.01em',
          boxShadow: variant.ringColor ? `0 0 0 2px ${variant.ringColor}40` : 'none',
        }}
      >
        {variant.content ?? comp.defaultContent}
      </div>
    )
  }

  if (comp.type === 'badge-set') {
    return (
      <div
        style={{
          ...base,
          display: 'inline-flex',
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
          whiteSpace: 'nowrap',
        }}
      >
        {variant.content ?? variant.label}
      </div>
    )
  }

  if (comp.type === 'card') {
    const isIssueCard = comp.name === 'issue-card'
    return (
      <div
        style={{
          ...base,
          borderRadius: comp.radiusValue,
          backgroundColor: variant.bg,
          color: variant.textColor,
          border: variant.border ?? 'none',
          padding: `${comp.paddingX}px`,
          width: '100%',
        }}
      >
        {isIssueCard ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight }}>{comp.cardContent?.heading}</div>
            <div style={{ fontSize: 11, color: '#62666D', whiteSpace: 'nowrap', flexShrink: 0 }}>{comp.cardContent?.body}</div>
          </div>
        ) : (
          <>
            <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight, marginBottom: 8, lineHeight: 1.3 }}>{comp.cardContent?.heading}</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#8A8F98', lineHeight: 1.55 }}>{comp.cardContent?.body}</div>
          </>
        )}
      </div>
    )
  }

  if (comp.type === 'input') {
    return (
      <div
        style={{
          ...base,
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
          width: '100%',
          boxShadow: variant.ringColor ? `0 0 0 2px ${variant.ringColor}40` : 'none',
        }}
      >
        <span style={{ opacity: 0.5 }}>{variant.content ?? comp.defaultContent}</span>
      </div>
    )
  }

  return null
}

// ─── One card per variant ──────────────────────────────────────────────────

function VariantCard({ comp, variant }: { comp: ComponentSpec; variant: ComponentVariant }) {
  const stateSlug = variant.label.toLowerCase().replace(/\s+/g, '-')
  const cardName = stateSlug === 'default'
    ? comp.name
    : `${comp.name}-${stateSlug}`

  const radiusLabel =
    comp.radiusValue === 9999 ? 'radius-full' :
    comp.radiusValue === 12 ? 'radius-lg' :
    comp.radiusValue === 6 ? 'radius-md' :
    comp.radiusValue === 4 ? 'radius-sm' :
    comp.radiusValue === 2 ? 'radius-xs' :
    `${comp.radiusValue}px`

  const meta = [
    `${comp.fontSize}px`,
    `fw ${comp.fontWeight}`,
    radiusLabel,
    comp.height > 0 ? `h ${comp.height}px` : null,
    variant.label !== 'Default' ? variant.label.toLowerCase() : null,
  ].filter(Boolean).join(' / ')

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
      {/* Preview canvas — dark bg matching Linear */}
      <div
        className="flex items-center justify-center p-5"
        style={{ backgroundColor: '#08090A', minHeight: 100 }}
      >
        {renderComponent(comp, variant)}
      </div>

      {/* Info */}
      <div className="px-4 py-3 space-y-1 border-t border-neutral-100">
        <div className="text-[13px] font-semibold text-neutral-800">{cardName}</div>
        <div className="text-[11px] text-neutral-400 leading-snug">{meta}</div>
      </div>
    </div>
  )
}

// ─── Badge-set group card: all variants shown together in one card ──────────

function BadgeGroupCard({ comp }: { comp: ComponentSpec }) {
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white hover:border-neutral-300 hover:shadow-sm transition-all col-span-full">
      <div
        className="flex items-center p-5 gap-3 flex-wrap"
        style={{ backgroundColor: '#08090A', minHeight: 100 }}
      >
        {comp.variants.map((v) => (
          <div key={v.label} className="flex flex-col items-center gap-1.5">
            <div
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
            <div style={{ fontSize: 10, color: '#4A4D55', fontFamily: 'Inter, sans-serif' }}>{v.label}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-neutral-100">
        <div className="text-[13px] font-semibold text-neutral-800">{comp.name}</div>
        <div className="text-[11px] text-neutral-400 mt-0.5">{comp.description}</div>
      </div>
    </div>
  )
}

// ─── Main section ──────────────────────────────────────────────────────────

export function Components({ system }: { system: DesignSystem }) {
  const totalVariants = system.components.reduce((sum, c) => sum + c.variants.length, 0)

  return (
    <section id="components" className="space-y-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Components</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{system.components.length} components · {totalVariants} states</span>
      </div>

      <div className="space-y-10">
        {system.componentGroups.map((group) => {
          const groupComps = system.components.filter((c) => c.group === group)
          if (groupComps.length === 0) return null

          return (
            <div key={group} className="space-y-3">
              <div className="text-sm font-semibold text-neutral-500">{group}</div>
              <div className="grid grid-cols-3 gap-4">
                {groupComps.map((comp) =>
                  comp.type === 'badge-set' ? (
                    <BadgeGroupCard key={comp.name} comp={comp} />
                  ) : (
                    comp.variants.map((variant) => (
                      <VariantCard key={`${comp.name}-${variant.label}`} comp={comp} variant={variant} />
                    ))
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
