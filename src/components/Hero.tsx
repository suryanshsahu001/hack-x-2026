import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { CountdownTimer } from './ui/CountdownTimer'
import { LiveStats } from './LiveStats'
import { EVENT_DETAILS, REGISTER_URL } from '../config'
import { fadeInUp, staggerContainer } from '../lib/animation'

function DetailChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm">
      <span className="text-[10px] uppercase tracking-[0.2em] text-text/40">{label}</span>
      <span className="text-sm font-semibold text-text">{value}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center justify-center overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_45%,color-mix(in_srgb,var(--bg)_85%,transparent)_100%)]"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div variants={fadeInUp}>
            <Badge className="mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pista opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pista" />
              </span>
              Registration open — closes 25 August 2026
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 max-w-5xl font-display text-display-xl font-extrabold tracking-tight text-text"
          >
            Build tech that <span className="text-gradient-pista">saves lives</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg text-text/60">
            36 hours. Real medical problems. The sharpest student teams in the region competing to
            build medical-tech that actually matters.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild href={REGISTER_URL}>
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild href="#instructions">
              Instructions
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {EVENT_DETAILS.map((d) => (
              <DetailChip key={d.label} label={d.label} value={d.value} />
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <CountdownTimer />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <LiveStats />
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-text/30 transition-colors hover:text-pista cursor-pointer"
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 animate-scroll-bounce" aria-hidden="true">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  )
}
