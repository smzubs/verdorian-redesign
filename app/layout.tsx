import type { Metadata, Viewport } from 'next'
import { Geist, DM_Sans, JetBrains_Mono, Fraunces, Outfit, Spline_Sans_Mono } from 'next/font/google'
import { LenisProvider } from '@/lib/lenis-provider'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'optional',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Super premium fonts
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const splineMono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-spline-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdorian Technologies | AI Automation for Businesses',
  description:
    'We design, build, and ship production AI automation for businesses of all sizes—from small teams and manufacturing to corporate operations and construction. We focus on web platforms, software, and iOS apps that teams actually use. Deep expertise in operations and compliance is our moat.',
  keywords: [
    'Verdorian Technologies',
    'AI automation for businesses',
    'workflow automation',
    'business process automation',
    'small business automation',
    'manufacturing automation',
    'corporate automation',
    'AI workflow implementation',
    'web apps and iOS automation',
    'QRSafePro',
    'ChangeOrderAI',
    'PolicyPilot',
    'VoicePencil',
    'Clarksville Tennessee',
    'indie software studio',
  ],
  authors: [{ name: 'Verdorian Technologies' }],
  openGraph: {
    title: 'Verdorian Technologies | AI Automation for Businesses',
    description:
      'We build and ship AI automation for businesses of all sizes. Web platforms, software, and iOS apps that teams actually use. Operations and compliance expertise as our moat. Based in Clarksville, TN.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian Technologies',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Verdorian Technologies — AI Automation for Businesses' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian Technologies | AI Automation for Businesses',
    description:
      'We build and ship AI automation for businesses of all sizes. Web platforms, software, and iOS apps that teams actually use. Operations and compliance expertise as our moat.',
    images: ['/og-image.svg'],
  },
  metadataBase: new URL('https://verdorian.com'),
}

export const viewport: Viewport = {
  themeColor: '#F8F5ED',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${outfit.variable} ${splineMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
