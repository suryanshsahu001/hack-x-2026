import { cn } from '../../lib/utils'

interface LogoMarkProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LogoMark({ className, size = 'md' }: LogoMarkProps) {
  const sizes = {
    sm: 'h-7 w-7 rounded-md',
    md: 'h-9 w-9 rounded-lg',
    lg: 'h-16 w-16 rounded-2xl',
  }

  return (
    <span
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden border border-pista/30 bg-white',
        sizes[size],
        className,
      )}
      aria-label="HACK X 2026 logo"
    >
      <img
        src="/logos/heckx-logo.jpeg"
        alt="HACK X 2026 logo"
        className="h-full w-full object-contain"
      />
    </span>
  )
}
