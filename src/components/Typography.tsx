import { DesignSystem } from '@/lib/types'
import { CopyButton } from './CopyButton'

const DEMO_TEXTS: Record<string, string> = {
  'display':    '87 · Hero Score',
  'h1': 'Willkommen bei Hansa',
  'h2': 'News & Aktuelles',
  'h3': 'Spieltagsvorschau',
  'h4': 'Karten-Titel',
  'h5': 'Karten-Unterzeile',
  'h6': 'Abschnitt',
  'display-xl': 'The quick brown fox',
  'display-lg': 'Product development',
  'display-md': 'Section Header',
  'display-sm': 'Sub-section Title',
  'title-lg':   'Large card title',
  'title-md':   'Card heading',
  'title-sm':   'Sub heading text',
  'body-lg':  'Default body — readable at all sizes on dark and light surfaces',
  'body-md':  'Purpose-built for fans and members alike — designed to inform.',
  'label-lg': 'Label · Badge · Tag',
  'label-md': 'UI Label · Aktiv · Nav-Item',
  'label-sm': 'Sekundäres Label · Footer-Link',
  'caption':  'Metadaten · Zeitstempel · Bildunterschrift',
}

const GROUP_LABELS: Record<string, string> = {
  display: 'Display & Headlines',
  body: 'Body, Label & Caption',
}

export function Typography({ system }: { system: DesignSystem }) {
  const display = system.typography.filter((t) => t.section === 'display')
  const body    = system.typography.filter((t) => t.section === 'body')

  const headingColor = system.colors.find((c) => c.token === 'brand-primary')?.hex ?? null

  const groups: Array<{ key: 'display' | 'body'; tokens: typeof display }> = [
    { key: 'display', tokens: display },
    { key: 'body',    tokens: body },
  ]

  return (
    <section id="typography" className="space-y-10">
      {/* Section header */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-400">Typography</span>
          <span className="text-[10px] text-neutral-400">{system.typography.length} tokens</span>
        </div>
        <div className="h-px bg-neutral-200 mt-3" />
      </div>

      {groups.map(({ key, tokens }) => {
        if (tokens.length === 0) return null
        const desc = system.typographyGroupDescriptions?.[key]
        const isDisplay = key === 'display'

        return (
          <div key={key} className="space-y-6">
            {/* Group header */}
            <div>
              <h3 className="text-[22px] font-bold text-neutral-900">{GROUP_LABELS[key]}</h3>
              {desc && <p className="text-[13px] text-neutral-400 mt-2 max-w-2xl leading-relaxed">{desc}</p>}
            </div>

            {/* Token rows */}
            <div>
              {tokens.map((t) => (
                <div key={t.token} className="py-5 border-b border-neutral-200 first:border-t first:border-neutral-200">
                  {/* Token name + meta + chip */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[13px] font-bold text-neutral-800">{t.token}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        {t.size}px / {t.weight} / lh {t.lineHeight}px
                        {t.tracking ? ` / ls ${t.tracking}px` : ''}
                        {' · '}{t.usage}
                      </div>
                    </div>
                    <CopyButton value={`--${t.token}`} label={`--${t.token}`} />
                  </div>

                  {/* Text sample */}
                  <div
                    className="mt-3 leading-tight overflow-hidden"
                    style={{
                      fontSize: `${Math.min(t.size, isDisplay ? 72 : 28)}px`,
                      fontWeight: t.weight,
                      fontFamily: t.family,
                      letterSpacing: t.tracking ? `${t.tracking}px` : undefined,
                      lineHeight: `${t.lineHeight}px`,
                      color: isDisplay && headingColor ? headingColor : '#111111',
                      textTransform: isDisplay && headingColor ? 'uppercase' : 'none',
                    }}
                  >
                    {DEMO_TEXTS[t.token] ?? t.usage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
