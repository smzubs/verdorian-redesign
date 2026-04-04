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
          background: 'rgba(139, 92, 246, 0.12)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
          backdropFilter: 'blur(12px) saturate(140%)',
          border: '1px solid rgba(139, 92, 246, 0.45)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 4px 20px rgba(139,92,246,0.20)',
          color: 'var(--c-text-1)',
          borderRadius: 'var(--r-pill)',
        }
      : variant === 'ghost'
        ? {
            background: 'rgba(255, 255, 255, 0.06)',
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            color: 'rgba(237, 237, 255, 0.80)',
            borderRadius: 'var(--r-pill)',
          }
        : {
            background: 'rgba(255, 255, 255, 0.04)',
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(139, 92, 246, 0.45)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            color: 'var(--c-plasma)',
            borderRadius: 'var(--r-pill)',
          }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'rgba(139, 92, 246, 0.22)'
      el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.14), 0 6px 28px rgba(139,92,246,0.35)'
      el.style.transform = 'scale(1.02)'
    } else if (variant === 'ghost') {
      el.style.background = 'rgba(255, 255, 255, 0.10)'
      el.style.borderColor = 'rgba(255,255,255,0.18)'
    } else {
      el.style.background = 'rgba(139, 92, 246, 0.12)'
      el.style.borderColor = 'rgba(139, 92, 246, 0.65)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.background = 'rgba(139, 92, 246, 0.12)'
      el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.10), 0 4px 20px rgba(139,92,246,0.20)'
      el.style.transform = 'scale(1)'
    } else if (variant === 'ghost') {
      el.style.background = 'rgba(255, 255, 255, 0.06)'
      el.style.borderColor = 'rgba(255,255,255,0.10)'
    } else {
      el.style.background = 'rgba(255, 255, 255, 0.04)'
      el.style.borderColor = 'rgba(139, 92, 246, 0.45)'
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(0.97)'
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'scale(1.02)'
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
