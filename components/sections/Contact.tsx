'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Verdorian Technologies"
      style={{
        padding: '132px 0',
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(196, 154, 10, 0.24)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .contact-container { padding: 0 20px !important; } }
        @media (max-width: 480px) {
          .contact-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .contact-cta-row > * { width: 100% !important; }
        }
      `}</style>

      {/* Gold crown glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '300px',
          background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(196,154,10,0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="contact-container"
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
        >
          <motion.div variants={FADE_UP}>
            <SectionLabel>Book a Call</SectionLabel>
          </motion.div>

          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 500,
              fontSize: 'var(--t-h2)',
              letterSpacing: 'var(--track-h2)',
              lineHeight: 1.04,
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: 'var(--paper-bright)' }}>Find the automation</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>worth building.</span>
          </motion.h2>

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              color: 'rgba(247, 243, 234, 0.66)',
              fontSize: '17px',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '520px',
            }}
          >
            One call. We&apos;ll tell you honestly whether there&apos;s enough here to automate — and where to start.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            className="contact-cta-row"
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}
          >
            <GlowButton variant="ghost-light" size="lg" href="mailto:sm@verdorian.com">
              Book a call
            </GlowButton>
          </motion.div>

          <motion.p
            variants={FADE_UP}
            style={{
              marginTop: '16px',
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(247, 243, 234, 0.4)',
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            Verdorian Technologies LLC
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
