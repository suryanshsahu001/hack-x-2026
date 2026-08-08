import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

interface AnimatedBackgroundProps {
  className?: string
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return isMobile
}

function useStars(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      })),
    [count],
  )
}

function StarField({ count = 140 }: { count?: number }) {
  const stars = useStars(count)
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="currentColor"
          className="text-text/40"
          style={{
            opacity: s.opacity,
            animation: `star-twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </svg>
  )
}

const ORBS = [
  {
    w: 720,
    h: 720,
    top: '-22%',
    left: '50%',
    tx: '-50%',
    opacity: '0.55',
    fade: '0.35',
    blur: 48,
    duration: '26s',
    delay: '0s',
    anim: 'orb-a',
  },
  {
    w: 480,
    h: 480,
    top: '10%',
    left: '-8%',
    tx: '0',
    opacity: '0.5',
    fade: '0.3',
    blur: 36,
    duration: '20s',
    delay: '-7s',
    anim: 'orb-b',
  },
  {
    w: 440,
    h: 440,
    top: '15%',
    left: '78%',
    tx: '0',
    opacity: '0.35',
    fade: '0.2',
    blur: 32,
    duration: '24s',
    delay: '-12s',
    anim: 'orb-c',
  },
  {
    w: 360,
    h: 360,
    top: '55%',
    left: '55%',
    tx: '0',
    opacity: '0.28',
    fade: '0.16',
    blur: 28,
    duration: '30s',
    delay: '-4s',
    anim: 'orb-b',
  },
  {
    w: 320,
    h: 320,
    top: '65%',
    left: '5%',
    tx: '0',
    opacity: '0.3',
    fade: '0.18',
    blur: 24,
    duration: '22s',
    delay: '-18s',
    anim: 'orb-a',
  },
]

function GradientOrbs() {
  return (
    <>
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: o.w,
            height: o.h,
            top: o.top,
            left: o.left,
            background: `radial-gradient(circle, color-mix(in srgb, var(--pista) ${o.opacity}, transparent) 0%, color-mix(in srgb, var(--pista-deep) ${o.fade}, transparent) 45%, transparent 70%)`,
            filter: `blur(${o.blur}px)`,
            animation: `${o.anim} ${o.duration} ease-in-out infinite`,
            animationDelay: o.delay,
            willChange: 'transform',
          }}
        />
      ))}
    </>
  )
}

const ACCRETION_DISK =
  'repeating-radial-gradient(circle at 50% 50%, rgba(255,244,214,0.95) 0%, rgba(255,200,110,0.7) 1.6%, rgba(255,140,40,0.45) 3.2%, rgba(255,244,214,0.85) 4.8%, rgba(255,200,110,0.6) 6.4%, rgba(255,140,40,0.35) 8%, rgba(255,244,214,0.75) 9.6%, rgba(255,200,110,0.55) 11.2%, rgba(255,120,30,0.3) 12.8%)'
const DISK_MASK =
  'radial-gradient(circle at 50% 50%, transparent 0%, transparent 27%, black 29%, black 51%, transparent 53%)'

const ORBITING_DEBRIS = [
  { r: -250, dur: 38, start: '0deg', size: 5, tint: '#ffd9a0' },
  { r: -300, dur: 52, start: '90deg', size: 7, tint: '#ffb861' },
  { r: -340, dur: 68, start: '160deg', size: 4, tint: '#ffefc6' },
  { r: -270, dur: 44, start: '250deg', size: 8, tint: '#f5a04b' },
  { r: -380, dur: 80, start: '320deg', size: 6, tint: '#ffd9a0' },
  { r: -220, dur: 30, start: '30deg', size: 4, tint: '#ffe9b8' },
  { r: -310, dur: 58, start: '200deg', size: 5, tint: '#ffc37e' },
]

const INFALL_PARTICLES = [
  { ix: 230, iy: 60, dur: 7, delay: 0, size: 3, tint: '#ffe9b8' },
  { ix: -190, iy: 140, dur: 5.5, delay: 1.8, size: 4, tint: '#ffd9a0' },
  { ix: 160, iy: -120, dur: 6.5, delay: 3.2, size: 3, tint: '#ffe9b8' },
  { ix: -240, iy: -70, dur: 8, delay: 4.6, size: 5, tint: '#ffc37e' },
  { ix: 120, iy: 170, dur: 4.8, delay: 6.1, size: 2, tint: '#fff4d6' },
  { ix: -150, iy: -160, dur: 7.2, delay: 7.7, size: 3, tint: '#ffd9a0' },
]

const FLARES = [
  { x: '38%', y: '30%', delay: 0, dur: 6 },
  { x: '64%', y: '44%', delay: 2, dur: 7.5 },
  { x: '52%', y: '58%', delay: 4, dur: 5.5 },
  { x: '70%', y: '64%', delay: 1, dur: 8 },
  { x: '28%', y: '52%', delay: 3, dur: 6.5 },
  { x: '58%', y: '20%', delay: 5, dur: 7 },
]

const RIPPLE_POINTS = [
  { x: '45%', y: '35%', delay: 0, dur: 9 },
  { x: '60%', y: '52%', delay: 3, dur: 11 },
  { x: '38%', y: '58%', delay: 6, dur: 10 },
]

function BlackHole({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{
        top: '50%',
        left: '50%',
        width: 840,
        height: 840,
        opacity: 0.9,
        transform: 'translate(calc(var(--mx,50%) * 0.04 - 50%), calc(var(--my,50%) * 0.04 - 50%))',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ animation: 'bh-drift 36s ease-in-out infinite' }}>
        {/* Tilted accretion disk with banded plasma rings */}
        <div
          className="absolute"
          style={{
            inset: '6% -4% 0',
            borderRadius: '50%',
            transform: 'rotate(-10deg) scaleY(0.38)',
            background: ACCRETION_DISK,
            maskImage: DISK_MASK,
            WebkitMaskImage: DISK_MASK,
            boxShadow: '0 0 70px 12px rgba(255,180,80,0.28)',
            animation: 'bh-warp 14s ease-in-out infinite',
          }}
        />

        {/* Rotating swirl accent orbiting the disk */}
        <div
          className="absolute"
          style={{
            inset: '6% -4% 0',
            borderRadius: '50%',
            transform: 'rotate(-10deg) scaleY(0.38)',
            background:
              'conic-gradient(from 0deg, transparent, rgba(255,190,90,0.4) 12%, transparent 26%, rgba(255,230,170,0.25) 42%, transparent 58%, rgba(255,150,50,0.35) 74%, transparent 88%)',
            maskImage: DISK_MASK,
            WebkitMaskImage: DISK_MASK,
            filter: 'blur(5px)',
            animation: 'spin 26s linear infinite',
          }}
        />

        {/* Counter-rotating outer shimmer */}
        {!isMobile && (
          <div
            className="absolute"
            style={{
              inset: '4% -6% 0',
              borderRadius: '50%',
              transform: 'rotate(-10deg) scaleY(0.42)',
              background:
                'conic-gradient(from 180deg, transparent 0%, rgba(255,220,150,0.18) 14%, transparent 30%, rgba(255,160,60,0.22) 46%, transparent 62%, rgba(255,230,170,0.15) 78%, transparent 90%)',
              maskImage:
                'radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, black 32%, black 48%, transparent 50%)',
              WebkitMaskImage:
                'radial-gradient(circle at 50% 50%, transparent 0%, transparent 30%, black 32%, black 48%, transparent 50%)',
              filter: 'blur(6px)',
              animation: 'spin 38s linear infinite reverse',
            }}
          />
        )}

        {/* Infalling particles spiraling toward the hole */}
        {INFALL_PARTICLES.map((p, i) => (
          <div
            key={`inf-${i}`}
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: p.size,
              height: p.size,
              background: p.tint,
              boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.tint}55`,
              animation: `bh-infall ${p.dur}s ease-in cubic-bezier(0.6, 0, 1, 0.4) infinite`,
              animationDelay: `${p.delay}s`,
              ['--ix' as string]: `${p.ix}px`,
              ['--iy' as string]: `${p.iy}px`,
            }}
          />
        ))}

        {/* Debris orbiting the disk */}
        {(isMobile ? ORBITING_DEBRIS.slice(0, 4) : ORBITING_DEBRIS).map((d, i) => (
          <span
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: 'calc(50% - 4px)',
              top: 'calc(50% - 4px)',
              width: d.size,
              height: d.size,
              background: d.tint,
              boxShadow: `0 0 10px 2px ${d.tint}88`,
              animation: `bh-orbit ${d.dur}s linear infinite`,
              ['--orbit-r' as string]: `${d.r}px`,
              ['--orbit-start' as string]: d.start,
            }}
          />
        ))}

        {/* Plasma flares bursting around the hole */}
        {(isMobile ? FLARES.slice(0, 3) : FLARES).map((f, i) => (
          <span
            key={`flare-${i}`}
            className="absolute rounded-full"
            style={{
              left: f.x,
              top: f.y,
              width: 14,
              height: 14,
              background: 'radial-gradient(circle, #fff7e0 0%, rgba(255,190,90,0.6) 45%, transparent 70%)',
              animation: `bh-flare ${f.dur}s ease-in-out infinite`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))}

        {/* Expanding energy ripples */}
        {(isMobile ? RIPPLE_POINTS.slice(0, 1) : RIPPLE_POINTS).map((r, i) => (
          <span
            key={`ripple-${i}`}
            className="absolute rounded-full border border-[rgba(255,220,150,0.5)]"
            style={{
              left: r.x,
              top: r.y,
              width: 90,
              height: 90,
              animation: `bh-ripple ${r.dur}s ease-out infinite`,
              animationDelay: `${r.delay}s`,
            }}
          />
        ))}

        /* Event horizon */
        <div
          className="absolute"
          style={{
            inset: '20%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 50% 50%, #000 0%, #000 74%, #07060f 88%, #151126 100%)',
            boxShadow: '0 0 90px 24px rgba(0,0,0,0.9), inset 0 0 70px 35px rgba(0,0,0,0.95)',
            animation: 'bh-breathe 8s ease-in-out infinite',
          }}
        />

        {/* Photon ring */}
        <div
          className="absolute"
          style={{
            inset: '16.5%',
            borderRadius: '50%',
            border: '2px solid rgba(255,232,170,0.95)',
            boxShadow:
              '0 0 8px 2px rgba(255,220,130,0.9), 0 0 30px 8px rgba(255,170,60,0.45), inset 0 0 12px 3px rgba(255,220,130,0.8)',
            animation: 'top-glow-pulse 6s ease-in-out infinite',
          }}
        />

        {/* Lensed halo above the hole (gravitational lensing arc) */}
        <div
          className="absolute"
          style={{
            left: '5%',
            right: '5%',
            top: '15%',
            height: '26%',
            borderRadius: '50%',
            borderTop: '3px solid rgba(255,232,170,0.9)',
            boxShadow:
              '0 -10px 30px rgba(255,190,90,0.4), 0 -30px 60px -20px rgba(255,150,50,0.5), inset 0 10px 20px rgba(255,170,60,0.15)',
            transform: 'rotate(-10deg)',
            animation: 'bh-breathe 7s ease-in-out infinite',
            opacity: 0.8,
          }}
        />

        {/* Faint brand-tinted outer glow */}
        <div
          className="absolute"
          style={{
            inset: '8%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, transparent 55%, color-mix(in srgb, var(--pista) 35%, transparent) 62%, transparent 70%)',
            filter: 'blur(12px)',
            animation: 'bh-breathe 10s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}
export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <GradientOrbs />
      <BlackHole isMobile={isMobile} />
      <StarField count={isMobile ? 60 : 140} />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in srgb, var(--pista) 28%, transparent) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 80%)',
        }}
      />

      <div
        className="absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2"
        style={{
          background:
            'linear-gradient(90deg, transparent, color-mix(in srgb, var(--pista) 70%, transparent) 30%, color-mix(in srgb, var(--cta) 50%, transparent) 50%, color-mix(in srgb, var(--pista) 70%, transparent) 70%, transparent)',
          boxShadow: '0 0 60px 10px color-mix(in srgb, var(--pista) 30%, transparent)',
        }}
      />

      <div
        className="absolute top-0 left-1/2 w-full -translate-x-1/2"
        style={{
          maxWidth: 900,
          height: 700,
          background: `radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, var(--pista) 22%, transparent) 0%, transparent 70%)`,
          animation: 'top-glow-pulse 5s ease-in-out infinite',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, color-mix(in srgb, var(--bg) 60%, transparent) 100%)',
        }}
      />
    </div>
  )
}
