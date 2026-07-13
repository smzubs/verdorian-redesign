'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   ICON TILE
   Animated wrapper: slow organic float (no snap). Hover: spring scale +
   brightness via Framer. No sweeps or flashes — everything is slow drift.
   ────────────────────────────────────────────────────────────────────────── */

interface IconTileProps {
  gradFrom: string
  gradTo: string
  cardIndex: number
  children: React.ReactNode
}

function IconTile({ gradFrom, gradTo, cardIndex, children }: IconTileProps) {
  // Each tile floats at a slightly different phase so they feel independent
  const floatDelay = (cardIndex * 0.9).toFixed(1)

  return (
    <motion.div
      aria-hidden="true"
      className="icon-tile"
      whileHover={{ scale: 1.07, filter: 'brightness(1.15)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      style={
        {
          width: '54px',
          height: '54px',
          borderRadius: '14px',
          flexShrink: 0,
          position: 'relative',
          background: `linear-gradient(140deg, ${gradFrom} 0%, ${gradTo} 100%)`,
          border: '1px solid rgba(255,255,255,0.62)',
          boxShadow:
            '0 1px 0 0 rgba(255,255,255,0.52) inset, 0 0 0 1px rgba(255,255,255,0.14) inset, 0 4px 16px rgba(24,119,242,0.30), 0 1px 4px rgba(24,119,242,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '--float-delay': `${floatDelay}s`,
        } as React.CSSProperties
      }
    >
      {/* Static diagonal inner sheen — corner specular, always visible */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '14px',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, transparent 52%)',
          pointerEvents: 'none',
        }}
      />
      {/* Glyph wrapper — subtle micro-rotate on card hover via Framer */}
      <motion.span
        style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        whileHover={{ rotate: 5 }}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
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

function IconBI() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 16.5a7.5 7.5 0 0115 0" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M12 5.5V7.5" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M6.2 8.2l1.4 1.4" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M17.8 8.2l-1.4 1.4" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M12 16.5l3.4-4.2" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1.3" fill={ICON_STROKE} />
      <path d="M5 20h14" stroke={ICON_STROKE} strokeWidth={SW} strokeLinecap="round" />
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

/* ──────────────────────────────────────────────────────────────────────────
   DATA — 6 service cards
   ────────────────────────────────────────────────────────────────────────── */

interface CapabilityItem {
  id: string
  num: string
  title: string
  description: string
  payoff: string
  gradFrom: string
  gradTo: string
  Icon: React.FC
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'website',
    num: '01',
    title: 'Website Development',
    description:
      'A fast, modern website that makes your business look as good as it is — designed, built, and launched for you.',
    payoff: 'Look premium. Load fast. Win work.',
    gradFrom: '#1877F2',
    gradTo: '#22D3EE',
    Icon: IconWebsite,
  },
  {
    id: 'bi',
    num: '02',
    title: 'Business Intelligence',
    description:
      'Your sales, costs, and jobs pulled into one live picture of the business — so decisions stop being guesses.',
    payoff: 'See your whole business at a glance.',
    gradFrom: '#6366F1',
    gradTo: '#8B5CF6',
    Icon: IconBI,
  },
  {
    id: 'data-analysis',
    num: '03',
    title: 'Data Analysis & Visualization',
    description:
      'We take the data you already have and turn it into clear charts and plain answers — what’s working, what isn’t, and what to do next.',
    payoff: 'Answers, not spreadsheets.',
    gradFrom: '#4F46E5',
    gradTo: '#6366F1',
    Icon: IconReports,
  },
  {
    id: 'custom-software',
    num: '04',
    title: 'Custom Software & SaaS',
    description:
      'The exact tool your business needs — or the product you want to launch — built from the ground up, and it’s yours.',
    payoff: 'Built around how you work.',
    gradFrom: '#2563EB',
    gradTo: '#1877F2',
    Icon: IconSaaS,
  },
  {
    id: 'workflow',
    num: '05',
    title: 'Workflow Automation',
    description:
      'Approvals, hand-offs, notifications and routine multi-step processes — wired together so they run end-to-end without anyone chasing them.',
    payoff: 'Nobody has to chase anything.',
    gradFrom: '#1877F2',
    gradTo: '#0F5CD4',
    Icon: IconWorkflow,
  },
  {
    id: 'data-entry',
    num: '06',
    title: 'Data Entry & Processing',
    description:
      'The copy-paste, re-typing and reconciliation work that burns your team’s day — replaced by automation that’s faster and never mistypes.',
    payoff: 'Faster than typing. Never mistypes.',
    gradFrom: '#2563EB',
    gradTo: '#6366F1',
    Icon: IconDataEntry,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   CARD — iOS-26 "water glass" + slow organic ambient drift
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const { Icon } = item
  const prefersReducedMotion = useReducedMotion()

  // Stagger caustic drift phase so each card is at a different point in the loop
  const causticDelay = `-${(index * 2.1).toFixed(1)}s`
  const specularDelay = `-${(index * 1.4).toFixed(1)}s`

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
              transition: { type: 'spring', stiffness: 260, damping: 24 },
            }
      }
      tabIndex={0}
      aria-label={item.title}
      style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          padding: '30px 28px 28px',
          outline: 'none',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
          '--caustic-delay': causticDelay,
          '--specular-delay': specularDelay,
        } as React.CSSProperties
      }
    >
      {/* Blue top-rule: scaleX 0 → 1 on hover via CSS */}
      <span className="glass-topline" aria-hidden="true" />

      {/* Caustic light blob — slow radial-gradient drift, like light through water */}
      <span className="cap-caustic" aria-hidden="true" />

      {/* Top-edge breathing specular — opacity + slight vertical drift */}
      <span className="cap-specular" aria-hidden="true" />

      {/* Engraved index numeral — faint editorial marker, top-right */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '22px',
          right: '26px',
          fontFamily: 'var(--font-display), serif',
          fontWeight: 300,
          fontSize: '38px',
          lineHeight: 1,
          letterSpacing: '0.02em',
          color: 'rgba(19, 22, 27, 0.10)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {item.num}
      </span>

      {/* Icon tile */}
      <div style={{ marginBottom: '20px' }}>
        <IconTile gradFrom={item.gradFrom} gradTo={item.gradTo} cardIndex={index}>
          <Icon />
        </IconTile>
      </div>

      {/* Faint inner text-scrim so copy stays readable over caustic blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '72%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(232,239,252,0.18) 100%)',
          pointerEvents: 'none',
          borderRadius: '0 0 24px 24px',
        }}
      />

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
          position: 'relative',
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
          position: 'relative',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '15px',
          color: 'var(--ink-soft)',
          lineHeight: 1.62,
          margin: 0,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
          position: 'relative',
        }}
      >
        {item.description}
      </p>

      {/* Payoff punchline — pinned to the card's bottom edge so all six align */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '13px',
          fontWeight: 650,
          color: 'var(--gold)',
          lineHeight: 1.4,
          letterSpacing: '0.01em',
          margin: 'auto 0 0',
          paddingTop: '18px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: '14px',
            height: '1.5px',
            borderRadius: '1px',
            background: 'currentColor',
            opacity: 0.7,
            flexShrink: 0,
          }}
        />
        {item.payoff}
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
      aria-label="What We Do"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* ── Focus ring ── */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* ── CARD: iOS-26 water-glass surface ── */
        /* More translucent fill, stronger blur, rounder, layered inset light */
        .cap-card {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.30);
          backdrop-filter: blur(32px) saturate(1.80) brightness(1.04);
          -webkit-backdrop-filter: blur(32px) saturate(1.80) brightness(1.04);
          border: 1px solid rgba(255, 255, 255, 0.62);
          box-shadow:
            /* curved top-edge specular — mimics a glass lens rim */
            0 2px 0 0 rgba(255, 255, 255, 0.58) inset,
            /* inner side-light refraction */
            -1px 0 0 0 rgba(255, 255, 255, 0.22) inset,
            1px 0 0 0 rgba(255, 255, 255, 0.14) inset,
            /* outer blue-tinted glow from the glass-stage behind */
            0 8px 36px rgba(24, 119, 242, 0.14),
            0 2px 10px rgba(99, 102, 241, 0.10),
            0 1px 2px rgba(0, 0, 0, 0.05);
          transition:
            box-shadow 0.5s ease,
            border-color 0.5s ease;
        }

        /* Fallback: no backdrop-filter support */
        @supports not (backdrop-filter: blur(1px)) {
          .cap-card {
            background: rgba(235, 241, 252, 0.96);
          }
        }

        /* Hover: caustic pools a touch brighter, border luminance up */
        .cap-card:hover {
          box-shadow:
            0 2px 0 0 rgba(255, 255, 255, 0.68) inset,
            -1px 0 0 0 rgba(255, 255, 255, 0.26) inset,
            1px 0 0 0 rgba(255, 255, 255, 0.18) inset,
            0 14px 48px rgba(24, 119, 242, 0.24),
            0 4px 18px rgba(99, 102, 241, 0.16),
            0 1px 3px rgba(0, 0, 0, 0.07);
          border-color: rgba(255, 255, 255, 0.78);
        }

        /* ── Blue top-rule ── */
        .glass-topline {
          position: absolute;
          top: 0;
          left: 12%;
          right: 12%;
          height: 2px;
          border-radius: 0 0 2px 2px;
          background: linear-gradient(90deg, transparent, var(--gold, #1877F2), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cap-card:hover .glass-topline {
          transform: scaleX(1);
        }

        /* ── CAUSTIC LIGHT BLOB
           A soft, large radial gradient in blue/cyan/indigo that drifts very
           slowly around the card interior — like sunlight rippling under water.
           Opacity ~0.08–0.11, huge blur via filter, 15–20s ease-in-out loop.
           Each card gets a negative delay so they start mid-animation (all different).
        ── */
        @keyframes causticDrift {
          0%   { transform: translate(-18%, -22%) scale(1.0);    opacity: 0.08; }
          25%  { transform: translate(12%, -8%)  scale(1.12);   opacity: 0.11; }
          50%  { transform: translate(20%, 18%)  scale(0.94);   opacity: 0.07; }
          75%  { transform: translate(-8%, 24%)  scale(1.08);   opacity: 0.10; }
          100% { transform: translate(-18%, -22%) scale(1.0);   opacity: 0.08; }
        }

        .cap-caustic {
          position: absolute;
          top: -30%;
          left: -20%;
          width: 140%;
          height: 140%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse 68% 58% at 50% 50%,
            rgba(24, 119, 242, 0.22) 0%,
            rgba(99, 102, 241, 0.14) 40%,
            rgba(34, 211, 238, 0.06) 70%,
            transparent 100%
          );
          filter: blur(28px);
          animation: causticDrift 18s ease-in-out infinite;
          animation-delay: var(--caustic-delay, 0s);
          pointer-events: none;
          will-change: transform, opacity;
        }

        /* ── SPECULAR HIGHLIGHT
           A thin luminous arc along the top edge of the card that slowly
           breathes in opacity and drifts 4px vertically — like a light seam
           through frosted water-glass. 10–14s, very subtle.
        ── */
        @keyframes specularBreathe {
          0%   { opacity: 0.55; transform: translateY(0px)   scaleX(0.82); }
          40%  { opacity: 0.80; transform: translateY(1.5px) scaleX(0.94); }
          70%  { opacity: 0.62; transform: translateY(3px)   scaleX(0.88); }
          100% { opacity: 0.55; transform: translateY(0px)   scaleX(0.82); }
        }

        .cap-specular {
          position: absolute;
          top: 1px;
          left: 15%;
          right: 15%;
          height: 3px;
          border-radius: 0 0 100% 100% / 0 0 6px 6px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.72) 35%,
            rgba(255, 255, 255, 0.90) 50%,
            rgba(255, 255, 255, 0.72) 65%,
            transparent 100%
          );
          filter: blur(0.8px);
          animation: specularBreathe 12s ease-in-out infinite;
          animation-delay: var(--specular-delay, 0s);
          pointer-events: none;
          will-change: opacity, transform;
        }

        /* ── ICON TILE: slow buttery float (no snap) ── */
        @keyframes tileFloat {
          0%   { transform: translateY(0px);    }
          30%  { transform: translateY(-2.5px); }
          65%  { transform: translateY(1px);    }
          100% { transform: translateY(0px);    }
        }

        .icon-tile {
          animation: tileFloat 7s ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
          will-change: transform;
        }

        /* Pause float on hover — Framer spring takes over cleanly */
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

        /* ── Reduced motion: freeze all drift to a calm static state ── */
        @media (prefers-reduced-motion: reduce) {
          .icon-tile {
            animation: none !important;
          }
          .cap-caustic {
            animation: none !important;
            /* Leave the blob in a neutral position as a soft static accent */
            transform: translate(0%, 0%) scale(1.0);
            opacity: 0.07;
          }
          .cap-specular {
            animation: none !important;
            opacity: 0.60;
            transform: translateY(0) scaleX(0.88);
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
              eyebrow="WHAT WE DO"
              lead="We turn repetitive work into"
              accent="software your team barely has to think about."
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
              Six things we build, in plain words — from the website that wins you the customer
              to the automation that quietly runs the busywork behind it. All of it shaped
              around how you already work.
            </p>
          </motion.div>

          {/* 6-card grid — clean 3×2 on desktop */}
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
            iOS apps, CRM and customer-support automation, and personal ai systems — if you have
            a product idea of your own, we build that too.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
