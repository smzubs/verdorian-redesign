# Verdorian — Broad Positioning Build Brief (NO compliance)

_Supersedes the compliance-wedge framing in site-brief.md and research-market.md §4. Source of truth for this build pass. Based on: research-rapidloop-archetype + positioning-broad + research-conversion + research-design (the rapidloop archetype + premium-broad references)._

## The positioning (locked for this pass)
Verdorian is a **broad "ai automation for any business" studio** — for SMBs, individuals, corporate ops, manufacturing: anyone with repetitive, manual workflows. Energy of rapidloop.ai ("put your daily work on autopilot"), but **premium and honest**. Honesty is the differentiator: the category over-claims ("100% accuracy", fake testimonials, "any industry"); we don't.

**The structural rule that keeps "broad" from becoming mush** (the core finding): ONE tight outcome hook on top → a NAMED mechanism → breadth shown *underneath* as a concrete **example-workflow grid** (never vague "any process") → the $497 audit + guarantee as the conversion spine.

## Hard constraints
- **Keep the current premium visual system** (warm ivory paper, gold, ink, Cormorant + Geist, `.plate` cards, `.btn-ink`, paper grain, editorial `.chapter` grid). This editorial look is the differentiation vs the dark-gradient Framer-template crowd. Do NOT introduce a UI library, dark-mode SaaS template, gradient soup, or cyan.
- **Strip ALL compliance/audit-document theming**: no "survives an audit", no wet-seal PASS/FAIL stamps as a thesis, no "Exhibit/Case File/dossier" framing, no "audit panic". The word "audit" now refers ONLY to the $497 offer.
- **Do NOT change** the SERVICES tier copy/prices ($497 / $1,500–$5,000 / Monthly, names, descriptions, outcomes, CTAs) or the PRODUCTS data in `lib/utils.ts`. Preserve verbatim.
- Voice: "we", lowercase "ai", no LLM/model names ("frontier ai agents"), no location/stats flex, no invented metrics, no fake testimonials. Mobile-first 375px, 48px taps, reduced-motion respected.
- `bun run tsc --noEmit && bun run build` must pass. **No git commit, no deploy** — checkpoint for review.

## 1) Hero — replace the compliance headline
- **Eyebrow:** AI AUTOMATION STUDIO
- **Headline (primary, recommended):** **Automation you'll actually use.**  _(broad, honest, anti-over-claim; covers individuals + teams. Keep the gold-italic accent on the last two words.)_
- **Alt to keep handy (rapidloop-adjacent):** "Put your busywork on autopilot."
- **Subhead (demote the category, hint breadth):** We design, build, and ship production ai automation for the repetitive work that runs your business — data entry, reports, approvals, scheduling, documents, follow-ups — for teams of any size, and for people who just want their time back.
- **Primary CTA:** Book a call → `scrollToSection('contact')`
- **Secondary CTA:** See the work → `scrollToSection('products')`
- Keep the hero device/mock composition.

## 2) Breadth band — "Who it's for" / example workflows (NEW, sits right under the hook)
The device that makes broad credible. A tight grid of **concrete example workflows**, bracketed by who they serve — NOT an "any industry" claim.
- **Eyebrow:** WHAT WE PUT ON AUTOPILOT
- **Headline:** If a person does it every week, software can probably do it.
- **Grid (6–9 concrete examples, outcome-phrased), e.g.:** re-keying data between tools · turning notes & voice into filed documents · drafting and routing approvals · chasing follow-ups and reminders · generating recurring reports · scheduling and intake · reconciling spreadsheets · syncing records across systems · structured inspections & sign-offs.
- One quiet line under the grid framing the audience: "Whether you're a solo operator, a growing team, or a corporate department — the work is the same: repetitive, and worth handing to software."

## 3) The named mechanism — brand the audit→build→care loop
Give the existing "Audit. Build. Maintain." a real name (rapidloop's "The Rapid Loop" equivalent), mapped to the 3 service tiers:
- **Name (recommended):** **The Verdorian Loop**
- **Steps:** **Audit** (we find your 3 highest-ROI automations) → **Build** (we ship the system that fits how you actually work) → **Care** (we keep it sharp and add more as you grow). The loop closes — Care feeds the next Audit.
- Render in HowIBuild as the centerpiece; keep the 4 principle paragraphs but strip any compliance lean.

## 4) Problem / cost-of-manual-work — reframe broad (no "audit panic")
- **Eyebrow:** THE REAL COST
- **Headline:** Manual work is quietly expensive.
- **3 cost tiles (broad, qualitative):** Hours that don't come back (repetitive admin scaling with headcount, not software) · Work that only runs when one person is in (process trapped in someone's head) · The slow leak (errors, dropped handoffs, things re-done) — keep all qualitative, no stats.

## 5) Services — KEEP EXACT
Render the 3 tiers verbatim from `lib/utils.ts` (Audit $497 / Buildout $1,500–$5,000 / Care Monthly). Section header may stay/adjust lightly but tier cards are untouchable.

## 6) Proof / products — KEEP EXACT data, broaden the framing
Keep the 4 PRODUCTS chapters verbatim. Section framing shifts from "audit-ready" to **breadth of real shipped work**: "Four systems, shipped and running — inspections, change orders, voice notes, insurance pipelines. Different industries, same studio." (Shows broad capability honestly — real products, no invented metrics.)

## 7) Offer band — KEEP the $497 + guarantee verbatim
- Headline: Start with a $497 audit.
- Guarantee (LOCKED, verbatim): **We find at least 3 automation opportunities in your operation, or the audit's free.**
- Keep "No retainer. No lock-in." CTA: Book a call.

## 8) FAQ — reframe broad
Keep the accessible accordion. Adjust questions to the broad story (drop the compliance-flavored framing):
- "We're not a tech company — can our work even be automated?" → most of who we build for; if it runs on forms, spreadsheets, approvals, or documents, it's a strong candidate.
- "How is this different from buying a tool or wiring up Zapier?" → off-the-shelf covers the easy 80% and stalls on the part that matters; we build production systems for the hard 20%, and we stay on.
- "What does it cost, really?" → audit $497; most buildouts $1,500–$5,000; care monthly & optional; full plan + ROI before any build.
- "How fast do we see something?" → audit lands fast; frontier ai agents compress the build from months into days — a working system in weeks.

## 9) About / Contact — strip compliance lean
About: keep the lived-operations authority narrative; broaden ("we've automated work across inspections, change orders, voice capture, and insurance ops"). Contact: keep "Book a call" single action.

## HANDOFF
Implement sections 1–4, 6–9 as copy/structure edits on the existing components; leave Services tier data + Products data untouched. Add the new Breadth band component (section 2) using `.plate`/grid primitives already in globals.css. Run tsc + build. Do NOT commit or deploy.
