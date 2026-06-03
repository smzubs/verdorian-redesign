import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProductStatus = 'live' | 'coming-soon' | 'in-development'

export interface Product {
  name: string
  tagline: string
  status: ProductStatus
  href?: string
  icon: string
  category: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'VoicePencil',
    tagline: 'Your voice, supercharged with AI',
    status: 'coming-soon',
    icon: 'IconMicrophone',
    category: 'Mobile App',
  },
  {
    name: 'ChangeOrderAI',
    tagline: 'AI docs and automation for project teams and operations',
    status: 'in-development',
    icon: 'IconFileText',
    category: 'Enterprise SaaS',
  },
  {
    name: 'QRSafePro',
    tagline: 'QR-based equipment inspection SaaS',
    status: 'live',
    href: 'https://qrsafepro.com',
    icon: 'IconQrcode',
    category: 'Web Platform',
  },

  {
    name: 'PolicyPilot',
    tagline: 'Insurance agency management platform',
    status: 'in-development',
    icon: 'IconShield',
    category: 'Enterprise SaaS',
  },
]

export interface Service {
  tier: string
  price: string
  name: string
  description: string
  outcomes: string[]
  icon: string
}

export const SERVICES: Service[] = [
  {
    tier: 'Audit',
    price: '$497',
    name: 'AI Automation Audit',
    description: 'We review your current paper, spreadsheet, or manual workflows — with special focus on inspections, compliance, documentation, and repetitive processes. We identify the highest-ROI automation opportunities and deliver a clear, prioritized plan with exact effort estimates. We build for web platforms, software, and iOS apps.',
    outcomes: [
      'Stop losing hours to manual work and audit panic',
      'Prioritized roadmap tailored to your team and operations',
      'Clear ROI and timeline before any build begins',
    ],
    icon: 'IconSearch',
  },
  {
    tier: 'Buildout',
    price: '$1,500 – $5,000',
    name: 'Custom Buildout',
    description: 'Full implementation of the audit. We build the automations, web platforms, software, and iOS apps that actually fit how your team works in the real world. Delivered with training, documentation, and production-ready code.',
    outcomes: [
      'Audit-ready records without the binder tax',
      'Teams actually use the tools (no training required)',
      'Faster processes, fewer errors, real automation',
    ],
    icon: 'IconTools',
  },
  {
    tier: 'Care',
    price: 'Monthly',
    name: 'Ongoing Care Plan',
    description: 'Monthly support, iteration, and new automations as your business evolves. We monitor, improve, and expand the system (web, software, and apps) so it keeps delivering value long after launch.',
    outcomes: [
      'Continuous improvement without hiring more admin',
      'New workflows automated as needs arise',
      'Peace of mind that your automation stays sharp',
    ],
    icon: 'IconRefresh',
  },
]

export const TECH_STACK = [
  'React Native',
  'Next.js',
  'Expo',
  'Supabase',
  'TypeScript',
  'Node.js',
  'Vercel',
  'Python',
  'OpenAI',
  'Claude AI',
  'PostgreSQL',
  'Tailwind CSS',
  'GitHub',
  'AWS',
  'Framer Motion',
]

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const lenis = (window as unknown as Record<string, unknown>).__lenis as
    | { scrollTo: (target: HTMLElement, options: { offset: number }) => void }
    | undefined

  if (lenis) {
    lenis.scrollTo(el, { offset: -80 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
