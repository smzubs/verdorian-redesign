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
  sm: { padding: '8px 18px', fontSize: '14px' },
  md: { padding: '10px 22px', fontSize: '16px' },
  lg: { padding: '13px 28px', fontSize: '16px' },
}

// ── iOS 26 Liquid Glass — Primary variant ─────────────────────────────────────
const PRIMARY_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'rgba(139, 92, 246, 0.85)',
  backdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  WebkitBackdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  borderRadius: '980px',
  color: 'rgba(255, 255, 255, 0.95)',
  boxShadow: `
    0 2px 8px rgba(139, 92, 246, 0.30),
    0 1px 2px rgba(0, 0, 0, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15)
  `,
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 200ms var(--ease-expo), box-shadow 200ms var(--ease-expo), background 200ms var(--ease-expo)',
}

// ── iOS 26 Liquid Glass — Ghost variant ──────────────────────────────────────
const GHOST_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  WebkitBackdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  border: '1px solid rgba(255, 255, 255, 0.20)',
  borderRadius: '980px',
  color: 'var(--c-text-1)',
  boxShadow: `
    0 1px 4px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.06)
  `,
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 200ms var(--ease-expo), box-shadow 200ms var(--ease-expo), background 200ms var(--ease-expo), border-color 200ms var(--ease-expo)',
}

const baseClass =
  'select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-plasma)]'

// Arrow SVG
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
  const arrowSpanRef = useRef<HTMLSpanElement>(null)

  const baseStyle: React.CSSProperties =
    variant === 'primary'
      ? { ...PRIMARY_BASE, ...SIZE_STYLES[size] }
      : { ...GHOST_BASE, ...SIZE_STYLES[size] }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'rgba(139, 92, 246, 0.95)'
      el.style.transform = 'scale(1.03)'
      el.style.boxShadow = `
        0 6px 20px rgba(139, 92, 246, 0.40),
        0 2px 4px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.30),
        inset 0 -1px 0 rgba(0, 0, 0, 0.18)
      `
      if (arrowSpanRef.current) {
        arrowSpanRef.current.style.transform = 'translateX(2px)'
      }
    } else {
      el.style.background = 'rgba(255, 255, 255, 0.14)'
      el.style.borderColor = 'rgba(255, 255, 255, 0.35)'
      el.style.boxShadow = `
        0 2px 8px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.22),
        inset 0 -1px 0 rgba(0, 0, 0, 0.08)
      `
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'rgba(139, 92, 246, 0.85)'
      el.style.transform = 'scale(1)'
      el.style.boxShadow = `
        0 2px 8px rgba(139, 92, 246, 0.30),
        0 1px 2px rgba(0, 0, 0, 0.10),
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        inset 0 -1px 0 rgba(0, 0, 0, 0.15)
      `
      if (arrowSpanRef.current) {
        arrowSpanRef.current.style.transform = 'translateX(0)'
      }
    } else {
      el.style.background = 'rgba(255, 255, 255, 0.08)'
      el.style.borderColor = 'rgba(255, 255, 255, 0.20)'
      el.style.boxShadow = `
        0 1px 4px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, 0.06)
      `
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(0.97)'
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(1.03)'
  }

  // Highlight layer opacity varies by variant
  const highlightOpacityTop = variant === 'primary' ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.15)'

  const content = (
    <>
      {/* Highlight layer — top 50% catch light (::before equivalent) */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          borderRadius: '980px 980px 0 0',
          background: `linear-gradient(180deg, ${highlightOpacityTop} 0%, rgba(255,255,255,0) 100%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content layer */}
      <span
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {children}
        {variant === 'primary' && (
          <span
            ref={arrowSpanRef}
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'transform 150ms ease',
            }}
          >
            <ArrowSvg />
          </span>
        )}
      </span>
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
