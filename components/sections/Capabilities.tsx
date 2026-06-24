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

/* ── 02: AI Agents
   Central glowing orb with connector lines radiating to labelled chips. ── */
function DiagramAgents() {
  const spokes: Array<{ angle: number; label: string }> = [
    { angle: -100, label: 'Inbox' },
    { angle: -34, label: 'CRM' },
    { angle: 34, label: 'Calendar' },
    { angle: 100, label: 'Files' },
    { angle: 168, label: 'Database' },
  ]
  const cx = 110
  const cy = 50
  const r = 44

  return (
    <DiagramWrap label="AI agent orb connected to Inbox, CRM, Calendar, Files, Database">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none" style={{ overflow: 'visible' }}>
        {/* Spoke lines */}
        {spokes.map(({ angle }, i) => {
          const rad = (angle * Math.PI) / 180
          const x2 = cx + r * Math.cos(rad)
          const y2 = cy + r * Math.sin(rad)
          return (
            <line key={i} x1={cx} y1={cy} x2={x2} y2={y2}
              stroke="rgba(24,119,242,0.28)" strokeWidth="1" strokeDasharray="2.5 2" />
          )
        })}

        {/* Spoke chip labels */}
        {spokes.map(({ angle, label }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = cx + (r + 24) * Math.cos(rad)
          const y = cy + (r + 24) * Math.sin(rad)
          return (
            <g key={i}>
              <rect x={x - 22} y={y - 9} width="44" height="18" rx="9"
                fill="rgba(242,245,250,0.90)" stroke="rgba(24,119,242,0.22)" strokeWidth="1" />
              <text x={x} y={y + 4} textAnchor="middle"
                fill="var(--ink-soft)" fontSize="8.5" fontFamily="var(--font-body), sans-serif"
                fontWeight="600" letterSpacing="0.02em">
                {label}
              </text>
            </g>
          )
        })}

        {/* Central orb glow layers */}
        <circle cx={cx} cy={cy} r="20" fill="rgba(24,119,242,0.08)" />
        <circle cx={cx} cy={cy} r="14" fill="rgba(24,119,242,0.16)" />
        <circle cx={cx} cy={cy} r="9" fill="rgba(24,119,242,0.28)" />

        {/* AI label */}
        <text x={cx} y={cy + 4} textAnchor="middle"
          fill="white" fontSize="9" fontFamily="var(--font-body), sans-serif"
          fontWeight="700" letterSpacing="0.04em">
          ai
        </text>
      </svg>
    </DiagramWrap>
  )
}

/* ── 03: Document Processing
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

/* ── 04: Business Intelligence
   Spreadsheet rows morphing into a bar chart + KPI stat card. ── */
function DiagramBI() {
  const bars = [38, 55, 44, 68, 52, 76]

  return (
    <DiagramWrap label="Spreadsheet data morphing into a bar chart and KPI card">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* Spreadsheet left */}
        <rect x="4" y="14" width="76" height="68" rx="3"
          fill="var(--paper-bright)" stroke="rgba(20,24,32,0.12)" strokeWidth="1" />
        {/* Header row */}
        <rect x="4" y="14" width="76" height="14" rx="3" fill="rgba(24,119,242,0.10)" />
        <line x1="4" y1="28" x2="80" y2="28" stroke="rgba(20,24,32,0.10)" strokeWidth="0.8" />
        {/* Column divider */}
        <line x1="44" y1="14" x2="44" y2="82" stroke="rgba(20,24,32,0.08)" strokeWidth="0.8" />
        {/* Row lines */}
        {[38, 48, 58, 68, 78].map((y, i) => (
          <g key={i}>
            <line x1="4" y1={y} x2="80" y2={y} stroke="rgba(20,24,32,0.06)" strokeWidth="0.8" />
            <rect x="8" y={y - 7} width="30" height="5" rx="1" fill="rgba(20,24,32,0.07)" />
            <rect x="48" y={y - 7} width="24" height="5" rx="1" fill="rgba(20,24,32,0.05)" />
          </g>
        ))}

        {/* Arrow */}
        <path d="M90 50 L102 50" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" />
        <polygon points="102,47 108,50 102,53" fill="var(--gold)" />

        {/* Bar chart */}
        <line x1="114" y1="82" x2="178" y2="82"
          stroke="rgba(20,24,32,0.15)" strokeWidth="0.8" />
        {bars.map((h, i) => (
          <rect key={i} x={116 + i * 10} y={82 - h * 0.55} width="7" height={h * 0.55}
            rx="1.5"
            fill={i === bars.length - 1 ? 'var(--gold)' : 'rgba(24,119,242,0.25)'} />
        ))}
        {/* Trend line */}
        <polyline
          points={bars.map((h, i) => `${119.5 + i * 10},${82 - h * 0.55}`).join(' ')}
          stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round"
          strokeLinejoin="round" fill="none" strokeDasharray="3 2" />

        {/* KPI stat card */}
        <rect x="184" y="24" width="32" height="40" rx="4"
          fill="rgba(24,119,242,0.08)" stroke="rgba(24,119,242,0.22)" strokeWidth="1" />
        <text x="200" y="40" textAnchor="middle"
          fill="var(--gold)" fontSize="13" fontFamily="var(--font-display), serif"
          fontWeight="700">+24</text>
        <text x="200" y="53" textAnchor="middle"
          fill="var(--ink-faint)" fontSize="6.5" fontFamily="var(--font-body), sans-serif"
          fontWeight="600" letterSpacing="0.05em">WOW %</text>
      </svg>
    </DiagramWrap>
  )
}

