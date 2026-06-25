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

// Magical AI-automation "data rain" — bigger, slow, right-side only (clear of the headline).
// Mixes binary with automation tokens (AI / FLOW / RUN / BOT / API / code symbols). Deterministic, SSR-safe.
const MATRIX_COLUMNS = [
  { left: 4,  dur: 19, delay: 0,   chars: '01AI10<>1001{}10/01FLOW1001AI' },
  { left: 18, dur: 25, delay: 4,   chars: '1001{}01AI10<>10/0101RUN01100A' },
  { left: 31, dur: 21, delay: 1.5, chars: '0110AI1001<>01/10BOT0110AI0110' },
  { left: 45, dur: 28, delay: 6,   chars: '10/01FLOW1001{}01AI10<>1001API' },
  { left: 59, dur: 18, delay: 2.5, chars: '01<>1001AI10{}01/10RUN0101AI10' },
  { left: 73, dur: 23, delay: 3.5, chars: '1001AI01<>10/01{}10FLOW1001<>0' },
  { left: 88, dur: 26, delay: 5,   chars: '0101{}10AI01<>1001/10BOT01AI10' },
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
        @keyframes matrixFall { from { transform: translateY(-85%); } to { transform: translateY(165%); } }

        .hero-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        /* ── Modern glass chip badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.34);
          -webkit-backdrop-filter: blur(22px) saturate(1.7);
                  backdrop-filter: blur(22px) saturate(1.7);
          border: 1px solid rgba(24, 119, 242, 0.24);
          box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset, 0 6px 20px -10px rgba(24,119,242,0.35);
        }
        .hero-badge-dot {
          width: 8px; height: 8px; flex: 0 0 auto;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 0 0 rgba(24,119,242,0.5);
          animation: badgePulse 2.4s ease-out infinite;
        }
        @keyframes badgePulse {
          0%   { box-shadow: 0 0 0 0 rgba(24,119,242,0.45); }
          70%  { box-shadow: 0 0 0 8px rgba(24,119,242,0); }
          100% { box-shadow: 0 0 0 0 rgba(24,119,242,0); }
        }
        .hero-badge-text {
          font-family: var(--font-body), sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .hero-badge-hl {
          font-weight: 700;
          background: linear-gradient(100deg, var(--gold) 0%, var(--gold-bright) 45%, #6FB0FF 100%);
          -webkit-background-clip: text;
                  background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (max-width: 560px) {
          .hero-badge { padding: 8px 15px; gap: 8px; }
          .hero-badge-text { font-size: 11.5px; letter-spacing: 0.1em; white-space: normal; text-align: center; line-height: 1.55; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-badge-dot { animation: none; }
        }
        .hero-cta-row { display: flex; flex-direction: row; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }

        /* ── Magical AI data-rain — RIGHT side only, never under the headline text ── */
        .matrix-rain {
          position: absolute;
          top: 0; bottom: 0; right: 0; left: 70%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 40%, #000 100%), linear-gradient(180deg, transparent 0%, #000 14%, #000 80%, transparent 100%);
                  mask-image: linear-gradient(90deg, transparent 0%, #000 40%, #000 100%), linear-gradient(180deg, transparent 0%, #000 14%, #000 80%, transparent 100%);
          -webkit-mask-composite: source-in;
                  mask-composite: intersect;
        }
        .matrix-col {
          position: absolute;
          top: 0;
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-family: ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 2px;
          line-height: 1.16;
          white-space: nowrap;
          user-select: none;
          background: linear-gradient(to bottom, rgba(34,211,238,0) 0%, rgba(24,119,242,0.16) 38%, rgba(76,154,255,0.85) 86%, rgba(220,238,255,0.98) 100%);
          -webkit-background-clip: text;
                  background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 8px rgba(34,211,238,0.45));
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
          animation: binaryFlow 6s linear infinite;
          animation-delay: calc(var(--i, 0) * -1.2s);
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
          .matrix-rain { display: none; }
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
        {/* Eyebrow — modern glass chip */}
        <motion.div variants={FADE_UP}>
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">
              <span className="hero-badge-hl">Smart</span> Automation for Growing Businesses
            </span>
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={FADE_UP}
          className="hero-h1"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(38px, 5.4vw, 76px)',
            lineHeight: 1.08,
            letterSpacing: '0.005em',
            margin: 0,
            color: 'var(--ink)',
            maxWidth: 'none',
          }}
        >
          <span style={{ display: 'block' }}>Your daily tasks,</span>
          <em className="gold-shimmer" style={{ display: 'block' }}>fully automated.</em>
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
          Let AI handle the work so you can focus on what matters.
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
