'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "We’re not a tech company — is our work even automatable?",
    answer:
      "That’s most of who we build for. If your work runs on forms, spreadsheets, approvals, inspections, or documents, it’s a strong candidate. The $497 audit tells you exactly which parts pay off first.",
  },
  {
    question: "How is this different from buying a tool or wiring up Zapier?",
    answer:
      "Off-the-shelf tools cover the easy 80% and stall on the part that matters — the regulatory edge cases, the real-world exceptions, the reliability an audit depends on. We build production systems for that hard 20%, and we stay on to keep them working.",
  },
  {
    question: "What does it cost, really?",
    answer:
      "The audit is $497. Most buildouts run $1,500–$5,000 depending on scope. Ongoing care is monthly and optional. You see the full plan and ROI before any build starts.",
  },
  {
    question: "How long until we see something?",
    answer:
      "The audit lands fast, and frontier ai agents compress the foundational build from months into days — so you’re using a working system in weeks, not quarters.",
  },
]

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)
  const answerId = `faq-answer-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <motion.div
      variants={FADE_UP}
      style={{
        borderBottom: '1px solid var(--rule-strong)',
      }}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '28px 0',
          textAlign: 'left',
          minHeight: '48px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontWeight: 600,
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: 'var(--ink)',
            lineHeight: 1.3,
            letterSpacing: 'var(--track-h3)',
          }}
        >
          {item.question}
        </span>
        {/* Toggle icon */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid var(--rule-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            color: 'var(--gold)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '16px',
                color: 'var(--ink-soft)',
                lineHeight: 1.72,
                margin: 0,
                paddingBottom: '28px',
                maxWidth: '62ch',
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'var(--paper)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      <style>{`
        @media (max-width: 767px) { .faq-container { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
      <div
        className="faq-container"
        style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <motion.div variants={FADE_UP}>
              <SectionLabel>Common Questions</SectionLabel>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 500,
                fontSize: 'var(--t-h2)',
                letterSpacing: 'var(--track-h2)',
                lineHeight: 1.06,
                margin: 0,
                maxWidth: '18ch',
              }}
            >
              <span style={{ display: 'block', color: 'var(--ink)' }}>Questions we</span>
              <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>hear first.</span>
            </motion.h2>
          </div>

          {/* FAQ list */}
          <div
            style={{ borderTop: '1px solid var(--rule-strong)' }}
            role="list"
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQRow key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
