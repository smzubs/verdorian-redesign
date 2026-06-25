'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   MINI-DIAGRAM COMPONENTS
   Pure CSS / inline-SVG — no images, no new deps.
   Each diagram lives in a ~130px-tall region at the top of its card.
   Design language: --gold (#1877F2) for accents/glows, --ink for structure
   lines, --green-pass for done/approved states. Clean and legible at card size.
   ────────────────────────────────────────────────────────────────────────── */

/* Shared diagram wrapper */
function DiagramWrap({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      aria-hidden="true"
      role="img"
      aria-label={label}
      style={{
        height: '130px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        background: 'rgba(242, 245, 250, 0.60)',
        border: '1px solid rgba(24, 119, 242, 0.08)',
      }}
    >
      {children}
    </div>
  )
}

/* ── 01: AI Workflow Automation
   Checklist of repeated steps → arrow → linked automation node chips
   with an animated dashed connector path. ── */
function DiagramWorkflow() {
  return (
    <DiagramWrap label="Repeated tasks transforming into connected automation nodes">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none" style={{ overflow: 'visible' }}>
        {/* Checklist rows */}
        {[18, 40, 62].map((y, i) => (
          <g key={i}>
            <rect x="4" y={y - 7} width="12" height="12" rx="2"
              stroke="var(--ink)" strokeWidth="1.2" fill="var(--paper-bright)" />
            <path d={`M5.5 ${y - 1}l3 3 5-6`}
              stroke="var(--green-pass)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="22" y={y - 5} width={36 + i * 6} height="8" rx="2"
              fill="rgba(20,24,32,0.07)" />
          </g>
        ))}

        {/* Arrow */}
        <path d="M76 40 L98 40" stroke="var(--gold)" strokeWidth="1.6"
          strokeLinecap="round" strokeDasharray="3 2.5"
          className="vd-flow-arrow" />
        <polygon points="98,37 104,40 98,43" fill="var(--gold)" />

        {/* Node chips */}
        {[
          { x: 110, y: 14, label: 'Intake' },
          { x: 110, y: 40, label: 'Process' },
          { x: 110, y: 66, label: 'Notify' },
        ].map(({ x, y, label }, i) => (
          <g key={i}>
            <rect x={x} y={y - 9} width={56} height={18} rx="9"
              fill="rgba(24,119,242,0.10)" stroke="var(--gold)" strokeWidth="1.1" />
            <text x={x + 28} y={y + 4} textAnchor="middle"
              fill="var(--gold)" fontSize="9" fontFamily="var(--font-body), sans-serif"
              fontWeight="600" letterSpacing="0.04em">
              {label}
            </text>
          </g>
        ))}

        {/* Vertical connector lines between chips */}
        <path d="M138 23 L138 31" stroke="rgba(24,119,242,0.35)" strokeWidth="1"
          strokeDasharray="2 2" strokeLinecap="round" />
        <path d="M138 49 L138 57" stroke="rgba(24,119,242,0.35)" strokeWidth="1"
          strokeDasharray="2 2" strokeLinecap="round" />

        {/* Completion dot */}
        <circle cx="178" cy="40" r="6" fill="var(--green-pass)" opacity="0.85" />
        <path d="M175 40l2.5 2.5 4-4" stroke="white" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </DiagramWrap>
  )
}

/* ── 02: Document & Data Automation
   PDF on the left with messy lines → arrow → clean key:value fields. ── */
function DiagramDocuments() {
  return (
    <DiagramWrap label="PDF document transforming into structured key-value data fields">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* PDF page */}
        <rect x="8" y="12" width="52" height="68" rx="3"
          fill="var(--paper-bright)" stroke="var(--ink)" strokeWidth="1.2" />
        {/* Folded corner */}
        <path d="M48 12 L60 24" stroke="var(--ink)" strokeWidth="1.2" />
        <path d="M48 12 L48 24 L60 24" fill="rgba(20,24,32,0.05)"
          stroke="rgba(20,24,32,0.10)" strokeWidth="1" />
        {/* Messy unstructured lines */}
        {[30, 42, 52, 62].map((y, i) => (
          <line key={i} x1="14" y1={y} x2={i % 2 === 0 ? 52 : 44} y2={y}
            stroke="rgba(20,24,32,0.15)" strokeWidth="1" strokeLinecap="round"
            strokeDasharray={i === 1 ? '3 2' : '0'} />
        ))}
        {/* PDF label */}
        <rect x="12" y="16" width="20" height="8" rx="1.5"
          fill="rgba(24,119,242,0.15)" />
        <text x="22" y="23.5" textAnchor="middle"
          fill="var(--gold)" fontSize="7" fontFamily="var(--font-body), sans-serif"
          fontWeight="700" letterSpacing="0.06em">PDF</text>

        {/* Arrow */}
        <path d="M68 50 L96 50" stroke="var(--gold)" strokeWidth="1.6"
          strokeLinecap="round" />
        <polygon points="96,47 102,50 96,53" fill="var(--gold)" />

        {/* Structured data panel */}
        <rect x="108" y="16" width="100" height="68" rx="4"
          fill="var(--paper-bright)" stroke="rgba(24,119,242,0.20)" strokeWidth="1" />

        {/* Key:value rows */}
        {[
          { key: 'Vendor', val: 'Acme Corp' },
          { key: 'Invoice', val: '#00421' },
          { key: 'Amount', val: '$4,800' },
          { key: 'Status', val: 'Approved', pass: true },
        ].map(({ key, val, pass }, i) => {
          const y = 30 + i * 14
          return (
            <g key={i}>
              <text x="114" y={y} fill="var(--ink-faint)" fontSize="7.5"
                fontFamily="var(--font-body), sans-serif" fontWeight="600"
                letterSpacing="0.04em">{key}</text>
              <text x="148" y={y} fill={pass ? 'var(--green-pass)' : 'var(--ink-soft)'}
                fontSize="7.5" fontFamily="var(--font-body), sans-serif"
                fontWeight={pass ? '700' : '500'}>{val}</text>
            </g>
          )
        })}
      </svg>
    </DiagramWrap>
  )
}

