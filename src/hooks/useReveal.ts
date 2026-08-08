import { useRef, type RefObject } from 'react'
import { useInView, type UseInViewOptions } from 'framer-motion'
import { useReducedMotion } from './useReducedMotion'

export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref as RefObject<HTMLElement>, {
    once: true,
    margin: '-80px 0px -40px 0px',
    ...options,
  })

  return { ref, isVisible: isInView || reduceMotion }
}
