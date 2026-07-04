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

interface ProofItem {
  name: string
  description: string
  href?: string
}

const PROOF_ITEMS: readonly ProofItem[] = [
  {
    name: 'QRSafePro',
    description: 'QR-powered equipment inspection and inventory SaaS',
    href: 'https://qrsafepro.com',
  },
  {
    name: 'VoicePencil',
    description: 'ai voice notes app for iOS — speech to structured text',
  },
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
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .trust-container {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        .trust-points-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 48px;
          border: 1px solid var(--rule);
          border-radius: 8px;
          overflow: hidden;
        }
        .trust-point-item {
          padding: 20px 20px 18px;
          border-right: 1px solid var(--rule);
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          color: var(--ink);
        }
        .trust-point-item:last-child {
          border-right: none;
        }
        .trust-support-sentence {
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 16px 0 0;
          max-width: 72ch;
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
          color: var(--ink-faint);
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
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--rule-faint);
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          color: var(--ink);
          transition: color 0.18s var(--ease-prospectus);
        }
        .trust-proof-row:last-child {
          border-bottom: none;
        }
        a.trust-proof-row:hover {
          color: var(--gold);
        }
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
        }
        @media (max-width: 480px) {
          .trust-points-strip {
            grid-template-columns: 1fr;
          }
          .trust-point-item {
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
              align="center"
            />
          </div>

          {/* ── 4-point strip ──────────────────────────────────────────────── */}
          <motion.div
            className="trust-points-strip"
            variants={FADE_UP}
            role="list"
            aria-label="How we build with control"
          >
            {TRUST_POINTS.map((label) => (
              <div key={label} role="listitem" className="trust-point-item">
                {label}
              </div>
            ))}
          </motion.div>

          <motion.p
            className="trust-support-sentence"
            variants={FADE_UP}
          >
            Every automation we build includes review checkpoints and a clear audit
            trails — your team stays in control, not just informed.
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
            Work we&apos;ve shipped:
          </motion.p>

          <motion.ul
            className="trust-proof-list"
            variants={STAGGER_CONTAINER}
            aria-label="Shipped products"
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
                      <span className="trust-proof-desc" aria-hidden="true">—</span>
                      <span className="trust-proof-desc">{item.description}</span>
                    </a>
                  </motion.li>
                )
              }
              return (
                <motion.li key={item.name} variants={FADE_UP}>
                  <div className="trust-proof-row">
                    <span className="trust-proof-name">{item.name}</span>
                    <span className="trust-proof-desc" aria-hidden="true">—</span>
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
