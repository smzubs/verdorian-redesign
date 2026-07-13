'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/motion'

// One statement, said once — the entire argument for automation.

export default function PainSection() {
  return (
    <section
      id="problem"
      aria-label="If it repeats, it can be automated"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(88px, 11vw, 128px)',
        paddingBottom: 'clamp(88px, 11vw, 128px)',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Faint ambient — single decorative flourish */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(24,119,242,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '980px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.h2
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={
            {
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 500,
              fontSize: 'clamp(34px, 5vw, 64px)',
              lineHeight: 1.18,
              letterSpacing: '0.005em',
              color: 'var(--ink)',
              margin: 0,
              textAlign: 'center',
              textWrap: 'balance',
            } as React.CSSProperties
          }
        >
          If it repeats every day, every week&nbsp;&mdash;{' '}
          <em className="gold-shimmer" style={{ display: 'block', marginTop: '6px' }}>
            it can be automated.
          </em>
        </motion.h2>
      </div>
    </section>
  )
}
