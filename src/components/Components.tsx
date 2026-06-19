'use client'
import { DesignSystem, ComponentSpec, ComponentVariant } from '@/lib/types'

const FALLBACK_FONT = 'Inter, system-ui, sans-serif'

// ─── SVG Icon Library ─────────────────────────────────────────────────────────

const ICONS: Record<string, React.ReactNode> = {
  'arrow-right': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  'wallet': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"/>
    </svg>
  ),
  'file-invoice': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v4a1 1 0 001 1h4"/>
      <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/>
      <path d="M9 9h1M9 13h6M13 17h2"/>
    </svg>
  ),
  'pen-line': (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
    </svg>
  ),
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function metaString(comp: ComponentSpec, variant: ComponentVariant): string {
  const parts = [
    comp.fontSize > 0 ? `${comp.fontSize}px` : null,
    comp.fontWeight ? `fw ${comp.fontWeight}` : null,
    comp.radiusValue === 0 ? '0px' : comp.radiusValue === 9999 ? 'radius-full' : `${comp.radiusValue}px`,
    comp.height > 0 ? `h ${comp.height}px` : null,
    variant.label !== 'Default' ? variant.label.toLowerCase() : null,
  ]
  return parts.filter(Boolean).join(' / ')
}

// ─── Button render ─────────────────────────────────────────────────────────────

function renderButton(comp: ComponentSpec, variant: ComponentVariant): React.ReactNode {
  const font = comp.fontFamily ?? FALLBACK_FONT
  const isDisabled = (variant.opacity ?? 1) < 1
  const icon = comp.icon ? ICONS[comp.icon] : null

  // Icon-only square button
  if (comp.name.startsWith('icon-button')) {
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
          border: variant.border ?? 'none',
          borderRadius: comp.radiusValue,
          opacity: variant.opacity ?? 1,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          flexShrink: 0,
        }}
      >
        {icon ?? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </div>
    )
  }

  // Link button (underline only)
  if (comp.name.startsWith('button-link')) {
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
        }}
      >
        {variant.content ?? comp.defaultContent}
      </span>
    )
  }

  // Regular button (optionally with icon)
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: icon ? 8 : 0,
        height: comp.height,
        paddingLeft: icon ? 14 : comp.paddingX,
        paddingRight: comp.paddingX,
        borderRadius: comp.radiusValue,
        backgroundColor: variant.bg,
        color: variant.textColor,
        fontSize: comp.fontSize,
        fontWeight: comp.fontWeight,
        fontFamily: font,
        border: variant.border ?? 'none',
        whiteSpace: 'nowrap',
        opacity: variant.opacity ?? 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        flexShrink: 0,
      }}
    >
      {icon && <span style={{ display: 'flex', flexShrink: 0 }}>{icon}</span>}
      {comp.fontSize > 0 && <span>{variant.content ?? comp.defaultContent}</span>}
    </div>
  )
}

// ─── Single variant card (matches Figma layout exactly) ───────────────────────

function VariantCard({
  comp,
  variant,
  previewBg,
}: {
  comp: ComponentSpec
  variant: ComponentVariant
  previewBg: string
}) {
  const meta = metaString(comp, variant)

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden flex flex-col">
      {/* Preview area — matches Figma 408×114 proportions */}
      <div
        className="flex items-center justify-center flex-1"
        style={{ backgroundColor: previewBg, minHeight: 114 }}
      >
        {comp.type === 'button' || comp.type === 'input'
          ? renderButton(comp, variant)
          : null}
      </div>

      {/* Info area — matches Figma 408×80 with 20px padding */}
      <div className="border-t border-neutral-200 px-5 py-5">
        <div className="text-[14px] font-semibold text-neutral-800 leading-none">{variant.label}</div>
        <div className="text-[11px] text-neutral-400 mt-1.5 leading-snug">{meta}</div>
      </div>
    </div>
  )
}

// ─── Badge group (all variants in one row) ────────────────────────────────────

