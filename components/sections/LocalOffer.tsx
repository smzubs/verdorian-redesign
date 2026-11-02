'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FADE_UP } from '@/lib/motion'
import { scrollToSection } from '@/lib/utils'

// Local business offer — web version of the Business Owner handout.
// Copy, prices and fine print mirror the handout; keep them in sync with it.

const PHONE_DISPLAY = '858-610-8818'
const PHONE_HREF = 'tel:+18586108818'
const EMAIL = 'sm@verdorian.com'
const REQUEST_HREF = `mailto:${EMAIL}?subject=Business%20preview`
const SURVEY_URL = 'https://www.brightlocal.com/research/local-consumer-review-survey/'

const STAR_PATH = 'M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45 6.2 20.5l1.1-6.47L2.6 9.45l6.5-.95z'

function Stars({ filled, tone, label }: { filled: number; tone: 'gold' | 'muted'; label: string }) {
  return (
    <span className={`lo-stars lo-stars-${tone}`} role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d={STAR_PATH}
            fill={i < filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  )
}

const ICON = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const STEPS: { num: string; label: string; body: string; icon: React.ReactNode; stat?: { value: string; caption: string } }[] = [
  {
    num: '01',
    label: 'Google Reviews',
    body: 'A tap or scan opens your Google review link. Customers choose their rating and share honest feedback.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10l2.5 17h-15z" {...ICON} /><path d="M9.5 7.5h2v2h-2zM13 7.5h1.5M9.5 12h1.5M13 11h1.5v1.5H13z" {...ICON} /></svg>
    ),
    stat: { value: '47%', caption: 'of U.S. respondents said they would not use a business with fewer than 20 reviews.*' },
  },
  {
    num: '02',
    label: 'Your Web Page',
    body: 'Your services, photos, hours and directions in one clear, mobile-ready place.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="2.5" {...ICON} /><path d="M3 9h18M7 13h10M7 16h6" {...ICON} /></svg>
    ),
    stat: { value: '54%', caption: 'of U.S. respondents said they were likely to visit a business’s website after positive reviews.*' },
  },
  {
    num: '03',
    label: 'Contact',
    body: 'Clear buttons help visitors call, ask for a quote, get directions or request a booking.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5" {...ICON} /><path d="M10.5 18.5h3" {...ICON} /></svg>
    ),
  },
]

const reveal = {
  variants: FADE_UP,
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: '-60px' },
}

