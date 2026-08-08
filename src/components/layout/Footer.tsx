import { motion } from 'framer-motion'
import { ArrowUp, Globe, Mail } from 'lucide-react'
import { HACKATHON_NAME, REGISTER_URL, NAV_LINKS, CONTACT_EMAILS } from '../../config'
import { LogoMark } from '../ui/LogoMark'

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ieee_adypu/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adypu-ieee-student-branch-120373238',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'ADYPU Website',
    href: 'https://share.google/0IclGGWCUD8R16Cqu',
    icon: <Globe className="h-4 w-4" aria-hidden="true" />,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-bg">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-bold text-text">
                {HACKATHON_NAME}
                <span className="text-pista">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text/50">
              A 36-hour medical track hackathon. Phase 1 at ADYPU Pune — Phase 2 at IIT Bombay.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-sm text-text/50">Organized by Ajeenkya DY Patil University</p>
              <p className="text-sm text-text/50">IEEE ADYPU Student Branch</p>
              <p className="text-sm text-text/50">Sponsors in collaboration with IIT Bombay</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-text/60 transition-all duration-200 hover:border-pista/40 hover:text-pista hover:-translate-y-0.5 cursor-pointer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text/40">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text/60 transition-colors hover:text-pista cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text/60 transition-colors hover:text-pista cursor-pointer">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text/40">Contact</h3>
            <p className="mt-4 text-sm text-text/50">For queries about the event, reach out to us.</p>
            <ul className="mt-4 space-y-2.5">
              {CONTACT_EMAILS.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-sm text-text/60 transition-colors hover:text-pista cursor-pointer"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-text/40">
            &copy; {year} {HACKATHON_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="text-sm text-text/40 transition-colors hover:text-text cursor-pointer">
              Privacy
            </a>
            <a href="#top" className="text-sm text-text/40 transition-colors hover:text-text cursor-pointer">
              Terms
            </a>
            <motion.a
              href="#top"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-text/60 transition-colors hover:border-pista/40 hover:text-pista cursor-pointer"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
