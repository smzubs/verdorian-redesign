'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      orientation: 'vertical',
    })
    lenisRef.current = lenis

    let rafId = 0

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Expose for scroll-to-section
    ;(window as unknown as Record<string, unknown>).__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      delete (window as unknown as Record<string, unknown>).__lenis
    }
  }, [])

  return <>{children}</>
}
