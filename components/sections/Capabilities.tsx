'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FADE_UP, STAGGER_CONTAINER, CARD_ENTRANCE } from '@/lib/motion'

/* ──────────────────────────────────────────────────────────────────────────
   MARK FAMILY — one coherent premium set.
   40×40 viewBox, stroke 1.4px, round caps/joins, no fill, no gradient.
   Each mark has a distinct silhouette: no two read the same at a glance.
   Gold accent stroke carries the "settled output" — the through-line.
   `active` brightens the gold and deepens the ink (single hover gesture).
   ────────────────────────────────────────────────────────────────────────── */

interface MarkProps { active: boolean }
const SW = 1.4

function mkBase(active: boolean) {
  return {
    width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none' as const,
    'aria-hidden': true,
    style: {
      flexShrink: 0,
      transition: 'opacity 0.4s var(--ease-prospectus)',
      opacity: active ? 1 : 0.88,
    },
  }
}

const ink  = (a: boolean) => a ? 'var(--ink)'         : 'var(--ink-soft)'
const gold = (a: boolean) => a ? 'var(--gold-bright)'  : 'var(--gold)'

/* 01 — Workflow Automation
   A central trunk forks into three branches, each sealed with a gold node.
   Reads: divergence → settled parallel outputs. */
function MarkWorkflow({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* entry trunk */}
      <path d="M4 20h9" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* fork body */}
      <path d="M13 20 Q17 20 20 10" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 20h11"            stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M13 20 Q17 20 20 30"  stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* gold sealed nodes */}
      <circle cx="24" cy="10" r="3"  stroke={gold(active)} strokeWidth={SW} />
      <circle cx="24" cy="20" r="3"  stroke={gold(active)} strokeWidth={SW} />
      <circle cx="24" cy="30" r="3"  stroke={gold(active)} strokeWidth={SW} />
      {/* exit lines from nodes */}
      <path d="M27 10h7M27 20h7M27 30h7" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

/* 02 — Integrations & Data Plumbing
   Two offset, distinct-shaped containers (a circle + a rectangle) joined by
   a gold conduit with a directional arrow. Reads: two systems, one bridge. */
function MarkIntegrations({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* left system — circle */}
      <circle cx="10" cy="12" r="6"           stroke={ink(active)} strokeWidth={SW} />
      {/* right system — rectangle */}
      <rect x="24" y="23" width="12" height="11" rx="1.5" stroke={ink(active)} strokeWidth={SW} />
      {/* gold conduit with arrow-head */}
      <path d="M10 18v6a2 2 0 0 0 2 2H24"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 23l4 3.5-4 3.5"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* 03 — Data Entry & Reconciliation
   A four-row ruled column — raw ink lines of unequal length (messy input),
   resolved by a single decisive gold tick on the right. Reads: disorder → validation. */
function MarkReconcile({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* ruled column — uneven lengths = raw/messy data */}
      <path d="M5 9h11"  stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M5 16h14" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M5 23h9"  stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      <path d="M5 30h12" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* vertical ink separator */}
      <path d="M21 6v28"  stroke={ink(active)} strokeWidth={SW * 0.8} strokeLinecap="round" strokeDasharray="2 3" />
      {/* gold decisive check — large, confident */}
      <path d="M25 20l4 5 8-10"
        stroke={gold(active)} strokeWidth={SW + 0.3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* 04 — AI Documents & Reports
   A folded document (dog-ear corner) with three ruled lines inside;
   a gold wax-seal circle at the bottom-right with a radial cross.
   Reads: generated document → authenticated. */
function MarkDocument({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* document body with dog-ear */}
      <path d="M10 5h14l6 6v24H10z"
        stroke={ink(active)} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M24 5v6h6" stroke={ink(active)} strokeWidth={SW} strokeLinejoin="round" />
      {/* ruled lines */}
      <path d="M14 17h12M14 22h12M14 27h8"
        stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* gold wax seal — circle + cross-radial mark */}
      <circle cx="28" cy="28" r="4.5" stroke={gold(active)} strokeWidth={SW} />
      <path d="M28 24.5v7M24.5 28h7" stroke={gold(active)} strokeWidth={SW * 0.8} strokeLinecap="round" />
    </svg>
  )
}

