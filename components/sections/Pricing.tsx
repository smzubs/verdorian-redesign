'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// ─── Pilot journey steps (inside the feature card) ───────────────────────────

interface PilotStep {
  label: string
  detail: string
}

const PILOT_STEPS: PilotStep[] = [
  {
    label: 'Free fit call',
    detail: '20 minutes. We find the one workflow with the clearest payoff — and agree on the number it has to hit.',
  },
  {
    label: 'We build it',
    detail: 'A working automation in about two weeks, shaped around your real process — not a template.',
  },
  {
    label: 'You test-drive it',
    detail: 'It runs live on your real data for 14 days, on our infrastructure. Your team uses it like it already belongs to you.',
  },
  {
    label: 'Pay only if it works',
    detail: 'Hit the number we agreed on and you buy it — with your $500 credited. Miss it, and you walk away.',
  },
]

// ─── Follow-on tiers ─────────────────────────────────────────────────────────

interface Tier {
  title: string
  price: string
  priceNote: string
  body: string
}

const TIERS: Tier[] = [
  {
    title: 'Build & Own',
    price: 'from $5,000',
    priceNote: 'fixed quote — never hourly',
    body: 'Your pilot grows into a full system you own: integrations, dashboards, documentation, and training. The quote is fixed before we start.',
  },
  {
    title: 'Run & Improve',
    price: 'from $1,500/mo',
    priceNote: 'cancel anytime',
    body: 'We monitor what we built, fix anything that drifts, and keep adding workflows as your operation evolves — with human review where it matters.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Verdorian pricing — test-drive pilot, build, and care plans"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Pilot feature card: price column + steps column on desktop */
        .pricing-pilot-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }
        @media (min-width: 880px) {
          .pricing-pilot-grid {
            grid-template-columns: 0.9fr 1.4fr;
            gap: 56px;
            align-items: center;
          }
        }

        /* Follow-on tier pair */
        .pricing-tier-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 780px) {
          .pricing-tier-grid { grid-template-columns: 1fr 1fr; gap: 18px; }
        }

        /* Pilot step rows */
        .pricing-step { display: flex; gap: 14px; align-items: flex-start; }
        .pricing-step-num {
          flex-shrink: 0;
          width: 26px; height: 26px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 9999px;
          border: 1.5px solid rgba(24, 119, 242, 0.45);
          background: rgba(24, 119, 242, 0.07);
          font-family: var(--font-body), sans-serif;
          font-size: 11px; font-weight: 700;
          color: var(--gold);
          margin-top: 1px;
        }

        @media (max-width: 390px) {
          .pricing-wrap { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      <div
        className="pricing-wrap"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(20px, 5vw, 48px)',
          paddingRight: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}
        >
          {/* ── Section heading ─────────────────────────────────── */}
          <SectionHeading
            eyebrow="PRICING — TEST-DRIVE FIRST"
            lead="Try it working."
            accent="Pay when it works."
            align="center"
          />

          {/* ── Pilot feature card ──────────────────────────────── */}
          <motion.article
            variants={FADE_UP}
            className="glass-card glass-amber"
            aria-label="Test-Drive Pilot — $500 to start, credited toward your build"
            style={{ position: 'relative', maxWidth: '1020px', margin: '0 auto', width: '100%' }}
          >
            <span className="glass-topline" aria-hidden="true" />
            <div
              className="pricing-pilot-grid"
              style={{ padding: 'clamp(32px, 4vw, 52px)' }}
            >
              {/* Price column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.28em',
                    color: 'var(--gold)',
                  }}
                >
                  The Test-Drive Pilot
                </span>

                <span
                  className="engraved"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(56px, 8vw, 96px)',
                    lineHeight: 0.85,
                    display: 'block',
                    userSelect: 'none',
                  }}
                >
                  $500
                </span>

                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '14px',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  to start — <span style={{ color: 'var(--ink)', fontWeight: 600 }}>fully credited toward your build</span>
                </p>

                <hr style={{ border: 0, borderTop: '1px solid var(--rule)', margin: '4px 0' }} />

                <p
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(19px, 2.2vw, 24px)',
                    color: 'var(--gold)',
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  If it doesn&apos;t hit the number we agreed on, you don&apos;t buy it.
                </p>

                <div style={{ marginTop: '8px' }}>
                  <GlowButton variant="blue" size="md" onClick={() => scrollToSection('contact')}>
                    Start Your Test-Drive
                  </GlowButton>
                </div>
              </div>

              {/* Steps column */}
              <ol
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                }}
              >
                {PILOT_STEPS.map((step, i) => (
                  <li key={step.label} className="pricing-step">
                    <span className="pricing-step-num" aria-hidden="true">{i + 1}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: '14.5px',
                          fontWeight: 700,
                          color: 'var(--ink)',
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: '14px',
                          color: 'var(--ink-soft)',
                          lineHeight: 1.65,
                        }}
                      >
                        {step.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.article>

          {/* ── Follow-on tiers ─────────────────────────────────── */}
          <div
            className="pricing-tier-grid"
            role="list"
            aria-label="What comes after the pilot"
            style={{ maxWidth: '1020px', margin: '0 auto', width: '100%' }}
          >
            {TIERS.map((tier, i) => (
              <motion.article
                key={tier.title}
                className="glass-card"
                role="listitem"
                variants={CARD_ENTRANCE}
                custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                style={{ position: 'relative' }}
              >
                <span className="glass-topline" aria-hidden="true" />
                <div
                  style={{
                    padding: 'clamp(28px, 3vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontWeight: 400,
                      fontSize: 'clamp(23px, 2.6vw, 30px)',
                      color: 'var(--ink)',
                      margin: 0,
                      lineHeight: 1.05,
                    }}
                  >
                    {tier.title}
                  </h3>

                  <p style={{ margin: 0, display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '19px',
                        fontWeight: 700,
                        color: 'var(--gold)',
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'var(--ink-faint)',
                      }}
                    >
                      {tier.priceNote}
                    </span>
                  </p>

                  <hr style={{ border: 0, borderTop: '1px solid var(--rule)', margin: '2px 0' }} />

                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 'clamp(14px, 1.4vw, 15px)',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {tier.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Footnote ────────────────────────────────────────── */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.24em',
              color: 'var(--ink-faint)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Every quote is fixed before we start — the pilot runs on our infrastructure until you own it
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
