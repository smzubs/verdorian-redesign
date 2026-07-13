'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// One idea, told once: busywork = people moving information between systems.
// Software should be the glue — the person only approves the result.

const STRUCK_WORDS = ['copy', 'paste', 'retype', 'remind', 'chase']

export default function PainSection() {
  return (
    <section
      id="problem"
      aria-label="The problem we solve"
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

        /* ── Struck-out busywork words ─────────────────────────── */
        .pf-struck {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 6px 14px;
        }
        .pf-struck-word {
          font-family: var(--font-body), sans-serif;
          font-size: 13px; font-weight: 500;
          color: var(--ink-faint);
          text-decoration: line-through;
          text-decoration-color: rgba(24, 119, 242, 0.55);
          text-decoration-thickness: 1.5px;
          opacity: 0.75;
        }

        /* ── Flow strip: one glass panel, three nodes ──────────── */
        .pain-flow {
          display: flex; align-items: stretch; justify-content: center;
          gap: 0;
          width: 100%;
          max-width: 860px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.34);
          backdrop-filter: blur(28px) saturate(1.7);
          -webkit-backdrop-filter: blur(28px) saturate(1.7);
          border: 1px solid rgba(255, 255, 255, 0.60);
          box-shadow:
            0 2px 0 0 rgba(255, 255, 255, 0.55) inset,
            0 8px 32px rgba(24, 119, 242, 0.10),
            0 1px 2px rgba(0, 0, 0, 0.04);
          padding: 26px 28px;
        }
        @supports not (backdrop-filter: blur(1px)) {
          .pain-flow { background: rgba(238, 243, 251, 0.96); }
        }

        .pf-node {
          flex: 1 1 0;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 6px;
          padding: 6px 10px;
          min-width: 0;
        }
        .pf-node-title {
          font-family: var(--font-body), sans-serif;
          font-size: 15px; font-weight: 650;
          color: var(--ink);
          line-height: 1.3;
        }
        .pf-node-sub {
          font-family: var(--font-body), sans-serif;
          font-size: 12.5px; font-weight: 450;
          color: var(--ink-faint);
          line-height: 1.45;
        }
        .pf-node-accent .pf-node-title { color: var(--gold); }
        .pf-node-accent {
          border-radius: 14px;
          background: rgba(24, 119, 242, 0.06);
          border: 1px solid rgba(24, 119, 242, 0.16);
          padding: 10px 14px;
        }

        .pf-arrow {
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-bright);
          font-size: 15px;
          padding: 0 4px;
          flex-shrink: 0;
          opacity: 0.7;
          animation: pf-flow 1.8s ease-in-out infinite;
        }
        .pf-arrow:last-of-type { animation-delay: 0.9s; }
        @keyframes pf-flow {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(2px); }
        }

        @media (max-width: 640px) {
          .pain-flow { flex-direction: column; gap: 6px; padding: 24px 20px; }
          .pf-arrow { transform: rotate(90deg); padding: 2px 0; }
          @keyframes pf-flow {
            0%, 100% { opacity: 0.5; transform: rotate(90deg) translateX(0); }
            50% { opacity: 1; transform: rotate(90deg) translateX(2px); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-arrow { animation: none !important; opacity: 0.7; }
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
            gap: '36px',
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
              lead="Most busywork is moving information from one place to another."
              accent="That's a job for software — not your team."
              align="center"
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '17px',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '54ch',
              }}
            >
              An email becomes a spreadsheet row. A form becomes an invoice.
              Every day, someone re-types what another system already knows.
            </p>
          </motion.div>

          {/* Struck-out busywork words */}
          <motion.div variants={FADE_UP} className="pf-struck" aria-hidden="true">
            {STRUCK_WORDS.map((w) => (
              <span key={w} className="pf-struck-word">{w}</span>
            ))}
          </motion.div>

          {/* The solution, in one strip */}
          <motion.div
            variants={FADE_UP}
            className="pain-flow"
            role="img"
            aria-label="Work arrives, software runs the middle, you approve the result"
          >
            <div className="pf-node">
              <span className="pf-node-title">Work arrives</span>
              <span className="pf-node-sub">a form, an email, an order</span>
            </div>
            <span className="pf-arrow" aria-hidden="true">→</span>
            <div className="pf-node pf-node-accent">
              <span className="pf-node-title">Software runs the middle</span>
              <span className="pf-node-sub">the part your team did by hand</span>
            </div>
            <span className="pf-arrow" aria-hidden="true">→</span>
            <div className="pf-node">
              <span className="pf-node-title">You approve</span>
              <span className="pf-node-sub">one look — you stay in control</span>
            </div>
          </motion.div>

          {/* Closing line */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '14px',
              color: 'var(--ink-faint)',
              margin: 0,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            If it repeats every week, it can run itself.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
