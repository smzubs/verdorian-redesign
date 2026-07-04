'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// Merged from the former BeforeAfter section — one problem story, told once.
const MANUAL_STEPS: string[] = [
  'Form submitted',
  'Check inbox',
  'Copy to spreadsheet',
  'Update records',
  'Send follow-up',
]

const AUTOMATED_STEPS: string[] = [
  'Form submitted',
  'Fields auto-filled',
  'Records updated',
  'Draft prepared',
  'You review & send',
]

export default function PainSection() {
  return (
    <section
      id="problem"
      aria-label="The cost of repetitive work"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 520px) {
          .pain-section-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-arrow-auto { animation: none !important; }
        }

        /* ── Before/After lanes (merged sub-widget) ─────────────── */
        .ba-lanes {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0 24px;
          align-items: start;
          width: 100%;
        }
        .ba-lane { display: flex; flex-direction: column; gap: 16px; }
        .ba-label {
          font-family: var(--font-body), sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ba-label-dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
        }
        .ba-pills {
          display: flex; flex-direction: row; align-items: center;
          flex-wrap: wrap; gap: 6px;
        }
        .ba-pill {
          display: inline-flex; align-items: center;
          padding: 7px 13px; border-radius: 9999px;
          font-family: var(--font-body), sans-serif;
          font-size: 12.5px; font-weight: 500; white-space: nowrap;
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
        .ba-arrow { font-size: 13px; color: var(--ink-faint); opacity: 0.45; flex-shrink: 0; }
        .ba-arrow-auto {
          color: var(--gold-bright); opacity: 0.7;
          animation: ba-flow 1.8s ease-in-out infinite;
        }
        .ba-divider-vs { display: flex; align-items: center; justify-content: center; padding-top: 28px; }
        .ba-vs {
          font-family: var(--font-body), sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink-faint);
          background: var(--paper-deep, #F2F5FA);
          border: 1px solid var(--rule-strong);
          border-radius: 9999px; padding: 5px 12px;
        }
        @keyframes ba-flow {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(2px); }
        }
        @media (max-width: 640px) {
          .ba-lanes { grid-template-columns: 1fr; gap: 24px 0; }
          .ba-divider-vs { padding-top: 0; }
        }

        /* ── Hidden-cost formula caption (merged from ROISection) ── */
        .pain-formula {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; justify-content: center;
        }
        .pain-formula-term {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(13px, 2.2vw, 16px);
          color: var(--ink);
          white-space: nowrap;
        }
        .pain-formula-operator {
          font-family: var(--font-body), sans-serif;
          font-size: 13px; font-weight: 500;
          color: var(--ink-faint); letter-spacing: 0.06em; user-select: none;
        }
        .pain-formula-result {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(13px, 2.2vw, 16px);
          color: var(--gold); white-space: nowrap;
        }
      `}</style>

      {/* Faint ambient — single decorative flourish */}
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
            gap: '40px',
          }}
        >
          {/* Heading block */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'center',
            }}
          >
            <SectionHeading
              eyebrow="THE PROBLEM"
              lead="Repetitive tasks quietly drain your team."
              accent="We build software that handles them."
              align="center"
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '17px',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '58ch',
              }}
            >
              Data entry, follow-ups, reports, approvals — every business runs on
              small manual tasks that add up to real lost time. We eliminate them.
            </p>
          </motion.div>

          {/* Before/After comparison — the same task, two paths */}
          <motion.div
            variants={FADE_UP}
            className="ba-lanes"
            role="region"
            aria-label="The same task done manually versus automated"
          >
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
              <div className="ba-pills" aria-label="Manual steps">
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
              <div className="ba-pills" aria-label="Automated steps">
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
          </motion.div>

          {/* Hidden-cost formula — the math, as a caption */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
          >
            <div
              className="pain-formula"
              aria-label="Hidden cost formula: People times Hours times Repetition equals Hidden Cost"
              role="img"
            >
              <span className="pain-formula-term">People</span>
              <span className="pain-formula-operator" aria-hidden="true">&times;</span>
              <span className="pain-formula-term">Hours</span>
              <span className="pain-formula-operator" aria-hidden="true">&times;</span>
              <span className="pain-formula-term">Repetition</span>
              <span className="pain-formula-operator" aria-hidden="true">=</span>
              <span className="pain-formula-result">Hidden Cost</span>
            </div>

            {/* Closing line */}
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '14px',
                color: 'var(--ink-faint)',
                margin: 0,
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              If it repeats every week, it can be automated. Same outcome, less delay — and you stay in control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
