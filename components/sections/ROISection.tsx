'use client'

import React, { useState, useId, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

interface SliderConfig {
  id: string
  label: string
  min: number
  max: number
  step: number
  value: number
  unit: string
  unitPosition: 'prefix' | 'suffix'
  formatValue: (v: number) => string
}

// ─── Slider Component ────────────────────────────────────────────────────────

interface SliderRowProps {
  config: SliderConfig
  onChange: (value: number) => void
}

function SliderRow({ config, onChange }: SliderRowProps) {
  const { id, label, min, max, step, value, formatValue } = config
  const labelId = `${id}-label`
  const outputId = `${id}-output`
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="roi-slider-row" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <label
          id={labelId}
          htmlFor={id}
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
          }}
        >
          {label}
        </label>
        <output
          id={outputId}
          htmlFor={id}
          aria-live="polite"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: '22px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '72px',
            textAlign: 'right',
          }}
        >
          {formatValue(value)}
        </output>
      </div>

      {/* Track + thumb */}
      <div
        style={{
          position: 'relative',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Filled track */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
            height: '3px',
            borderRadius: '2px',
            background: 'var(--rule-strong)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              background: 'var(--gold)',
              borderRadius: '2px',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-labelledby={labelId}
          aria-valuetext={formatValue(value)}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-range-input"
          style={{
            position: 'relative',
            width: '100%',
            height: '28px',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            appearance: 'none',
            background: 'transparent',
            outline: 'none',
            margin: 0,
            padding: 0,
            zIndex: 1,
          }}
        />
      </div>

      {/* Min / Max hint */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '10px', color: 'var(--ink-faint)', letterSpacing: '0.06em' }}>
          {formatValue(min)}
        </span>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '10px', color: 'var(--ink-faint)', letterSpacing: '0.06em' }}>
          {formatValue(max)}
        </span>
      </div>
    </div>
  )
}

// ─── Result Panel ─────────────────────────────────────────────────────────────

interface ResultPanelProps {
  monthly: number
  annual: number
  shouldReduceMotion: boolean
}

