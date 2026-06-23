'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/motion'

const SHIPPED = ['QRSafePro', 'ChangeOrderAI', 'PolicyPilot', 'VoicePencil']

export default function ProofBar() {
  return (
    <section
      id="proof"
      aria-label="Shipped to production"
      style={{
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
        borderBottom: '1px solid var(--rule-strong)',
        padding: '34px 24px',
      }}
    >
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '16px 28px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'var(--ink-faint)',
          }}
        >
          Shipped to production
        </span>
        <span aria-hidden="true" style={{ width: '1px', height: '18px', background: 'var(--rule-strong)' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px 22px' }}>
          {SHIPPED.map((name, i) => (
            <React.Fragment key={name}>
              {i > 0 && (
                <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '10px', opacity: 0.6 }}>
                  ✦
                </span>
              )}
              <span
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  letterSpacing: '0.01em',
                }}
              >
                {name}
              </span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
