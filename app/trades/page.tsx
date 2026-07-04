import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Verdorian — ai Operations for Specialty Trade Contractors',
  description:
    'Estimating, change orders, inspections, inventory, and back-office automation for electrical, HVAC, plumbing, and mechanical contractors — built by the engineer behind QRSafePro and ChangeOrderAI. Test-drive it working before you buy.',
  alternates: { canonical: 'https://verdorian.com/trades' },
  openGraph: {
    title: 'Verdorian — ai Operations for Specialty Trade Contractors',
    description:
      'We build the systems a real electrical contractor runs on every day. Test-drive your first automation on your own jobs — pay only if it hits the number we agree on.',
    url: 'https://verdorian.com/trades',
  },
}

// ─── Page data ────────────────────────────────────────────────────────────────

interface TradeCapability {
  title: string
  body: string
}

const CAPABILITIES: TradeCapability[] = [
  {
    title: 'Estimating & bids',
    body: 'Field notes, takeoff sheets, and supplier pricing pulled together into a clean estimate draft — hours of office time cut to a review pass.',
  },
  {
    title: 'Change orders',
    body: 'Scope changes captured in the field, priced, documented, and sent for signature — before the extra work gets done for free.',
  },
  {
    title: 'Inspections & compliance',
    body: 'Equipment inspections, safety records, and compliance paperwork logged by QR scan — audit-ready without the binder chase.',
  },
  {
    title: 'Inventory & materials',
    body: 'Shop and truck stock tracked by scan: check-in/check-out, bins, labels, and reorder visibility across thousands of materials.',
  },
  {
    title: 'Office paperwork',
    body: 'Invoices, timesheets, POs, and job packets moved between your systems automatically — typed once, filed everywhere.',
  },
  {
    title: 'Reports & job visibility',
    body: 'Live dashboards on jobs, crews, and costs — the numbers you ask the office for, already on your screen.',
  },
]

interface ProofItem {
  name: string
  role: string
  body: string
}

const PROOF: ProofItem[] = [
  {
    name: 'QRSafePro',
    role: 'Equipment inspection & inventory SaaS',
    body: 'The QR-based inspection and inventory platform an electrical contractor runs daily — equipment safety checks, PIN-verified material check-in/out, thousands of catalog materials, and printed bin labels.',
  },
  {
    name: 'ChangeOrderAI',
    role: 'Change-order management',
    body: 'Construction change-order software that captures scope changes in the field and turns them into documented, signable change orders.',
  },
  {
    name: 'Knight Electric',
    role: 'Working electrical contractor',
    body: 'The contractor whose operations these systems run inside — inspections, inventory, and the office workflows around them. This is production software in a real shop, not a demo.',
  },
]

// ─── Shared inline style fragments ───────────────────────────────────────────

const EYEBROW: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.28em',
  color: 'var(--gold)',
}

