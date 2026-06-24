'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const PARAGRAPHS = [
  'For seven years we have lived the work — real-world operations, workflow design, and automation across industries. We have run inspections, managed change orders, captured voice notes, and routed insurance submissions. We know the approvals, the documentation, and the real cost when processes stay manual.',
  'We saw the same pattern across businesses of every size: teams running on paper and spreadsheets, errors and delays because the process was too slow, and good people spending their best hours on work software should handle.',
  'Now we build ai systems that automate exactly those workflows — inspections, change orders, voice capture, insurance pipelines, and whatever comes next — so teams can focus on the work that actually moves things forward. We ship with confidence because we have been the ones who needed these tools.',
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Verdorian Technologies"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .about-container { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
      <div className="about-container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '720px' }}
        >
          <SectionHeading
            numeral="05"
            eyebrow="Who We Are"
            lead="We've lived the operations"
            accent="we automate."
          />

          <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
            {PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                variants={FADE_UP}
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '17px',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.75,
                  margin: 0,
                  padding: '24px 0',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Ruled signature */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
          >
            <span aria-hidden="true" style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '20px',
                color: 'var(--ink)',
              }}
            >
              Verdorian Technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
