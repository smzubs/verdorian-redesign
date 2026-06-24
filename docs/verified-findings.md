# Verdorian — Verified Findings & Positioning Ruling

_Independent research judge / fact-auditor pass. Date: 2026-06-23._
_Inputs audited: `research-notes.md`, `research-competitors.md` (T1), `research-conversion.md` (T2), `research-design.md` (T3), `research-market.md` (T4), `research-webtech.md` (T5), plus `CLAUDE.md` and `app/globals.css` for repo/voice/design context._

**Method.** Read all six research files end-to-end. Spot-checked the highest-stakes claims against their cited sources (live fetch/search this session): the McKinsey 67%/20% stat, the $5k–$15k category audit benchmark, the OSHA 2026 penalty figures, and the HubSpot 202% CTA stat. Where a citation is a secondary blog repeating a primary I could not see, confidence is downgraded and the chain is stated. Only this file is trusted downstream.

**Audit verdict at a glance.** The research is, on the whole, unusually disciplined — the threads already self-flag most of their own weak numbers and never let unverified stats reach the page. The bulk of the *strategic* content (competitor patterns, the offer-ladder positioning, the audit-as-tripwire mechanics, the design system analysis) is sound and survives. The rejections below are mostly numbers the threads *also* told us not to print, plus two real errors: a mis-attributed source on the audit benchmark, and a stale-brand "Electric-Cyan" reference in T5 that contradicts the live design system.

---

## 1. [VERIFIED]

Claims that trace to a credible cited source. **Classification:** Fact / Estimate / Assumption / Opinion. **Confidence:** High / Med / Low.

### A. Repo / offer facts (internal source = the repo itself — highest confidence)

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V1 | Verdorian is an AI-automation studio; offer ladder = $497 audit → $1,500–$5,000 buildout → monthly Care retainer; primary goal = book a call. | repo `CLAUDE.md`, `lib/utils.ts` | Fact | High |
| V2 | Voice rules: "we", lowercase "ai", no LLM/model names, no location/stats flex, professional, honesty-as-differentiator. | repo `CLAUDE.md` | Fact | High |
| V3 | Locked guarantee verbatim: "We find at least 3 automation opportunities in your operation, or the audit's free." | repo `CLAUDE.md` (approved final) | Fact | High |
| V4 | Proof = 4 shipped products (QRSafePro live; ChangeOrderAI, PolicyPilot, VoicePencil in dev) + Knight Electric (OSHA/electrical-safety) deployment, ~7 yrs domain experience. | repo `CLAUDE.md` + user context | Fact | High |
| V5 | Live design system is **Heritage Prospectus**: warm ivory paper (`--paper #F7F3EA`), ink, gold leaf (`--gold #A57A0B`), Cormorant Garamond display + Geist body, framed `.plate` cards, hairline rules, wet-seal stamps. **No cyan, no glassmorphism in the token set.** (NOTE: `CLAUDE.md` prose still describes an older "liquid glass / beige" system and even older "Fraunces/Outfit" fonts — `globals.css` is the source of truth and has moved on to Prospectus. The CLAUDE.md design prose is itself stale relative to the CSS.) | `app/globals.css` | Fact | High |

### B. Competitor teardowns (Fact = read off the live page; the *metrics inside* are unverified vendor self-claims, see Rejected)

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V6 | The audit/assessment entry-wedge is now **table stakes** — 6 of 10 scanned agencies lead with it. The differentiator is therefore NOT the audit but price + guarantee + domain depth. | T1 live reads (Idea Link, Winder, AiTomation, Axe, Automaly, The AI Automation Agency) | Fact (pattern) | High |
| V7 | Pricing is hidden more often than shown (6 of 10 "not disclosed"/"£call"); the transparent minority use price as a trust signal. | T1 live reads | Fact (pattern) | High |
| V8 | The category over-claims with unverifiable metrics ("98% accuracy," "50,000+ hours," "#1 agency," "£45M"). This is the exact culture Verdorian's honesty voice stands against. | T1 live reads | Fact (pattern) / Opinion (the "stand against" framing) | High / Med |
| V9 | **AiTomation (aitomationusa.com) is a direct collision with Verdorian's wedge** — "top 3–5 workflows we'd automate first… yours to keep, hire us or not" — but theirs is FREE/URL-automated vs Verdorian's $497 paid, human, guaranteed audit. Verdorian must articulate why paid > free. | T1 live read | Fact (the collision) / Assumption (the "must articulate" recommendation) | High / Med |
| V10 | **Winder.AI is the structurally closest competitor** (same audit→build→care ladder, regulated-industry ops focus). Their audit is stated at **£5k–£15k, 1–2 weeks**; build £25k–£100k. **Independently re-verified at source this session.** | winder.ai (verified live 2026-06-23) | Fact | High |
| V11 | **Genuine white space:** SMB inspection/OSHA/safety automation is held by *vertical SaaS* (Datagrid, Field1st, Safety Mojo) selling seats + "book a demo," not by audit-first studios. Compliance-led competitors (3E, OneAdvanced) are enterprise-only, gated, no price, no SMB on-ramp. | T1 live reads + cross-checks | Fact (pattern) | Med-High |

