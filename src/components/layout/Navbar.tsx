import { useEffect, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { HACKATHON_NAME, NAV_LINKS, REGISTER_URL } from '../../config'
import { cn } from '../../lib/utils'
import { useScrolled } from '../../hooks/useScrollPosition'
import { LogoMark } from '../ui/LogoMark'
import { Button } from '../ui/Button'

export function Navbar() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.hash = href
    }
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return
    const sections = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-nav' : 'shadow-sm',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-5 sm:px-8">
        <a href="#top" onClick={(e) => goTo(e, '#top')} className="flex shrink-0 items-center gap-2.5 cursor-pointer" aria-label={`${HACKATHON_NAME} home`}>
          <LogoMark />
          <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-neutral-900">
            {HACKATHON_NAME}
            <span className="text-pista">.</span>
          </span>
          <div className="ml-2 hidden items-center gap-2.5 border-l border-neutral-200 pl-3 lg:flex xl:gap-4">
            <img src="/logos/adypu.png" alt="ADYPU" className="h-7 max-w-24 object-contain xl:h-8" />
            <img src="/logos/ieee-maharashtra.png" alt="IEEE Maharashtra" className="h-7 max-w-20 object-contain xl:h-8" />
            <img src="/logos/ieee-student-brand.png" alt="IEEE Student Brand" className="h-7 max-w-20 object-contain xl:h-8" />
            <img src="/logos/yp-logo.webp" alt="YP Logo" className="h-7 max-w-14 object-contain xl:h-8" />
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => goTo(e, link.href)}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                active === link.href ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
              )}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg border border-neutral-900/10 bg-neutral-900/5"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button size="sm" asChild href={REGISTER_URL}>
              Register
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-900 transition-colors hover:bg-neutral-900/5 lg:hidden cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 480 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-neutral-200 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => goTo(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-3">
                <Button size="md" asChild href={REGISTER_URL}>
                  Register
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
