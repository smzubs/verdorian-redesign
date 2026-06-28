'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

// ─── Step data ────────────────────────────────────────────────────────────────

interface Step {
  numeral: string
  title: string
  body: string
  glyph: React.ReactNode
  ariaLabel: string
}

const GlyphAudit = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx="9.5"
      cy="9.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="14.4"
      y1="14.4"
      x2="19.6"
      y2="19.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="7"
      y1="9.5"
      x2="12"
      y2="9.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9.5"
      y1="7"
      x2="9.5"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)

const GlyphBuild = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* Wrench silhouette */}
    <path
      d="M14.5 3.5C12.01 3.5 10 5.51 10 8c0 .55.1 1.07.27 1.56L3.3 16.52a1.25 1.25 0 0 0 1.77 1.77l6.95-6.97c.49.17 1.01.27 1.56.27C16.07 11.59 18 9.57 18 7.08c0-.6-.11-1.17-.3-1.7l-2.4 2.4-1.7-.38-.38-1.7 2.4-2.4A4.55 4.55 0 0 0 14.5 3.5z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GlyphImprove = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* Upward trend line */}
    <polyline
      points="2,16 7,10 12,13 19,5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrow head at peak */}
    <polyline
      points="15,4 19,5 18,9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Refresh arc hint at bottom-left */}
    <path
      d="M3 19a4.5 4.5 0 0 1 0-6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeOpacity="0.45"
    />
  </svg>
)

