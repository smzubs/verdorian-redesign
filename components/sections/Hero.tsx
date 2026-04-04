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

// ─── Gradient Mesh Visual — richer, more saturated color blobs ───────────────
function GradientMesh() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '500px',
        pointerEvents: 'none',
      }}
    >
      {/* Blob 1 — vivid violet (larger, more visible) */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          top: '10%',
          right: '5%',
          filter: 'blur(60px)',
          animation: 'meshDrift1 20s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — hot pink (richness layer) */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)',
          top: '5%',
          right: '35%',
          filter: 'blur(50px)',
          animation: 'meshDrift4 18s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — cyan */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.28) 0%, transparent 70%)',
          bottom: '15%',
          right: '10%',
          filter: 'blur(55px)',
          animation: 'meshDrift3 22s ease-in-out infinite',
        }}
      />
      {/* Blob 4 — warm orange/gold (richness) */}
      <div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.20) 0%, transparent 70%)',
          top: '30%',
          right: '20%',
          filter: 'blur(45px)',
          animation: 'meshDrift2 25s ease-in-out infinite',
        }}
      />
    </div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
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
        background: `
          radial-gradient(ellipse 80% 50% at 40% 30%, rgba(139,92,246,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 70% 70%, rgba(236,72,153,0.04) 0%, transparent 50%),
          var(--c-bg-hero)
        `,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        /* Mobile: reduce mesh intensity, stack layout */
        @media (max-width: 1023px) {
          .hero-mesh {
            min-height: 300px !important;
            opacity: 0.7;
          }
          .hero-mesh div {
            width: 220px !important;
            height: 220px !important;
          }
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
          .hero-mesh div {
            animation: none !important;
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
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
          }}
        >
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
              {/* Eyebrow stat pill — iOS 26 glass */}
              <motion.div variants={FADE_UP}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.55)',
                    backdropFilter: 'blur(8px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(160%)',
                    border: '1px solid rgba(255, 255, 255, 0.50)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), 0 2px 8px rgba(0,0,0,0.04)',
                    fontFamily: 'var(--font-geist), sans-serif',
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
                      background: 'var(--c-plasma)',
                      flexShrink: 0,
                    }}
                  />
                  5 Products Shipped &middot; 2026
                </span>
              </motion.div>

              {/* H1 — ghost headline on cream bg */}
              <motion.h1
                variants={FADE_UP}
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-geist), sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--t-hero)',
                  lineHeight: 1.05,
                  letterSpacing: 'var(--track-hero)',
                  margin: 0,
                  textAlign: 'left',
                }}
                aria-label="We don't consult. We create. Then we ship."
              >
                {/* Line 1 — full dark */}
                <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
                  <LetterReveal text="We don't consult." baseDelay={0.4} />
                </span>
                {/* Line 2 — ghost 35% */}
                <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                  <LetterReveal text="We create." baseDelay={1.0} />
                </span>
                {/* Line 3 — ghost 35% */}
                <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
                  <LetterReveal text="Then we ship." baseDelay={1.55} />
                </span>
              </motion.h1>

              {/* Subtitle */}
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
                From intelligent mobile apps to enterprise SaaS — we turn bold ideas
                into powerful digital products.
              </motion.p>

              {/* CTA row */}
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
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection('products')}
                  className="hero-cta-btn"
                >
                  Explore our work
                </GlowButton>
                <GlowButton
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="hero-cta-btn"
                >
                  Contact us
                </GlowButton>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — gradient mesh */}
            <div
              className="hidden lg:block hero-mesh"
              style={{ position: 'relative' }}
            >
              <GradientMesh />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
