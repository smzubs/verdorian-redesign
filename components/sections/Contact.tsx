'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { sendLead } from '@/app/actions/send-lead'

/* ─── Form state ─────────────────────────────────────────────────── */
interface AuditForm {
  name: string
  email: string
  taskToAutomate: string
  toolsCurrentlyUsed: string
}

const EMPTY_FORM: AuditForm = {
  name: '',
  email: '',
  taskToAutomate: '',
  toolsCurrentlyUsed: '',
}

/* ─── Input / label shared styles ───────────────────────────────── */
const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  color: 'rgba(244, 247, 252,0.60)',
  marginBottom: '6px',
}

const INPUT_BASE: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '3px',
  padding: '13px 14px',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '14px',
  color: 'var(--paper-bright)',
  outline: 'none',
  transition: 'border-color 0.3s var(--ease-prospectus), background 0.3s var(--ease-prospectus)',
  minHeight: '48px',
  boxSizing: 'border-box',
  caretColor: 'var(--gold)',
}

const INPUT_PLACEHOLDER_FIX = `
  .audit-field::placeholder { color: rgba(244, 247, 252,0.28); }
  .audit-field:focus {
    border-color: rgba(24,119,242,0.55);
    background: rgba(255,255,255,0.09);
    outline: none;
  }
  .audit-field:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
  }
`

/* ─── Component ─────────────────────────────────────────────────── */
type SubmitStatus = 'idle' | 'sending' | 'sent' | 'fallback'

