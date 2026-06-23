'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const PARAGRAPHS = [
  'For seven years we have lived the work — real-world operations, compliance, and automation across industries. We know the inspections, the documentation, the approvals, and the real risk when processes are manual or slow.',
  'We saw the same pattern across businesses: teams running on paper and spreadsheets, errors and delays because the process was too slow, and organizations carrying real operational and compliance risk with almost no modern automation.',
  'Now we build Ai systems that automate exactly those workflows — inspections, documentation, planning, approvals, and compliance — so teams doing the real work can focus on the work, not the manual drudgery. We ship with confidence because we have been the ones who needed these tools. We focus on web platforms and software automation, with iOS apps where they fit.',
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
