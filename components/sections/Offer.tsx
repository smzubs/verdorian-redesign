'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

export default function Offer() {
  return (
    <section
      id="offer"
      aria-label="Start with a $497 audit"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .offer-container { padding-left: 20px !important; padding-right: 20px !important; } }
        @media (max-width: 480px) {
          .offer-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .offer-cta-row > * { width: 100% !important; }
        }
      `}</style>
      <div
        className="offer-container"
        style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          <GlassCard style={{ padding: '0' }}>
            <div style={{ padding: '56px 52px' }}>
              <motion.div variants={FADE_UP} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                {/* Price stamp */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.26em',
                      color: 'var(--gold)',
                    }}
                  >
                    Audit · $497
                  </span>
                  <span
                    aria-hidden="true"
                    style={{ flex: 1, maxWidth: '48px', height: '1px', background: 'var(--gold)', opacity: 0.4 }}
                  />
                </div>

                {/* Headline */}
                <motion.h2
                  variants={FADE_UP}
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontWeight: 500,
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    lineHeight: 1.06,
                    letterSpacing: 'var(--track-h2)',
                    margin: 0,
                    color: 'var(--ink)',
                    maxWidth: '16ch',
                  }}
                >
                  Start with a{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>$497 audit.</em>
                </motion.h2>

                {/* Body */}
                <motion.p
                  variants={FADE_UP}
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '18px',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: '58ch',
                  }}
                >
                  We map your manual workflows, find the three highest-ROI automations, and hand
                  you a build-ready plan with real effort estimates and ROI — before you commit to
                  a build. No retainer. No lock-in.
                </motion.p>

                {/* Guarantee line */}
                <motion.div
                  variants={FADE_UP}
                  style={{
                    borderTop: '1px solid var(--rule-strong)',
                    borderBottom: '1px solid var(--rule-strong)',
                    padding: '20px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: '28px', height: '1px', background: 'var(--gold)', flexShrink: 0 }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(16px, 2.2vw, 21px)',
                      color: 'var(--ink)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    We find at least 3 automation opportunities in your operation, or the audit&apos;s free.
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  variants={FADE_UP}
                  className="offer-cta-row"
                  style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}
                >
                  <GlowButton variant="ink" size="lg" onClick={() => scrollToSection('contact')}>
                    Book a call
                  </GlowButton>
                </motion.div>

              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
