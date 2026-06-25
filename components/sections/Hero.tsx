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
    label: 'Missed Call',
    status: 'After hours',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4h-2A1.5 1.5 0 003 5.6 15 15 0 0018.4 21 1.5 1.5 0 0020 19.5v-2a1 1 0 00-.7-1l-3-1a1 1 0 00-1 .3l-1 1.2a11.5 11.5 0 01-5.3-5.3l1.2-1a1 1 0 00.3-1l-1-3a1 1 0 00-1-.7z" {...STROKE} /><path d="M15.5 3.5l4.5 4.5M20 3.5l-4.5 4.5" {...STROKE} /></svg>
    ),
  },
  {
    label: 'AI Texts Back',
    status: 'Replies in seconds',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 3v-3H6a2 2 0 01-2-2z" {...STROKE} /><path d="M8.5 8.8h7M8.5 11.4h4.5" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Checks Calendar',
    status: 'Finds open slot',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" {...STROKE} /><path d="M3.5 9.5h17M8 3.2v3.4M16 3.2v3.4" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Books the Job',
    status: 'Added to schedule',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" {...STROKE} /><path d="M3.5 9.5h17M8 3.2v3.4M16 3.2v3.4M9 14.8l2 2 4-4" {...STROKE} /></svg>
    ),
  },
  {
    label: 'You Approve',
    status: 'One-tap confirm',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" {...STROKE} /><path d="M5.5 20a6.5 6.5 0 0113 0" {...STROKE} /><path d="M15.5 13.5l1.6 1.6 3-3.2" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Customer Booked',
    status: 'Lead saved',
    done: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" {...STROKE} /><path d="M8.2 12.2l2.6 2.6 5-5.2" {...STROKE} /></svg>
    ),
  },
]

// Binary that flows along each connector (duplicated so the loop is seamless).
const BINARY_BASE = '0110100101100001'
const BINARY_STREAM = BINARY_BASE + BINARY_BASE

