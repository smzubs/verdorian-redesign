'use client'

import React, { useRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface GlowButtonProps {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: '14px' },
  md: { padding: '10px 20px', fontSize: '16px' },
  lg: { padding: '12px 24px', fontSize: '16px' },
}

const PRIMARY_BASE: React.CSSProperties = {
  backgroundColor: 'var(--c-plasma)',
  color: '#ffffff',
  border: 'none',
  borderRadius: '20px',
  fontWeight: 600,
  boxShadow: 'none',
  transition: 'background-color 150ms ease, transform 150ms ease',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

const GHOST_BASE: React.CSSProperties = {
  background: 'transparent',
  color: 'rgba(255,255,255,0.85)',
  border: '1.5px solid rgba(255,255,255,0.30)',
  borderRadius: '20px',
  fontWeight: 600,
  boxShadow: 'none',
  transition: 'border-color 150ms ease, color 150ms ease, transform 150ms ease',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

const baseClass =
  'select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-plasma)]'

// Arrow SVG — animated via ref on the parent span
function ArrowSvg() {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M1 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GlowButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
}: GlowButtonProps) {
  // We animate the arrow container span on hover, not the SVG directly
  const arrowSpanRef = useRef<HTMLSpanElement>(null)

  const baseStyle: React.CSSProperties =
    variant === 'primary'
      ? { ...PRIMARY_BASE, ...SIZE_STYLES[size] }
      : { ...GHOST_BASE, ...SIZE_STYLES[size] }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.backgroundColor = '#7C4DFF'
      el.style.transform = 'translateY(-1px)'
      if (arrowSpanRef.current) {
        arrowSpanRef.current.style.transform = 'translateX(2px)'
      }
    } else {
      el.style.borderColor = 'rgba(255,255,255,0.70)'
      el.style.color = '#ffffff'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.backgroundColor = 'var(--c-plasma)'
      el.style.transform = 'translateY(0)'
      if (arrowSpanRef.current) {
        arrowSpanRef.current.style.transform = 'translateX(0)'
      }
    } else {
      el.style.borderColor = 'rgba(255,255,255,0.30)'
      el.style.color = 'rgba(255,255,255,0.85)'
      el.style.transform = 'translateY(0)'
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-1px) scale(1)'
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)'
    }
  }

  const content = (
    <>
      {children}
      {variant === 'primary' && (
        <span
          ref={arrowSpanRef}
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '6px',
            transition: 'transform 150ms ease',
          }}
        >
          <ArrowSvg />
        </span>
      )}
    </>
  )

  const sharedProps = {
    className: cn(baseClass, className),
    style: baseStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  }

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {content}
    </button>
  )
}
