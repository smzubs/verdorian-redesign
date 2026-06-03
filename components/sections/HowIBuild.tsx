'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlassCard } from '@/components/ui/GlassCard'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'
import { IconBrain, IconShield, IconRocket, IconUsers } from '@tabler/icons-react'

const PRINCIPLES = [
  {
    icon: IconBrain,
    title: 'Ai as force multiplier',
    desc: 'Frontier Ai agents and the latest generative technologies act as a genuine force multiplier. They compress months of foundational work into days — generating structure, code, and documentation at machine speed — while we apply deep operational expertise to the decisions that make automation reliable in real operations.',
  },
  {
    icon: IconShield,
    title: 'Domain moat that matters',
    desc: '7 years in operations, compliance, and real-world automation means we catch what the models miss — regulatory edge cases, operational realities, and the difference between "compliant on paper" and "actually reliable in practice." Our moat is real experience across industries, not theory.',
  },
  {
    icon: IconRocket,
    title: 'Ship fast, validate faster',
    desc: 'Prototypes in days, real-world testing immediately. We iterate with the teams who will actually use the tools until they fit their workflow like they were always there. No hand-off — we stay until it ships right.',
  },
  {
    icon: IconUsers,
    title: "Built by someone who's been there",
    desc: 'Every system starts from painful problems we have lived in real operations. No consulting fluff — just production automation we would have wanted for the workflows we did. We ship what we know works across businesses.',
  },
]

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      aria-label="How We Build"
      style={{
        paddingTop: '132px',
        paddingBottom: '132px',
        background: 'var(--c-bg-alt)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .how-container { padding-left: 20px !important; padding-right: 20px !important; } }
        @media (max-width: 390px) {
          .how-container { padding-left: 16px !important; padding-right: 16px !important; }
          .how-principle-card { border-radius: 18px !important; }
          .how-principle-card > div { padding: 18px !important; }
        }
      `}</style>
      <div
        className="how-container"
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
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <motion.div variants={FADE_UP}>
              <SectionLabel>PROCESS</SectionLabel>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                letterSpacing: 'var(--track-h2)',
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                How we actually build
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                with Ai.
              </span>
            </motion.h2>
          </div>

          {/* Principles grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '16px',
            }}
            className="md:grid-cols-2"
          >
            {PRINCIPLES.map((principle, i) => {
              const IconComponent = principle.icon
              return (
                <motion.div
                  key={i}
                  variants={CARD_ENTRANCE}
                  custom={i}
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <GlassCard tilt={false} className="how-principle-card">
                    <div style={{ padding: '26px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--r-md)',
                        background: 'rgba(176,136,60,0.08)',
                        border: '1px solid rgba(176,136,60,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      <IconComponent size={24} stroke={1.8} style={{ color: 'var(--c-gold)' }} />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display), serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: 'var(--c-text-1)',
                        margin: '0 0 10px',
                        letterSpacing: 'var(--track-h3)',
                      }}
                    >
                      {principle.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans), sans-serif',
                        fontSize: '14px',
                        color: 'var(--c-text-2)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {principle.desc}
                    </p>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
