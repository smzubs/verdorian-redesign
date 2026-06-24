import type { Metadata, Viewport } from 'next'
import { Geist, Cormorant_Garamond } from 'next/font/google'
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
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdorian — Custom AI Automation for Businesses & Individuals',
  description:
    'Verdorian builds custom AI workflows, agents, dashboards, and internal tools that automate repetitive work, connect your apps, and save time — with human review where it matters.',
  keywords: [
    'Verdorian',
    'AI automation studio',
    'AI workflow automation',
    'AI agents',
    'business process automation',
    'document automation',
    'CRM automation',
    'customer support automation',
    'business intelligence dashboards',
    'internal tools',
    'personal AI systems',
    'workflow automation partner',
  ],
  authors: [{ name: 'Verdorian' }],
  openGraph: {
    title: 'Verdorian — Custom AI Automation for Businesses & Individuals',
    description:
      'Custom AI workflows, agents, dashboards, and internal tools that connect your apps, documents, emails, and data — so you save hours, reduce errors, and run smarter.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Verdorian — Custom AI Automation for Businesses & Individuals' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian — Custom AI Automation for Businesses & Individuals',
    description:
      'Custom AI workflows, agents, dashboards, and internal tools that connect your apps, documents, emails, and data — so you save hours and reduce errors.',
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
      className={`${geist.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
