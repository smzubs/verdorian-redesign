'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline' | 'blue' | 'emerald'
type Size = 'sm' | 'md' | 'lg'

interface GlowButtonProps {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  shimmer?: boolean
}

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { padding: '8px 18px', fontSize: '13px' },
  md: { padding: '11px 24px', fontSize: '14px' },
  lg: { padding: '14px 32px', fontSize: '15px' },
}

// ── Facebook Blue CTA ────────────────────────────────────────────────────────
const BLUE_BASE: React.CSSProperties = {
  position: 'relative',
  background: '#1877F2',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '980px',
  color: '#ffffff',
  boxShadow: '0 2px 8px rgba(24,119,242,0.25), inset 0 1px 0 rgba(255,255,255,0.20), inset 0 -1px 0 rgba(0,0,0,0.10)',
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms cubic-bezier(0.19, 1, 0.22, 1)',
}

// ── Emerald / Success CTA ────────────────────────────────────────────────────
const EMERALD_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '980px',
  color: '#ffffff',
  boxShadow: '0 2px 8px rgba(16, 185, 129, 0.30), inset 0 1px 0 rgba(255,255,255,0.20), inset 0 -1px 0 rgba(0,0,0,0.10)',
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 200ms var(--ease-expo), box-shadow 300ms var(--ease-expo), background 200ms ease',
}

// ── iOS 26 Liquid Glass — Primary (purple) ───────────────────────────────────
const PRIMARY_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'rgba(139, 92, 246, 0.85)',
  backdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  WebkitBackdropFilter: 'blur(2px) saturate(180%) brightness(108%)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  borderRadius: '980px',
  color: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 2px 8px rgba(139,92,246,0.30), 0 1px 2px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
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

// ── Ghost — glass border ─────────────────────────────────────────────────────
const GHOST_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'rgba(139, 92, 246, 0.04)',
  backdropFilter: 'blur(4px) saturate(160%)',
  WebkitBackdropFilter: 'blur(4px) saturate(160%)',
  border: '1.5px solid rgba(139, 92, 246, 0.20)',
  borderRadius: '12px',
  color: 'var(--c-plasma)',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.12)',
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 200ms var(--ease-expo), box-shadow 300ms var(--ease-expo), background 200ms ease, border-color 200ms ease',
}

// ── Outline — premium glass border with shimmer sweep ────────────────────────
const OUTLINE_BASE: React.CSSProperties = {
  position: 'relative',
  background: 'rgba(139, 92, 246, 0.04)',
  backdropFilter: 'blur(4px) saturate(160%)',
  WebkitBackdropFilter: 'blur(4px) saturate(160%)',
  border: '1.5px solid rgba(139, 92, 246, 0.25)',
  borderRadius: '14px',
  color: 'var(--c-text-1)',
  boxShadow: '0 0 20px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.10)',
  fontWeight: 600,
  overflow: 'hidden',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  transition: 'transform 200ms var(--ease-expo), box-shadow 300ms var(--ease-expo), background 200ms ease, border-color 200ms ease',
}

const baseClass =
  'select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-plasma)]'

function ArrowSvg() {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M1.5 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function getVariantBase(variant: Variant): React.CSSProperties {
  switch (variant) {
    case 'blue': return BLUE_BASE
    case 'emerald': return EMERALD_BASE
    case 'ghost': return GHOST_BASE
    case 'outline': return OUTLINE_BASE
    default: return PRIMARY_BASE
  }
}

export function GlowButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  shimmer = false,
}: GlowButtonProps) {
  const arrowRef = useRef<HTMLSpanElement>(null)

  const baseStyle: React.CSSProperties = { ...getVariantBase(variant), ...SIZE_STYLES[size] }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    switch (variant) {
      case 'primary':
        el.style.background = 'rgba(139,92,246,0.95)'
        el.style.transform = 'scale(1.03)'
        el.style.boxShadow = '0 6px 20px rgba(139,92,246,0.40), 0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.30), inset 0 -1px 0 rgba(0,0,0,0.18)'
        break
      case 'blue':
        el.style.background = '#1565D8'
        el.style.transform = 'translateY(-2px) scale(1.02)'
        el.style.boxShadow = '0 8px 30px rgba(24,119,242,0.35), inset 0 1px 0 rgba(255,255,255,0.25)'
        break
      case 'emerald':
        el.style.transform = 'translateY(-1px) scale(1.02)'
        el.style.boxShadow = '0 8px 30px rgba(16,185,129,0.35), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.12)'
        break
      case 'ghost':
        el.style.background = 'rgba(139,92,246,0.08)'
        el.style.borderColor = 'rgba(139,92,246,0.35)'
        el.style.boxShadow = '0 0 20px rgba(139,92,246,0.10), inset 0 1px 0 rgba(255,255,255,0.18)'
        break
      case 'outline':
        el.style.background = 'rgba(139,92,246,0.08)'
        el.style.borderColor = 'rgba(139,92,246,0.45)'
        el.style.boxShadow = '0 0 30px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.15)'
        break
    }
    if (arrowRef.current) arrowRef.current.style.transform = 'translateX(3px)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const base = getVariantBase(variant)
    el.style.background = base.background as string
    el.style.transform = ''
    el.style.boxShadow = base.boxShadow as string
    if (base.borderColor) el.style.borderColor = ''
    if (variant === 'ghost' || variant === 'outline') {
      el.style.borderColor = ''
    }
    if (arrowRef.current) arrowRef.current.style.transform = 'translateX(0)'
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(0.97)'
  }
  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = ''
  }

  const showHighlight = variant === 'primary' || variant === 'emerald' || variant === 'blue'
  const showArrow = variant === 'primary' || variant === 'blue' || variant === 'emerald'
  const highlightAlpha = variant === 'primary' ? '0.28' : '0.20'

  const content = (
    <>
      {/* Highlight layer — top catch light */}
      {showHighlight && (
        <span aria-hidden="true" style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
          borderRadius: 'inherit',
          background: `linear-gradient(180deg, rgba(255,255,255,${highlightAlpha}) 0%, rgba(255,255,255,0) 100%)`,
          pointerEvents: 'none', zIndex: 1,
        }} />
      )}

      {/* Animated shimmer sweep */}
      {shimmer && (
        <motion.span
          aria-hidden="true"
          animate={{ x: ['-100%', '250%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
          }}
        />
      )}

      {/* Content */}
      <span style={{ position: 'relative', zIndex: 3, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {children}
        {showArrow && (
          <span ref={arrowRef} aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', transition: 'transform 200ms ease' }}>
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

  if (href) return <a href={href} {...sharedProps}>{content}</a>
  return <button type="button" onClick={onClick} {...sharedProps}>{content}</button>
}
