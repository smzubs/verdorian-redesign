import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import ProofBar from '@/components/sections/ProofBar'
import Problem from '@/components/sections/Problem'
import HowIBuild from '@/components/sections/HowIBuild'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
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
        {/* Prospectus flow: promise → provenance → the problem → the method → terms → proof → offer → conviction → objections → studio → action */}
        <ProofBar />
        <Problem />
        <HowIBuild />
        <Services />
        <Products />
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