export default function LocalOffer() {
  return (
    <section id="local" aria-label="Web page and Google reviews for local businesses">
      <style>{`
        #local { position: relative; overflow: hidden; }
        /* Cormorant defaults to old-style figures: 01 reads as OI, 4.8 dips below the line */
        .lo-score-num, .lo-step-num, .lo-stat, .lo-price { font-variant-numeric: lining-nums; }
        .lo-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        /* ── Intro ── */
        .lo-intro { padding-top: clamp(116px, 13vw, 148px); padding-bottom: clamp(32px, 4vw, 48px); }
        .lo-meta {
          display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px;
          padding-bottom: 14px; margin-bottom: clamp(24px, 3vw, 36px);
          border-bottom: 1px solid var(--rule-strong);
          font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--gold);
        }
        .lo-meta-place { color: var(--ink-soft); }
        .lo-intro-grid { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: clamp(16px, 3vw, 40px); align-items: center; }
        .lo-title {
          font-weight: 700; font-size: clamp(44px, 6.2vw, 84px); line-height: 1.04;
          letter-spacing: 0.005em; color: var(--ink);
        }
        .lo-title > * { display: block; }
        .lo-sub {
          font-family: var(--font-fraunces), Georgia, serif; font-weight: 500;
          font-size: clamp(19px, 1.9vw, 24px); line-height: 1.35; color: var(--ink);
          margin-top: 20px; text-wrap: balance;
        }
        .lo-lede { font-size: 16px; line-height: 1.6; color: var(--ink-soft); margin-top: 10px; max-width: 46ch; }
        .lo-intro .btn-blue { margin-top: 28px; }
        .lo-art { width: 100%; height: auto; display: block; }

        /* ── Tinted stage: warm pool nods to the handout, base stays in the site's cool family ── */
        #local .glass-stage {
          --stage-a: rgba(24, 119, 242, 0.20);
          --stage-b: rgba(251, 191, 36, 0.13);
          --stage-c: rgba(34, 211, 238, 0.14);
          --stage-base-top: #EEF3FB;
          --stage-base-bottom: #E6EEFA;
          padding: clamp(40px, 5vw, 56px) 0 clamp(64px, 8vw, 88px);
        }
        .lo-block + .lo-block { margin-top: clamp(56px, 7vw, 72px); }
        .lo-heading { font-weight: 600; font-size: clamp(28px, 3.4vw, 40px); line-height: 1.12; color: var(--ink); }
        .lo-row { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 20px; margin-bottom: 20px; }
        .lo-tag { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-soft); }

        /* ── Business A vs B ── */
        .lo-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .lo-biz { padding: 24px 26px; border-radius: 24px; display: flex; flex-direction: column; gap: 12px; }
        .lo-biz.glass-card { border: 1.5px solid rgba(24, 119, 242, 0.55); }
        .lo-biz.glass-card:hover { border-color: rgba(24, 119, 242, 0.8); }
        .lo-biz-b { border: 1.5px dashed rgba(20, 24, 32, 0.24); background: rgba(255, 255, 255, 0.34); color: var(--ink-soft); }
        .lo-biz-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .lo-biz-name { font-size: 15px; font-weight: 600; }
        .lo-pill {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 999px; color: var(--gold); background: rgba(24, 119, 242, 0.1);
        }
        .lo-score { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .lo-score-num { font-family: var(--font-display), Georgia, serif; font-weight: 700; font-size: 56px; line-height: 1; }
        .lo-stars { display: inline-flex; gap: 3px; }
        .lo-stars-gold { color: #E8A317; }
        .lo-stars-muted { color: #8B929E; }
        .lo-biz-meta { font-size: 14px; }
        .lo-checks { display: flex; flex-wrap: wrap; gap: 8px 22px; list-style: none; font-size: 14px; font-weight: 600; }
        .lo-checks li { display: inline-flex; align-items: center; gap: 7px; }
        .lo-note { font-size: 12px; color: var(--ink-soft); margin-top: 12px; }
        .lo-takeaway { font-size: 16px; font-weight: 600; color: var(--ink); margin-top: 8px; }

        /* ── Three steps ── */
        .lo-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(28px, 4vw, 44px); margin-top: 8px; }
        .lo-step-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; color: var(--gold); }
        .lo-step-num { font-family: var(--font-display), Georgia, serif; font-weight: 700; font-size: 44px; line-height: 1; }
        .lo-step-label { flex: 1; font-size: 11.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; }
        .lo-step-body { font-size: 15px; line-height: 1.55; color: var(--ink-soft); }
        .lo-stat { font-family: var(--font-display), Georgia, serif; font-weight: 700; font-size: 40px; line-height: 1; color: var(--gold); margin-top: 22px; }
        .lo-stat-cap { font-size: 13px; line-height: 1.5; color: var(--ink-soft); margin-top: 8px; }
        .lo-built {
          font-family: var(--font-fraunces), Georgia, serif; font-weight: 600; font-size: 20px; line-height: 1.3;
          color: var(--ink); margin-top: 22px; padding-top: 22px; position: relative;
        }
        .lo-built::before { content: ''; position: absolute; top: 0; left: 0; width: 44px; height: 2px; background: var(--gold); }

        /* ── Offer + free check ── */
        .lo-offer { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: stretch; }
        .lo-card { padding: 28px 28px 30px; border-radius: 24px; }
        .lo-kicker { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); }
        .lo-price-row { display: flex; align-items: baseline; justify-content: space-between; gap: 6px 16px; flex-wrap: wrap; margin-top: 20px; }
        .lo-price-name { font-size: 17px; font-weight: 600; color: var(--ink); }
        .lo-price { font-family: var(--font-display), Georgia, serif; font-weight: 700; font-size: 38px; line-height: 1; color: var(--ink); }
        .lo-price-desc { font-size: 14px; line-height: 1.55; color: var(--ink-soft); margin-top: 8px; }
        .lo-check-title { font-weight: 600; font-size: clamp(28px, 3vw, 36px); line-height: 1.12; color: var(--ink); margin-top: 14px; }
        .lo-check-body { font-size: 15px; line-height: 1.55; color: var(--ink-soft); margin-top: 12px; max-width: 44ch; }
        .lo-card .btn-blue { margin-top: 20px; }
        .lo-contact { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 18px; margin-top: 12px; font-size: 15px; font-weight: 600; }
        .lo-contact a { color: var(--gold); text-decoration: none; display: inline-flex; align-items: center; min-height: 44px; }
        .lo-contact a:hover { text-decoration: underline; }
        .lo-contact span { font-size: 13px; font-weight: 500; color: var(--ink-soft); }
        .lo-terms { font-size: 15px; font-weight: 600; color: var(--ink); margin-top: 20px; }
        .lo-fine { font-size: 12px; line-height: 1.6; color: var(--ink-soft); margin-top: 8px; }
        .lo-fine a { color: inherit; }

        @media (max-width: 860px) {
          .lo-intro-grid, .lo-compare, .lo-steps, .lo-offer { grid-template-columns: 1fr; }
          .lo-art { max-width: 460px; margin: 8px auto 0; }
          .lo-intro .btn-blue, .lo-card .btn-blue { width: 100%; text-align: center; }
          .lo-price { font-size: 28px; }
        }
      `}</style>

      <div className="lo-wrap lo-intro">
        <div>
          <p className="lo-meta">
            <span>Web page / Google reviews / Local business care</span>
            <span className="lo-meta-place">Local | Clarksville, TN</span>
          </p>
          <div className="lo-intro-grid">
            <div>
              <h1 className="lo-title">
                <span>Let&rsquo;s Bring</span>
                <em className="gold-shimmer">More Customers</em>
                <span>to Your Business.</span>
              </h1>
              <p className="lo-sub">Make Your Business Easier to Find, Trust, and Choose.</p>
              <p className="lo-lede">A professional web page + tap-to-review stand. Built and managed for you.</p>
              <button type="button" className="btn-blue" onClick={() => scrollToSection('free-check')}>
                See how your business compares
              </button>
            </div>
            <Image
              className="lo-art"
              src="/images/local-shop-illustration.webp"
              alt="A shop owner hands a smiling customer a paper bag across the counter, beside a tap-or-scan Google review stand."
              width={1024}
              height={683}
              sizes="(max-width: 860px) min(460px, 92vw), 500px"
              preload
            />
          </div>
        </div>
      </div>

      <div className="glass-stage">
        <div className="lo-wrap">
          <motion.div className="lo-block" {...reveal}>
            <div className="lo-row">
              <h2 className="lo-heading">Which one would you call?</h2>
              <span className="lo-tag">Illustrative examples</span>
            </div>
            <div className="lo-compare">
              <article className="lo-biz glass-card">
                <div className="lo-biz-head">
                  <span className="lo-biz-name" style={{ color: 'var(--ink)' }}>Business A</span>
                  <span className="lo-pill">Clear next step</span>
                </div>
                <div className="lo-score" style={{ color: 'var(--ink)' }}>
                  <span className="lo-score-num">4.8</span>
                  <Stars filled={5} tone="gold" label="Rated 4.8 out of 5 stars" />
                </div>
                <p className="lo-biz-meta" style={{ color: 'var(--ink)' }}>210 reviews | newest: 2 days ago</p>
                <ul className="lo-checks" style={{ color: 'var(--ink)' }}>
                  {['Web page', 'Call', 'Directions'].map((item) => (
                    <li key={item}>
                      <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style={{ color: 'var(--gold)' }}><path d="M4 12.5l5 5L20 6.5" {...ICON} strokeWidth={2.4} /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="lo-biz lo-biz-b">
                <div className="lo-biz-head">
                  <span className="lo-biz-name">Business B</span>
                </div>
                <div className="lo-score">
                  <span className="lo-score-num">3.7</span>
                  <Stars filled={3} tone="muted" label="Rated 3.7 out of 5 stars" />
                </div>
                <p className="lo-biz-meta">9 reviews | newest: 1 year ago</p>
                <ul className="lo-checks">
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" {...ICON} strokeWidth={2.2} /></svg>
                    No website link
                  </li>
                </ul>
              </article>
            </div>
            <p className="lo-note">Illustrative businesses, not client results.</p>
            <p className="lo-takeaway">Clear information and recent reviews help customers decide who to contact.</p>
          </motion.div>

          <motion.div className="lo-block" {...reveal}>
            <div className="lo-row">
              <h2 className="lo-heading">How we help turn searches into customers</h2>
            </div>
            <div className="lo-steps">
              {STEPS.map((step) => (
                <div key={step.num}>
                  <div className="lo-step-head">
                    <span className="lo-step-num">{step.num}</span>
                    <span className="lo-step-label">{step.label}</span>
                    {step.icon}
                  </div>
                  <p className="lo-step-body">{step.body}</p>
                  {step.stat ? (
                    <>
                      <p className="lo-stat">{step.stat.value}</p>
                      <p className="lo-stat-cap">{step.stat.caption}</p>
                    </>
                  ) : (
                    <p className="lo-built">Built for your business.<br />Managed for you.</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="lo-block" {...reveal}>
            <div className="lo-offer">
              <div className="lo-card glass-card">
                <p className="lo-kicker">What we build &amp; manage</p>
                <div className="lo-price-row">
                  <span className="lo-price-name">One-time setup</span>
                  <span className="lo-price">$299</span>
                </div>
                <p className="lo-price-desc">Web page, approved Google profile cleanup, tested tap/scan review stand and staff guidance.</p>
                <div className="lo-price-row">
                  <span className="lo-price-name">Monthly care</span>
                  <span className="lo-price">$49 / month</span>
                </div>
                <p className="lo-price-desc">Hosting, SSL, backups, small updates, checks, up to 5 review reply drafts for approval and an activity report.</p>
              </div>
              <div id="free-check" className="lo-card glass-card" style={{ scrollMarginTop: '100px' }}>
                <p className="lo-kicker">Free check + concept preview</p>
                <h2 className="lo-check-title">See how your business compares.</h2>
                <p className="lo-check-body">Your Google profile vs. three nearby businesses, plus a concept for your web page.</p>
                <a className="btn-blue" href={REQUEST_HREF}>Request your free check</a>
                <p className="lo-contact">
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <span>No obligation.</span>
                </p>
              </div>
            </div>
            <p className="lo-terms">$150 to start. $149 on approval of agreed work. Care starts at launch. Month-to-month.</p>
            <p className="lo-fine">
              *<a href={SURVEY_URL} target="_blank" rel="noopener noreferrer">BrightLocal, Local Consumer Review Survey 2026</a> | 1,002 U.S. adults; stated preferences.
            </p>
            <p className="lo-fine">
              One location; up to 5 web page sections. Standard domain allowance $24/year. Tax and extras additional; scope agreed before payment. Google profile is free. Independent service. No guaranteed sales, rankings or review counts. Review stand illustrated. Google sign-in required. NFC needs a compatible phone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
