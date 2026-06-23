import React from 'react'
import { MockFrame } from './MockFrame'

const ROWS = [
  { asset: 'Ladder A-204', who: 'M. Reyes', ok: true },
  { asset: 'Harness H-118', who: 'M. Reyes', ok: true },
  { asset: 'Hoist HD-31', who: 'K. Obi', ok: false },
  { asset: 'Drill D-07', who: 'J. Park', ok: true },
]

/** QRSafePro — field inspection register. `chrome` adds browser framing (hero). */
export function QRSafeProMock({ chrome = false }: { chrome?: boolean }) {
  return (
    <MockFrame
      ariaLabel="QRSafePro inspection register — a field inspection log showing pass and fail results for each scanned asset"
      chrome={chrome ? 'qrsafepro.com/register' : undefined}
    >
      <div className="mock-head">
        <div>
          <div className="mock-kicker">Inspection Register</div>
          <div className="mock-title">248 assets · 4 sites</div>
        </div>
        <span className="stamp stamp-live">Live</span>
      </div>
      <table className="mock-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Inspector</th>
            <th style={{ textAlign: 'right' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.asset}>
              <td>{r.asset}</td>
              <td style={{ color: 'var(--ink-soft)' }}>{r.who}</td>
              <td className="mock-num">
                <span
                  style={{
                    color: r.ok ? 'var(--green-pass)' : 'var(--red-fail)',
                    fontWeight: 600,
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {r.ok ? 'Pass' : 'Fail'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mock-foot">Every inspection scanned and signed — a permanent record.</div>
    </MockFrame>
  )
}
