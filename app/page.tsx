import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import ProofBar from '@/components/sections/ProofBar'
import Capabilities from '@/components/sections/Capabilities'
import Problem from '@/components/sections/Problem'
import HowIBuild from '@/components/sections/HowIBuild'
import Products from '@/components/sections/Products'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Services from '@/components/sections/Services'
import Offer from '@/components/sections/Offer'
import PullQuote from '@/components/sections/PullQuote'
import FAQ from '@/components/sections/FAQ'
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
        {/* Flow: promise → proof strip → what we do → the problem → the method → our work → why us → terms → offer → conviction → objections → studio → action */}
        <ProofBar />
        <Capabilities />
        <Problem />
        <HowIBuild />
        <Products />
        <WhyChooseUs />
        <Services />
        <Offer />
        <PullQuote />
        <FAQ />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
