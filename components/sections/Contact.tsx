'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IconMail, IconMapPin, IconCheck } from '@tabler/icons-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GlowButton } from '@/components/ui/GlowButton'
import { GradientText } from '@/components/ui/GradientText'
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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 'var(--r-md)',
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
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)'
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <section
      id="contact"
      aria-label="Contact Verdorian Technologies"
      style={{
        paddingTop: '200px',
        paddingBottom: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background arc glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '9999px',
          background: 'var(--c-arc)',
          opacity: 0.08,
          filter: 'blur(160px)',
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

          {/* H2 */}
          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: 'var(--t-h2)',
              letterSpacing: 'var(--track-h2)',
              lineHeight: 1.1,
              textWrap: 'balance',
              margin: '24px 0 0',
            }}
          >
            <span style={{ display: 'block', color: 'var(--c-text-1)' }}>
              Let&apos;s Build
            </span>
            <span style={{ display: 'block' }}>
              <GradientText as="span">Something Great.</GradientText>
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
                background: 'var(--c-forge)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--r-pill)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--c-text-2)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(139,92,246,0.4)'
                el.style.color = 'var(--c-text-1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.08)'
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
                background: 'var(--c-forge)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--r-pill)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--c-text-2)',
              }}
            >
              <IconMapPin size={16} stroke={1.5} aria-hidden="true" style={{ color: 'var(--c-arc)', flexShrink: 0 }} />
              Clarksville, TN
            </span>
          </motion.div>

          {/* Contact form */}
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
                        background: 'rgba(16,185,129,0.15)',
                        border: '1px solid rgba(16,185,129,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconCheck size={28} stroke={2} aria-hidden="true" style={{ color: '#34d399' }} />
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
                    {/* Row 1: Name + Email — stacks vertically on mobile */}
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

                    {/* Row 3: Submit */}
                    <button
                      type="submit"
                      aria-label="Send your message to Verdorian Technologies"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(104deg, rgba(253,253,253,0.05) 5%, rgba(240,240,228,0.10) 100%)',
                        WebkitBackdropFilter: 'blur(25px)',
                        backdropFilter: 'blur(25px)',
                        color: 'rgba(255,255,255,0.92)',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(255,255,255,0.08)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.2)',
                        padding: '12px 28px',
                        minHeight: '48px',
                        fontFamily: 'var(--font-geist), sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.25s var(--ease-expo)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.background = 'rgba(255, 255, 255, 0.92)'
                        el.style.color = '#000000'
                        el.style.borderColor = 'rgba(255,255,255,0.92)'
                        el.style.boxShadow = '0 4px 16px rgba(255,255,255,0.15)'
                        el.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLButtonElement
                        el.style.background = 'linear-gradient(104deg, rgba(253,253,253,0.05) 5%, rgba(240,240,228,0.10) 100%)'
                        el.style.color = 'rgba(255,255,255,0.92)'
                        el.style.borderColor = 'rgba(255,255,255,0.08)'
                        el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.2)'
                        el.style.transform = 'translateY(0)'
                      }}
                    >
                      Send Message →
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
