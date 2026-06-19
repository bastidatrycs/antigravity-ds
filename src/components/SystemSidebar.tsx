'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_ITEMS = [
  { id: 'colors', label: 'colors' },
  { id: 'typography', label: 'typography' },
  { id: 'spacing', label: 'spacing' },
  { id: 'components', label: 'components' },
  { id: 'principles', label: 'principles' },
]

export function SystemSidebar() {
  const [active, setActive] = useState('colors')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <aside className="w-[233px] shrink-0 bg-white border-r flex flex-col sticky top-0 h-screen overflow-y-auto" style={{ borderColor: '#D4D4D4' }}>
      {/* Logo */}
      <div className="px-6 pt-5 pb-4">
        <Link href="/">
          <Image src="/logos/datrycs-ds-logo.svg" alt="Datrycs DS" width={120} height={25} />
        </Link>
      </div>

      {/* Back link */}
      <div className="px-6 pb-5">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          <span>←</span>
          <span>Zurück zur Übersicht</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-neutral-100 mb-4" />

      {/* Nav items */}
      <nav className="px-6 flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-[12px] py-1.5 transition-colors ${
              active === id
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
