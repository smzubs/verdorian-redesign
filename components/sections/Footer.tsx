'use client'

import React from 'react'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'products' },
  { label: 'How We Build', id: 'how-i-build' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'var(--c-bg-dark)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <style>{`
        .footer-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .footer-wordmark {
            align-items: center !important;
          }
          .footer-legal {
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 390px) {
          .footer-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 24px !important;
          }
        }
      `}</style>
      <div className="footer-inner">
        {/* Left: Wordmark */}
        <div className="footer-wordmark" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 800,
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.80)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            VERDORIAN
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.40)',
              lineHeight: 1.5,
              maxWidth: '240px',
            }}
          >
            Indie software studio. Web platforms, software automation, and iOS apps — built and shipped by one team.
          </span>
        </div>

        {/* Center: Nav links — glass-on-dark treatment */}
        <nav aria-label="Footer navigation">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, auto)',
              gap: '4px 8px',
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(8px) saturate(160%)',
              WebkitBackdropFilter: 'blur(8px) saturate(160%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '8px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                aria-label={`Navigate to ${link.label} section`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 16px',
                  minHeight: '44px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  transition: 'color 0.2s, background 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.color = 'rgba(255, 255, 255, 0.80)'
                  el.style.background = 'rgba(255, 255, 255, 0.06)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.color = 'rgba(255, 255, 255, 0.45)'
                  el.style.background = 'none'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Right: Legal */}
        <div
          className="footer-legal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
            textAlign: 'right',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.35)',
            }}
          >
            &copy; 2026 Verdorian Technologies LLC
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="/privacy"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.60)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.35)'
              }}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)', fontSize: '12px' }}>
              ·
            </span>
            <a
              href="/terms"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.60)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.35)'
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