/* ── 05: CRM & Sales Automation
   Lead card moving along a 3-stage pipeline with a glowing dot progressing. ── */
function DiagramCRM() {
  const stages = ['Qualify', 'Follow-up', 'Booked']

  return (
    <DiagramWrap label="Lead card progressing through Qualify, Follow-up, Booked pipeline stages">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* Pipeline track */}
        <path d="M14 50 L206 50" stroke="rgba(20,24,32,0.10)" strokeWidth="2"
          strokeLinecap="round" />
        {/* Filled progress track */}
        <path d="M14 50 L152 50" stroke="rgba(24,119,242,0.25)" strokeWidth="2"
          strokeLinecap="round" />

        {/* Stage nodes */}
        {stages.map((label, i) => {
          const x = 14 + i * 96
          const done = i < 2
          const active = i === 1
          return (
            <g key={i}>
              {/* Node circle */}
              <circle cx={x} cy={50} r={done ? 9 : 7}
                fill={active ? 'var(--gold)' : done ? 'rgba(24,119,242,0.15)' : 'var(--paper-bright)'}
                stroke={done || active ? 'var(--gold)' : 'rgba(20,24,32,0.18)'}
                strokeWidth={active ? 0 : 1.2} />
              {/* Checkmark for done */}
              {done && !active && (
                <path d={`M${x - 3.5} ${50}l2.5 2.5 4.5-4.5`}
                  stroke="var(--gold)" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round" />
              )}
              {/* Pulse ring on active */}
              {active && (
                <circle cx={x} cy={50} r={15}
                  fill="rgba(24,119,242,0.08)" className="vd-pulse" />
              )}
              {/* Stage label */}
              <text x={x} y={70} textAnchor="middle"
                fill={active ? 'var(--gold)' : 'var(--ink-faint)'}
                fontSize="8.5" fontFamily="var(--font-body), sans-serif"
                fontWeight={active ? '700' : '500'} letterSpacing="0.02em">
                {label}
              </text>
            </g>
          )
        })}

        {/* Lead card at active stage */}
        <rect x="90" y="18" width="44" height="22" rx="4"
          fill="var(--paper-bright)" stroke="rgba(24,119,242,0.28)" strokeWidth="1" />
        <circle cx="99" cy="29" r="5" fill="rgba(24,119,242,0.15)"
          stroke="rgba(24,119,242,0.30)" strokeWidth="0.8" />
        <rect x="108" y="24" width="20" height="4" rx="1.5" fill="rgba(20,24,32,0.12)" />
        <rect x="108" y="31" width="14" height="3.5" rx="1.5" fill="rgba(20,24,32,0.07)" />
      </svg>
    </DiagramWrap>
  )
}

/* ── 06: Customer Support Automation
   Chat bubble → AI bubble → ticket chip → human escalation. ── */
