'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

interface Step {
  numeral: string
  title: string
  titleItalic?: boolean
  body: string
}

const STEPS: Step[] = [
  {
    numeral: '01',
    title: 'Audit',
    body: 'We find the highest-ROI automations in how you already work — guaranteed three, or the audit is free.',
  },
  {
    numeral: '02',
    title: 'Build',
    body: 'We ship the system that fits your operation, not a template — production software, not a demo.',
  },
  {
    numeral: '03',
    title: 'Care',
    titleItalic: true,
    body: 'We stay on: monitor, tune, and add the next automation as you grow.',
  },
]

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      aria-label="How it works"
      className="glass-stage"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }
        @media (min-width: 680px) {
          .hiw-grid {
            grid-template-columns: repeat(3, 1fr);
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
          <SectionHeading
            numeral="03"
            eyebrow="HOW IT WORKS"
            lead="Three steps."
            accent="No ambiguity."
          />

          <div className="hiw-grid">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.numeral}
                className="glass-card"
                variants={FADE_UP}
                custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                style={{
                  padding: 'clamp(28px, 3vw, 34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Gold draw-in topline — first child so glass-card::before/::after don't obscure it */}
                <span className="glass-topline" aria-hidden="true" />

                {/* Engraved numeral */}
                <span
                  className="engraved"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(52px, 7vw, 88px)',
                    lineHeight: 0.85,
                    display: 'block',
                    userSelect: 'none',
                  }}
                >
                  {step.numeral}
                </span>

                {/* Step title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display), Georgia, serif',
                    fontWeight: 400,
                    fontStyle: step.titleItalic === true ? 'italic' : 'normal',
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    letterSpacing: 'var(--track-h2)',
                    color: step.titleItalic === true ? 'var(--gold)' : 'var(--ink)',
                    margin: 0,
                    lineHeight: 1.05,
                  }}
                >
                  {step.title}
                </h3>

                {/* One sentence */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 'clamp(15px, 1.5vw, 16px)',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.72,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
