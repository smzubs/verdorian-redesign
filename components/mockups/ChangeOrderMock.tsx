import React from 'react'
import { MockFrame } from './MockFrame'

/** ChangeOrderAI — a priced change order drafted from voice, routed for approval. */
export function ChangeOrderMock() {
  return (
    <MockFrame ariaLabel="ChangeOrderAI document — a priced change order drafted from a voice note and marked approved">
      <div className="mock-head">
        <div>
          <div className="mock-kicker">Change Order</div>
          <div className="mock-title">CO-0418</div>
        </div>
        <span className="mock-stage mock-stage-bound">Approved</span>
      </div>
      <div style={{ fontSize: '12.5px', color: 'var(--ink-soft)', marginBottom: '14px' }}>
        Bayfront Tower — Level 7
      </div>
      <table className="mock-table">
        <tbody>
          <tr>
            <td>Add 3× GFCI circuits</td>
            <td className="mock-num">$2,400</td>
          </tr>
          <tr>
            <td>Relocate sub-panel B</td>
            <td className="mock-num">$1,150</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>Total</td>
            <td className="mock-num" style={{ fontWeight: 600 }}>
              $3,550
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
        <span aria-hidden="true" style={{ width: '34px', height: '1px', background: 'var(--gold)' }} />
        <span
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'var(--ink-soft)',
          }}
        >
          Signed · 06.14 · K. Daniels
        </span>
      </div>
      <div className="mock-foot">Drafted from a 40-second voice note.</div>
    </MockFrame>
  )
}
