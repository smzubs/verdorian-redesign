'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// ─── Data types ──────────────────────────────────────────────────────────────

interface WorkflowStep {
  label: string
  hint?: string
}

// ─── Step data ────────────────────────────────────────────────────────────────

const MANUAL_STEPS: WorkflowStep[] = [
  { label: 'Form submitted' },
  { label: 'Someone checks email', hint: '~hours later' },
  { label: 'Data copied manually' },
  { label: 'Spreadsheet updated', hint: 'if they remember' },
  { label: 'Follow-up sent manually', hint: '~days later' },
  { label: 'Report built later', hint: 'when time allows' },
]

const AUTOMATED_STEPS: WorkflowStep[] = [
  { label: 'Form submitted' },
  { label: 'ai extracts key details' },
  { label: 'CRM updates automatically' },
  { label: 'Follow-up drafted or sent' },
  { label: 'Dashboard refreshes' },
  { label: 'Human gets notified' },
]

// ─── SVG connector column dimensions ─────────────────────────────────────────
// Each connector SVG is 2px wide (just the line), 32px tall.
// We render them between steps.

function StaticConnector() {
  return (
    <svg
      width="2"
      height="32"
      viewBox="0 0 2 32"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', margin: '0 auto', flexShrink: 0 }}
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="32"
        className="vd-line-static"
        strokeDasharray="3 5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function AnimatedConnector() {
  return (
    <svg
      width="2"
      height="32"
      viewBox="0 0 2 32"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', margin: '0 auto', flexShrink: 0 }}
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="32"
        className="vd-line"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Manual step chip ─────────────────────────────────────────────────────────

interface ManualStepProps {
  step: WorkflowStep
  isLast: boolean
  index: number
}

function ManualStep({ step, isLast, index }: ManualStepProps) {
  const isPainPoint = index === 1 || index === 4  // email check + manual follow-up = peak pain

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Node chip */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '9px 14px',
          borderRadius: '10px',
          background: isPainPoint
            ? 'rgba(140, 58, 46, 0.06)'
            : 'rgba(134, 140, 152, 0.10)',
          border: isPainPoint
            ? '1px solid rgba(140, 58, 46, 0.22)'
            : '1px solid rgba(134, 140, 152, 0.28)',
          boxShadow: '0 1px 3px rgba(20, 24, 32, 0.06)',
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '12px',
          fontWeight: 500,
          color: isPainPoint ? 'var(--red-fail)' : 'var(--ink-faint)',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
          flexWrap: 'nowrap',
        }}
      >
        {/* Muted dot */}
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: isPainPoint
              ? 'rgba(140, 58, 46, 0.45)'
              : 'rgba(134, 140, 152, 0.45)',
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{step.label}</span>
        {step.hint && (
          <span
            style={{
              fontSize: '10px',
              fontWeight: 400,
              color: isPainPoint ? 'rgba(140, 58, 46, 0.65)' : 'var(--ink-faint)',
              opacity: 0.8,
              flexShrink: 0,
            }}
          >
            {step.hint}
          </span>
        )}
      </div>

      {/* Connector below (not on last step) */}
      {!isLast && (
        <div style={{ paddingTop: '2px', paddingBottom: '2px' }}>
          <StaticConnector />
        </div>
      )}
    </div>
  )
}

// ─── Automated step chip ──────────────────────────────────────────────────────

interface AutomatedStepProps {
  step: WorkflowStep
  isLast: boolean
  index: number
}

