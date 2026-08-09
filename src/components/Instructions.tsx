import { TriangleAlert, UserRound, FileText } from 'lucide-react'
import { Section } from './layout/Section'

const INSTRUCTIONS = [
  {
    icon: TriangleAlert,
    title: 'One submission only',
    text: 'The registration form can be filled only once — double-check all details before submitting.',
  },
  {
    icon: UserRound,
    title: 'Team leader only',
    text: 'Registration must be completed by the team leader on behalf of the entire team. Members should not fill the form separately.',
  },
  {
    icon: FileText,
    title: 'Problem statements',
    text: 'Problem statements will be made live on the day of commencement of the hackathon.',
  },
]

export function Instructions() {
  return (
    <Section id="instructions" className="border-y border-white/5">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow">Instructions</p>
          <h2 className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Before you register — read carefully
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {INSTRUCTIONS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pista/30 bg-pista/10 text-pista">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-bold text-text">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text/60">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
