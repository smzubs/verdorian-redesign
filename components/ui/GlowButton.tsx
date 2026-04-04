'use client'

import React from 'react'
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

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}

const baseStyles =
  'relative inline-flex items-center justify-center font-medium overflow-hidden select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-plasma)]'

export function GlowButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
}: GlowButtonProps) {
  const variantStyle: React.CSSProperties =
    variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, var(--c-plasma), var(--c-arc))',
          color: '#ffffff',
          borderRadius: 'var(--r-pill)',
          border: 'none',
        }
      : variant === 'ghost'
        ? {
            background: 'transparent',
            color: 'var(--c-text-1)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--r-pill)',
          }
        : {
            background: 'transparent',
            color: 'var(--c-plasma)',
            border: '1px solid var(--c-plasma)',
            borderRadius: 'var(--r-pill)',
          }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.transform = 'scale(1.03)'
      el.style.boxShadow = 'var(--glow-plasma)'
    } else if (variant === 'ghost') {
      el.style.borderColor = 'var(--c-plasma)'
      el.style.background = 'var(--c-ghost)'
    } else {
      el.style.background = 'rgba(139,92,246,0.1)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.transform = 'scale(1)'
      el.style.boxShadow = 'none'
    } else if (variant === 'ghost') {
      el.style.borderColor = 'rgba(255,255,255,0.12)'
      el.style.background = 'transparent'
    } else {
      el.style.background = 'transparent'
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(0.97)'
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'scale(1.03)'
    } else {
      e.currentTarget.style.transform = 'scale(1)'
    }
  }

  const transitionStyle: React.CSSProperties = {
    transition: 'all 0.3s var(--ease-expo)',
    ...variantStyle,
  }

  const sharedProps = {
    className: cn(baseStyles, sizeClasses[size], className),
    style: transitionStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  }

  // Sweep overlay for primary variant
  const SweepOverlay =
    variant === 'primary' ? (
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.3s var(--ease-expo)',
          pointerEvents: 'none',
        }}
        className="sweep-overlay"
      />
    ) : null

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {SweepOverlay}
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {SweepOverlay}
      {children}
    </button>
  )
}
