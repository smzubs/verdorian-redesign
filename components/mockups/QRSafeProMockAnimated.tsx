'use client'

import React, { useEffect, useState, useRef } from 'react'
import { MockFrame } from './MockFrame'

const ROWS = [
  { asset: 'Ladder A-204', who: 'M. Reyes', ok: true },
  { asset: 'Harness H-118', who: 'M. Reyes', ok: true },
  { asset: 'Hoist HD-31', who: 'K. Obi', ok: false },
  { asset: 'Drill D-07', who: 'J. Park', ok: true },
]

/**
 * Hero-only variant of QRSafeProMock with a restrained status-reveal animation.
 * Rows gain their PASS/FAIL status sequentially on a ~6s loop, suggesting
 * "automation running / work clearing."
 *
 * Reduced-motion: renders all rows in final complete state, no animation.
 * SSR: renders all rows in final complete state (no layout shift, no flash).
 * The animation only starts after the component mounts and confirms motion is OK.
 */
export function QRSafeProMockAnimated({ chrome = false }: { chrome?: boolean }) {
  // true = all rows shown (static final state, SSR-safe default)
  // false = animation mode, revealed controls which rows are "done"
  const [staticMode, setStaticMode] = useState(true)
  const [revealed, setRevealed] = useState(ROWS.length)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      // Reduced-motion: stay in static final state
      return
    }

    // Animation mode
    const REVEAL_INTERVAL = 900  // ms between each row reveal
    const HOLD_DURATION   = 3200 // ms to hold full state before reset
    const RESET_PAUSE     = 500  // ms of blank before restarting
    const INITIAL_DELAY   = 1400 // ms before first animation starts

    let current = 0

    function tick() {
      current += 1
      setRevealed(current)

      if (current < ROWS.length) {
        timerRef.current = setTimeout(tick, REVEAL_INTERVAL)
      } else {
        // All revealed — hold, then restart
        timerRef.current = setTimeout(() => {
          current = 0
          setRevealed(0)
          timerRef.current = setTimeout(tick, RESET_PAUSE)
        }, HOLD_DURATION)
      }
    }

    // Transition into animation mode: hide all rows, then start revealing
    timerRef.current = setTimeout(() => {
      setStaticMode(false)
      setRevealed(0)
      timerRef.current = setTimeout(tick, RESET_PAUSE)
    }, INITIAL_DELAY)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

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
      <table className="mock-table" aria-hidden="true">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Inspector</th>
            <th style={{ textAlign: 'right' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => {
            const isDone = staticMode || i < revealed
            return (
              <tr key={r.asset}>
                <td
                  style={{
                    opacity: isDone ? 1 : 0.2,
                    transition: staticMode ? 'none' : 'opacity 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  {r.asset}
                </td>
                <td
                  style={{
                    color: 'var(--ink-soft)',
                    opacity: isDone ? 1 : 0.2,
                    transition: staticMode ? 'none' : 'opacity 0.5s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  {r.who}
                </td>
                <td className="mock-num">
                  <span
                    style={{
                      color: r.ok ? 'var(--green-pass)' : 'var(--red-fail)',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      opacity: isDone ? 1 : 0,
                      transition: staticMode
                        ? 'none'
                        : 'opacity 0.4s cubic-bezier(0.22,1,0.36,1) 0.12s',
                    }}
                  >
                    {r.ok ? 'Pass' : 'Fail'}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mock-foot">Every inspection scanned and signed — a permanent record.</div>
    </MockFrame>
  )
}
