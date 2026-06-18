'use client'

import { useState } from 'react'

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copy}
      className="text-[10px] font-medium px-2 py-0.5 rounded bg-black/5 hover:bg-black/10 transition-colors text-neutral-500 hover:text-neutral-700"
    >
      {copied ? '✓ Copied' : (label ?? 'Copy')}
    </button>
  )
}
