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
        {/* Conversion narrative: signature drum -> problem (one idea) -> how it works + offer
            -> what we automate -> proof -> CTA. One idea per screen; the drum is the signature. */}
        <MatrixBand />
        <PainSection />
        <Pricing />
        <Capabilities />
        <Trust />
        {/* Light→dark bridge — eases the eye into the contact band instead of a hard seam */}
        <div
          aria-hidden="true"
          style={{ height: '72px', background: 'linear-gradient(to bottom, var(--paper), var(--ink))' }}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
