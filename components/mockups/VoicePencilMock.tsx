import React from 'react'

// Deterministic waveform (no Math.random — keeps SSR/CSR stable)
const BARS = [30, 55, 80, 45, 65, 90, 40, 70, 50, 85, 35, 60, 75, 45, 55, 80, 40, 65, 30, 70]

/** VoicePencil — a voice note transcribed into a clean note, framed as a phone. */
export function VoicePencilMock({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      role="img"
      aria-label="VoicePencil app — a voice note being transcribed into a clean, structured note on a phone"
      className="device-phone"
      style={style}
    >
      <div
        style={{
          borderRadius: '18px',
          overflow: 'hidden',
          background: 'var(--paper-deep)',
          border: '1px solid var(--rule)',
        }}
      >
        {/* status bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 16px 10px',
            fontSize: '11px',
            color: 'var(--ink-faint)',
            fontWeight: 600,
          }}
        >
          <span>9:41</span>
          <span className="mock-kicker" style={{ fontSize: '9px' }}>
            VoicePencil
          </span>
        </div>

        <div style={{ padding: '4px 16px 18px' }}>
          <div className="mock-kicker" style={{ marginBottom: '10px' }}>
            Voice note · 0:42
          </div>

          {/* waveform */}
          <div
            aria-hidden="true"
            style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '34px', marginBottom: '16px' }}
          >
            {BARS.map((h, i) => (
              <span
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i % 4 === 0 ? 'var(--gold)' : 'var(--rule-strong)',
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>

          {/* transcript card */}
          <div
            style={{
              background: 'var(--paper-bright)',
              border: '1px solid var(--rule)',
              borderRadius: 'var(--r-md)',
              padding: '14px',
            }}
          >
            <div className="mock-kicker" style={{ color: 'var(--gold)', marginBottom: '8px' }}>
              Transcript
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--ink)', margin: 0 }}>
              Follow up with the Henderson crew on the conduit order, and move Tuesday&apos;s walkthrough to 9:00.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <span className="mock-stage mock-stage-bound" style={{ fontSize: '9.5px' }}>
              Transcribed
            </span>
            <span className="mock-stage" style={{ fontSize: '9.5px' }}>
              Cleaned
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
