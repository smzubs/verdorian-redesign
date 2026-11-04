'use client'

import React from 'react'
import Image from 'next/image'
import { scrollToSection } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'What We Build', id: 'automate' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'Our Work', id: 'trust' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        background: 'linear-gradient(180deg, #0C070A 0%, var(--midnight-deep) 100%)',
        borderTop: '1px solid rgba(195, 112, 128, 0.14)',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <style>{`
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: clamp(20px, 5vw, 48px);
          padding-right: clamp(20px, 5vw, 48px);
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
          color: rgba(244, 238, 229, 0.7);
          transition: color 0.25s var(--ease-prospectus);
          text-align: left;
        }
        .footer-link:hover { color: var(--gold); }
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column; align-items: center; text-align: center; padding-left: 20px !important; padding-right: 20px !important; }
          .footer-wordmark, .footer-legal { align-items: center !important; text-align: center !important; }
          .footer-nav { justify-items: center; }
        }
      `}</style>
      <div className="footer-inner">
        {/* Left: wordmark */}
        <div className="footer-wordmark" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Image
            src="/brand/verdorian-lockup-light.webp"
            alt="Verdorian Technologies"
            width={720}
            height={124}
            style={{ height: '34px', width: 'auto', display: 'block' }}
          />
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
            ai-native software
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '13px',
              color: 'rgba(244, 238, 229, 0.42)',
              lineHeight: 1.6,
              maxWidth: '280px',
            }}
          >
            Ai-native software and smart automation — work done faster, and done right.
          </span>
        </div>

        {/* Center: ruled link column */}
        <nav aria-label="Footer navigation" className="footer-nav" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', columnGap: '40px' }}>
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
          <a
            href="/grow-your-business"
            className="footer-link"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            Grow Your Business
          </a>
          <a
            href="/trades"
            aria-label="ai operations for specialty trade contractors"
            className="footer-link"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            For Trade Contractors
          </a>
        </nav>

        {/* Right: legal */}
        <div
          className="footer-legal"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', textAlign: 'right' }}
        >
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(244, 238, 229, 0.6)' }}>
            &copy; 2026 Verdorian Technologies LLC
          </span>
          <a href="mailto:sm@verdorian.com" className="gold-link" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(244, 238, 229, 0.6)' }}>
            sm@verdorian.com
          </a>
          <span style={{ display: 'flex', gap: '14px' }}>
            <a href="/privacy" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(244, 238, 229, 0.6)', textDecoration: 'none' }}>
              Privacy
            </a>
            <a href="/terms" style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '12px', color: 'rgba(244, 238, 229, 0.6)', textDecoration: 'none' }}>
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
