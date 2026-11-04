import type { Metadata, Viewport } from 'next'
import { Geist, Poppins, Michroma } from 'next/font/google'
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

// Headline face — extended, high-tech; used large with generous tracking
const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdorian Technologies — ai-native software & automation',
  description:
    'Verdorian builds ai-native software and automates the manual work that slows teams down — so it gets done faster, smarter and more accurately. Parent company of QRSafePro.',
  keywords: [
    'Verdorian',
    'ai-native software',
    'software development company',
    'ai automation studio',
    'QRSafePro',
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
    title: 'Verdorian Technologies — ai-native software & automation',
    description:
      'Ai-native software and smart automation that saves your team time and gets the work right. Parent company of QRSafePro.',
    url: 'https://verdorian.com',
    siteName: 'Verdorian',
    images: [OG_IMAGE],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdorian Technologies — ai-native software & automation',
    description:
      'Ai-native software and smart automation that saves your team time and gets the work right. Parent company of QRSafePro.',
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
      className={`${geist.variable} ${poppins.variable} ${michroma.variable}`}
      suppressHydrationWarning
    >
      <body className="font-[family-name:var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
