'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IconArrowUpRight } from '@tabler/icons-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// ─── Card data ───────────────────────────────────────────────────────────────

interface WorkCard {
  name: string
  description: string
  tag: string
  href?: string
  isLive?: boolean
}

const CARDS: WorkCard[] = [
  {
    name: 'QRSafePro',
    description: 'QR equipment inspection + inventory, live in the field.',
    tag: 'qrsafepro.com',
    href: 'https://qrsafepro.com',
    isLive: true,
  },
  {
    name: 'VoicePencil',
    description: 'Voice notes that come back transcribed, cleaned, and filed.',
    tag: 'iOS app',
  },
  {
    name: 'Knight Electric',
    description: 'A fast, modern marketing site for an electrical contractor.',
    tag: 'knightelectric.net',
    href: 'https://knightelectric.net',
    isLive: true,
  },
]

// ─── Single glance card ───────────────────────────────────────────────────────

function GlanceCard({ card }: { card: WorkCard }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={FADE_UP}
      className="glass-card"
      aria-label={card.name}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26, mass: 0.7 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '26px 26px 22px',
        willChange: 'transform',
      }}
    >
      <span className="glass-topline" aria-hidden="true" />

      {/* Product name */}
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: 'clamp(22px, 2.4vw, 26px)',
          lineHeight: 1.06,
          letterSpacing: 'var(--track-h3)',
          color: 'var(--ink)',
          margin: '0 0 10px',
        }}
      >
        {card.name}
      </h3>

      {/* One honest line */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '14px',
          lineHeight: 1.56,
          color: 'var(--ink-soft)',
          margin: '0 0 18px',
          flex: 1,
        }}
      >
        {card.description}
      </p>

      {/* Tag / link */}
      {card.href ? (
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${card.name} at ${card.tag} — opens in a new tab`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            minHeight: '48px',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--gold)',
            textDecoration: 'none',
            transition: 'opacity 0.25s var(--ease-glass)',
            alignSelf: 'flex-start',
          }}
        >
          {card.isLive && (
            <span
              aria-hidden="true"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--gold)',
                flexShrink: 0,
              }}
            />
          )}
          {card.tag}
          <IconArrowUpRight size={13} stroke={2} aria-hidden="true" />
        </a>
      ) : (
        <span
          className="label-quiet"
          aria-label={`${card.name}: ${card.tag}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            minHeight: '48px',
            alignSelf: 'flex-start',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--rule-strong)',
              flexShrink: 0,
            }}
          />
          {card.tag}
        </span>
      )}
    </motion.article>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function Products() {
  return (
    <section
      id="products"
      aria-label="A glance of our work"
      className="glass-stage"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        .glance-container {
          max-width: 1100px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        .glance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 48px;
        }
        @media (max-width: 767px) {
          .glance-container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .glance-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 36px;
          }
        }
        @media (min-width: 768px) and (max-width: 960px) {
          .glance-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <div className="glance-container">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <SectionHeading
            numeral="04"
            eyebrow="A GLANCE OF OUR WORK"
            lead="A little of what we’ve"
            accent="shipped."
          />

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '16px',
              color: 'var(--ink-soft)',
              lineHeight: 1.62,
              margin: '16px 0 0',
              maxWidth: '48ch',
            }}
          >
            A few real products, built and running.
          </motion.p>

          <motion.div
            className="glance-grid"
            variants={STAGGER_CONTAINER}
          >
            {CARDS.map((card) => (
              <GlanceCard key={card.name} card={card} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
