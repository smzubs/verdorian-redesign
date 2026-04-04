'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
}

interface ParticleCanvasProps {
  particleCount?: number
  className?: string
}

const PLASMA_COLOR = '139,92,246'
const ARC_COLOR = '34,211,238'
const CONNECTION_DISTANCE = 130
const REPEL_RADIUS = 100
const REPEL_FORCE = 0.8

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function createParticle(width: number, height: number): Particle {
  const isPlasma = Math.random() < 0.6
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomBetween(-0.4, 0.4),
    vy: randomBetween(-0.4, 0.4),
    radius: randomBetween(1, 2.5),
    color: isPlasma ? PLASMA_COLOR : ARC_COLOR,
    alpha: randomBetween(0.3, 1.0),
  }
}

export function ParticleCanvas({
  particleCount = 80,
  className,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 35 : particleCount

    function initCanvas() {
      if (!canvas) return
      const parent = canvas.parentElement
      const w = parent ? parent.clientWidth : window.innerWidth
      const h = parent ? parent.clientHeight : window.innerHeight

      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx?.scale(dpr, dpr)
      return { w, h }
    }

    const dims = initCanvas()
    const w = dims?.w ?? window.innerWidth
    const h = dims?.h ?? window.innerHeight

    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(w, h)
    )

    function draw() {
      if (!canvas || !ctx) return
      const cssWidth = parseInt(canvas.style.width, 10) || canvas.width
      const cssHeight = parseInt(canvas.style.height, 10) || canvas.height

      ctx.clearRect(0, 0, cssWidth, cssHeight)

      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update positions and apply mouse repulsion
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repel
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE
          p.vx += (dx / dist) * force * 0.05
          p.vy += (dy / dist) * force * 0.05
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Clamp velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 0.4) {
          p.vx = (p.vx / speed) * 0.4
          p.vy = (p.vy / speed) * 0.4
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -10) p.x = cssWidth + 10
        if (p.x > cssWidth + 10) p.x = -10
        if (p.y < -10) p.y = cssHeight + 10
        if (p.y > cssHeight + 10) p.y = -10

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
      }

      // Draw connection lines — skip when reduced motion is preferred
      if (!prefersReduced) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i]
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < CONNECTION_DISTANCE) {
              const lineAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.35
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(${PLASMA_COLOR},${lineAlpha})`
              ctx.lineWidth = 0.6
              ctx.stroke()
            }
          }
        }
      }
    }

    // When reduced motion is preferred: draw a single static frame, no RAF loop
    if (prefersReduced) {
      draw()
      return
    }

    function loop() {
      if (document.hidden) {
        rafRef.current = requestAnimationFrame(loop)
        return
      }
      draw()
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // ResizeObserver
    const observer = new ResizeObserver(() => {
      const newDims = initCanvas()
      const nw = newDims?.w ?? window.innerWidth
      const nh = newDims?.h ?? window.innerHeight
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(nw, nh)
      )
    })

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement)
    }
    resizeObserverRef.current = observer

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [particleCount])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      className={cn(className)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
