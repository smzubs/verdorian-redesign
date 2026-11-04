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
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(195,112,128,0.12) 0%, rgba(126,48,66,0.06) 46%, transparent 72%)',
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
              fontFamily: 'var(--font-tech), system-ui, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(26px, 4.4vw, 60px)',
              lineHeight: 1.25,
              letterSpacing: '0.05em',
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