function DiagramSupport() {
  return (
    <DiagramWrap label="Chat bubble to AI response to ticket to human escalation flow">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* User chat bubble */}
        <rect x="4" y="24" width="44" height="24" rx="10"
          fill="rgba(20,24,32,0.08)" stroke="rgba(20,24,32,0.15)" strokeWidth="1" />
        <path d="M12 48 L8 54 L20 48" fill="rgba(20,24,32,0.08)"
          stroke="rgba(20,24,32,0.12)" strokeWidth="0.8" />
        <rect x="10" y="31" width="28" height="4" rx="2" fill="rgba(20,24,32,0.15)" />
        <rect x="10" y="38" width="20" height="4" rx="2" fill="rgba(20,24,32,0.10)" />

        {/* Arrow 1 */}
        <path d="M54 36 L66 36" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="66,33.5 71,36 66,38.5" fill="var(--gold)" />

        {/* AI response bubble */}
        <rect x="74" y="22" width="52" height="28" rx="10"
          fill="rgba(24,119,242,0.10)" stroke="rgba(24,119,242,0.28)" strokeWidth="1" />
        <path d="M82 50 L78 56 L92 50" fill="rgba(24,119,242,0.10)"
          stroke="rgba(24,119,242,0.20)" strokeWidth="0.8" />
        <text x="100" y="33" textAnchor="middle"
          fill="var(--gold)" fontSize="8" fontFamily="var(--font-body), sans-serif"
          fontWeight="700" letterSpacing="0.04em">ai reply</text>
        <rect x="80" y="38" width="36" height="4" rx="2" fill="rgba(24,119,242,0.15)" />
        <rect x="80" y="44" width="24" height="4" rx="2" fill="rgba(24,119,242,0.10)" />

        {/* Arrow 2 */}
        <path d="M132 36 L144 36" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="144,33.5 149,36 144,38.5" fill="var(--gold)" />

        {/* Ticket chip */}
        <rect x="152" y="24" width="36" height="18" rx="4"
          fill="rgba(47,93,58,0.10)" stroke="var(--green-pass)" strokeWidth="1" />
        <text x="170" y="36.5" textAnchor="middle"
          fill="var(--green-pass)" fontSize="8" fontFamily="var(--font-body), sans-serif"
          fontWeight="700" letterSpacing="0.03em">Ticket</text>

        {/* Arrow 3 — downward to human */}
        <path d="M170 42 L170 54" stroke="rgba(24,119,242,0.40)" strokeWidth="1.2"
          strokeLinecap="round" strokeDasharray="2.5 2" />
        <polygon points="167.5,54 170,59 172.5,54" fill="rgba(24,119,242,0.40)" />

        {/* Human avatar */}
        <circle cx="170" cy="72" r="8"
          fill="rgba(24,119,242,0.08)" stroke="rgba(24,119,242,0.24)" strokeWidth="1" />
        <circle cx="170" cy="70" r="3" fill="rgba(24,119,242,0.30)" />
        <path d="M163 80 Q163 76 170 76 Q177 76 177 80"
          stroke="rgba(24,119,242,0.30)" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    </DiagramWrap>
  )
}

/* ── 07: Personal AI Operating System
   4 mini widgets: inbox, calendar, files, tasks in a dashboard mock. ── */
function DiagramPersonalOS() {
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

        {/* 4 mini widgets 2x2 grid */}
        {/* Inbox widget */}
        <rect x="26" y="30" width="78" height="24" rx="3"
          fill="rgba(24,119,242,0.06)" stroke="rgba(24,119,242,0.14)" strokeWidth="0.8" />
        <text x="30" y="39" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">INBOX</text>
        <rect x="30" y="42" width="40" height="3.5" rx="1" fill="rgba(20,24,32,0.10)" />
        <rect x="74" y="39" width="24" height="3.5" rx="1" fill="rgba(24,119,242,0.25)" />

        {/* Calendar widget */}
        <rect x="116" y="30" width="78" height="24" rx="3"
          fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.18)" strokeWidth="0.8" />
        <text x="120" y="39" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">CALENDAR</text>
        {[0, 1, 2, 3, 4, 5, 6].map((d) => (
          <rect key={d} x={120 + d * 10} y={42} width="7" height="7" rx="1"
            fill={d === 3 ? 'var(--gold)' : 'rgba(20,24,32,0.07)'} />
        ))}

        {/* Files widget */}
        <rect x="26" y="60" width="78" height="24" rx="3"
          fill="rgba(47,93,58,0.06)" stroke="rgba(47,93,58,0.16)" strokeWidth="0.8" />
        <text x="30" y="69" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">FILES</text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={30 + i * 20} y={72} width="14" height="9" rx="1.5"
              fill="rgba(47,93,58,0.12)" stroke="rgba(47,93,58,0.20)" strokeWidth="0.6" />
            <rect x={30 + i * 20} y={70} width="9" height="4" rx="1"
              fill="rgba(47,93,58,0.20)" />
          </g>
        ))}

        {/* Tasks widget */}
        <rect x="116" y="60" width="78" height="24" rx="3"
          fill="rgba(24,119,242,0.06)" stroke="rgba(24,119,242,0.14)" strokeWidth="0.8" />
        <text x="120" y="69" fill="var(--ink-faint)" fontSize="6.5"
          fontFamily="var(--font-body), sans-serif" fontWeight="700"
          letterSpacing="0.08em">TASKS</text>
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

