'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// Old variant names are mapped onto the two prospectus buttons so existing
// call sites (Nav/Hero/Contact) compile unchanged.
type Variant = 'ink' | 'ghost' | 'ghost-light' | 'primary' | 'blue' | 'emerald' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface GlowButtonProps {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  /** legacy prop, ignored (shine is pure CSS now) */
  shimmer?: boolean
}

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { padding: '10px 20px', fontSize: '11px' },
  md: { padding: '14px 28px', fontSize: '12px' },
  lg: { padding: '16px 34px', fontSize: '13px' },
}

function resolveClass(variant: Variant): string {
  switch (variant) {
    case 'ghost':
    case 'outline':
      return 'btn-ghost'
    case 'ghost-light':
      return 'btn-ghost btn-ghost-light'
    case 'blue':
    case 'primary':
      return 'btn-blue'
    // emerald / ink → solid ink
    default:
      return 'btn-ink'
  }
}

function ArrowSvg() {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" aria-hidden="true" style={{ flexShrink: 0, position: 'relative', zIndex: 2 }}>
      <path d="M1.5 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GlowButton({
  variant = 'ink',
  size = 'md',
  children,
  href,
  onClick,
  className,
}: GlowButtonProps) {
  const content = (
    <>
      <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
      <ArrowSvg />
    </>
  )

  const sharedProps = {
    className: cn(resolveClass(variant), className),
    style: SIZE_STYLES[size],
  }

  if (href) return <a href={href} {...sharedProps}>{content}</a>
  return <button type="button" onClick={onClick} {...sharedProps}>{content}</button>
}
