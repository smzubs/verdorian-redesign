'use client'

import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — Verdorian Technologies"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--paper)',
        paddingTop: '144px',
        paddingBottom: '112px',
      }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .hero-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .hero-cta-row > * { width: 100% !important; }
        }
        @media (max-width: 767px) {
          .hero-content { padding-left: 20px !important; padding-right: 20px !important; }
          .hero-stats { flex-direction: column !important; gap: 0 !important; }
          .hero-stats .rule-v { display: none !important; }
          .hero-stat { border-top: 1px solid var(--rule); padding: 18px 0 !important; width: 100% !important; }
          .hero-stat:first-child { border-top: 0; }
        }
        @media (max-width: 860px) {
          .hero-devices { display: flex !important; flex-direction: column; align-items: center; }
          .hero-browser { max-width: 100% !important; }
          .hero-phone { position: static !important; right: auto !important; bottom: auto !important; width: 240px !important; margin: 28px auto 0 !important; }
        }
      `}</style>

      <motion.div
        className="hero-content"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        {/* Eyebrow */}
        <motion.div variants={FADE_UP} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span aria-hidden="true" style={{ width: '40px', height: '1px', background: 'var(--rule-strong)' }} />
          <span className="eyebrow">AI Automation Studio</span>
          <span aria-hidden="true" style={{ width: '40px', height: '1px', background: 'var(--rule-strong)' }} />
        </motion.div>

        {/* Masthead */}
        <motion.h1
          variants={FADE_UP}
          className="hero-h1"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 400,
            fontSize: 'var(--t-hero)',
            lineHeight: 1.02,
            letterSpacing: '-0.024em',
            margin: 0,
            color: 'var(--ink)',
            maxWidth: '14ch',
          }}
          aria-label="Automation you'll actually use."
        >
          Automation you&apos;ll{' '}
          <em className="gold-shimmer">actually use.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={FADE_UP}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 400,
            fontSize: '17px',
            color: 'var(--ink-soft)',
            maxWidth: '56ch',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          We design, build, and ship the ai automation and software that runs your
          operation — and we can point to it working.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP}
          className="hero-cta-row"
          style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', marginTop: '4px' }}
        >
          <GlowButton variant="ink" size="lg" onClick={() => scrollToSection('contact')}>
            Book a call
          </GlowButton>
          <GlowButton variant="ghost" size="lg" onClick={() => scrollToSection('products')}>
            See the work
          </GlowButton>
        </motion.div>

        {/* Guarantee one-liner directly below the primary CTA — highest-leverage trust placement */}
        <motion.p
          variants={FADE_UP}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '13px',
            lineHeight: 1.5,
            color: 'var(--ink-faint)',
            margin: '-12px 0 0',
            textAlign: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '11px' }}>◆</span>
          We find at least 3 automation opportunities in your operation, or the audit&apos;s free.
        </motion.p>
      </motion.div>
    </section>
  )
}
