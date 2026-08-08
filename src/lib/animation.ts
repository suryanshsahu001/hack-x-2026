import type { Transition, Variants } from 'framer-motion'

export const spring = {
  gentle: { type: 'spring', stiffness: 120, damping: 18 } as Transition,
  snappy: { type: 'spring', stiffness: 280, damping: 22 } as Transition,
  bouncy: { type: 'spring', stiffness: 400, damping: 20 } as Transition,
}

export const EASE = [0.16, 1, 0.3, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})
