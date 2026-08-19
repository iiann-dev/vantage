import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Moments from './components/Moments'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import ExpeditionGuide from './components/ExpeditionGuide'
import HowItWorks from './components/HowItWorks'
import FinalCta from './components/FinalCta'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Atmosphere from './components/Atmosphere'
import ScrollProgress from './components/ScrollProgress'
import ScrollBlur from './components/ScrollBlur'

export default function App() {
  useLenis()
  return (
    <main className="relative min-h-screen bg-ink text-mist">
      <Atmosphere />
      <ScrollBlur />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Moments />
        <Packages />
        <Testimonials />
        <ExpeditionGuide />
        <HowItWorks />
        <FaqSection />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
