'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   ICON TILE
   iOS-app-icon shaped frosted square (~54px, radius 14px) with a blue→indigo
   gradient fill, luminous white-to-blue 1px border, inner sheen, and a
   centered 24px stroke SVG glyph. Hue varies subtly per card within the
   brand blue/indigo/cyan family.
   ────────────────────────────────────────────────────────────────────────── */

interface IconTileProps {
  /** Gradient stops — two colors in the blue→indigo→cyan family */
  gradFrom: string
  gradTo: string
  children: React.ReactNode
}

function IconTile({ gradFrom, gradTo, children }: IconTileProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '54px',
        height: '54px',
        borderRadius: '14px',
        flexShrink: 0,
        position: 'relative',
        background: `linear-gradient(140deg, ${gradFrom} 0%, ${gradTo} 100%)`,
        border: '1px solid rgba(255,255,255,0.55)',
        boxShadow:
          '0 1px 0 0 rgba(255,255,255,0.45) inset, 0 4px 12px rgba(24,119,242,0.22), 0 1px 3px rgba(24,119,242,0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Inner sheen — diagonal highlight */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '14px',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </span>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   SVG GLYPHS — stroke-only, 24×24 viewport, no fill clutter.
   Stroke color inherits from parent via currentColor or explicit rgba.
   ────────────────────────────────────────────────────────────────────────── */

const ICON_STROKE = 'rgba(255,255,255,0.95)'
const SW = '1.6' // strokeWidth

function IconWorkflow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5" cy="6" r="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <circle cx="5" cy="18" r="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <circle cx="19" cy="12" r="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M7 6h4a2 2 0 012 2v2" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M7 18h4a2 2 0 002-2v-2" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M13 12h4" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M16 9l3 3-3 3" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconDataEntry() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="13" height="17" rx="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M7 8h6M7 12h4M7 16h5" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M17 14l3-3-3-3" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 11H12" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

function IconReports() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M7 17V13" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M11 17V9" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M15 17v-5" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M7 10l4-3 4 2 3-3" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconConnected() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5" cy="12" r="2.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <circle cx="19" cy="6" r="2.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <circle cx="19" cy="18" r="2.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M7.2 11.1L16.5 7" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M7.2 12.9L16.5 17" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

function IconBI() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l2.5 5H20l-4.5 3.5 1.5 5.5L12 14 7 17l1.5-5.5L4 8h5.5L12 3z"
        stroke={ICON_STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCustomSoftware() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="4" x2="10" y2="20" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

function IconWebsite() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M2 8h20" stroke={ICON_STROKE} strokeWidth={SW} />
      <circle cx="5.5" cy="6" r="0.8" fill={ICON_STROKE} />
      <circle cx="8" cy="6" r="0.8" fill={ICON_STROKE} />
      <path d="M6 13h12M6 17h8" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

function IconSaaS() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <rect x="5" y="9" width="14" height="6" rx="1.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <rect x="7" y="4" width="10" height="6" rx="1.5" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M14.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke={ICON_STROKE} strokeWidth={SW} />
    </svg>
  )
}

function IconiOS() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="3" stroke={ICON_STROKE} strokeWidth={SW} />
      <path d="M10 5h4" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="0.9" fill={ICON_STROKE} />
      <path d="M9.5 9.5h2M9.5 12h5M9.5 14.5h3" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

