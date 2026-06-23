# Verdorian — Market & Conversion Research Notes

_Researcher: ai-automation-researcher. Date: 2026-06-23. Geography: USA._
_All external claims cited with source URLs. Inputs labeled Fact / Estimate / Assumption. Recommendations carry confidence levels._

---

## 0. Intake (confirmed from repo)

Source: `/Users/smzobayer/verdorian-redesign/CLAUDE.md`, `DESIGN_DECISIONS.md`, `lib/utils.ts`.

- **Company:** Verdorian Technologies LLC — verdorian.com. AI-automation studio. **Fact.**
- **Voice:** "we" (studio/team), professional, no location/stats flex. Lowercase "ai" in body/headings. No specific LLM/model names — use "frontier ai agents" / "latest generative technologies" / "Frontier Models". **Fact.**
- **ICP (broad):** businesses of all sizes with repetitive/manual workflows — small teams, manufacturing, corporate ops, construction. Strong gravity toward **inspections, compliance, documentation** workflows (evidenced by the real products). **Fact.**
- **Services (3 tiers, exact copy preserved):**
  - Audit — **$497** "ai Automation Audit": review manual workflows, find highest-ROI automation, deliver prioritized plan + effort estimates.
  - Buildout — **$1,500–$5,000** "Custom Buildout": full implementation, training, docs, production code.
  - Care — **Monthly** "Ongoing Care Plan": monitor, improve, expand. **Fact.**
- **Primary conversion goal:** book a call. **Fact.**
- **Proof = shipped products:** QRSafePro (live), ChangeOrderAI (in dev), VoicePencil (coming soon), PolicyPilot (in dev). **Fact.**
- **Current section order on the live page:** Hero → Services → HowIBuild → Products → About → Contact → Footer. (Repo CLAUDE.md line 49.) Note: the brief's "repo's current order" line in the original task prompt (Hero → ProofBar → Problem → HowIBuild → Services → Products → PullQuote → About → Contact → Footer) describes an *earlier/aspirational* order; the assembler now lists Services before HowIBuild and shows no standalone Problem/PullQuote/ProofBar sections in `page.tsx`. **Fact (per current repo).**

---

## 1. Competitor scan

Private agencies do **not** publish revenue. There is **no verifiable "revenue ranking"** of AI-automation agencies — anyone presenting one is inventing it. Below is what the public pages and 2026 industry guides actually state. Where a figure comes from a guide *about* the category rather than a named agency's own page, it is labeled **Estimate (category benchmark)**.