function AutomatedStep({ step, isLast, index }: AutomatedStepProps) {
  const isAccent = index === 1 || index === 2   // ai extraction + CRM auto-update = key differentiators

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Node chip */}
      <div
        className={isAccent ? 'vd-node vd-node-accent' : 'vd-node'}
        style={{ maxWidth: '100%' }}
      >
        {/* Status dot: done (green) on last step, pulsing blue otherwise */}
        <span
          className={isLast ? 'vd-dot vd-dot-done' : 'vd-dot'}
          aria-hidden="true"
        />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{step.label}</span>
      </div>

      {/* Connector below (not on last step) */}
      {!isLast && (
        <div style={{ paddingTop: '2px', paddingBottom: '2px' }}>
          <AnimatedConnector />
        </div>
      )}
    </div>
  )
}

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
      {/* ── Scoped styles: lane layout + responsive stack ───────── */}
      <style>{`
        .ba-lanes {
          display: grid;
          grid-template-columns: 1fr 2px 1fr;
          gap: 0;
          align-items: start;
        }
        .ba-divider {
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(20, 24, 32, 0.12) 20%,
            rgba(20, 24, 32, 0.12) 80%,
            transparent 100%
          );
          align-self: stretch;
          position: relative;
        }
        .ba-divider::after {
          content: 'vs';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--paper-deep);
          border: 1px solid var(--rule-strong);
          border-radius: 9999px;
          padding: 4px 10px;
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--ink-faint);
          text-transform: uppercase;
          white-space: nowrap;
        }
        @media (max-width: 720px) {
          .ba-lanes {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ba-divider {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-connector-animated line {
            animation: none !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1100px',
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
          {/* ── Section header ──────────────────────────────────── */}
          <SectionHeading
            numeral="03"
            eyebrow="BEFORE & AFTER"
            lead="From manual chaos"
            accent="to automated flow."
            align="center"
          />

          {/* ── Two-lane grid ────────────────────────────────────── */}
          <motion.div variants={FADE_UP} className="ba-lanes">

            {/* LEFT — Manual lane */}
            <motion.div
              variants={FADE_UP}
              custom={0}
              className="glass-card"
              style={{
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                borderRadius: '20px',
                background: 'rgba(248, 245, 242, 0.52)',
              }}
            >
              {/* Lane header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '28px',
                }}
              >
                {/* Muted red attention marker */}
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'rgba(140, 58, 46, 0.5)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    color: 'var(--ink-faint)',
                  }}
                >
                  Manual — today
                </span>
              </div>

              {/* Steps */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0',
                }}
                aria-label="Manual workflow steps"
              >
                {MANUAL_STEPS.map((step, i) => (
                  <ManualStep
                    key={step.label}
                    step={step}
                    index={i}
                    isLast={i === MANUAL_STEPS.length - 1}
                  />
                ))}
              </div>

              {/* Footer caption */}
              <p
                style={{
                  marginTop: '24px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '11.5px',
                  color: 'var(--ink-faint)',
                  lineHeight: 1.6,
                  textAlign: 'center',
                }}
              >
                Hours lost. Things slip. Nobody blames the process — yet.
              </p>
            </motion.div>

            {/* CENTER — Divider */}
            <div className="ba-divider" aria-hidden="true" />

            {/* RIGHT — Automated lane */}
            <motion.div
              variants={FADE_UP}
              custom={1}
              className="glass-card"
              style={{
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                borderRadius: '20px',
              }}
            >
              {/* Gold draw-in topline on hover */}
              <span className="glass-topline" aria-hidden="true" />

              {/* Lane header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '28px',
                }}
              >
                {/* Live pulsing blue dot */}
                <span className="vd-dot" aria-hidden="true" />
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    color: 'var(--gold)',
                  }}
                >
                  With Verdorian — automated
                </span>
              </div>

              {/* Steps */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0',
                }}
                aria-label="Automated workflow steps"
              >
                {AUTOMATED_STEPS.map((step, i) => (
                  <AutomatedStep
                    key={step.label}
                    step={step}
                    index={i}
                    isLast={i === AUTOMATED_STEPS.length - 1}
                  />
                ))}
              </div>

              {/* Footer caption */}
              <p
                style={{
                  marginTop: '24px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '11.5px',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                  textAlign: 'center',
                }}
              >
                Same trigger. No waiting. The right person notified immediately.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Bottom proof line ────────────────────────────────── */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 'clamp(14px, 1.4vw, 15px)',
              color: 'var(--ink-faint)',
              textAlign: 'center',
              lineHeight: 1.7,
              maxWidth: '52ch',
              margin: '0 auto',
              marginTop: '-32px',
            }}
          >
            Every step on the right runs in seconds, not hours.
            We build this for your actual workflow — not a generic template.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
