import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Capabilities from '@/components/sections/Capabilities'
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
        <Products />
        <Capabilities />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
