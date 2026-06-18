import { DesignSystem } from '@/lib/types'
import { CopyButton } from './CopyButton'

const DEMO_TEXTS: Record<string, string> = {
  'display-xl': 'The system',
  'display-lg': 'Product development',
  'display-md': 'Section Header',
  'display-sm': 'Sub-section Title',
  'title-lg': 'Large card title',
  'title-md': 'Card heading',
  'title-sm': 'Sub heading text',
  'body-lg': 'Default body — readable at all sizes on dark and light surfaces',
  'body-md': 'Purpose-built for planning and building great products as a team.',
  'label-lg': 'Label · Badge · Tag',
  'label-md': 'UI Label · Active State · Nav item',
  'label-sm': 'Secondary label · Nav item · Footer link',
  'caption': 'Metadata · Timestamps · Fine print',
}

export function Typography({ system }: { system: DesignSystem }) {
  const display = system.typography.filter((t) => t.section === 'display')
  const body = system.typography.filter((t) => t.section === 'body')

  return (
    <section id="typography" className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">Typography</h2>
        <div className="flex-1 h-px bg-neutral-100" />
        <span className="text-[10px] text-neutral-400">{system.typography.length} tokens</span>
      </div>

      <div className="space-y-0">
        {display.map((t, i) => (
          <div key={t.token} className={`flex items-baseline gap-6 py-3 ${i < display.length - 1 ? 'border-b border-neutral-100' : ''}`}>
            <div className="w-40 shrink-0 space-y-0.5">
              <div className="text-[11px] font-semibold text-neutral-700">{t.token}</div>
              <div className="text-[10px] text-neutral-400">
                {t.size}px / {t.weight} / lh {t.lineHeight}px / ls {t.tracking}px
              </div>
            </div>
            <div
              className="flex-1 text-neutral-900 leading-tight"
              style={{
                fontSize: `${Math.min(t.size, 64)}px`,
                fontWeight: t.weight,
                letterSpacing: `${t.tracking}px`,
                lineHeight: `${t.lineHeight}px`,
              }}
            >
              {DEMO_TEXTS[t.token] ?? t.usage}
            </div>
            <CopyButton value={`var(--font-size-${t.token})`} label={`--${t.token}`} />
          </div>
        ))}

        <div className="flex items-center gap-3 pt-4 pb-2">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-neutral-400">Body & Label Tokens</span>
          <div className="flex-1 h-px bg-neutral-100" />
        </div>

        {body.map((t, i) => (
          <div key={t.token} className={`flex items-baseline gap-6 py-3 ${i < body.length - 1 ? 'border-b border-neutral-100' : ''}`}>
            <div className="w-40 shrink-0 space-y-0.5">
              <div className="text-[11px] font-semibold text-neutral-700">{t.token}</div>
              <div className="text-[10px] text-neutral-400">
                {t.size}px / {t.weight} / lh {t.lineHeight}px
              </div>
            </div>
            <div
              className="flex-1 text-neutral-800"
              style={{
                fontSize: `${t.size}px`,
                fontWeight: t.weight,
                letterSpacing: `${t.tracking}px`,
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
