import React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(className)}
      style={{
        fontFamily: 'var(--font-geist), sans-serif',
        fontSize: '13px',
        fontWeight: 800,
        letterSpacing: '0.19em',
        textTransform: 'uppercase',
        color: 'var(--c-plasma)',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}
