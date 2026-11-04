import { OG_IMAGE } from '@/lib/og'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import NavClassic from '@/components/classic/NavClassic'
import LocalOffer from '@/components/sections/LocalOffer'
import FooterClassic from '@/components/classic/FooterClassic'
import './classic.css'

// This page keeps the pre-rebrand light theme; the rest of the site is dark plum.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

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
    images: [OG_IMAGE],
  },
}

export const viewport: Viewport = {
  themeColor: '#F2F5FA',
  colorScheme: 'light',
}

export default function GrowYourBusinessPage() {
  return (
    <div className={`theme-classic ${cormorant.variable}`} style={{ color: 'var(--ink)' }}>
      <div className="classic-canvas" aria-hidden="true">
        <span className="cc-a" />
        <span className="cc-b" />
        <span className="cc-lattice" />
      </div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <NavClassic />
        <LocalOffer />
        {/* Light→dark bridge into the footer, same treatment as the homepage's contact band */}
        <div
          aria-hidden="true"
          style={{ height: '132px', background: 'linear-gradient(to bottom, rgba(90,135,225,0) 0%, rgba(70,115,210,0.26) 30%, rgba(30,62,140,0.72) 66%, var(--midnight-deep) 100%)' }}
        />
        <FooterClassic />
      </main>
    </div>
  )
}
