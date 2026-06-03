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
  title: 'Verdorian Technologies | Production AI Systems for Field Teams',
  description:
    'We design, build, and ship production AI systems that automate inspections, compliance, and field workflows for contractors and teams. Construction safety and OSHA expertise is our moat — we turn real operational pain into tools crews actually rely on.',
  keywords: [
    'Verdorian Technologies',
    'AI systems for field teams',
    'construction safety automation',
    'OSHA compliance tools',
    'AI workflow implementation',
    'mobile apps for contractors',
    'QRSafePro',
    'ChangeOrderAI',
    'PolicyPilot',
    'Clarksville Tennessee',
    'indie software studio',
  ],
  authors: [{ name: 'Verdorian Technologies' }],
  openGraph: {
    title: 'Verdorian Technologies | Production AI Systems for Field Teams',
    description:
      'We build and ship AI systems for inspections, workflows, and compliance that field teams actually use. Deep construction safety moat. Based in Clarksville, TN.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian Technologies',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Verdorian Technologies — Production AI Systems for Field Teams' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian Technologies | Production AI Systems for Field Teams',
    description:
      'We build and ship AI systems for inspections, workflows, and compliance that field teams actually use. Construction safety moat.',
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
