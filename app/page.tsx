import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import PainSection from '@/components/sections/PainSection'
import Capabilities from '@/components/sections/Capabilities'
import BusinessVsIndividual from '@/components/sections/BusinessVsIndividual'
import BeforeAfter from '@/components/sections/BeforeAfter'
import ROISection from '@/components/sections/ROISection'
import HowItWorks from '@/components/sections/HowItWorks'
import Trust from '@/components/sections/Trust'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Nav />
        <Hero />
        {/* Simplified landing flow: pain snapshot -> 3 core offers -> audience strip -> before/after -> value card -> 3-step process -> trust -> audit */}
        <PainSection />
        <Capabilities />
        <BusinessVsIndividual />
        <BeforeAfter />
        <ROISection />
        <HowItWorks />
        <Trust />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
