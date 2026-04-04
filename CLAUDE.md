# Verdorian Technologies — Landing Page Redesign

## Project Context
Award-worthy rebuild of verdorian.com. Dark cinematic aesthetic ("Void Forge").
Target: Awwwards SOTD quality. Single-page landing site.
Stack: Next.js 15.2.4 (App Router) · TypeScript 5.7 · Tailwind v4 · Framer Motion v12 · Lenis
Deploy: Vercel via `bun run build`

## Non-Negotiable Rules
- Zero TypeScript errors at all times (`bun run tsc --noEmit` after every agent)
- Zero `any` type — use `unknown` + type guards
- All colors via CSS variables only — no hardcoded hex in components
- All animations: transform/opacity ONLY (GPU-composited — never animate layout properties)
- Mobile-first: 375px → 768px → 1280px breakpoints
- Lenis handles all scrolling — never use native scroll event listeners directly
- prefers-reduced-motion: ALL animations must respect this
- Grain overlay: always z-index 9999, pointer-events: none, position: fixed
- ParticleCanvas: dynamic import with ssr: false — NEVER server-render canvas

## Component Contracts
- GlassCard with tilt={true} uses mouse-tracking rotateX/rotateY (max ±5deg)
- ParticleCanvas: dynamic import, 80 particles desktop / 35 mobile
- All entry animations use FADE_UP / STAGGER_CONTAINER from lib/motion.ts

## File Ownership
- /app/globals.css       → CSS variables, base reset, grain overlay
- /app/layout.tsx        → Fonts, metadata, LenisProvider
- /app/page.tsx          → Section assembly only (zero logic)
- /components/ui/        → Atomic design system components
- /components/sections/  → Full page sections
- /lib/motion.ts         → Animation variants, easing constants
- /lib/utils.ts          → cn() helper, data arrays (products, services, tech)
- /lib/lenis-provider.tsx → Lenis smooth scroll wrapper ("use client")

## Quality Gate
Before marking any agent "done": ask "Is this Awwwards-worthy?"
If no → iterate. Do not advance.
