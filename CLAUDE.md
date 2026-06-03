# Verdorian Technologies — verdorian.com (Premium Liquid Glass Redesign)

## Current Aesthetic (June 2026)
Super-premium, calm, expensive iOS 26 / Apple "Liquid Glass" on rich warm beige/cream.
- Base: #F8F5ED (richer warm cream), elevated glass #FDFAF3 fills with heavy backdrop-blur (28px) + saturate(1.3)
- Accents: refined gold #B0883C / #C9A44A (sparing), sage #69735A for depth, subtle blue for cards
- Typography: Fraunces (display/serif — luxury, tight tracking, large confident sizes), Outfit (geometric sans body), Spline Sans Mono (labels, status, tech)
- Background: Multi-layer cinematic liquid drifts (72s slow gold/sage radials + center warmth + vignette + fine grain overlay at soft-light/overlay)
- Glass system (core): .glass-card with inner top highlight (42% white gradient), ambient gold radial (top-right, blurred), hairline borders, layered soft shadows + inset. On hover: gold border, deeper shadow with gold diffusion, lift via springs.
- Cards everywhere use GlassCard (tilt springs for mouse, whileHover scale 1.01-1.015 + y-2/-4 for lift on Services/Products/How). Per-tier ambient colored lights (gold/sage/blue) that breathe + intensify on hover in Services.
- Motion: Framer springs (restrained, 60fps, no bounce), orchestrated staggers, full prefers-reduced-motion freeze (drifts, grain, lifts, ambients all stop).
- Voice & Tone: "we" (confident studio/team, never solo "I" or "100% owner-built"). Professional only — no product counts, no "founded", no Tennessee/Clarksville/location flex. Broad: automation for businesses of all sizes (small teams, manufacturing, corporate ops, construction — anything with workflows). Web platforms + software automation primary; iOS apps where they fit the workflow.
- Marketing structure (research-backed): Hero (promise) → Services higher as clear early offer/hook (pricing + outcomes right after hero per Linear/Vercel/Stripe + StoryBrand/AIDA best practices) → How we build (mechanism) → Products (proof) → About (authority) → Contact + Footer (action).

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
