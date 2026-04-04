'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Verdorian Technologies"
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
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
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
          }}
          className="lg:grid-cols-[3fr_2fr]"
        >
          {/* Left column */}
          <motion.div variants={FADE_UP} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionLabel>ABOUT US</SectionLabel>

            <h2
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                color: 'var(--c-text-1)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Engineering Tomorrow&apos;s Technology
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '17px',
                color: 'var(--c-text-2)',
                lineHeight: 1.7,
                maxWidth: '540px',
                margin: 0,
              }}
            >
              Verdorian Technologies is an indie software studio based in
              Clarksville, Tennessee. We specialize in building mobile
              applications, AI-powered tools, and SaaS platforms that solve
              real-world problems. From concept to deployment, we craft every
              pixel and every line of code with precision.
            </p>

            {/* Stat callouts */}
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  borderLeft: '3px solid var(--c-plasma)',
                  paddingLeft: '16px',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'var(--c-text-1)',
                  }}
                >
                  5 Products. One Builder.
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    color: 'var(--c-text-2)',
                    lineHeight: 1.5,
                  }}
                >
                  Every product is owner-designed, owner-coded, owner-deployed.
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  borderLeft: '3px solid var(--c-plasma)',
                  paddingLeft: '16px',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'var(--c-text-1)',
                  }}
                >
                  AI-Native from Day One
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    color: 'var(--c-text-2)',
                    lineHeight: 1.5,
                  }}
                >
                  Every product ships with AI as a core feature, not an afterthought.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column — Orbital art */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <OrbitalArt />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .orbital-art-container {
            width: 220px !important;
            height: 220px !important;
          }
        }
        @keyframes orbitSpin1 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbitSpin2 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes orbitSpin1 { 0%, 100% { transform: translate(-50%, -50%); } }
          @keyframes orbitSpin2 { 0%, 100% { transform: translate(-50%, -50%); } }
        }
      `}</style>
    </section>
  )
}

// ─── Orbital Art ──────────────────────────────────────────────────────────────
function OrbitalArt() {
  const pills = ['TN LLC', 'Est. 2026', 'AI-Native']

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="orbital-art-container"
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '0 auto',
      }}
    >
      {/* Outer ring */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '9999px',
          border: '2px dashed rgba(139,92,246,0.3)',
          animation: 'orbitSpin1 20s linear infinite',
        }}
      >
        {/* Pills on outer ring */}
        {pills.map((label, i) => {
          const angle = (i * 120) * (Math.PI / 180)
          const r = 120
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r
          return (
            <div
              key={label}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(calc(-1 * var(--spin-angle, 0deg)))`,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--c-forge)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'var(--c-text-2)',
                  whiteSpace: 'nowrap',
                  animation: 'orbitSpin2 20s linear infinite',
                }}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Inner ring */}
      <div
        style={{
          position: 'absolute',
          width: '160px',
          height: '160px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '9999px',
          border: '2px dashed rgba(34,211,238,0.4)',
          animation: 'orbitSpin2 12s linear infinite',
        }}
      />

      {/* Core hexagon */}
      <div
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, var(--c-plasma), var(--c-arc))',
          animation: 'corePulse 3s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes corePulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.8; transform: translate(-50%, -50%) scale(0.92); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes corePulse { 0%, 100% { transform: translate(-50%, -50%) scale(1); } }
        }
      `}</style>
    </div>
  )
}
