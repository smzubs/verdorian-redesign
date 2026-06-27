'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/motion'

/* ─── Main section ───────────────────────────────────────────────── */

export default function BusinessVsIndividual() {
  return (
    <section
      id="audience"
      aria-label="Who we help"
      className="glass-stage"
      style={{ scrollMarginTop: '84px', paddingTop: '72px', paddingBottom: '72px' }}
    >
      <style>{`
        .aud-container {
          max-width: 960px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (max-width: 600px) {
          .aud-container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        .aud-title {
          font-family: var(--font-display), Georgia, serif;
          font-weight: 500;
          font-size: clamp(22px, 3vw, 32px);
          letter-spacing: -0.015em;
          color: var(--ink);
          text-align: center;
          margin: 0 0 36px;
          line-height: 1.15;
        }

        .aud-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .aud-grid {
            grid-template-columns: 1fr;
          }
        }

        .aud-card {
          border-radius: var(--r-md, 12px);
          padding: 28px 28px 24px;
          background: rgba(255, 255, 255, 0.52);
          -webkit-backdrop-filter: blur(16px) saturate(1.5);
                  backdrop-filter: blur(16px) saturate(1.5);
          border: 1px solid rgba(255, 255, 255, 0.70);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.90) inset,
            0 4px 20px -6px rgba(20, 24, 32, 0.10),
            0 16px 40px -16px rgba(31, 64, 122, 0.14);
        }
        @media (max-width: 390px) {
          .aud-card {
            padding: 24px 20px;
          }
        }

        .aud-label {
          display: inline-block;
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          margin: 0 0 12px;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .aud-label--business {
          color: var(--gold, #1877F2);
          background: rgba(24, 119, 242, 0.08);
        }
        .aud-label--individuals {
          color: #6366F1;
          background: rgba(99, 102, 241, 0.08);
        }

        .aud-copy {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .aud-card {
            transition: none !important;
          }
        }
      `}</style>

      <div className="aud-container">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '12px' }}
        >
          <span className="eyebrow">Who We Help</span>
        </motion.div>

        <motion.h2
          className="aud-title"
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          For businesses and the people who run them.
        </motion.h2>

        <div className="aud-grid">
          <motion.div
            className="aud-card"
            variants={FADE_UP}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="aud-label aud-label--business">For Businesses</h3>
            <p className="aud-copy">
              We eliminate the repetitive operations that slow your team down — data entry, follow-ups, scheduling, reports — so your people spend time on work that actually moves the business forward.
            </p>
          </motion.div>

          <motion.div
            className="aud-card"
            variants={FADE_UP}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="aud-label aud-label--individuals">For Professionals</h3>
            <p className="aud-copy">
              We automate the personal workflows that eat your most productive hours — email triage, task management, research, content — so you can focus on the work that matters.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
