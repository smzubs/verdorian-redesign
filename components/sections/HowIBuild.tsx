'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const PRINCIPLES = [
  {
    title: 'Ai as force multiplier',
    desc: 'Frontier Ai agents and the latest generative technologies act as a genuine force multiplier. They compress months of foundational work into days — generating structure, code, and documentation at machine speed — while we apply deep operational expertise to the decisions that make automation reliable in real operations.',
  },
  {
    title: 'Domain moat that matters',
    desc: '7 years in operations, compliance, and real-world automation means we catch what the models miss — regulatory edge cases, operational realities, and the difference between "compliant on paper" and "actually reliable in practice." Our moat is real experience across industries, not theory.',
  },
  {
    title: 'Ship fast, validate faster',
    desc: 'Prototypes in days, real-world testing immediately. We iterate with the teams who will actually use the tools until they fit their workflow like they were always there. No hand-off — we stay until it ships right.',
  },
  {
    title: "Built by someone who's been there",
    desc: 'Every system starts from painful problems we have lived in real operations. No consulting fluff — just production automation we would have wanted for the workflows we did. We ship what we know works across businesses.',
  },
]

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      aria-label="The Method"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .how-container { padding-left: 20px !important; padding-right: 20px !important; }
          .how-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .how-numeral { font-size: 44px !important; }
        }
      `}</style>
      <div className="how-container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          <SectionHeading
            numeral="02"
            eyebrow="How We Build"
            lead="Production systems,"
            accent="built with ai."
          />

          {/* Three-word method centerpiece — maps to the three terms of engagement */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}
          >
            <span className="gold-hairline" aria-hidden="true" style={{ flex: 1, maxWidth: '140px' }} />
            <span
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 500,
                fontSize: 'clamp(22px, 4vw, 52px)',
                letterSpacing: 'var(--track-h2)',
                color: 'var(--ink)',
                whiteSpace: 'nowrap',
              }}
            >
              Audit. Build. <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Maintain.</em>
            </span>
            <span className="gold-hairline" aria-hidden="true" style={{ flex: 1, maxWidth: '140px' }} />
          </motion.div>

          {/* Ruled method ledger */}
          <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                variants={FADE_UP}
                className="how-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  padding: '36px 0',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                <span
                  className="engraved how-numeral"
                  style={{ fontSize: '64px', lineHeight: 0.9, fontStyle: 'italic' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: '26px',
                      color: 'var(--ink)',
                      margin: '0 0 10px',
                      letterSpacing: 'var(--track-h3)',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '15px',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: '640px',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