/* ── 08: Custom Internal Tools
   Database + dashboard panel + app screen + automation nodes
   combining toward a central core. ── */
function DiagramCustomTools() {
  return (
    <DiagramWrap label="Database, dashboard, app screen, and automation nodes combining into a unified system">
      <svg width="220" height="100" viewBox="0 0 220 100" fill="none">
        {/* Database cylinder (top-left) */}
        <ellipse cx="30" cy="26" rx="16" ry="5" fill="rgba(20,24,32,0.07)"
          stroke="var(--ink-soft)" strokeWidth="1" />
        <rect x="14" y="26" width="32" height="22" fill="rgba(20,24,32,0.04)"
          stroke="var(--ink-soft)" strokeWidth="1" />
        <ellipse cx="30" cy="48" rx="16" ry="5" fill="rgba(20,24,32,0.06)"
          stroke="var(--ink-soft)" strokeWidth="1" />
        <ellipse cx="30" cy="26" rx="16" ry="5" fill="rgba(24,119,242,0.10)" />

        {/* Dashboard panel (top-right) */}
        <rect x="156" y="14" width="56" height="36" rx="4"
          fill="rgba(24,119,242,0.08)" stroke="rgba(24,119,242,0.22)" strokeWidth="1" />
        <rect x="160" y="18" width="48" height="8" rx="2" fill="rgba(24,119,242,0.15)" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={160 + i * 17} y={30} width="12" height={8 + i * 5} rx="1.5"
            fill={i === 2 ? 'var(--gold)' : 'rgba(24,119,242,0.20)'} />
        ))}

        {/* App screen (bottom-right) */}
        <rect x="156" y="58" width="56" height="32" rx="4"
          fill="var(--paper-bright)" stroke="rgba(20,24,32,0.14)" strokeWidth="1" />
        <rect x="160" y="62" width="48" height="8" rx="2" fill="rgba(20,24,32,0.07)" />
        {[72, 80].map((y, i) => (
          <rect key={i} x="160" y={y} width={i === 0 ? 36 : 28} height="4" rx="1.5"
            fill="rgba(20,24,32,0.06)" />
        ))}
        <rect x="188" y="72" width="18" height="10" rx="2"
          fill="rgba(47,93,58,0.12)" stroke="var(--green-pass)" strokeWidth="0.8" />
        <text x="197" y="80" textAnchor="middle"
          fill="var(--green-pass)" fontSize="6" fontFamily="var(--font-body), sans-serif"
          fontWeight="700">LIVE</text>

        {/* Automation nodes (bottom-left) */}
        {[
          { cx: 22, cy: 72 },
          { cx: 42, cy: 80 },
          { cx: 30, cy: 90 },
        ].map(({ cx, cy }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="7"
              fill="rgba(99,102,241,0.10)" stroke="rgba(99,102,241,0.28)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="3" fill="rgba(99,102,241,0.25)" />
          </g>
        ))}
        <path d="M22 72 L42 80 L30 90" stroke="rgba(99,102,241,0.30)" strokeWidth="0.8"
          strokeDasharray="2 2" fill="none" />

        {/* Converging arrows toward center */}
        <path d="M50 45 Q80 50 100 50" stroke="var(--gold)" strokeWidth="1.4"
          strokeLinecap="round" fill="none" />
        <path d="M152 32 Q130 42 118 50" stroke="var(--gold)" strokeWidth="1.4"
          strokeLinecap="round" fill="none" />
        <path d="M152 74 Q130 64 118 56" stroke="var(--gold)" strokeWidth="1.4"
          strokeLinecap="round" fill="none" />
        <path d="M48 80 Q74 72 100 56" stroke="rgba(99,102,241,0.35)" strokeWidth="1.2"
          strokeLinecap="round" strokeDasharray="3 2" fill="none" />

        {/* Central convergence node */}
        <circle cx="110" cy="50" r="16" fill="rgba(24,119,242,0.08)" />
        <circle cx="110" cy="50" r="11" fill="rgba(24,119,242,0.14)" />
        <circle cx="110" cy="50" r="7" fill="var(--gold)" />
        <path d="M106 50l3 3 6-6" stroke="white" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </DiagramWrap>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   DATA — 8 service cards
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
    benefit: 'Turn repeated steps into workflows that run automatically.',
    Diagram: DiagramWorkflow,
  },
  {
    numeral: '02',
    name: 'AI Agents',
    benefit: 'AI assistants that complete real tasks with your rules and human review.',
    Diagram: DiagramAgents,
  },
  {
    numeral: '03',
    name: 'Document Processing',
    benefit: 'Extract, summarize, route, and approve PDFs, forms, invoices, and reports.',
    Diagram: DiagramDocuments,
  },
  {
    numeral: '04',
    name: 'Business Intelligence',
    benefit: 'Turn spreadsheets and raw data into live dashboards and weekly insights.',
    Diagram: DiagramBI,
  },
  {
    numeral: '05',
    name: 'CRM & Sales Automation',
    benefit: 'Capture leads, qualify them, send follow-ups, and keep your pipeline updated.',
    Diagram: DiagramCRM,
  },
  {
    numeral: '06',
    name: 'Customer Support Automation',
    benefit: 'Answer common questions faster and route complex issues to the right person.',
    Diagram: DiagramSupport,
  },
  {
    numeral: '07',
    name: 'Personal AI Operating System',
    benefit: 'Connect your email, calendar, files, notes, and tasks into one smart system.',
    Diagram: DiagramPersonalOS,
  },
  {
    numeral: '08',
    name: 'Custom Internal Tools',
    benefit: 'When off-the-shelf tools do not fit, we build the system around your workflow.',
    Diagram: DiagramCustomTools,
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

      {/* Header: engraved numeral */}
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
   ROOT — glass-stage backdrop, 4-col → 2-col → 1-col card grid.
   ────────────────────────────────────────────────────────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="automate"
      aria-label="What Verdorian can automate — services"
      className="glass-stage"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '80px',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        /* Focus ring — inset blue */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 3px;
        }

        /* SVG animated helpers */
        .vd-pulse {
          transform-origin: center;
          animation: vd-pulse-ring 2.4s ease-in-out infinite;
        }
        @keyframes vd-pulse-ring {
          0%, 100% { opacity: 0.3; r: 13px; }
          50%       { opacity: 0.08; r: 18px; }
        }

        /* 4-col desktop → 2-col tablet → 1-col mobile */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 1200px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 640px) {
          .cap-container { padding-left: 16px !important; padding-right: 16px !important; }
          .cap-grid { grid-template-columns: 1fr; gap: 14px; }
        }
        @media (max-width: 375px) {
          .cap-card { padding: 20px 16px 18px !important; }
        }

        /* Reduced motion — suppress spring lift, freeze pulse */
        @media (prefers-reduced-motion: reduce) {
          .cap-card {
            transform: none !important;
            transition: border-color 0.01ms, box-shadow 0.01ms !important;
          }
          .vd-pulse {
            animation: none !important;
          }
          @keyframes vd-pulse-ring {}
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
          style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}
        >
          {/* Section heading */}
          <motion.div variants={FADE_UP}>
            <SectionHeading
              numeral="01"
              eyebrow="WHAT WE AUTOMATE"
              lead="What Verdorian"
              accent="can automate."
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
              We build practical ai systems around the work you already do — using your
              tools, your rules, and your approval points.
            </p>
          </motion.div>

          {/* 8-card grid */}
          <motion.div
            className="cap-grid"
            variants={STAGGER_CONTAINER}
          >
            {SERVICES.map((card, i) => (
              <CapabilityCard key={card.numeral} card={card} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
