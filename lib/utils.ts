import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProductStatus = 'live' | 'coming-soon' | 'in-development'
export type MockupId = 'qrsafepro' | 'changeorder' | 'voicepencil' | 'policypilot'

export interface Product {
  name: string
  /** small-caps eyebrow above the chapter heading */
  category: string
  /** serif chapter headline (the product's plain-language promise) */
  headline: string
  /** chapter paragraph */
  body: string
  /** three gold-bulleted outcomes */
  outcomes: string[]
  status: ProductStatus
  href?: string
  /** which product-UI mockup renders in the figure column */
  mockup: MockupId
  /** plate caption label, e.g. "Plate I." */
  plate: string
  /** italic figure caption under the mockup */
  caption: string
}

// Four products, presented as editorial chapters (I–IV) — each paired with a
// realistic product-UI mockup. Order is intentional: live work leads.
export const PRODUCTS: Product[] = [
  {
    name: 'QRSafePro',
    category: 'Web Platform · Live',
    headline: 'Equipment inspections that survive an audit',
    body: 'QR-based equipment inspection, built for the field. Crews scan an asset, run the inspection, and sign it in under two minutes — and every inspection becomes a permanent, dated record. When the audit comes, the paperwork already exists.',
    outcomes: [
      'Scan-to-record inspections, done on site',
      'A permanent, signed history for every asset',
      'Compliance-grade exports on demand',
    ],
    status: 'live',
    href: 'https://qrsafepro.com',
    mockup: 'qrsafepro',
    plate: 'Plate I.',
    caption: 'The inspection register — every asset, on the record.',
  },
  {
    name: 'ChangeOrderAI',
    category: 'Enterprise SaaS · In development',
    headline: 'Change orders, written while you talk',
    body: 'The crew describes the change; the system drafts the order, prices it, and routes it for approval. The back-and-forth that used to lose days now settles before the truck leaves the site.',
    outcomes: [
      'Draft orders from plain language',
      'Priced and routed for approval automatically',
      'An append-only record of every change',
    ],
    status: 'in-development',
    mockup: 'changeorder',
    plate: 'Plate II.',
    caption: 'A change order, from voice to signature.',
  },
  {
    name: 'VoicePencil',
    category: 'Mobile App · Coming soon',
    headline: 'Your voice, filed as finished work',
    body: 'Speak a note and it comes back structured — transcribed, cleaned, and sorted into something you can actually use. The thinking stays yours; the typing disappears.',
    outcomes: [
      'Capture by voice, anywhere',
      'Clean transcripts in seconds',
      'Notes that organize themselves',
    ],
    status: 'coming-soon',
    mockup: 'voicepencil',
    plate: 'Plate III.',
    caption: 'A spoken note, transcribed and filed.',
  },
  {
    name: 'PolicyPilot',
    category: 'Enterprise SaaS · In development',
    headline: 'Submission to binding, in one ledger',
    body: 'Every submission, quote, and bound policy moves through a single tracked pipeline. Agencies see exactly where each account stands — no more chasing status across inboxes and spreadsheets.',
    outcomes: [
      'One pipeline from intake to binding',
      'Live status on every account',
      'Nothing lost between systems',
    ],
    status: 'in-development',
    mockup: 'policypilot',
    plate: 'Plate IV.',
    caption: 'The submission pipeline — intake to binding.',
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
    name: 'Ai Automation Audit',
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

export interface Stat {
  value: string
  label: string
}

// Hero / ProofBar ruled stat row (prospectus "ledger" figures)
export const STATS: Stat[] = [
  { value: '7', label: 'Years in operations' },
  { value: '4', label: 'Products shipped' },
  { value: 'Web · Software · iOS', label: 'What we build' },
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
  'Frontier Models',
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
