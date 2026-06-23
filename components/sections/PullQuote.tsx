'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

export default function PullQuote() {
  return (
    <section
      aria-label="What we believe"
      style={{
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .pq-container { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
      <motion.div
        className="pq-container"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          textAlign: 'center',
        }}
      >
        <motion.span variants={FADE_UP} className="gold-hairline" aria-hidden="true" style={{ width: '64px' }} />

        <motion.blockquote variants={FADE_UP} style={{ margin: 0 }}>
          <p className="pullquote">
            If a team won&apos;t open it on a Tuesday morning, it isn&apos;t automation —{' '}
            <span className="pq-mark">it&apos;s shelfware.</span>
          </p>
        </motion.blockquote>

        <motion.span
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'var(--ink-faint)',
          }}
        >
          The Verdorian standard
        </motion.span>
      </motion.div>
    </section>
  )
}
