'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// Stat row data — Stripe-style: intentionally thin large numbers
const STATS = [
  { value: '5', label: 'Products' },
  { value: '100%', label: 'Owner-Built' },
  { value: '2026', label: 'Founded' },
  { value: 'Tennessee', label: 'Based' },
]

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Verdorian Technologies"
      style={{
        paddingTop: '160px',
        paddingBottom: '160px',
        background: 'var(--c-bg-alt)',
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
            <SectionLabel>ABOUT US</SectionLabel>

            <h2
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                letterSpacing: 'var(--track-h2)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                Engineering tomorrow&apos;s
              </span>
              <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                technology.
              </span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '17px',
                color: 'var(--c-text-2)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Verdorian Technologies is an indie software studio based in
              Clarksville, Tennessee. We specialize in building mobile
              applications, AI-powered tools, and SaaS platforms that solve
              real-world problems. From concept to deployment, we craft every
              pixel and every line of code with precision.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '17px',
                color: 'var(--c-text-2)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Every product is owner-designed, owner-coded, and owner-deployed.
              AI is a core feature in every product we build — not an afterthought.
            </p>
          </motion.div>

          {/* Stat row — iOS 26 Glass mini cards */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
            className="sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(6px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(6px) saturate(160%)',
                  border: '1px solid rgba(255, 255, 255, 0.40)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.40),
                    0 2px 8px rgba(0,0,0,0.03)
                  `,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
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
                <span
                  style={{
                    fontFamily: 'var(--font-geist), sans-serif',
                    fontWeight: 400,
                    fontSize: '48px',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: 'var(--c-text-1)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.value}
                </span>
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
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
