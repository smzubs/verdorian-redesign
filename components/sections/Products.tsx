'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IconArrowUpRight } from '@tabler/icons-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PlateCaption } from '@/components/ui/PlateCaption'
import {
  QRSafeProMock,
  ChangeOrderMock,
  VoicePencilMock,
  PolicyPilotMock,
} from '@/components/mockups'
import { FADE_UP, STAGGER_CONTAINER, EASE_PROSPECTUS } from '@/lib/motion'
import { PRODUCTS } from '@/lib/utils'
import type { Product, MockupId } from '@/lib/utils'

// ─── Case-study framing ──────────────────────────────────────────────────────
// Keyed by product name so it tracks PRODUCTS data without touching lib/utils.ts.
// sector: industry-breadth tag   built: crisp "what we did" prose (2–3 sentences)
// win: the italic gold outcome verdict — the highest-impact element (design §4.4)
// stack: tech/approach pills shown in .label-quiet row

interface Framing {
  caseId: string          // e.g. "PROJECT · NO. 01"
  sectorTag: string       // e.g. "COMPLIANCE · INSPECTION"
  win: string             // one italic Cormorant gold sentence — the outcome verdict
  built: string           // 2–3 honest sentences of craft description
  bullets: string[]       // proof outcomes (reuse/extend PRODUCTS.outcomes)
  stack: string[]         // tech/approach pills
}

const FRAMING: Record<string, Framing> = {
  QRSafePro: {
    caseId: 'PROJECT · NO. 01',
    sectorTag: 'COMPLIANCE · INSPECTION',
    win: 'Live in the field — every inspection on the permanent record.',
    built:
      'We built QRSafePro end-to-end: a QR-based inspection platform for field crews who need a signed, dated record on every piece of equipment. Crews scan an asset, run the inspection checklist, and sign off in under two minutes. When the audit comes, the paperwork already exists.',
    bullets: [
      'Scan-to-record inspections, done on site in under two minutes',
      'A permanent, signed history for every asset — no manual binder',
      'Compliance-grade exports on demand, ready for OSHA review',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'QR · Barcode', 'RLS · Auth'],
  },
  ChangeOrderAI: {
    caseId: 'PROJECT · NO. 02',
    sectorTag: 'CONSTRUCTION · ENTERPRISE',
    win: 'The back-and-forth that used to lose days now settles before the truck leaves the site.',
    built:
      'Construction change orders die in group texts and missed calls. We built ChangeOrderAI to intercept that moment: the crew describes the change in plain speech, the system drafts the order, prices it, and routes it for approval — all before anyone drives away.',
    bullets: [
      'Change orders drafted from plain spoken language',
      'Automatically priced and routed for approval',
      'An append-only record of every change, from first word to signature',
    ],
    stack: ['Expo SDK 54', 'Next.js', 'Supabase', 'Voice · ai', 'Turborepo'],
  },
  VoicePencil: {
    caseId: 'PROJECT · NO. 03',
    sectorTag: 'VOICE AI · iOS',
    win: 'The thinking stays yours; the typing disappears.',
    built:
      'VoicePencil turns a spoken note into something you can actually use: transcribed, cleaned, and organised into folders and categories without touching a keyboard. It was built for the moments when you need to capture a thought and can\'t afford to stop moving.',
    bullets: [
      'Capture any note by voice, anywhere — no hands required',
      'Clean, structured transcripts in seconds',
      'Notes that organise themselves by topic and context',
    ],
    stack: ['Expo SDK 54', 'React Native', 'Supabase', 'ai Transcription', 'RevenueCat'],
  },
  PolicyPilot: {
    caseId: 'PROJECT · NO. 04',
    sectorTag: 'INSURANCE · ENTERPRISE',
    win: 'Agencies see exactly where every account stands — no more chasing status across inboxes.',
    built:
      'Insurance agencies lose deals in the gap between submission and binding — not because of the risk, but because the paperwork gets lost. PolicyPilot moves every submission, quote, and bound policy through one tracked pipeline so nothing falls between systems.',
    bullets: [
      'One pipeline from intake to binding — no parallel spreadsheets',
      'Live status on every account, visible to the whole team',
      'Nothing lost between systems or buried in email threads',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Anvil · PDF', 'RLS · Auth'],
  },
}

// Publishing specialty — shown as a standalone coda plate, not a full chapter
const SPECIALTY = {
  caseId: 'SPECIALTY · PUBLISHING',
  name: 'Premium Publishing',
  sectorTag: 'MULTILINGUAL · PRECISION',
  win: 'Long-form work rendered to a standard a fine-press publisher would approve.',
  built:
    'The Scientific Tafsir (English + Bangla, 114 of 114 chapters, scientificquran.com), Ibn Sina\'s Physics in Bangla, Einstein\'s Relativity, and a 23-book Bangla companion library — all premium-typeset HTML, all shipped. ai handles the heavy lifting; human judgment guards every line.',
  stack: ['Bilingual HTML', 'Python', 'Next.js', 'Frontier ai', 'Editorial QA'],
  href: 'https://scientificquran.com',
}

// ─── Flagship flow diagram (QRSafePro only) ──────────────────────────────────
function FlagshipFlow({ animate }: { animate: boolean }) {
  const nodes: Array<{ cx: number; label: string }> = [
    { cx: 14, label: 'Scan' },
    { cx: 113, label: 'Inspect' },
    { cx: 212, label: 'Sign' },
    { cx: 311, label: 'On record' },
  ]

  return (
    <svg
      viewBox="0 0 325 34"
      width="100%"
      height="34"
      role="img"
      aria-label="The inspection flow: scan, inspect, sign, on the record."
      style={{ display: 'block', marginTop: '14px', overflow: 'visible' }}
    >
      {animate ? (
        <motion.path
          d="M14 12 H113 H212 H311"
          fill="none"
          stroke="var(--gold)"
          strokeWidth={1.25}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE_PROSPECTUS }}
        />
      ) : (
        <path
          d="M14 12 H113 H212 H311"
          fill="none"
          stroke="var(--gold)"
          strokeWidth={1.25}
          strokeLinecap="round"
        />
      )}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.circle
            cx={n.cx}
            cy={12}
            r={3}
            fill="var(--paper)"
            stroke="var(--gold)"
            strokeWidth={1.25}
            initial={animate ? { opacity: 0, scale: 0.4 } : false}
            whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.3,
              delay: animate ? 0.2 + i * 0.18 : 0,
              ease: EASE_PROSPECTUS,
            }}
            style={{ transformOrigin: `${n.cx}px 12px` }}
          />
          <text
            x={n.cx}
            y={30}
            textAnchor={i === 0 ? 'start' : i === nodes.length - 1 ? 'end' : 'middle'}
            fontSize="8.5"
            fontWeight={600}
            letterSpacing="0.14em"
            fill="var(--ink-faint)"
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              textTransform: 'uppercase',
            }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ─── Figure column renderer ───────────────────────────────────────────────────
