import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { EventInfo } from './components/EventInfo'
import { Phases } from './components/Phases'
import { Sponsors } from './components/Sponsors'
import { ContentWall } from './components/ContentWall'
import { Instructions } from './components/Instructions'
import { RegisterCTA } from './components/RegisterCTA'
import { AnimatedBackground } from './components/background/AnimatedBackground'

export default function App() {
  return (
    <div className="relative min-h-svh bg-bg text-text">
        <AnimatedBackground className="fixed inset-0 z-0" />
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pista focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-inverse"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <EventInfo />
          <Phases />
          <Sponsors />
          <ContentWall />
          <Instructions />
          <RegisterCTA />
        </main>
        <Footer />
        </div>
      </div>
  )
}
