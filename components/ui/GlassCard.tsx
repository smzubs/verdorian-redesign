'use client'

import React, { useRef, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  tilt?: boolean
  glow?: boolean
  style?: React.CSSProperties
}

export function GlassCard({
  children,
  className,
  tilt = true,
  glow: _glow = false,
  style: externalStyle,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isTouchRef = useRef(false)
  const reducedMotionRef = useRef(false)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    isTouchRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches
    reducedMotionRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt || isTouchRef.current || reducedMotionRef.current || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateX = (y - 0.5) * -6   // ±3deg
      const rotateY = (x - 0.5) * 6

      // Direct DOM mutation — zero re-renders, 60fps
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.015)`
    },
    [tilt]
  )

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return
    isHoveredRef.current = true
    // Liquid glass hover: lift 2px + shadow deepen + gold hairline tint (tactile, expensive, memorable)
    cardRef.current.style.boxShadow = `
      0 22px 62px rgba(0, 0, 0, 0.10),
      0 7px 18px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.20),
      inset 0 -1px 0 rgba(0, 0, 0, 0.03)
    `
    cardRef.current.style.borderColor = 'var(--glass-border-gold)'
    if (!tilt && !reducedMotionRef.current) {
      cardRef.current.style.transform = 'translateY(-2px) scale(1.01)'
    }
  }, [tilt])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    isHoveredRef.current = false
    cardRef.current.style.transform = ''
    // Return to base liquid glass shadow + border
    cardRef.current.style.boxShadow = `
      0 14px 48px rgba(0, 0, 0, 0.075),
      0 4px 12px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.025)
    `
    cardRef.current.style.borderColor = 'var(--glass-border)'
  }, [])

  const cardStyle: React.CSSProperties = {
    ...externalStyle,
    // Full Liquid Glass spec — warm cream, deeper blur, hairline, layered expensive shadows + inner lit edge
    background: externalStyle?.background ?? 'var(--glass-fill-elevated)',
    backdropFilter: 'blur(var(--glass-blur-lg)) saturate(var(--glass-saturate))',
    WebkitBackdropFilter: 'blur(var(--glass-blur-lg)) saturate(var(--glass-saturate))',
    border: '1px solid var(--glass-border)',
    borderRadius: '22px',
    boxShadow: `
      0 14px 48px rgba(0, 0, 0, 0.075),
      0 4px 12px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.025)
    `,
    overflow: 'hidden',
    position: 'relative',
    isolation: 'isolate',
    willChange: 'transform',
    // Premium 400-700ms silk/expo for expensive tactile feel
    transition: [
      'transform 0.55s var(--ease-silk)',
      'box-shadow 0.55s var(--ease-expo)',
      'border-color 0.28s var(--ease-expo)',
    ].join(', '),
  }

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      className={cn('group', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Highlight layer — top 40% catch light */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          borderRadius: '20px 20px 0 0',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {children}
    </div>
  )
}
