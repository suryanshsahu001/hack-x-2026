import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import { useLiveStats } from '../hooks/useLiveStats'

function StatCount({ value, label }: { value: number | null; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || value === null) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  const isUnavailable = value === null || value === 0

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-2xl font-bold text-text tabular-nums sm:text-3xl">
        {isUnavailable ? '--' : (
          <>
            {display.toLocaleString()}
            {value !== null && <span className="text-pista">+</span>}
          </>
        )}
      </p>
      <p className="mt-0.5 text-xs text-text/50">{label}</p>
    </div>
  )
}

export function LiveStats() {
  const { teamCount } = useLiveStats()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center justify-center gap-8 sm:gap-12"
    >
      <StatCount value={teamCount} label="Teams registered" />
      <div className="h-10 w-px bg-white/10" />
      <div className="text-center">
        <p className="font-display text-2xl font-bold text-pista sm:text-3xl">36h</p>
        <p className="mt-0.5 text-xs text-text/50">of non-stop building</p>
      </div>
    </motion.div>
  )
}