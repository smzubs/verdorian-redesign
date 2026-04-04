'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  tilt?: boolean
  glow?: boolean
}

export function GlassCard({
  children,
  className,
  tilt = true,
  glow = false,
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

      // Max ±5deg
      const rotateX = ((y - cy) / cy) * -5
      const rotateY = ((x - cx) / cx) * 5

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      )
    },
    [tilt]
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform('')
  }, [])

  const cardStyle: React.CSSProperties = {
    background: 'var(--c-forge)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 'var(--r-lg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: isHovered && glow
      ? 'var(--glow-card), var(--glow-plasma), inset 0 1px 0 rgba(255,255,255,0.06)'
      : 'var(--glow-card), inset 0 1px 0 rgba(255,255,255,0.06)',
    overflow: 'hidden',
    position: 'relative',
    transform: transform || undefined,
    transition: transform
      ? 'box-shadow 0.3s var(--ease-expo)'
      : 'transform 0.5s var(--ease-back), box-shadow 0.3s var(--ease-expo)',
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
      {/* Gradient border overlay on hover */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'var(--r-lg)',
          padding: '1px',
          background: 'var(--grad-border)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s var(--ease-expo)',
        }}
      />

      {/* Holographic grid overlay on hover (when tilt enabled) */}
      {tilt && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(139,92,246,0.08) 0px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(139,92,246,0.08) 0px, transparent 1px, transparent 20px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s var(--ease-expo)',
            borderRadius: 'var(--r-lg)',
          }}
        />
      )}

      {children}
    </div>
  )
}
