import { MapPin, CalendarDays } from 'lucide-react'
import { Section } from './layout/Section'
import { PHASES, type Phase } from '../config'
import { cn } from '../lib/utils'

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-pista/30 bg-pista/10 font-display text-sm font-extrabold text-pista">
          {phase.phase}
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-text/40">Phase {phase.phase}</p>
          <h3 className="mt-0.5 font-display text-base font-bold text-text">{phase.title}</h3>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        <span className="inline-flex items-center gap-1.5 text-xs text-text/55">
          <MapPin className="h-3.5 w-3.5 text-pista" />
          {phase.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-text/55">
          <CalendarDays className="h-3.5 w-3.5 text-pista" />
          {phase.dates}
        </span>
      </div>

      <p className="mt-2.5 text-xs text-text/60">{phase.tagline}</p>

      <ul className="mt-4 space-y-1.5">
        {phase.points.map((point) => (
          <li
            key={point}
            className={cn(
              'flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs leading-relaxed text-text/70',
            )}
          >
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-pista" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Phases() {
  return (
    <Section id="phases" className="border-y border-white/5">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The run-up</p>
          <h2 className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Two phases. One crown.
          </h2>
          <p className="mt-4 text-text/55">
            Phase 1 at ADYPU Pune, Phase 2 at IIT Bombay.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PHASES.map((phase) => (
            <PhaseCard key={phase.phase} phase={phase} />
          ))}
        </div>
      </div>
    </Section>
  )
}