function Figure({ id, animate }: { id: MockupId; animate: boolean }) {
  switch (id) {
    case 'qrsafepro':
      return (
        <div style={{ position: 'relative' }}>
          <QRSafeProMock />
          <FlagshipFlow animate={animate} />
        </div>
      )
    case 'changeorder':
      return <ChangeOrderMock />
    case 'policypilot':
      return <PolicyPilotMock />
    case 'voicepencil':
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <VoicePencilMock style={{ width: '100%', maxWidth: '290px' }} />
        </div>
      )
  }
}

// ─── Tech pill row ────────────────────────────────────────────────────────────
function StackPills({ items }: { items: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '20px',
      }}
      aria-label="Technologies used"
    >
      {items.map((item) => (
        <span
          key={item}
          className="label-quiet"
          style={{
            background: 'var(--paper-deep)',
            border: '1px solid var(--rule)',
            borderRadius: 'var(--r-sm)',
            padding: '4px 10px',
          }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

// ─── Status stamp / label ─────────────────────────────────────────────────────
function StatusIndicator({
  status,
  href,
  name,
}: {
  status: Product['status']
  href?: string
  name: string
}) {
  if (status === 'live' && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} — opens in a new tab`}
        className="gold-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          minHeight: '48px',
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
    )
  }

  const label =
    status === 'coming-soon' ? 'Coming soon'
    : status === 'in-development' ? 'In development'
    : null

  if (!label) return null

  return (
    <span
      className="label-quiet"
      aria-label={`${name} status: ${label}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
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
      {label}
    </span>
  )
}

// ─── Full case-study chapter (flagship + supporting) ─────────────────────────
function Chapter({ product, index }: { product: Product; index: number }) {
  const reversed = index % 2 === 1
  const reduceMotion = useReducedMotion()
  const frame = FRAMING[product.name]
  const isFlagship = product.mockup === 'qrsafepro'

  if (!frame) return null

  return (
    <motion.article
      variants={FADE_UP}
      className={reversed ? 'chapter chapter-rev' : 'chapter'}
      aria-label={`Case study: ${product.name}`}
    >
      {/* ── Text column ─────────────────────────────────────────── */}
      <div className="chapter-text">
        {/* Case-file ID */}
        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: 'var(--ink-faint)',
            marginBottom: '10px',
          }}
        >
          {frame.caseId}
        </p>

        {/* Engraved gold numeral */}
        <span className="chapter-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Sector tag */}
        <p
          className="eyebrow"
          style={{ display: 'block', marginTop: '14px' }}
        >
          {frame.sectorTag}
        </p>

        {/* Product name */}
        <h3
          style={{
            fontFamily: 'var(--font-display), serif',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.2vw, 40px)',
            lineHeight: 1.06,
            letterSpacing: 'var(--track-h2)',
            color: 'var(--ink)',
            margin: '10px 0 0',
            maxWidth: '16ch',
          }}
        >
          {product.name}
        </h3>

        {/* Win line — the verdict in italic gold Cormorant (design §4.4) */}
        <p
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: '19px',
            lineHeight: 1.38,
            color: 'var(--gold)',
            margin: '12px 0 0',
            maxWidth: '34ch',
          }}
        >
          {frame.win}
        </p>

        {/* Hairline rule between win and body */}
        <hr
          aria-hidden="true"
          style={{
            border: 0,
            borderTop: '1px solid var(--rule)',
            margin: '18px 0',
          }}
        />

        {/* "What we did" prose */}
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '15px',
            lineHeight: 1.62,
            color: 'var(--ink-soft)',
            maxWidth: '42ch',
            margin: 0,
          }}
        >
          {frame.built}
        </p>

        {/* Proof bullets */}
        <ul
          className="chapter-bullets"
          aria-label={`Outcomes for ${product.name}`}
          style={{ marginTop: '20px' }}
        >
          {frame.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {/* Stack pills */}
        <StackPills items={frame.stack} />

        {/* Status / live link */}
        <div style={{ marginTop: '20px' }}>
          <StatusIndicator
            status={product.status}
            href={product.href}
            name={product.name}
          />
        </div>
      </div>

      {/* ── Figure column — glass mock plate on gold halo ─────── */}
      <figure
        className="chapter-figure figure-halo"
        style={{ margin: 0 }}
        aria-label={`${product.name} interface preview`}
      >
        <motion.div
          className="glass-mock"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.8 }}
          style={{
            padding: isFlagship ? '0' : '0',
            // glass-mock from globals handles backdrop-blur + border + shadow
            willChange: 'transform',
          }}
        >
          {/* Gold top-rule draws in on mock hover */}
          <span className="glass-topline" aria-hidden="true" />
          <Figure id={product.mockup} animate={isFlagship && !reduceMotion} />
        </motion.div>

        <PlateCaption label={product.plate}>{product.caption}</PlateCaption>
      </figure>
    </motion.article>
  )
}