function BadgeGroupCard({
  comp,
  previewBg,
}: {
  comp: ComponentSpec
  previewBg: string
}) {
  const font = comp.fontFamily ?? FALLBACK_FONT
  return (
    <div className="col-span-full rounded-xl border border-neutral-200 overflow-hidden">
      <div
        className="flex items-center flex-wrap gap-3 px-6 py-8"
        style={{ backgroundColor: previewBg, minHeight: 114 }}
      >
        {comp.variants.map((v) => (
          <div key={v.label} className="flex flex-col items-center gap-2">
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
            <span className="text-[10px] text-neutral-400">{v.label}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-200 px-5 py-5">
        <div className="text-[14px] font-semibold text-neutral-800 leading-none">{toTitle(comp.name)}</div>
        <div className="text-[11px] text-neutral-400 mt-1.5">{comp.description}</div>
      </div>
    </div>
  )
}

// ─── Card component ───────────────────────────────────────────────────────────

function CardComponent({
  comp,
  variant,
  previewBg,
}: {
  comp: ComponentSpec
  variant: ComponentVariant
  previewBg: string
}) {
  const font = comp.fontFamily ?? FALLBACK_FONT
  const meta = metaString(comp, variant)
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden flex flex-col">
      <div className="flex-1 p-5" style={{ backgroundColor: previewBg, minHeight: 114 }}>
        <div
          style={{
            borderRadius: comp.radiusValue,
            backgroundColor: variant.bg,
            color: variant.textColor,
            border: variant.border ?? 'none',
            padding: `${comp.paddingX}px`,
            fontFamily: font,
          }}
        >
          <div style={{ fontSize: comp.fontSize, fontWeight: comp.fontWeight, marginBottom: 6, lineHeight: 1.3 }}>
            {comp.cardContent?.heading}
          </div>
          <div style={{ fontSize: 13, fontWeight: 400, opacity: 0.6, lineHeight: 1.5 }}>
            {comp.cardContent?.body}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 px-5 py-5">
        <div className="text-[14px] font-semibold text-neutral-800 leading-none">{variant.label}</div>
        <div className="text-[11px] text-neutral-400 mt-1.5 leading-snug">{meta}</div>
      </div>
    </div>
  )
}

// ─── Main Components section ──────────────────────────────────────────────────

export function Components({ system }: { system: DesignSystem }) {
  const totalVariants = system.components.reduce((sum, c) => sum + c.variants.length, 0)

  // Preview background = surface-default (white for FCH, dark for Linear)
  const previewBg =
    system.colors.find((c) => c.token === 'surface-default')?.hex ?? '#FFFFFF'

  return (
    <section id="components" className="space-y-10">
      {/* Section header */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-400">Components</span>
          <span className="text-[10px] text-neutral-400">
            {system.components.length} components · {totalVariants} states
          </span>
        </div>
        <div className="h-px bg-neutral-200 mt-3" />
      </div>

      <div className="space-y-14 pt-4">
        {system.componentGroups.map((group) => {
          const groupComps = system.components.filter((c) => c.group === group)
          if (groupComps.length === 0) return null
          const groupDesc = system.componentGroupDescriptions?.[group]

          return (
            <div key={group} className="space-y-10">
              {/* Group header — matches Figma "Buttons" large title + description */}
              <div className="space-y-3">
                <h3 className="text-[28px] font-bold text-neutral-900 leading-tight">{group}</h3>
                {groupDesc && (
                  <p className="text-[13px] text-neutral-500 leading-relaxed max-w-3xl">{groupDesc}</p>
                )}
              </div>

              {/* One sub-section per component */}
              <div className="space-y-10">
                {groupComps.map((comp) => (
                  <div key={comp.name} className="space-y-4">
                    {/* Sub-section header — matches Figma component name + description */}
                    <div>
                      <div className="text-[16px] font-semibold text-neutral-900">{toTitle(comp.name)}</div>
                      <div className="text-[12px] text-neutral-400 mt-0.5">{comp.description}</div>
                    </div>

                    {/* Variant grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {comp.type === 'badge-set' ? (
                        <BadgeGroupCard comp={comp} previewBg={previewBg} />
                      ) : comp.type === 'card' ? (
                        comp.variants.map((v) => (
                          <CardComponent key={v.label} comp={comp} variant={v} previewBg={previewBg} />
                        ))
                      ) : (
                        comp.variants.map((v) => (
                          <VariantCard key={v.label} comp={comp} variant={v} previewBg={previewBg} />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
