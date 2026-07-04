import Link from 'next/link'
import Footer from '@/components/sections/Footer'

// Shared shell for the legal pages — quiet, readable, on-theme.
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '28px clamp(20px, 5vw, 48px)',
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
      </header>
      <main
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '24px clamp(20px, 5vw, 48px) 96px',
        }}
      >
        <style>{`
          .legal-prose h1 {
            font-family: var(--font-display), Georgia, serif;
            font-weight: 500;
            font-size: clamp(34px, 5vw, 52px);
            line-height: 1.08;
            color: var(--ink);
            margin: 0 0 8px;
          }
          .legal-prose .legal-updated {
            font-family: var(--font-body), sans-serif;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            color: var(--ink-faint);
            margin: 0 0 40px;
          }
          .legal-prose h2 {
            font-family: var(--font-display), Georgia, serif;
            font-weight: 500;
            font-size: 24px;
            color: var(--ink);
            margin: 40px 0 10px;
          }
          .legal-prose p, .legal-prose li {
            font-family: var(--font-body), sans-serif;
            font-size: 15.5px;
            line-height: 1.75;
            color: var(--ink-soft);
            margin: 0 0 14px;
          }
          .legal-prose ul { padding-left: 22px; margin: 0 0 14px; }
          .legal-prose a { color: var(--gold); }
        `}</style>
        <div className="legal-prose">{children}</div>
      </main>
      <Footer />
    </>
  )
}
