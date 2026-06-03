'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Verdorian Technologies"
      style={{
        paddingTop: '132px',
        paddingBottom: '132px',
        background: 'var(--c-bg-alt)',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .about-container { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (max-width: 390px) {
          .about-stats-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .about-stat-value { font-size: 36px !important; }
          .about-container { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
      <div
        className="about-container"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
          }}
        >
          {/* Text block */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '640px' }}
          >
            <SectionLabel>ABOUT</SectionLabel>

            <h2
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                letterSpacing: 'var(--track-h2)',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                From real operations to
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                the automation that powers them.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                color: 'var(--c-text-2)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              For seven years we have lived the work — real-world operations, compliance, and automation across industries. We know the inspections, the documentation, the approvals, and the real risk when processes are manual or slow.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                color: 'var(--c-text-2)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              We saw the same pattern across businesses: teams running on paper and spreadsheets, errors and delays because the process was too slow, and organizations carrying real operational and compliance risk with almost no modern automation.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                color: 'var(--c-text-2)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Now we build ai systems that automate exactly those workflows — inspections, documentation, planning, approvals, and compliance — so teams doing the real work can focus on the work, not the manual drudgery. We ship with confidence because we have been the ones who needed these tools. We focus on web platforms and software automation, with iOS apps where they fit.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
