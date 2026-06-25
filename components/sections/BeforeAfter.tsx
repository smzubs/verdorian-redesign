'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/motion'

// ─── Step data ────────────────────────────────────────────────────────────────

const MANUAL_STEPS: string[] = [
  'Form submitted',
  'Someone checks email',
  'Data copied',
  'Spreadsheet updated',
  'Follow-up sent later',
]

const AUTOMATED_STEPS: string[] = [
  'Form submitted',
  'AI extracts details',
  'System updates',
  'Follow-up drafted',
  'Human notified',
]

// ─── Main component ───────────────────────────────────────────────────────────

export default function BeforeAfter() {
  return (
    <section
      id="workflow"
      aria-label="Before and after: manual vs automated workflow"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .ba-wrap {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }
        .ba-lanes {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0 24px;
          align-items: start;
          width: 100%;
        }
        .ba-lane {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ba-label {
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .ba-label-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ba-pills {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ba-pill {
          display: inline-flex;
          align-items: center;
          padding: 7px 13px;
          border-radius: 9999px;
          font-family: var(--font-body), sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          white-space: nowrap;
        }
        .ba-pill-manual {
          background: rgba(134, 140, 152, 0.10);
          border: 1px solid rgba(134, 140, 152, 0.28);
          color: var(--ink-faint);
        }
        .ba-pill-auto {
          background: rgba(24, 119, 242, 0.08);
          border: 1px solid rgba(24, 119, 242, 0.22);
          color: var(--gold);
        }
        .ba-arrow {
          font-size: 13px;
          color: var(--ink-faint);
          opacity: 0.45;
          flex-shrink: 0;
        }
        .ba-arrow-auto {
          color: var(--gold-bright);
          opacity: 0.7;
          animation: ba-flow 1.8s ease-in-out infinite;
        }
        .ba-divider-vs {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 32px;
        }
        .ba-vs {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
          background: var(--paper-deep, #F2F5FA);
          border: 1px solid var(--rule-strong);
          border-radius: 9999px;
          padding: 5px 12px;
        }
        .ba-closing {
          font-family: var(--font-body), sans-serif;
          font-size: clamp(13px, 1.3vw, 14.5px);
          color: var(--ink-faint);
          text-align: center;
          line-height: 1.65;
          letter-spacing: 0.01em;
        }
        @keyframes ba-flow {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(2px); }
        }
        @media (max-width: 640px) {
          .ba-lanes {
            grid-template-columns: 1fr;
            gap: 24px 0;
          }
          .ba-divider-vs {
            padding-top: 0;
          }
          .ba-pills {
            flex-wrap: wrap;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-arrow-auto {
            animation: none !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          paddingLeft: 'clamp(20px, 5vw, 48px)',
          paddingRight: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="ba-wrap"
        >
          {/* ── Title ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 600,
              color: 'var(--ink)',
              textAlign: 'center',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            From manual steps to automated flow
          </h2>

          {/* ── Two-lane grid ─────────────────────────────────────── */}
          <div className="ba-lanes" role="region" aria-label="Workflow comparison">

            {/* LEFT — Manual lane */}
            <div className="ba-lane">
              <div className="ba-label" style={{ color: 'var(--ink-faint)' }}>
                <span
                  className="ba-label-dot"
                  style={{ background: 'rgba(134, 140, 152, 0.5)' }}
                  aria-hidden="true"
                />
                Manual
              </div>
              <div className="ba-pills" aria-label="Manual workflow steps">
                {MANUAL_STEPS.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="ba-pill ba-pill-manual">{step}</span>
                    {i < MANUAL_STEPS.length - 1 && (
                      <span className="ba-arrow" aria-hidden="true">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CENTER — vs badge */}
            <div className="ba-divider-vs" aria-hidden="true">
              <span className="ba-vs">vs</span>
            </div>

            {/* RIGHT — Automated lane */}
            <div className="ba-lane">
              <div className="ba-label" style={{ color: 'var(--gold)' }}>
                <span className="vd-dot" aria-hidden="true" />
                Automated
              </div>
              <div className="ba-pills" aria-label="Automated workflow steps">
                {AUTOMATED_STEPS.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="ba-pill ba-pill-auto">{step}</span>
                    {i < AUTOMATED_STEPS.length - 1 && (
                      <span className="ba-arrow ba-arrow-auto" aria-hidden="true">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* ── Closing line ───────────────────────────────────────── */}
          <p className="ba-closing">
            Same work. Fewer delays. Fewer mistakes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
