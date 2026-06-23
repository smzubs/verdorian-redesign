import React from 'react'
import { cn } from '@/lib/utils'
import type { ProductStatus } from '@/lib/utils'

interface StatusBadgeProps {
  status: ProductStatus
  className?: string
}

/**
 * Prospectus status mark:
 *  - live          → rotated gold wet-seal stamp ("LIVE")
 *  - coming-soon   → quiet ruled small-caps label ("SOON")
 *  - in-development → quiet ruled small-caps label ("IN DEV")
 */
export function StatusBadge({ status, className }: StatusBadgeProps) {
  if (status === 'live') {
    return <span className={cn('stamp stamp-live', className)}>Live</span>
  }

  const label = status === 'coming-soon' ? 'Soon' : 'In Dev'
  return (
    <span className={cn('label-quiet', className)}>
      <span aria-hidden="true" style={{ width: '14px', height: '1px', background: 'var(--rule-strong)' }} />
      {label}
    </span>
  )
}