// ─── Supporting grid (3 cards below flagship) ────────────────────────────────
// ChangeOrderAI / VoicePencil / PolicyPilot rendered as a compact 3-column grid
// at desktop, single column on mobile — each is a mini case-plate, not a full chapter.

interface SupportingProduct {
  product: Product
  frame: Framing
  index: number
}

function SupportingCard({ product, frame, index }: SupportingProduct) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={FADE_UP}
      aria-label={`Case study: ${product.name}`}
      className="glass-card"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '28px 28px 24px',
        willChange: 'transform',
      }}
    >
      <span className="glass-topline" aria-hidden="true" />

      {/* Case-file ID */}
      <p
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '9.5px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color: 'var(--ink-faint)',
          margin: '0 0 10px',
        }}
      >
        {frame.caseId}
      </p>

      {/* Engraved numeral — compact */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: 0.9,
          WebkitTextStroke: '1px var(--gold)',
          color: 'transparent',
          display: 'block',
          marginBottom: '12px',
        }}
      >
        {String(index + 2).padStart(2, '0')}
      </span>

      {/* Sector tag */}
      <p
        className="eyebrow"
        style={{ display: 'block', marginBottom: '6px' }}
      >
        {frame.sectorTag}
      </p>

      {/* Product name */}
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          lineHeight: 1.06,
          letterSpacing: 'var(--track-h3)',
          color: 'var(--ink)',
          margin: '0 0 10px',
        }}
      >
        {product.name}
      </h3>

      {/* Win line */}
      <p
        style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1.38,
          color: 'var(--gold)',
          margin: '0 0 14px',
        }}
      >
        {frame.win}
      </p>

      {/* Hairline */}
      <hr
        aria-hidden="true"
        style={{
          border: 0,
          borderTop: '1px solid var(--rule)',
          margin: '0 0 14px',
        }}
      />

      {/* Bullets — first two only to keep card compact */}
      <ul
        className="chapter-bullets"
        aria-label={`Outcomes for ${product.name}`}
        style={{ flex: 1 }}
      >
        {frame.bullets.slice(0, 2).map((bullet) => (
          <li key={bullet} style={{ fontSize: '13px' }}>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Stack pills */}
      <StackPills items={frame.stack.slice(0, 3)} />

      {/* Status */}
      <div style={{ marginTop: '16px' }}>
        <StatusIndicator
          status={product.status}
          href={product.href}
          name={product.name}
        />
      </div>
    </motion.article>
  )
}

