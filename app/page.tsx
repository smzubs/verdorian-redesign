import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Capabilities from '@/components/sections/Capabilities'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import HowIBuild from '@/components/sections/HowIBuild'
import Products from '@/components/sections/Products'
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
        {/* rapidloop-style flow, what-we-do first: promise → what we do → why us → how it works → our work (proof) → start → talk */}
        <Capabilities />
        <WhyChooseUs />
        <HowIBuild />
        <Products />
        <Offer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
