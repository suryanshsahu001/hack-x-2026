export const HACKATHON_NAME = 'HACK X 2026'
export const HACKATHON_YEAR = '2026'
export const TAGLINE = 'A 36-hour medical track hackathon'

export const CONTACT_EMAILS = [
  'aryan.vaidya@adypu.edu.in',
  'swapnil.patil@adypu.edu.in',
  'jaideep.kamble@adypu.edu.in',
  'ishita.thulkar@adypu.edu.in',
  'urvesh.rane@adypu.edu.in',
]

export const REGISTER_URL = 'https://docs.google.com/forms/d/1cLNmhodPixaZwJdY-MGL9rAQlmIjazL58rI97tbeZkQ/viewform'

// Apps Script Web App URL that reads the form's linked response Sheet and returns
// JSON { teamCount: number }. Leave empty to show "--" for the team counter.
//
// SETUP (one time):
//   1. Open your Google Form → Responses tab → green Sheets icon → "Create spreadsheet".
//      Now every submission is stored in that spreadsheet.
//   2. In the linked spreadsheet: Extensions → Apps Script → paste scripts/AppsScript.gs.
//   3. Deploy → New deployment → type "Web app" → access "Anyone" → copy the /exec URL.
//   4. Paste that URL below. The hero counter then shows live successful registrations.
export const STATS_API_URL = 'https://script.google.com/macros/s/AKfycbxcanCsY_q7TFBw_Uk14Y1ah0cDdWV9K1LYxhN77vLK0KA4T15NQrA6VymLhN-30L1kYA/exec'

export const EVENT_DETAILS = [
  { label: 'Date', value: '29–30 August 2026' },
  { label: 'Location', value: 'Phase 1: ADYPU Pune • Phase 2: IIT Bombay' },
  { label: 'Format', value: '36-hour on-site medical track' },
]

export const EVENT_INFO: { label: string; value: string }[] = [
  { label: 'Format', value: 'On-site hackathon' },
  { label: 'Duration', value: '36 hours' },
  { label: 'Track', value: 'Medical Devices / HealthTech' },
  { label: 'Date', value: '29–30 August 2026' },
  { label: 'Phase 01 venue', value: 'Ajeenkya D.Y. Patil University, Pune' },
  { label: 'Phase 02 venue', value: 'IIT Bombay' },
  { label: 'Advancing teams', value: 'Top 3' },
  { label: 'Phase 02 perks', value: 'Travel · Food · Accommodation (IEEE)' },
  { label: 'Eligibility', value: 'Students — any discipline' },
]

export const EVENT_START_ISO = '2026-08-29T09:00:00'

// Registrations close the evening before Phase 1 kickoff (25 Aug 2026).
export const REGISTRATION_DEADLINE_ISO = '2026-08-25T23:59:00'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Phases', href: '#phases' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Content Wall', href: '#content-wall' },
]

export const TRUST_BADGES = [
  'HealthSync',
  'MediCloud',
  'Vitality AI',
  'CareBridge',
  'Nexus Labs',
  'BioSpark',
]

export const ORGANIZERS = [
  { name: 'Ajeenkya DY Patil University', logo: '/logos/adypu.png', group: 'Organized by' },
  { name: 'IEEE Maharashtra Section', logo: '/logos/ieee-maharashtra.png', group: 'Standing with' },
  { name: 'IEEE Young Professionals', logo: '/logos/yp-logo.webp', group: 'Standing with' },
  { name: 'IEEE Student Brand', logo: '/logos/ieee-student-brand.png', group: 'Student Brand' },
]

export interface Phase {
  phase: number
  title: string
  location: string
  dates: string
  tagline: string
  points: string[]
}