// AI-automation "data stream" — readable HORIZONTAL lines on the right that fade in,
// hold fully visible, then fade out. Staggered so ~5 show at once with vertical gaps.
// Each line rotates its horizontal lane (right → middle → left) on every reappearance.
// Deterministic, SSR-safe.
const MATRIX_LANES = [0, 38, 76] // px shifted left from the right edge, cycled per repeat
const MATRIX_LINES = [
  { top: 9,  dur: 9,   delay: 0,   text: 'Built with AI. Designed around your business.' },
  { top: 16, dur: 11,  delay: 3.4, text: 'Automate the work that slows you down.' },
  { top: 23, dur: 10,  delay: 6.2, text: 'Your workflow, your way — smarter, faster.' },
  { top: 31, dur: 12,  delay: 1.6, text: 'Repetitive tasks become reliable automation.' },
  { top: 38, dur: 9.5, delay: 4.8, text: 'Less manual work. More time to grow.' },
  { top: 45, dur: 11,  delay: 7.5, text: 'Automation that fits how your team works.' },
  { top: 52, dur: 10,  delay: 2.6, text: 'Reclaim time. Reduce mistakes. Move faster.' },
  { top: 59, dur: 12,  delay: 5.5, text: 'Your partner for a smarter, simpler business.' },
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

  // Each data-stream line jumps to the next horizontal lane on every repeat (while invisible).
  const cycleLane = React.useCallback((e: React.AnimationEvent<HTMLSpanElement>) => {
    const el = e.currentTarget
    const next = (Number(el.dataset.lane ?? '0') + 1) % MATRIX_LANES.length
    el.dataset.lane = String(next)
    el.style.transform = `translateX(-${MATRIX_LANES[next]}px)`
  }, [])

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
        @keyframes lineType {
          0%   { clip-path: inset(0 0 0 100%); }   /* hidden — reveal will sweep in from the right */
          30%  { clip-path: inset(0 0 0 0%); }     /* whole sentence revealed (right → left) */
          60%  { clip-path: inset(0 0 0 0%); }     /* hold, fully readable */
          88%  { clip-path: inset(0 100% 0 0); }   /* erased away letter-by-letter (right → left) */
          100% { clip-path: inset(0 100% 0 0); }   /* hidden gap before next cycle */
        }

        .hero-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        /* ── iOS-26 Liquid Glass chip badge ── */
        .hero-badge {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 10px 22px;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.20) 100%),
            radial-gradient(120% 160% at 18% 0%, rgba(111,176,255,0.18) 0%, rgba(255,255,255,0) 60%);
          -webkit-backdrop-filter: blur(20px) saturate(185%) brightness(1.08);
                  backdrop-filter: blur(20px) saturate(185%) brightness(1.08);
          box-shadow:
            0 1px 1px rgba(255,255,255,0.95) inset,
            0 -6px 14px -8px rgba(24,119,242,0.18) inset,
            0 10px 26px -12px rgba(24,119,242,0.42),
            0 3px 10px -5px rgba(15,23,42,0.16);
          animation: neonPowerOn 1.9s ease-out both;
        }
        /* refractive gradient edge */
        .hero-badge::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(24,119,242,0.30) 38%, rgba(255,255,255,0.10) 64%, rgba(111,176,255,0.65) 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
        }
        /* slow liquid specular sweep */
        .hero-badge::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          background: linear-gradient(115deg, transparent 36%, rgba(255,255,255,0.6) 50%, transparent 64%);
          background-size: 220% 100%;
          background-position: 135% 0;
          animation: badgeSheen 7s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }
        .hero-badge > * { position: relative; z-index: 3; }
        @keyframes badgeSheen {
          0%        { background-position: 135% 0; }
          55%, 100% { background-position: -55% 0; }
        }
        /* Neon-sign power-on: flickers awake, then settles to the stable glass pill (plays once on load) */
        @keyframes neonPowerOn {
          0%   { opacity: 0;    filter: brightness(0.4); }
          6%   { opacity: 0.9;  filter: brightness(1.55); }
          9%   { opacity: 0.12; filter: brightness(0.5); }
          14%  { opacity: 1;    filter: brightness(1.6); }
          17%  { opacity: 0.22; filter: brightness(0.55); }
          22%  { opacity: 1;    filter: brightness(1.4); }
          25%  { opacity: 0.45; filter: brightness(0.8); }
          31%  { opacity: 1;    filter: brightness(1.6); }
          35%  { opacity: 0.7;  filter: brightness(1.05); }
          41%  { opacity: 1;    filter: brightness(1.3); }
          47%  { opacity: 0.9;  filter: brightness(1.06); }
          100% { opacity: 1;    filter: brightness(1); }
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
          .hero-badge { animation: none !important; }
          .hero-badge-dot { animation: none; }
          .hero-badge::after { animation: none; opacity: 0; }
        }
        .hero-cta-row { display: flex; flex-direction: row; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }

        /* ── AI data-stream — readable horizontal lines, RIGHT side, clear of the headline ── */
        .matrix-rain {
          position: absolute;
          top: 0; bottom: 0; right: 0; left: 64%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 18%, #000 100%), linear-gradient(180deg, transparent 0%, #000 8%, #000 56%, transparent 70%);
                  mask-image: linear-gradient(90deg, transparent 0%, #000 18%, #000 100%), linear-gradient(180deg, transparent 0%, #000 8%, #000 56%, transparent 70%);
          -webkit-mask-composite: source-in;
                  mask-composite: intersect;
        }
        .matrix-line {
          position: absolute;
          right: 30px;
          white-space: nowrap;
          font-family: var(--font-body), sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(34, 112, 230, 0.92);
          text-shadow: 0 0 10px rgba(76, 154, 255, 0.45);
          clip-path: inset(0 0 0 100%);
          will-change: clip-path, transform;
          animation-name: lineType;
          animation-timing-function: ease-in-out;
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
        @media (max-width: 1240px) {
          .matrix-rain { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-binary > span, .flow-step .vd-node, .flow-conn::after, .matrix-line { animation: none !important; }
          .flow-conn::after { opacity: 0; }
          .matrix-line { opacity: 0.3; clip-path: inset(0 0 0 0) !important; }
        }
      `}</style>

      {/* AI data-stream backdrop — horizontal readable lines */}
      <div className="matrix-rain" aria-hidden="true">
        {MATRIX_LINES.map((l, i) => {
          const lane = i % MATRIX_LANES.length
          return (
            <span
              key={i}
              className="matrix-line"
              data-lane={lane}
              onAnimationIteration={cycleLane}
              style={{
                top: `${l.top}%`,
                transform: `translateX(-${MATRIX_LANES[lane]}px)`,
                animationDuration: `${l.dur}s`,
                animationDelay: `${l.delay}s`,
              }}
            >
              {l.text}
            </span>
          )
        })}
      </div>

      <motion.div
        className="hero-wrap"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px', textAlign: 'center' }}
      >
        {/* Eyebrow — modern glass chip (neon power-on entrance) */}
        <div>
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">
              <span className="hero-badge-hl">Smart</span> Automation for Growing Businesses
            </span>
          </span>
        </div>

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
          aria-label="A sample automation: a customer's call is missed after hours, AI texts them back in seconds, checks your calendar, books the job, you approve in one tap, and the customer is booked — no lead lost."
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
