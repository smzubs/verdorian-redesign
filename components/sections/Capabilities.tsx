'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   MARK FAMILY — ink + blue-gold, 40×40 viewBox, stroke 1.4px, round caps/joins.
   7 marks selected; all share the same ink/gold accent variables.
   ────────────────────────────────────────────────────────────────────────── */

interface MarkProps { active: boolean }
const SW = 1.4

function mkBase(active: boolean) {
  return {
    width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none' as const,
    'aria-hidden': true,
    style: {
      flexShrink: 0,
      transition: 'opacity 0.4s var(--ease-glass)',
      opacity: active ? 1 : 0.88,
    },
  }
}

const ink  = (a: boolean) => a ? 'var(--ink)'         : 'var(--ink-soft)'
const gold = (a: boolean) => a ? 'var(--gold-bright)'  : 'var(--gold)'

/* 01 — Workflow & Data Automation
   Central trunk forks into three branches, each sealed with a gold node. */
function MarkWorkflow({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <path d="M4 20h9" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M13 20 Q17 20 20 10" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 20h11"            stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M13 20 Q17 20 20 30"  stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="10" r="3"  stroke={gold(active)} strokeWidth={SW} />
      <circle cx="24" cy="20" r="3"  stroke={gold(active)} strokeWidth={SW} />
      <circle cx="24" cy="30" r="3"  stroke={gold(active)} strokeWidth={SW} />
      <path d="M27 10h7M27 20h7M27 30h7" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

/* 02 — ai Documents & Voice
   Mic capsule (ink) → directional bridge → gold filed lines. */
function MarkVoice({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <rect x="8" y="5" width="8" height="14" rx="4" stroke={ink(active)} strokeWidth={SW} />
      <path d="M4 17a8 8 0 0 0 16 0" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
      <path d="M12 25v5M9 30h6"       stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M21 19h4l-2-2m2 2-2 2" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 13h8M27 19h8M27 25h6" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

/* 03 — Business Intelligence
   Faceted gem (ink outline) with a gold insight ray bursting from the centre —
   "clarity from many angles." Distinct from the bar-chart MarkDashboard. */
function MarkBI({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* gem silhouette — hexagonal cross-section */}
      <path
        d="M20 5 L32 13 L32 27 L20 35 L8 27 L8 13 Z"
        stroke={ink(active)} strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* internal facet lines */}
      <path d="M8 13 L20 20 L32 13"  stroke={ink(active)} strokeWidth={SW * 0.7} strokeLinejoin="round" />
      <path d="M8 27 L20 20 L32 27"  stroke={ink(active)} strokeWidth={SW * 0.7} strokeLinejoin="round" />
      <path d="M20 5 L20 20"          stroke={ink(active)} strokeWidth={SW * 0.7} strokeLinecap="round" />
      <path d="M20 20 L20 35"         stroke={ink(active)} strokeWidth={SW * 0.7} strokeLinecap="round" />
      {/* gold insight ray — top-right burst */}
      <path d="M27 6 L34 2M31 10 L37 8M34 16 L38 13"
        stroke={gold(active)} strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  )
}

/* 04 — Dashboards & Analytics
   Three vertical bars + gold trend-line threading through them. */
function MarkDashboard({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <path d="M5 34h30" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <rect x="7"  y="24" width="5" height="10" stroke={ink(active)} strokeWidth={SW} />
      <rect x="17" y="17" width="5" height="17" stroke={ink(active)} strokeWidth={SW} />
      <rect x="27" y="10" width="5" height="24" stroke={ink(active)} strokeWidth={SW} />
      <path d="M7 26l12-8 10-5"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 11l4-1-1 4"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* 05 — Web Platforms & SaaS
   Browser frame + gold live-starburst dot. */
function MarkWeb({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <rect x="4" y="7" width="32" height="26" rx="2.5" stroke={ink(active)} strokeWidth={SW} />
      <path d="M4 14h32" stroke={ink(active)} strokeWidth={SW} />
      <circle cx="9"  cy="10.5" r="1.2" fill={ink(active)} />
      <circle cx="13" cy="10.5" r="1.2" fill={ink(active)} />
      <circle cx="17" cy="10.5" r="1.2" fill={ink(active)} />
      <path d="M30 10.5v-2M30 10.5v2M30 10.5h-2M30 10.5h2M28.6 9.1l1.4 1.4M31.4 9.1l-1.4 1.4"
        stroke={gold(active)} strokeWidth={SW * 0.9} strokeLinecap="round" />
    </svg>
  )
}

/* 06 — Mobile & QR Apps
   Device silhouette + gold signal arcs. */
function MarkMobile({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <rect x="11" y="4" width="18" height="32" rx="4" stroke={ink(active)} strokeWidth={SW} />
      <circle cx="20" cy="8.5" r="1.2" fill={ink(active)} />
      <path d="M17 33h6" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M16 13a5 5 0 0 1 8 0"  stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
      <path d="M18 16a2.5 2.5 0 0 1 4 0" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* 07 — Book Translation & Publishing
   Open book with spine + gold bookmark ribbon. */
function MarkBook({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      <path d="M20 10 C14 8 8 9 6 11v19c2-2 8-3 14-1"
        stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10 C26 8 32 9 34 11v19c-2-2-8-3-14-1"
        stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v19" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M9 17h8M9 21h8" stroke={ink(active)} strokeWidth={SW * 0.8} strokeLinecap="round" />
      <path d="M23 17h8M23 21h8" stroke={ink(active)} strokeWidth={SW * 0.8} strokeLinecap="round" />
      <path d="M28 7v12l-2-2-2 2V7" stroke={gold(active)} strokeWidth={SW} strokeLinejoin="round" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   DATA — 7 services, ordered: automation-first, then outputs, then publishing
   ────────────────────────────────────────────────────────────────────────── */

interface ServiceCard {
  numeral: string
  name: string
  benefit: string
  proof: string
  Mark: React.FC<MarkProps>
}

const SERVICES: ServiceCard[] = [
  {
    numeral: '01',
    name: 'Workflow & Data Automation',
    benefit: 'Connect your tools so the repetitive work runs itself.',
    proof: 'n8n · Zapier · Make + custom frontier-ai agents',
    Mark: MarkWorkflow,
  },
  {
    numeral: '02',
    name: 'ai Documents & Voice',
    benefit: 'Turn your data and spoken notes into finished, filed documents.',
    proof: 'SafeDocs · VoicePencil · ChangeOrderAI',
    Mark: MarkVoice,
  },
  {
    numeral: '03',
    name: 'Business Intelligence',
    benefit: 'Turn scattered data into clear answers and decisions you can act on.',
    proof: 'Next.js + Supabase data stacks · live metrics across our platforms',
    Mark: MarkBI,
  },
  {
    numeral: '04',
    name: 'Dashboards & Analytics',
    benefit: 'Your whole operation in one live view, not a month-end scramble.',
    proof: 'Next.js + Supabase · WithinYou',
    Mark: MarkDashboard,
  },
  {
    numeral: '05',
    name: 'Web Platforms & SaaS',
    benefit: 'The custom software your team logs into and trusts.',
    proof: 'QRSafePro, live at qrsafepro.com',
    Mark: MarkWeb,
  },
  {
    numeral: '06',
    name: 'Mobile & QR Apps',
    benefit: 'Apps and QR tools for the work that happens in the field.',
    proof: 'VoicePencil iOS · QRSafePro / QRStock',
    Mark: MarkMobile,
  },
  {
    numeral: '07',
    name: 'Book Translation & Publishing',
    benefit: 'Premium long-form translation and typesetting, ai at scale with human judgment.',
    proof: 'Scientific Tafsir, 114+114 chapters',
    Mark: MarkBook,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   CARD — frosted glass tile, gold topline draws in on hover, spring lift.
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ card, index }: { card: ServiceCard; index: number }) {
  const [active, setActive] = useState(false)
  const { Mark } = card

  return (
    <motion.article
      custom={index}
      variants={CARD_ENTRANCE}
      className="glass-card cap-card"
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      aria-label={`Service: ${card.name}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 28px 28px',
        outline: 'none',
        cursor: 'default',
      }}
    >
      {/* Gold top-rule: scaleX 0 → 1 on hover via .glass-topline CSS */}
      <span className="glass-topline" aria-hidden="true" />

      {/* Header: mark + engraved numeral */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Mark active={active} />
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '26px',
            lineHeight: 1,
            WebkitTextStroke: '1px var(--gold)',
            color: 'transparent',
            opacity: active ? 0.6 : 0.24,
            transition: 'opacity 0.4s var(--ease-glass)',
            letterSpacing: '0.02em',
          }}
        >
          {card.numeral}
        </span>
      </div>

      {/* Service name */}
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: '20px',
          color: 'var(--ink)',
          margin: '0 0 12px',
          letterSpacing: 'var(--track-h3)',
          lineHeight: 1.18,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {card.name}
      </h3>

      {/* One-line benefit */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '14px',
          color: 'var(--ink-soft)',
          lineHeight: 1.56,
          margin: '0 0 auto',
          paddingBottom: '20px',
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {card.benefit}
      </p>

      {/* Proof tag */}
      <div
        style={{
          paddingTop: '14px',
          borderTop: '1px solid var(--rule-faint)',
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
        }}
      >
        <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '7px', lineHeight: 1.9, flexShrink: 0 }}>
          ◆
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            color: 'var(--ink-faint)',
            lineHeight: 1.48,
            letterSpacing: '0.01em',
            wordWrap: 'break-word',
            overflowWrap: 'anywhere',
          }}
        >
          {card.proof}
        </span>
      </div>
    </motion.article>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   ROOT — glass-stage backdrop, floating 3-col card grid (3→2→1).
   ────────────────────────────────────────────────────────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="What we do — services"
      className="glass-stage"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Focus ring — inset gold */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* Floating card grid — 3 → 2 → 1 */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .cap-container { padding-left: 20px !important; padding-right: 20px !important; }
          .cap-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 390px) {
          .cap-card { padding: 24px 18px 20px !important; }
        }

        /* Reduced motion — suppress spring lift; topline already frozen by globals.css */
        @media (prefers-reduced-motion: reduce) {
          .cap-card {
            transform: none !important;
            transition: border-color 0.01ms, box-shadow 0.01ms !important;
          }
        }
      `}</style>

      <div
        className="cap-container"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
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
              lead="Everything you can hand"
              accent="to software."
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '16px',
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
                marginTop: '20px',
                maxWidth: '52ch',
              }}
            >
              Tell us the repetitive problem; we design the system that automates it.
            </p>
          </motion.div>

          {/* Floating 7-card glass grid */}
          <motion.div
            className="cap-grid"
            variants={STAGGER_CONTAINER}
          >
            {SERVICES.map((card, i) => (
              <CapabilityCard key={card.numeral} card={card} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
