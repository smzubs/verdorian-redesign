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
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
      )
    },
    [tilt]
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    if (cardRef.current) {
      cardRef.current.style.boxShadow = 'var(--shadow-card-hover)'
      cardRef.current.style.borderColor = 'var(--c-border-hover)'
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTransform('')
    if (cardRef.current) {
      cardRef.current.style.boxShadow = 'var(--shadow-card)'
      cardRef.current.style.borderColor = 'var(--c-border)'
    }
  }, [])

  const cardStyle: React.CSSProperties = {
    ...externalStyle,
    background: externalStyle?.background ?? 'var(--c-bg-card)',
    border: '1px solid var(--c-border)',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-card)',
    overflow: 'hidden',
    position: 'relative',
    transform: transform || (isHovered && !tilt ? 'translateY(-4px)' : undefined),
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
      {children}
    </div>
  )
}
