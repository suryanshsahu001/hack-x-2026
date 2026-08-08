import { motion } from 'framer-motion'
import { Section } from './layout/Section'
import { fadeInUp, staggerContainer } from '../lib/animation'
import { EVENT_INFO } from '../config'

export function EventInfo() {
  return (
    <Section id="event-info" className="border-y border-white/5">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeInUp} className="eyebrow">
            At a glance
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Everything you need to know
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="glass-card mt-12 overflow-hidden rounded-3xl px-6 py-2 sm:px-10"
        >
          <dl>
            {EVENT_INFO.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[40%_60%] items-center gap-4 border-b border-dashed border-white/10 py-4 sm:py-5 last:border-b-0"
              >
                <dt className="text-xs uppercase tracking-[0.18em] text-text/40 sm:text-sm sm:tracking-[0.22em]">
                  {row.label}
                </dt>
                <dd className="text-right text-sm font-semibold leading-snug text-text sm:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  )
}
