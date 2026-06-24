'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

/* ─── Pain catalogue ─────────────────────────────────────────────────── */

const PAIN_CARDS: { label: string }[] = [
  { label: 'Copy-pasting data between apps' },
  { label: 'Chasing approvals and updates' },
  { label: 'Replying to the same questions' },
  { label: 'Building reports by hand' },
  { label: 'Searching emails and documents' },
  { label: 'Updating spreadsheets and CRMs' },
  { label: 'Forgetting follow-ups' },
  { label: 'Repeating admin work every week' },
]

/* ─── Repeat-cycle SVG indicator ─────────────────────────────────────── */

interface RepeatIconProps {
  animated: boolean
}

function RepeatIcon({ animated }: RepeatIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        animation: animated ? 'pain-spin 3.2s linear infinite' : 'none',
        transformOrigin: 'center',
      }}
    >
      {/* Top-right arc arrow */}
      <path
        d="M13.5 3.75A6.75 6.75 0 0 1 15.75 9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M13.5 3.75l1.8-.9-.9 1.8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom-left arc arrow */}
      <path
        d="M4.5 14.25A6.75 6.75 0 0 1 2.25 9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M4.5 14.25l-1.8.9.9-1.8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── Individual pain card ───────────────────────────────────────────── */

interface PainCardProps {
  label: string
  index: number
}

function PainCard({ label, index }: PainCardProps) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      variants={FADE_UP}
      custom={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '20px 22px',
        background: 'rgba(255,255,255,0.52)',
        border: '1px solid var(--rule-strong)',
        borderRadius: '6px',
        boxShadow: hovered
          ? '0 4px 20px rgba(19,22,27,0.07), 0 1px 4px rgba(19,22,27,0.05)'
          : '0 1px 3px rgba(19,22,27,0.04)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 0.26s ease, transform 0.26s ease, background 0.26s ease',
        cursor: 'default',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      aria-label={label}
    >
      {/* Repeat indicator */}
      <span
        style={{
          marginTop: '2px',
          color: hovered ? 'var(--gold)' : 'var(--ink-soft)',
          transition: 'color 0.26s ease',
          lineHeight: 1,
        }}
      >
        <RepeatIcon animated={hovered} />
      </span>

      {/* Pain text */}
      <span
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '14.5px',
          fontWeight: 450,
          color: hovered ? 'var(--ink)' : 'var(--ink-soft)',
          lineHeight: 1.5,
          letterSpacing: '0.01em',
          transition: 'color 0.26s ease',
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

/* ─── Section ────────────────────────────────────────────────────────── */

export default function PainSection() {
  return (
    <section
      id="problem"
      aria-label="Where your team loses time"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '96px',
        paddingBottom: '96px',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Scoped responsive styles + keyframes */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .pain-card-repeat { animation: none !important; }
        }

        @keyframes pain-spin {
          0%   { transform: rotate(0deg);   opacity: 0.7; }
          45%  { transform: rotate(160deg); opacity: 1;   }
          50%  { transform: rotate(160deg); opacity: 1;   }
          95%  { transform: rotate(360deg); opacity: 0.7; }
          100% { transform: rotate(360deg); opacity: 0.7; }
        }

        .pain-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        @media (max-width: 900px) {
          .pain-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (max-width: 520px) {
          .pain-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .pain-section-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .pain-section-wrap {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>

      {/* Subtle faint ambient — very low opacity so it reads as paper, not glass */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(24,119,242,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="pain-section-inner"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1060px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* ── Heading block ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'center',
            }}
          >
            <SectionHeading
              eyebrow="WHERE TIME GOES"
              lead="Your business is leaking time"
              accent="in small tasks every day."
              align="center"
            />

            <motion.p
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '17px',
                color: 'var(--ink-soft)',
                lineHeight: 1.72,
                margin: 0,
                maxWidth: '62ch',
              }}
            >
              Most teams do not lose time in one big place. They lose it through repeated
              emails, spreadsheet updates, reports, approvals, follow-ups, and manual data
              entry.
            </motion.p>
          </div>

          {/* ── Pain cards grid ── */}
          <motion.div
            variants={FADE_UP}
            className="pain-grid"
            style={{ width: '100%' }}
          >
            {PAIN_CARDS.map((card, i) => (
              <PainCard key={card.label} label={card.label} index={i} />
            ))}
          </motion.div>

          {/* ── Quiet closing line ── */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '13.5px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            None of these tasks require a person. They require a system.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
