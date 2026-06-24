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
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .hiw-steps {
          display: flex;
          flex-direction: column;
        }
        /* Vertical gold rule between steps — desktop only */
        .hiw-step + .hiw-step::before {
          content: '';
          display: block;
          height: 1px;
          background: linear-gradient(to right, var(--gold), rgba(165,122,11,0.0));
          margin: 0 clamp(20px, 5vw, 40px);
        }
        @media (min-width: 680px) {
          .hiw-steps {
            flex-direction: row;
            align-items: stretch;
          }
          .hiw-step + .hiw-step::before {
            content: none;
          }
          /* Vertical hairline via border-left */
          .hiw-step + .hiw-step {
            border-left: 1px solid rgba(165,122,11,0.22);
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

          <div className="hiw-steps">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.numeral}
                className="hiw-step"
                variants={FADE_UP}
                custom={i}
                style={{ flex: 1, minWidth: 0 }}
              >
                {/* Gold top accent hairline — always present above numeral */}
                <div
                  aria-hidden="true"
                  style={{
                    height: '1px',
                    margin: '0 clamp(20px, 5vw, 40px)',
                    background: 'linear-gradient(to right, var(--gold), rgba(165,122,11,0.0))',
                  }}
                />

                {/* Step content */}
                <div
                  style={{
                    padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  {/* Engraved numeral */}
                  <span
                    className="engraved"
                    aria-hidden="true"
                    style={{
                      fontSize: 'clamp(56px, 8vw, 96px)',
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
                      fontSize: 'clamp(28px, 3.5vw, 40px)',
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
                      fontSize: 'clamp(15px, 1.6vw, 16px)',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.72,
                      margin: 0,
                      maxWidth: '30ch',
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
