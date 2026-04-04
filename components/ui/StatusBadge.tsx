import React from 'react'
import { cn } from '@/lib/utils'
import type { ProductStatus } from '@/lib/utils'

interface StatusBadgeProps {
  status: ProductStatus
  className?: string
}

const statusConfig = {
  live: {
    label: 'Live',
    bg: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.30)',
    color: '#059669',
    dot: true,
    dotColor: '#10b981',
  },
  'coming-soon': {
    label: 'Coming Soon',
    bg: 'rgba(139, 92, 246, 0.08)',
    border: 'rgba(139, 92, 246, 0.30)',
    color: 'var(--c-plasma)',
    dot: false,
    dotColor: '',
  },
  'in-development': {
    label: 'In Development',
    bg: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.30)',
    color: '#d97706',
    dot: false,
    dotColor: '',
  },
} as const

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn('inline-flex items-center gap-1.5', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: 'var(--r-pill)',
        border: `1px solid ${config.border}`,
        background: config.bg,
        fontFamily: 'var(--font-geist), sans-serif',
        fontSize: '10px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 'var(--track-sublabel, 0.06em)',
        color: config.color,
        lineHeight: 1,
      }}
    >
      {config.dot && (
        <>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '9999px',
              background: config.dotColor,
              flexShrink: 0,
              animation: 'statusPulse 2s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes statusPulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50%       { transform: scale(1.6); opacity: 0.5; }
            }
            @media (prefers-reduced-motion: reduce) {
              @keyframes statusPulse {
                from { transform: scale(1); opacity: 1; }
                to   { transform: scale(1); opacity: 1; }
              }
            }
          `}</style>
        </>
      )}
      {config.label}
    </span>
  )
}
