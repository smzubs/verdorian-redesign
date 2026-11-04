'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

// The parent-company view: products and services Verdorian builds, owns and runs.
// Copy stays factual — no invented metrics (QRSafePro wording follows qrsafepro.com).

interface Venture {
  name: string
  kind: string
  status: string
  body: string
  tags: string[]
  href?: string
  cta?: string
  external?: boolean
  note?: string
}

const QRSAFEPRO: Venture = {
  name: 'QRSafePro',
  kind: 'SaaS',
  status: 'Live',
  body: 'QR-powered inspections, equipment custody and OSHA-compliant safety records for contractors — every truck, every tool, every signature, kept on record.',
  tags: ['Inspections', 'Equipment custody', 'OSHA records'],
  href: 'https://qrsafepro.com',
  cta: 'Visit qrsafepro.com',
  external: true,
}

const SIDE: Venture[] = [
  {
    name: 'Grow Your Business',
    kind: 'Service',
    status: 'Local businesses',
    body: 'A professional web page and tap-to-review stand that make local businesses easier to find, trust and choose — built and managed for them.',
    tags: ['Web page', 'Google reviews', 'Managed care'],
    href: '/grow-your-business',
    cta: 'Explore the service',
  },
  {
    name: 'VoicePencil',
    kind: 'iOS app',
    status: 'ai voice notes',
    body: 'Speak naturally and get clean, structured text you can actually use — voice notes, reimagined with ai at the core.',
    tags: ['Voice capture', 'ai structuring', 'iOS'],
    note: 'In development',
  },
]

const INSPECTION_ROWS = ['Hydraulic system', 'Outriggers deployed & locked', 'Safety harness anchor points', 'Backup alarm audible']

function Arrow({ external }: { external?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      {external ? (
        <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

function VentureCard({ v, featured, children }: { v: Venture; featured?: boolean; children?: React.ReactNode }) {
  return (
    <motion.article variants={FADE_UP} className={`vt-card glass-card${featured ? ' vt-featured' : ''}`}>
      <div className="vt-meta">
        <span className="vt-kind">{v.kind}</span>
        <span className="vt-status">
          {v.status === 'Live' && <span className="vt-live" aria-hidden="true" />}
          {v.status}
        </span>
      </div>
      <h3 className="vt-name">{v.name}</h3>
      <p className="vt-body">{v.body}</p>
      <ul className="vt-tags" aria-label={`${v.name} focus areas`}>
        {v.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {children}
      {v.note && <span className="vt-note">{v.note}</span>}
      {v.href && v.cta && (
        <a
          className="vt-link"
          href={v.href}
          {...(v.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {v.cta}
          <Arrow external={v.external} />
        </a>
      )}
    </motion.article>
  )
}

export default function Ventures() {
  return (
    <section
      id="ventures"
      aria-label="Verdorian ventures"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: 'clamp(80px, 10vw, 112px)',
        paddingBottom: 'clamp(80px, 10vw, 112px)',
      }}
    >
      <style>{`
        .vt-wrap { max-width: 1200px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 48px); }
        .vt-intro { font-size: 16px; line-height: 1.62; color: var(--ink-soft); margin-top: 20px; max-width: 60ch; }
        .vt-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
          margin-top: clamp(40px, 5vw, 56px);
        }
        .vt-featured { grid-row: span 2; }
        .vt-card {
          padding: clamp(26px, 3vw, 34px);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.45s var(--ease-glass), border-color 0.45s var(--ease-glass), box-shadow 0.45s var(--ease-glass);
        }
        .vt-card:hover { transform: translateY(-3px); }
        .vt-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .vt-kind { font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); }
        .vt-status {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-soft);
          padding: 5px 11px; border-radius: 999px; border: 1px solid var(--rule-strong);
        }
        .vt-live { width: 7px; height: 7px; border-radius: 50%; background: var(--green-pass); box-shadow: 0 0 0 3px rgba(125, 184, 146, 0.18); }
        .vt-name {
          font-family: var(--font-tech), system-ui, sans-serif;
          font-weight: 400;
          font-size: clamp(20px, 2.1vw, 26px);
          letter-spacing: 0.06em;
          line-height: 1.25;
          color: var(--ink);
          margin-top: 6px;
        }
        .vt-featured .vt-name { font-size: clamp(24px, 2.8vw, 34px); }
        .vt-body { font-size: 15px; line-height: 1.6; color: var(--ink-soft); max-width: 52ch; }
        .vt-tags { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; }
        .vt-tags li {
          font-size: 12px; font-weight: 500; color: var(--ink);
          padding: 6px 12px; border-radius: 999px;
          background: rgba(255, 255, 255, 0.04); border: 1px solid var(--rule);
        }
        .vt-link {
          margin-top: auto; padding-top: 10px;
          display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
          min-height: 44px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold-bright); text-decoration: none;
        }
        .vt-link:hover { color: var(--ink); }
        .vt-note { margin-top: auto; padding-top: 10px; min-height: 44px; display: inline-flex; align-items: center; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft); }
        .vt-link:hover svg { transform: translate(2px, -1px); }
        .vt-link svg { transition: transform 0.25s var(--ease-glass); }

        /* Illustrative record — QRSafePro's own inspection format */
        .vt-record {
          margin-top: 8px;
          border-radius: 16px;
          border: 1px solid var(--rule-strong);
          background: rgba(0, 0, 0, 0.22);
          padding: 18px 20px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .vt-record-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 8px; }
        .vt-record-title { font-size: 13px; font-weight: 600; color: var(--ink); }
        .vt-record-sub { white-space: nowrap; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); }
        .vt-row { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; color: var(--ink-soft); padding: 8px 0; border-top: 1px solid var(--rule-faint); }
        .vt-pass { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; color: var(--green-pass); }
        .vt-caption { font-size: 12px; color: var(--ink-soft); margin-top: 6px; }

        @media (max-width: 860px) {
          .vt-grid { grid-template-columns: 1fr; }
          .vt-featured { grid-row: auto; }
          .vt-card { padding: 22px 20px; }
          .vt-record { padding: 14px 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vt-card:hover { transform: none; }
        }
      `}</style>

      <motion.div
        className="vt-wrap"
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={FADE_UP}>
          <SectionHeading eyebrow="OUR VENTURES" lead="Products we build," accent="own and run." align="left" />
          <p className="vt-intro">
            Verdorian Technologies is the parent company behind a growing family of products and services —
            each one built ai-native from day one, and each one held to the same standard we bring to client work.
          </p>
        </motion.div>

        <div className="vt-grid">
          <VentureCard v={QRSAFEPRO} featured>
            <div className="vt-record" aria-label="Illustration of a QRSafePro inspection record">
              <div className="vt-record-head">
                <span className="vt-record-title">Record of inspection · Bucket Truck No. 1</span>
                <span className="vt-record-sub">Signed · PDF</span>
              </div>
              {INSPECTION_ROWS.map((row) => (
                <div key={row} className="vt-row">
                  <span>{row}</span>
                  <span className="vt-pass">PASS</span>
                </div>
              ))}
              <p className="vt-caption">Illustration of a QRSafePro record.</p>
            </div>
          </VentureCard>
          {SIDE.map((v) => (
            <VentureCard key={v.name} v={v} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
