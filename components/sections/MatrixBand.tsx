'use client'

import React from 'react'

// Full-width centered "rolling promises" band — an iOS-picker 3D drum of automation lines.
// Each row sits on a rotating cylinder; rows are black and glow blue only while passing
// through the centre glass ribbon. Geometry auto-scales with the line count.
const MATRIX_SENTENCES = [
  'Built with AI. Designed around your business.',
  'Automate the work that slows you down.',
  'Your workflow, your way — smarter, faster.',
  'Repetitive tasks become reliable automation.',
  'Less manual work. More time to grow.',
  'Automation that fits how your team works.',
  'Reclaim time. Reduce mistakes. Move faster.',
  'Your partner for a smarter, simpler business.',
  'Automate today. Grow faster tomorrow.',
  'Less busywork. More business momentum.',
  'Smart systems for smarter business growth.',
  'Operations simplified by intelligent automation.',
  'Turn daily tasks into automatic progress.',
  'Workflows built to save real hours.',
  'AI that supports how you operate.',
  'Reduce manual work. Increase business clarity.',
  'Automation designed for teams that grow.',
  'Stop chasing tasks. Start scaling smarter.',
]
const DRUM_PERIOD = 30 // seconds per full rotation (must match the CSS animation durations)
const DRUM_RADIUS = Math.round(21 / Math.sin(Math.PI / MATRIX_SENTENCES.length))

export default function MatrixBand() {
  return (
    <section className="mb-section" aria-hidden="true">
      <style>{`
        @keyframes mbSpin { from { transform: rotateX(0deg); } to { transform: rotateX(-360deg); } }
        @keyframes mbGlow {
          0%, 43%   { color: #14181F; }
          47%, 53%  { color: #1E6FF0; }
          57%, 100% { color: #14181F; }
        }
        .mb-section {
          position: relative; background: var(--paper); padding: 14px 0 30px; overflow: hidden;
          content-visibility: auto;
          contain-intrinsic-size: auto 230px;
        }
        .mb-stage {
          position: relative;
          height: 176px;
          margin: 0 auto;
          perspective: 1700px;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%);
                  mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%);
        }
        /* centre glass ribbon (transparent floating selection bar) */
        .mb-ribbon {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: min(470px, 90vw);
          height: 32px;
          border-radius: 11px;
          border: 1px solid rgba(120,170,255,0.5);
          background: rgba(255,255,255,0.05);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.5) inset,
            0 8px 20px -10px rgba(15,23,42,0.22),
            0 2px 7px -3px rgba(24,119,242,0.22);
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
          font-family: ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: clamp(9.5px, 1.4vw, 13px);
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #14181F;
          text-shadow: 0 0 3px rgba(40,120,235,0.18);
          will-change: color;
          animation: mbGlow 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .mb-drum, .mb-row { animation: none !important; }
          .mb-row { color: #14181F; }
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
