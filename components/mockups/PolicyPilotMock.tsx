import React from 'react'
import { MockFrame } from './MockFrame'

const SUBS = [
  { acct: 'Delta Mfg.', carrier: 'Hartford', stage: 'Bound', bound: true },
  { acct: 'Riverside HOA', carrier: 'Travelers', stage: 'Quoted', bound: false },
  { acct: 'Nguyen LLC', carrier: 'Chubb', stage: 'In review', bound: false },
  { acct: 'Vail Logistics', carrier: 'Liberty', stage: 'Intake', bound: false },
]

/** PolicyPilot — submissions pipeline from intake to bound. */
export function PolicyPilotMock() {
  return (
    <MockFrame ariaLabel="PolicyPilot submissions pipeline — accounts tracked from intake through bound across multiple carriers">
      <div className="mock-head">
        <div>
          <div className="mock-kicker">Submissions</div>
          <div className="mock-title">This week</div>
        </div>
        <span className="mock-kicker" style={{ alignSelf: 'center' }}>
          12 accounts
        </span>
      </div>
      <table className="mock-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Carrier</th>
            <th style={{ textAlign: 'right' }}>Stage</th>
          </tr>
        </thead>
        <tbody>
          {SUBS.map((s) => (
            <tr key={s.acct}>
              <td>{s.acct}</td>
              <td style={{ color: 'var(--ink-soft)' }}>{s.carrier}</td>
              <td style={{ textAlign: 'right' }}>
                <span className={s.bound ? 'mock-stage mock-stage-bound' : 'mock-stage'}>{s.stage}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mock-foot">Every account, one tracked pipeline.</div>
    </MockFrame>
  )
}
