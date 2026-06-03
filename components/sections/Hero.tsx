'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// ─── Letter-by-letter reveal ─────────────────────────────────────────────────
interface LetterRevealProps {
  text: string
  baseDelay: number
  style?: React.CSSProperties
}

function LetterReveal({ text, baseDelay, style }: LetterRevealProps) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.45,
            delay: baseDelay + i * 0.022,
            ease: [0.19, 1, 0.22, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre', ...style }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  )
}

/* (All legacy GradientMesh + floats + IDE/phone fully excised for calm Liquid Glass — global blobs + glass accent now carry the signature. Clean right column below if needed.) */

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60])

  return (
    <section
      id="hero"
      aria-label="Hero — Verdorian Technologies"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100svh',
        background: 'var(--c-bg-hero)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        /* Responsive for new clean glass accent hero */
        @media (max-width: 1023px) {
          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .glass {
            transition: none !important;
          }
        }
      `}</style>

      {/* Scroll-linked fade wrapper */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '128px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {/* Two-column grid: 55% text / 45% mesh */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '64px',
              alignItems: 'center',
            }}
            className="lg:grid-cols-[55fr_45fr]"
          >
            {/* LEFT COLUMN — text */}
            <motion.div
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '28px',
              }}
            >
              {/* Eyebrow */}
              <motion.div variants={FADE_UP}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.60)',
                    backdropFilter: 'blur(12px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.55)',
                    boxShadow: '0 4px 16px rgba(24,119,242,0.06), inset 0 1px 0 rgba(255,255,255,0.60)',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--c-text-2)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--c-gold)',
                      flexShrink: 0,
                    }}
                  />
                  AI Workflow Implementation Specialist
                </span>
              </motion.div>

              {/* H1 - new positioning, keeping glass style */}
              <motion.h1
                variants={FADE_UP}
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontWeight: 600,
                  fontSize: 'var(--t-hero)',
                  lineHeight: 1.02,
                  letterSpacing: 'var(--track-hero)',
                  margin: 0,
                  textAlign: 'left',
                }}
                aria-label="AI workflows that actually work in the field."
              >
                <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                  <LetterReveal text="AI workflows that" baseDelay={0.35} />
                </span>
                <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                  <LetterReveal text="actually work" baseDelay={0.95} />
                </span>
                <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                  <LetterReveal text="in the field." baseDelay={1.48} />
                </span>
              </motion.h1>

              {/* Subtitle - new pitch */}
              <motion.p
                variants={FADE_UP}
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  color: 'var(--c-text-2)',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                  textAlign: 'left',
                  margin: 0,
                }}
              >
                With 7 years in field operations, safety, and compliance, we design, build, and ship AI systems that automate inspections and workflows teams actually use.
              </motion.p>

              {/* Dual CTAs - updated for two audiences */}
              <motion.div
                variants={FADE_UP}
                className="hero-cta-row"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  alignItems: 'center',
                }}
              >
                <GlowButton
                  variant="emerald"
                  size="lg"
                  shimmer
                  onClick={() => scrollToSection('products')}
                  className="hero-cta-btn"
                >
                  See our work
                </GlowButton>
                <GlowButton
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="hero-cta-btn"
                >
                  Automate your workflow
                </GlowButton>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — clean, calm glass accent (removed dated floats/mesh for super-premium Apple liquid glass clarity) */}
            <div
              className="hidden lg:block"
              style={{ position: 'relative', minHeight: '420px' }}
            >
              <div
                className="glass"
                style={{
                  position: 'absolute',
                  inset: '40px 0 40px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '32px',
                  borderRadius: '26px',
                }}
              >
                <div style={{ textAlign: 'center', maxWidth: '260px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontSize: '13px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--c-gold)',
                      marginBottom: '14px',
                    }}
                  >
                    PRODUCTION SYSTEMS
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontSize: '21px',
                      lineHeight: 1.25,
                      color: 'var(--c-text-1)',
                      fontStyle: 'italic',
                    }}
                  >
                    We build what crews<br />actually use in the field.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
