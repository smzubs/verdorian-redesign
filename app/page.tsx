import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MatrixBand from '@/components/sections/MatrixBand'
import PainSection from '@/components/sections/PainSection'
import Capabilities from '@/components/sections/Capabilities'
import Ventures from '@/components/sections/Ventures'
import Trust from '@/components/sections/Trust'
import Signature from '@/components/sections/Signature'
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
        <Ventures />
        <Trust />
        <Signature />
        {/* Light→dark bridge — eases the eye into the contact band instead of a hard seam */}
        <div
          aria-hidden="true"
          style={{ height: '132px', background: 'linear-gradient(to bottom, transparent, var(--midnight))' }}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
