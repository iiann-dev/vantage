import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Moments from './components/Moments'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <main className="min-h-screen bg-ink text-mist">
      <Navbar />
      <Hero />
      <Moments />
      <Packages />
      <Testimonials />
      <HowItWorks />
      <FinalCta />
      <Footer />
    </main>
  )
}