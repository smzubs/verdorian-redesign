'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = ['hero', 'products', 'services', 'about', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const ticking = useRef(false)

  // Scroll → compact pill
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section via IntersectionObserver
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

  // Body scroll lock on mobile menu
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
          // Padding shrinks when scrolled so the pill floats with breathing room
          padding: scrolled ? '10px 24px' : '12px 24px',
          transition: 'padding 0.4s var(--ease-expo)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div
          animate={{
            maxWidth: scrolled ? '680px' : '1280px',
            height: scrolled ? '48px' : '56px',
            borderRadius: scrolled ? '980px' : '16px',
            paddingLeft: scrolled ? '16px' : '20px',
            paddingRight: scrolled ? '16px' : '20px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.50)',
            backdropFilter: 'blur(20px) saturate(180%) brightness(106%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(106%)',
            border: '1px solid rgba(255,255,255,0.50)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(139,92,246,0.10), 0 2px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.80), inset 0 -1px 0 rgba(0,0,0,0.05)'
              : '0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(0,0,0,0.03)',
            overflow: 'hidden',
            isolation: 'isolate',
            position: 'relative',
          }}
        >
          {/* Top highlight shimmer */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* LEFT: Wordmark — collapses to "V" badge when scrolled */}
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
              alignItems: 'center',
              gap: '8px',
              position: 'relative',
              zIndex: 2,
              flexShrink: 0,
              minWidth: scrolled ? '28px' : 'auto',
            }}
          >
            {/* V badge — shown when scrolled */}
            <motion.span
              animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.6, width: scrolled ? '28px' : '0px' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'rgba(139,92,246,0.10)',
                border: '1px solid rgba(139,92,246,0.18)',
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 800,
                fontSize: '13px',
                color: 'var(--c-plasma)',
                letterSpacing: '0.02em',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              V
            </motion.span>

            {/* Full wordmark — hidden when scrolled */}
            <motion.div
              animate={{ opacity: scrolled ? 0 : 1, width: scrolled ? '0px' : 'auto' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2px',
                overflow: 'hidden',
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
                  whiteSpace: 'nowrap',
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
                  whiteSpace: 'nowrap',
                }}
              >
                TECHNOLOGIES
              </span>
            </motion.div>
          </button>

          {/* CENTER: Nav tabs with sliding active indicator */}
          <div
            className="hidden md:flex"
            style={{
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
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              const isHovered = hoveredLink === link.id

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    position: 'relative',
                    background: (!isActive && isHovered) ? 'rgba(0,0,0,0.04)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '7px 16px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-geist), sans-serif',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '13px',
                    letterSpacing: '0.02em',
                    color: isActive ? 'var(--c-plasma)' : 'var(--c-text-2)',
                    transition: 'color 0.2s var(--ease-expo), background 0.15s ease, font-weight 0.1s',
                    whiteSpace: 'nowrap',
                    zIndex: 1,
                  }}
                >
                  {/* Sliding active pill indicator — layoutId magic */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '8px',
                        background: 'rgba(139, 92, 246, 0.12)',
                        border: '1px solid rgba(139, 92, 246, 0.20)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.30), 0 0 12px rgba(139,92,246,0.08)',
                        zIndex: 0,
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 2 }}>{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* RIGHT: CTA + hamburger */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'relative',
              zIndex: 2,
              flexShrink: 0,
            }}
          >
            <motion.div
              className="hidden md:block"
              animate={{ scale: scrolled ? 0.9 : 1, opacity: scrolled ? 0.85 : 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <GlowButton
                variant="gold"
                size="sm"
                shimmer
                onClick={() => scrollToSection('contact')}
              >
                Get a Quote
              </GlowButton>
            </motion.div>

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
        </motion.div>
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
              background: 'rgba(250, 247, 242, 0.92)',
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
                  fontWeight: 800,
                  fontSize: '24px',
                  color: activeSection === link.id ? 'var(--c-plasma)' : 'var(--c-text-1)',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--c-plasma)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color =
                    activeSection === link.id ? 'var(--c-plasma)' : 'var(--c-text-1)'
                }}
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
                variant="emerald"
                size="lg"
                shimmer
                onClick={() => handleNavLink('contact')}
              >
                Start a Project
              </GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
