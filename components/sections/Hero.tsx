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
    label: 'Task In',
    status: 'Captured',
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" {...STROKE} /><path d="M4 7l8 6 8-6" {...STROKE} /></svg>
    ),
  },
  {
    label: 'AI Workflow',
    status: 'AI processes',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" {...STROKE} /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Human Review',
    status: 'You approve',
    accent: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" {...STROKE} /><path d="M5.5 20a6.5 6.5 0 0113 0" {...STROKE} /><path d="M15.5 13.5l1.6 1.6 3-3.2" {...STROKE} /></svg>
    ),
  },
  {
    label: 'Done',
    status: 'Complete',
    done: true,
    glyph: (
      <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" {...STROKE} /><path d="M8.2 12.2l2.6 2.6 5-5.2" {...STROKE} /></svg>
    ),
  },
]

function FlowConnector() {
  return <span className="flow-conn" aria-hidden="true" />
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
        @keyframes connMove { to { background-position: -16px 0; } }
        @keyframes connMoveV { to { background-position: 0 -16px; } }

        .hero-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        .hero-cta-row { display: flex; flex-direction: row; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }

        /* ── Command-center flow rail ── */
        .flow-rail {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 0;
          flex-wrap: nowrap;
        }
        .flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          flex: 0 0 auto;
          text-align: center;
        }
        .flow-conn {
          flex: 1 1 auto;
          align-self: center;
          min-width: 22px;
          max-width: 64px;
          height: 2px;
          margin-top: -26px;
          background-image: repeating-linear-gradient(90deg, var(--gold) 0 5px, transparent 5px 11px);
          background-size: 16px 2px;
          background-repeat: repeat-x;
          opacity: 0.6;
          animation: connMove 0.9s linear infinite;
        }
        .flow-label { font-family: var(--font-body), sans-serif; font-weight: 600; font-size: 12.5px; color: var(--ink); white-space: nowrap; }
        .flow-status { font-family: var(--font-body), sans-serif; font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); white-space: nowrap; }

        @media (max-width: 860px) {
          .flow-rail { flex-direction: column; align-items: center; }
          .flow-step { flex-direction: row; gap: 13px; width: 100%; max-width: 280px; text-align: left; justify-content: flex-start; }
          .flow-step .flow-text { display: flex; flex-direction: column; gap: 2px; align-items: flex-start; }
          .flow-conn {
            width: 2px; height: 18px; min-width: 0; max-width: none; margin-top: 0; margin-left: 19px;
            background-image: repeating-linear-gradient(180deg, var(--gold) 0 5px, transparent 5px 11px);
            background-size: 2px 16px; background-repeat: repeat-y;
            animation: connMoveV 0.9s linear infinite;
          }
        }
        @media (min-width: 861px) {
          .flow-step .flow-text { display: flex; flex-direction: column; gap: 3px; align-items: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-conn { animation: none !important; }
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
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
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

        {/* ── Command-center workflow visual ── */}
        <motion.div
          variants={FADE_UP}
          className="figure-halo"
          aria-label="How an automated workflow runs: a task comes in, the AI workflow processes it, a human reviews and approves, and the workflow completes."
          style={{ width: '100%', marginTop: '34px' }}
        >
          <div
            className="glass-card"
            style={{ padding: '30px 26px', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                <span className="vd-dot" />
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                  Live workflow
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
                    <span className={step.accent ? 'vd-node vd-node-accent' : 'vd-node'} style={{ borderRadius: '13px' }}>
                      <span style={{ color: step.done ? 'var(--green-pass)' : 'var(--gold)', display: 'inline-flex' }}>{step.glyph}</span>
                      <span className={step.done ? 'vd-dot vd-dot-done' : 'vd-dot'} />
                    </span>
                    <span className="flow-text">
                      <span className="flow-label">{step.label}</span>
                      <span className="flow-status">{step.status}</span>
                    </span>
                  </div>
                  {i < STEPS.length - 1 && <FlowConnector />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
