'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// ─── Command-center flow steps ────────────────────────────────────────────────
interface FlowStep {
  label: string
  status: string
  glyph: React.ReactNode
  accent?: boolean
  done?: boolean
}

const STROKE = { stroke: 'currentColor', strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const STEPS: FlowStep[] = [
  {
    label: 'Email / Form',
    status: 'Task captured',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" {...STROKE} /><path d="M4 7l8 6 8-6" {...STROKE} /></svg>
    ),
  },
  {
    label: 'AI Agent',
    status: 'AI reads',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" {...STROKE} /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...STROKE} /></svg>
    ),
  },
  {
    label: 'CRM / Database',
    status: 'Data updated',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3" {...STROKE} /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Dashboard',
    status: 'Report generated',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M9 20V4M14 20v-7M19 20v-11" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Human Review',
    status: 'Human approved',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" {...STROKE} /><path d="M5.5 20a6.5 6.5 0 0113 0" {...STROKE} /><path d="M15.5 13.5l1.6 1.6 3-3.2" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Done',
    status: 'Workflow complete',
    done: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" {...STROKE} /><path d="M8.2 12.2l2.6 2.6 5-5.2" {...STROKE} /></svg>
    ),
  },
]

// Binary that flows along each connector (duplicated so the loop is seamless).
const BINARY_BASE = '0110100101100001'
const BINARY_STREAM = BINARY_BASE + BINARY_BASE

// Faint matrix digital-rain columns behind the hero (deterministic — no Math.random, SSR-safe).
const MATRIX_COLUMNS = [
  { left: 3,  dur: 8.5,  delay: 0,   chars: '01001011010010110100101101001011010010' },
  { left: 11, dur: 11,   delay: 1.6, chars: '11010010110100101101001011010010110100' },
  { left: 19, dur: 9.5,  delay: 0.8, chars: '01101001011000010110100101100001011010' },
  { left: 27, dur: 12.5, delay: 2.4, chars: '10010110100101101001011010010110100101' },
  { left: 35, dur: 7.5,  delay: 0.3, chars: '01011010010110100101101001011010010110' },
  { left: 43, dur: 10.5, delay: 1.1, chars: '11001010110010101100101011001010110010' },
  { left: 51, dur: 9,    delay: 2.0, chars: '01101001011010010110100101101001011010' },
  { left: 59, dur: 12,   delay: 0.6, chars: '10110100101101001011010010110100101101' },
  { left: 67, dur: 8,    delay: 1.9, chars: '01001011010010110100101101001011010010' },
  { left: 75, dur: 11.5, delay: 0.4, chars: '11010010110100101101001011010010110100' },
  { left: 83, dur: 9.8,  delay: 2.7, chars: '01100001011010010110000101101001011000' },
  { left: 91, dur: 10,   delay: 1.3, chars: '10010110100101101001011010010110100101' },
]

