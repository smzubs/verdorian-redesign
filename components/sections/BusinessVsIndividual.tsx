'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

/* ─── Types ─────────────────────────────────────────────────────── */

interface PanelExample {
  label: string
}

interface PanelData {
  id: 'for-business' | 'for-individuals'
  heading: string
  copy: string
  examples: PanelExample[]
  accentClass: 'panel-business' | 'panel-individuals'
  dashboardTitle: string
  Dashboard: React.FC
}

/* ─── Mini Dashboard: Business ──────────────────────────────────── */

function BusinessDashboard() {
  const bars = [62, 84, 51, 93, 78, 67, 88] as const

  return (
    <div className="mini-dashboard" aria-hidden="true">
      {/* Header row */}
      <div className="db-header">
        <span className="db-label">Operations</span>
        <span className="db-live-row">
          <span className="vd-dot" />
          <span className="db-live-text">Live</span>
        </span>
      </div>

      {/* KPI row */}
      <div className="db-kpi-row">
        <div className="db-kpi">
          <span className="db-kpi-value">142</span>
          <span className="db-kpi-caption">Tasks automated</span>
        </div>
        <div className="db-kpi">
          <span className="db-kpi-value" style={{ color: 'var(--gold)' }}>97%</span>
          <span className="db-kpi-caption">On-time rate</span>
        </div>
        <div className="db-kpi">
          <span className="db-kpi-value">18 h</span>
          <span className="db-kpi-caption">Saved this week</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="db-chart" role="img" aria-label="Weekly activity chart">
        {bars.map((h, i) => (
          <div key={i} className="db-bar-wrap">
            <div
              className="db-bar"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>

      {/* Pipeline checklist */}
      <div className="db-pipeline">
        <div className="db-pipeline-label">Active workflows</div>
        {[
          { label: 'Weekly report sent', done: true },
          { label: 'CRM sync running', done: true },
          { label: 'Invoice queue', done: false },
        ].map((item) => (
          <div key={item.label} className="db-check-row">
            <span className={`db-check-icon ${item.done ? 'done' : 'pending'}`}>
              {item.done ? '✓' : '○'}
            </span>
            <span className="db-check-text">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Mini Dashboard: Individuals ───────────────────────────────── */

function IndividualsDashboard() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const
  const active = 2 // Wednesday (0-indexed)

  return (
    <div className="mini-dashboard" aria-hidden="true">
      {/* Header row */}
      <div className="db-header">
        <span className="db-label">My Day</span>
        <span className="db-live-row">
          <span className="vd-dot vd-dot-indigo" />
          <span className="db-live-text">Synced</span>
        </span>
      </div>

      {/* Inbox count */}
      <div className="db-kpi-row">
        <div className="db-kpi">
          <span className="db-kpi-value" style={{ color: 'var(--indigo-accent)' }}>4</span>
          <span className="db-kpi-caption">Inbox to review</span>
        </div>
        <div className="db-kpi">
          <span className="db-kpi-value">3</span>
          <span className="db-kpi-caption">Tasks due today</span>
        </div>
        <div className="db-kpi">
          <span className="db-kpi-value">2 h</span>
          <span className="db-kpi-caption">Focus scheduled</span>
        </div>
      </div>

      {/* Calendar strip */}
      <div className="db-cal-strip" role="img" aria-label="Weekly calendar strip">
        {days.map((d, i) => (
          <div key={i} className={`db-cal-day ${i === active ? 'db-cal-day--active' : ''}`}>
            <span className="db-cal-letter">{d}</span>
            <span className="db-cal-dot-outer">
              {i === active && <span className="db-cal-dot-inner" />}
            </span>
          </div>
        ))}
      </div>

      {/* Tasks checklist */}
      <div className="db-pipeline">
        <div className="db-pipeline-label">Today&apos;s focus</div>
        {[
          { label: 'Review inbox digest', done: true },
          { label: 'Update job tracker', done: false },
          { label: 'Study session at 3 pm', done: false },
        ].map((item) => (
          <div key={item.label} className="db-check-row">
            <span className={`db-check-icon ${item.done ? 'done' : 'pending indigo'}`}>
              {item.done ? '✓' : '○'}
            </span>
            <span className="db-check-text">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Panel data ─────────────────────────────────────────────────── */

const PANELS: PanelData[] = [
  {
    id: 'for-business',
    heading: 'For Businesses',
    copy: 'Automate admin work, reports, sales follow-ups, customer support, documents, and operations.',
    examples: [
      { label: 'Weekly reports' },
      { label: 'Quote follow-ups' },
      { label: 'Invoice processing' },
      { label: 'CRM updates' },
      { label: 'Customer replies' },
      { label: 'Internal dashboards' },
      { label: 'Employee onboarding' },
      { label: 'Safety and compliance workflows' },
    ],
    accentClass: 'panel-business',
    dashboardTitle: 'Operations',
    Dashboard: BusinessDashboard,
  },
  {
    id: 'for-individuals',
    heading: 'For Individuals',
    copy: 'Build your personal ai system for email, calendar, files, learning, job search, content, and daily productivity.',
    examples: [
      { label: 'Inbox assistant' },
      { label: 'Personal knowledge base' },
      { label: 'Resume and job tracker' },
      { label: 'Document organizer' },
      { label: 'Study assistant' },
      { label: 'Calendar and task automation' },
      { label: 'Content workflow' },
      { label: 'Personal dashboard' },
    ],
    accentClass: 'panel-individuals',
    dashboardTitle: 'My Day',
    Dashboard: IndividualsDashboard,
  },
]

/* ─── Panel component ───────────────────────────────────────────── */

function Panel({ panel, index }: { panel: PanelData; index: number }) {
  const { Dashboard } = panel

  return (
    <motion.div
      id={panel.id}
      className={`glass-card glass-panel panel-root ${panel.accentClass}`}
      variants={FADE_UP}
      custom={index}
      style={{ scrollMarginTop: '100px' }}
      role="region"
      aria-label={panel.heading}
    >
      <span className="glass-topline" aria-hidden="true" />

      <div className="panel-inner">
        {/* Left column: text */}
        <div className="panel-text-col">
          <h3 className="panel-heading">{panel.heading}</h3>
          <p className="panel-copy">{panel.copy}</p>

          <ul className="panel-list" aria-label={`${panel.heading} use cases`}>
            {panel.examples.map((ex) => (
              <li key={ex.label} className="panel-list-item">
                <span className="panel-list-mark" aria-hidden="true" />
                <span>{ex.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: mini dashboard visual */}
        <div className="panel-visual-col">
          <Dashboard />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main section ───────────────────────────────────────────────── */

export default function BusinessVsIndividual() {
  return (
    <section
      id="solutions"
      aria-label="Who it's for"
      className="glass-stage"
      style={{ scrollMarginTop: '84px', paddingTop: '104px', paddingBottom: '80px' }}
    >
      <style>{`
        /* ── Layout ── */
        .bvi-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ── Two-panel grid ── */
        .bvi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .bvi-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .bvi-container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        /* ── Panel root ── */
        .panel-root {
          overflow: hidden;
        }
        .panel-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 36px 40px;
          align-items: start;
        }
        @media (max-width: 1100px) {
          .panel-inner {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 32px 28px;
          }
        }
        @media (max-width: 900px) {
          .panel-inner {
            padding: 28px 24px;
            gap: 24px;
          }
        }
        @media (max-width: 390px) {
          .panel-inner {
            padding: 24px 16px;
          }
        }

        /* ── Panel text column ── */
        .panel-heading {
          font-family: var(--font-display), Georgia, serif;
          font-weight: 500;
          font-size: clamp(22px, 2.6vw, 30px);
          letter-spacing: -0.012em;
          color: var(--ink);
          margin-bottom: 14px;
          line-height: 1.1;
        }
        .panel-copy {
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 24px;
          max-width: 34ch;
        }

        /* ── Example list ── */
        .panel-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .panel-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body), sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.4;
        }
        .panel-list-mark {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        .panel-individuals .panel-list-mark {
          background: var(--indigo-accent, #6366F1);
        }

        /* ── Visual column ── */
        .panel-visual-col {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        /* ── Mini dashboard shell ── */
        .mini-dashboard {
          width: 100%;
          max-width: 260px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.52);
          -webkit-backdrop-filter: blur(20px) saturate(1.6);
                  backdrop-filter: blur(20px) saturate(1.6);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.85) inset,
            0 8px 28px -8px rgba(20, 24, 32, 0.14),
            0 28px 64px -24px rgba(31, 64, 122, 0.20);
          overflow: hidden;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 1100px) {
          .mini-dashboard {
            max-width: 100%;
          }
        }

        /* ── DB header ── */
        .db-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .db-label {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--ink-faint);
        }
        .db-live-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .db-live-text {
          font-family: var(--font-body), sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
        }

        /* ── Indigo live dot variant ── */
        .vd-dot-indigo {
          background: #6366F1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18), 0 0 10px 1px rgba(99, 102, 241, 0.55);
        }
        @media (prefers-reduced-motion: reduce) {
          .vd-dot-indigo { animation: none !important; }
        }

        /* ── KPI row ── */
        .db-kpi-row {
          display: flex;
          gap: 0;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.46);
          border: 1px solid rgba(255, 255, 255, 0.62);
          overflow: hidden;
        }
        .db-kpi {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 6px;
          gap: 3px;
          border-right: 1px solid rgba(20, 24, 32, 0.07);
        }
        .db-kpi:last-child {
          border-right: none;
        }
        .db-kpi-value {
          font-family: var(--font-display), Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .db-kpi-caption {
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          color: var(--ink-faint);
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.02em;
        }

        /* ── Bar chart ── */
        .db-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 44px;
          padding: 0 2px;
        }
        .db-bar-wrap {
          flex: 1;
          display: flex;
          align-items: flex-end;
          height: 100%;
        }
        .db-bar {
          width: 100%;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(180deg, var(--gold) 0%, rgba(24, 119, 242, 0.40) 100%);
          transition: height 0.6s var(--ease-prospectus);
        }
        .panel-individuals .db-bar {
          background: linear-gradient(180deg, #6366F1 0%, rgba(99, 102, 241, 0.38) 100%);
        }

        /* ── Calendar strip ── */
        .db-cal-strip {
          display: flex;
          gap: 2px;
        }
        .db-cal-day {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 6px 2px;
          border-radius: 6px;
          background: transparent;
          transition: background 0.3s ease;
        }
        .db-cal-day--active {
          background: rgba(99, 102, 241, 0.10);
        }
        .db-cal-letter {
          font-family: var(--font-body), sans-serif;
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--ink-faint);
        }
        .db-cal-day--active .db-cal-letter {
          color: #6366F1;
        }
        .db-cal-dot-outer {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .db-cal-day--active .db-cal-dot-outer {
          background: #6366F1;
        }
        .db-cal-dot-inner {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: white;
        }

        /* ── Pipeline checklist ── */
        .db-pipeline {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .db-pipeline-label {
          font-family: var(--font-body), sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ink-faint);
          margin-bottom: 2px;
        }
        .db-check-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .db-check-icon {
          font-size: 11px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          line-height: 1;
        }
        .db-check-icon.done {
          background: rgba(47, 93, 58, 0.12);
          color: var(--green-pass);
          font-size: 9px;
        }
        .db-check-icon.pending {
          background: rgba(20, 24, 32, 0.06);
          color: var(--ink-faint);
          font-size: 9px;
        }
        .db-check-icon.indigo {
          background: rgba(99, 102, 241, 0.08);
          color: #6366F1;
        }
        .db-check-text {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          color: var(--ink-soft);
          line-height: 1.35;
        }

        /* ── Panel accent temperature ── */
        .panel-business::before {
          background: radial-gradient(ellipse 80% 60% at 90% -8%, rgba(24, 119, 242, 0.14) 0%, transparent 64%);
        }
        .panel-individuals::before {
          background: radial-gradient(ellipse 80% 60% at 90% -8%, rgba(99, 102, 241, 0.13) 0%, transparent 64%);
        }
        .panel-individuals:hover {
          border-color: rgba(99, 102, 241, 0.32);
        }
        .panel-individuals .glass-topline {
          background: linear-gradient(to right, #6366F1, #818CF8);
        }

        /* ── Heading gap ── */
        .bvi-heading-wrap {
          margin-bottom: 56px;
        }
        @media (max-width: 600px) {
          .bvi-heading-wrap {
            margin-bottom: 40px;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .db-bar, .db-cal-day, .mini-dashboard {
            transition: none !important;
          }
        }
      `}</style>

      {/* CSS custom property for indigo accent — scoped so it doesn't pollute :root */}
      <div
        style={{ '--indigo-accent': '#6366F1' } as React.CSSProperties}
        className="bvi-container"
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section header */}
          <motion.div variants={FADE_UP} className="bvi-heading-wrap">
            <SectionHeading
              numeral="02"
              eyebrow="WHO IT'S FOR"
              lead="Built for businesses and individuals"
              accent="who want their time back."
              align="center"
            />
          </motion.div>

          {/* Two-panel grid */}
          <div className="bvi-grid">
            {PANELS.map((panel, i) => (
              <Panel key={panel.id} panel={panel} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
