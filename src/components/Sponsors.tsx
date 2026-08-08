import { motion } from 'framer-motion'
import { Section } from './layout/Section'
import { fadeInUp, staggerContainer } from '../lib/animation'
import { SPONSORS } from '../config'

export function Sponsors() {
  return (
    <Section id="sponsors" className="border-y border-white/5">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeInUp} className="eyebrow">
            Sponsors
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Powered by the teams building the future of care
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-text/55">
            Your logo could be here. Reach out to sponsor this year&rsquo;s hackathon.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
        >
          {SPONSORS.map((name) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-7 text-sm font-semibold text-text/45 transition-all duration-300 hover:border-pista/30 hover:text-text/80 cursor-pointer"
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
