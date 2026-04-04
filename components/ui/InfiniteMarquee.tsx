'use client'

import React, { useId } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteMarqueeProps {
  items: React.ReactNode[]
  speed?: string
  gap?: string
  className?: string
  /** CSS color value to fade edges to — defaults to var(--c-bg-alt) for TechStack */
  edgeColor?: string
}

export function InfiniteMarquee({
  items,
  speed = '60s',
  gap = '40px',
  className,
  edgeColor = 'var(--c-bg-alt)',
}: InfiniteMarqueeProps) {
  const id = useId()
  const animationId = `marquee-${id.replace(/:/g, '')}`

  // Duplicate items for seamless loop
  const firstHalf = items.map((item, i) => ({ item, key: `a-${i}` }))
  const secondHalf = items.map((item, i) => ({ item, key: `b-${i}` }))
  const doubled = [...firstHalf, ...secondHalf]

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        maskImage: `linear-gradient(to right, transparent, ${edgeColor} 10%, ${edgeColor} 90%, transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, ${edgeColor} 10%, ${edgeColor} 90%, transparent)`,
      }}
    >
      <style>{`
        @keyframes ${animationId} {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .${animationId}-track {
          animation: ${animationId} ${speed} linear infinite;
        }
        .${animationId}-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .${animationId}-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      <div
        className={`${animationId}-track`}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          gap,
          willChange: 'transform',
        }}
      >
        {doubled.map(({ item, key }) => (
          <div
            key={key}
            style={{ flexShrink: 0 }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
