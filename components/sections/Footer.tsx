'use client'

import React from 'react'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'What We Automate', id: 'automate' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Our Work', id: 'trust' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(247, 243, 234, 0.10)',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <style>{`
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }
        .footer-link {
          background: none; border: none; cursor: pointer;
          padding: 10px 0; min-height: 44px;
          font-family: var(--font-body), sans-serif;
          font-size: 13px; letter-spacing: 0.04em;
          color: rgba(247,243,234,0.5);
          transition: color 0.25s var(--ease-prospectus);
          text-align: left;
        }
        .footer-link:hover { color: var(--gold); }
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column; align-items: center; text-align: center; padding-left: 20px !important; padding-right: 20px !important; }
          .footer-wordmark, .footer-legal { align-items: center !important; text-align: center !important; }
          .footer-nav { align-items: center !important; }
        }
      `}</style>
      <div className="footer-inner">
        {/* Left: wordmark */}
        <div className="footer-wordmark" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display), serif',
              fontWeight: 600,
              fontSize: '22px',
              color: 'var(--paper-bright)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Verdorian
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'var(--gold)',
            }}
          >
            AI Automation Studio
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '13px',
              color: 'rgba(247, 243, 234, 0.42)',
              lineHeight: 1.6,
              maxWidth: '280px',
            }}
          >
            AI workflows, dashboards, and internal tools — built for the business work you shouldn&apos;t be doing manually.
          </span>
        </div>

        {/* Center: ruled link column */}
        <nav aria-label="Footer navigation" className="footer-nav" style={{ display: 'flex', flexDirection: 'column' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              aria-label={`Navigate to ${link.label} section`}
              className="footer-link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: legal */}
        <div
          className="footer-legal"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', textAlign: 'right' }}
        >
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(247, 243, 234, 0.35)' }}>
            &copy; 2026 Verdorian Technologies LLC
          </span>
          <a href="mailto:sm@verdorian.com" className="gold-link" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(247, 243, 234, 0.35)' }}>
            sm@verdorian.com
          </a>
        </div>
      </div>
    </footer>
  )
}
