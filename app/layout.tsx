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
  title: 'Verdorian Technologies | Ai Automation for Businesses',
  description:
    'We design, build, and ship production Ai automation for businesses of all sizes—from small teams and manufacturing to corporate operations and construction. We focus on web platforms, software, and iOS apps that teams actually use. Deep expertise in operations and compliance is our moat.',
  keywords: [
    'Verdorian Technologies',
    'Ai automation for businesses',
    'workflow automation',
    'business process automation',
    'small business automation',
    'manufacturing automation',
    'corporate automation',
    'Ai workflow implementation',
    'web apps and iOS automation',
    'QRSafePro',
    'ChangeOrderAI',
    'PolicyPilot',
    'VoicePencil',

    'indie software studio',
  ],
  authors: [{ name: 'Verdorian Technologies' }],
  openGraph: {
    title: 'Verdorian Technologies | Ai Automation for Businesses',
    description:
      'We build and ship Ai automation for businesses of all sizes. Web platforms, software, and iOS apps that teams actually use. Operations and compliance expertise as our moat.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian Technologies',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Verdorian Technologies — Ai Automation for Businesses' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian Technologies | Ai Automation for Businesses',
    description:
      'We build and ship Ai automation for businesses of all sizes. Web platforms, software, and iOS apps that teams actually use. Operations and compliance expertise as our moat.',
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
