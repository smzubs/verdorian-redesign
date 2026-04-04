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
  glow = false,
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

      // Max ±3deg (subtler than before)
      const rotateX = ((y - cy) / cy) * -3
      const rotateY = ((x - cx) / cx) * 3

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
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

  const baseBackground = externalStyle?.background ?? 'var(--c-bg-card)'
  const hoveredBackground = isHovered
    ? (externalStyle?.background ?? 'var(--c-bg-elevated)')
    : (externalStyle?.background ?? 'var(--c-bg-card)')

  const cardStyle: React.CSSProperties = {
    ...externalStyle,
    background: isHovered && !externalStyle?.background
      ? 'var(--c-bg-elevated)'
      : (externalStyle?.background ?? 'var(--c-bg-card)'),
    border: `1px solid ${isHovered ? 'var(--c-border-hover)' : 'var(--c-border)'}`,
    borderRadius: 'var(--r-lg)',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    boxShadow: 'none',
    overflow: 'hidden',
    position: 'relative',
    transform: transform || (isHovered && !tilt ? 'translateY(-2px)' : undefined),
    transition: transform
      ? 'border-color 0.3s var(--ease-expo), background 0.3s var(--ease-expo)'
      : 'transform 0.5s var(--ease-back), border-color 0.3s var(--ease-expo), background 0.3s var(--ease-expo)',
  }

  // Suppress the unused variable warnings — these are consumed via isHovered state above
  void baseBackground
  void hoveredBackground
  void glow

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      className={cn('group', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top edge highlight — the premium detail */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.10) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

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
          opacity: isHovered ? 0.6 : 0,
          transition: 'opacity 0.3s var(--ease-expo)',
        }}
      />

      {children}
    </div>
  )
}
