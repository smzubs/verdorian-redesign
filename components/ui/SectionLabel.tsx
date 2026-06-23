import React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  /** optional chapter numeral, e.g. "01" → renders "No. 01" in gold italic serif */
  numeral?: string
  className?: string
}

/** Gold small-caps eyebrow, optionally preceded by a "No. 0X" chapter numeral. */
export function SectionLabel({ children, numeral, className }: SectionLabelProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-3', className)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
    >
      {numeral && (
        <>
          <span className="chapter-numeral">No.&nbsp;{numeral}</span>
          <span aria-hidden="true" style={{ width: '28px', height: '1px', background: 'var(--rule-strong)' }} />
        </>
      )}
      <span className="eyebrow">{children}</span>
    </span>
  )
}
