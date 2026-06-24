'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const COST_TILES = [
  {
    title: "Hours that don’t come back",
    body: "Repetitive admin that scales with headcount, not software — every new person means more manual work, not less.",
  },
  {
    title: "Work that only runs when one person is in",
    body: "Process trapped in someone’s head. When they’re out, the work stops — and nobody else can pick it up.",
  },
  {
    title: "The slow leak",
    body: "Errors, dropped handoffs, things re-done. It never shows up as one big bill — just slow weeks and work nobody has time to fix.",
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      aria-label="The real cost of manual work"
      className="band-dark"
      style={{ paddingTop: '128px', paddingBottom: '128px' }}
    >
      <style>{`
        @media (max-width: 767px) { .problem-container { padding-left: 20px !important; padding-right: 20px !important; } }
        @media (max-width: 767px) {
          .problem-tiles { grid-template-columns: 1fr !important; gap: 0 !important; }
          .problem-tile { border-left: 0 !important; border-top: 1px solid rgba(24, 119, 242, 0.18) !important; padding: 28px 0 !important; }
          .problem-tile:first-child { border-top: 0 !important; }
        }
      `}</style>
      <div
        className="problem-container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '52px' }}
        >
          {/* Header block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', textAlign: 'center' }}>
            <motion.div variants={FADE_UP}>
              <SectionLabel>The Real Cost</SectionLabel>
            </motion.div>

            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 500,
                fontSize: 'var(--t-h2)',
                lineHeight: 1.1,
                letterSpacing: 'var(--track-h2)',
                margin: 0,
                maxWidth: '22ch',
              }}
            >
              <span style={{ color: 'var(--paper-bright)' }}>Manual work is </span>
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>quietly expensive.</span>
            </motion.h2>

            <motion.p
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '18px',
                color: 'rgba(247, 243, 234, 0.7)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '620px',
              }}
            >
              The hours go to re-keying the same data, chasing approvals across inboxes, and
              rebuilding records that should have been filed automatically. It rarely shows up
              as one big bill — it shows up as slow weeks, missed handoffs, and work nobody
              has time to fix. Operations is the most-automated function in business for a
              reason: it&apos;s where the leak is.
            </motion.p>
          </div>

          {/* Three cost tiles */}
          <motion.div
            variants={FADE_UP}
            className="problem-tiles"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
              width: '100%',
              borderTop: '1px solid rgba(24, 119, 242, 0.24)',
              borderBottom: '1px solid rgba(24, 119, 242, 0.24)',
            }}
          >
            {COST_TILES.map((tile, i) => (
              <div
                key={i}
                className="problem-tile"
                style={{
                  padding: '40px 32px',
                  borderLeft: i > 0 ? '1px solid rgba(24, 119, 242, 0.18)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    fontSize: '40px',
                    lineHeight: 0.9,
                    WebkitTextStroke: '1px rgba(24, 119, 242, 0.5)',
                    color: 'transparent',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 600,
                    fontSize: '22px',
                    color: 'var(--paper-bright)',
                    margin: 0,
                    letterSpacing: 'var(--track-h3)',
                    lineHeight: 1.2,
                  }}
                >
                  {tile.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '15px',
                    color: 'rgba(247, 243, 234, 0.62)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {tile.body}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
