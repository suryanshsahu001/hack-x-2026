import { motion, type HTMLMotionProps } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/utils'

interface SectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode
  id?: string
  className?: string
}

export function Section({ children, id, className, ...props }: SectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative py-24 lg:py-32', className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
