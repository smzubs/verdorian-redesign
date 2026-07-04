import type { Metadata, Viewport } from 'next'
import { Geist, Cormorant_Garamond, Fraunces } from 'next/font/google'
import { LenisProvider } from '@/lib/lenis-provider'
import './globals.css'

// Body / UI sans
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
})

// Display serif — heritage prospectus headlines (matches QRSafePro)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Characterful premium serif — used for the hero sub-promise
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdorian — Custom ai Automation for Businesses & Individuals',
  description:
    'Verdorian builds custom ai automation, dashboards, and internal tools that eliminate repetitive work — and you test-drive it on your real work before you buy it.',
  keywords: [
    'Verdorian',
    'ai automation studio',
    'ai workflow automation',
    'ai automation services',
    'business process automation',
    'document automation',
    'CRM automation',
    'customer support automation',
    'business intelligence dashboards',
    'internal tools',
    'personal ai systems',
    'workflow automation partner',
  ],
  authors: [{ name: 'Verdorian' }],
  openGraph: {
    title: 'Verdorian — Custom ai Automation for Businesses & Individuals',
    description:
      'Custom ai automation, dashboards, and internal tools that connect your apps, documents, emails, and data — and you test-drive it before you buy it.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Verdorian — Custom ai Automation for Businesses & Individuals' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian — Custom ai Automation for Businesses & Individuals',
    description:
      'Custom ai automation, dashboards, and internal tools that connect your apps, documents, emails, and data — and you test-drive it before you buy it.',
    images: ['/og-image.svg'],
  },
  metadataBase: new URL('https://verdorian.com'),
}

export const viewport: Viewport = {
  themeColor: '#F7F3EA',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
