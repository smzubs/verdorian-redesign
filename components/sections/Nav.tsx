'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { scrollToSection } from '@/lib/utils'

// This tab is a page of its own (/grow-your-business); the others scroll within the homepage.
const GROW_ID = 'grow-your-business'

const NAV_LINKS = [
  { label: 'What We Do', id: 'automate' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Our Work', id: 'trust' },
  { label: 'Grow Your Business', id: GROW_ID },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const ticking = useRef(false)
  const activeId = usePathname() === `/${GROW_ID}` ? GROW_ID : activeSection

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

  // Scrollspy: highlight the nav-link section whose top has crossed the reference line.
  // Deterministic — handles the untracked sections (problem/audience/workflow/roi) in between.
  useEffect(() => {
    let raf = false
    const update = () => {
      const refLine = window.innerHeight * 0.35
      let current = ''
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= refLine) current = id
      }
      setActiveSection(current)
      raf = false
    }
    const onScroll = () => {
      if (!raf) {
        raf = true
        window.requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navigate = useCallback((id: string) => {
    // Full load on purpose: client routing focuses the new page's first element, which pops open the skip link
    if (id === GROW_ID) window.location.href = `/${GROW_ID}`
    else scrollToSection(id)
  }, [])

  const handleNavLink = useCallback((id: string) => {
    setMobileOpen(false)
    setTimeout(() => navigate(id), 100)
  }, [navigate])

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: scrolled ? '10px' : '16px',
          left: '16px',
          right: '16px',
          zIndex: 1000,
          borderRadius: '20px',
          background: scrolled ? 'rgba(16, 11, 14, 0.9)' : 'rgba(16, 11, 14, 0.72)',
          border: '1px solid rgba(255, 255, 255, 0.096)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(255, 255, 255, 0.112) inset, 0 10px 28px -12px rgba(0, 0, 0, 0.66), 0 2px 8px -4px rgba(0, 0, 0, 0.264)'
            : '0 1px 0 rgba(255, 255, 255, 0.096) inset, 0 16px 38px -16px rgba(0, 0, 0, 0.528), 0 2px 8px -5px rgba(0, 0, 0, 0.22)',
          backdropFilter: 'blur(18px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.2)',
          transition: 'top 0.4s var(--ease-prospectus), background 0.4s var(--ease-prospectus), box-shadow 0.4s var(--ease-prospectus)',
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 'none',
            margin: 0,
            padding: scrolled ? '11px 24px' : '14px 26px',
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
            <Image
              src="/brand/verdorian-lockup-light.webp"
              alt="Verdorian Technologies"
              width={720}
              height={124}
              preload
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
          </button>

          {/* Center tabs — modern frosted segmented control with a sliding glass pill */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: 'center',
              gap: '2px',
              padding: '4px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.072)',
              backdropFilter: 'blur(14px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(14px) saturate(1.6)',
              border: '1px solid rgba(255, 255, 255, 0.096)',
              boxShadow: '0 1px 0 rgba(255, 255, 255, 0.112) inset, 0 6px 18px -12px rgba(0, 0, 0, 0.66)',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  className="nav-tab"
                  onClick={() => navigate(link.id)}
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '999px',
                        background: 'linear-gradient(180deg, rgba(214, 138, 154, 0.18), rgba(195, 112, 128, 0.12))',
                        border: '1px solid rgba(195, 112, 128, 0.24)',
                        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.096) inset, 0 4px 12px -6px rgba(195, 112, 128, 0.45)',
                        zIndex: 0,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right: hamburger (mobile only) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
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
                  color: activeId === link.id ? 'var(--gold)' : 'var(--ink)',
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
                Start Your Test-Drive
              </GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