/* ── 03: Dashboards & Internal Tools
   4 mini widgets: inbox, calendar, files, tasks in a dashboard mock. ── */
function DiagramDashboard() {
  return (
    <DiagramWrap label="Personal dashboard with inbox, calendar, files, and tasks widgets">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* Dashboard outer frame */}
        <rect x="20" y="10" width="180" height="80" rx="8"
          fill="var(--paper-bright)" stroke="rgba(20,24,32,0.12)" strokeWidth="1" />
        {/* Top bar */}
        <rect x="20" y="10" width="180" height="14" rx="8"
          fill="rgba(24,119,242,0.08)" />
        <rect x="20" y="18" width="180" height="6" fill="rgba(24,119,242,0.08)" />
        <circle cx="30" cy="17" r="3" fill="rgba(20,24,32,0.15)" />
        <circle cx="40" cy="17" r="3" fill="rgba(20,24,32,0.10)" />
        <rect x="56" y="14" width="60" height="6" rx="2" fill="rgba(20,24,32,0.07)" />

        {/* KPI widget — top left */}
        <rect x="26" y="30" width="78" height="24" rx="3"
          fill="rgba(24,119,242,0.06)" stroke="rgba(24,119,242,0.14)" strokeWidth="0.8" />
        <text x="30" y="39" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">KPI</text>
        <rect x="30" y="42" width="40" height="3.5" rx="1" fill="rgba(20,24,32,0.10)" />
        <rect x="74" y="39" width="24" height="3.5" rx="1" fill="rgba(24,119,242,0.25)" />

        {/* Status widget — top right */}
        <rect x="116" y="30" width="78" height="24" rx="3"
          fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.18)" strokeWidth="0.8" />
        <text x="120" y="39" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">STATUS</text>
        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
          <rect key={d} x={120 + d * 10} y={42} width="7" height="7" rx="1"
            fill={d === 3 ? 'var(--gold)' : 'rgba(20,24,32,0.07)'} />
        ))}

        {/* Pipeline widget — bottom left */}
        <rect x="26" y="60" width="78" height="24" rx="3"
          fill="rgba(47,93,58,0.06)" stroke="rgba(47,93,58,0.16)" strokeWidth="0.8" />
        <text x="30" y="69" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">PIPELINE</text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={30 + i * 20} y={72} width="14" height="9" rx="1.5"
              fill="rgba(47,93,58,0.12)" stroke="rgba(47,93,58,0.20)" strokeWidth="0.6" />
            <rect x={30 + i * 20} y={70} width="9" height="4" rx="1"
              fill="rgba(47,93,58,0.20)" />
          </g>
        ))}

        {/* Actions widget — bottom right */}
        <rect x="116" y="60" width="78" height="24" rx="3"
          fill="rgba(24,119,242,0.06)" stroke="rgba(24,119,242,0.14)" strokeWidth="0.8" />
        <text x="120" y="69" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">ACTIONS</text>
        {[{ y: 73, done: true }, { y: 79, done: true }, { y: 85, done: false }].map(({ y, done }, i) => (
          <g key={i}>
            <rect x="120" y={y - 3} width="7" height="7" rx="1.5"
              fill={done ? 'rgba(24,119,242,0.20)' : 'rgba(20,24,32,0.06)'}
              stroke={done ? 'var(--gold)' : 'rgba(20,24,32,0.15)'} strokeWidth="0.7" />
            {done && (
              <path d={`M121.5 ${y}l2 2 3.5-3.5`} stroke="var(--gold)" strokeWidth="1"
                strokeLinecap="round" strokeLinejoin="round" />
            )}
            <rect x="131" y={y - 1.5} width={done ? 50 : 36} height="3.5" rx="1"
              fill={done ? 'rgba(20,24,32,0.07)' : 'rgba(20,24,32,0.12)'} />
          </g>
        ))}
      </svg>
    </DiagramWrap>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   DATA — 3 service cards
   ────────────────────────────────────────────────────────────────────────── */

