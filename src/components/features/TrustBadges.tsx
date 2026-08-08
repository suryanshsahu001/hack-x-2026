import { motion } from 'framer-motion'
import { TRUST_BADGES } from '../../config'

export function TrustBadges() {
  return (
    <section className="border-y border-white/5 py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-xs uppercase tracking-[0.3em] text-text/40"
        >
          Trusted by the teams building the future of care
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14"
        >
          {TRUST_BADGES.map((name) => (
            <motion.span
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.08 }}
              className="text-base font-semibold text-text/40 transition-colors duration-300 hover:text-text/80 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
