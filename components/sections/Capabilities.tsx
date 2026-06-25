'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   ICON TILE — animated wrapper + inner tile
   The motion wrapper owns: sheen sweep (always-on, staggered per card) +
   gentle float/breathing + hover scale/brighten + glyph micro-rotate.
   Reduced-motion: all transform/filter animations disabled via CSS.
   ────────────────────────────────────────────────────────────────────────── */

interface IconTileProps {
  gradFrom: string
  gradTo: string
  cardIndex: number
  children: React.ReactNode
}

function IconTile({ gradFrom, gradTo, cardIndex, children }: IconTileProps) {
  // Stagger sheen so cards don&apos;t all sweep at once: each card offset by 0.8s
  const sheenDelay = cardIndex * 0.8

  return (
    <motion.div
      aria-hidden="true"
      className="icon-tile"
      whileHover={{ scale: 1.08, filter: 'brightness(1.18)' }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      style={
        {
          width: '54px',
          height: '54px',
          borderRadius: '14px',
          flexShrink: 0,
          position: 'relative',
          background: `linear-gradient(140deg, ${gradFrom} 0%, ${gradTo} 100%)`,
          border: '1px solid rgba(255,255,255,0.58)',
          boxShadow:
            '0 1px 0 0 rgba(255,255,255,0.48) inset, 0 4px 14px rgba(24,119,242,0.28), 0 1px 3px rgba(24,119,242,0.16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '--sheen-delay': `${sheenDelay}s`,
        } as React.CSSProperties
      }
    >
      {/* Static inner diagonal sheen */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '14px',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.24) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      {/* Animated sheen sweep — CSS keyframe, staggered via custom property */}
      <span className="tile-sheen" aria-hidden="true" />
      {/* Glyph — motion.span for micro-rotate on parent hover */}
      <motion.span
        style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        whileHover={{ rotate: 6 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.span>
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   SVG GLYPHS — stroke-only, 24×24, no fill clutter.
   ────────────────────────────────────────────────────────────────────────── */

const ICON_STROKE = 'rgba(255,255,255,0.95)'
const SW = '1.6'

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
   DATA — 9 capability cards (iOS App Development removed)
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
    description: 'Approvals, hand-offs, and reminders that run themselves — no chasing.',
    gradFrom: '#1877F2',
    gradTo: '#0F5CD4',
    Icon: IconWorkflow,
  },
  {
    id: 'data-entry',
    title: 'Data Entry & Processing',
    description: 'Copy-paste and re-typing, done automatically — faster, with no typos.',
    gradFrom: '#2563EB',
    gradTo: '#6366F1',
    Icon: IconDataEntry,
  },
  {
    id: 'reports',
    title: 'Reports & Dashboards',
    description: 'Live numbers, invoices, and KPIs, built for you automatically.',
    gradFrom: '#4F46E5',
    gradTo: '#6366F1',
    Icon: IconReports,
  },
  {
    id: 'connected',
    title: 'Connected Systems',
    description: 'Your apps and spreadsheets linked, so data moves on its own.',
    gradFrom: '#1877F2',
    gradTo: '#22D3EE',
    Icon: IconConnected,
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description: 'Messy data turned into clear trends, forecasts, and answers.',
    gradFrom: '#6366F1',
    gradTo: '#8B5CF6',
    Icon: IconBI,
  },
  {
    id: 'custom-software',
    title: 'Custom Business Software',
    description: 'The exact internal tool your team needs — built fast.',
    gradFrom: '#2563EB',
    gradTo: '#1877F2',
    Icon: IconCustomSoftware,
  },
  {
    id: 'website',
    title: 'Website Development',
    description: 'Fast, modern websites that turn visitors into customers.',
    gradFrom: '#0EA5E9',
    gradTo: '#1877F2',
    Icon: IconWebsite,
  },
  {
    id: 'saas',
    title: 'Custom SaaS',
    description: 'Your product idea, built into a full SaaS platform.',
    gradFrom: '#1877F2',
    gradTo: '#4F46E5',
    Icon: IconSaaS,
  },
  {
    id: 'accurate',
    title: 'Accurate by Design',
    description: 'Checks built into every step, so you can trust the output.',
    gradFrom: '#1877F2',
    gradTo: '#6366F1',
    Icon: IconAccurate,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   CARD — iOS-26 liquid glass transparency + hover lift + shimmer
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const { Icon } = item
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      custom={index}
      variants={CARD_ENTRANCE}
      className="cap-card"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              transition: { type: 'spring', stiffness: 280, damping: 22 },
            }
      }
      tabIndex={0}
      aria-label={item.title}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        padding: '30px 28px 28px',
        outline: 'none',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blue top-rule: scaleX 0 → 1 on hover via CSS */}
      <span className="glass-topline" aria-hidden="true" />

      {/* Card hover shimmer sweep */}
      <span className="card-shimmer" aria-hidden="true" />

      {/* Icon tile */}
      <div style={{ marginBottom: '20px' }}>
        <IconTile gradFrom={item.gradFrom} gradTo={item.gradTo} cardIndex={index}>
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
   ROOT — glass-stage backdrop, 3×3 desktop → 2-col tablet → 1-col mobile
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
        /* ── Focus ring ── */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* ── CARD: iOS-26 liquid glass transparency ── */
        .cap-card {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.36);
          backdrop-filter: blur(28px) saturate(1.65);
          -webkit-backdrop-filter: blur(28px) saturate(1.65);
          border: 1px solid rgba(255, 255, 255, 0.58);
          box-shadow:
            0 2px 0 0 rgba(255, 255, 255, 0.52) inset,
            0 8px 32px rgba(24, 119, 242, 0.12),
            0 2px 8px rgba(99, 102, 241, 0.10),
            0 1px 2px rgba(0, 0, 0, 0.06);
          transition:
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        /* Fallback for browsers without backdrop-filter */
        @supports not (backdrop-filter: blur(1px)) {
          .cap-card {
            background: rgba(242, 245, 250, 0.94);
          }
        }

        /* Hover: stronger blue glow */
        .cap-card:hover {
          box-shadow:
            0 2px 0 0 rgba(255, 255, 255, 0.60) inset,
            0 12px 40px rgba(24, 119, 242, 0.22),
            0 4px 16px rgba(99, 102, 241, 0.16),
            0 1px 3px rgba(0, 0, 0, 0.08);
          border-color: rgba(255, 255, 255, 0.72);
        }

        /* ── Card hover shimmer sweep ── */
        .card-shimmer {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255, 255, 255, 0.18) 50%,
            transparent 80%
          );
          transform: translateX(-110%);
          transition: none;
          pointer-events: none;
          will-change: transform;
        }
        .cap-card:hover .card-shimmer {
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          transform: translateX(110%);
        }

        /* ── Blue top-rule ── */
        .glass-topline {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          border-radius: 0 0 2px 2px;
          background: linear-gradient(90deg, transparent, var(--gold, #1877F2), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cap-card:hover .glass-topline {
          transform: scaleX(1);
        }

        /* ── Icon tile float / breathing — always-on ── */
        @keyframes tileFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }

        /* ── Sheen sweep across icon tile — staggered per card ── */
        @keyframes tileSheen {
          0%   { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(230%) skewX(-18deg); opacity: 0; }
        }

        .tile-sheen {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.42),
            transparent
          );
          /* Fire once every 8s, staggered by --sheen-delay */
          animation: tileSheen 1.1s cubic-bezier(0.22, 1, 0.36, 1) var(--sheen-delay, 0s) infinite;
          animation-delay: var(--sheen-delay, 0s);
          pointer-events: none;
          will-change: transform;
        }

        .icon-tile {
          animation: tileFloat 4s ease-in-out infinite;
          will-change: transform;
        }

        /* Pause float on hover so Framer scale doesn't fight CSS */
        .cap-card:hover .icon-tile {
          animation-play-state: paused;
        }

        /* ── Grid ── */
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

        /* ── Reduced motion: suppress ALL transforms/animations ── */
        @media (prefers-reduced-motion: reduce) {
          .icon-tile {
            animation: none !important;
          }
          .tile-sheen {
            animation: none !important;
          }
          .card-shimmer {
            display: none !important;
          }
          .cap-card,
          .cap-card:hover {
            transform: none !important;
            transition: border-color 0.01ms, box-shadow 0.01ms !important;
          }
          .glass-topline {
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
          {/* Section heading — unchanged */}
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

          {/* 9-card grid — clean 3×3 on desktop */}
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