interface ServiceCard {
  numeral: string
  name: string
  benefit: string
  Diagram: React.FC
}

const SERVICES: ServiceCard[] = [
  {
    numeral: '01',
    name: 'AI Workflow Automation',
    benefit: 'Automate repetitive tasks, approvals, follow-ups, forms, and handoffs.',
    Diagram: DiagramWorkflow,
  },
  {
    numeral: '02',
    name: 'Document & Data Automation',
    benefit: 'Turn emails, PDFs, forms, and spreadsheets into clean usable data.',
    Diagram: DiagramDocuments,
  },
  {
    numeral: '03',
    name: 'Dashboards & Internal Tools',
    benefit: 'Give your team one live place to see, manage, and act.',
    Diagram: DiagramDashboard,
  },
]

/* ──────────────────────────────────────────────────────────────────────────
   CARD — glass tile with mini-diagram region, numeral, title, benefit.
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ card, index }: { card: ServiceCard; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { Diagram } = card

  return (
    <motion.article
      custom={index}
      variants={CARD_ENTRANCE}
      className="glass-card cap-card"
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      aria-label={`Service: ${card.name} — ${card.benefit}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 22px 24px',
        outline: 'none',
        cursor: 'default',
      }}
    >
      {/* Blue top-rule: scaleX 0 → 1 on hover via .glass-topline CSS */}
      <span className="glass-topline" aria-hidden="true" />

      {/* Mini-diagram region */}
      <Diagram />

      {/* Header: service name + engraved numeral */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        {/* Service name */}
        <h3
          style={{
            fontFamily: 'var(--font-display), serif',
            fontWeight: 600,
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: 'var(--track-h3)',
            lineHeight: 1.2,
            wordWrap: 'break-word',
            overflowWrap: 'anywhere',
            flex: 1,
          }}
        >
          {card.name}
        </h3>

        {/* Engraved numeral */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: 1,
            WebkitTextStroke: '1px var(--gold)',
            color: 'transparent',
            opacity: hovered ? 0.65 : 0.22,
            transition: 'opacity 0.4s var(--ease-glass)',
            letterSpacing: '0.02em',
            flexShrink: 0,
            marginLeft: '10px',
          }}
        >
          {card.numeral}
        </span>
      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          height: '1px',
          background: 'var(--rule)',
          marginBottom: '12px',
          transition: 'background 0.4s var(--ease-glass)',
          ...(hovered ? { background: 'rgba(24,119,242,0.18)' } : {}),
        }}
      />

      {/* One-line benefit */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '13.5px',
          color: 'var(--ink-soft)',
          lineHeight: 1.58,
          margin: 0,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {card.benefit}
      </p>
    </motion.article>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   ROOT — glass-stage backdrop, 3-col desktop → 1-col mobile card grid.
   ────────────────────────────────────────────────────────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="automate"
      aria-label="What Verdorian automates — services"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '96px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Focus ring — inset blue */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* 3-col desktop → 1-col mobile */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) {
          .cap-grid { grid-template-columns: 1fr; gap: 14px; }
        }
        @media (max-width: 640px) {
          .cap-container { padding-left: 16px !important; padding-right: 16px !important; }
        }
        @media (max-width: 375px) {
          .cap-card { padding: 20px 16px 18px !important; }
        }

        /* Reduced motion — suppress spring lift */
        @media (prefers-reduced-motion: reduce) {
          .cap-card {
            transform: none !important;
            transition: border-color 0.01ms, box-shadow 0.01ms !important;
          }
        }
      `}</style>

      <div
        className="cap-container"
        style={{ maxWidth: '1240px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Section heading */}
          <motion.div variants={FADE_UP}>
            <SectionHeading
              numeral="01"
              eyebrow="WHAT WE AUTOMATE"
              lead="What Verdorian"
              accent="Automates"
              align="left"
            />
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '16px',
                color: 'var(--ink-soft)',
                lineHeight: 1.62,
                marginTop: '20px',
                maxWidth: '52ch',
              }}
            >
              We build practical AI systems around the work your business already does.
            </p>
          </motion.div>

          {/* 3-card grid */}
          <motion.div
            className="cap-grid"
            variants={STAGGER_CONTAINER}
          >
            {SERVICES.map((card, i) => (
              <CapabilityCard key={card.numeral} card={card} index={i} />
            ))}
          </motion.div>

          {/* Compact extras line */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '13px',
              color: 'var(--ink-faint)',
              lineHeight: 1.65,
              margin: '-32px 0 0',
              maxWidth: '72ch',
            }}
          >
            <strong style={{ color: 'var(--ink-soft)', fontWeight: 600 }}>Also possible:</strong>{' '}
            CRM automation, customer support workflows, personal AI systems, web tools, mobile apps,
            and custom software when the workflow needs it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