/* 05 — Voice → Filed Work
   A classic mic capsule (ink) on the left; three filed document lines (gold) on
   the right with a light directional arrow bridging them. Reads: voice → filed record. */
function MarkVoice({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* mic capsule */}
      <rect x="8" y="5" width="8" height="14" rx="4" stroke={ink(active)} strokeWidth={SW} />
      {/* mic stand + base */}
      <path d="M4 17a8 8 0 0 0 16 0" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
      <path d="M12 25v5M9 30h6"       stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* directional arrow bridge */}
      <path d="M21 19h4l-2-2m2 2-2 2" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      {/* filed doc lines — gold */}
      <path d="M27 13h8M27 19h8M27 25h6" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

/* 06 — Dashboards & Analytics
   Three vertical ink bars at different heights + a gold trend-line
   threading through them from low-left to high-right, ending in an arrowhead.
   Reads: multiple data streams → single rising signal. */
function MarkDashboard({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* baseline */}
      <path d="M5 34h30" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* three bars */}
      <rect x="7"  y="24" width="5" height="10" stroke={ink(active)} strokeWidth={SW} />
      <rect x="17" y="17" width="5" height="17" stroke={ink(active)} strokeWidth={SW} />
      <rect x="27" y="10" width="5" height="24" stroke={ink(active)} strokeWidth={SW} />
      {/* gold trend-line with arrowhead */}
      <path d="M7 26l12-8 10-5"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 11l4-1-1 4"
        stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* 07 — Web Platforms & SaaS
   A browser frame (rounded rectangle + tab bar) in ink; a gold starburst
   dot in the top-right corner — "live, running now." Reads: real software, active today. */
function MarkWeb({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* browser outer frame */}
      <rect x="4" y="7" width="32" height="26" rx="2.5" stroke={ink(active)} strokeWidth={SW} />
      {/* chrome bar */}
      <path d="M4 14h32" stroke={ink(active)} strokeWidth={SW} />
      {/* three chrome dots */}
      <circle cx="9"  cy="10.5" r="1.2" fill={ink(active)} />
      <circle cx="13" cy="10.5" r="1.2" fill={ink(active)} />
      <circle cx="17" cy="10.5" r="1.2" fill={ink(active)} />
      {/* gold "live" starburst — top-right inside frame */}
      <path d="M30 10.5v-2M30 10.5v2M30 10.5h-2M30 10.5h2M28.6 9.1l1.4 1.4M31.4 9.1l-1.4 1.4"
        stroke={gold(active)} strokeWidth={SW * 0.9} strokeLinecap="round" />
    </svg>
  )
}

/* 08 — iOS & Mobile Apps
   A rounded device silhouette with a home bar; a gold signal arc at the top
   (connectivity) + a gold action dot at the bottom button.
   Reads: portable, connected, actionable. */
function MarkMobile({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* device body */}
      <rect x="11" y="4" width="18" height="32" rx="4" stroke={ink(active)} strokeWidth={SW} />
      {/* camera notch */}
      <circle cx="20" cy="8.5" r="1.2" fill={ink(active)} />
      {/* home bar */}
      <path d="M17 33h6" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* gold signal arcs — top of device */}
      <path d="M16 13a5 5 0 0 1 8 0"  stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
      <path d="M18 16a2.5 2.5 0 0 1 4 0" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* 09 — QR-Code Software & Inventory
   Three QR corner-squares in ink (top-left, top-right, bottom-left)
   with the fourth quadrant replaced by a gold ledger-rule cluster.
   Reads: physical scan → digital record. */
