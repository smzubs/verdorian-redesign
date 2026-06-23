import React from 'react'

interface MockFrameProps {
  /** screen-reader description of the whole figure (inner data is decorative) */
  ariaLabel: string
  /** when set, renders a browser chrome bar with this address */
  chrome?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

/**
 * Framed "fine print" plate that holds an illustrative product-UI mockup.
 * Exposed to AT as a single labelled image so the representative data inside
 * is never read as real content.
 */
export function MockFrame({ ariaLabel, chrome, children, style }: MockFrameProps) {
  return (
    <div role="img" aria-label={ariaLabel} className="plate mock" style={{ overflow: 'hidden', ...style }}>
      {chrome && (
        <div className="mock-bar" aria-hidden="true">
          <div className="mock-dots">
            <span className="mock-dot" />
            <span className="mock-dot" />
            <span className="mock-dot" />
          </div>
          <span className="mock-url">{chrome}</span>
        </div>
      )}
      <div style={{ padding: '20px', position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  )
}
