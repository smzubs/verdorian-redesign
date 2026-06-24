'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'
import { SERVICES, scrollToSection } from '@/lib/utils'

/* Per-tier ambient temperature — all warm (amber → sage → care), never a cold tint */
const TIER_GLASS = ['glass-amber', 'glass-sage', 'glass-care'] as const

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Pricing & engagement"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 980px) {
          .pricing-grid { grid-template-columns: 1fr; gap: 20px; max-width: 460px; margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 767px) {
          .services-container { padding-left: 20px !important; padding-right: 20px !important; }
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
            numeral="04"
            eyebrow="Where to Start"
            lead="Clear paths."
            accent="Systems teams actually use."
          />

          <motion.p
            variants={FADE_UP}
            className="prose-measure"
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '17px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              margin: '-28px 0 0',
            }}
          >
            Start small and prove it. Build only what earns its place. Keep it sharp as you grow.
          </motion.p>

          {/* Three engagement tiers — glass cards, per-tier warm ambient */}
          <div className="pricing-grid">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.tier}
                variants={CARD_ENTRANCE}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.8 }}
                className={`glass-card ${TIER_GLASS[i] ?? 'glass-amber'}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  padding: '34px 30px 30px',
                }}
              >
                <span className="glass-topline" aria-hidden="true" />

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
              </motion.div>
            ))}
          </div>

          {/* Single CTA + the guarantee directly beneath it */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', paddingTop: '8px' }}
          >
            <button type="button" className="btn-ink" onClick={() => scrollToSection('contact')}>
              Book a call
            </button>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '13px',
                lineHeight: 1.5,
                color: 'var(--ink-faint)',
                margin: 0,
                textAlign: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '11px' }}>◆</span>
              We find at least 3 automation opportunities in your operation, or the audit&apos;s free.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
