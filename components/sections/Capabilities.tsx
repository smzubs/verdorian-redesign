'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const CAPABILITIES = [
  {
    title: 'Mobile Apps',
    subtitle: 'iOS & Android',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="4" width="16" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
        <line x1="12" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.15)',
    metrics: ['React Native', 'Expo SDK 54', '60fps'],
  },
  {
    title: 'Web Platforms',
    subtitle: 'Full-Stack SaaS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="7" cy="8" r="1" fill="#FF5F57" />
        <circle cx="10" cy="8" r="1" fill="#FEBC2E" />
        <circle cx="13" cy="8" r="1" fill="#28C840" />
        <line x1="12" y1="27" x2="20" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#22D3EE',
    glow: 'rgba(34,211,238,0.15)',
    metrics: ['Next.js 15', 'TypeScript', 'Vercel'],
  },
  {
    title: 'ai Integration',
    subtitle: 'Intelligence Layer',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#1877F2',
    glow: 'rgba(24,119,242,0.15)',
    metrics: ['Frontier Models', 'Edge Functions', 'Custom Agents'],
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Ship Everywhere',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 22C5.79 22 4 20.21 4 18c0-1.86 1.28-3.43 3-3.87C7.04 14.08 7 14.04 7 14c0-3.31 2.69-6 6-6 2.65 0 4.89 1.72 5.68 4.1A4.98 4.98 0 0124 16a5 5 0 01-1 9.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="20" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 25l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#10B981',
    glow: 'rgba(16,185,129,0.15)',
    metrics: ['Supabase', 'AWS', 'CI/CD'],
  },
]

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      style={{
        padding: '120px 0',
        background: 'var(--c-bg-alt)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background animated grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
        }}
      />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.div variants={FADE_UP}>
            <SectionLabel>WHAT WE BUILD WITH</SectionLabel>
          </motion.div>
          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: 'var(--t-h2)',
              letterSpacing: 'var(--track-h2)',
              lineHeight: 1.1,
              marginTop: '20px',
            }}
          >
            <span style={{ color: 'var(--c-text-1)' }}>Modern tools.</span>
            <br />
            <span style={{ color: 'var(--c-text-3)' }}>Proven craft.</span>
          </motion.h2>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="capabilities-grid"
        >
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              variants={FADE_UP}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(8px) saturate(160%)',
                WebkitBackdropFilter: 'blur(8px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.50)',
                borderRadius: '20px',
                padding: '28px 24px',
                boxShadow: '0 6px 24px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.60)',
                overflow: 'hidden',
                isolation: 'isolate',
                cursor: 'default',
                transition: 'box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px ${cap.glow}, inset 0 1px 0 rgba(255,255,255,0.70)`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.60)'
              }}
            >
              {/* Top highlight */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '40%',
                  borderRadius: '20px 20px 0 0',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />

              {/* Ambient glow orb */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: cap.glow,
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `rgba(${cap.color === '#8B5CF6' ? '139,92,246' : cap.color === '#22D3EE' ? '34,211,238' : cap.color === '#1877F2' ? '24,119,242' : '16,185,129'},0.10)`,
                  border: `1px solid rgba(${cap.color === '#8B5CF6' ? '139,92,246' : cap.color === '#22D3EE' ? '34,211,238' : cap.color === '#1877F2' ? '24,119,242' : '16,185,129'},0.20)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cap.color,
                  marginBottom: '16px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: `0 0 20px ${cap.glow}`,
                }}
              >
                {cap.icon}
              </motion.div>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontFamily: 'var(--font-geist), sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--c-text-1)',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em',
                }}>
                  {cap.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--c-text-2)',
                  marginBottom: '16px',
                }}>
                  {cap.subtitle}
                </p>

                {/* Tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {cap.metrics.map((m) => (
                    <span
                      key={m}
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.50)',
                        backdropFilter: 'blur(4px)',
                        color: 'var(--c-text-2)',
                        border: '1px solid rgba(255,255,255,0.40)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive grid */}
      <style>{`
        .capabilities-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
