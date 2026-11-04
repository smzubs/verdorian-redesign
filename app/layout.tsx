import type { Metadata, Viewport } from 'next'
import { Geist, Poppins } from 'next/font/google'
import { LenisProvider } from '@/lib/lenis-provider'
import { OG_IMAGE } from '@/lib/og'
import './globals.css'

// Body / UI sans
const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
})

// Display sans — matches the geometric VERDORIAN wordmark
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
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
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian — Custom ai Automation for Businesses & Individuals',
    description:
      'Custom ai automation, dashboards, and internal tools that connect your apps, documents, emails, and data — and you test-drive it before you buy it.',
    images: [OG_IMAGE.url],
  },
  metadataBase: new URL('https://verdorian.com'),
}

export const viewport: Viewport = {
  themeColor: '#0E0A0D',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
