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

// ─── Gradient Mesh Visual ─────────────────────────────────────────────────────
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
      {/* Blob 1 — vivid violet */}
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
      {/* Blob 2 — hot pink */}
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
      {/* Blob 4 — Facebook blue */}
      <div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(24,119,242,0.20) 0%, transparent 70%)',
          top: '30%',
          right: '20%',
          filter: 'blur(45px)',
          animation: 'meshDrift2 25s ease-in-out infinite',
        }}
      />

      {/* ── Creative floating elements — showcase dev skills ── */}

      {/* Float 1 — Animated terminal/IDE window */}
      <motion.div
        className="hero-float"
        animate={{ y: [0, -14, 0], rotate: [-1.5, 1, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          background: 'rgba(20,20,35,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '12px',
          padding: '0',
          boxShadow: '0 12px 40px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.06)',
          zIndex: 5,
          width: '220px',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        {/* Title bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28C840' }} />
          <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.30)', marginLeft: '6px', fontFamily: 'var(--font-jetbrains), monospace' }}>app.tsx</span>
        </div>
        {/* Code lines */}
        <div style={{ padding: '10px 12px', fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', lineHeight: 1.7 }}>
          <div><span style={{ color: '#C792EA' }}>import</span><span style={{ color: '#A6ACCD' }}> {'{ AI }'} </span><span style={{ color: '#C792EA' }}>from</span><span style={{ color: '#C3E88D' }}> &apos;brain&apos;</span></div>
          <div><span style={{ color: '#C792EA' }}>import</span><span style={{ color: '#A6ACCD' }}> {'{ Ship }'} </span><span style={{ color: '#C792EA' }}>from</span><span style={{ color: '#C3E88D' }}> &apos;fast&apos;</span></div>
          <div style={{ marginTop: '4px' }}><span style={{ color: '#82AAFF' }}>export</span> <span style={{ color: '#FFCB6B' }}>default</span> <span style={{ color: '#82AAFF' }}>function</span> <span style={{ color: '#A6ACCD' }}>() {'{'}</span></div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ color: '#89DDFF', paddingLeft: '12px' }}
          >
            return &lt;<span style={{ color: '#F07178' }}>Magic</span> /&gt;
          </motion.div>
          <div><span style={{ color: '#A6ACCD' }}>{'}'}</span></div>
        </div>
      </motion.div>

      {/* Float 2 — Phone mockup with app UI */}
      <motion.div
        className="hero-float"
        animate={{ y: [0, -10, 0], rotate: [2, -1, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '18%',
          right: '8%',
          background: 'rgba(255,255,255,0.60)',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.50)',
          borderRadius: '24px',
          padding: '8px',
          boxShadow: '0 16px 48px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.60)',
          zIndex: 5,
          width: '120px',
          userSelect: 'none',
        }}
      >
        {/* Phone screen */}
        <div style={{ background: 'rgba(20,20,35,0.90)', borderRadius: '18px', padding: '12px 10px', minHeight: '160px' }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>
            <span>9:41</span>
            <div style={{ display: 'flex', gap: '3px' }}>
              <div style={{ width: '12px', height: '6px', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.4)' }}>
                <div style={{ width: '8px', height: '100%', borderRadius: '1px', background: '#10B981' }} />
              </div>
            </div>
          </div>
          {/* Mini card inside phone */}
          <div style={{ background: 'rgba(139,92,246,0.15)', borderRadius: '10px', padding: '8px', marginBottom: '6px' }}>
            <div style={{ width: '60%', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.30)', marginBottom: '4px' }} />
            <div style={{ width: '80%', height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)' }} />
          </div>
          <div style={{ background: 'rgba(34,211,238,0.12)', borderRadius: '10px', padding: '8px', marginBottom: '6px' }}>
            <div style={{ width: '50%', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.25)', marginBottom: '4px' }} />
            <div style={{ width: '70%', height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.12)' }} />
          </div>
          {/* Mini record button */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', margin: '8px auto 0', boxShadow: '0 0 12px rgba(139,92,246,0.4)' }}
          />
        </div>
      </motion.div>

      {/* Float 3 — Deployment pipeline */}
      <motion.div
        className="hero-float"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(8px) saturate(160%)',
          WebkitBackdropFilter: 'blur(8px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.45)',
          borderRadius: '14px',
          padding: '12px 16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.50)',
          zIndex: 5,
          userSelect: 'none',
        }}
      >
        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--c-text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>DEPLOY PIPELINE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {['Build', 'Test', 'Ship'].map((step, i) => (
            <React.Fragment key={step}>
              <motion.div
                animate={{ scale: [1, 1.2, 1], background: ['rgba(16,185,129,0.15)', 'rgba(16,185,129,0.40)', 'rgba(16,185,129,0.15)'] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                style={{ padding: '3px 8px', borderRadius: '6px', fontSize: '9px', fontWeight: 600, color: '#059669', border: '1px solid rgba(16,185,129,0.20)' }}
              >
                {step}
              </motion.div>
              {i < 2 && <span style={{ color: 'var(--c-text-3)', fontSize: '10px' }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Float 4 — Live activity pulse */}
      <motion.div
        className="hero-float"
        animate={{ y: [0, -6, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '28%',
          right: '32%',
          background: 'rgba(255,255,255,0.52)',
          backdropFilter: 'blur(8px) saturate(160%)',
          WebkitBackdropFilter: 'blur(8px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.42)',
          borderRadius: '12px',
          padding: '10px 14px',
          boxShadow: '0 6px 20px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.45)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          userSelect: 'none',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px rgba(16,185,129,0.6)' }}
        />
        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--c-text-1)' }}>Shipping daily</span>
      </motion.div>
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
                With 7 years in construction safety and OSHA compliance, I design, build, and ship AI systems that automate inspections and workflows contractors actually use.
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