function FlowConnector({ i }: { i: number }) {
  return (
    <span className="flow-conn" style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
      <span className="flow-binary"><span>{BINARY_STREAM}</span></span>
    </span>
  )
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // iOS-style 3D scroll: the workflow card tilts back as it rises, flattening at center.
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const rotateXRaw = useTransform(scrollYProgress, [0, 0.45, 1], [7, 0, -4])
  const rotateX = reduce ? 0 : rotateXRaw

  return (
    <section
      id="hero"
      aria-label="Hero — Verdorian AI Automation Studio"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--paper)',
        paddingTop: '150px',
        paddingBottom: '104px',
      }}
    >
      <style>{`
        @keyframes binaryFlow { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes connCometV {
          0%   { top: -5px; opacity: 0; transform: scale(0.5); }
          15%  { opacity: 1; transform: scale(1); }
          85%  { opacity: 1; transform: scale(1); }
          100% { top: calc(100% - 5px); opacity: 0; transform: scale(0.5); }
        }
        @keyframes nodeWave {
          0%, 64%, 100% { transform: translateY(0) scale(1); filter: brightness(1); }
          12%           { transform: translateY(-3px) scale(1.06); filter: brightness(1.14); }
        }
        @keyframes matrixFall { from { transform: translateY(-60%); } to { transform: translateY(150%); } }

        .hero-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
        .hero-cta-row { display: flex; flex-direction: row; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }

        /* ── Matrix digital-rain backdrop (faint, behind content) ── */
        .matrix-rain {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          -webkit-mask-image: radial-gradient(ellipse 88% 76% at 50% 24%, #000 0%, rgba(0,0,0,0.55) 50%, transparent 80%);
                  mask-image: radial-gradient(ellipse 88% 76% at 50% 24%, #000 0%, rgba(0,0,0,0.55) 50%, transparent 80%);
        }
        .matrix-col {
          position: absolute;
          top: 0;
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-family: ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: 13px;
          letter-spacing: 3px;
          line-height: 1.18;
          color: rgba(24, 119, 242, 0.17);
          white-space: nowrap;
          user-select: none;
          filter: blur(0.2px);
          animation-name: matrixFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* ── Command-center flow rail ── */
        .flow-rail { display: flex; flex-direction: row; align-items: stretch; justify-content: center; gap: 0; flex-wrap: nowrap; }
        .flow-step { display: flex; flex-direction: column; align-items: center; gap: 9px; flex: 0 0 auto; text-align: center; }
        .flow-conn {
          position: relative;
          flex: 1 1 auto;
          align-self: center;
          min-width: 28px;
          max-width: 76px;
          height: 2px;
          margin-top: -26px;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(24,119,242,0.10), rgba(24,119,242,0.30) 50%, rgba(24,119,242,0.10));
        }
        .flow-binary {
          position: absolute;
          top: 50%; left: 0; right: 0;
          height: 12px;
          transform: translateY(-50%);
          overflow: hidden;
          pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 24%, #000 76%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 24%, #000 76%, transparent);
        }
        .flow-binary > span {
          position: absolute; left: 0; top: 0;
          white-space: nowrap;
          font-family: ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: 9px;
          line-height: 12px;
          letter-spacing: 1.5px;
          color: var(--gold);
          opacity: 0.9;
          animation: binaryFlow 2.6s linear infinite;
          animation-delay: calc(var(--i, 0) * -0.5s);
        }
        .flow-step .vd-node {
          animation: nodeWave 2s var(--ease-glass) infinite;
          animation-delay: calc(var(--i, 0) * 0.4s);
          will-change: transform;
        }
        .flow-label { font-family: var(--font-body), sans-serif; font-weight: 600; font-size: 12.5px; color: var(--ink); white-space: nowrap; }
        .flow-status { font-family: var(--font-body), sans-serif; font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); white-space: nowrap; }

        @media (max-width: 860px) {
          .flow-rail { flex-direction: column; align-items: center; }
          .flow-step { flex-direction: row; gap: 13px; width: 100%; max-width: 280px; text-align: left; justify-content: flex-start; }
          .flow-step .flow-text { display: flex; flex-direction: column; gap: 2px; align-items: flex-start; }
          .flow-conn {
            width: 2px; height: 20px; min-width: 0; max-width: none; margin-top: 0; margin-left: 19px;
            background: linear-gradient(180deg, rgba(24,119,242,0.10), rgba(24,119,242,0.30) 50%, rgba(24,119,242,0.10));
          }
          .flow-binary { display: none; }
          .flow-conn::after {
            content: '';
            position: absolute; top: -5px; left: 50%;
            width: 14px; height: 14px; margin-left: -7px;
            border-radius: 50%; pointer-events: none;
            background: radial-gradient(circle, rgba(76,154,255,0.95) 0%, rgba(24,119,242,0.55) 38%, rgba(24,119,242,0) 72%);
            animation: connCometV 2s linear infinite;
            animation-delay: calc(var(--i, 0) * 0.4s);
          }
          .matrix-col { font-size: 11px; }
        }
        @media (min-width: 861px) {
          .flow-step .flow-text { display: flex; flex-direction: column; gap: 3px; align-items: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-binary > span, .flow-step .vd-node, .flow-conn::after, .matrix-col { animation: none !important; }
          .flow-conn::after { opacity: 0; }
        }
      `}</style>

      {/* Matrix digital-rain backdrop */}
      <div className="matrix-rain" aria-hidden="true">
        {MATRIX_COLUMNS.map((c, i) => (
          <span
            key={i}
            className="matrix-col"
            style={{ left: `${c.left}%`, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}
          >
            {c.chars}
          </span>
        ))}
      </div>

      <motion.div
        className="hero-wrap"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px', textAlign: 'center' }}
      >
        {/* Eyebrow */}
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span aria-hidden="true" style={{ width: '40px', height: '1px', background: 'var(--rule-strong)' }} />
          <span className="eyebrow">AI Automation Studio</span>
          <span aria-hidden="true" style={{ width: '40px', height: '1px', background: 'var(--rule-strong)' }} />
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={FADE_UP}
          className="hero-h1"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(36px, 5.6vw, 82px)',
            lineHeight: 1.06,
            letterSpacing: '0.005em',
            margin: 0,
            color: 'var(--ink)',
            maxWidth: '17ch',
          }}
        >
          AI Automation for{' '}
          <em className="gold-shimmer">Repetitive Business Work</em>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            color: 'var(--ink-soft)',
            maxWidth: '56ch',
            lineHeight: 1.66,
            margin: 0,
          }}
        >
          Verdorian builds custom AI workflows, dashboards, and internal tools that remove
          manual work, reduce errors, and help your team move faster.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={FADE_UP} className="hero-cta-row" style={{ marginTop: '4px' }}>
          <GlowButton variant="ink" size="lg" onClick={() => scrollToSection('contact')}>
            Get Free Automation Audit
          </GlowButton>
          <GlowButton variant="ghost" size="lg" onClick={() => scrollToSection('automate')}>
            See What We Automate
          </GlowButton>
        </motion.div>

        {/* Micro-trust line */}
        <motion.p
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '13px',
            lineHeight: 1.5,
            color: 'var(--ink-faint)',
            margin: '-10px 0 0',
            maxWidth: '52ch',
          }}
        >
          Tell us one task you repeat every week. We&apos;ll show you what can be automated.
        </motion.p>

        {/* ── Command-center workflow visual (iOS 3D scroll tilt) ── */}
        <motion.div
          variants={FADE_UP}
          className="figure-halo"
          aria-label="A sample automated workflow: a task is captured, an AI agent reads it, your database and dashboard update, a human approves, and the workflow completes."
          style={{ width: '100%', marginTop: '34px', perspective: '1400px' }}
        >
          <motion.div ref={cardRef} style={{ rotateX, transformStyle: 'preserve-3d', willChange: 'transform' }}>
            <div className="glass-card" style={{ padding: '30px 26px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                  <span className="vd-dot" />
                  <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                    Sample live workflow
                  </span>
                </span>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
                  Human-in-the-loop
                </span>
              </div>

              <div className="flow-rail">
                {STEPS.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className="flow-step">
                      <span className={step.accent ? 'vd-node vd-node-accent' : 'vd-node'} style={{ borderRadius: '13px', '--i': i } as React.CSSProperties}>
                        <span style={{ color: step.done ? 'var(--green-pass)' : 'var(--gold)', display: 'inline-flex' }}>{step.glyph}</span>
                        <span className={step.done ? 'vd-dot vd-dot-done' : 'vd-dot'} />
                      </span>
                      <span className="flow-text">
                        <span className="flow-label">{step.label}</span>
                        <span className="flow-status">{step.status}</span>
                      </span>
                    </div>
                    {i < STEPS.length - 1 && <FlowConnector i={i} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
