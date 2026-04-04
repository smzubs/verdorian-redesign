'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandGithub,
  IconBrandAws,
  IconBrandPython,
  IconBrandVercel,
  IconBrandTailwind,
  IconBrandOpenai,
  IconBrandFramer,
  IconDatabase,
  IconBrandTypescript,
  IconBrandSupabase,
  IconSparkles,
} from '@tabler/icons-react'
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { TECH_STACK } from '@/lib/utils'

type TablerIcon = React.ComponentType<{ size?: number; stroke?: number; style?: React.CSSProperties }>

// Map tech names to tabler icons
const TECH_ICON_MAP: Record<string, TablerIcon> = {
  'React Native': IconBrandReact,
  'Next.js': IconBrandNextjs,
  'Expo': IconBrandReact,
  'Supabase': IconBrandSupabase,
  'TypeScript': IconBrandTypescript,
  'Node.js': IconBrandNodejs,
  'Vercel': IconBrandVercel,
  'Python': IconBrandPython,
  'OpenAI': IconBrandOpenai,
  'Claude AI': IconSparkles,
  'PostgreSQL': IconDatabase,
  'Tailwind CSS': IconBrandTailwind,
  'GitHub': IconBrandGithub,
  'AWS': IconBrandAws,
  'Framer Motion': IconBrandFramer,
}

function TechPill({ name }: { name: string }) {
  const IconComponent = TECH_ICON_MAP[name]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--c-forge)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 'var(--r-pill)',
        padding: '8px 16px',
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        color: 'var(--c-text-1)',
        whiteSpace: 'nowrap',
        transition: 'border-color 0.2s var(--ease-expo)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.borderColor = 'var(--c-plasma)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.borderColor = 'rgba(255,255,255,0.07)'
      }}
    >
      {IconComponent && (
        <IconComponent
          size={20}
          stroke={1.5}
          aria-hidden="true"
          style={{ color: 'var(--c-plasma)', flexShrink: 0 }}
        />
      )}
      {name}
    </span>
  )
}

export default function TechStack() {
  const marqueeItems = TECH_STACK.map((name) => (
    <TechPill key={name} name={name} />
  ))

  return (
    <section
      id="tech-stack"
      aria-label="Technology Stack"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          <motion.div variants={FADE_UP} style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>TECH STACK</SectionLabel>
          </motion.div>
          <motion.h2
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-geist), sans-serif',
              fontWeight: 700,
              fontSize: 'var(--t-h2)',
              color: 'var(--c-text-1)',
              letterSpacing: 'var(--track-h2)',
              margin: 0,
              lineHeight: 1.1,
              textWrap: 'balance',
            }}
          >
            Built with modern tech
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '16px',
              color: 'var(--c-text-2)',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Our products run on the most capable stack available in 2026.
          </motion.p>
        </div>

        {/* Marquee — decorative visual list, not keyboard-navigable */}
        <motion.div variants={FADE_UP} style={{ width: '100%' }} aria-hidden="true">
          <InfiniteMarquee
            items={marqueeItems}
            speed="90s"
            gap="16px"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