function ResultPanel({ monthly, annual, shouldReduceMotion }: ResultPanelProps) {
  const fmtMonthly = monthly.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
  const fmtAnnual = annual.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

  return (
    <div
      className="glass-card roi-result-panel"
      role="region"
      aria-label="Estimated cost result"
      aria-live="polite"
      aria-atomic="true"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '28px',
        padding: '40px 36px',
        minHeight: '280px',
        position: 'relative',
      }}
    >
      {/* Result glow orb — decorative, reduced-motion-safe */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '280px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(24,119,242,0.08) 0%, transparent 72%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            marginBottom: '12px',
          }}
        >
          Estimated monthly cost
        </p>

        {/* Primary figure */}
        <motion.div
          key={fmtMonthly}
          initial={shouldReduceMotion ? false : { opacity: 0.6, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          aria-label={`Monthly cost: ${fmtMonthly}`}
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(42px, 8vw, 72px)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1,
            color: 'var(--gold)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {fmtMonthly}
        </motion.div>

        {/* Hairline rule */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'var(--rule)',
            margin: '20px 0',
            maxWidth: '80%',
          }}
        />

        {/* Annual secondary stat */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              marginBottom: '6px',
            }}
          >
            Or annually
          </p>
          <motion.div
            key={fmtAnnual}
            initial={shouldReduceMotion ? false : { opacity: 0.6, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            aria-label={`Annual cost: ${fmtAnnual}`}
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              fontWeight: 400,
              letterSpacing: '-0.012em',
              color: 'var(--ink-soft)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {fmtAnnual}
          </motion.div>
        </div>
      </div>

      {/* Automation opportunity prompt */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid var(--rule)',
          paddingTop: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '13px',
            lineHeight: 1.55,
            color: 'var(--ink-soft)',
          }}
        >
          Most of this cost is{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--ink)' }}>recoverable</em>.
          ai automation typically returns 60&ndash;90% of repetitive process time.
        </p>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ROISection() {
  const shouldReduceMotion = useReducedMotion() ?? false
  const uid = useId()

  const [people, setPeople] = useState<number>(3)
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(5)
  const [hourlyCost, setHourlyCost] = useState<number>(35)

  const monthly = people * hoursPerWeek * hourlyCost * 4.33
  const annual = monthly * 12

  const handleContact = useCallback(() => {
    scrollToSection('contact')
  }, [])

  const sliders: SliderConfig[] = [
    {
      id: `${uid}-people`,
      label: 'People doing the task',
      min: 1,
      max: 50,
      step: 1,
      value: people,
      unit: '',
      unitPosition: 'suffix',
      formatValue: (v) => `${v} ${v === 1 ? 'person' : 'people'}`,
    },
    {
      id: `${uid}-hours`,
      label: 'Hours per week, per person',
      min: 1,
      max: 40,
      step: 1,
      value: hoursPerWeek,
      unit: 'hrs',
      unitPosition: 'suffix',
      formatValue: (v) => `${v} hr${v === 1 ? '' : 's'}`,
    },
    {
      id: `${uid}-rate`,
      label: 'Hourly cost (wages + overhead)',
      min: 10,
      max: 150,
      step: 5,
      value: hourlyCost,
      unit: '$',
      unitPosition: 'prefix',
      formatValue: (v) => `$${v}/hr`,
    },
  ]

  const handlers: Array<(v: number) => void> = [
    (v) => setPeople(v),
    (v) => setHoursPerWeek(v),
    (v) => setHourlyCost(v),
  ]

  return (
    <section
      id="roi"
      aria-labelledby="roi-heading"
      style={{
        scrollMarginTop: '84px',
        paddingTop: '104px',
        paddingBottom: '80px',
        background: 'var(--paper-deep)',
        borderTop: '1px solid var(--rule-strong)',
      }}
    >
      {/* ── Scoped styles ───────────────────────────────────────── */}
      <style>{`
        /* Range thumb — WebKit */
        .roi-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--paper-bright);
          border: 2px solid var(--gold);
          box-shadow: 0 1px 6px rgba(24, 119, 242, 0.20), 0 0 0 0 rgba(24, 119, 242, 0);
          cursor: pointer;
          transition: box-shadow 0.18s ease, transform 0.15s ease;
        }
        .roi-range-input::-webkit-slider-thumb:hover {
          box-shadow: 0 1px 8px rgba(24, 119, 242, 0.30), 0 0 0 5px rgba(24, 119, 242, 0.10);
          transform: scale(1.08);
        }
        .roi-range-input:focus-visible::-webkit-slider-thumb {
          outline: none;
          box-shadow: 0 0 0 3px var(--paper), 0 0 0 5px var(--gold);
        }

        /* Range thumb — Firefox */
        .roi-range-input::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--paper-bright);
          border: 2px solid var(--gold);
          box-shadow: 0 1px 6px rgba(24, 119, 242, 0.20);
          cursor: pointer;
          transition: box-shadow 0.18s ease, transform 0.15s ease;
        }
        .roi-range-input::-moz-range-thumb:hover {
          box-shadow: 0 1px 8px rgba(24, 119, 242, 0.30), 0 0 0 5px rgba(24, 119, 242, 0.10);
          transform: scale(1.08);
        }
        .roi-range-input:focus-visible::-moz-range-thumb {
          outline: none;
          box-shadow: 0 0 0 3px var(--paper), 0 0 0 5px var(--gold);
        }

        /* Range track — Firefox */
        .roi-range-input::-moz-range-track {
          height: 3px;
          background: var(--rule-strong);
          border-radius: 2px;
        }
        .roi-range-input::-moz-range-progress {
          height: 3px;
          background: var(--gold);
          border-radius: 2px;
        }

        /* Focus ring on the outer input (fallback for browsers that don't show thumb focus) */
        .roi-range-input:focus-visible {
          outline: none;
        }

        /* Reduced motion: disable the thumb transition */
        @media (prefers-reduced-motion: reduce) {
          .roi-range-input::-webkit-slider-thumb {
            transition: none;
          }
          .roi-range-input::-moz-range-thumb {
            transition: none;
          }
        }

        /* Two-column layout: inputs | result */
        .roi-calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--rule-strong);
          box-shadow: var(--shadow-card);
        }

        /* Input panel */
        .roi-inputs-panel {
          background: var(--paper-bright);
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Divider between panels */
        .roi-panel-divider {
          width: 1px;
          background: var(--rule-strong);
          flex-shrink: 0;
        }

        /* Mobile: stack vertically */
        @media (max-width: 767px) {
          .roi-calculator-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .roi-panel-divider {
            display: none;
          }
          .roi-inputs-panel {
            padding: 32px 24px;
          }
          .roi-result-panel {
            padding: 32px 24px !important;
            min-height: unset !important;
          }
          .roi-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .roi-header-sub {
            font-size: 15px !important;
          }
        }

        /* Ensure min tap target on sliders */
        .roi-range-input {
          min-height: 48px;
        }
      `}</style>

      <div
        className="roi-container"
        style={{ maxWidth: '1100px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}
        >
          {/* ── Header ─────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
            <SectionHeading
              numeral="04"
              eyebrow="THE MATH"
              lead="Small tasks become expensive"
              accent="when they repeat every day."
              align="center"
            />

            <motion.p
              variants={FADE_UP}
              id="roi-heading"
              className="roi-header-sub"
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--ink-soft)',
                maxWidth: '58ch',
              }}
            >
              A 30-minute task may look harmless. But when multiple people repeat it every week,
              it quietly becomes a serious cost.
            </motion.p>
          </div>

          {/* ── Calculator ─────────────────────────────────────── */}
          <motion.div variants={FADE_UP}>
            <div className="roi-calculator-grid" role="group" aria-label="ROI calculator">
              {/* Input column */}
              <div className="roi-inputs-panel">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-faint)',
                    }}
                  >
                    Describe the task
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '13px',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.5,
                    }}
                  >
                    Adjust to match any repetitive process in your operation.
                  </p>
                </div>

                {sliders.map((slider, i) => (
                  <SliderRow
                    key={slider.id}
                    config={slider}
                    onChange={handlers[i]}
                  />
                ))}

                {/* Disclaimer */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '11px',
                    lineHeight: 1.55,
                    color: 'var(--ink-faint)',
                    borderTop: '1px solid var(--rule)',
                    paddingTop: '16px',
                    marginTop: '4px',
                  }}
                >
                  This is a simple estimate. Actual automation potential depends on the workflow.
                </p>
              </div>

              {/* Visual divider — hidden on mobile via CSS */}
              <div className="roi-panel-divider" aria-hidden="true" />

              {/* Result column */}
              <ResultPanel
                monthly={monthly}
                annual={annual}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </motion.div>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <motion.div
            variants={FADE_UP}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <GlowButton
              variant="ink"
              size="lg"
              onClick={handleContact}
            >
              Find My First Automation Opportunity
            </GlowButton>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '12px',
                color: 'var(--ink-faint)',
                letterSpacing: '0.04em',
              }}
            >
              Free automation audit &mdash; we find the tasks worth automating first.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
