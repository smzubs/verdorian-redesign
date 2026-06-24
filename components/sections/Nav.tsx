'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Services', id: 'capabilities' },
  { label: 'How', id: 'how-i-build' },
  { label: 'Work', id: 'products' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = ['hero', 'capabilities', 'why-us', 'how-i-build', 'products', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavLink = useCallback((id: string) => {
    setMobileOpen(false)
    setTimeout(() => scrollToSection(id), 100)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(247, 243, 234, 0.82)' : 'rgba(247, 243, 234, 0.55)',
          borderBottom: scrolled ? '1px solid rgba(24, 119, 242, 0.18)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(1.18)' : 'blur(8px) saturate(1.05)',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.18)' : 'blur(8px) saturate(1.05)',
          transition: 'background 0.4s var(--ease-prospectus), border-color 0.4s var(--ease-prospectus), backdrop-filter 0.4s var(--ease-prospectus)',
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: scrolled ? '12px 24px' : '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.4s var(--ease-prospectus)',
          }}
        >
          {/* Wordmark */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            aria-label="Verdorian Technologies — back to top"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 600,
                fontSize: '20px',
                color: 'var(--ink)',
                lineHeight: 1,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Verdorian
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 600,
                fontSize: '8px',
                color: 'var(--ink-faint)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Technologies
            </span>
          </button>

          {/* Center tabs */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px 14px',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.02em',
                    color: isActive ? 'var(--gold)' : 'var(--ink-soft)',
                    transition: 'color 0.25s var(--ease-prospectus)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      style={{
                        position: 'absolute',
                        left: '14px',
                        right: '14px',
                        bottom: '0px',
                        height: '1.5px',
                        background: 'var(--gold)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <div className="hidden md:block">
              <GlowButton variant="ink" size="sm" onClick={() => scrollToSection('contact')}>
                LETS TALK!
              </GlowButton>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex md:hidden"
              style={{
                background: 'transparent',
                border: '1px solid var(--rule-strong)',
                borderRadius: 'var(--r-sm)',
                cursor: 'pointer',
                width: '44px',
                height: '44px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.g key="x" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}>
                      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.g>
                  ) : (
                    <motion.g key="hamburger" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — paper */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--paper)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => handleNavLink(link.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '52px',
                  padding: '12px 40px',
                  fontFamily: 'var(--font-display), serif',
                  fontWeight: 600,
                  fontSize: '28px',
                  color: activeSection === link.id ? 'var(--gold)' : 'var(--ink)',
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.06 }}
              style={{ marginTop: '24px' }}
            >
              <GlowButton variant="ink" size="lg" onClick={() => handleNavLink('contact')}>
                LETS TALK!
              </GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
