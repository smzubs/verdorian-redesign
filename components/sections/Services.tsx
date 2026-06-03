'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  IconClipboardList,
  IconTools,
  IconCalendar,
} from '@tabler/icons-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'
import { SERVICES } from '@/lib/utils'

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services & Pricing"
      style={{
        paddingTop: '132px',
        paddingBottom: '132px',
        background: 'var(--c-bg-base)',
      }}
    >
      <div
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
              <SectionLabel>SERVICES</SectionLabel>
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
                Clear paths. Real results.
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                Systems teams actually use.
              </span>
            </motion.h2>
          </div>

          {/* Three tiers - glass cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '16px',
            }}
            className="md:grid-cols-3"
          >
            {SERVICES.map((service, i) => {
              const IconComponent = i === 0 ? IconClipboardList : i === 1 ? IconTools : IconCalendar

              return (
                <motion.div
                  key={service.tier}
                  variants={CARD_ENTRANCE}
                  custom={i}
                >
                  <GlassCard tilt={false} style={{ background: 'var(--c-bg-card)', height: '100%' }}>
                    <div
                      style={{
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      {/* Tier badge + price */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--c-gold)',
                            background: 'rgba(176,136,60,0.08)',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                          }}
                        >
                          {service.tier}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-display), serif',
                            fontSize: '22px',
                            fontWeight: 700,
                            color: 'var(--c-text-1)',
                            lineHeight: 1,
                          }}
                        >
                          {service.price}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display), serif',
                          fontWeight: 700,
                          fontSize: '20px',
                          color: 'var(--c-text-1)',
                          margin: '0 0 8px',
                          letterSpacing: 'var(--track-h3)',
                        }}
                      >
                        {service.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          fontSize: '14px',
                          color: 'var(--c-text-2)',
                          lineHeight: 1.55,
                          margin: '0 0 16px',
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Outcomes */}
                      <div style={{ marginTop: 'auto' }}>
                        <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--c-gold)', marginBottom: '8px' }}>
                          WHAT YOU GET
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {service.outcomes.map((outcome, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: '13px',
                                color: 'var(--c-text-1)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                lineHeight: 1.4,
                              }}
                            >
                              <span style={{ color: 'var(--c-gold)', fontWeight: 700, marginTop: '1px' }}>→</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
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