const STEPS: Step[] = [
  {
    numeral: '01',
    title: 'Audit',
    body: 'We map your workflows and pinpoint the highest-return automation opportunity — no guesswork, no generic playbook.',
    glyph: <GlyphAudit />,
    ariaLabel: 'Step 1: Audit — we identify the best automation opportunity',
  },
  {
    numeral: '02',
    title: 'Build',
    body: 'We build the workflow, dashboard, or internal tool that fits your actual process — not a template.',
    glyph: <GlyphBuild />,
    ariaLabel: 'Step 2: Build — we create the automation around your real process',
  },
  {
    numeral: '03',
    title: 'Improve',
    body: 'We monitor, adjust, and expand the system as your operation evolves.',
    glyph: <GlyphImprove />,
    ariaLabel: 'Step 3: Improve — we refine the system over time',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Verdorian builds your automation system"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* ── Scoped styles ─────────────────────────────────────────── */}
      <style>{`
        /* Connector track — desktop: horizontal line through card mid-points */
        .hiw-connector-track {
          display: none;
        }

        /* Step grid */
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          position: relative;
        }

        /* Mobile vertical connector (left gutter line) */
        .hiw-connector-v {
          display: block;
          position: absolute;
          left: 28px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(24, 119, 242, 0.22) 8%,
            rgba(24, 119, 242, 0.32) 50%,
            rgba(24, 119, 242, 0.22) 92%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* Mobile vertical connector — animated fill */
        @keyframes hiw-line-v-fill {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hiw-connector-v-fill {
            transform-origin: top center;
            animation: hiw-line-v-fill 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
          }
        }

        /* Desktop: 3-column grid, horizontal connector line */
        @media (min-width: 780px) {
          .hiw-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
          .hiw-connector-v {
            display: none;
          }
          .hiw-connector-track {
            display: block;
            position: absolute;
            top: calc(40px + 28px);
            left: calc(16.67% - 0px);
            right: calc(16.67% - 0px);
            height: 1px;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(24, 119, 242, 0.20) 4%,
              rgba(24, 119, 242, 0.36) 50%,
              rgba(24, 119, 242, 0.20) 96%,
              transparent 100%
            );
            pointer-events: none;
            z-index: 0;
          }
          /* Animated fill sweep for horizontal line */
          .hiw-connector-h-fill {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to right,
              var(--gold) 0%,
              var(--gold-bright) 40%,
              var(--gold) 100%
            );
            opacity: 0.5;
            transform-origin: left center;
          }
          @keyframes hiw-line-h-fill {
            from { transform: scaleX(0); opacity: 0; }
            to   { transform: scaleX(1); opacity: 0.5; }
          }
          @media (prefers-reduced-motion: no-preference) {
            .hiw-connector-h-fill {
              animation: hiw-line-h-fill 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
            }
          }
        }

        /* Dot on the connector between cards */
        .hiw-dot {
          display: none;
        }
        @media (min-width: 780px) {
          .hiw-dot {
            display: block;
            position: absolute;
            top: calc(40px + 28px - 4px);
            width: 8px;
            height: 8px;
            border-radius: 9999px;
            border: 1.5px solid var(--gold);
            background: var(--paper-bright);
            z-index: 2;
          }
          .hiw-dot-1 { left: calc(33.33% - 4px); }
          .hiw-dot-2 { left: calc(66.67% - 4px); }
        }

        /* Card glyph chip */
        .hiw-glyph {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(24, 119, 242, 0.08);
          border: 1px solid rgba(24, 119, 242, 0.16);
          color: var(--gold);
          flex-shrink: 0;
          transition:
            background 0.35s var(--ease-prospectus),
            border-color 0.35s var(--ease-prospectus);
        }
        .hiw-step-card:hover .hiw-glyph {
          background: rgba(24, 119, 242, 0.14);
          border-color: rgba(24, 119, 242, 0.30);
        }

        /* Step number label — small caps above numeral */
        .hiw-step-label {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hiw-step-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
          flex-shrink: 0;
        }

        /* Mobile card: nudge content right so it clears the vertical connector line */
        @media (max-width: 779px) {
          .hiw-step-card-inner {
            padding-left: 52px !important;
          }
        }
      `}</style>

      {/* ── Layout shell ──────────────────────────────────────────── */}
      <div
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
          style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}
        >
          {/* ── Section heading ─────────────────────────────────── */}
          <SectionHeading
            numeral="02"
            eyebrow="HOW IT WORKS"
            lead="How it"
            accent="works."
            align="center"
          />

          {/* ── Timeline grid ───────────────────────────────────── */}
          <div
            style={{ position: 'relative' }}
            role="list"
            aria-label="3-step automation process"
          >
            {/* Horizontal connector track (desktop only) */}
            <div className="hiw-connector-track" aria-hidden="true">
              <div className="hiw-connector-h-fill" />
            </div>

            {/* Connector dots at column junctions (desktop only) */}
            <div className="hiw-dot hiw-dot-1" aria-hidden="true" />
            <div className="hiw-dot hiw-dot-2" aria-hidden="true" />

            {/* Grid of cards */}
            <div className="hiw-grid">
              {/* Vertical connector (mobile only) */}
              <div className="hiw-connector-v hiw-connector-v-fill" aria-hidden="true" />

              {STEPS.map((step, i) => (
                <motion.article
                  key={step.numeral}
                  className="glass-card hiw-step-card"
                  role="listitem"
                  aria-label={step.ariaLabel}
                  variants={CARD_ENTRANCE}
                  custom={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Gold draw-in topline */}
                  <span className="glass-topline" aria-hidden="true" />

                  {/* Card inner padding */}
                  <div
                    className="hiw-step-card-inner"
                    style={{
                      padding: 'clamp(28px, 3vw, 40px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '18px',
                    }}
                  >
                    {/* Step label */}
                    <div className="hiw-step-label" aria-hidden="true">
                      STEP {step.numeral}
                    </div>

                    {/* Engraved numeral */}
                    <span
                      className="engraved"
                      aria-hidden="true"
                      style={{
                        fontSize: 'clamp(48px, 7vw, 82px)',
                        lineHeight: 0.82,
                        display: 'block',
                        userSelect: 'none',
                      }}
                    >
                      {step.numeral}
                    </span>

                    {/* Glyph + title row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '10px',
                        paddingTop: '4px',
                      }}
                    >
                      <span className="hiw-glyph" aria-hidden="true">
                        {step.glyph}
                      </span>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display), Georgia, serif',
                          fontWeight: 400,
                          fontSize: 'clamp(24px, 2.8vw, 34px)',
                          letterSpacing: 'var(--track-h2)',
                          color: 'var(--ink)',
                          margin: 0,
                          lineHeight: 1.0,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Hairline divider */}
                    <hr
                      style={{
                        border: 0,
                        borderTop: '1px solid var(--rule)',
                        margin: '2px 0',
                      }}
                    />

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: 'clamp(14.5px, 1.4vw, 15.5px)',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.70,
                        margin: 0,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* ── Footer throughline ──────────────────────────────── */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                height: '1px',
                flex: 1,
                maxWidth: '180px',
                background: 'linear-gradient(to right, transparent, var(--rule-strong))',
              }}
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.24em',
                color: 'var(--ink-faint)',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Start with a free automation audit
            </p>
            <div
              style={{
                height: '1px',
                flex: 1,
                maxWidth: '180px',
                background: 'linear-gradient(to left, transparent, var(--rule-strong))',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
