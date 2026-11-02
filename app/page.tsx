import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MatrixBand from '@/components/sections/MatrixBand'
import PainSection from '@/components/sections/PainSection'
import Capabilities from '@/components/sections/Capabilities'
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
        {/* Conversion narrative: signature drum -> problem (one idea) -> what we do
            -> how it works + offer -> proof -> CTA. One idea per screen; the drum is the signature. */}
        <MatrixBand />
        <PainSection />
        <Capabilities />
        <Pricing />
        <Trust />
        {/* Light→dark bridge — eases the eye into the contact band instead of a hard seam */}
        <div
          aria-hidden="true"
          style={{ height: '132px', background: 'linear-gradient(to bottom, rgba(90,135,225,0) 0%, rgba(70,115,210,0.26) 30%, rgba(30,62,140,0.72) 66%, var(--midnight) 100%)' }}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
