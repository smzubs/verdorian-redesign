'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_POINTS: readonly string[] = [
  'Human sign-off at every critical step',
  'Security built in, not bolted on',
  'Auditable logs and clear validation',
  'Works with the tools you already use',
]

// One line icon per proof point, in TRUST_POINTS order: sign-off, security, audit log, integrations
const TRUST_ICONS = [
  'M9 11.5l2.2 2.2L15.5 9.5M12 21a9 9 0 100-18 9 9 0 000 18z',
  'M12 3l7 3v5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6l7-3z',
  'M8 4h8l3 3v13H5V4h3zM8 11h8M8 15h8M8 7.5h4',
  'M9 7V4M15 7V4M7 7h10v4a5 5 0 01-10 0V7zM12 16v4',
]

interface ProofItem {
  name: string
  description: string
  href?: string
}

// Client work only — our own products are presented in the Ventures section
const PROOF_ITEMS: readonly ProofItem[] = [
  {
    name: 'Knight Electric',
    description: 'Website for an electrical contractor',
    href: 'https://knightelectric.net',
  },
]

// ─── Root component ───────────────────────────────────────────────────────────

export default function Trust() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 104px)',
        paddingBottom: 'clamp(80px, 10vw, 104px)',
      }}
    >
      <style>{`
        .trust-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: clamp(20px, 5vw, 48px);
          padding-right: clamp(20px, 5vw, 48px);
        }
        .trust-points-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 48px;
          border: 1px solid rgba(195, 112, 128, 0.18);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.025);
        }
        .trust-point-item {
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 140px;
          padding: 28px 24px;
          border-right: 1px solid rgba(195, 112, 128, 0.18);
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.45;
          color: var(--ink);
        }
        .trust-point-top { display: flex; align-items: center; justify-content: space-between; color: var(--gold-bright); }
        .trust-point-num { font-family: var(--font-tech), system-ui, sans-serif; font-size: 11px; letter-spacing: 0.2em; color: var(--gold); }
        .trust-point-item:last-child {
          border-right: none;
        }
        .trust-support-sentence {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 24px 0 0;
          max-width: 58ch;
        }
        .trust-proof-strip {
          margin-top: 56px;
          padding-top: 36px;
          border-top: 1px solid var(--rule);
        }
        .trust-proof-heading {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--ink-soft);
          margin: 0 0 20px;
        }
        .trust-proof-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .trust-proof-row {
          display: grid;
          grid-template-columns: minmax(150px, 220px) 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 18px 0;
          border-top: 1px solid var(--rule);
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          color: var(--ink);
          transition: color 0.18s var(--ease-prospectus);
        }
        .trust-proof-arrow { color: var(--gold-bright); font-size: 15px; }
        a.trust-proof-row:hover .trust-proof-name { color: var(--gold-bright); }
        .trust-proof-name {
          font-weight: 600;
          flex-shrink: 0;
        }
        .trust-proof-desc {
          color: var(--ink-soft);
        }
        @media (max-width: 767px) {
          .trust-container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .trust-points-strip {
            grid-template-columns: 1fr 1fr;
            margin-top: 36px;
          }
          .trust-point-item:nth-child(2) {
            border-right: none;
          }
          .trust-point-item:nth-child(3) {
            border-top: 1px solid var(--rule);
          }
          .trust-point-item:nth-child(4) {
            border-top: 1px solid var(--rule);
            border-right: none;
          }
          .trust-proof-strip {
            margin-top: 40px;
            padding-top: 28px;
          }
          .trust-proof-row { grid-template-columns: 1fr auto; row-gap: 4px; }
          .trust-proof-row .trust-proof-desc { grid-column: 1 / -1; grid-row: 2; }
        }
        @media (max-width: 480px) {
          .trust-points-strip {
            grid-template-columns: 1fr;
          }
          .trust-point-item {
            min-height: 0;
            padding: 22px 20px;
            border-right: none;
            border-bottom: 1px solid var(--rule);
          }
          .trust-point-item:nth-child(2) {
            border-right: none;
          }
          .trust-point-item:nth-child(3) {
            border-top: none;
          }
          .trust-point-item:nth-child(4) {
            border-top: none;
            border-right: none;
            border-bottom: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-proof-row {
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
              eyebrow="BUILT WITH CONTROL"
              lead="Built with control,"
              accent="not hype."
              align="left"
            />
          </div>

          {/* ── 4-point strip ──────────────────────────────────────────────── */}
          <motion.div
            className="trust-points-strip"
            variants={FADE_UP}
            role="list"
            aria-label="How we build with control"
          >
            {TRUST_POINTS.map((label, i) => (
              <div key={label} role="listitem" className="trust-point-item">
                <span className="trust-point-top">
                  <span className="trust-point-num">{String(i + 1).padStart(2, '0')}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={TRUST_ICONS[i]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {label}
              </div>
            ))}
          </motion.div>

          <motion.p
            className="trust-support-sentence"
            variants={FADE_UP}
          >
            Every automation we build includes review checkpoints and a clear audit
            trail — your team stays in control, not just informed.
          </motion.p>
        </motion.div>

        {/* ── Proof block ────────────────────────────────────────────────── */}
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
          >
            Client work
          </motion.p>

          <motion.ul
            className="trust-proof-list"
            variants={STAGGER_CONTAINER}
            aria-label="Client work"
          >
            {PROOF_ITEMS.map((item) => {
              if (item.href) {
                return (
                  <motion.li key={item.name} variants={FADE_UP}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="trust-proof-row"
                      aria-label={`${item.name} — ${item.description}, opens in a new tab`}
                      style={reduceMotion ? { transition: 'none' } : undefined}
                    >
                      <span className="trust-proof-name">{item.name}</span>
                      <span className="trust-proof-desc">{item.description}</span>
                      <span className="trust-proof-arrow" aria-hidden="true">↗</span>
                    </a>
                  </motion.li>
                )
              }
              return (
                <motion.li key={item.name} variants={FADE_UP}>
                  <div className="trust-proof-row">
                    <span className="trust-proof-name">{item.name}</span>
                    <span className="trust-proof-desc">{item.description}</span>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
