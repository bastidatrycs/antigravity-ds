import { DesignSystem } from '@/lib/types'
import { CopyButton } from './CopyButton'

const DEMO_TEXTS: Record<string, string> = {
  // Generic semantic tokens (fallback systems)
  'display-xl': 'The quick brown fox',
  'display-lg': 'Product development',
  'display-md': 'Section Header',
  'display-sm': 'Sub-section Title',
  'title-lg':   'Large card title',
  'title-md':   'Card heading',
  'title-sm':   'Sub heading text',
  // h1–h6 (Shopware/Bootstrap systems)
  'display':    '87 · Hero Score',
  'h1': 'Willkommen bei Hansa',
  'h2': 'News & Aktuelles',
  'h3': 'Spieltagsvorschau',
  'h4': 'Karten-Titel',
  'h5': 'Karten-Unterzeile',
  'h6': 'Abschnitt',
  // Body
  'body-lg':  'Default body — readable at all sizes on dark and light surfaces',
  'body-md':  'Purpose-built for fans and members alike — designed to inform.',
  'label-lg': 'Label · Badge · Tag',
  'label-md': 'UI Label · Aktiv · Nav-Item',
  'label-sm': 'Sekundäres Label · Footer-Link',
  'caption':  'Metadaten · Zeitstempel · Bildunterschrift',
}

export function Typography({ system }: { system: DesignSystem }) {
  const display = system.typography.filter((t) => t.section === 'display')
  const body = system.typography.filter((t) => t.section === 'body')

  // Use brand-primary as heading color if the system defines one
  const headingColor = system.colors.find((c) => c.token === 'brand-primary')?.hex ?? null

  return (
    <section id="typography" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-400">Typography</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-xs text-neutral-400">{system.typography.length} tokens</span>
      </div>

      <div className="space-y-0">
        {display.map((t, i) => (
          <div key={t.token} className={`flex items-baseline gap-6 py-3 ${i < display.length - 1 ? 'border-b border-neutral-100' : ''}`}>
            <div className="w-48 shrink-0 space-y-1">
              <div className="text-[13px] font-semibold text-neutral-700">{t.token}</div>
              <div className="text-[11px] text-neutral-400">
                {t.size}px / {t.weight} / lh {t.lineHeight}px
                {t.tracking ? ` / ls ${t.tracking}px` : ''}
              </div>
              <div className="text-[10px] text-neutral-400 italic">{t.usage}</div>
            </div>
            <div
              className="flex-1 leading-tight"
              style={{
                fontSize: `${Math.min(t.size, 72)}px`,
                fontWeight: t.weight,
                fontFamily: t.family,
                letterSpacing: t.tracking ? `${t.tracking}px` : undefined,
                lineHeight: `${t.lineHeight}px`,
                color: headingColor ?? '#111111',
                textTransform: headingColor ? 'uppercase' : 'none',
              }}
            >
              {DEMO_TEXTS[t.token] ?? t.usage}
            </div>
            <CopyButton value={`var(--font-size-${t.token})`} label={`--${t.token}`} />
          </div>
        ))}

        <div className="flex items-center gap-3 pt-4 pb-2">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-neutral-400">Body & Label</span>
          <div className="flex-1 h-px bg-neutral-100" />
        </div>

        {body.map((t, i) => (
          <div key={t.token} className={`flex items-baseline gap-6 py-3 ${i < body.length - 1 ? 'border-b border-neutral-100' : ''}`}>
            <div className="w-48 shrink-0 space-y-1">
              <div className="text-[13px] font-semibold text-neutral-700">{t.token}</div>
              <div className="text-[11px] text-neutral-400">
                {t.size}px / {t.weight} / lh {t.lineHeight}px
              </div>
            </div>
            <div
              className="flex-1 text-neutral-700"
              style={{
                fontSize: `${t.size}px`,
                fontWeight: t.weight,
                fontFamily: t.family,
                letterSpacing: t.tracking ? `${t.tracking}px` : undefined,
                lineHeight: `${t.lineHeight}px`,
              }}
            >
              {DEMO_TEXTS[t.token] ?? t.usage}
            </div>
            <CopyButton value={`var(--font-size-${t.token})`} label={`--${t.token}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
