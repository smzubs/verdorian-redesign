'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  IconDeviceMobile,
  IconBrowser,
  IconBrain,
  IconCloud,
} from '@tabler/icons-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { SERVICES } from '@/lib/utils'

type TablerIcon = React.ComponentType<{ size?: number; stroke?: number; style?: React.CSSProperties }>

const ICON_MAP: Record<string, TablerIcon> = {
  IconDeviceMobile,
  IconBrowser,
  IconBrain,
  IconCloud,
}

// Glow color per service icon
const GLOW_COLORS: Record<string, string> = {
  IconDeviceMobile: 'var(--c-plasma)',
  IconBrowser: 'var(--c-arc)',
  IconBrain: 'var(--c-ember)',
  IconCloud: 'var(--c-plasma)',
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
        background: 'var(--c-obsidian)',
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
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            <motion.div variants={FADE_UP} style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionLabel>SERVICES</SectionLabel>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                color: 'var(--c-text-1)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              What We Do
            </motion.h2>
          </div>

          {/* Services grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '16px',
              maxWidth: '64rem',
              margin: '0 auto',
              width: '100%',
            }}
            className="md:grid-cols-2"
          >
            {SERVICES.map((service, i) => {
              const IconComponent = ICON_MAP[service.icon]
              const glowColor = GLOW_COLORS[service.icon] ?? 'var(--c-plasma)'

              return (
                <motion.div key={service.name} variants={FADE_UP} custom={i}>
                  <GlassCard tilt={false}>
                    <div
                      style={{
                        padding: '32px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Corner glow orb */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          top: '-40px',
                          right: '-40px',
                          width: '160px',
                          height: '160px',
                          borderRadius: '9999px',
                          background: glowColor,
                          opacity: 0.15,
                          filter: 'blur(80px)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Icon — decorative, labelled by the adjacent h3 */}
                      <div
                        aria-hidden="true"
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--r-md)',
                          background: 'rgba(139,92,246,0.1)',
                          border: '1px solid rgba(139,92,246,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        {IconComponent && (
                          <IconComponent
                            size={28}
                            stroke={1.5}
                            style={{ color: 'var(--c-plasma)' }}
                          />
                        )}
                      </div>

                      {/* Name */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-geist), sans-serif',
                          fontWeight: 600,
                          fontSize: '20px',
                          color: 'var(--c-text-1)',
                          letterSpacing: '-0.02em',
                          margin: '0 0 12px',
                        }}
                      >
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          fontWeight: 400,
                          fontSize: '15px',
                          color: 'var(--c-text-2)',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {service.description}
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
