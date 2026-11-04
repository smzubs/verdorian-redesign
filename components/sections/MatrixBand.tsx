'use client'

import React from 'react'

// Full-width centered "rolling promises" band — an iOS-picker 3D drum of automation lines.
// Each row sits on a rotating cylinder; rows are black and glow blue only while passing
// through the centre glass ribbon. Geometry auto-scales with the line count.
const MATRIX_SENTENCES = [
  'Built with ai. Designed around your business.',
  'Automate the work that slows you down.',
  'Your process, your way — no software degree required.',
  'Repetitive tasks become reliable automation.',
  'Less retyping. More time on the phone with clients.',
  'Automation that fits how your team works.',
  'Fewer typos in invoices. Fewer late follow-ups.',
  'Your partner for a smarter, simpler business.',
  'Automate today. Grow faster tomorrow.',
  'Less busywork. More business momentum.',
  'The paperwork gets done while you’re on the job.',
  'The reports that used to take you a Saturday.',
  'Turn daily tasks into automatic progress.',
  'Built around how your team already works.',
  'The ai that supports how you operate.',
  'Reduce manual work. Increase business clarity.',
  'Test it working before you ever buy it.',
  'Stop chasing follow-ups. Start closing them.',
]
const DRUM_PERIOD = 30 // seconds per full rotation (must match the CSS animation durations)
const DRUM_RADIUS = Math.round(21 / Math.sin(Math.PI / MATRIX_SENTENCES.length))

export default function MatrixBand() {
  return (
    <section className="mb-section" aria-hidden="true">
      <style>{`
        @keyframes mbSpin { from { transform: rotateX(0deg); } to { transform: rotateX(-360deg); } }
        @keyframes mbGlow {
          /* Glow window must stay shorter than the per-row stagger (period / row count,
             ≈1.67s at 30s/18 rows) or two rows light up at once outside the ribbon. */
          0%, 48%   { color: #9A8D93; }
          50%       { color: #E39AA8; }
          52%, 100% { color: #9A8D93; }
        }
        .mb-section {
          position: relative; padding: 4px 0 12px; overflow: hidden;
          content-visibility: auto;
          contain-intrinsic-size: auto 230px;
        }
        .mb-stage {
          position: relative;
          height: 176px;
          margin: 0 auto;
          perspective: 1700px;
          /* scrim keeps the topo lines from running through the type */
          background: radial-gradient(ellipse 46% 62% at 50% 50%, rgba(14, 10, 13, 0.88) 0%, transparent 72%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%);
                  mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%);
        }
        /* centre glass ribbon (transparent floating selection bar) */
        .mb-ribbon {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: min(560px, calc(100vw - 48px));
          height: 34px;
          border-radius: 11px;
          border: 1px solid rgba(214, 138, 154, 0.5);
          background: rgba(255, 255, 255, 0.025);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.08) inset,
            0 8px 20px -10px rgba(0, 0, 0, 0.484),
            0 2px 7px -3px rgba(195, 112, 128, 0.22);
          pointer-events: none;
          z-index: 2;
        }
        .mb-drum {
          position: absolute; top: 50%; left: 0; right: 0; height: 0;
          transform-style: preserve-3d;
          will-change: transform;
          animation: mbSpin 30s linear infinite;
        }
        .mb-row {
          position: absolute; top: -16px; left: 0; right: 0; height: 32px;
          display: flex; align-items: center; justify-content: center;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          white-space: nowrap;
          font-family: var(--font-body), system-ui, sans-serif;
          font-size: clamp(13px, 1.2vw, 16px);
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #9A8D93;
          text-shadow: 0 0 3px rgba(214, 138, 154, 0.18);
          will-change: color;
          animation: mbGlow 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .mb-drum, .mb-row { animation: none !important; }
          .mb-row { color: #9A8D93; }
        }
      `}</style>
      <div className="mb-stage">
        <span className="mb-ribbon" />
        <div className="mb-drum">
          {MATRIX_SENTENCES.map((s, i) => (
            <span
              key={i}
              className="mb-row"
              style={{
                transform: `rotateX(${(i * 360) / MATRIX_SENTENCES.length}deg) translateZ(${DRUM_RADIUS}px)`,
                animationDelay: `${(i * (DRUM_PERIOD / MATRIX_SENTENCES.length) - DRUM_PERIOD / 2).toFixed(2)}s`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
