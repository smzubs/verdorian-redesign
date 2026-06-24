'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, FADE_IN, STAGGER_CONTAINER } from '@/lib/motion'

/**
 * Each reason: title, body with one <em>-marked conviction clause.
 * desc is a React node so we can italicize inline without an external library.
 * desccopy holds the plain string for any consumers that need it.
 */
interface Reason {
  title: string
  desc: React.ReactNode
}

/** 5 reasons — literary-warm voice, proof anchors, italic conviction clauses. */
const REASONS: Reason[] = [
  {
    title: "We've actually done the work.",
    desc: (
      <>
        There is a live piece of software called QRSafePro — you can open it at qrsafepro.com right
        now, in a real browser, used by real inspectors in the field. We built it. Before we tell you
        something can be done, we have usually already done a harder version of it for someone else.{' '}
        <em>That quiet confidence is the difference between a pitch and a craftsman.</em>
      </>
    ),
  },
  {
    title: 'We tell you the truth, even when it costs us the sale.',
    desc: (
      <>
        The industry is loud with "100% accurate" and "any industry, instantly." We have found that
        the honest answer — some of your work should be automated, some should not, and we will tell
        you which is which — tends to lose us the impatient client and keep us the right one.{' '}
        <em>It is a slower way to win a customer, and the only one that lets us keep you.</em>
      </>
    ),
  },
  {
    title: "The first move is small, and it's on us if we're wrong.",
    desc: (
      <>
        You do not have to trust us on faith. The $497 audit is a deliberate small door — if we
        cannot find at least three genuine automation opportunities in your operation, you pay
        nothing. We would rather earn the build than ask you to gamble on a stranger&rsquo;s promise.{' '}
        <em>The guarantee is not marketing language; it is how we hold ourselves honest.</em>
      </>
    ),
  },
  {
    title: 'We build for how your operation actually works, not how a demo does.',
    desc: (
      <>
        Software that works in a clean demo is a magic trick. We build for the half-charged phone
        on a job site, the spreadsheet nobody named properly, the process that lives entirely inside
        one person&rsquo;s head. You stay in control — the software is the tool, not the boss.{' '}
        <em>Real operations are complicated in specific ways, and we start by learning yours.</em>
      </>
    ),
  },
  {
    title: "We don't disappear after launch.",
    desc: (
      <>
        Most shops hand over the keys and go looking for the next client. We stay — watching,
        tuning, adding the next automation as your operation grows — through the monthly Care plan.
        A good system is not delivered once;{' '}
        <em>it is kept sharp, and that is a different kind of work.</em>
      </>
    ),
  },
]

const TRUST_ITEMS = [
  'Shipped, not promised',
  'Honest about fit',
  'Falsifiable guarantee',
  'Stays after launch',
] as const

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why work with us"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* Scoped responsive overrides — mobile-first, no horizontal scroll */}
      <style>{`
        @media (max-width: 899px) {
          .why-pull-quote { display: none !important; }
        }
        @media (max-width: 767px) {
          .why-container { padding-left: 20px !important; padding-right: 20px !important; }
          .why-row      { grid-template-columns: 1fr !important; gap: 14px !important; padding: 40px 0 !important; }
          .why-numeral  { font-size: 46px !important; }
        }
        @media (max-width: 480px) {
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
            eyebrow="WHY WORK WITH US"
            lead="The quiet kind of"
            accent="good."
            align="left"
          />

          {/* ── Gold crown hairline — one use, beneath the heading ── */}
          <motion.div
            variants={FADE_IN}
            className="gold-hairline"
            role="separator"
            aria-hidden="true"
          />

          {/* ── ONE glass pull-quote — desktop ≥ 900px only, the section's illuminated exhibit ── */}
          <motion.blockquote
            variants={FADE_UP}
            className="glass-panel glass-card why-pull-quote"
            style={{
              margin: '0 auto 16px',
              maxWidth: '680px',
              padding: '40px 48px',
              textAlign: 'center',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
              fontFamily: 'var(--font-display), Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2.8vw, 32px)',
              lineHeight: 1.34,
              letterSpacing: '-0.012em',
              color: 'var(--ink)',
              quotes: 'none',
            }}
            aria-label="Studio philosophy"
          >
            We&rsquo;d rather tell you when not to automate than sell you something that collects dust.
          </motion.blockquote>

          {/* ── Numbered ledger — ruled rows, engraved numeral column ── */}
          <div
            style={{ borderTop: '1px solid var(--rule-strong)' }}
            role="list"
            aria-label="Five reasons to work with us"
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      delay: i * 0.10,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="why-row"
                role="listitem"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: '40px',
                  alignItems: 'start',
                  padding: '56px 0',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                {/* Engraved gold numeral — fades in only, no slide (settled record) */}
                <motion.span
                  variants={FADE_IN}
                  className="engraved why-numeral"
                  style={{
                    fontSize: '64px',
                    lineHeight: 0.9,
                    fontStyle: 'italic',
                    userSelect: 'none',
                    paddingTop: '4px',
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>

                {/* Reason text */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontWeight: 600,
                      fontSize: 'clamp(20px, 2.4vw, 26px)',
                      color: 'var(--ink)',
                      margin: '0 0 16px',
                      letterSpacing: 'var(--track-h3)',
                      lineHeight: 1.18,
                      maxWidth: '26ch',
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '16px',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.72,
                      margin: 0,
                      maxWidth: '580px',
                      fontStyle: 'normal',
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Trust strip — rule-strong above, 6px gold dots, 32px pad-top ── */}
          <motion.div variants={FADE_UP}>
            {/* One ruled line before the strip — like a ruling that ends a court record */}
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
