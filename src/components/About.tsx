import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section } from './layout/Section'
import { fadeInUp, staggerContainer } from '../lib/animation'
import { ABOUT_POINTS, STATS } from '../config'

export function About() {
  return (
    <Section id="about" className="border-y border-white/5">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeInUp} className="eyebrow">
            About
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Where healthcare meets hackers
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 leading-relaxed text-text/60">
            HACK X 2026 is a 36-hour medical track hackathon built around one conviction: the
            fastest way to fix healthcare is to let brilliant builders spend it. We bring the
            problems, the patients, the clinicians, and the mentors — you bring the code.
          </motion.p>
          <motion.ul variants={staggerContainer(0.08)} className="mt-8 space-y-4">
            {ABOUT_POINTS.map((point) => (
              <motion.li key={point} variants={fadeInUp} className="flex items-start gap-3 text-text/70">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-pista/30 bg-pista/10 text-pista">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pista/10 to-pista-deep/10 blur-2xl" aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-pista/30"
              >
                <p className="font-display text-4xl font-extrabold text-pista tabular-nums">{stat.value}</p>
                <p className="mt-2 text-sm text-text/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