function IconAccurate() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z"
        stroke={ICON_STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M9 12l2.5 2.5L15 9" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   DATA — 10 capability cards
   gradFrom / gradTo: blue→indigo→cyan family only, varied per card.
   ────────────────────────────────────────────────────────────────────────── */

interface CapabilityItem {
  id: string
  title: string
  description: string
  gradFrom: string
  gradTo: string
  Icon: React.FC
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description:
      'Approvals, hand-offs, and reminders wired together so your processes run start-to-finish — with no one chasing anyone.',
    gradFrom: '#1877F2',
    gradTo: '#0F5CD4',
    Icon: IconWorkflow,
  },
  {
    id: 'data-entry',
    title: 'Data Entry & Processing',
    description:
      "The copy-paste, re-typing, and reconciliation that eats your team's day — handled automatically, faster, and without typos.",
    gradFrom: '#2563EB',
    gradTo: '#6366F1',
    Icon: IconDataEntry,
  },
  {
    id: 'reports',
    title: 'Reports & Dashboards',
    description:
      'Live numbers instead of month-end scrambles. Invoices, ledgers, and KPIs built for you, automatically.',
    gradFrom: '#4F46E5',
    gradTo: '#6366F1',
    Icon: IconReports,
  },
  {
    id: 'connected',
    title: 'Connected Systems',
    description:
      'Your apps, spreadsheets, and accounts linked into one flow, so data moves on its own — not by hand.',
    gradFrom: '#1877F2',
    gradTo: '#22D3EE',
    Icon: IconConnected,
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description:
      'Scattered data turned into clear answers: trends, forecasts, and the metrics that actually drive decisions.',
    gradFrom: '#6366F1',
    gradTo: '#8B5CF6',
    Icon: IconBI,
  },
  {
    id: 'custom-software',
    title: 'Custom Business Software',
    description:
      "When off-the-shelf can't do it, we build the exact internal tool your operation needs — and we build it fast.",
    gradFrom: '#2563EB',
    gradTo: '#1877F2',
    Icon: IconCustomSoftware,
  },
  {
    id: 'website',
    title: 'Website Development',
    description:
      'Fast, modern, on-brand websites that load instantly and turn visitors into customers.',
    gradFrom: '#0EA5E9',
    gradTo: '#1877F2',
    Icon: IconWebsite,
  },
  {
    id: 'saas',
    title: 'Custom SaaS',
    description:
      'Got a product idea? We design and build the full SaaS platform — accounts, billing, dashboards, and all.',
    gradFrom: '#1877F2',
    gradTo: '#4F46E5',
    Icon: IconSaaS,
  },
  {
    id: 'ios',
    title: 'iOS App Development',
    description:
      'Native iPhone apps designed, built, and shipped to the App Store — polished, fast, and store-ready.',
    gradFrom: '#0F5CD4',
    gradTo: '#22D3EE',
    Icon: IconiOS,
  },
  {
    id: 'accurate',
    title: 'Accurate by Design',
    description:
      'Validation and checks baked into every build, so the output you get is the output you can trust — every single run.',
    gradFrom: '#1877F2',
    gradTo: '#6366F1',
    Icon: IconAccurate,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   CARD
   glass-card with 30px padding, icon tile on top, title + description.
   Hover lift via whileHover spring. Reduced-motion suppresses transform.
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const { Icon } = item

  return (
    <motion.article
      custom={index}
      variants={CARD_ENTRANCE}
      className="glass-card cap-card"
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
      tabIndex={0}
      aria-label={`${item.title}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        padding: '30px 28px 28px',
        outline: 'none',
        cursor: 'default',
      }}
    >
      {/* Blue top-rule: scaleX 0 → 1 on hover via .glass-topline CSS */}
      <span className="glass-topline" aria-hidden="true" />

      {/* Icon tile */}
      <div style={{ marginBottom: '20px' }}>
        <IconTile gradFrom={item.gradFrom} gradTo={item.gradTo}>
          <Icon />
        </IconTile>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 600,
          fontSize: '18px',
          color: 'var(--ink)',
          margin: '0 0 10px',
          letterSpacing: 'var(--track-h3)',
          lineHeight: 1.25,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {item.title}
      </h3>

      {/* Hairline divider */}
      <div
        aria-hidden="true"
        style={{
          height: '1px',
          background: 'var(--rule)',
          marginBottom: '12px',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '14.5px',
          color: 'var(--ink-soft)',
          lineHeight: 1.62,
          margin: 0,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {item.description}
      </p>
    </motion.article>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   ROOT
   glass-stage backdrop, 3-col desktop → 2-col tablet → 1-col mobile.
   ────────────────────────────────────────────────────────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="automate"
      aria-label="What Verdorian does — capabilities"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '96px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Focus ring */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* 3-col desktop → 2-col tablet → 1-col mobile */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        @media (max-width: 979px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 639px) {
          .cap-grid { grid-template-columns: 1fr; gap: 14px; }
          .cap-container { padding-left: 16px !important; padding-right: 16px !important; }
        }
        @media (max-width: 390px) {
          .cap-card { padding: 22px 18px 20px !important; }
        }

        /* Reduced motion — suppress hover lift */
        @media (prefers-reduced-motion: reduce) {
          .cap-card {
            transform: none !important;
            transition: border-color 0.01ms, box-shadow 0.01ms !important;
          }
          .cap-card .glass-topline {
            transition: none !important;
          }
        }
      `}</style>

      <div
        className="cap-container"
        style={{ maxWidth: '1240px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Section heading */}
          <motion.div variants={FADE_UP}>
            <SectionHeading
              numeral="01"
              eyebrow="WHAT WE DO"
              lead="We turn repetitive work into"
              accent="software that runs itself."
              align="left"
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '16px',
                color: 'var(--ink-soft)',
                lineHeight: 1.62,
                marginTop: '20px',
                maxWidth: '60ch',
              }}
            >
              Every business runs on small tasks that eat hours and invite mistakes. We find them,
              automate them, and build the custom software your team actually needs — shaped to how
              you already work.
            </p>
          </motion.div>

          {/* 10-card grid */}
          <motion.div
            className="cap-grid"
            variants={STAGGER_CONTAINER}
          >
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>

          {/* Compact extras line */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '13px',
              color: 'var(--ink-faint)',
              lineHeight: 1.65,
              margin: '-32px 0 0',
              maxWidth: '72ch',
            }}
          >
            <strong style={{ color: 'var(--ink-soft)', fontWeight: 600 }}>Also available:</strong>{' '}
            CRM automation, customer support workflows, and personal AI systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
