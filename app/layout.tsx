import type { Metadata, Viewport } from 'next'
import { Geist, DM_Sans, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Verdorian Technologies — Software Forged from Intelligence',
  description:
    'Indie software studio building intelligent mobile apps, AI-powered tools, and SaaS platforms. Based in Clarksville, Tennessee.',
  keywords: [
    'Verdorian Technologies',
    'software studio',
    'mobile apps',
    'AI',
    'SaaS',
    'Next.js',
    'React Native',
    'Clarksville Tennessee',
  ],
  authors: [{ name: 'Verdorian Technologies LLC' }],
  openGraph: {
    title: 'Verdorian Technologies — Software Forged from Intelligence',
    description:
      'Indie software studio building intelligent mobile apps, AI-powered tools, and SaaS platforms.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian Technologies',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Verdorian Technologies' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian Technologies — Software Forged from Intelligence',
    description:
      'Indie software studio building intelligent mobile apps, AI-powered tools, and SaaS platforms.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://verdorian.com'),
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-geist)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
