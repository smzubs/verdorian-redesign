import React from 'react'

interface PlateCaptionProps {
  /** e.g. "Plate I." */
  label: string
  children: string
}

/** Engraved gold plate label + italic figure caption, set beneath a mockup. */
export function PlateCaption({ label, children }: PlateCaptionProps) {
  return (
    <figcaption className="plate-caption">
      <span className="pc-label">{label}</span>
      <span className="pc-rule" aria-hidden="true" />
      <span className="pc-text">{children}</span>
    </figcaption>
  )
}
