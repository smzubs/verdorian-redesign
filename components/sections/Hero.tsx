'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { GradientText } from '@/components/ui/GradientText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

const ParticleCanvas = dynamic(
  () => import('@/components/ui/ParticleCanvas').then((m) => m.ParticleCanvas),
  { ssr: false }
)

// ─── Letter-by-letter reveal ─────────────────────────────────────────────────
interface LetterRevealProps {
  text: string
  baseDelay: number
}

function LetterReveal({ text, baseDelay }: LetterRevealProps) {
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
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
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
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 60%),
          radial-gradient(ellipse 50% 35% at 80% 20%, rgba(34,211,238,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 40% 30% at 20% 60%, rgba(139,92,246,0.06) 0%, transparent 50%),
          var(--c-bg-hero)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Layer 0: Particle canvas — z-0 so gradient and orbs layer above */}
      <div className="absolute inset-0" style={{ zIndex: 0 }} aria-hidden="true">
        <ParticleCanvas />
      </div>

      {/* Layer 1: Animated gradient mesh orbs */}
      <div
        aria-hidden="true"
        className="hero-orb-1"
        style={{
          position: 'absolute',
          zIndex: 1,
          borderRadius: '9999px',
          background: 'var(--c-plasma)',
          opacity: 0.07,
          filter: 'blur(160px)',
          top: '50%',
          left: '50%',
          animation: 'heroOrbFloat1 30s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        className="hero-orb-2"
        style={{
          position: 'absolute',
          zIndex: 1,
          borderRadius: '9999px',
          background: 'var(--c-arc)',
          opacity: 0.05,
          filter: 'blur(140px)',
          top: '30%',
          right: '20%',
          animation: 'heroOrbFloat2 40s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        className="hero-orb-3"
        style={{
          position: 'absolute',
          zIndex: 1,
          borderRadius: '9999px',
          background: 'var(--c-plasma)',
          opacity: 0.04,
          filter: 'blur(140px)',
          bottom: '20%',
          left: '15%',
          animation: 'heroOrbFloat3 35s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        .hero-orb-1 {
          width: 440px;
          height: 440px;
          transform: translate(-50%, -50%);
        }
        .hero-orb-2 {
          width: 240px;
          height: 240px;
        }
        .hero-orb-3 {
          width: 340px;
          height: 340px;
        }
        @media (min-width: 768px) {
          .hero-orb-1 {
            width: 760px;
            height: 760px;
          }
          .hero-orb-2 {
            width: 380px;
            height: 380px;
          }
          .hero-orb-3 {
            width: 540px;
            height: 540px;
          }
        }
        /* Mobile: tighter letter-spacing, full-width CTA buttons */
        @media (max-width: 767px) {
          .hero-h1 {
            letter-spacing: -0.02em !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @keyframes heroOrbFloat1 {
          0%   { transform: translate(-50%, -50%); }
          33%  { transform: translate(calc(-50% + 30px), calc(-50% - 20px)); }
          66%  { transform: translate(calc(-50% - 20px), calc(-50% + 15px)); }
          100% { transform: translate(-50%, -50%); }
        }
        @keyframes heroOrbFloat2 {
          0%   { transform: translateY(0) translateX(0); }
          40%  { transform: translateY(-24px) translateX(12px); }
          70%  { transform: translateY(10px) translateX(-8px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes heroOrbFloat3 {
          0%   { transform: translateY(0) translateX(0); }
          50%  { transform: translateY(-18px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes heroOrbFloat1 { 0%, 100% { transform: translate(-50%, -50%); } }
          @keyframes heroOrbFloat2 { 0%, 100% { transform: none; } }
          @keyframes heroOrbFloat3 { 0%, 100% { transform: none; } }
          @keyframes heroScrollBounce { 0%, 100% { transform: none; } }
        }
      `}</style>

      {/* Content */}
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
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '32px',
          }}
        >
          {/* Section label */}
          <motion.div variants={FADE_UP}>
            <SectionLabel>VERDORIAN TECHNOLOGIES · EST. 2026</SectionLabel>
          </motion.div>

          {/* H1 with letter-by-letter reveal */}
          <motion.h1
            variants={FADE_UP}
            className="hero-h1"
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: 'var(--t-hero)',
              lineHeight: 1.05,
              letterSpacing: 'var(--track-hero)',
              textWrap: 'balance',
              margin: 0,
              textShadow: '0 0 60px rgba(139, 92, 246, 0.15), 0 0 120px rgba(139, 92, 246, 0.05)',
            }}
            aria-label="We don't consult. We create. Then we ship."
          >
            <span
              style={{
                display: 'block',
                color: 'var(--c-text-1)',
              }}
            >
              <LetterReveal text="We don't consult." baseDelay={0.4} />
            </span>
            <span style={{ display: 'block' }}>
              <GradientText>
                <LetterReveal text="We create." baseDelay={1.0} />
              </GradientText>
            </span>
            <span
              style={{
                display: 'block',
                color: 'var(--c-text-1)',
              }}
            >
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
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
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
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '100%',
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
              Get in touch
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              color: 'var(--c-text-3)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              animation: 'heroScrollBounce 2s ease-in-out infinite',
              color: 'var(--c-text-3)',
            }}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
