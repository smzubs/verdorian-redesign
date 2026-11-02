import type { Metadata } from 'next'
import Nav from '@/components/sections/Nav'
import LocalOffer from '@/components/sections/LocalOffer'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Grow Your Business — Web Page + Google Reviews | Verdorian',
  description:
    'Make your business easier to find, trust, and choose. A professional web page + tap-to-review stand, built and managed for you. $299 setup, $49/month care.',
  alternates: { canonical: 'https://verdorian.com/grow-your-business' },
  openGraph: {
    title: 'Grow Your Business — Web Page + Google Reviews | Verdorian',
    description:
      'A professional web page + tap-to-review stand, built and managed for you. Request a free check of how your business compares.',
    url: 'https://verdorian.com/grow-your-business',
  },
}

export default function GrowYourBusinessPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Nav />
        <LocalOffer />
        {/* Light→dark bridge into the footer, same treatment as the homepage's contact band */}
        <div
          aria-hidden="true"
          style={{ height: '132px', background: 'linear-gradient(to bottom, rgba(90,135,225,0) 0%, rgba(70,115,210,0.26) 30%, rgba(30,62,140,0.72) 66%, var(--midnight-deep) 100%)' }}
        />
        <Footer />
      </main>
    </>
  )
}
