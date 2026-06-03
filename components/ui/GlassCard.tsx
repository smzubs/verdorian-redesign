'use client'

import React, { useRef, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
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
  const reducedRef = useRef(false)

  // Premium Framer springs for natural "liquid" tilt + lift (world-class, 60fps, respects reduced-motion)
  const rotateX = useSpring(0, { stiffness: 260, damping: 32, mass: 0.7 })
  const rotateY = useSpring(0, { stiffness: 260, damping: 32, mass: 0.7 })
  const scale = useSpring(1, { stiffness: 300, damping: 28 })
  const y = useSpring(0, { stiffness: 300, damping: 28 })

  useEffect(() => {
    isTouchRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches
    reducedRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tilt || isTouchRef.current || reducedRef.current || !cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const yPos = (e.clientY - rect.top) / rect.height
      rotateX.set((yPos - 0.5) * -10) // ~±5deg natural
      rotateY.set((x - 0.5) * 10)
      scale.set(1.015)
      y.set(-3)
    },
    [tilt, rotateX, rotateY, scale, y]
  )

  const handleMouseEnter = useCallback(() => {
    if (reducedRef.current) return
    // Liquid glass hover: lift + gold hairline (tactile, expensive, memorable)
    if (!tilt) {
      scale.set(1.01)
      y.set(-2)
    }
  }, [tilt, scale, y])

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
    y.set(0)
  }, [rotateX, rotateY, scale, y])

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
    transition: 'border-color 0.28s var(--ease-expo)',
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        ...cardStyle,
        rotateX,
        rotateY,
        scale,
        y,
        transformPerspective: 1000,
      }}
      className={cn('group', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={!tilt && !reducedRef.current ? { y: -2, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
    >
      {/* Inner highlight layer — top 40% catch light (exact spec) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '42%',
          borderRadius: '22px 22px 0 0',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {children}
    </motion.div>
  )
}
