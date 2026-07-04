# Verdorian Technologies — verdorian.com (Premium Liquid Glass Redesign)

> ## ⚡ LATEST (2026-07-04 night) — PRO POLISH, LIVE HEAD `8eb21ed` (verdorian.com 200) — read first
> **Cool-tone unification:** every remaining warm-ivory value swept cool — `rgba(247,243,234,…)` → `rgba(244,247,252,…)`, `rgba(252,250,244,…)` → `rgba(251,252,254,…)`, `themeColor #F7F3EA → #F2F5FA` — across Nav ribbon (was visibly beige vs the cool page), Contact dark-band text, Footer, globals (.nav-glass, no-backdrop fallbacks, plate-dark, btn-ghost-light). The palette is now a single cool family (#F2F5FA/#13161B/#1877F2). **Typography unified:** PainSection heading converted to shared `SectionHeading` (Cormorant --t-h2 lead+accent) — all light sections now share one heading voice. Mobile nav verified: hamburger → Pricing tap scrolls to target, no overflow. Rollback: `checkpoint-pre-pro-polish` (`fbba722`).

> ## ⚡ PREVIOUS (2026-07-04 eve) — ELEGANCE PASS, `55ca6fe`
> One-idea-per-screen simplification on top of the overhaul below. **Order now: Hero → MatrixBand (signature drum, back under hero per user) → PainSection(#problem) → Pricing(#pricing, eyebrow "HOW IT WORKS & PRICING") → Capabilities(#automate) → Trust(#trust) → bridge → Contact.** Problem section: chips row CUT (heading + lanes + formula only). Capabilities: **6 cards** (Website Dev + product-idea cards folded into the extras line). Nav/Footer tab order = page order: Pricing / What We Automate / Our Work. Section numerals removed (were stale 01/03). Rollback: `checkpoint-pre-elegance-pass` (`62df766`).

> ## ⚡ PREVIOUS (2026-07-04 pm) — FULL-SITE OVERHAUL (3-agent audit applied), `68e3721`
> Whole-site restructure from parallel landing-page-architect + product-copywriter + ui-ux-design-engineer audits. **Homepage is now 6 content sections** (was 10): Nav → Hero → PainSection(#problem) → Capabilities(#automate) → MatrixBand → Pricing(#pricing) → Trust(#trust) → Contact(#contact) → Footer.
> - **DELETED sections** (files removed; recover via tag): BusinessVsIndividual (audience fork diluted ICP), BeforeAfter + ROISection (merged INTO PainSection as lanes sub-widget + formula caption), HowItWorks (duplicated Pricing's PILOT_STEPS).
> - **Hero:** H1 **"Your busywork, _off your plate._"** (replaced "fully automated" — honesty contradiction with human-in-loop positioning); subhead now states the pilot mechanic ("You run it on real work for two weeks — and you only pay if it hits the number we agreed on."); micro-line = WHO ("Built for busy owners and teams — no IT department needed."); flow steps renamed Data Organized / Insights Found.
> - **CTA standard:** "Start Your $500 Test-Drive" everywhere scrolling to #contact (Hero, Nav mobile, Pricing); "Request My Test-Drive" only on the form submit.
> - **Nav + Footer synced:** What We Automate(#automate) / Pricing(#pricing) / Our Work(#trust).
> - **Capabilities:** 8 cards (dropped 9th "Accurate by Design" — was a trust claim); retitled jargon → plain (Approvals & Follow-Ups, Apps That Talk to Each Other, Numbers You Can Actually Use, Turn Your Idea Into a Product); heading "…software your team barely has to think about."
> - **MatrixBand:** moved between Capabilities and Pricing; **glow-desync FIXED** (mbGlow window 48–52%, must stay < per-row stagger ≈1.67s); sentences rewritten concrete, lowercase ai.
> - **Design polish:** all mid-page sections normalized to `clamp(80px,10vw,104px)` padding; `.btn-blue:hover` adds fast translateY(-1px) lift; 72px light→dark gradient bridge div before Contact (in page.tsx).
> - **Sitewide lowercase-`ai` sweep** incl. all layout.tsx metadata (title/OG/twitter/keywords, "agents" dropped from descriptions).
> - Rollback tags: `checkpoint-pre-full-overhaul` (`25bf73c`, pilot offer but 10 sections) · `checkpoint-pre-pilot-offer` (`b850b1c`).

> ## ⚡ PREVIOUS (2026-07-04) — TEST-DRIVE PILOT OFFER, `e7ff409`
> **Business model shipped (3-agent research, see memory `project_verdorian_ai_business_strategy.md`): the FREE-AUDIT CTA is RETIRED → "Test-Drive Pilot"** — $500 to start (credited toward build), we build one automation in ~2 weeks, client tests it live on real data 14 days on OUR infrastructure, pays only if it hits the agreed number. Published fixed pricing: builds **from $5,000 fixed quote never hourly**, retainer **from $1,500/mo cancel anytime**.
> - **NEW `Pricing.tsx`** (#pricing, between HowItWorks and Trust): pilot feature glass card ($500 engraved numeral + italic-blue risk-reversal line + 4-step journey) + Build & Own / Run & Improve tier pair. Verified 1280 + 375 (no overflow).
> - **NEW `/trades` page** (`app/trades/page.tsx`): vertical wedge for specialty trade contractors (electrical/HVAC/plumbing/mechanical) — for cold-outreach links. Minimal own header (no scrollspy Nav), 6 trade capabilities, proof plates (QRSafePro/ChangeOrderAI/Knight Electric, qualitative only per honesty rules), CTAs → /#contact + /#pricing. Footer now links "For Trade Contractors".
> - **Form WIRED** (`app/actions/send-lead.ts` server action → Resend REST API): needs `RESEND_API_KEY` env in Vercel + verdorian.com verified in Resend (⚠️ NOT YET DONE — Resend MCP key invalid). Until then `sendLead` returns ok:false and Contact falls back to the old mailto draft — form never dead-ends. Contact copy reframed (Start Your Test-Drive / Request My Test-Drive + success/fallback states).
> - **CTA sweep:** Hero "Test-Drive an Automation", ROI "Start Your $500 Test-Drive", Nav mobile CTA, HowItWorks steps renamed **Pilot / Prove / Grow**.
> - **Case-study draft** `docs/knight-electric-case-study-draft.md` — all metrics are `[CONFIRM:]` placeholders; NOT publishable until owner sign-off (honesty rules).
> - Rollback tag for this whole pass: **`checkpoint-pre-pilot-offer`** (`b850b1c`, pushed).

> ## ⚡ PREVIOUS (2026-06-26) — HERO+NAV POLISH, `e851aa6`
> Theme = **iOS-26 light liquid glass**, cool #F2F5FA base + **Facebook-blue #1877F2** (via `--gold` token). Deploy = `git push && vercel deploy --prod --yes` straight to prod, **no localhost** (bare `vercel --prod` prints help — use `vercel deploy`). Page order (`app/page.tsx`): Nav → **Hero** → **MatrixBand** → PainSection(#problem) → Capabilities(#automate) → BusinessVsIndividual(#audience) → BeforeAfter(#workflow) → ROISection(#roi) → HowItWorks(#how-it-works) → Trust(#trust) → Contact(#contact) → Footer.
> - **Hero** (`components/sections/Hero.tsx`): badge "Smart Automation for Growing Businesses" + **slow dreamy multi-color neon power-on** (`neonPowerOn` 4s); H1 **"Your daily tasks, _fully automated._"** (bold, 2 lines) + "— with Verdorian AI Studio" + 1-line subhead "Let us autopilot your busywork—so you can grow your business and enjoy your life."; single glossy-blue CTA **`.btn-blue`** (smooth gradient-glide hover); micro-line w/ blue bolt icon; **workflow card = Business Intelligence Automation 6-step flow** (Data Collected→AI Organizes→Smart Dashboard→AI Insights→Human Decision→Action Taken), iOS 3D scroll-tilt.
> - **MatrixBand** (`components/sections/MatrixBand.tsx`): standalone **full-width centered iOS-picker 3D drum** of 18 rolling sentences (`MATRIX_SENTENCES`), `mbSpin` 30s, rows black→blue while crossing a transparent floating-glass ribbon; responsive, works on ALL screen sizes. (Previously a cramped right-of-hero backdrop — promoted out.)
> - **Nav** (`Nav.tsx`): **floating ribbon** (inset, rounded, shadow), logo far-left, center **frosted segmented-pill tabs** What We Automate / How We Automate / Our Best Bits (ids automate/how-it-works/trust) + sliding blue pill (`layoutId`) + **deterministic scrollspy**; no top-right CTA.
> - **`.btn-blue` + `.nav-tab`** live in `app/globals.css`. Honesty rules unchanged (no fake testimonials/metrics, human-review framing, audit is FREE / $497 RETIRED).
> - Full per-session detail + resume items in memory `project_verdorian.md` (resume item 0). Rollback tag `stable-pre-ai-studio-redesign` (`0f5b64c`).
> - Everything below predates this and is partly stale — treat THIS banner as authoritative.

> ## ⚡ LATEST STATE (2026-06-24) — "AI AUTOMATION STUDIO" REPOSITION — read this first
> The site was repositioned from a vague software/product studio into a **crystal-clear AI-automation business site** (commit `cbf3eeb`, **committed LOCAL ONLY — not pushed/deployed; live site still serves `0f5b64c` until the user approves go-live**).
> - **Theme:** still LIGHT cool-blue iOS-26 "liquid glass" (#F2F5FA base, #1877F2 accent via `--gold`) — the user explicitly REJECTED a dark rebuild. Pushed "futuristic" via a **command-center hero workflow visual** + shared workflow primitives in globals.css (`.vd-node`/`.vd-node-accent`/`.vd-dot`/`.vd-dot-done`/`.vd-line`, vdFlow/vdPulse keyframes).
> - **Offer:** the **$497 audit is RETIRED — the audit is now FREE.** CTA everywhere = "Get Free Automation Audit". (The old "$497 locked" non-negotiable below is VOID.)
> - **H1:** "AI Automation for the Work You Shouldn't Be Doing Manually".
> - **New 11-section homepage** (`app/page.tsx`): Nav → Hero(#hero) → PainSection(#problem) → Capabilities(#automate, "What We Automate" — 8 cards each with a real CSS/SVG mini-diagram incl. Business Intelligence) → BusinessVsIndividual(#solutions / #for-business / #for-individuals) → BeforeAfter(#workflow) → ROISection(#roi, interactive calculator) → HowItWorks(#how-it-works, 4 steps) → Trust(#trust, 6 control/human-review cards + honest real-work proof: QRSafePro·VoicePencil·Knight Electric) → Contact(#contact, audit FORM → composes a **mailto** to sm@verdorian.com, NO backend yet) → Footer.
> - **Nav:** Solutions · For Business · For Individuals · How It Works + "Get Free Automation Audit" CTA.
> - **DEAD/unused section files still in repo** (no longer imported by page.tsx; still contain old $497 copy — safe to prune): Offer, Services, FAQ, Problem, ProofBar, PullQuote, About, HowIBuild, WhyChooseUs, Products, ui/GlassCard.tsx, STATS in lib/utils.
> - **Honesty rules (unchanged):** no fake testimonials/logos/case-studies, no "100% accurate"/"fully autonomous"/"guaranteed", human-review framing.
> - Everything BELOW this banner predates the reposition and is partly stale (page order, $497, paper×glass). Treat the banner as authoritative.

## Current Aesthetic (June 2026) — PAPER × GLASS BLEND
Editorial "heritage prospectus" PAPER base with selective LIQUID-GLASS accents. **The governing rule: glass = live/offered, paper = settled/authoritative.** (Full art-direction spec: `docs/research-2026-06-23-design.md`; market/copy grounding: `docs/research-2026-06-23-market.md`.)
- **Paper base (the substrate):** ivory `--paper #F7F3EA` / `--paper-deep #F1EADB` / `--paper-bright #FCFAF4`, ink `--ink #1A1714` (+ `--ink-soft`/`--ink-faint`), hairline `--rule`/`--rule-strong`/`--rule-faint`, gold `--gold #A57A0B` / `--gold-bright #C49A0A`. Static gold "crown" radial + faint laid-paper chain lines + fine grain overlay. Near-square radii (2–4px). One ease: `--ease-prospectus`.
- **Typography:** Cormorant Garamond (`--font-display`, large confident serif + gold-italic accents + `.engraved` numerals) / Geist (`--font-body`). Spaced gold `.eyebrow` (0.3em) + hairline rules open each section. `.prose-measure` = 62ch body measure.
- **Glass layer (the fenestration) — applied ONLY to live/offered surfaces:** `.glass-card` (warm cream `--glass-fill` rgba(252,250,244,0.64), backdrop-blur 18px/12px mobile, gold `::before` ambient, 1px inner-top highlight `::after`, layered `--glass-shadow`, radius 8px, hover lift + `.glass-topline` gold draw-in) with per-tier `.glass-amber`/`.glass-sage`/`.glass-care`; `.glass-mock` (product mockup plates) + `.figure-halo`; `.nav-glass` deepens blur on scroll. GPU budget: ≤6 glass surfaces on screen; `@supports` near-opaque fallback; reduced-motion neutralizes lifts/toplines. **The old GlassCard.tsx / Fraunces / beige liquid-glass system is RETIRED** (some unused primitives may linger).
- **Where each material goes:** Services pricing tiers + Products case-study mock plates + Nav = GLASS. Capabilities catalog (10 cards), Why-Choose-Us ledger, guarantee/pull-quote = PAPER (`.plate`/ledger). Don't make the 10-card catalog glass — it busts the GPU budget and the "settled = paper" rule.
- **Motion:** "document being read, not a demo being played." Framer `FADE_UP`/`CARD_ENTRANCE`/`STAGGER_CONTAINER`, `whileInView once`, gentle staggers, glass y-lift 3px / paper 1px, full `prefers-reduced-motion` freeze.
- **Voice & Tone:** "we" (studio, never solo "I"). lowercase "ai", no LLM/model names ("frontier ai agents"). Honest = the differentiator: no invented metrics, no fake testimonials, no "100% accuracy", qualitative-only stats, no product counts / no location flex. Each service card carries a dual **FOR YOU / FOR YOUR BUSINESS** benefit split. Why-Choose-Us in a warm Humayun Ahmed / Mujtaba Ali / Satyajit Ray storyteller register (English).
- **Page order:** Nav → Hero (promise + guarantee one-liner under CTA) → ProofBar → Capabilities (#capabilities, "What We Do" 10-card catalog) → Problem → HowIBuild → Products (#products, "Our Work") → WhyChooseUs (#why-us) → Services (#services, pricing tiers) → Offer → PullQuote → FAQ → About → Contact → Footer. Section numerals 01–05 on Capabilities/HowIBuild/Products/Services/About. Guarantee one-liner sits under the Hero + Services CTAs.

## Stack & Tooling
- Next.js 16.2+ (App Router, Server Components, static generation, Turbopack)
- React 19, TypeScript 5.7+ **strict** (no `any` ever — unknown + guards)
- Tailwind CSS 4 via PostCSS + heavy custom :root tokens + globals.css layers (minimal Tailwind on visuals)
- Framer Motion 12.6+, Lenis 1.0.42 (smooth scroll + scrollToSection helper)
- next/font: Fraunces, Outfit, Spline_Sans_Mono (Geist/DM_Sans/JetBrains fallbacks)
- Bun (scripts, install, build) — vercel.json uses bun
- Deploy: Vercel (production alias verdorian.com + www). **Always** `git add && git commit -m "..." && git push && vercel --prod --yes` after changes.
- Verification: `bun run tsc --noEmit && bun run build` clean before deploy. Playwright MCP for visual QA on live (375px + desktop, #services etc. snapshots + element screenshots) when visuals involved.

## Non-Negotiables (Current)
- Zero TS errors, zero `any`
- Glass system for all cards/panels — no generic shadow-md/rounded-lg or solid bg overrides on glass (unless intentional tint)
- All motion respects reduced-motion; drifts/grain/lifts/ambients disabled
- Exact preserved copy for SERVICES (the 3 tiers: $497 Audit, $1,500–$5k Buildout, Ongoing Care — "WHAT YOU GET" bullets, CTAs) unless user explicitly directs change
- "ai" (lowercase i) convention in body copy, headings, meta, taglines, service names for calm modern premium (applied June 2026). Proper nouns like ChangeOrderAI stay. Titles in meta can use "ai Automation..." for consistency.
- No specific LLM/model names (Claude, etc.) in marketing copy or lists. Use "frontier ai agents", "latest generative technologies", "Frontier Models".
- "we" voice, broad ops/automation focus, professional (no location/stats flex)
- Mobile: 375px first, no horizontal scroll/cutoff ever, min 48pt taps, word-wrap guards
- Always ship/deploy after visual or content passes. Update git + memory docs.

## Recent Key Changes (Session Memory)
- Full visual pass to light premium glass from prior dark "Void Forge" (beige drifts, glass tokens, ambient lights, springs on all cards, gold hairlines/shades).
- Services moved higher as primary hook; cred strip professionalized ("7 YEARS... BUSINESSES OF ALL SIZES • WEB • SOFTWARE • iOS"); stats/location removed from About/Contact/Footer/meta.
- "ai" lowercase global pass + "ai as force multiplier" paragraph completely rewritten (no Claude; impressive, focuses speed on boilerplate + our domain moat for real ops reliability).
- GlassCard enhanced with internal ambient + unified whileHover + hover gold diffusion.
- HowIBuild principles now use GlassCard for consistency.
- Products featured no longer has solid bg override.
- All verified on live (Playwright element screenshots of #services on 375/1280 + text eval confirming no cutoffs + new copy present).
- Project path: /Users/smzobayer/verdorian-redesign (cd verdorian-redesign from ~)

### 2026-06-23 — Research-backed conversion restructure (commit `ae55393`, pushed, NOT deployed)
- **Two project agents installed** (`.claude/agents/`): `ai-automation-researcher` (opus, research/strategy only, no code) + `ai-automation-website-builder` (sonnet — pinned to implement INTO the existing Next 16 liquid-glass stack: reuse GlassCard/globals.css tokens, NO shadcn, NO fresh scaffold; UI/UX-agent + design-system.md refs stripped per user). Both dispatchable by name next session.
- **Research artifacts:** `docs/research-notes.md` (9 competitors, pricing, demand signals + sources + could-not-verify) and `docs/site-brief.md` (positioning, offer, page structure, copy, conversion plan). Brief carries ✅ APPROVED FINAL markers — builder reads finals, not drafts.
- **Approved finals (Zobayer sign-off):** Hero → "We build automation that survives an audit." ("Automation your team actually uses." = A/B variant); Guarantee verbatim → "We find at least 3 automation opportunities in your operation, or the audit's free."; stats stay qualitative (no cited stat block; unverified McKinsey 67% figure EXCLUDED everywhere).
- **Wired (structure + copy):** NEW `Offer.tsx` (after Products, $497 band + guarantee) + `FAQ.tsx` (before About, accessible disclosure: aria-expanded/controls, focus, 48px taps). Problem.tsx aligned + qualitative. Eyebrows/headlines/subheads applied to Services/HowIBuild/Products/About/Contact. SERVICES tiers + PRODUCTS data preserved exactly. Order: Nav Hero ProofBar Problem HowIBuild Services Products **Offer** PullQuote **FAQ** About Contact Footer. tsc + build clean.
- **OPEN / RESUME HERE next session:**
  1. **Visual QA not done** — run `bun run dev` (or Playwright 375/1280) to review Offer + FAQ + new copy before any deploy. NOT yet deployed to verdorian.com (this was a checkpoint commit).
  2. **Optional Audit price-context line** ("A full automation audit usually runs into the thousands. Ours is $497…") was SKIPPED — adding it touches Services tier-card markup (sign-off zone). Decide: add or leave.
  3. **Deferred sign-off-gated pass** (per verification-zone rules): Supabase + Resend lead form, Cal.com booking, PostHog events + 3 ranked A/B tests (hero CTA framing first). Dispatch `ai-automation-website-builder` for this once approved.

## File Ownership (Core)
- app/globals.css → :root tokens, body::before drifts + grain, .glass-card rules + hovers + reduced-motion
- app/layout.tsx → fonts, metadata (now "ai Automation..."), LenisProvider
- app/page.tsx → thin assembler (current order: Nav, Hero, Services, HowIBuild, Products, About, Contact, Footer)
- components/ui/GlassCard.tsx → the premium primitive (springs, tilt, ambient, highlights, whileHover)
- components/sections/HowIBuild.tsx → 4 principles (glass + hovers); first one is the key "ai as force multiplier"
- components/sections/Services.tsx → 3-tier pricing (exact copy preserved, per-tier ambients + group hovers)
- components/sections/Products.tsx → bento + compact (GlassCard + whileHover, no solid overrides)
- lib/utils.ts → SERVICES (exact), PRODUCTS (taglines updated to ai), scrollToSection
- lib/motion.ts → FADE_UP, CARD_ENTRANCE, STAGGER, easings (silk/expo)

## Quality Gate
Before "done": run tsc + build clean. For visuals: Playwright resize + #section screenshot + snapshot with boxes + live text eval (e.g. new paragraph present, no Claude, "ai " lowercase). Then commit + push + vercel --prod. Update this CLAUDE.md + DESIGN_DECISIONS.md with decisions.

Always autonomous, fast, high-quality. This is the memorable first-customer-door site — calm expensive glass, confident "we", conversion-oriented (offer early), broad appeal.
