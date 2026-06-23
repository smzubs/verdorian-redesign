'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { SERVICES } from '@/lib/utils'

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services & Pricing"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .services-container { padding-left: 20px !important; padding-right: 20px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid .rule-v { display: none !important; }
          .service-col { border-top: 1px solid var(--rule-strong); padding: 36px 0 !important; }
          .service-col:first-child { border-top: 0; }
        }
      `}</style>
      <div className="services-container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}
        >
          <SectionHeading
            numeral="03"
            eyebrow="Where to Start"
            lead="Clear paths. Real results."
            accent="Systems teams actually use."
          />

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '17px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              margin: '-28px 0 0',
              maxWidth: '56ch',
            }}
          >
            Start small and prove it. Build only what earns its place. Keep it sharp as you grow.
          </motion.p>

          {/* Ruled 3-up terms */}
          <motion.div
            variants={FADE_UP}
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
              borderTop: '1px solid var(--rule-strong)',
              borderBottom: '1px solid var(--rule-strong)',
            }}
          >
            {SERVICES.map((service, i) => (
              <React.Fragment key={service.tier}>
                {i > 0 && <span className="rule-v" aria-hidden="true" />}
                <div
                  className="service-col"
                  style={{
                    padding: '44px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  {/* Tier + price */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="eyebrow">{service.tier}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display), serif',
                        fontSize: '40px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        lineHeight: 1,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {service.price}
                    </span>
                    <span aria-hidden="true" style={{ width: '36px', height: '2px', background: 'var(--gold)' }} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: '23px',
                      color: 'var(--ink)',
                      margin: 0,
                      letterSpacing: 'var(--track-h3)',
                    }}
                  >
                    {service.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '14px',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Outcomes */}
                  <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '12px',
                      }}
                    >
                      What you get
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.outcomes.map((outcome, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-body), sans-serif',
                            fontSize: '13.5px',
                            color: 'var(--ink)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            lineHeight: 1.45,
                            padding: '10px 0',
                            borderTop: '1px solid var(--rule-faint)',
                          }}
                        >
                          <span aria-hidden="true" style={{ color: 'var(--gold)', fontWeight: 700, marginTop: '1px' }}>→</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
