'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP } from '@/lib/motion'

interface SectionHeadingProps {
  numeral?: string
  eyebrow: string
  /** plain lead text of the headline */
  lead: string
  /** italic-gold accent clause that follows the lead on its own line */
  accent: string
  align?: 'left' | 'center'
  invert?: boolean
}

/** Prospectus section header: gold eyebrow + "No. 0X" numeral, then a Cormorant headline with an italic-gold accent line. */
export function SectionHeading({
  numeral,
  eyebrow,
  lead,
  accent,
  align = 'left',
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
      }}
    >
      <motion.div variants={FADE_UP}>
        <SectionLabel numeral={numeral}>{eyebrow}</SectionLabel>
      </motion.div>
      <motion.h2
        variants={FADE_UP}
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontWeight: 400,
          fontSize: 'var(--t-h2)',
          letterSpacing: '-0.014em',
          margin: 0,
          lineHeight: 1.04,
          maxWidth: '18ch',
        }}
      >
        <span style={{ display: 'block', color: invert ? 'var(--paper-bright)' : 'var(--ink)' }}>{lead}</span>
        <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>{accent}</span>
      </motion.h2>
    </div>
  )
}
