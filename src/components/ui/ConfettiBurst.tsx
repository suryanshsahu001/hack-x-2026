import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ConfettiBurstProps {
  trigger: number
  count?: number
}

const COLORS = ['#4ADE80', '#86EFAC', '#22C55E', '#BBF7D0', '#16A34A', '#F1F5F9']

export function ConfettiBurst({ trigger, count = 60 }: ConfettiBurstProps) {
  const reduceMotion = useReducedMotion()

  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 360,
        y: Math.random() * -320 - 40,
        rotate: Math.random() * 720 - 360,
        color: COLORS[i % COLORS.length],
        duration: 1.2 + Math.random() * 1.2,
        delay: Math.random() * 0.15,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
        size: 6 + Math.random() * 6,
      })),
    [count],
  )

  if (trigger === 0 || reduceMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <motion.span
          key={`${trigger}-${p.id}`}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
          animate={{ opacity: [1, 1, 0], x: p.x, y: p.y, rotate: p.rotate, scale: [1, 0.8, 0.4] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2"
          style={{
            width: p.shape === 'rect' ? p.size * 1.6 : p.size,
            height: p.size,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  )
}
