import React from 'react'
import { cn } from '@/lib/utils'

type AllowedElements =
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'div'
  | 'strong'
  | 'em'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: AllowedElements
}

export function GradientText({
  children,
  className,
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag
      className={cn(className)}
      style={{
        background: 'var(--grad-text)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline',
      }}
    >
      {children}
    </Tag>
  )
}
