import { useEffect, useState } from 'react'
import { EVENT_START_ISO } from '../../config'
import { cn } from '../../lib/utils'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  }
}

interface CountdownTimerProps {
  className?: string
  compact?: boolean
  targetISO?: string
}

export function CountdownTimer({ className, compact = false, targetISO }: CountdownTimerProps) {
  const [target] = useState(() => new Date(targetISO ?? EVENT_START_ISO).getTime())
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  if (time.expired) return null

  return (
    <div className={cn('flex items-center gap-2 sm:gap-3', compact && 'gap-2', className)} aria-live="polite">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          {i > 0 && <span className="text-xl font-light text-text/20 sm:text-2xl">:</span>}
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'rounded-xl border border-white/10 bg-surface/60 font-display font-bold tabular-nums text-pista backdrop-blur-sm',
                compact ? 'px-2.5 py-1.5 text-lg min-w-12' : 'px-3 py-2 text-xl min-w-14 sm:px-4 sm:text-2xl',
              )}
            >
              {String(unit.value).padStart(2, '0')}
            </div>
            <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-text/40">{unit.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
