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

        {/* Quick credibility strip (research from Stripe/Vercel/Apple/Linear: early trust stats right after hero for instant authority before the offer). Pulled from existing About stats + domain copy. */}
        <div className="border-b border-white/10 bg-[rgba(245,240,232,0.6)] py-3 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--c-text-3)]">
          7 YEARS IN OPERATIONS • 5 PRODUCTS SHIPPED • TENNESSEE-BASED • AUTOMATION SYSTEMS TEAMS ACTUALLY USE
        </div>

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
