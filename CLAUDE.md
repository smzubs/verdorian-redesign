# Verdorian Technologies — verdorian.com (Premium Liquid Glass Redesign)

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