function MarkQr({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* TL corner block */}
      <rect x="5"  y="5"  width="9" height="9" rx="1" stroke={ink(active)} strokeWidth={SW} />
      <rect x="8"  y="8"  width="3" height="3" fill={ink(active)} />
      {/* TR corner block */}
      <rect x="26" y="5"  width="9" height="9" rx="1" stroke={ink(active)} strokeWidth={SW} />
      <rect x="29" y="8"  width="3" height="3" fill={ink(active)} />
      {/* BL corner block */}
      <rect x="5"  y="26" width="9" height="9" rx="1" stroke={ink(active)} strokeWidth={SW} />
      <rect x="8"  y="29" width="3" height="3" fill={ink(active)} />
      {/* BR quadrant — gold ledger lines replacing the 4th QR square */}
      <path d="M20 23h14M20 28h14M20 33h10" stroke={gold(active)} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  )
}

/* 10 — Book Translation & Premium Publishing
   An open book: two pages, a curved spine, and a thin bookmark ribbon in gold.
   A faint ruled line across both pages completes the editorial register.
   Reads: the codex form — authoritative, complete, beautifully made. */
function MarkBook({ active }: MarkProps) {
  return (
    <svg {...mkBase(active)}>
      {/* left page */}
      <path d="M20 10 C14 8 8 9 6 11v19c2-2 8-3 14-1"
        stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      {/* right page */}
      <path d="M20 10 C26 8 32 9 34 11v19c-2-2-8-3-14-1"
        stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      {/* spine */}
      <path d="M20 10v19" stroke={ink(active)} strokeWidth={SW} strokeLinecap="round" />
      {/* ruled lines on both pages */}
      <path d="M9 17h8M9 21h8" stroke={ink(active)} strokeWidth={SW * 0.8} strokeLinecap="round" />
      <path d="M23 17h8M23 21h8" stroke={ink(active)} strokeWidth={SW * 0.8} strokeLinecap="round" />
      {/* gold bookmark ribbon */}
      <path d="M28 7v12l-2-2-2 2V7" stroke={gold(active)} strokeWidth={SW} strokeLinejoin="round" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   DATA — each card carries: name, individual benefit, business benefit, proof.
   Copy pulled verbatim-ish from market research Part 2 per the spec.
   ────────────────────────────────────────────────────────────────────────── */

interface Capability {
  numeral: string
  name: string
  benefitIndividual: string
  benefitBusiness: string
  proof: string
  Mark: React.FC<MarkProps>
}

interface Group {
  label: string
  caption: string
  items: Capability[]
}

const GROUPS: Group[] = [
  {
    label: 'The Plumbing',
    caption: 'moving and connecting your data',
    items: [
      {
        numeral: '01',
        name: 'Workflow Automation',
        benefitIndividual:
          'The multi-step routine you do every week — approvals, reminders, hand-offs — runs on its own schedule, whether you\'re in the office or not.',
        benefitBusiness:
          'Processes run at 2 a.m. without anyone babysitting them. Your team stops being the bottleneck.',
        proof: 'n8n · Zapier · Make + custom frontier-ai agents — the connective tissue inside every platform we ship',
        Mark: MarkWorkflow,
      },
      {
        numeral: '02',
        name: 'Integrations & Data Plumbing',
        benefitIndividual:
          'Enter it once. It shows up everywhere it should — no more copying between apps or re-typing the same record.',
        benefitBusiness:
          'Your tools, spreadsheets, and accounts stop living on separate islands. One source of truth, automatic.',
        proof: 'the integration spine inside PolicyPilot — submission to bound policy, no re-keying',
        Mark: MarkIntegrations,
      },
      {
        numeral: '03',
        name: 'Data Entry & Reconciliation',
        benefitIndividual:
          'The boring part — copy-paste, re-typing, do-these-lists-match — is handled by software, with validation baked in.',
        benefitBusiness:
          'The reconciliation that took someone all Friday now takes minutes. Errors caught at the source, not carried downstream.',
        proof: 'the inventory engine inside QRSafePro · QRStock reconciles thousands of records in real-time today',
        Mark: MarkReconcile,
      },
    ],
  },
  {
    label: 'The Work',
    caption: 'turning input into finished output',
    items: [
      {
        numeral: '04',
        name: 'ai Documents & Reports',
        benefitIndividual:
          'The document you dread — the compliance writeup, the monthly summary — starts at 80% done, not blank.',
        benefitBusiness:
          'Recurring reports draft themselves from your own data. First draft complete; your team reviews and ships. Compliance paperwork is no longer a weekend.',
        proof: 'shipped SafeDocs — an ai generator for OSHA written programs. We build recurring-report pipelines on the same approach',
        Mark: MarkDocument,
      },
      {
        numeral: '05',
        name: 'Voice → Filed Work',
        benefitIndividual:
          'Speak the idea, the update, the note. It comes back transcribed, cleaned, and filed — the thinking stays yours, the typing disappears.',
        benefitBusiness:
          'The field crew talks, the paperwork appears. Change orders drafted from speech. Notes from the truck captured before they\'re lost.',
        proof: 'shipped VoicePencil (voice → structured notes, iOS) and ChangeOrderAI (spoken change → priced, routed construction change order)',
        Mark: MarkVoice,
      },
      {
        numeral: '06',
        name: 'Dashboards & Analytics',
        benefitIndividual:
          'The answer to "how am I doing" is always one glance away — not a morning of digging through tabs.',
        benefitBusiness:
          'Open one screen, see the whole operation. Live numbers pulled from your actual systems — not a month-end scramble.',
        proof: 'Next.js + Supabase real-time stack — shipped the WithinYou wellness dashboard',
        Mark: MarkDashboard,
      },
    ],
  },
  {
    label: 'The Platform',
    caption: 'software your operation lives in',
    items: [
      {
        numeral: '07',
        name: 'Web Platforms & SaaS',
        benefitIndividual:
          'Stop renting five apps that almost fit. Own the one that does — built around how you actually work, not a vendor\'s template.',
        benefitBusiness:
          'The system your whole team logs into, trusts, and actually uses. Accounts, permissions, records — the full stack.',
        proof: 'Next.js 16 + Supabase — QRSafePro is live and running in the field today at qrsafepro.com',
        Mark: MarkWeb,
      },
      {
        numeral: '08',
        name: 'iOS & Mobile Apps',
        benefitIndividual:
          'Your tool is wherever you are — a real app in your pocket, not a website squeezed onto a phone.',
        benefitBusiness:
          'For work on a job site, in a vehicle, on the move. Works offline, syncs when back. Your field team stays productive away from the desk.',
        proof: 'Expo SDK 54 / React Native — shipped VoicePencil to iOS',
        Mark: MarkMobile,
      },
      {
        numeral: '09',
        name: 'QR-Code Software & Inventory',
        benefitIndividual:
          'Point your phone at a code on any asset, shelf, or piece of equipment. The right record opens, updates, or signs off.',
        benefitBusiness:
          'Physical things connect to your software. Inspections, stock counts, sign-ins — all from a phone camera. Every scan becomes a permanent, dated record.',
        proof: 'the engine behind QRSafePro + QRStock — live QR inspections and inventory, running in the field',
        Mark: MarkQr,
      },
    ],
  },
]

const SPECIALTY: Capability = {
  numeral: '10',
  name: 'Book Translation & Premium Publishing',
  benefitIndividual:
    'A serious document, a complete book, a multilingual edition — rendered to a standard a fine-press publisher would approve. Not a rough machine dump.',
  benefitBusiness:
    'Long-form, multilingual translation and typesetting at a level most shops won\'t attempt. ai handles the heavy lifting; human judgment guards every line.',
  proof: 'the Scientific Tafsir (English + Bangla, 114/114 chapters, scientificquran.com), Ibn Sina\'s Physics, Einstein\'s Relativity, Thinking Fast & Slow — all premium typeset, all shipped',
  Mark: MarkBook,
}

/* ──────────────────────────────────────────────────────────────────────────
   CARD — paper plate, not glass.
   GPU budget: all 10 cards paper, glass reserved for Services/Products/Nav.
   Per design doc §1.1: "Capabilities → paper (settled/authoritative)."
   Hover: 1px lift, gold border, gold top-rule draws in left→right.
   Each card shows: mark + numeral header, service name, FOR YOU / FOR YOUR
   BUSINESS dual benefit block, and a quiet hairline-ruled proof tag.
   ────────────────────────────────────────────────────────────────────────── */

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  const [active, setActive] = useState(false)
  const { Mark } = cap

  return (
    <motion.article
      custom={index}
      variants={CARD_ENTRANCE}
      className="cap-card"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      aria-label={`Service: ${cap.name}`}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        background: 'var(--paper-bright)',
        border: '1px solid var(--rule-strong)',
        borderRadius: 'var(--r-sm)',
        padding: '28px 24px 24px',
        transform: active ? 'translateY(-1px)' : 'translateY(0)',
        borderColor: active ? 'rgba(196, 154, 10, 0.30)' : 'var(--rule-strong)',
        transition:
          'transform 0.4s var(--ease-prospectus), border-color 0.4s var(--ease-prospectus), box-shadow 0.4s var(--ease-prospectus)',
        boxShadow: active
          ? '0 1px 2px rgba(26,23,20,0.04), 0 32px 64px -32px rgba(26,23,20,0.22)'
          : 'var(--shadow-card)',
        outline: 'none',
        cursor: 'default',
      }}
    >
      {/* Gold top-rule: scaleX(0)→scaleX(1) on hover */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          height: '2px', width: '100%',
          borderRadius: 'var(--r-sm) var(--r-sm) 0 0',
          background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.45s var(--ease-prospectus)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold ambient glow — subtle warm radial, brightens on hover */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 80% 60% at 90% -10%, rgba(196,154,10,0.07) 0%, transparent 65%)',
          opacity: active ? 1 : 0.5,
          transition: 'opacity 0.4s var(--ease-prospectus)',
        }}
      />

      {/* ── Header row: mark + engraved numeral ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Mark active={active} />
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: 1,
            WebkitTextStroke: '1px var(--gold)',
            color: 'transparent',
            opacity: active ? 0.64 : 0.28,
            transition: 'opacity 0.4s var(--ease-prospectus)',
            letterSpacing: '0.02em',
          }}
        >
          {cap.numeral}
        </span>
      </div>

      {/* ── Service name ── */}
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: '21px',
          color: 'var(--ink)',
          margin: '0 0 18px',
          letterSpacing: 'var(--track-h3)',
          lineHeight: 1.15,
          wordWrap: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        {cap.name}
      </h3>

      {/* ── Dual benefit block ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '20px',
          flex: 1,
        }}
      >
        {/* FOR YOU */}
        <div>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '9.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.26em',
              color: 'var(--gold)',
              marginBottom: '5px',
            }}
          >
            For You
          </span>
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
            {cap.benefitIndividual}
          </p>
        </div>

        {/* Faint hairline between benefit rows */}
        <div
          aria-hidden="true"
          style={{ height: '1px', background: 'var(--rule-faint)' }}
        />

        {/* FOR YOUR BUSINESS */}
        <div>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '9.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.26em',
              color: 'var(--gold)',
              marginBottom: '5px',
            }}
          >
            For Your Business
          </span>
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
            {cap.benefitBusiness}
          </p>
        </div>
      </div>

      {/* ── Proof tag ── */}
      <div
        style={{
          paddingTop: '14px',
          borderTop: '1px solid var(--rule-faint)',
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
        }}
      >
        <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '7px', lineHeight: 1.9, flexShrink: 0 }}>
          ◆
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            color: 'var(--ink-faint)',
            lineHeight: 1.48,
            letterSpacing: '0.01em',
            wordWrap: 'break-word',
            overflowWrap: 'anywhere',
          }}
        >
          {cap.proof}
        </span>
      </div>
    </motion.article>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   SPECIALTY CARD — full-width, portrait layout, split two-column on desktop.
   Same paper-plate treatment but with more breathing room and the mark larger.
   ────────────────────────────────────────────────────────────────────────── */