// ─── Specialty plate (Premium Publishing coda) ───────────────────────────────
function SpecialtyPlate() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      variants={FADE_UP}
      aria-label="Specialty: Premium Publishing"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0',
        paddingTop: '56px',
        borderTop: '1px solid var(--rule)',
        marginTop: '16px',
      }}
    >
      {/* Full-width specialty plate — paper surface, double-frame per §1 glass/paper rule:
          published work is "settled/authoritative" → .plate, not .glass-card */}
      <div
        className="plate"
        style={{
          padding: '36px 36px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Left: identity */}
          <div>
            <p
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '9.5px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: 'var(--ink-faint)',
                margin: '0 0 8px',
              }}
            >
              {SPECIALTY.caseId}
            </p>

            <p
              className="eyebrow"
              style={{ display: 'block', marginBottom: '6px' }}
            >
              {SPECIALTY.sectorTag}
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 600,
                fontSize: 'clamp(22px, 2.4vw, 28px)',
                lineHeight: 1.06,
                letterSpacing: 'var(--track-h3)',
                color: 'var(--ink)',
                margin: '0 0 8px',
              }}
            >
              {SPECIALTY.name}
            </h3>

            {/* Win line */}
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.38,
                color: 'var(--gold)',
                margin: 0,
                maxWidth: '44ch',
              }}
            >
              {SPECIALTY.win}
            </p>
          </div>

          {/* Right: live link stamp */}
          <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '4px' }}>
            <a
              href={SPECIALTY.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Scientific Tafsir — opens in a new tab"
              className="gold-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                minHeight: '48px',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: 'var(--gold)',
              }}
            >
              scientificquran.com
              <IconArrowUpRight size={13} stroke={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Hairline */}
        <hr
          aria-hidden="true"
          style={{
            border: 0,
            borderTop: '1px solid var(--rule)',
            margin: 0,
          }}
        />

        {/* Body + stack in one row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '14px',
              lineHeight: 1.62,
              color: 'var(--ink-soft)',
              maxWidth: '56ch',
              margin: 0,
              flex: '1 1 280px',
            }}
          >
            {SPECIALTY.built}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              flex: '0 0 auto',
              alignSelf: 'flex-end',
            }}
            aria-label="Technologies used"
          >
            {SPECIALTY.stack.map((item) => (
              <span
                key={item}
                className="label-quiet"
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--r-sm)',
                  padding: '3px 9px',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function Products() {
  // Split into flagship + three supporting products
  const flagship = PRODUCTS[0]   // QRSafePro — always first
  const supporting = PRODUCTS.slice(1)  // ChangeOrderAI, VoicePencil, PolicyPilot

  return (
    <section
      id="products"
      aria-label="Our Work — Four systems, running in the real world"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Container gutters */
        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (max-width: 767px) {
          .products-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        /* Supporting grid — 3 equal columns → 1 on mobile */
        .supporting-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        @media (max-width: 900px) {
          .supporting-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .supporting-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* Specialty plate mobile padding */
        @media (max-width: 600px) {
          .specialty-inner { padding: 24px 20px 20px !important; }
        }

        /* glass-mock hover lift — prefers-reduced-motion guard already in globals */
        .glass-mock { cursor: default; }
      `}</style>

      <div className="products-container">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
        >
          {/* ── Section heading ────────────────────────────────── */}
          <SectionHeading
            numeral="01"
            eyebrow="WHAT WE'VE SHIPPED"
            lead="Four systems,"
            accent="running in the real world."
          />

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '17px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              margin: '24px 0 0',
              maxWidth: '56ch',
            }}
          >
            Different industries, one studio. Proof that automation means a working product, not a promise.
          </motion.p>

          {/* ── Flagship chapter (QRSafePro) ───────────────────── */}
          <div style={{ marginTop: '56px' }}>
            {flagship && (
              <Chapter product={flagship} index={0} />
            )}
          </div>

          {/* ── Supporting grid (3 case-plates) ────────────────── */}
          <motion.div
            className="supporting-grid"
            variants={STAGGER_CONTAINER}
          >
            {supporting.map((product, i) => {
              const frame = FRAMING[product.name]
              if (!frame) return null
              return (
                <SupportingCard
                  key={product.name}
                  product={product}
                  frame={frame}
                  index={i}
                />
              )
            })}
          </motion.div>

          {/* ── Specialty coda (Premium Publishing) ────────────── */}
          <SpecialtyPlate />

          {/* ── Section footer note ─────────────────────────────── */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '11.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'var(--ink-faint)',
              textAlign: 'center',
              margin: '48px 0 0',
            }}
          >
            New automations in development — more in the prospectus
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
