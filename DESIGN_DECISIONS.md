# Design Decisions — Verdorian Technologies (2026 Liquid Glass Redesign)

## Overall Aesthetic Direction
Calm, expensive, memorable "Liquid Glass" iOS 26 / Apple-inspired on rich warm beige-cream (shifted fully from prior dark "Void Forge" cinematic).
- Feels like high-end physical glass on premium paper: heavy blur + saturation, hairline borders that pick up gold on hover, multi-layer soft shadows + inset catch-lights.
- Background is alive but restrained: 72s multi-position liquidBgDrift with 9+ layered gold/sage radials + vignette + fine grain (soft-light/overlay, 0.018 opacity, 32s steps).
- Brand gold is refined/sparing (#B0883C primary, #C9A44A highlights) — never neon. Sage and subtle blue provide color depth/shades per card tier.
- Goal: first-customer-door site that feels world-class, confident, professional, conversion-oriented. "We" voice, broad business automation (any ops/compliance workflows — web/software primary + iOS).

## Typography (2026)
- Display/headings: Fraunces (Google, variable-friendly) — luxury serif with character, large clamps (hero 52-92px), tight negative tracking, generous line-height.
- Body: Outfit (geometric sans) — clean, modern, excellent on glass.
- Labels/mono: Spline Sans Mono (or Geist/JetBrains fallbacks) for section labels, status, tech, badges.
- Rationale: Fraunces gives the premium "remember this" feeling on beige; avoids generic sans or old dark-mode fonts like Syne. "ai" lowercase in text for calm modern integration (see below).

## Glass System & Premium Cards (Core 2026 Innovation)
GlassCard (components/ui/GlassCard.tsx) is the single source of truth:
- Translucent elevated cream fill + 28px blur/saturate + 1px hairline.
- Internal layers: 42% top white gradient highlight + ambient gold radial (top-right, 210px, blur 42px, low opacity).
- Hover: border → var(--glass-border-gold), shadow deepens with gold diffusion rgba(180,138,64,0.08-0.11), subtle lift.
- Tilt: mouse-driven springs (rotateX/Y ±~5-10deg, 260/32 stiffness/damping) + base whileHover scale 1.012 / y-3 for all cards (even tilt=false).
- Services: additional per-tier colored ambient (gold for Audit, sage for Buildout, blue for Care) inside the card content, with CSS ambientBreathe 6.5s + .group:hover intensify + filter change. Wrapper motion whileHover for extra lift.
- Products & How: inherit full GlassCard + their whileHover wrappers (scale 1.01 y-3 or 1.015 y-2).
- No more solid bg overrides on featured cards (removed the rgba white on VoicePencil).
- Ambient + gold shades give "color depth" and "wow" expensive lit-glass feel without clutter.
- All respects reduced-motion (no anims on drifts/grain/lifts/ambients).

## "ai" Lowercase Convention (June 2026)
Applied throughout body copy, section subheads, meta titles/descriptions/keywords/og alts, product taglines ("supercharged with ai"), service name ("ai Automation Audit"), How header "with ai.", principle title "ai as force multiplier".
- Rationale: Fits the calm expensive aesthetic (less shouty acronym). Modern premium sites use lowercase "ai" in headlines/prose. Kept proper nouns (ChangeOrderAI) and avoided breaking title-case where it would look broken.
- One global pass + verification on live text (no "Claude", "AI " uppercase in prose).

## Marketing Structure & Copy Philosophy
- Services promoted higher (right after hero) as the clear primary offer/hook with prices + "WHAT YOU GET" outcomes. Follows best practices from Linear/Vercel/Stripe sites + StoryBrand (clarity of offer early), AIDA, etc. "Clear paths. Real results. Systems teams actually use."
- Professional only: Removed product counts ("5 Products Shipped"), "Founded", Tennessee/Clarksville/owner-built/location signals from cred strip, About stats, Contact, Footer, layout metadata, keywords. Cred now: "7 YEARS IN OPERATIONS • AUTOMATION FOR BUSINESSES OF ALL SIZES • WEB • SOFTWARE • iOS".
- "we" voice, broad appeal (small business to manufacturing to corporate to construction — any real operations/compliance/automation work). Web + software focus; iOS where workflow fits.
- Exact SERVICES data preserved (3 tiers, bullets, CTAs) unless directed.

## The "ai as force multiplier" Paragraph (HowIBuild)
Original named Claude + generic. Rewritten after research on what Verdorian actually does (production web/software/iOS automation systems for high-stakes ops/compliance/inspections/docs across industries; 7yr domain moat + AI as speed tool).
New (impressive, specific, no model names):
"Frontier ai agents and the latest generative technologies act as a genuine force multiplier. They compress months of foundational work into days — generating structure, code, and documentation at machine speed — while we apply deep operational expertise to the decisions that make automation reliable in real operations."
- Emphasizes compression of timelines (what used to take months), latest tech/agents, our irreplaceable focus on "the hard parts" (domain, regulatory, real-world reliability).
- Lives in PRINCIPLES[0] in HowIBuild.tsx. Section h2 also "with ai."

## Other 2026 Updates
- Hero: No more particle/LetterReveal plasma (simplified to clean split with glass accent panel "PRODUCTION AUTOMATION" + "We build automation that businesses actually use..."). Dual CTAs, broad subtitle.
- Products: WithinYou removed; 4-item bento (VoicePencil featured large). Ghost "More products in the forge...".
- About: Stats row fully removed; narrative focused on lived ops experience → building what teams needed.
- Contact/Footer: Location scrubbed; professional LLC only.
- Ambient lights + color shades: Per-tier in Services + global gold in GlassCard for depth without decoration.
- Verification: Post-edit tsc+build + Playwright MCP (navigate live, resize 375/1280, #services element screenshot + boxes snapshot, text eval for "Frontier ai agents", "ai as force multiplier", no Claude, full content visible no clip).

## Performance / Motion / A11y
- Springs over CSS transitions for natural "liquid" feel (stiffness 260-320, damping 22-32).
- Lenis still used for smooth programmatic scroll.
- All anims (including bg drifts, grain, card lifts, ambient breathe) fully frozen on prefers-reduced-motion.
- Focus gold, good contrast on glass (text-1/2/3 with opacity), skip link, aria preserved.
- Mobile guards: overflow-x hidden, max-w-100vw, 48pt min, word-wrap, tighter padding on <390px.

## Git / Deploy / Workflow
- Always: After any change (visual or copy) — `bun run tsc --noEmit && bun run build` (must be clean) → git commit with clear message → git push → `vercel --prod --yes` (it auto-aliases verdorian.com).
- Update project memory (this file + CLAUDE.md) with decisions before finishing.
- Project path: /Users/smzobayer/verdorian-redesign (the canonical editable one; .grok/sessions copy is for reference).

## File Changes in Recent Passes
- CLAUDE.md completely rewritten for current light glass, "ai" convention, Services-first marketing, professional tone, glass primitive details, "always deploy + update memory".
- DESIGN_DECISIONS.md (this file) updated from dark/Void Forge/Syne/plasma/violet to 2026 beige liquid glass, Fraunces/Outfit, ambient system, lowercase ai rationale, force multiplier rewrite, marketing reorg.
- Specific components: HowIBuild (copy + GlassCard), Services (grid/padding/ambient/hover), Products (remove solid override, add hovers), GlassCard (ambient + unified hover), Hero/About/layout/utils (ai lowercase + professional scrub + meta), globals.css (glass hover + ambient rules).

These decisions make the site feel intentional, spacious, production-shipped (senior designer bar), not generic shadcn or starter. Light frosted glass + Electric Cyan/gold accents + noise for depth. Mobile-first, nothing cut. Ship fast, iterate.
