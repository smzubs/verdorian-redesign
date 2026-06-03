import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Services from '@/components/sections/Services'
import HowIBuild from '@/components/sections/HowIBuild'
import About from '@/components/sections/About'
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

        {/* SERVICES higher as primary offer/hook (best marketing: clear value + pricing right after promise). Then proof (Products), mechanism (How), authority (About), action. */}
        <Services />
        <HowIBuild />
        <Products />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
