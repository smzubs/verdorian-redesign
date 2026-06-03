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
      <style>{`
        @media (max-width: 767px) {
          .services-container { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (max-width: 390px) {
          .services-container { padding-left: 16px !important; padding-right: 16px !important; }
          .service-card-inner { padding: 20px !important; }
        }
        /* Premium golden ambient light for stacked super-premium cards — rich, soft, expensive glow */
        .service-ambient {
          animation: ambientBreathe 7s ease-in-out infinite alternate;
          opacity: 0.9;
        }
        .group:hover .service-ambient {
          opacity: 1;
          filter: blur(52px);
        }
        .service-golden-ambient {
          /* Extra premium golden diffusion */
          box-shadow: 0 0 120px rgba(180,138,64,0.08);
        }
        @keyframes ambientBreathe {
          0% { transform: scale(0.92); opacity: 0.82; }
          100% { transform: scale(1.08); opacity: 0.98; }
        }
        @media (prefers-reduced-motion: reduce) {
          .service-ambient { animation: none !important; }
        }
      `}</style>
      <div
        className="services-container"
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

          {/* Three tiers - stacked vertically, one full card after another for no cutoff and full visibility */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {SERVICES.map((service, i) => {
              const IconComponent = i === 0 ? IconClipboardList : i === 1 ? IconTools : IconCalendar

              return (
                <motion.div
                  key={service.tier}
                  variants={CARD_ENTRANCE}
                  custom={i}
                  whileHover={{ scale: 1.012, y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  className="group"
                >
                  <GlassCard tilt={false} style={{ height: '100%' }}>
                    <div
                      className="service-card-inner p-8 md:p-10"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        position: 'relative',
                      }}
                    >
                      {/* Premium golden ambient light — rich, soft, expensive glow for super premium stacked cards. Stronger gold base + tier tint. Breathes + intensifies. */}
                      <div
                        aria-hidden="true"
                        className="service-ambient service-golden-ambient"
                        style={{
                          position: 'absolute',
                          top: '-120px',
                          right: '-100px',
                          width: '340px',
                          height: '340px',
                          background: 
                            i === 0 
                              ? 'radial-gradient(circle, rgba(180,138,64,0.18) 0%, transparent 65%)' 
                              : i === 1 
                              ? 'radial-gradient(circle, rgba(180,138,64,0.12) 0%, rgba(105,115,90,0.06) 40%, transparent 68%)' 
                              : 'radial-gradient(circle, rgba(180,138,64,0.10) 0%, rgba(24,119,242,0.04) 40%, transparent 68%)',
                          filter: 'blur(60px)',
                          pointerEvents: 'none',
                          zIndex: 0,
                          transition: 'opacity 0.4s var(--ease-expo), filter 0.4s var(--ease-expo)',
                        }}
                      />
                      {/* Tier badge + price */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', gap: '12px' }}>
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
                            flexShrink: 0,
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
                            textAlign: 'right',
                            whiteSpace: 'nowrap',
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