function SpecialtyCard({ cap }: { cap: Capability }) {
  const [active, setActive] = useState(false)
  const { Mark } = cap

  return (
    <motion.article
      variants={CARD_ENTRANCE}
      custom={0}
      className="cap-card cap-specialty"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
      aria-label={`Service: ${cap.name}`}
      style={{
        position: 'relative',
        background: 'var(--paper-bright)',
        border: '1px solid var(--rule-strong)',
        borderRadius: 'var(--r-sm)',
        padding: '36px 36px 32px',
        transform: active ? 'translateY(-1px)' : 'translateY(0)',
        borderColor: active ? 'rgba(196, 154, 10, 0.30)' : 'var(--rule-strong)',
        transition:
          'transform 0.4s var(--ease-prospectus), border-color 0.4s var(--ease-prospectus), box-shadow 0.4s var(--ease-prospectus)',
        boxShadow: active
          ? '0 1px 2px rgba(26,23,20,0.04), 0 32px 64px -32px rgba(26,23,20,0.22)'
          : 'var(--shadow-card)',
        outline: 'none',
        cursor: 'default',
      }}
    >
      {/* Gold top-rule */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          height: '2px', width: '100%',
          borderRadius: 'var(--r-sm) var(--r-sm) 0 0',
          background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.45s var(--ease-prospectus)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold ambient glow */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 80% at 95% 5%, rgba(196,154,10,0.08) 0%, transparent 60%)',
          opacity: active ? 1 : 0.5,
          transition: 'opacity 0.4s var(--ease-prospectus)',
        }}
      />

      {/* Specialty inner layout */}
      <div className="cap-specialty-inner">
        {/* Left: mark + numeral + name */}
        <div className="cap-specialty-left">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px' }}>
            <Mark active={active} />
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '28px',
                lineHeight: 1,
                WebkitTextStroke: '1px var(--gold)',
                color: 'transparent',
                opacity: active ? 0.64 : 0.28,
                transition: 'opacity 0.4s var(--ease-prospectus)',
                letterSpacing: '0.02em',
              }}
            >
              {cap.numeral}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display), serif',
              fontWeight: 600,
              fontSize: '21px',
              color: 'var(--ink)',
              margin: '0 0 8px',
              letterSpacing: 'var(--track-h3)',
              lineHeight: 1.15,
              wordWrap: 'break-word',
              overflowWrap: 'anywhere',
            }}
          >
            {cap.name}
          </h3>

          {/* "the studio's quiet specialty" label */}
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '13px',
              color: 'var(--ink-faint)',
              margin: 0,
            }}
          >
            the studio's quiet specialty
          </p>
        </div>

        {/* Right: dual benefits + proof */}
        <div className="cap-specialty-right">
          {/* FOR YOU */}
          <div style={{ marginBottom: '14px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '9.5px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.26em',
                color: 'var(--gold)',
                marginBottom: '5px',
              }}
            >
              For You
            </span>
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
              {cap.benefitIndividual}
            </p>
          </div>

          <div aria-hidden="true" style={{ height: '1px', background: 'var(--rule-faint)', marginBottom: '14px' }} />

          {/* FOR YOUR BUSINESS */}
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '9.5px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.26em',
                color: 'var(--gold)',
                marginBottom: '5px',
              }}
            >
              For Your Business
            </span>
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
              {cap.benefitBusiness}
            </p>
          </div>

          {/* Proof */}
          <div
            style={{
              paddingTop: '14px',
              borderTop: '1px solid var(--rule-faint)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
            }}
          >
            <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '7px', lineHeight: 1.9, flexShrink: 0 }}>
              ◆
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '11px',
                color: 'var(--ink-faint)',
                lineHeight: 1.48,
                letterSpacing: '0.01em',
                wordWrap: 'break-word',
                overflowWrap: 'anywhere',
              }}
            >
              {cap.proof}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   GROUP HEADER — label + gold tick + italic caption + full hairline below
   ────────────────────────────────────────────────────────────────────────── */

