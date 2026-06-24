'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrustPoint {
  id: string
  label: string
  clause: string
  icon: React.ReactNode
}

interface ShippedCard {
  name: string
  description: string
  tag: string
  href?: string
  isLive?: boolean
}

// ─── SVG glyphs (inline, 20×20 viewport, gold stroke) ─────────────────────────

function IconApproval() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 8l1.8 1.8 3-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 13.5l2 2M14.5 13.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5L3.5 5.2v4.5c0 3.8 2.8 7.2 6.5 8.3 3.7-1.1 6.5-4.5 6.5-8.3V5.2L10 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.2 10l1.8 1.8 3.4-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPuzzle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11.5 14.5h2.2c.4 0 .8-.4.8-.8v-2.2M17.5 14.5h-2.2c-.4 0-.8-.4-.8-.8v-2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="14.5" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconChecklist() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 7l1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 12l1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12.5" y1="7" x2="14.5" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="12.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconClean() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="4" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="4" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="4" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconGauge() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3.5 13.5A7 7 0 1 1 16.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 13.5L7.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="1.2" fill="currentColor" />
      <line x1="10" y1="5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14.8" y1="7" x2="15.8" y2="5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="5.2" y1="7" x2="4.2" y2="5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_POINTS: TrustPoint[] = [
  {
    id: 'human-approval',
    label: 'Human approval where it matters',
    clause:
      'Sensitive decisions, outbound messages, and financial actions route through a human gate. Nothing moves without the right eyes on it.',
    icon: <IconApproval />,
  },
  {
    id: 'secure-workflow',
    label: 'Secure workflow design',
    clause:
      'Credentials stay server-side. Access is scoped to what the workflow needs, not the whole system. We design for least privilege from the start.',
    icon: <IconShield />,
  },
  {
    id: 'existing-tools',
    label: 'Built around your existing tools',
    clause:
      'We wire into the systems you already rely on rather than asking you to replace them. New capability, same operations.',
    icon: <IconPuzzle />,
  },
  {
    id: 'logs-validation',
    label: 'Clear logs and validation',
    clause:
      'Every automated step records what it did and why. When something looks wrong, your team can trace it in plain language, not debug output.',
    icon: <IconChecklist />,
  },
  {
    id: 'no-complexity',
    label: 'No unnecessary complexity',
    clause:
      'We add only what solves the problem. If a simpler path exists, we take it. Systems that are hard to understand are systems that break quietly.',
    icon: <IconClean />,
  },
  {
    id: 'practical-ai',
    label: 'Practical ai, not hype',
    clause:
      'We do not promise autonomous perfection. We build measurable workflow improvements that your team can monitor, adjust, and trust over time.',
    icon: <IconGauge />,
  },
]

const SHIPPED_CARDS: ShippedCard[] = [
  {
    name: 'QRSafePro',
    description:
      'QR-based equipment inspection and inventory, live and used in the field.',
    tag: 'qrsafepro.com',
    href: 'https://qrsafepro.com',
    isLive: true,
  },
  {
    name: 'VoicePencil',
    description:
      'An iOS app that turns voice notes into clean, organized text.',
    tag: 'iOS app',
  },
  {
    name: 'Knight Electric',
    description:
      'A fast, modern marketing site we designed and built.',
    tag: 'knightelectric.net',
    href: 'https://knightelectric.net',
    isLive: true,
  },
]

// ─── Trust point card ─────────────────────────────────────────────────────────

function TrustCard({ point }: { point: TrustPoint }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={FADE_UP}
      className="glass-card"
      aria-labelledby={`trust-label-${point.id}`}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26, mass: 0.7 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '24px 24px 22px',
        willChange: 'transform',
      }}
    >
      <span className="glass-topline" aria-hidden="true" />

      {/* Glyph */}
      <span
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '3px',
          background: 'var(--gold-pale)',
          color: 'var(--gold)',
          marginBottom: '16px',
          flexShrink: 0,
        }}
      >
        {point.icon}
      </span>

      {/* Label */}
      <h3
        id={`trust-label-${point.id}`}
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: 'clamp(17px, 1.6vw, 19px)',
          lineHeight: 1.18,
          letterSpacing: 'var(--track-h3)',
          color: 'var(--ink)',
          margin: '0 0 10px',
        }}
      >
        {point.label}
      </h3>

      {/* Supporting clause */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '14px',
          lineHeight: 1.62,
          color: 'var(--ink-soft)',
          margin: 0,
        }}
      >
        {point.clause}
      </p>
    </motion.article>
  )
}

// ─── Shipped proof card ───────────────────────────────────────────────────────

