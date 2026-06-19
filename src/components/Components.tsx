'use client'
import { DesignSystem, ComponentSpec, ComponentVariant } from '@/lib/types'

const FALLBACK_FONT = 'Inter, system-ui, sans-serif'

function toDisplayName(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

// ─── Render a single component state ──────────────────────────────────────

function renderComponent(
  comp: ComponentSpec,
  variant: ComponentVariant,
  previewBg: string,
) {
  const font = comp.fontFamily ?? FALLBACK_FONT
  const isDisabled = variant.opacity !== undefined && variant.opacity < 1

  if (comp.type === 'button') {
    const isIconButton = comp.name.startsWith('icon-button')
    const isLinkButton = comp.name.startsWith('button-link')

    if (isIconButton) {
      return (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: comp.height,
            height: comp.height,
            backgroundColor: variant.bg,
            color: variant.textColor,
            borderRadius: comp.radiusValue,
            border: variant.border ?? 'none',
            opacity: variant.opacity ?? 1,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            fontFamily: font,
          }}
        >
          {/* Arrow icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    }

    if (isLinkButton) {
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            color: variant.textColor,
            fontSize: comp.fontSize,
            fontWeight: comp.fontWeight,
            fontFamily: font,
            borderBottom: variant.borderBottom ?? `2px solid ${variant.textColor}`,
            paddingBottom: 4,
            opacity: variant.opacity ?? 1,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            letterSpacing: 0,
          }}
        >
          {variant.content ?? comp.defaultContent}
        </span>
      )
    }

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
          fontFamily: font,
          border: variant.border ?? 'none',
          whiteSpace: 'nowrap',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: variant.opacity ?? 1,
          letterSpacing: 0,
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
          fontFamily: font,
          border: variant.border ?? 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {variant.content ?? variant.label}
      </div>
    )
  }

  if (comp.type === 'card') {
    return (
      <div
        style={{
          borderRadius: comp.radiusValue,
          backgroundColor: variant.bg,
          color: variant.textColor,
          border: variant.border ?? 'none',
          padding: `${comp.paddingX}px`,
          width: '100%',
          fontFamily: font,
        }}
      >
        <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight, marginBottom: 8, lineHeight: 1.3 }}>
          {comp.cardContent?.heading}
        </div>
        <div style={{ fontSize: 14, fontWeight: 400, opacity: 0.6, lineHeight: 1.55 }}>
          {comp.cardContent?.body}
        </div>
      </div>
    )
  }

  if (comp.type === 'input') {
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
          fontFamily: font,
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

function VariantCard({
  comp,
  variant,
  previewBg,
}: {
  comp: ComponentSpec
  variant: ComponentVariant
  previewBg: string
}) {
  const stateSlug = variant.label.toLowerCase().replace(/\s+/g, '-')

  const radiusLabel =
    comp.radiusValue === 9999 ? 'radius-full' :
    comp.radiusValue === 0    ? '0px' :
    `${comp.radiusValue}px`

  const meta = [
    comp.fontSize > 0 ? `${comp.fontSize}px` : null,
    `fw ${comp.fontWeight}`,
    radiusLabel,
    comp.height > 0 ? `h ${comp.height}px` : null,
    variant.label !== 'Default' ? variant.label.toLowerCase() : null,
  ].filter(Boolean).join(' / ')

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
      <div
        className="flex items-center justify-center p-6"
        style={{ backgroundColor: previewBg, minHeight: 112 }}
      >
        {renderComponent(comp, variant, previewBg)}
      </div>
      <div className="px-4 py-3 space-y-0.5 border-t border-neutral-100">
        <div className="text-[12px] font-semibold text-neutral-800">{variant.label}</div>
        <div className="text-[11px] text-neutral-400 leading-snug">{meta}</div>
      </div>
    </div>
  )
}

// ─── Badge-set group card ──────────────────────────────────────────────────

function BadgeGroupCard({
  comp,
  previewBg,
}: {
  comp: ComponentSpec
  previewBg: string
}) {
  const font = comp.fontFamily ?? FALLBACK_FONT
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white hover:border-neutral-300 hover:shadow-sm transition-all col-span-full">
      <div
        className="flex items-center p-5 gap-3 flex-wrap"
        style={{ backgroundColor: previewBg, minHeight: 100 }}
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
                fontFamily: font,
                border: v.border ?? 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {v.content ?? v.label}
            </div>
            <div style={{ fontSize: 10, color: '#8A8F98', fontFamily: FALLBACK_FONT }}>{v.label}</div>
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

  const previewBg =
    system.colors.find((c) => c.token === 'surface-card')?.hex ??
    system.colors.find((c) => c.token === 'surface-raised')?.hex ??
    '#F5F5F5'

  return (
    <section id="components" className="space-y-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Components</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{system.components.length} components · {totalVariants} states</span>
      </div>

      <div className="space-y-16">
        {system.componentGroups.map((group) => {
          const groupComps = system.components.filter((c) => c.group === group)
          if (groupComps.length === 0) return null

          return (
            <div key={group} className="space-y-12">
              {/* Group label */}
              <div className="flex items-center gap-3 -mb-6">
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-neutral-400">{group}</span>
                <div className="flex-1 h-px bg-neutral-100" />
              </div>

              {groupComps.map((comp, ci) => (
                <div key={comp.name} className="space-y-5">
                  {/* Sub-section header */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-neutral-400">
                      {group} / {toDisplayName(comp.name)}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{toDisplayName(comp.name)}</h3>
                    <p className="text-[13px] text-neutral-500 max-w-xl">{comp.description}</p>
                  </div>

                  {/* Variant grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {comp.type === 'badge-set' ? (
                      <BadgeGroupCard comp={comp} previewBg={previewBg} />
                    ) : (
                      comp.variants.map((variant) => (
                        <VariantCard
                          key={variant.label}
                          comp={comp}
                          variant={variant}
                          previewBg={previewBg}
                        />
                      ))
                    )}
                  </div>

                  {ci < groupComps.length - 1 && (
                    <div className="border-b border-neutral-100 pt-4" />
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
