import { useState } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { ArrowRight } from 'lucide-react'
import { REGISTER_URL, REGISTRATION_DEADLINE_ISO } from '../config'
import { Button } from './ui/Button'
import { CountdownTimer } from './ui/CountdownTimer'
import { ConfettiBurst } from './ui/ConfettiBurst'
import { useReveal } from '../hooks/useReveal'

export function RegisterCTA() {
  const { ref, isVisible } = useReveal<HTMLElement>({ margin: '-60px' })
  const [burst, setBurst] = useState(0)

  return (
    <section ref={ref} id="register" className="relative overflow-hidden py-28 lg:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pista/10 blur-[140px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8"
      >
        <p className="eyebrow">Registration open</p>
        <h2 className="mt-3 font-display text-display-md font-extrabold tracking-tight text-text">
          Ready to build something that <span className="text-gradient-pista">saves lives</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-text/60">
          Spots are limited and filling fast. Grab your seat — or share the QR code so your team
          can register on the spot.
        </p>

        <div className="mt-8 flex justify-center">
          <CountdownTimer targetISO={REGISTRATION_DEADLINE_ISO} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="relative" onClick={() => setBurst((b) => b + 1)}>
            <ConfettiBurst trigger={burst} />
            <Button size="lg" asChild href={REGISTER_URL}>
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative rounded-3xl border border-white/10 bg-surface p-5 shadow-glow-pista/10 transition-colors duration-300 hover:border-pista/40">
              <div className="pointer-events-none absolute inset-5 overflow-hidden rounded-2xl" aria-hidden="true">
                <div className="absolute inset-x-3 top-0 h-0.5 bg-gradient-to-r from-transparent via-pista to-transparent opacity-70 scan-line" />
              </div>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scan this QR code or click to open the registration form"
                className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pista focus-visible:ring-offset-2"
              >
                <QRCodeSVG value={REGISTER_URL} size={176} bgColor="#0A0F14" fgColor="#E2E8F0" level="M" />
              </a>
            </div>
            <p className="text-xs text-text/50">Scan to register — or just click the QR code</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
