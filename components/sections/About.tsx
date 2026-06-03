'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

const STATS = [
  { value: '5', label: 'Products Shipped' },
  { value: '2026', label: 'Founded' },
  { value: 'Tennessee', label: 'Based' },
]

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
                From the field to
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                the systems that protect it.
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
              For seven years we have lived the work — field operations, safety, and compliance on active sites. We know the inspections, the forms, the signatures, and the real risk when records are missing or slow.
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
              We saw the same pattern on every site: crews running on paper, near-misses unreported because the process was too slow, and teams carrying real operational and compliance risk with almost no modern systems.
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
              Now we build AI systems that automate exactly those workflows — inspections, documentation, planning, and compliance records — so teams doing the real work can focus on the work, not the binders. We ship with confidence because we have been the ones who needed these tools.
            </p>
          </motion.div>

          {/* Stat row — spring pop on scroll entry */}
          <div
            className="about-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                style={{
                  background: 'var(--glass-fill)',
                  backdropFilter: 'blur(16px) saturate(1.28)',
                  WebkitBackdropFilter: 'blur(16px) saturate(1.28)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '18px',
                  padding: '22px 18px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.14)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  position: 'relative',
                  isolation: 'isolate',
                  overflow: 'hidden',
                }}
              >
                {/* Top highlight */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    borderRadius: '16px 16px 0 0',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Spring-pop number */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.15,
                  }}
                  className="about-stat-value"
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 400,
                    fontSize: '46px',
                    lineHeight: 1,
                    letterSpacing: '-0.025em',
                    color: 'var(--c-text-1)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                  }}
                >
                  {stat.value}
                </motion.span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'var(--c-text-3)',
                    letterSpacing: '0.04em',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
