'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
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
  const [transform, setTransform] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const isTouchRef = useRef(false)
  const reducedMotionRef = useRef(false)

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
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2

      // Max ±3deg — subtle tilt
      const rotateX = ((y - cy) / cy) * -3
      const rotateY = ((x - cx) / cx) * 3

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
      )
    },
    [tilt]
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    if (cardRef.current) {
      cardRef.current.style.boxShadow = `
        0 16px 48px rgba(139, 92, 246, 0.10),
        0 4px 12px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.70),
        inset 0 -1px 0 rgba(0, 0, 0, 0.04)
      `
      cardRef.current.style.borderColor = 'rgba(255, 255, 255, 0.65)'
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform('')
    if (cardRef.current) {
      cardRef.current.style.boxShadow = `
        0 6px 24px rgba(139, 92, 246, 0.06),
        0 1px 4px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.60),
        inset 0 -1px 0 rgba(0, 0, 0, 0.04)
      `
      cardRef.current.style.borderColor = 'rgba(255, 255, 255, 0.50)'
    }
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
    transform: transform || (isHovered && !tilt ? 'translateY(-3px)' : undefined),
    transition: transform
      ? 'border-color 0.3s var(--ease-expo), box-shadow 0.3s var(--ease-expo)'
      : 'transform 0.4s var(--ease-expo), border-color 0.3s var(--ease-expo), box-shadow 0.4s var(--ease-expo)',
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
      {/* Highlight layer — top 40% catch light (::before equivalent) */}
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
