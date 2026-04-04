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
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const baseStyles =
  'relative inline-flex items-center justify-center select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--c-plasma)]'

const PRIMARY_INITIAL: React.CSSProperties = {
  background: 'linear-gradient(104deg, rgba(253,253,253,0.05) 5%, rgba(240,240,228,0.10) 100%)',
  WebkitBackdropFilter: 'blur(25px)',
  backdropFilter: 'blur(25px)',
  border: '1.5px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.2)',
  color: 'rgba(255,255,255,0.92)',
  backgroundOrigin: 'border-box',
  fontWeight: 500,
}

const GHOST_INITIAL: React.CSSProperties = {
  background: 'transparent',
  border: '1.5px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: 'rgba(255,255,255,0.56)',
  boxShadow: 'none',
  fontWeight: 500,
}

const OUTLINE_INITIAL: React.CSSProperties = {
  background: 'transparent',
  border: '1.5px solid rgba(139, 92, 246, 0.35)',
  borderRadius: '12px',
  color: 'var(--c-plasma)',
  boxShadow: 'none',
  fontWeight: 500,
}

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
      ? PRIMARY_INITIAL
      : variant === 'ghost'
        ? GHOST_INITIAL
        : OUTLINE_INITIAL

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'rgba(255, 255, 255, 0.92)'
      el.style.color = '#000000'
      el.style.borderColor = 'rgba(255,255,255,0.92)'
      el.style.boxShadow = '0 4px 16px rgba(255,255,255,0.15)'
      el.style.transform = 'translateY(-1px)'
    } else if (variant === 'ghost') {
      el.style.color = 'rgba(255,255,255,0.92)'
      el.style.background = 'rgba(255,255,255,0.04)'
      el.style.borderColor = 'rgba(255,255,255,0.15)'
    } else {
      el.style.background = 'rgba(139, 92, 246, 0.10)'
      el.style.borderColor = 'rgba(139, 92, 246, 0.55)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'linear-gradient(104deg, rgba(253,253,253,0.05) 5%, rgba(240,240,228,0.10) 100%)'
      el.style.color = 'rgba(255,255,255,0.92)'
      el.style.borderColor = 'rgba(255,255,255,0.08)'
      el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.2)'
      el.style.transform = 'translateY(0)'
    } else if (variant === 'ghost') {
      el.style.color = 'rgba(255,255,255,0.56)'
      el.style.background = 'transparent'
      el.style.borderColor = 'rgba(255,255,255,0.08)'
    } else {
      el.style.background = 'transparent'
      el.style.borderColor = 'rgba(139, 92, 246, 0.35)'
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

  const transitionStyle: React.CSSProperties = {
    transition: 'all 0.25s var(--ease-expo)',
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

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </button>
  )
}
