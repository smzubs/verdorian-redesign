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
    cardRef.current.style.boxShadow = `
      0 20px 56px rgba(139, 92, 246, 0.12),
      0 6px 16px rgba(0, 0, 0, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75),
      inset 0 -1px 0 rgba(0, 0, 0, 0.04)
    `
    cardRef.current.style.borderColor = 'rgba(255, 255, 255, 0.70)'
    // Only translate if no tilt (tilt overrides transform on mousemove)
    if (!tilt && !reducedMotionRef.current) {
      cardRef.current.style.transform = 'translateY(-4px) scale(1.015)'
    }
  }, [tilt])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    isHoveredRef.current = false
    // Clear transform — CSS transition handles the spring-back via ease-back
    cardRef.current.style.transform = ''
    cardRef.current.style.boxShadow = `
      0 6px 24px rgba(139, 92, 246, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.60),
      inset 0 -1px 0 rgba(0, 0, 0, 0.04)
    `
    cardRef.current.style.borderColor = 'rgba(255, 255, 255, 0.50)'
  }, [])

  const cardStyle: React.CSSProperties = {
    ...externalStyle,
    background: externalStyle?.background ?? 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(8px) saturate(160%) brightness(105%)',
    WebkitBackdropFilter: 'blur(8px) saturate(160%) brightness(105%)',
    border: '1px solid rgba(255, 255, 255, 0.50)',
    borderRadius: '20px',
    boxShadow: `
      0 6px 24px rgba(139, 92, 246, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.60),
      inset 0 -1px 0 rgba(0, 0, 0, 0.04)
    `,
    overflow: 'hidden',
    position: 'relative',
    isolation: 'isolate',
    // GPU-composited — will-change keeps transform on compositor thread
    willChange: 'transform',
    // ease-back on transform = slight overshoot on hover entry, spring-back on leave
    // ease-expo on shadow = smooth fade without bouncing
    transition: [
      'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      'box-shadow 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
      'border-color 0.35s cubic-bezier(0.19, 1, 0.22, 1)',
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
