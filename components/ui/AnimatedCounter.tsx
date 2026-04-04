'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  target: number | string
  duration?: number
  suffix?: string
  className?: string
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  className,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (typeof target === 'number') return '0'
    return target
  })
  const hasAnimatedRef = useRef(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // String targets: simple fade-in (no counting animation)
    if (typeof target === 'string') {
      setDisplayValue(target)
      return
    }

    const reduced = prefersReducedMotion()
    if (reduced) {
      setDisplayValue(String(target) + suffix)
      return
    }

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || hasAnimatedRef.current) return
        hasAnimatedRef.current = true
        observer.disconnect()

        const startTime = performance.now()
        const numericTarget = target as number

        function tick(now: number) {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = easeOutQuart(progress)
          const current = Math.round(eased * numericTarget)
          setDisplayValue(String(current) + suffix)

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick)
          } else {
            setDisplayValue(String(numericTarget) + suffix)
          }
        }

        rafRef.current = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [target, duration, suffix])

  // String target: fade-in wrapper
  if (typeof target === 'string') {
    return (
      <span
        ref={containerRef}
        className={cn('font-mono', className)}
        style={{
          fontFamily: 'var(--font-jetbrains, monospace)',
          animation: 'counterFadeIn 0.6s var(--ease-expo, ease) forwards',
        }}
      >
        {displayValue}
        <style>{`
          @keyframes counterFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes counterFadeIn {
              from { opacity: 1; }
              to   { opacity: 1; }
            }
          }
        `}</style>
      </span>
    )
  }

  return (
    <span
      ref={containerRef}
      className={cn('font-mono', className)}
      style={{
        fontFamily: 'var(--font-jetbrains, monospace)',
      }}
      aria-label={`${target}${suffix}`}
    >
      {displayValue}
    </span>
  )
}
