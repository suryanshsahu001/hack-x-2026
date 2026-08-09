import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  asChild?: boolean
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

const variants = {
  primary: 'bg-pista text-text-inverse font-semibold shadow-glow-pista hover:bg-pista-light hover:shadow-glow-pista-lg',
  secondary: 'bg-surface-elevated text-text font-semibold border border-white/10 hover:border-white/20',
  ghost: 'bg-transparent text-text/70 hover:bg-white/5 hover:text-text',
  outline: 'border border-white/20 bg-transparent text-text hover:border-pista/40 hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  asChild = false,
  href,
  className,
  children,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 10, y: x * 10 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const content = (
    <>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
      </span>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </>
  )

  const cls = cn(
    'group relative inline-flex items-center justify-center select-none rounded-xl overflow-hidden',
    'transition-colors duration-200 cursor-pointer',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-pista focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  )

  const style = magnetic
    ? ({ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformStyle: 'preserve-3d' } as const)
    : undefined

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={cn(magnetic && 'inline-block [perspective:800px]')}
      whileHover={magnetic ? { scale: 1.03, y: -2 } : { scale: 1.03 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {asChild && href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={cls}
          style={style}
        >
          {content}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={cls} style={style}>
          {content}
        </button>
      )}
    </motion.div>
  )
}
