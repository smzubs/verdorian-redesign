'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconArrowUpRight } from '@tabler/icons-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PlateCaption } from '@/components/ui/PlateCaption'
import {
  QRSafeProMock,
  ChangeOrderMock,
  VoicePencilMock,
  PolicyPilotMock,
} from '@/components/mockups'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { PRODUCTS } from '@/lib/utils'
import type { Product, MockupId } from '@/lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV'] as const

function Figure({ id }: { id: MockupId }) {
  switch (id) {
    case 'qrsafepro':
      return <QRSafeProMock />
    case 'changeorder':
      return <ChangeOrderMock />
    case 'policypilot':
      return <PolicyPilotMock />
    case 'voicepencil':
      // phone mockup — centered and capped so it doesn't overpower the column
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <VoicePencilMock style={{ width: '100%', maxWidth: '290px' }} />
        </div>
      )
  }
}

function Chapter({ product, index }: { product: Product; index: number }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      variants={FADE_UP}
      className={reversed ? 'chapter chapter-rev' : 'chapter'}
    >
      <div className="chapter-text">
        <span className="chapter-num" aria-hidden="true">
          {ROMAN[index]}
        </span>
        <span className="eyebrow" style={{ display: 'block', marginTop: '14px' }}>
          {product.category}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display), serif',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.4vw, 40px)',
            lineHeight: 1.08,
            letterSpacing: 'var(--track-h2)',
            color: 'var(--ink)',
            margin: '12px 0 18px',
            maxWidth: '16ch',
          }}
        >
          {product.headline}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '16px',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: '0 0 22px',
            maxWidth: '46ch',
          }}
        >
          {product.body}
        </p>
        <ul className="chapter-bullets">
          {product.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        {product.status === 'live' && product.href && (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name} — opens in a new tab`}
            className="gold-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              marginTop: '24px',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: 'var(--gold)',
            }}
          >
            Visit live site
            <IconArrowUpRight size={14} stroke={2} aria-hidden="true" />
          </a>
        )}
      </div>

      <figure className="chapter-figure" style={{ margin: 0 }}>
        <Figure id={product.mockup} />
        <PlateCaption label={product.plate}>{product.caption}</PlateCaption>
      </figure>
    </motion.article>
  )
}

export default function Products() {
  return (
    <section
      id="products"
      aria-label="Our Work"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .products-container { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
      <div
        className="products-container"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}
        >
          <SectionHeading
            numeral="04"
            eyebrow="The Work"
            lead="Four systems,"
            accent="shipped and running."
          />

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '17px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              margin: '-28px 0 0',
              maxWidth: '56ch',
            }}
          >
            Not slideware. Live platforms and apps doing real operational work — inspections,
            change orders, submissions, structured notes.
          </motion.p>

          <div>
            {PRODUCTS.map((product, i) => (
              <Chapter key={product.name} product={product} index={i} />
            ))}
          </div>

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'var(--ink-faint)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            More in the prospectus — new automations in development
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
