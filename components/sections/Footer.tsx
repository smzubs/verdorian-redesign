'use client'

import React from 'react'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        paddingTop: '32px',
        paddingBottom: '48px',
        borderTop: '1px solid var(--c-border)',
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
          gap: 48px;
        }
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-wordmark {
            align-items: center !important;
          }
          .footer-legal {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
      <div className="footer-inner">
        {/* Left: Wordmark */}
        <div className="footer-wordmark" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--c-text-1)',
              letterSpacing: '-0.02em',
            }}
          >
            VERDORIAN
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              color: 'var(--c-text-3)',
              lineHeight: 1.5,
              maxWidth: '220px',
            }}
          >
            Building the future of software from Clarksville, TN
          </span>
        </div>

        {/* Center: Nav links */}
        <nav aria-label="Footer navigation">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, auto)',
              gap: '4px 24px',
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
                  padding: '10px 0',
                  minHeight: '44px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '14px',
                  color: 'var(--c-text-2)',
                  transition: 'color 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color =
                    'var(--c-text-1)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color =
                    'var(--c-text-2)'
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
              color: 'var(--c-text-3)',
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
                color: 'var(--c-text-3)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--c-text-2)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--c-text-3)'
              }}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'var(--c-text-3)', fontSize: '12px' }}>
              ·
            </span>
            <a
              href="/terms"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                color: 'var(--c-text-3)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--c-text-2)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'var(--c-text-3)'
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
