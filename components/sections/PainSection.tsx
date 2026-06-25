'use client'

import { motion } from 'framer-motion'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const CHIPS = [
  'Copy-pasting data',
  'Chasing follow-ups',
  'Building reports by hand',
  'Updating spreadsheets and CRMs',
] as const

export default function PainSection() {
  return (
    <section
      id="problem"
      aria-label="Where your team loses time"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '96px',
        paddingBottom: '96px',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 520px) {
          .pain-section-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .pain-chips {
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pain-chips * { animation: none !important; }
        }
      `}</style>

      {/* Faint ambient — single decorative flourish */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(24,119,242,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="pain-section-inner"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1060px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Heading block */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Manual work is quietly costing you time.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Let automation handle the work.</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '17px',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '58ch',
              }}
            >
              Most teams lose hours through repeated emails, spreadsheet updates,
              reports, approvals, follow-ups, and data entry.
            </p>
          </motion.div>

          {/* Pain chips */}
          <motion.div
            variants={FADE_UP}
            className="pain-chips"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {CHIPS.map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--ink-soft)',
                  background: 'rgba(255,255,255,0.52)',
                  border: '1px solid var(--rule-strong)',
                  borderRadius: 'var(--r-sm, 6px)',
                  padding: '10px 18px',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.01em',
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Closing line */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '14px',
              color: 'var(--ink-faint)',
              margin: 0,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            If it repeats every week, it may be worth automating.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
