import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MatrixBand from '@/components/sections/MatrixBand'
import PainSection from '@/components/sections/PainSection'
import Capabilities from '@/components/sections/Capabilities'
import BusinessVsIndividual from '@/components/sections/BusinessVsIndividual'
import BeforeAfter from '@/components/sections/BeforeAfter'
import ROISection from '@/components/sections/ROISection'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
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
        <MatrixBand />
        {/* Conversion narrative: problem -> what we automate -> who it's for -> the transformation
            -> how it works (simple process) -> proof/trust -> the cost of waiting (ROI) -> CTA */}
        <PainSection />
        <Capabilities />
        <BusinessVsIndividual />
        <BeforeAfter />
        <HowItWorks />
        <Pricing />
        <Trust />
        <ROISection />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