function GroupHeader({ label, caption }: { label: string; caption: string }) {
  return (
    <div
      className="cap-group-head"
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '14px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--rule-strong)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 600,
          fontSize: '17px',
          color: 'var(--ink)',
          letterSpacing: 'var(--track-h3)',
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        style={{ width: '18px', height: '1px', background: 'var(--gold)', alignSelf: 'center', flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '14px',
          color: 'var(--ink-faint)',
        }}
      >
        {caption}
      </span>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   ROOT — section wrapper + responsive grid
   ────────────────────────────────────────────────────────────────────────── */

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="What we do — services catalog"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        /* Ledger grid: shared hairlines, no doubled borders */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--rule-strong);
          border-left: 1px solid var(--rule-strong);
        }
        .cap-grid > .cap-card {
          border-top:  0 !important;
          border-left: 0 !important;
          border-radius: 0;
        }

        /* Focus ring — inset gold, visible without layout shift */
        .cap-card:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: -2px;
        }

        /* Specialty card two-column interior */
        .cap-specialty-inner {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          align-items: flex-start;
        }
        .cap-specialty-left { display: flex; flex-direction: column; }
        .cap-specialty-right { display: flex; flex-direction: column; }

        /* Specialty outer wrapper — single column full-width ledger cell */
        .cap-specialty-grid {
          border-top: 1px solid var(--rule-strong);
          border-left: 1px solid var(--rule-strong);
        }
        .cap-specialty-grid > .cap-card {
          border-top:  0 !important;
          border-left: 0 !important;
          border-radius: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .cap-container  { padding-left: 20px !important; padding-right: 20px !important; }
          .cap-grid       { grid-template-columns: 1fr; }
          .cap-group-head { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
          .cap-specialty-inner { grid-template-columns: 1fr; gap: 24px; }
          .cap-specialty-left .cap-spec-numeral { font-size: 22px !important; }
        }
        @media (max-width: 390px) {
          .cap-card { padding: 20px 16px !important; }
          .cap-specialty { padding: 24px 16px 20px !important; }
        }

        /* Reduced motion: freeze lift + top-rule */
        @media (prefers-reduced-motion: reduce) {
          .cap-card { transform: none !important; transition: border-color 0.01ms !important; }
        }
      `}</style>

      <div
        className="cap-container"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}
        >
          {/* ── Section heading ── */}
          <SectionHeading
            numeral="01"
            eyebrow="What We Do"
            lead="Everything worth handing"
            accent="to software."
          />

          {/* ── Lead sentence ── */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '17px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              margin: '-40px 0 0',
              maxWidth: '58ch',
            }}
          >
            Ten things we have already built and shipped — grouped by where they sit in
            an operation: the plumbing that moves your data, the work that turns input
            into finished output, and the platform your whole operation runs on.
          </motion.p>

          {/* ── Three capability groups ── */}
          {GROUPS.map((group) => (
            <motion.div
              key={group.label}
              variants={FADE_UP}
              style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
            >
              <GroupHeader label={group.label} caption={group.caption} />

              <motion.div
                className="cap-grid"
                variants={STAGGER_CONTAINER}
              >
                {group.items.map((cap, i) => (
                  <CapabilityCard key={cap.numeral} cap={cap} index={i} />
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* ── Specialty — full-width, set apart ── */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            <div
              className="cap-group-head"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '14px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--rule-strong)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontWeight: 600,
                  fontSize: '17px',
                  color: 'var(--ink)',
                  letterSpacing: 'var(--track-h3)',
                  flexShrink: 0,
                }}
              >
                The Specialty
              </span>
              <span
                aria-hidden="true"
                style={{ width: '18px', height: '1px', background: 'var(--gold)', alignSelf: 'center', flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: 'var(--ink-faint)',
                }}
              >
                same craft, a different canvas
              </span>
            </div>

            <div className="cap-specialty-grid">
              <SpecialtyCard cap={SPECIALTY} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
