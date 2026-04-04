'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IconMail, IconMapPin, IconCheck } from '@tabler/icons-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'

interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Inputs: cream bg, warm border
  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--c-bg-base)',
    border: '1px solid var(--c-border)',
    borderRadius: '12px',
    padding: '12px 16px',
    minHeight: '48px',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    fontSize: '15px',
    color: 'var(--c-text-1)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--c-plasma)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.10)'
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--c-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <section
      id="contact"
      aria-label="Contact Verdorian Technologies"
      style={{
        paddingTop: '160px',
        paddingBottom: '160px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(139,92,246,0.04) 0%, rgba(34,211,238,0.02) 100%), var(--c-bg-alt)',
      }}
    >
      {/* Background ambient glow — very subtle on cream */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '400px',
          borderRadius: '9999px',
          background: 'var(--c-plasma)',
          opacity: 0.025,
          filter: 'blur(120px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '0',
          }}
        >
          {/* Label */}
          <motion.div variants={FADE_UP}>
            <SectionLabel>LET&apos;S BUILD TOGETHER</SectionLabel>
          </motion.div>

          {/* H2 — ghost headline */}
          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: 'var(--t-h2)',
              letterSpacing: 'var(--track-h2)',
              lineHeight: 1.1,
              margin: '24px 0 0',
            }}
          >
            <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
              Let&apos;s build
            </span>
            <span style={{ display: 'block', color: 'var(--c-text-3)' }}>
              something great.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '18px',
              color: 'var(--c-text-2)',
              marginTop: '16px',
              lineHeight: 1.6,
              maxWidth: '480px',
            }}
          >
            Have a project in mind? Let&apos;s talk about making it real.
          </motion.p>

          {/* Contact pills */}
          <motion.div
            variants={FADE_UP}
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '32px',
            }}
          >
            <a
              href="mailto:sm@verdorian.com"
              aria-label="Email us at sm@verdorian.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--c-bg-card)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-pill)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--c-text-2)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--c-border-hover)'
                el.style.color = 'var(--c-text-1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--c-border)'
                el.style.color = 'var(--c-text-2)'
              }}
            >
              <IconMail size={16} stroke={1.5} aria-hidden="true" style={{ color: 'var(--c-plasma)', flexShrink: 0 }} />
              sm@verdorian.com
            </a>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--c-bg-card)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--r-pill)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--c-text-2)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <IconMapPin size={16} stroke={1.5} aria-hidden="true" style={{ color: 'var(--c-arc)', flexShrink: 0 }} />
              Clarksville, TN
            </span>
          </motion.div>

          {/* Contact form — white card */}
          <motion.div
            variants={FADE_UP}
            style={{
              width: '100%',
              maxWidth: '560px',
              marginTop: '48px',
            }}
          >
            <GlassCard tilt={false}>
              <div style={{ padding: '32px' }}>
                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '32px 0',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconCheck size={28} stroke={2} aria-hidden="true" style={{ color: '#059669' }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-geist), sans-serif',
                          fontWeight: 600,
                          fontSize: '18px',
                          color: 'var(--c-text-1)',
                          margin: '0 0 8px',
                        }}
                      >
                        Message sent!
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          fontSize: '14px',
                          color: 'var(--c-text-2)',
                          margin: 0,
                        }}
                      >
                        We&apos;ll be in touch soon.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Name + Email */}
                    <div className="contact-name-email-row">
                      <div style={{ flex: '1 1 180px', minWidth: 0 }}>
                        <label htmlFor="contact-name" className="sr-only">
                          Your name (required)
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                          aria-required="true"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          style={inputStyle}
                        />
                      </div>
                      <div style={{ flex: '1 1 180px', minWidth: 0 }}>
                        <label htmlFor="contact-email" className="sr-only">
                          Email address (required)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="Email address"
                          autoComplete="email"
                          required
                          aria-required="true"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          style={inputStyle}
                        />
                      </div>
                      <style>{`
                        .contact-name-email-row {
                          display: flex;
                          gap: 16px;
                          margin-bottom: 16px;
                        }
                        @media (max-width: 480px) {
                          .contact-name-email-row {
                            flex-direction: column;
                          }
                        }
                      `}</style>
                    </div>

                    {/* Row 2: Message */}
                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="contact-message" className="sr-only">
                        Your message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        aria-required="true"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        style={{
                          ...inputStyle,
                          resize: 'vertical',
                          minHeight: '120px',
                        }}
                      />
                    </div>

                    {/* Row 3: Submit — solid purple pill */}
                    <button
                      type="submit"
                      aria-label="Send your message to Verdorian Technologies"
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--c-plasma)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '12px 24px',
                        minHeight: '48px',
                        fontFamily: 'var(--font-geist), sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 150ms ease, box-shadow 150ms ease, transform 150ms ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.backgroundColor = 'var(--c-plasma-dark)'
                        el.style.boxShadow = 'var(--shadow-button)'
                        el.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.backgroundColor = 'var(--c-plasma)'
                        el.style.boxShadow = 'none'
                        el.style.transform = 'translateY(0)'
                      }}
                      onMouseDown={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(0.98)'
                      }}
                      onMouseUp={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px) scale(1)'
                      }}
                    >
                      Send Message
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