| Agency / model | Services offered | Pricing (stated) | Primary CTA | ICP | Source |
|---|---|---|---|---|---|
| **SuperDupr** | AI voice agents, workflow automation, custom AI integrations, web design, SEO | $2,500–$25,000 project; $300–$800/mo support | "Contact for a free assessment of your automation opportunities" | Service businesses: home services, professional services, healthcare, real estate | [superdupr.com](https://superdupr.com/blog/best-ai-automation-agencies) |
| **NextAutomation** | Deal-lifecycle automation for CRE; orchestration, document intelligence, CRM/data-room integration, review queues, dashboards | Not disclosed | "Book a strategy call" | GPs, sponsors, developers, funds, lean CRE teams wanting *production* workflows | [nextautomation.us](https://www.nextautomation.us/blog/best-ai-automation-agencies) |
| **Thoughtful Automation** | Multi-department workflow automation, process design | ~$50K min, 6-month engagements | Not stated | Mid-market/enterprise ($10M–$500M rev) | [superdupr.com](https://superdupr.com/blog/best-ai-automation-agencies) |
| **Latenode** | Low-code automation platform + implementation, AI model integration | $2,000–$15,000/project; platform from $17/mo | Not stated | Early-stage startups, budget-conscious | [superdupr.com](https://superdupr.com/blog/best-ai-automation-agencies) |
| **JADA Squad** | AI automation consulting; audit-based approach | Free 30-min strategy call (offer) | "Book a free 30-min strategy call" | SMB → mid-market | [jadasquad.com](https://www.jadasquad.com/blog/ai-automation-agencies) |
| **AI Automation Services Agency** | Agentic AI & workflow automation, enterprise delivery | Not disclosed; "15-min technical scoping call" | "Book a 15-min technical scoping call" | Enterprise (compliance/risk-sensitive) | [aiautomationservicesagency.com](https://aiautomationservicesagency.com/) |
| **Goji Labs** | AI assistants, data infrastructure, conversational interfaces | Not disclosed | Contact / consultation | Product teams; 500+ products launched (their claim) | [designrush.com](https://www.designrush.com/agency/ai-companies/ai-automation-agency) |
| **Helpware** | Agentic AI, voice AI, chatbots, AI quality monitoring in CX | Not disclosed | Contact | CX-heavy orgs (since 2015) | [designrush.com](https://www.designrush.com/agency/ai-companies/ai-automation-agency) |
| **"AAA" freelancer model** | Zapier/Make integrations, single workflows | $2,000–$10,000/project | Varies | SMB, quality inconsistent | [superdupr.com](https://superdupr.com/blog/best-ai-automation-agencies) |

### Category pricing benchmarks (Estimate — guide-level, not a single named agency)
- Discovery/audit: **$5,000–$15,000**, 2–4 weeks. [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/)
- Single-workflow build: **$3,000–$15,000**. Multi-agent systems: **$15,000–$100,000+**. [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/)
- Managed retainer: **$500–$5,000+/mo** (SMB $1,000–$3,500; mid-market $4,000–$10,000; enterprise $8,000–$25,000). [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/)
- Pricing dropped ~**35% between 2024 and 2026** as open models/platform competition expanded. [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/)

**Verdorian's price position vs. the field (Fact, comparison):** Verdorian's **$497 audit** sits dramatically *below* the $5K–$15K category-audit benchmark, and its **$1,500–$5,000 buildout** is at/below the low end of single-workflow pricing. This is a real strategic asset: a near-frictionless, qualified entry point. The brief leans into this as a **trial-stakes "find the highest-ROI automation for $497"** wedge rather than hiding price.

---

## 2. Homepage / page-structure patterns (from real agency pages + 2026 guides)

Recurring sections observed across the scanned pages and category guides:
1. Hero with an outcome promise + single primary CTA (book a call / strategy call). **Fact.**
2. Problem statement, often quantified (e.g. "88% use AI, 94% see no value"). [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/) **Fact (pattern).**
3. Use-case / "what we automate" navigation (by department or vertical). **Fact (pattern).**
4. Service-tier explanation with **pricing transparency** to reduce sales friction. [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/) **Fact (pattern).**
5. Proof — case studies / use-case agents / documented ROI. **Fact (pattern).**
6. FAQ that pre-handles objections before the sales contact. **Fact (pattern).**
7. Multiple repeated CTAs at different scroll depths. **Fact (pattern).**

Common CTA wording in the wild: "Book a strategy call," "Book a free consultation," "Book a 30-minute strategy call," "Book a 15-min technical scoping call." [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/), [jadasquad.com](https://www.jadasquad.com/blog/ai-automation-agencies)

**Differentiator emphasized across guides:** "the build is only half the engagement" — managed operations / ongoing care is positioned as what separates an operational *partner* from an implementation *vendor*. [digitalagencynetwork.com](https://digitalagencynetwork.com/ai-agency-pricing/) Verdorian already has this as Tier 3 (Care) — the brief frames it accordingly.

---

## 3. Demand signals (what's most in demand)

- **Top automated functions:** operations **37%**, onboarding **16%**, finance/accounting/legal **14%**, compliance **12%**, document management **8%**. [kissflow.com](https://kissflow.com/workflow/workflow-automation-statistics-trends/) **Fact (report).** → Verdorian's documentation + compliance + inspection focus maps directly onto the #1 (operations) and the compliance/doc-management bands.
- **Leading industries adopting BPA:** financial services, manufacturing, healthcare, retail/eComm. [2am.tech](https://www.2am.tech/blog/business-process-automation-statistics-facts-trends) **Fact (report).** → Manufacturing and finance/insurance overlap with Verdorian's ICP and PolicyPilot.
- **Market:** global BPA market ~**$15.81B**, projected to roughly double by 2030; hyperautomation projected **$31.95B by 2029** (CAGR 19.8%). [2am.tech](https://www.2am.tech/blog/business-process-automation-statistics-facts-trends) **Fact (report).**
- **Adoption intent:** ~**82%** of organizations plan to introduce AI agents within 1–3 years; ~**60%** already use automation in some workflows. [2am.tech](https://www.2am.tech/blog/business-process-automation-statistics-facts-trends) **Fact (report).**
- **Common SMB use cases:** lead intake/qualification, CRM updates, follow-up emails, scheduling, ticket triage, inbox triage, approval workflows, document handling, basic forecasting. [lindy.ai](https://www.lindy.ai/blog/best-ai-agents-small-business) **Fact (article, qualitative — no quantified ROI given there).**
- **Contested stat — DO NOT use on-site without re-verification:** a "McKinsey 2025: 67% of small businesses using AI automation saw 20%+ revenue growth" claim surfaced via a secondary blog ([ai-crescent.com](https://www.ai-crescent.com/blog/ai-automation-for-small-business)). Not traced to a primary McKinsey publication in this pass. **Could not verify — flag.**

---

## 4. Could-not-verify list (honest gaps)

1. **Agency revenue / any "revenue ranking."** Private; not public. No ranking exists — do not invent one. **Hard rule.**
2. **Named competitors' exact homepage section order.** The listicle/guide pages summarize patterns; I did not deep-crawl each agency's live homepage section-by-section. Section patterns above are aggregate, not a per-competitor teardown. **Estimate (pattern-level).**
3. **The "McKinsey 67% / 20% revenue growth" stat** — secondary source only; not traced to primary. **Could not verify.**
4. **Verdorian's own performance metrics** (client count, hours saved, ROI delivered). None in repo; per voice rules the site avoids stats/flex anyway. **No data — and intentionally not claimed.**
5. **Whether any competitor publicly guarantees outcomes.** Some claim "guarantee delivery" (AI Automation Services Agency) but terms not public. **Could not verify specifics.**

---

## 5. Sources

- https://digitalagencynetwork.com/ai-agency-pricing/
- https://taskip.net/ai-automation-agency-pricing/
- https://www.jadasquad.com/blog/ai-automation-agencies
- https://superdupr.com/blog/best-ai-automation-agencies
- https://www.nextautomation.us/blog/best-ai-automation-agencies
- https://www.designrush.com/agency/ai-companies/ai-automation-agency
- https://www.lindy.ai/blog/best-ai-agents-small-business
- https://kissflow.com/workflow/workflow-automation-statistics-trends/
- https://www.2am.tech/blog/business-process-automation-statistics-facts-trends
- https://www.ai-crescent.com/blog/ai-automation-for-small-business (secondary; McKinsey stat unverified)
</content>
</invoke>
