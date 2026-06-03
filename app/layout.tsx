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
  title: 'SM Zobayer | AI Workflow Implementation Specialist',
  description:
    'AI Workflow Implementation Specialist with 7 years construction safety & OSHA experience. I build and ship AI systems that automate inspections and compliance for small contractors.',
  keywords: [
    'SM Zobayer',
    'AI Workflow Implementation Specialist',
    'construction safety',
    'OSHA compliance',
    'AI automation',
    'field workflows',
    'inspections',
    'QRSafePro',
    'Verdorian Technologies',
    'Clarksville Tennessee',
  ],
  authors: [{ name: 'SM Zobayer' }],
  openGraph: {
    title: 'SM Zobayer | AI Workflow Implementation Specialist',
    description:
      '7 years construction safety & OSHA experience. I build and ship AI systems that automate inspections and compliance for small contractors.',
    url: 'https://verdorian.com',
    siteName: 'SM Zobayer',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'SM Zobayer — AI Workflow Implementation Specialist' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Zobayer | AI Workflow Implementation Specialist',
    description:
      '7 years construction safety & OSHA experience. I build and ship AI systems that automate inspections and compliance for small contractors.',
    images: ['/og-image.svg'],
  },
  metadataBase: new URL('https://verdorian.com'),
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
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