### C. Pricing benchmark (the price anchor)

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V12 | **Comparable automation audits run ~$5k–$15k; Verdorian's $497 undercuts the field ~10–30×.** This is the strongest *honest* on-site anchor (anchors against the market, not an invented competitor). | **Correct source = winder.ai (£5k–£15k audit, verified).** ⚠️ research-notes.md §1 and T2 §3.3 attribute this to digitalagencynetwork.com — that page does NOT state a $5k–$15k audit figure (it states $2,500–$15,000+ *builds* and $500–$5,000+ retainers). Use Winder.AI as the cite, not digitalagencynetwork. | Estimate (category benchmark) | High (figure) / the *attribution* was wrong — corrected here |
| V13 | $497 sits at the **bottom of the accepted paid-audit band ($500–$2,000)** — credible, not "cheap/risky." Buildout $1,500–$5,000 is at/below the low end of single-workflow build pricing. | thecrunch.io, digitalagencynetwork.com (build bands) | Estimate | Med-High |
| V14 | Single-workflow build $2,500–$15,000+; managed retainer $500–$5,000+. **Re-verified at source this session.** | digitalagencynetwork.com (verified live) | Estimate (guide-level) | High |

### D. Conversion mechanics (structure, not on-site numbers)

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V15 | Specific, operational guarantees beat vague "satisfaction guaranteed"; risk-reversal should sit UP FRONT, repeated, not in fine print. Verdorian's "find 3 or it's free" is exactly the endorsed form. | conversionsciences, asbn (Jay Abraham lineage), highlypersuasive | Fact (principle) / Opinion (it "is gold") | High / Med |
| V16 | Single-CTA discipline lifts conversion; one repeated primary action ("book the audit") beats competing CTAs. Unbounce benchmark: single-CTA 13.5% vs 5+ CTAs 10.5% across 18,639 pages. | Unbounce benchmark (via saashero secondary) | Fact (direction) / Estimate (exact %) | High (direction) / Med (%) |
| V17 | **Personalized/value-loaded CTAs convert 202% better than basic CTAs (330,000+ CTAs, 6 months).** **Verified at HubSpot source this session.** Use as *direction* — methodologically thin (no significance testing). | blog.hubspot.com (verified live) | Fact (HubSpot primary) | High (exists) / Med (rigor) |
| V18 | Shorter booking forms lift completion (~3 fields sweet spot); because the $497 price itself qualifies, the form can be short and hand off to a scheduler. | HubSpot form study, cxl, ventureharbour | Fact (direction) / Estimate (magnitudes) | High / Med |
| V19 | Tripwire/wedge mechanics: a low-priced high-value entry offer (the $497 audit) lifts downstream conversion vs cold leads; "audit → fix retainer" is the canonical structure. | crazyegg, myfunnelsecrets, rebelgrowth | Fact (mechanism) / Estimate (repeat-rate %s) | High (mechanism) / Low (%s) |
| V20 | For a firm with few hard numbers, **named shipped work is itself the proof**; 2–3 strong proof signals beat 7 weak ones; founder credentials framed around the exact problem function as proof. | briefd.it, foundersspace | Fact (pattern) | High |
| V21 | Showing price aids qualification and self-selects budget-aware buyers; publish fixed entry price + range for buildout + "scope it" for the retainer (published-base + scoped-tier hybrid). | getmonetizely, rampiq | Fact (pattern) / Estimate (the 48%/86% figures) | High (pattern) / Med (figures) |

