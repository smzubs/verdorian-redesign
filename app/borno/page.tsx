import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Borno — Word Ladder Duel · Verdorian',
  description:
    'Borno is an offline word-ladder game for iPhone. Change a letter, make a new word, build the longest ladder — duel a clever on-device opponent, race the clock, or unwind in Zen. No ads. No account. Coming soon to the App Store.',
  alternates: { canonical: 'https://verdorian.com/borno' },
  openGraph: {
    title: 'Borno — Word Ladder Duel',
    description:
      'An offline word-ladder game for iPhone. Duel a clever opponent, race the clock, or play a fresh puzzle every day. No ads, no account.',
    url: 'https://verdorian.com/borno',
  },
}

export const viewport: Viewport = { themeColor: '#040A18' }

const MODES = [
  { glyph: '🦉', name: 'Duel', accent: 'var(--bn-violet)', body: 'Trade moves with Borno the owl. Corner it and the round is yours.' },
  { glyph: '⏱', name: 'Sprint', accent: 'var(--bn-cyan)', body: 'Race the clock and see how long a ladder you can build.' },
  { glyph: '∞', name: 'Zen', accent: 'var(--bn-cyan)', body: 'No clock, no pressure — just you and the words.' },
  { glyph: '🔥', name: 'Daily', accent: 'var(--bn-gold)', body: 'One fresh puzzle every day. Keep your streak alive.' },
]

const STEPS = [
  { n: '1', title: 'Start with a word', body: 'Every ladder begins on a real word.' },
  { n: '2', title: 'Change a letter', body: 'Swap one letter — or a few on harder tiers — to form a new valid word.' },
  { n: '3', title: 'Build the ladder', body: 'Keep going. The longer and sharper your ladder, the higher you score.' },
]

const PERKS = [
  '100% offline — play anywhere, no signal needed',
  'No ads, ever',
  'No account, no sign-up',
  '5 free hints every day',
  'A premium, hand-crafted feel',
]

