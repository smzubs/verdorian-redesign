'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavLink = (id: string) => {
    setMobileOpen(false)
    setTimeout(() => scrollToSection(id), 100)
  }

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
          padding: '12px 24px',
          transition: 'all 0.4s var(--ease-expo)',
        }}
      >
        {/* iOS 26 Liquid Glass nav bar */}
        <div
          style={{
            maxWidth: '76rem',
            margin: '0 auto',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            borderRadius: '16px',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.68)'
              : 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(20px) saturate(180%) brightness(106%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(106%)',
            border: '1px solid rgba(255, 255, 255, 0.50)',
            boxShadow: scrolled
              ? `
                  0 6px 28px rgba(139, 92, 246, 0.08),
                  0 1px 4px rgba(0, 0, 0, 0.04),
                  inset 0 1px 0 rgba(255, 255, 255, 0.80),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `
              : `
                  0 4px 20px rgba(0, 0, 0, 0.06),
                  0 1px 3px rgba(0, 0, 0, 0.03),
                  inset 0 1px 0 rgba(255, 255, 255, 0.70),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.04)
                `,
            transition: 'all 0.4s var(--ease-expo)',
            position: 'relative',
            isolation: 'isolate',
            overflow: 'hidden',
          }}
        >
          {/* Nav bar top highlight layer */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              borderRadius: '16px 16px 0 0',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Left: Wordmark */}
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
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 800,
                fontSize: '15px',
                color: 'var(--c-text-1)',
                lineHeight: 1,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              VERDORIAN
            </span>
            <span
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 600,
                fontSize: '7px',
                color: 'var(--c-text-3)',
                letterSpacing: '0.30em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              TECHNOLOGIES
            </span>
          </button>

          {/* Center: Glass tab pill with glassmorphic hover states */}
          <div
            className="hidden md:flex"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '4px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.04)',
              border: '1px solid rgba(139, 92, 246, 0.08)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => setActiveLink(link.id)}
                onMouseLeave={() => setActiveLink(null)}
                aria-label={`Navigate to ${link.label} section`}
                style={{
                  position: 'relative',
                  background: activeLink === link.id
                    ? 'rgba(139, 92, 246, 0.10)'
                    : 'transparent',
                  boxShadow: activeLink === link.id
                    ? 'inset 0 1px 0 rgba(255,255,255,0.30), 0 1px 3px rgba(139,92,246,0.08)'
                    : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '7px 16px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-geist), sans-serif',
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.02em',
                  color: activeLink === link.id
                    ? 'var(--c-plasma)'
                    : 'var(--c-text-2)',
                  transition: 'all 0.2s var(--ease-expo)',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 2 }}>
            <div className="hidden md:block">
              <GlowButton
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Get started
              </GlowButton>
            </div>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex md:hidden"
              style={{
                background: 'rgba(139, 92, 246, 0.06)',
                border: '1px solid rgba(139, 92, 246, 0.12)',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--c-text-1)',
                transition: 'all 0.2s',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.g
                      key="x"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.g>
                  ) : (
                    <motion.g
                      key="hamburger"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
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

      {/* Mobile overlay — frosted cream glass */}
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
              background: 'rgba(250, 247, 242, 0.88)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => handleNavLink(link.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '52px',
                  padding: '12px 40px',
                  fontFamily: 'var(--font-geist), sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'var(--c-text-1)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--c-plasma)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--c-text-1)' }}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.06 }}
              style={{ marginTop: '24px' }}
            >
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => handleNavLink('contact')}
              >
                Get started
              </GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
