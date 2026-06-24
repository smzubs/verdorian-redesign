import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Capabilities from '@/components/sections/Capabilities'
import HowIBuild from '@/components/sections/HowIBuild'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Offer from '@/components/sections/Offer'
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
        {/* Lean flow: promise → our work (the proof, our edge) → what we do → how it works → why us → start → talk */}
        <Products />
        <Capabilities />
        <HowIBuild />
        <WhyChooseUs />
        <Offer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