export default function BornoLandingPage() {
  return (
    <div className="borno-lp">
      <style>{bornoStyles}</style>

      <header className="bn-header">
        <Link href="/" className="bn-back" aria-label="Verdorian home">
          &larr; Verdorian
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="bn-hero">
          <p className="bn-eyebrow">A Verdorian game for iPhone</p>
          <h1 className="bn-wordmark">BORNO</h1>
          <p className="bn-tagline">Duel the AI. Get sharper.</p>
          <p className="bn-lede">
            An offline word-ladder game. Change a letter, make a new word, and build the longest
            ladder you can &mdash; against a clever on-device opponent, the clock, or nobody at all.
          </p>
          <div className="bn-cta-wrap">
            <span className="bn-pill" role="text">
               Coming soon to the App Store
            </span>
            <a className="bn-notify" href="mailto:sm@verdorian.com?subject=Notify%20me%20about%20Borno">
              Want a heads-up at launch? Email us &rarr;
            </a>
          </div>
        </section>

        {/* How to play */}
        <section className="bn-section">
          <h2 className="bn-h2">How it plays</h2>
          <div className="bn-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="bn-step">
                <span className="bn-step-n">{s.n}</span>
                <div>
                  <h3 className="bn-step-title">{s.title}</h3>
                  <p className="bn-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="bn-ladder-demo" aria-hidden="true">
            <span>cold</span> &rarr; <span>gold</span> &rarr; <span>good</span> &rarr;{' '}
            <span>wood</span> &rarr; <span>word</span>
          </p>
        </section>

        {/* Modes */}
        <section className="bn-section">
          <h2 className="bn-h2">Four ways to play</h2>
          <div className="bn-modes">
            {MODES.map((m) => (
              <div key={m.name} className="bn-mode-card">
                <span className="bn-mode-glyph" style={{ color: m.accent }}>
                  {m.glyph}
                </span>
                <h3 className="bn-mode-name" style={{ color: m.accent }}>
                  {m.name}
                </h3>
                <p className="bn-mode-body">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="bn-section">
          <h2 className="bn-h2">Why you&apos;ll like it</h2>
          <ul className="bn-perks">
            {PERKS.map((p) => (
              <li key={p} className="bn-perk">
                <span className="bn-perk-dot" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bn-footer">
        <p className="bn-foot-links">
          <Link href="/borno/privacy">Privacy</Link>
          <span className="bn-foot-sep">&middot;</span>
          <a href="mailto:sm@verdorian.com">Support</a>
          <span className="bn-foot-sep">&middot;</span>
          <Link href="/">Verdorian</Link>
        </p>
        <p className="bn-foot-fine">
          Borno is made by Verdorian Technologies LLC. The opponent is a plain on-device
          algorithm &mdash; no cloud AI, no tracking, no ads.
        </p>
      </footer>
    </div>
  )
}

const bornoStyles = `
  .borno-lp {
    --bn-bg: #040A18;
    --bn-surface: rgba(255,255,255,0.045);
    --bn-border: rgba(255,255,255,0.10);
    --bn-cyan: #22D3EE;
    --bn-violet: #A78BFA;
    --bn-gold: #FBBF24;
    --bn-text: #EAF2FF;
    --bn-dim: rgba(234,242,255,0.64);
    --bn-faint: rgba(234,242,255,0.42);
    min-height: 100vh;
    background:
      radial-gradient(120% 80% at 50% -10%, rgba(34,211,238,0.10), transparent 60%),
      radial-gradient(90% 60% at 90% 20%, rgba(167,139,250,0.08), transparent 55%),
      var(--bn-bg);
    color: var(--bn-text);
    font-family: var(--font-body), system-ui, sans-serif;
    overflow-x: hidden;
  }
  .borno-lp a { color: inherit; text-decoration: none; }
  .bn-header {
    max-width: 900px; margin: 0 auto;
    padding: 22px clamp(20px, 5vw, 40px);
  }
  .bn-back {
    font-size: 13px; font-weight: 600; letter-spacing: 0.06em;
    color: var(--bn-faint); transition: color 0.2s ease;
  }
  .bn-back:hover { color: var(--bn-cyan); }
  .borno-lp main { max-width: 900px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); }

  /* Hero */
  .bn-hero { text-align: center; padding: clamp(40px, 9vw, 88px) 0 clamp(36px, 7vw, 64px); }
  .bn-eyebrow {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.28em; color: var(--bn-faint); margin: 0 0 22px;
  }
  .bn-wordmark {
    font-family: var(--font-display), Georgia, serif;
    font-weight: 500;
    font-size: clamp(58px, 15vw, 128px);
    letter-spacing: clamp(6px, 2.4vw, 20px);
    line-height: 1; margin: 0;
    color: var(--bn-text);
    text-shadow: 0 0 42px rgba(34,211,238,0.45);
    padding-left: clamp(6px, 2.4vw, 20px); /* balance the trailing letter-spacing */
  }
  .bn-tagline {
    font-family: var(--font-display), Georgia, serif;
    font-style: italic; font-size: clamp(18px, 3.6vw, 24px);
    color: var(--bn-cyan); margin: 18px 0 0;
  }
  .bn-lede {
    max-width: 34em; margin: 20px auto 0;
    font-size: clamp(15px, 2.3vw, 17px); line-height: 1.65; color: var(--bn-dim);
  }
  .bn-cta-wrap { margin-top: 34px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
  .bn-pill {
    display: inline-block; padding: 13px 24px; border-radius: 999px;
    background: linear-gradient(180deg, rgba(34,211,238,0.16), rgba(34,211,238,0.06));
    border: 1px solid rgba(34,211,238,0.40);
    color: var(--bn-text); font-weight: 600; font-size: 15px;
    box-shadow: 0 0 30px rgba(34,211,238,0.20);
  }
  .bn-notify { font-size: 13.5px; color: var(--bn-faint); transition: color 0.2s ease; }
  .bn-notify:hover { color: var(--bn-cyan); }

  /* Sections */
  .bn-section { padding: clamp(30px, 6vw, 56px) 0; border-top: 1px solid var(--bn-border); }
  .bn-h2 {
    font-family: var(--font-display), Georgia, serif; font-weight: 500;
    font-size: clamp(24px, 4.4vw, 34px); text-align: center; margin: 0 0 clamp(24px, 4vw, 38px);
  }

  /* Steps */
  .bn-steps { display: grid; gap: 14px; }
  .bn-step {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 18px 20px; border-radius: 16px;
    background: var(--bn-surface); border: 1px solid var(--bn-border);
  }
  .bn-step-n {
    flex: none; width: 34px; height: 34px; border-radius: 999px;
    display: grid; place-items: center; font-weight: 700; font-size: 15px;
    color: var(--bn-cyan); background: rgba(34,211,238,0.12); border: 1px solid rgba(34,211,238,0.30);
  }
  .bn-step-title { font-size: 16px; font-weight: 600; margin: 3px 0 4px; color: var(--bn-text); }
  .bn-step-body { font-size: 14.5px; line-height: 1.6; color: var(--bn-dim); margin: 0; }
  .bn-ladder-demo {
    text-align: center; margin: 26px 0 0; font-size: clamp(15px, 3vw, 19px);
    letter-spacing: 0.04em; color: var(--bn-faint);
    font-family: var(--font-display), Georgia, serif;
  }
  .bn-ladder-demo span { color: var(--bn-cyan); }

  /* Modes */
  .bn-modes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .bn-mode-card {
    padding: 22px 20px; border-radius: 18px;
    background: var(--bn-surface); border: 1px solid var(--bn-border);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }
  .bn-mode-card:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.20); }
  .bn-mode-glyph { font-size: 26px; }
  .bn-mode-name {
    font-family: var(--font-display), Georgia, serif; font-weight: 600;
    font-size: 20px; margin: 10px 0 6px;
  }
  .bn-mode-body { font-size: 14px; line-height: 1.55; color: var(--bn-dim); margin: 0; }

  /* Perks */
  .bn-perks { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; max-width: 32em; margin-inline: auto; }
  .bn-perk { display: flex; align-items: center; gap: 12px; font-size: 15.5px; color: var(--bn-text); }
  .bn-perk-dot {
    flex: none; width: 8px; height: 8px; border-radius: 999px;
    background: var(--bn-cyan); box-shadow: 0 0 10px rgba(34,211,238,0.7);
  }

  /* Footer */
  .bn-footer {
    max-width: 900px; margin: 0 auto; text-align: center;
    padding: clamp(36px, 6vw, 56px) clamp(20px, 5vw, 40px) 64px;
    border-top: 1px solid var(--bn-border); margin-top: 12px;
  }
  .bn-foot-links { display: flex; justify-content: center; gap: 12px; font-size: 14px; font-weight: 600; margin: 0 0 14px; flex-wrap: wrap; }
  .bn-foot-links a { color: var(--bn-dim); transition: color 0.2s ease; }
  .bn-foot-links a:hover { color: var(--bn-cyan); }
  .bn-foot-sep { color: var(--bn-faint); }
  .bn-foot-fine { max-width: 40em; margin: 0 auto; font-size: 12.5px; line-height: 1.6; color: var(--bn-faint); }

  @media (max-width: 460px) {
    .bn-modes { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    .bn-mode-card { transition: none; }
    .bn-mode-card:hover { transform: none; }
  }
`