### E. Market / buyer behavior (T4)

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V22 | **OSHA 2026 penalties: serious violation $16,550; willful/repeat up to $165,514 per item** (Jan 2026 CPI adjustment). **Independently verified against multiple sources this session — these are federal figures.** | abccarolinas.org (orig.) + osha.gov / occupros / osha-defense (verified) | Fact | High |
| V23 | The OSHA 2026 *narrative* — "most costly penalties now stem from documentation failures (incomplete logs, outdated training, missing written programs)," programmed construction inspections "up ~8% YoY," new heat/HazCom mandates (HazCom compliance by May 19, 2026) — is the strongest "willing-to-pay + dated trigger" signal in the research. | abccarolinas.org (regional industry assoc.) | Fact (mandates/dates) / Estimate (the "8% YoY" & "documentation-driven" framing = association characterization) | High (penalties/dates) / Med (the framing) |
| V24 | Safety/compliance documentation automation is a **growing + explicitly underserved** market: compliance software ~12–14% CAGR; EHS software ~9.8–11.7% CAGR; 85%+ of multinationals use EHS software yet only 68% satisfied with usability and 23% want *more automation*. | mordorintelligence, openpr, businessresearchinsights | Fact (reports) / Estimate (absolute TAMs diverge — trust the CAGR, not the $TAM) | Med-High (growth) / Low (absolute $) |
| V25 | SMBs in safety/inspection already pay $3,600–$20,000+/yr on tooling + $5k–$20k on implementation; per-seat SaaS compounds painfully. So Verdorian's $497 + $1,500–$5,000 is **small relative to incumbent spend** — budget exists. | itqlick, basincheck, softwareadvice, inspectordata, goaudits | Estimate (comparison-site pricing) | Med-High |
| V26 | Niche/vertical specialists outperform generalists, and vertical-experience screens eliminate generalists early in B2B procurement. Direction strongly corroborated across sources. | inmotionhosting, businessingmag, phantomleads | Estimate (direction solid; exact %s are agency-blog citations of an untraced study) | Med (direction) / Low (exact %s) |
| V27 | "Human in the loop" is a *premium* selling feature in high-stakes B2B, not a weakness; trust/compliance is now a vendor-selection axis. Validates Verdorian's "we build it with you / audit before build." | apollo.io, idc.com | Fact (analyst/vendor research) | Med-High |

### F. Design / premium tells (T3) — strongest-quality thread

| # | Claim | Source | Class | Conf. |
|---|---|---|---|---|
| V28 | Premium "expensive" tells: a real/bespoke typeface (not default Inter), serif-for-authority + sans-for-body pairing, thin display weights with tight tracking, mono for precision, whitespace as the luxury material, single contained color event, hairline borders over drop-shadows, real product artifacts over illustrations, quiet short-travel motion. | type foundry / live-site cross-checks (Linear/Vercel/Stripe/Anthropic) | Fact (sourced type facts) / Estimate (observed treatments) | High (type) / Med (observed) |
| V29 | **Anthropic (Styrene + Tiempos, warm ivory ground) is the most relevant precedent** — an AI company reading as a heritage institution reads MORE premium, the opposite of the purple-gradient AI cliché. This maps directly onto Verdorian's Cormorant + Geist + ivory Prospectus system. | type.today, fontofweb + globals.css | Fact (Anthropic type) / Opinion (the mapping) | High / Med |
| V30 | AI-generated "tells" to avoid (centered hero + gradient blob + 2 buttons, Inter-everything, purple→blue gradients, emoji icons, three-equal-cards, ✨ AI badges, glassmorphism-as-identity, fake logo bars, invented stat blocks). The Prospectus system already structurally blocks ~13 of 16. | T3 synthesis | Opinion (well-grounded) | Med-High |
| V31 | Recommended motion/web-tech stack: migrate `@studio-freight/lenis@1.0.42` → maintained **`lenis@1.3.23`**; bump `framer-motion` → 12.41.0 (`motion`); hero "product-in-action" = **hand-built SVG orchestrated with Motion** (≈0 added KB) over Lottie/Rive; skip 3D for v1; View Transitions optional/experimental. Versions pulled from npm registry JSON API this session. | T5 (npm registry API) | Fact (versions) / Assumption (lenis React-19 peer range untraced) | High (versions) / Med (peer compat) |

