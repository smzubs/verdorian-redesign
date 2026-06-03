'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'
import { IconBrain, IconShield, IconRocket, IconUsers } from '@tabler/icons-react'

const PRINCIPLES = [
  {
    icon: IconBrain,
    title: 'AI as force multiplier',
    desc: 'We use Claude, custom agents, and rapid iteration to ship what used to take months. AI handles the boilerplate and first drafts so we can focus on the hard parts that actually matter in the field.',
  },
  {
    icon: IconShield,
    title: 'Domain moat that matters',
    desc: '7 years in field operations, safety, and compliance means we catch what the models miss — regulatory edge cases, crew realities, and the difference between "compliant on paper" and "actually safe and usable in the field." Our moat is real experience, not theory.',
  },
  {
    icon: IconRocket,
    title: 'Ship fast, validate faster',
    desc: 'Prototypes in days, real field testing immediately. We iterate with the people who will actually use the tool until it fits their workflow like it was always there. No hand-off — we stay until it ships right.',
  },
  {
    icon: IconUsers,
    title: "Built by someone who's been there",
    desc: 'Every system starts from a painful problem we have lived. No consulting fluff — just production tools we would have wanted on the jobs we did. We ship what we know works.',
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
          .how-principle-card { padding: 20px !important; border-radius: 18px !important; }
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
                with AI.
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
                >
                  <div
                    className="how-principle-card"
                    style={{
                      background: 'var(--glass-fill-elevated)',
                      backdropFilter: 'blur(20px) saturate(1.3)',
                      WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
                      borderRadius: '22px',
                      padding: '28px',
                      height: '100%',
                      border: '1px solid var(--glass-border)',
                      boxShadow: '0 10px 36px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.14)',
                    }}
                  >
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
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
