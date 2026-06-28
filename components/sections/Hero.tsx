'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
    label: 'Data Collected',
    status: 'Sales, emails, forms, invoices & tasks connected',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10m0 0l-3.6-3.6M12 13l3.6-3.6" {...STROKE} /><path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" {...STROKE} /></svg>
    ),
  },
  {
    label: 'AI Organizes',
    status: 'Data cleaned, sorted & updated automatically',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" {...STROKE} /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Smart Dashboard',
    status: 'Live numbers shown in one simple view',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2" {...STROKE} /><path d="M7.5 15.5v-3M11 15.5v-6M14.5 15.5v-4" {...STROKE} /></svg>
    ),
  },
  {
    label: 'AI Insights',
    status: 'Trends, problems & opportunities detected',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16l4.5-5 3.5 3 6-7.5" {...STROKE} /><path d="M16 6.5h2.5V9" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Human Decision',
    status: 'Owner or team reviews what matters',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" {...STROKE} /><path d="M5.5 20a6.5 6.5 0 0113 0" {...STROKE} /><path d="M15.5 13.5l1.6 1.6 3-3.2" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Action Taken',
    status: 'Follow-up, report, alert or task created',
    done: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2.5L5.5 13H11l-1 8.5L18.5 10H13z" {...STROKE} /></svg>
    ),
  },
]

// Binary that flows along each connector (duplicated so the loop is seamless).
const BINARY_BASE = '0110100101100001'
const BINARY_STREAM = BINARY_BASE + BINARY_BASE

function FlowConnector({ i }: { i: number }) {
  return (
    <span className="flow-conn" style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
      <span className="flow-binary"><span>{BINARY_STREAM}</span></span>
    </span>
  )
}

export default function Hero() {
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
          animation: neonPowerOn 4s ease-in-out both;
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
          0%   { opacity: 0;    filter: brightness(0.7) blur(3px) drop-shadow(0 0 0 transparent); }
          20%  { opacity: 0.9;  filter: brightness(1.3) blur(1px) hue-rotate(-60deg) drop-shadow(0 0 16px rgba(255,0,170,0.6)); }  /* dreamy magenta bloom */
          40%  { opacity: 1;    filter: brightness(1.32) blur(0.4px) hue-rotate(95deg) drop-shadow(0 0 18px rgba(0,225,255,0.6)); } /* cyan */
          60%  { opacity: 1;    filter: brightness(1.28) hue-rotate(-30deg) drop-shadow(0 0 18px rgba(150,80,255,0.55)); }          /* violet */
          80%  { opacity: 1;    filter: brightness(1.16) hue-rotate(18deg) drop-shadow(0 0 14px rgba(24,119,242,0.55)); }           /* settling into blue */
          100% { opacity: 1;    filter: brightness(1) blur(0) drop-shadow(0 0 0 transparent); }
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

        /* ── Command-center flow rail ── */
        .flow-rail { display: flex; flex-direction: row; align-items: flex-start; justify-content: center; gap: 0; flex-wrap: nowrap; }
        .flow-step { display: flex; flex-direction: column; align-items: center; gap: 9px; flex: 0 0 auto; text-align: center; max-width: 128px; }
        .flow-conn {
          position: relative;
          flex: 1 1 auto;
          align-self: flex-start;
          min-width: 22px;
          max-width: 64px;
          height: 2px;
          margin-top: 17px;
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
        .flow-label { font-family: var(--font-body), sans-serif; font-weight: 700; font-size: 12.5px; color: var(--ink); white-space: nowrap; }
        .flow-status { font-family: var(--font-body), sans-serif; font-size: 9px; letter-spacing: 0.05em; line-height: 1.45; text-transform: uppercase; color: var(--ink-faint); }

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
        }
        @media (min-width: 861px) {
          .flow-step .flow-text { display: flex; flex-direction: column; gap: 3px; align-items: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-binary > span, .flow-step .vd-node, .flow-conn::after { animation: none !important; }
          .flow-conn::after { opacity: 0; }
        }
      `}</style>

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

        {/* Studio credit line */}
        <motion.p
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            letterSpacing: '0.04em',
            color: 'var(--ink-soft)',
            margin: '-14px 0 0',
          }}
        >
          — with <span style={{ color: 'var(--gold)' }}>Verdorian AI Studio</span>
        </motion.p>

        {/* Subhead */}
        <motion.p
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontWeight: 500,
            fontSize: 'clamp(20px, 1.85vw, 25px)',
            color: 'var(--ink)',
            maxWidth: '44ch',
            lineHeight: 1.5,
            letterSpacing: '0',
            margin: 0,
            textWrap: 'balance',
          } as React.CSSProperties}
        >
          <span style={{ display: 'block' }}>
            Let us autopilot your busywork&mdash;
          </span>
          <span style={{ display: 'block', marginTop: '4px' }}>
            <span
              style={{
                fontWeight: 600,
                padding: '0.04em 0.18em',
                background:
                  'linear-gradient(180deg, transparent 0 56%, rgba(24,119,242,0.18) 56% 94%, transparent 94%)',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
                borderRadius: '2px',
              } as React.CSSProperties}
            >
              so you can grow your business and enjoy your life.
            </span>
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={FADE_UP} className="hero-cta-row" style={{ marginTop: '4px' }}>
          <GlowButton variant="blue" size="lg" onClick={() => scrollToSection('contact')}>
            Get Free Automation Audit
          </GlowButton>
        </motion.div>

        {/* Micro-trust line */}
        <motion.div
          variants={FADE_UP}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            flexWrap: 'wrap',
            margin: '-6px 0 0',
            maxWidth: '56ch',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M13 2.5L5.5 13H11l-1 8.5L18.5 10H13z" fill="none" stroke="var(--gold)" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '13.5px', lineHeight: 1.5, color: 'var(--ink-faint)' }}>
            Tell us one task you repeat every week —{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>we&apos;ll show you what can be automated.</span>
          </span>
        </motion.div>

        {/* ── Command-center workflow visual (iOS 3D scroll tilt) ── */}
        <motion.div
          variants={FADE_UP}
          className="figure-halo"
          aria-label="A sample business-intelligence automation: data from sales, emails, forms, invoices and tasks is collected, AI organizes it, a smart dashboard shows live numbers, AI surfaces insights, a human makes the decision, and the right action is taken."
          style={{ width: '100%', marginTop: '34px' }}
        >
          <div className="glass-card" style={{ padding: '30px 26px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '11px' }}>
                  <span className="vd-dot" />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
                      Sample automation workflow
                    </span>
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--ink)' }}>
                      Business Intelligence Automation
                    </span>
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
    </section>
  )
}
