'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const PRINCIPLES = [
  {
    title: 'Ai as force multiplier',
    desc: 'Frontier ai agents and the latest generative technologies act as a genuine force multiplier. They compress months of foundational work into days — generating structure, code, and documentation at machine speed — while we apply deep operational expertise to the decisions that make automation reliable in real operations.',
  },
  {
    title: 'Domain moat that matters',
    desc: '7 years in operations and real-world automation across industries means we catch what the models miss — the operational realities, the workflow exceptions, and the difference between "runs in a demo" and "actually reliable in practice." Our moat is real experience, not theory.',
  },
  {
    title: 'Ship fast, validate faster',
    desc: 'Prototypes in days, real-world testing immediately. We iterate with the teams who will actually use the tools until they fit their workflow like they were always there. No hand-off — we stay until it ships right.',
  },
  {
    title: "Built by someone who's been there",
    desc: 'Every system starts from painful problems we have lived in real operations. No consulting fluff — just production automation we would have wanted for the workflows we did. We ship what we know works across businesses of all sizes.',
  },
]

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      aria-label="The Method"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
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
        @media (max-width: 560px) {
          .loop-row { flex-direction: column !important; gap: 20px !important; }
          .loop-conn { display: none !important; }
        }
      `}</style>
      <div className="how-container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          <SectionHeading
            numeral="02"
            eyebrow="How We Build"
            lead="Production systems,"
            accent="built with ai."
          />

          {/* The Verdorian Loop — named mechanism centerpiece */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: 'var(--gold)',
              }}
            >
              The Verdorian Loop
            </span>

            {/* Loop diagram — three steps connected by gold hairlines with a return arc */}
            <div
              aria-hidden="true"
              style={{ width: '100%', maxWidth: '640px', position: 'relative' }}
            >
              {/* Step row */}
              <div
                className="loop-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Audit */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--ink-faint)',
                    }}
                  >
                    01
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 500,
                      fontSize: 'clamp(20px, 3.5vw, 40px)',
                      letterSpacing: 'var(--track-h2)',
                      color: 'var(--ink)',
                    }}
                  >
                    Audit
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Find the 3 best
                  </span>
                </div>

                {/* Connector: Audit → Build */}
                <div
                  className="loop-conn"
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(165,122,11,0.5), rgba(165,122,11,0.2))',
                    margin: '0 12px',
                    marginTop: '-20px',
                  }}
                />

                {/* Build */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--ink-faint)',
                    }}
                  >
                    02
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 500,
                      fontSize: 'clamp(20px, 3.5vw, 40px)',
                      letterSpacing: 'var(--track-h2)',
                      color: 'var(--ink)',
                    }}
                  >
                    Build
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Ship the system
                  </span>
                </div>

                {/* Connector: Build → Care */}
                <div
                  className="loop-conn"
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(165,122,11,0.2), rgba(165,122,11,0.5))',
                    margin: '0 12px',
                    marginTop: '-20px',
                  }}
                />

                {/* Care */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--gold)',
                    }}
                  >
                    03
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      fontSize: 'clamp(20px, 3.5vw, 40px)',
                      letterSpacing: 'var(--track-h2)',
                      color: 'var(--gold)',
                    }}
                  >
                    Care
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Keep it sharp
                  </span>
                </div>
              </div>

              {/* Return arc — Care feeds the next Audit */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '12px',
                  gap: '8px',
                  position: 'relative',
                }}
              >
                {/* left half-hairline */}
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(to left, rgba(165,122,11,0.28), transparent)',
                  }}
                />
                {/* return glyph */}
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '11px',
                    color: 'var(--gold)',
                    letterSpacing: '0.12em',
                    opacity: 0.72,
                    userSelect: 'none',
                  }}
                >
                  ↺ returns to Audit
                </span>
                {/* right half-hairline */}
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(165,122,11,0.28), transparent)',
                  }}
                />
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '14px',
                color: 'var(--ink-faint)',
                margin: 0,
                textAlign: 'center',
                maxWidth: '52ch',
                lineHeight: 1.7,
              }}
            >
              We find your highest-ROI automations, build the system that fits how you actually work,
              then keep it sharp as you grow. The loop never stops — each pass finds the next thing worth automating.
            </p>
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
