'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Verdorian Technologies"
      style={{
        padding: '132px 0',
        background: 'var(--c-bg-alt)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .contact-container { padding: 0 20px !important; } }
        @media (max-width: 390px) {
          .contact-container { padding: 0 16px !important; }
          .contact-glass-card { padding: 28px !important; margin-top: 32px !important; border-radius: 22px !important; }
          .contact-glass-card > div > div[style*="flex"] { flex-direction: column !important; gap: 10px !important; }
        }
      `}</style>
      {/* Background blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(24,119,242,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="contact-container"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
        >
          <motion.div variants={FADE_UP}>
            <SectionLabel>LETS BUILD</SectionLabel>
          </motion.div>

          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-display), serif',
              fontWeight: 600,
              fontSize: 'var(--t-h2)',
              letterSpacing: 'var(--track-h2)',
              lineHeight: 1.05,
              margin: '24px 0 0',
            }}
          >
            <span style={{ display: 'block', color: 'var(--c-text-1)' }}>Ready to build</span>
            <span style={{ display: 'block', color: 'var(--c-text-3)' }}>something great?</span>
          </motion.h2>

          {/* Glass CTA card */}
          <motion.div
            variants={FADE_UP}
            style={{
              width: '100%',
              background: 'var(--glass-fill-elevated)',
              backdropFilter: 'blur(22px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(22px) saturate(1.3)',
              border: '1px solid var(--glass-border)',
              borderRadius: '26px',
              padding: '40px',
              marginTop: '40px',
              boxShadow: '0 14px 48px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.16)',
              position: 'relative',
              isolation: 'isolate',
              overflow: 'hidden',
            }}
            className="contact-glass-card"
          >
            {/* Top catch light */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                borderRadius: '24px 24px 0 0',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  color: 'var(--c-text-2)',
                  marginBottom: '28px',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  margin: '0 0 28px',
                }}
              >
                From mobile apps to enterprise SaaS — let&apos;s talk about your next project.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <GlowButton
                  variant="blue"
                  size="lg"
                  shimmer
                  href="mailto:sm@verdorian.com"
                >
                  LETS TALK!
                </GlowButton>
                <GlowButton
                  variant="ghost"
                  size="lg"
                  href="mailto:sm@verdorian.com"
                >
                  sm@verdorian.com
                </GlowButton>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={FADE_UP}
            style={{
              marginTop: '24px',
              fontSize: '13px',
              color: 'var(--c-text-3)',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Clarksville, Tennessee &middot; Verdorian Technologies LLC
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
