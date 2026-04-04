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

// Icon accent colors + glow per service
const ICON_STYLES: Record<string, { bg: string; border: string; color: string; glow: string; orb: string }> = {
  IconDeviceMobile: {
    bg: 'rgba(139, 92, 246, 0.08)',
    border: 'rgba(139, 92, 246, 0.18)',
    color: 'var(--c-plasma)',
    glow: 'rgba(139, 92, 246, 0.12)',
    orb: 'rgba(139, 92, 246, 0.05)',
  },
  IconBrowser: {
    bg: 'rgba(34, 211, 238, 0.08)',
    border: 'rgba(34, 211, 238, 0.20)',
    color: 'var(--c-arc)',
    glow: 'rgba(34, 211, 238, 0.12)',
    orb: 'rgba(34, 211, 238, 0.05)',
  },
  IconBrain: {
    bg: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.20)',
    color: 'var(--c-ember)',
    glow: 'rgba(245, 158, 11, 0.12)',
    orb: 'rgba(245, 158, 11, 0.05)',
  },
  IconCloud: {
    bg: 'rgba(139, 92, 246, 0.08)',
    border: 'rgba(139, 92, 246, 0.18)',
    color: 'var(--c-plasma)',
    glow: 'rgba(139, 92, 246, 0.12)',
    orb: 'rgba(139, 92, 246, 0.05)',
  },
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      style={{
        paddingTop: '160px',
        paddingBottom: '160px',
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
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.div variants={FADE_UP}>
              <SectionLabel>SERVICES</SectionLabel>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                letterSpacing: 'var(--track-h2)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                What we
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                do.
              </span>
            </motion.h2>
          </div>

          {/* Services grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '16px',
            }}
            className="md:grid-cols-2"
          >
            {SERVICES.map((service, i) => {
              const IconComponent = ICON_MAP[service.icon]
              const iconStyle = ICON_STYLES[service.icon] ?? ICON_STYLES['IconDeviceMobile']!

              return (
                <motion.div key={service.name} variants={FADE_UP} custom={i}>
                  <GlassCard tilt={false}>
                    <div
                      style={{
                        padding: '32px',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 2,
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
                          background: iconStyle.orb,
                          filter: 'blur(80px)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Icon with glass glow effect */}
                      <div
                        aria-hidden="true"
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--r-md)',
                          background: iconStyle.bg,
                          border: `1px solid ${iconStyle.border}`,
                          boxShadow: `0 0 20px ${iconStyle.glow}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent
                            size={28}
                            stroke={1.5}
                            style={{ color: iconStyle.color }}
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
                          letterSpacing: 'var(--track-h3)',
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