function ShippedCard({ card }: { card: ShippedCard }) {
  const reduceMotion = useReducedMotion()

  const inner = (
    <>
      {/* Live indicator dot */}
      {card.isLive && (
        <span
          aria-label="Live"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--gold)',
            boxShadow: '0 0 0 2.5px var(--gold-pale)',
          }}
        />
      )}

      {/* Product name */}
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: 'clamp(18px, 1.8vw, 21px)',
          lineHeight: 1.1,
          letterSpacing: 'var(--track-h3)',
          color: 'var(--ink)',
          margin: '0 0 8px',
        }}
      >
        {card.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '13.5px',
          lineHeight: 1.6,
          color: 'var(--ink-soft)',
          margin: '0 0 14px',
          flex: 1,
        }}
      >
        {card.description}
      </p>

      {/* Tag */}
      <span
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.16em',
          color: card.href ? 'var(--gold)' : 'var(--ink-faint)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          marginTop: 'auto',
        }}
      >
        {card.tag}
        {card.href && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </>
  )

  const sharedStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px 18px',
    borderTop: '2px solid var(--rule)',
    background: 'transparent',
    transition: 'border-color 0.22s var(--ease-prospectus)',
    textDecoration: 'none',
    cursor: card.href ? 'pointer' : 'default',
    minHeight: '48px',
    willChange: 'transform',
  }

  if (card.href) {
    return (
      <motion.a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${card.name} — ${card.description} Opens in a new tab.`}
        variants={FADE_UP}
        whileHover={reduceMotion ? undefined : { borderColor: 'var(--gold)', y: -2 }}
        transition={{ type: 'spring', stiffness: 340, damping: 26, mass: 0.7 }}
        style={sharedStyle}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      variants={FADE_UP}
      style={sharedStyle}
    >
      {inner}
    </motion.div>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function Trust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '80px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .trust-container {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 52px;
        }
        .trust-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 0;
          border-left: 1px solid var(--rule);
          border-right: 1px solid var(--rule);
        }
        .trust-proof-grid > * {
          border-right: 1px solid var(--rule);
        }
        .trust-proof-grid > *:last-child {
          border-right: none;
        }
        .trust-proof-strip {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid var(--rule-strong);
        }
        .trust-proof-heading {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--ink-faint);
          margin: 0 0 24px;
        }
        @media (max-width: 767px) {
          .trust-container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 40px;
          }
          .trust-proof-grid {
            grid-template-columns: 1fr;
            border-left: none;
            border-right: none;
          }
          .trust-proof-grid > * {
            border-right: none;
            border-bottom: 1px solid var(--rule);
          }
          .trust-proof-grid > *:last-child {
            border-bottom: none;
          }
          .trust-proof-strip {
            margin-top: 48px;
            padding-top: 32px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .trust-proof-grid {
            grid-template-columns: 1fr 1fr;
          }
          .trust-proof-grid > *:nth-child(2) {
            border-right: none;
          }
          .trust-proof-grid > *:nth-child(3) {
            border-top: 1px solid var(--rule);
            border-right: none;
            grid-column: 1 / -1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-proof-grid > * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="trust-container">
        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div id="trust-heading">
            <SectionHeading
              numeral="06"
              eyebrow="BUILT WITH CONTROL"
              lead="Automation built with control,"
              accent="clarity, and human review."
              align="center"
            />
          </div>

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '16px',
              lineHeight: 1.68,
              color: 'var(--ink-soft)',
              margin: '20px auto 0',
              maxWidth: '60ch',
              textAlign: 'center',
            }}
          >
            We do not automate blindly. We design systems with checkpoints,
            review steps, and clear rules so your workflow stays reliable.
          </motion.p>

          {/* ── Trust grid ─────────────────────────────────────────────────── */}
          <motion.div
            className="trust-grid"
            variants={STAGGER_CONTAINER}
            role="list"
            aria-label="How we build with control"
          >
            {TRUST_POINTS.map((point) => (
              <div key={point.id} role="listitem">
                <TrustCard point={point} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Proof strip ────────────────────────────────────────────────── */}
        <motion.div
          className="trust-proof-strip"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.p
            className="trust-proof-heading"
            variants={FADE_UP}
            aria-label="Real systems we have shipped"
          >
            Real systems we have shipped
          </motion.p>

          <motion.div
            className="trust-proof-grid"
            variants={STAGGER_CONTAINER}
            role="list"
            aria-label="Shipped products"
          >
            {SHIPPED_CARDS.map((card) => (
              <div key={card.name} role="listitem">
                <ShippedCard card={card} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
