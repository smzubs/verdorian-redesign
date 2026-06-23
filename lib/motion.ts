import type { Variants } from 'framer-motion'

// One prospectus ease everywhere — calm, editorial, no overshoot
export const EASE_PROSPECTUS = [0.22, 1, 0.36, 1] as const
export const EASE_EXPO = EASE_PROSPECTUS
export const EASE_BACK = EASE_PROSPECTUS
export const EASE_SILK = EASE_PROSPECTUS

export const FADE_UP: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_PROSPECTUS },
  },
}

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_PROSPECTUS },
  },
}

export const SCALE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PROSPECTUS },
  },
}

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Card entrance: fade + lift, index-staggered (no 3D flip — prospectus is flat & editorial)
export const CARD_ENTRANCE: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: EASE_PROSPECTUS,
    },
  }),
}