export default function Contact() {
  const [form, setForm] = useState<AuditForm>(EMPTY_FORM)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Composes a pre-filled mailto draft to sm@verdorian.com — used when
  // server-side delivery is unavailable so the form never dead-ends.
  function openMailtoDraft() {
    const subject = `Test-drive request — ${form.name}`

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Task to automate: ${form.taskToAutomate}`,
      `Current tools: ${form.toolsCurrentlyUsed || 'Not specified'}`,
      ``,
      `---`,
      `Sent via verdorian.com/contact`,
    ].join('\n')

    window.location.href = `mailto:sm@verdorian.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    const { ok } = await sendLead(form)

    if (ok) {
      setStatus('sent')
      setForm(EMPTY_FORM)
    } else {
      setStatus('fallback')
      openMailtoDraft()
    }
  }

  return (
    <section
      id="contact"
      aria-label="Start your automation test-drive with Verdorian Technologies"
      style={{
        scrollMarginTop: '84px',
        padding: '120px 0 100px',
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24,119,242,0.20)',
      }}
    >
      {/* Scoped styles */}
      <style>{`
        ${INPUT_PLACEHOLDER_FIX}

        /* Reduced-motion: neutralise ambient keyframes */
        @media (prefers-reduced-motion: reduce) {
          .contact-crown { animation: none !important; opacity: 0.08 !important; }
        }

        /* Two-column layout on desktop */
        @media (min-width: 900px) {
          .contact-layout {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 72px !important;
            align-items: start !important;
          }
        }

        /* Full-width button on mobile */
        @media (max-width: 899px) {
          .contact-layout { display: flex !important; flex-direction: column !important; gap: 48px !important; }
          .audit-submit-btn { width: 100% !important; justify-content: center !important; }
          .contact-secondary-row { flex-direction: column !important; align-items: flex-start !important; }
        }

        /* 375px guard */
        @media (max-width: 390px) {
          .contact-wrap { padding: 0 20px !important; }
        }
      `}</style>

      {/* Blue crown glow — decorative */}
      <div
        className="contact-crown"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '380px',
          background: 'radial-gradient(ellipse 58% 72% at 50% 0%, rgba(24,119,242,0.20) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Secondary blue bloom — depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: '-10%',
          width: '560px',
          height: '420px',
          background: 'radial-gradient(ellipse 60% 60% at 70% 90%, rgba(99,102,241,0.10) 0%, transparent 68%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="contact-wrap"
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-64px' }}
        >
          {/* Section eyebrow */}
          <motion.div variants={FADE_UP} style={{ marginBottom: '56px' }}>
            <SectionLabel>Start Your Test-Drive</SectionLabel>
          </motion.div>

          {/* Two-column layout */}
          <div className="contact-layout">

            {/* ── LEFT: headline + sub-copy + secondary actions ── */}
            <motion.div
              variants={FADE_UP}
              style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontWeight: 500,
                  fontSize: 'var(--t-h2)',
                  letterSpacing: 'var(--track-h2)',
                  lineHeight: 1.06,
                  margin: 0,
                }}
              >
                <span style={{ display: 'block', color: 'var(--paper-bright)' }}>
                  Test-drive it working —
                </span>
                <span
                  style={{
                    display: 'block',
                    fontStyle: 'italic',
                    color: 'var(--gold)',
                  }}
                >
                  before you ever buy it.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  color: 'rgba(244, 247, 252,0.60)',
                  fontSize: '17px',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: '420px',
                }}
              >
                Describe one task your team repeats each week. We&apos;ll reply
                personally to book a free 20-minute fit call — then build the
                automation so you can test it on your real work first.
              </p>

              {/* Hairline rule */}
              <div
                aria-hidden="true"
                style={{
                  height: '1px',
                  width: '48px',
                  background: 'rgba(24,119,242,0.36)',
                }}
              />

              {/* Reassurance copy */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {[
                  'Free fit call — no spam, no sales pressure.',
                  '$500 starts the pilot, fully credited toward your build.',
                  'Honest answer: if automation won’t pay for itself, we’ll say so.',
                ].map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '13px',
                      color: 'rgba(244, 247, 252,0.44)',
                      lineHeight: 1.5,
                      margin: 0,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: 'var(--gold)',
                        flexShrink: 0,
                        fontSize: '10px',
                        marginTop: '2px',
                      }}
                    >
                      &#x25B8;
                    </span>
                    {line}
                  </p>
                ))}
              </div>

              {/* Secondary CTA */}
              <div
                className="contact-secondary-row"
                style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}
              >
                <GlowButton variant="ghost-light" size="lg" href="mailto:sm@verdorian.com">
                  Email Verdorian
                </GlowButton>

                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(244, 247, 252,0.28)',
                  }}
                >
                  or fill the form
                </span>
              </div>

              {/* Entity footnote */}
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(244, 247, 252,0.24)',
                  margin: 0,
                  marginTop: '4px',
                }}
              >
                Verdorian Technologies LLC
              </p>
            </motion.div>

            {/* ── RIGHT: glass form card ── */}
            <motion.div variants={FADE_UP}>
              <div
                className="glass-card"
                style={{
                  padding: '40px 36px',
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(28px) saturate(1.6)',
                  WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '16px',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.12) inset, 0 2px 8px rgba(20,24,32,0.18), 0 24px 64px -20px rgba(20,24,32,0.40)',
                }}
              >
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Automation test-drive request form"
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >

                  {/* Success state */}
                  {status === 'sent' && (
                    <p
                      role="status"
                      style={{
                        margin: 0,
                        padding: '12px 14px',
                        borderRadius: '3px',
                        border: '1px solid rgba(24,119,242,0.40)',
                        background: 'rgba(24,119,242,0.10)',
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '13.5px',
                        lineHeight: 1.55,
                        color: 'var(--paper-bright)',
                      }}
                    >
                      Request received — we&apos;ll reply personally within one
                      business day to book your fit call.
                    </p>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" style={LABEL_STYLE}>
                      Name <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="audit-field"
                      style={INPUT_BASE}
                      aria-required="true"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={LABEL_STYLE}>
                      Email <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="audit-field"
                      style={INPUT_BASE}
                      aria-required="true"
                    />
                  </div>

                  {/* Task to automate */}
                  <div>
                    <label htmlFor="contact-task" style={LABEL_STYLE}>
                      What task do you want to automate?{' '}
                      <span aria-hidden="true" style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <textarea
                      id="contact-task"
                      name="taskToAutomate"
                      required
                      rows={3}
                      placeholder="e.g. Weekly client reports, invoice processing"
                      value={form.taskToAutomate}
                      onChange={handleChange}
                      className="audit-field"
                      style={{
                        ...INPUT_BASE,
                        minHeight: '96px',
                        resize: 'vertical',
                        lineHeight: 1.6,
                      }}
                      aria-required="true"
                    />
                  </div>

                  {/* Current tools */}
                  <div>
                    <label htmlFor="contact-tools" style={LABEL_STYLE}>
                      Current tools{' '}
                      <span
                        style={{
                          color: 'rgba(244, 247, 252,0.28)',
                          fontSize: '9px',
                          letterSpacing: '0.14em',
                          fontWeight: 400,
                          textTransform: 'none',
                        }}
                      >
                        optional
                      </span>
                    </label>
                    <input
                      id="contact-tools"
                      name="toolsCurrentlyUsed"
                      type="text"
                      placeholder="Gmail, Sheets, HubSpot"
                      value={form.toolsCurrentlyUsed}
                      onChange={handleChange}
                      className="audit-field"
                      style={INPUT_BASE}
                      aria-label="Tools you currently use for this task (optional)"
                    />
                  </div>

                  {/* Submit */}
                  <div style={{ marginTop: '4px' }}>
                    <button
                      type="submit"
                      className="btn-blue audit-submit-btn"
                      disabled={status === 'sending'}
                      style={{
                        minHeight: '52px',
                        padding: '14px 28px',
                        fontSize: '12px',
                        letterSpacing: '0.18em',
                        width: '100%',
                        justifyContent: 'center',
                        cursor: status === 'sending' ? 'wait' : 'pointer',
                        opacity: status === 'sending' ? 0.7 : 1,
                      }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Request My Test-Drive'}
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        aria-hidden="true"
                        style={{ flexShrink: 0, position: 'relative', zIndex: 2, marginLeft: '8px' }}
                      >
                        <path
                          d="M1.5 1.5l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <p
                      style={{
                        marginTop: '12px',
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '11px',
                        color: 'rgba(244, 247, 252,0.32)',
                        textAlign: 'center',
                        lineHeight: 1.5,
                      }}
                    >
                      {status === 'fallback'
                        ? 'We opened a pre-filled email draft to sm@verdorian.com — hit send and it reaches us directly.'
                        : 'We reply personally to every request — no auto-responders.'}
                    </p>
                  </div>

                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