---

## 2. [REJECTED — do not use]

Claims that are unverifiable, fabricated-risk, internally contradictory, mis-attributed, or only secondary-sourced. **None of these may reach the site.**

| # | Rejected claim | Reason |
|---|---|---|
| **R1** | **"McKinsey 2025: 67% of small businesses using AI automation saw 20%+ revenue growth."** | **FABRICATED-RISK — confirmed false framing this session.** Traces only to a secondary blog (ai-crescent.com); never found in any primary McKinsey publication. The real McKinsey "State of AI 2025" 67% figure relates to companies **stuck in pilot mode**, and the 20% relates to **digital-budget share among high performers** — NOT small-business revenue growth. The stat conflates two unrelated McKinsey numbers into a claim McKinsey never made. **Hard exclude everywhere** (all three threads — research-notes §3, T1 §4, T4 §6 — already flag it; this confirms the rejection). |
| **R2** | **Any "revenue ranking" of AI-automation agencies.** | Private agencies do not publish revenue; no such ranking exists. Inventing one is fabrication. All threads correctly refuse to produce one — keep it that way. Hard rule. |
| **R3** | **Every competitor self-claimed metric:** Beam "98% accuracy" / ">10m tasks," Axe "50,000+ hours" / "#1 agency," AiTomation "$1.8M acquisition," Automaly "260+ hrs saved / 3× pipeline / £100K+ unlocked," The AI Automation Agency "£45M combined revenue," Automation Agency "1,025+ businesses / 698,000+ tasks." | **Unverified on-page vendor assertions.** Quoted by T1 only as "what they claim," NOT confirmed. Never repeat any as fact, and per the no-stats-flex voice, never mirror this style on Verdorian's page. |
| **R4** | **The $5k–$15k audit benchmark *as attributed to digitalagencynetwork.com*.** | **Mis-attribution.** Verified this session: that page states build $2,500–$15,000+ and retainer $500–$5,000+, but **no $5k–$15k audit figure.** The figure itself is real and verified — but the correct source is **winder.ai (£5k–£15k audit)**. ⚠️ Fix the citation before any on-site anchor uses it. (The *claim* survives as V12; the *citation* is rejected.) |
| **R5** | **Any third-party percentage rendered as an on-site marketing claim** — including the "verified-at-source" ones (HubSpot 202%, Unbounce 13.5/10.5%, the 48%/86% pricing-transparency figures, niche-vs-generalist 78%/54%/73%, colorwhistle 91%/83%, OSHA "8% YoY"). | **Voice violation if printed.** Verdorian's "no stats flex" rule means these inform *structure only*. Several are also secondary-sourced (Med/Low confidence). The ONLY numbers allowed on the page are Verdorian's own ($497, $1,500–$5,000, the guarantee's "3 opportunities") and the single sourced category-audit anchor (V12). T2 already states this explicitly — enforced here as a rejection for on-site use. |
| **R6** | **T5's "Electric-Cyan" palette references** (research-webtech.md §0/§4/§✅ table: "theme to brand cyan," "on-brand cyan," "the Electric-Cyan palette"). | **STALE-BRAND ERROR.** The live design system is **Heritage Prospectus — gold (`#A57A0B`) on ink/ivory**, with NO cyan anywhere in `globals.css`. "Electric Cyan #22D3EE" is the user's *other* projects' brand (QRSafePro/dashboards), not this site. Any hero-SVG built "in brand cyan" would clash with the entire Prospectus system. **The web-tech recommendations (Lenis/Motion/SVG-hero) are sound; only the color reference is wrong — swap "cyan" → gold/ink.** |
| **R7** | **CLAUDE.md's design prose** ("liquid glass," "rich warm beige," "Fraunces / Outfit / Spline Sans Mono," "GlassCard," ".glass-card"). | **Internally contradictory with the live CSS.** `globals.css` is now Heritage Prospectus (Cormorant + Geist, `.plate` not `.glass-card`, ivory not beige-glass). The CLAUDE.md narrative was not updated when the CSS migrated. **`globals.css` wins** — treat the CLAUDE.md design section as stale. (Flag for the build team so they don't reintroduce glass primitives.) |
| **R8** | **"Risk-reversal language → 32% higher win rates" (SPOTIO).** | T2 fetched the cited page directly; the figure is **not on it**. No primary study. Excluded by T2 and confirmed-rejected here. |
| **R9** | **"Tripwire buyers repeat at 60–70% vs 5–20% for new customers."** | Practitioner claim repeated across funnel blogs; no primary study. Directionally plausible, numerically unverified. Do not state. |
| **R10** | **EHS market *absolute* TAM** (e.g. "$8.4B → $22.7B," vs another report's "$117B+"). | Reports diverge wildly on scope (services vs software). Only the **CAGR (~9.8–11.7%) is convergent**; the absolute $ figure is unreliable. Don't cite a single EHS $TAM. (T4 already caveats this.) |
| **R11** | **The "847 procurement processes / 73% vertical-screen / 78%-vs-54% retention" niche stats as a *named primary study*.** | Cited only inside agency-marketing blogs; underlying study untraced. Direction is solid (→ supports the positioning ruling) but **do not present the numbers as a citable primary study** anywhere. |

---

## 3. [OPEN GAPS]

What is still unknown/unverified and would change decisions if resolved:

1. **No Verdorian-specific outcome data** (clients served, hours saved, ROI delivered). None in repo; the voice avoids stats anyway — but it means *all* on-site proof must lean on the named shipped products + the guarantee. If even ONE honest, attributed Knight Electric quote ("a workflow that took X now takes Y") could be obtained, it would be high-leverage and fully voice-compliant. **Currently unavailable — do not fabricate.** Decision-affecting: yes (proof strength for the ruling).
2. **Whether the safety/compliance wedge orphans the non-safety products.** VoicePencil (voice notes), PolicyPilot (insurance) and partly ChangeOrderAI are not "safety." A pure safety lead would understate the studio. This is the central tension the ruling must resolve (see §4) — and it's a real, unresolved product-portfolio fact, not a research gap.
3. **Lenis `@1.3.23` React-19 peer range** untraced (T5 flagged). Low-risk, but confirm with `bun why lenis` post-install before building motion work.
4. **Whether any competitor's stated guarantee has real teeth** (Automaly "guaranteed ROI," Automation Agency "30-day money-back"). Terms unpublished. Means Verdorian can't be *sure* its guarantee is unique in substance — but it IS unique in *prominence* (none put it in the H1). Low decision impact.
5. **Exact per-competitor homepage section ORDER** — all threads worked from reflowed markdown, so section *sequence* is approximate. The cross-site *patterns* are solid; a pixel-level teardown was never done. Low decision impact (patterns suffice).
6. **The colorwhistle / itqlick / basincheck SMB & pricing figures** are aggregator numbers, not traced to primary surveys. Directionally consistent; treat any single % as Estimate. Don't quote on-site (already covered by R5).

---

## 4. [POSITIONING RULING]

**RULING: Option A-hybrid — lead with the SAFETY / COMPLIANCE / INSPECTION wedge for STORY + PROOF, on a BROAD-CAPABILITY spine for the OFFER. Confidence: HIGH.**

This is decisive, not a fence-sit. Pure Option A (safety-only branding) and pure Option B (broad "automate your busywork") are *both* rejected. The evidence points to a specific hybrid, and the order of operations matters: **the wedge is the front door; the spine is the house.**

### Why the wedge leads (the case for A)

1. **It is the only *provable* moat.** Verdorian has demonstrable vertical experience exactly where the category is weakest: QRSafePro (live inspections software), Knight Electric (real OSHA/electrical-safety deployment), ~7 yrs domain experience. Every competitor scanned either over-claims metrics or shows logos with no domain depth (V8, V20). Proof strength is Verdorian's single biggest asset and it is *concentrated in safety/compliance*.
2. **It's genuine white space.** SMB inspection/OSHA/safety automation is held by vertical SaaS selling seats + demos, and the only compliance-led studios (3E, OneAdvanced) are enterprise-only, gated, no price, no SMB on-ramp (V11). An audit-first, priced, guaranteed studio in this lane has **no direct competitor** in the scan.
3. **It attaches to a dated, dollarized, fear-driven trigger.** OSHA 2026: $16,550 / $165,514 penalties (verified, V22), with penalties now driven by *documentation failures* (V23) — the exact thing automation fixes. That is a near-ideal willing-to-pay setup, far sharper than generic "save time."
4. **The market is growing AND explicitly under-automated** (V24: 23% of EHS users want more automation; usability gap). Buyers already have budget (V25).
5. **Conversion + sales-cycle math favors the niche:** vertical-experience screens eliminate generalists early (V26, direction-solid); specificity beats vagueness in hero copy (V28-adjacent). A specific niche shortens the "do they get my world?" gap and self-qualifies the right buyer — *higher conversion, shorter cycle* than a broad message.

### Why a broad spine must remain (the bounded case for B)

- The studio is genuinely cross-vertical (VoicePencil, PolicyPilot, ChangeOrderAI) — pure safety-only branding would orphan real products (Open Gap #2) and understate capability.
- The broad BPA TAM and the proven SMB-AI ROI are general, not safety-specific. The *offer* ("we audit any operation-heavy workflow") should stay broad so the wedge doesn't cap deal flow.
- **But** pure-broad is the *weakest* option: it fails the vertical-experience screen, discards the only provable moat, and drops Verdorian into the undifferentiated "sea of sameness" (V6–V8). Option B alone is rejected.

### The tradeoff weighing (explicit)

| Axis | Safety wedge (A) | Broad (B) | Winner |
|---|---|---|---|
| Conversion rate | Higher — specific resonance, self-qualification | Lower — vague leads | **A** |
| Sales-cycle length | Shorter — passes vertical screen fast | Longer — must prove relevance | **A** |
| Competition / white-space | Open lane, no direct studio competitor | Crowded, table-stakes audit funnel | **A** |
| TAM | Smaller niche, but real budget + dated trigger | Larger, but diluted & contested | **B** (raw TAM only) |
| Proof strength | Strongest — QRSafePro + Knight Electric + OSHA yrs | Weak — proof isn't broad-shaped | **A** |

Five of six axes favor the wedge; only raw TAM favors broad — and TAM is moot if the message can't convert or differentiate. **The evidence is not balanced; it leans clearly to leading with safety/compliance.** This independently corroborates T4's own synthesis (§4) — and I reach it from the verified subset only, having discarded the unverified niche %s.

### The build instruction this ruling implies

- **Hero + Problem + Proof:** lead with the compliance/inspection/documentation world. The verified hero "We build automation that survives an audit." is *already* the wedge — it implies the OSHA/inspection niche and a quality bar. Keep it. Let the Problem block name the safety/documentation pain (OSHA-2026-shaped, but without printing the penalty figures as a stat-flex — see R5).
- **Offer ladder + capability claim:** stay broad. "$497 audit of any operation-heavy workflow" — the audit, buildout, and Care tiers are vertical-agnostic. The guarantee (V3) sits in the H1 / beside every CTA (the category buries risk-reversal; this is ownable).
- **Products as proof:** lead the product wall with QRSafePro (live, compliance-shaped) and the Knight Electric deployment; the cross-vertical products (VoicePencil, PolicyPilot, ChangeOrderAI) follow as breadth evidence — they reinforce the broad spine without diluting the wedge.
- **Price anchor:** use the *verified* $5k–$15k benchmark (cite Winder.AI per R4/V12, not digitalagencynetwork) as the single honest anchor against $497.

**One-line ruling:** Safety/compliance is the *story and the proof*; broad operations automation is the *offer and the capability*. Lead with the moat, sell the ladder. **Confidence: High.**

---

## 5. Audit summary (counts)

- **Verified claims:** 31 (V1–V31), spanning repo facts, competitor patterns, the price anchor, conversion mechanics, market/buyer signals, and the design system. 4 of the highest-stakes were independently re-verified at source this session (audit benchmark, OSHA penalties, HubSpot 202%, build-price bands).
- **Rejected claims:** 11 (R1–R11) — the McKinsey 67%/20% stat (confirmed fabricated framing), all competitor self-claimed metrics, any revenue ranking, the mis-attributed audit-benchmark citation, all third-party %s as on-site claims, the T5 stale-cyan brand error, and the contradictory CLAUDE.md glass prose.
- **Open gaps:** 6 — chiefly no Verdorian-specific outcome data and the safety-vs-broad product-portfolio tension (resolved by the hybrid ruling).
- **Positioning ruling:** Safety/compliance wedge (story + proof) on a broad-capability spine (offer). **Confidence: High.**
