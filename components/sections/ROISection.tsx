'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ROISection() {
  return (
    <section
      id="roi"
      aria-labelledby="roi-heading"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '80px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* ── Scoped styles ───────────────────────────────────────── */}
      <style>{`
        .roi-container {
          max-width: 720px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }

        .roi-value-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
          padding: 48px 40px;
        }

        .roi-formula {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }

        .roi-formula-term {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(13px, 2.2vw, 16px);
          font-weight: 400;
          letter-spacing: 0.01em;
          color: var(--ink);
          white-space: nowrap;
        }

        .roi-formula-operator {
          font-family: var(--font-body), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          user-select: none;
        }

        .roi-formula-result {
          font-family: var(--font-display), Georgia, serif;
          font-size: clamp(13px, 2.2vw, 16px);
          font-weight: 400;
          letter-spacing: 0.01em;
          color: var(--gold);
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .roi-value-card {
            padding: 36px 24px;
          }
          .roi-container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .roi-value-card {
            transform: none !important;
          }
        }
      `}</style>

      <div className="roi-container">
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <SectionHeading
            numeral="04"
            eyebrow="THE MATH"
            lead="Small repeated tasks become"
            accent="a hidden cost."
            align="center"
          />
        </motion.div>

        {/* ── Value Card ─────────────────────────────────────── */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ width: '100%' }}
        >
          <div
            className="glass-card roi-value-card"
            role="region"
            aria-labelledby="roi-heading"
          >
            {/* Premium hover line-draw — consistent with other glass-card surfaces */}
            <span className="glass-topline" aria-hidden="true" />

            {/* Visually-hidden label for the region — SectionHeading above is the visible title.
                Uses a span (not a 2nd h2) to keep the heading outline clean; text matches the visible heading. */}
            <span
              id="roi-heading"
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: 0,
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
              }}
            >
              Small repeated tasks become a hidden cost.
            </span>

            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 'clamp(15px, 2vw, 17px)',
                lineHeight: 1.65,
                color: 'var(--ink-soft)',
                maxWidth: '52ch',
                margin: 0,
              }}
            >
              A 30-minute task looks harmless — until three people do it every week, every month.
            </p>

            {/* ── Formula display ──────────────────────────── */}
            <div
              className="roi-formula"
              aria-label="Hidden cost formula: People times Hours times Repetition equals Hidden Cost"
              role="img"
            >
              <span className="roi-formula-term">People</span>
              <span className="roi-formula-operator" aria-hidden="true">&times;</span>
              <span className="roi-formula-term">Hours</span>
              <span className="roi-formula-operator" aria-hidden="true">&times;</span>
              <span className="roi-formula-term">Repetition</span>
              <span className="roi-formula-operator" aria-hidden="true">=</span>
              <span className="roi-formula-result">Hidden Cost</span>
            </div>
          </div>
        </motion.div>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
        >
          <GlowButton
            variant="ink"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get Free Automation Audit
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
