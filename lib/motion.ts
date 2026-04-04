import type { Variants } from 'framer-motion'

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_BACK = [0.34, 1.56, 0.64, 1] as const
export const EASE_SILK = [0.25, 0.46, 0.45, 0.94] as const

export const FADE_UP: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [...EASE_EXPO] },
  },
}

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [...EASE_EXPO] },
  },
}

export const SCALE_UP: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [...EASE_BACK] },
  },
}

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}
