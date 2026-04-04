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
    tagline: 'AI docs for construction contractors',
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
    name: 'WithinYouAI',
    tagline: 'AI career discovery platform',
    status: 'live',
    href: 'https://withinyou.ai',
    icon: 'IconCompass',
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
  name: string
  description: string
  icon: string
}

export const SERVICES: Service[] = [
  {
    name: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps built with React Native and Expo. From concept to App Store.',
    icon: 'IconDeviceMobile',
  },
  {
    name: 'Web Applications',
    description:
      'Full-stack web platforms powered by Next.js, TypeScript, and modern cloud infrastructure.',
    icon: 'IconBrowser',
  },
  {
    name: 'AI Integration',
    description:
      'Intelligent features powered by OpenAI, Claude, and custom ML pipelines woven into every product.',
    icon: 'IconBrain',
  },
  {
    name: 'Cloud & DevOps',
    description:
      'Scalable infrastructure on Vercel, Supabase, and AWS with CI/CD pipelines and monitoring.',
    icon: 'IconCloud',
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