const BODY_TEXT: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  color: 'var(--ink-soft)',
  lineHeight: 1.7,
  margin: 0,
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TradesPage() {
  return (
    <>
      <a href="#trades-main" className="skip-link">
        Skip to main content
      </a>

      {/* Minimal top bar — this page is a focused landing surface */}
      <header
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '28px clamp(20px, 5vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Link
          href="/"
          aria-label="Verdorian home"
          style={{
            fontFamily: 'var(--font-display), serif',
            fontWeight: 600,
            fontSize: '19px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            textDecoration: 'none',
          }}
        >
          Verdorian
        </Link>
        <Link
          href="/#contact"
          className="btn-blue"
          style={{ padding: '12px 22px', fontSize: '11px', textDecoration: 'none' }}
        >
          Start a Test-Drive
        </Link>
      </header>

      <main id="trades-main">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          aria-label="ai operations for specialty trade contractors"
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 48px) clamp(56px, 8vw, 88px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
          }}
        >
          <span style={EYEBROW}>For Specialty Trade Contractors</span>

          <h1
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontWeight: 500,
              fontSize: 'clamp(38px, 6.4vw, 76px)',
              lineHeight: 1.04,
              letterSpacing: '0.006em',
              color: 'var(--ink)',
              margin: 0,
              maxWidth: '17ch',
            }}
          >
            The office work is stealing your field hours.
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>
              We automate it — you test it before you buy.
            </span>
          </h1>

          <p style={{ ...BODY_TEXT, fontSize: '17px', maxWidth: '58ch' }}>
            Verdorian builds ai operations systems for electrical, HVAC, plumbing, and
            mechanical contractors — estimating, change orders, inspections, inventory,
            and the back office. Built by the engineer behind{' '}
            <strong style={{ color: 'var(--ink)' }}>QRSafePro</strong> and{' '}
            <strong style={{ color: 'var(--ink)' }}>ChangeOrderAI</strong>, the systems a
            working electrical contractor runs on every day.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '6px' }}>
            <Link
              href="/#contact"
              className="btn-blue"
              style={{ padding: '16px 32px', fontSize: '13px', textDecoration: 'none' }}
            >
              Test-Drive an Automation
            </Link>
            <Link
              href="/#pricing"
              className="btn-ghost"
              style={{ padding: '16px 32px', fontSize: '13px', textDecoration: 'none' }}
            >
              See Pricing
            </Link>
          </div>

          <p
            style={{
              ...BODY_TEXT,
              fontSize: '13px',
              color: 'var(--ink-faint)',
            }}
          >
            $500 starts the pilot, credited toward your build. If it doesn&apos;t hit the
            number we agree on, you don&apos;t buy it.
          </p>
        </section>

        {/* ── What we automate for the trades ──────────────────── */}
        <section
          aria-label="What we automate for trade contractors"
          className="glass-stage"
          style={{
            borderTop: '1px solid var(--rule-strong)',
            padding: 'clamp(64px, 9vw, 96px) 0',
          }}
        >
          <div
            style={{
              maxWidth: '1120px',
              margin: '0 auto',
              padding: '0 clamp(20px, 5vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '44px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={EYEBROW}>What We Automate</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 4.4vw, 52px)',
                  lineHeight: 1.08,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                The paperwork between{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                  the job and the money.
                </span>
              </h2>
            </div>

            <div
              role="list"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '18px',
              }}
            >
              {CAPABILITIES.map((cap) => (
                <article
                  key={cap.title}
                  role="listitem"
                  className="glass-card"
                  style={{ position: 'relative' }}
                >
                  <div
                    style={{
                      padding: 'clamp(24px, 2.6vw, 34px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontWeight: 500,
                        fontSize: 'clamp(20px, 2.2vw, 25px)',
                        color: 'var(--ink)',
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {cap.title}
                    </h3>
                    <p style={{ ...BODY_TEXT, fontSize: '14.5px' }}>{cap.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof ─────────────────────────────────────────────── */}
        <section
          aria-label="Proof — systems running inside a real contractor"
          style={{
            borderTop: '1px solid var(--rule-strong)',
            padding: 'clamp(64px, 9vw, 96px) 0',
          }}
        >
          <div
            style={{
              maxWidth: '1120px',
              margin: '0 auto',
              padding: '0 clamp(20px, 5vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '44px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={EYEBROW}>Not Theory — Production</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 4.4vw, 52px)',
                  lineHeight: 1.08,
                  color: 'var(--ink)',
                  margin: 0,
                  maxWidth: '20ch',
                }}
              >
                These systems already run{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                  inside a real shop.
                </span>
              </h2>
            </div>

            <div
              role="list"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '18px',
              }}
            >
              {PROOF.map((item) => (
                <article key={item.name} role="listitem" className="plate" style={{ padding: 'clamp(24px, 2.6vw, 34px)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display), Georgia, serif',
                        fontWeight: 500,
                        fontSize: '23px',
                        color: 'var(--ink)',
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.22em',
                        color: 'var(--gold)',
                      }}
                    >
                      {item.role}
                    </span>
                    <p style={{ ...BODY_TEXT, fontSize: '14.5px', marginTop: '6px' }}>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────── */}
        <section
          aria-label="Start your test-drive"
          style={{
            borderTop: '1px solid var(--rule-strong)',
            padding: 'clamp(72px, 10vw, 112px) clamp(20px, 5vw, 48px)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '22px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(30px, 4.6vw, 54px)',
                lineHeight: 1.08,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Pick the one task your office hates most.
              <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>
                We&apos;ll build it. You test-drive it.
              </span>
            </h2>
            <p style={{ ...BODY_TEXT, fontSize: '16px', maxWidth: '48ch' }}>
              A free 20-minute fit call is all it takes to find out whether it&apos;s worth
              automating. If it isn&apos;t, we&apos;ll tell you that too.
            </p>
            <Link
              href="/#contact"
              className="btn-blue"
              style={{ padding: '16px 34px', fontSize: '13px', textDecoration: 'none' }}
            >
              Start Your Test-Drive
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
