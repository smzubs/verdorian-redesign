import React from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn('inline-flex flex-col items-center gap-0', className)}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 12px',
          borderRadius: 'var(--r-pill)',
          border: '1px solid rgba(139,92,246,0.3)',
          background: 'rgba(139,92,246,0.08)',
          fontFamily: 'var(--font-geist), sans-serif',
          fontSize: '13px',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: 'var(--track-label, 0.19em)',
          color: 'var(--c-plasma)',
        }}
      >
        <span
          aria-hidden="true"
          className="section-label-dot"
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '9999px',
            background: 'var(--c-arc)',
            flexShrink: 0,
            animation: 'sectionLabelPulse 2s ease-in-out infinite',
          }}
        />
        {children}
      </span>

      {/* Animated underline — grows left-to-right on entry */}
      <span
        aria-hidden="true"
        className="section-label-underline"
      />

      <style>{`
        @keyframes sectionLabelPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          .section-label-dot {
            animation: none !important;
          }
          .section-label-underline {
            animation: none !important;
            transform: scaleX(1) !important;
          }
        }
      `}</style>
    </span>
  )
}
