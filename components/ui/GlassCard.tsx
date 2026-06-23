'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PlateProps {
  children: React.ReactNode
  className?: string
  /** kept for call-site compatibility — no longer used (prospectus plates don't tilt) */
  tilt?: boolean
  glow?: boolean
  /** rendered on a dark ink band */
  dark?: boolean
  style?: React.CSSProperties
}

/**
 * Plate — framed "fine printing" card with a hairline double frame.
 * (Exported as GlassCard for backward-compat with existing section imports.)
 */
export function GlassCard({
  children,
  className,
  tilt: _tilt,
  glow: _glow,
  dark = false,
  style,
}: PlateProps) {
  return (
    <motion.div
      className={cn('plate', dark && 'plate-dark', className)}
      style={style}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </motion.div>
  )
}

// Named alias for clarity in new sections
export const Plate = GlassCard
