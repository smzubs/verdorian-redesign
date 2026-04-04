import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      {/* Skip to main content — keyboard accessibility, CSS-driven visibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Nav />
        <Hero />
        <div className="shimmer-line" />
        <Products />
        <div className="shimmer-line" />
        <About />
        <div className="shimmer-line" />
        <Services />
        <div className="shimmer-line" />
        <TechStack />
        <div className="shimmer-line" />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