export const PHASES: Phase[] = [
  {
    phase: 1,
    title: 'Qualifier Sprint',
    location: 'Ajeenkya DY Patil University, Pune',
    dates: 'On-site qualifier',
    tagline: 'Kickoff, teams, and the first 36-hour build sprint.',
    points: [
      'Opening ceremony with problem briefs from real clinicians',
      'Team formation and mentor pairing before the build begins',
      '36-hour build sprint with on-the-floor mentors',
      'Demo day where the top teams advance to Phase 2',
    ],
  },
  {
    phase: 2,
    title: 'Grand Finale',
    location: 'IIT Bombay',
    dates: 'Finale weekend',
    tagline: 'The sharpest teams go head-to-head for the crown.',
    points: [
      'Finalists present polished, deployment-ready builds',
      'Judged by clinicians, founders, and investing partners',
      'Demo-day investor mixer and post-event mentorship',
    ],
  },
]

export interface WallPost {
  id: string
  caption: string
  likes: string
  date: string
  gradient: string
  icon: string
}

// Fill in the Instagram handle from the media team, e.g. 'hackx2026'.
// While empty, the wall shows preview cards; once set, an official
// Instagram embed of the profile posts appears on the page.
export const INSTAGRAM_HANDLE = 'ieee_adypu'

export const CONTENT_WALL_POSTS: WallPost[] = [
  {
    id: '1',
    caption: '57 teams, 36 hours, one mission: build medical tech that saves lives.',
    likes: '214',
    date: '2d',
    gradient: 'from-[#f97316] to-[#db2777]',
    icon: 'heart-pulse',
  },
  {
    id: '2',
    caption: 'Phase 1 kickoff is live at ADYPU Pune — the build clock is ticking.',
    likes: '184',
    date: '1w',
    gradient: 'from-[#7a3fb0] to-[#b06ee0]',
    icon: 'rocket',
  },
  {
    id: '3',
    caption: 'Meet the clinicians mentoring every single finalist team.',
    likes: '96',
    date: '1w',
    gradient: 'from-[#0ea5e9] to-[#2563eb]',
    icon: 'stethoscope',
  },
  {
    id: '4',
    caption: 'Prize reveal: $5,000 grand prize + incubation at Health Systems Lab.',
    likes: '341',
    date: '2w',
    gradient: 'from-[#f59e0b] to-[#e11d48]',
    icon: 'trophy',
  },
  {
    id: '5',
    caption: 'Team formation night — clinical + engineering minds, one room.',
    likes: '128',
    date: '2w',
    gradient: 'from-[#10b981] to-[#0d9488]',
    icon: 'users',
  },
  {
    id: '6',
    caption: 'Countdown to demo day. The reveal: are you ready?',
    likes: '247',
    date: '3w',
    gradient: 'from-[#8b5cf6] to-[#d946ef]',
    icon: 'sparkles',
  },
]

export const ABOUT_POINTS = [
  'Phase 1 at Ajeenkya DY Patil University, Pune — Phase 2 at IIT Bombay',
  'Focused on real, deployable medical-tech — not demos that die at the podium',
  'Diversity of teams encouraged: engineering, design, clinical, and product',
]

export const STATS = [
  { value: '36h', label: 'of non-stop building, from kickoff to demo day' },
  { value: '1', label: 'track — medical devices & health-tech' },
]

export const TRACKS = [
  { name: 'Clinical AI', description: 'Models, diagnostics, and decision support built for real clinical workflows.' },
  { name: 'Health Systems', description: 'Operations, scheduling, records, and infrastructure that keep care moving.' },
  { name: 'Open Innovation', description: 'Anything else that improves health or care delivery. Surprise us.' },
]

export const PRIZES = [
  { tier: '1st Place', amount: '$5,000', note: 'Plus 3 months of incubation at the Health Systems Lab.' },
  { tier: '2nd Place', amount: '$3,000', note: 'Plus mentorship from founding engineers at partner companies.' },
  { tier: '3rd Place', amount: '$1,500', note: 'Plus access to the demo-day investor mixer.' },
  { tier: 'Best Design', amount: '$750', note: 'For the most thoughtful, human-centered experience.' },
]

export const SPONSORS = [
  'Your Brand Here',
  'Your Brand Here',
  'Your Brand Here',
  'Your Brand Here',
  'Your Brand Here',
  'Your Brand Here',
]

export const NAME_SUGGESTIONS = [
  'HACK X 2026',
  'VitalHack',
  'MediHack',
  'PulsePoint',
  'ResQ 2026',
  'HealthForge',
]
