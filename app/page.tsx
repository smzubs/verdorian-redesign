import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
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
        {/* Narrative: promise -> what we build -> ventures we run -> how we work -> signature -> contact */}
        <Capabilities />
        <Ventures />
        <Trust />
        <Signature />
        {/* Light→dark bridge — eases the eye into the contact band instead of a hard seam */}
        <div
          aria-hidden="true"
          style={{ height: '72px', background: 'linear-gradient(to bottom, transparent, var(--midnight))' }}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
