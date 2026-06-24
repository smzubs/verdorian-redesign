'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, FADE_IN, STAGGER_CONTAINER } from '@/lib/motion'

interface Reason {
  title: string
  desc: React.ReactNode
}

/** 3 reasons — warm storyteller register, one italic conviction clause each. */
const REASONS: Reason[] = [
  {
    title: "We've actually done the work.",
    desc: (
      <>
        There is a live piece of software called QRSafePro — open it at qrsafepro.com right now, used
        by real inspectors in the field.{' '}
        <em>Proof beats a promise, and we prefer to lead with proof.</em>
      </>
    ),
  },
  {
    title: 'We tell you the truth, even when it costs us the sale.',
    desc: (
      <>
        Some of your work should be automated, some should not, and we will tell you which is which.{' '}
        <em>It is a slower way to win a client, and the only one that lets us keep you.</em>
      </>
    ),
  },
  {
    title: "We don't disappear after launch.",
    desc: (
      <>
        We stay on through the monthly Care plan — watching, tuning, adding the next automation as
        your operation grows.{' '}
        <em>A good system is kept sharp; that is a different kind of work.</em>
      </>
    ),
  },
]

const TRUST_ITEMS = [
  'Shipped, not promised',
  'Honest about fit',
  'Stays after launch',
] as const

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why work with us"
      className="glass-stage"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* Scoped responsive overrides — mobile-first, no horizontal scroll */}
      <style>{`
        @media (max-width: 767px) {
          .why-container  { padding-left: 20px !important; padding-right: 20px !important; }
          .why-cards      { grid-template-columns: 1fr !important; gap: 16px !important; }
          .why-trust-strip { gap: 10px !important; }
        }
      `}</style>

      <div
        className="why-container"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          {/* ── Section heading ── */}
          <SectionHeading
            numeral="04"
            eyebrow="WHY US"
            lead="The quiet kind of"
            accent="good."
            align="left"
          />

          {/* ── Gold crown hairline ── */}
          <motion.div
            variants={FADE_IN}
            className="gold-hairline"
            role="separator"
            aria-hidden="true"
          />

          {/* ── Three glass cards — 3-col desktop, 1-col mobile ── */}
          <div
            className="why-cards"
            role="list"
            aria-label="Three reasons to work with us"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '22px',
            }}
          >
            {REASONS.map((r, i) => (
              <motion.article
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="glass-card"
                role="listitem"
                style={{ padding: '32px 30px 30px' }}
              >
                {/* Gold draw-in topline — first child, absolutely positioned */}
                <span className="glass-topline" aria-hidden="true" />

                {/* Engraved numeral */}
                <span
                  className="engraved"
                  style={{
                    display: 'block',
                    fontSize: '52px',
                    lineHeight: 0.9,
                    fontStyle: 'italic',
                    userSelect: 'none',
                    marginBottom: '22px',
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Headline */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 600,
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: 'var(--ink)',
                    margin: '0 0 14px',
                    letterSpacing: 'var(--track-h3)',
                    lineHeight: 1.22,
                  }}
                >
                  {r.title}
                </h3>

                {/* Body with italic conviction clause */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '15px',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.74,
                    margin: 0,
                  }}
                >
                  {r.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* ── Trust strip ── */}
          <motion.div variants={FADE_UP}>
            <div
              className="rule-strong"
              role="separator"
              aria-hidden="true"
            />
            <div
              className="why-trust-strip"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '18px',
                flexWrap: 'wrap',
                paddingTop: '32px',
              }}
            >
              {TRUST_ITEMS.map((item, i, arr) => (
                <React.Fragment key={item}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'var(--ink-faint)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                        flexShrink: 0,
                        opacity: 0.7,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
