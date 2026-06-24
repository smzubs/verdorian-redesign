# Art Direction A — "THE STANDING AUDIT"

> *Heritage Prospectus, perfected.* A working studio's named art direction for verdorian.com.
> Authored as a single, buildable point of view — not a menu of options.
> Source of truth: `app/globals.css` (Heritage Prospectus). CLAUDE.md's "liquid glass / Fraunces" prose is stale and ignored throughout.

---

## 0. The concept, in one sentence

**THE STANDING AUDIT** — the site is built like the one document a regulator can't argue with: an engraved, ruled, sealed prospectus that reads as *already-certified evidence*, so that "we build automation that survives an audit" is proven by the page itself before a single word is read.

The feeling: **you have opened a bound inspection record, and everything in it has already passed.** Calm, exact, archival, expensive. Not "a startup with a serif" — an institution that happens to be small. The page should feel *stamped*, not *styled*.

Why this name and not "Heritage Prospectus": the prospectus is the *medium*; the **standing audit** is the *argument*. A standing audit is a permanent, always-current record of compliance — which is exactly Verdorian's wedge (OSHA documentation that survives inspection) and exactly the emotional promise (work that holds up when someone with authority looks hard). The name forces every design decision to answer one question: *does this look like it would survive scrutiny?* That question kills the AI-template instinct faster than any rule.

---

## 1. The single risk I am taking (and why it's justified)

**The hero does not show a hero image, a gradient, or a dashboard floating in space. It shows a document being stamped PASS — once — on page load, and the stamp stays.**

The signature motion is a wet-seal *pressing* onto an inspection record, ink settling into paper. That is the whole hero event. No parallax device cluster, no shimmer loop running forever, no orbiting UI cards. One press, then stillness.

This is a risk because the entire AI-automation category (and the safe SaaS playbook) reaches for a product-in-action device composition or an ambient animated field. Going *quieter* than the category — a single decisive mechanical action and then archival calm — is the bet. It's justified because (a) the research names "centered hero + gradient blob + two buttons" and "kinetic WebGL spectacle" as the two clichés to avoid, and the prospectus register's expensive tell is that *it looks printed*; a print artifact doesn't loop — it is pressed once and then it is permanent; and (b) the stamp **is** the thesis ("survives an audit") rendered as motion, so the boldness is spent on the one element that carries the argument, exactly per the restraint principle. Everything else on the page stays disciplined and still so this one moment lands.

---

## 2. Type system

The brief invites a *sharper high-contrast Didone/transitional upgrade with rationale* over keeping Cormorant Garamond. **I take that invitation — partially — and here is the exact ruling, because it's the highest-leverage decision in the whole direction.**

### 2.1 Display — keep Cormorant Garamond, but re-cast its *job* (do not swap the whole identity)

Cormorant Garamond stays as the display family. It is already loaded (`--font-cormorant`), already woven through `.chapter-num`, `.pullquote`, `.engraved`, `.mock-title`, `.plate-caption`. Ripping it out is a reinvention the research explicitly says this system does *not* need. Cormorant is a genuine high-contrast display serif (Thalmann/Catharsis) built for 44px+ luxury setting — its hairline-to-stem contrast already does the "engraved bank-note" work.

**What changes is how we use it:** today it's "a serif headline." The upgrade is to drive it toward its *thin, large, italic, tightly-tracked* register — the Stripe weight-300 move translated into a Didone-adjacent serif. Hero masthead in **Cormorant Light / Medium (300–500)**, never bold-by-default; large; tracked tight (`-0.018em`, the existing `--track-hero`); generous leading so the thin strokes have air. That single shift — *thin and big, not heavy and medium* — is what moves it from "templated warm-cream serif" (AI default #1) into "engraved masthead."

### 2.2 The one sharpening upgrade — an **optional masthead-only Didone**, named and bounded

To answer the brief's Didone question concretely: if a single sharper note is wanted, introduce **one** high-contrast face for the **hero masthead line and section numerals only** — never body, never sub-heads — and keep Cormorant for all other display. Named candidate, self-hostable, in priority order:

1. **GT Sectra Display** (Grilli Type) — *first choice.* A "scalpel-meets-quill" transitional/Didone hybrid with calligraphic sharpness; reads as institutional and contemporary at once. Self-hostable (licensed). This is the most defensible single upgrade: it sharpens the engraving without making the page feel like a fashion-magazine Didone (which would drift toward AI-default #1's high-contrast-serif cliché).
2. **Canela Deck** (Commercial Type) — warmer Didone-with-wedge-serifs; slightly more "luxury editorial," slightly less "audit." Second choice.
3. **PP Editorial New** (Pangram Pangram) — budget-friendly self-hostable Didone with strong contrast; viable if licensing the above is out of scope.

**Ruling:** ship **Cormorant-only** for v1 (zero new licensing, zero new load, identity already coherent). Hold **GT Sectra Display** as the *named* masthead upgrade for v1.1 if the hero needs one more degree of sharpness after live review. Either way, the rule is identical: **the sharp Didone is a scalpel, used on one line; Cormorant carries the rest.** Two display faces maximum, and the second one only ever touches the masthead + numerals.

### 2.3 Body — keep Geist, with a deliberate utility split

**Geist Sans** stays as body (`--font-geist`) — a clean Swiss-grotesque, the exact "sans-for-body under serif-for-authority" pairing the research validates (Anthropic's Styrene+Tiempos logic; here Cormorant+Geist). Do not replace it; it is correct and bespoke-feeling.

**The one refinement:** today `--font-mono` aliases to Geist, so "mono" isn't actually mono. Introduce **Geist Mono** as a *true* utility face — used **only** for figures, IDs, dates, audit codes, plate numbers, and the price `$497` — never for prose. This is Vercel's engineering-rigor signal, kept in its lane. It gives the prospectus its "registry stamp" precision (audit reference numbers, dated entries) without diluting the heritage tone. If a second font load is unwanted, the fallback is to lean entirely on tracked small-caps Geist (`.eyebrow`, `.label-quiet`) as the precision voice — already in the CSS and already excellent. **Preferred: ship Geist Mono for numerals/IDs only.**

### 2.4 The roles, named

| Role | Face | Weight | Where |
|---|---|---|---|
| Masthead / hero | Cormorant Garamond *(opt. GT Sectra Display)* | 300–500, italic accents | Hero H1, the one big editorial line per section |
| Display / headings | Cormorant Garamond | 500–600 | H2/H3, `.pullquote`, `.chapter-num`, `.mock-title` |
| Body | Geist Sans | 400 (500 emphasis) | All prose, bullets, UI |
| Labels / eyebrows | Geist Sans, tracked caps | 600 | `.eyebrow`, `.label-quiet`, `.stamp`, button text |
| Figures / IDs / data | **Geist Mono** *(new)* | 500, tabular | `$497`, "No. 01", plate numbers, dates, audit codes, `.mock-num` |

**Fallback stacks (exact):**
- Display: `"Cormorant Garamond", "GT Sectra Display", Georgia, "Times New Roman", serif`
- Body: `"Geist", "Geist Sans", system-ui, -apple-system, "Segoe UI", sans-serif`
- Mono: `"Geist Mono", ui-monospace, "SF Mono", "Cascadia Code", monospace`

### 2.5 Type scale (hero → label) — sharpen the existing clamps

Keep the existing clamp tokens; the upgrade is **using the top of the range with more leading air**, and pushing the label end smaller and more tracked.

| Token | Size (clamp) | Tracking | Leading | Character |
|---|---|---|---|---|
| Hero masthead | `clamp(48px, 7.2vw, 108px)` *(nudge `--t-hero` up)* | `-0.018em` | **1.04** *(more air than today)* | thin, engraved, tracked tight, italic accent word |
| H2 (section) | `clamp(34px, 5vw, 64px)` | `-0.012em` | 1.08 | confident, serif, never centered |
| H3 | `clamp(20px, 2.4vw, 28px)` | `-0.005em` | 1.2 | quiet serif |
| Pull-quote | `clamp(26px, 3.4vw, 44px)` italic | `-0.012em` | 1.24 | conviction, gold quote-mark, `max-width: 19ch` |
| Body-lg | 18px | 0 | 1.6 | intros, `~62ch` measure |
| Body | 16px | 0 | 1.6 | default, `~64ch` measure |
| Small | 13px | 0.01em | 1.5 | captions |
| Label / eyebrow | 11px caps | **0.3em** | — | precision, gold, tracked wide |
| Mono figure | 13–15px | 0.02em | — | tabular numerals, IDs |

**The character note that matters most:** the masthead must be *thin and tracked and airy*, not *heavy and tight and cramped*. That is the entire difference between "engraved prospectus" and "AI warm-cream-serif default." Narrow the body measure to ~62–64ch (currently the system runs wide). Air is the upgrade.

---

## 3. Color & contrast

Evolve the existing tokens — do not invent a new palette. The job here is **discipline and one new contained event**, not new hues.

### 3.1 The tokens (kept, with exact hex)

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F7F3EA` | primary ivory ground |
| `--paper-deep` | `#F1EADB` | alternating section bands, mock chrome |
| `--paper-bright` | `#FCFAF4` | plate fills, elevated surfaces |
| `--ink` | `#1A1714` | text + dark bands |
| `--ink-soft` | `#5C544C` | body |
| `--ink-faint` | `#8A8076` | meta / captions |
| `--gold` | `#A57A0B` | **hairline / seal / underline ONLY** |
| `--gold-bright` | `#C49A0A` | shimmer endpoint, hover hairline |
| `--green-pass` | `#2F5D3A` | PASS stamp only |
| `--red-fail` | `#8C3A2E` | FAIL/flag accents only |

### 3.2 The non-negotiable gold rule

**Gold is never a fill. Ever.** It appears only as: a 1px hairline, the wet-seal stamp outline, a link underline, an engraved (`-webkit-text-stroke`) numeral, or a single radial "crown" glow behind the masthead and atop dark bands. The moment gold becomes a button fill or a heading fill, the prospectus becomes a luxury-template — that's the line that keeps this out of AI-default #1. Buttons are **ink**, not gold (the existing `.btn-ink` is correct).

### 3.3 How this avoids gradient soup

The page is **~92% achromatic** — ivory and ink. Color is a *contained event*, Stripe's logic applied in gold-on-ink:
- The **only** saturated-glow zone is the dark indictment band (§5.2) and the soft gold crown behind the masthead. One spectacle zone, calm everywhere else.
- No multi-stop gradients on text (the one exception: `.gold-shimmer` on a single hero accent word, which freezes to flat gold under reduced-motion — already handled).
- No gradient buttons, no gradient backgrounds behind prose, no purple/teal/cyan *anywhere* (the stale-cyan error from the research is explicitly excluded — this palette has no cyan token and never will).

### 3.4 Dark-ink-band usage (the contrast rhythm)

The `.band-dark` (ink `#1A1714`, gold hairline top+bottom, gold crown glow) is the page's **structural punctuation** — used **exactly twice**:
1. **The cost-of-inaction band** (Problem) — the indictment, where the dollar weight lands.
2. **The Offer band** — the $497 + guarantee, where the decision lands.

Two ink bands, two moments of gravity, on a field of ivory calm. Using it more would dilute it; using it less would make the page tonally flat. Inside dark bands: `.plate-dark` (3% white fill, gold-tinted frame), light ghost buttons, mono numerals in gold. The contrast jump from ivory → ink is itself a premium tell — it reads like turning to the page that carries the verdict.

---

## 4. Layout principles

### 4.1 The grid

A **12-column ruled grid**, max content width ~1200px, generous gutters. But the governing device is not the column — it's the **rule** (the 1px hairline). The page is organized by horizontal hairlines the way a ledger is organized by ruled lines. `.rule`, `.rule-strong`, `.gold-hairline`, and the `.chapter` top-borders are the skeleton. Every section is a ruled entry in a bound document.

### 4.2 Where symmetry breaks (and where it doesn't)

**Break it deliberately, never randomly:**
- **Hero:** asymmetric. Masthead + offer copy on a ~7-col left field; the sealed inspection record (the stamped `.mock` document) on a ~5-col right field, **bleeding slightly off the top/right margin** so it feels like a real page being looked at, not a centered card. Kill the perfectly-centered hero (AI-default #1) absolutely.
- **Products (`.chapter` / `.chapter-rev`):** alternating text∥figure rows, the system's existing asymmetry engine. Row 1 text-left/figure-right, row 2 reversed, ruled top-border between each. Leave **intentional empty cells** — a chapter row may have a wide air column where a lesser design would cram a third feature.
- **Services (3 tiers):** the riskiest spot for the "three equal cards" AI tell. **Defuse it:** the three tiers are *not* three identical-height symmetric cards. They are a **ruled ascending ledger** — three rows (or a stepped 3-col) where the middle/$497 audit tier is dimensionally emphasized (the entry offer is the hero of the ladder), and each tier is a `.plate` with a *different vertical weight*, separated by hairlines, numbered "No. 01 / 02 / 03" because the offer genuinely *is* a sequence (audit → buildout → care). Numbering here is earned, not decorative.

**Where symmetry holds:** within a single `.plate`, alignment is strict and baseline-true — figure tables baseline-aligned, tabular numerals right-aligned. Order *inside* the artifact; asymmetry *between* artifacts.

### 4.3 Whitespace rhythm — the single biggest upgrade lever

Per the research, air is the "expensive" material. Concretely:
- **Vertical section rhythm:** push section padding to `clamp(96px, 12vw, 160px)` top/bottom on desktop (today tops out ~96px) — wider gaps between ruled entries. Mobile guards already clamp to 80/64px; keep those.
- **Measure:** narrow prose to ~62–64ch. Never full-bleed body text.
- **Intentional emptiness:** the `.chapter` grid and Services ledger should have visible empty columns/cells. Confidence-through-emptiness (Resend/Linear). A prospectus has margins you could write notes in.

### 4.4 The `.plate` and `.chapter` treatment

- **`.plate`** stays the framed double-border card (1px outer `--rule-strong`, 6px-inset 1px inner `--rule`), `--r-md` (3px) near-square radius, soft prospectus shadow (`0 24px 64px -32px`), no glass. On hover: gold-tinted border + deeper shadow, **no lift wobble** — a plate doesn't bounce, it deepens. The double-frame is the engraving; protect it. `.mock` plates drop the inner frame (the table chrome is the structure).
- **`.chapter`** stays the editorial 1fr/1.04fr text∥figure grid with ruled top-borders and the engraved gold-stroke `.chapter-num`. This is the proof spine.
- **Radii everywhere stay 2–4px** (near-square). Rounded-2xl would instantly read SaaS-template; the near-square corner is load-bearing heritage.

---

## 5. Motion language

**Motion personality: ink rising onto paper. Never bounce, never float-forever.** One easing token governs everything: `--ease-prospectus: cubic-bezier(0.22, 1, 0.36, 1)` (already the single ease in the CSS — a studio hallmark, keep it the *only* ease).

### 5.1 The vocabulary (small, exact)

- **Reveal = ink-rise:** scroll-triggered, short travel **≤16px** fade-up + opacity. Things *settle onto* the page like ink absorbing, they don't *fly in*. 220–340ms.
- **Gold-underline draw:** `.gold-link` underline scales from left on hover (already built). The one hover delight.
- **Seal press (the signature):** see §5.3.
- **Shine sweep:** `.btn-ink` has a single diagonal light sweep on hover (already built). One pass, not a loop.
- **Plate deepen:** hover deepens shadow + gold-tints border. No transform lift.
- **Masthead accent shimmer:** `.gold-shimmer` on *one* hero word, slow (7s), freezes to flat gold under reduced motion.

That's the entire motion lexicon. Nothing else animates. The discipline *is* the premium signal.

### 5.2 The dark-band entrances

When a `.band-dark` scrolls into view, the gold crown glow rises in slowly (opacity, ~600ms) as the ink ground settles — like a page darkening under a verdict. Quiet, weighty, once.

### 5.3 The hero animation concept — "THE PRESS" (gold/ink, never cyan)

The hero's right field holds a single inspection-record `.mock` (a ruled audit table — line items, a column of small PASS marks, a footer). On page load, orchestrated once:

1. **0.0–0.4s** — the record's ruled lines draw in (hairlines scale from left, ink-rise), table rows fade up in a tight 40ms stagger. The document *assembles* like it's being printed.
2. **0.4–0.7s** — a **wet-seal stamp** (`.stamp` styling — 1.5px outline, `rotate(-7deg)`, radial mask for ink-bleed, gold or green-pass) scales down from ~1.15 → 1.0 with a *single* firm settle on `--ease-prospectus` (no overshoot bounce), landing onto the record. A faint ink-spread (opacity ring) blooms once on impact.
3. **0.7s →** — **stillness.** The stamp stays. PASS is now permanent. The masthead's one gold accent word begins its slow 7s shimmer (the only continuous motion on the page, and it's barely perceptible).

The whole sequence is ~700ms, then archival calm. It says *"we build automation that survives an audit"* without a word — the document was inspected and it passed, on arrival. Built as **hand-orchestrated SVG + Motion** (per the verified web-tech ruling: ~0 added KB, no Lottie/Rive, no 3D). Color is strictly ink + gold + green-pass.

**Reduced-motion stance (absolute):** the existing `@media (prefers-reduced-motion: reduce)` freeze is honored and extended. Under reduced motion: the record renders **already-assembled and already-stamped** (the end state, statically), the gold shimmer becomes flat gold, all sweeps/lifts/draws disabled, all `animation`/`transition` durations → 0.01ms. No information and no thesis is lost — the stamped record is simply *present* rather than *pressed*. A prospectus is calm by default; reduced-motion users get the most prospectus-true version of all.

---

## 6. Section-level intent

Page order (locked by the conversion restructure): **Nav → Hero → Proof bar → Problem (dark band) → How we build → Services → Products → Offer (dark band) → Pull-quote → FAQ → About → Contact → Footer.**

### Nav
Hairline-bottom, ivory, near-invisible. Wordmark left in Cormorant (small, confident); right-side: one ghost-text link set + a single ink CTA ("Book the audit"). No glass, no blur-bar drama. The nav is a *running header* on a bound document, not a floating app chrome.

### Hero — *the thesis, pressed*
Asymmetric (§4.2). Left: eyebrow ("AI AUTOMATION STUDIO", tracked gold caps) → masthead **"We build automation that survives an audit."** (Cormorant thin/large, one gold-shimmer accent word — likely *"survives"* or *"audit"*) → one-line subhead in Geist → ink CTA "Book the audit" + ghost "See the proof" → the guarantee line set quiet beneath in italic Cormorant. Right: **THE PRESS** (§5.3) — the sealed inspection record. The hero *is* an audit that passed.

### Problem / cost-of-inaction — *the indictment* (DARK BAND #1)
`.band-dark`, ink ground, gold crown. The register shifts from calm to grave. Editorial: a pull-quote-scale line naming the documentation-failure pain (OSHA-2026-shaped — incomplete logs, outdated training, missing written programs) **without printing penalty figures as a stat-flex** (voice rule). The dollar weight is *implied* by gravity, not shouted by a number. One `.plate-dark` may hold a single dated, mono-set line-item ("Serious violation — per item") rendered like a ledger entry, not a marketing stat. Quiet, heavy, dark. This is the only place fear lives.

### How we build — *the mechanism*
Ivory, ruled. Three or four principles as ruled entries (not equal cards) — the lead one is the "ai as force multiplier" idea (frontier ai agents on the boilerplate, our domain depth on the reliability). Geist body, Cormorant sub-heads, hairline dividers between principles. Numbered only if it's a true sequence; otherwise ruled list. Calm and confident — this is *how the audit-proof work gets made.*

### Services — *the ascending ledger* (3 tiers)
The de-clichéd trio (§4.2): **No. 01 Audit ($497)** dimensionally emphasized as the entry offer, **No. 02 Buildout ($1,500–$5,000)**, **No. 03 Ongoing Care** — three ruled `.plate` entries, the price in **Geist Mono**, "WHAT YOU GET" bullets with the gold `◆` markers, an ink CTA per tier. The middle/entry tier carries more vertical weight and a `LIVE`/featured `.stamp`. **Exact service copy preserved** per the non-negotiable. The offer ladder *looks like a ledger of escalating commitment* because that's what it is.

### Products — *the proof spine* (`.chapter` grid)
Alternating text∥figure chapters, ruled tops, engraved `.chapter-num`. **Lead with QRSafePro** (live, compliance-shaped) and the **Knight Electric / OSHA** deployment — the wedge proof — rendered as `.mock` artifacts (real ruled data tables, `PASS`/`LIVE` stamps, plate captions "Plate I. —"). Then ChangeOrderAI, PolicyPilot, VoicePencil as breadth evidence (the broad spine). **Proof is rendered as fine print and data tables, never as illustration or robot art.** A ruled inspection table reads more expensive than any render. Each product figure is a small audit that passed.

### Offer band — *the verdict* (DARK BAND #2)
`.band-dark`, the page's second and final moment of gravity. Centered-weight here is *allowed* because it's the verdict page. **$497** large in Geist Mono, the **guarantee verbatim** — *"We find at least 3 automation opportunities in your operation, or the audit's free."* — set in confident Cormorant beside it, a single light-ghost CTA "Book the audit". Optionally one quiet line anchoring $497 against the category ("a full automation audit usually runs into the thousands"). Risk-reversal up front and unmissable — the category buries it; we seal it.

### Pull-quote
A single ivory breath between the offer and the FAQ. `.pullquote` — big italic Cormorant, `max-width: 19ch`, a gold quote-mark. One line of conviction (the honesty-as-differentiator voice). Pure typography, no ornament. The page exhales.

### FAQ — *the appendix*
Accessible disclosure (aria-expanded/controls, visible focus, 48px taps — already built). Styled as a ruled appendix: questions in Geist medium, hairline dividers, gold underline on the open item. Quiet, exact, scannable. Answers in the "we" voice, plain verbs, no filler — the register of a document that has nothing to hide.

### About — *the authority*
Ivory, text-forward, narrow measure (~60ch). Cormorant lead line, Geist body, the "we" voice (confident studio, never solo-I, no location/stats flex). One `.plate` may hold a quiet credential ledger (years in domain, the named deployment) set in mono — facts as ledger entries, not a brag bar. Reads like the signatory page of the prospectus.

### Contact — *the action*
Short form (≤3 fields — the $497 price self-qualifies, so the form stays small), ink CTA, hairline frame, no glass. Empty/error states in the interface voice (errors don't apologize, they say what to do). The booking is the last ruled line in the document.

### Footer
Hairline-top, ivory, quiet. Wordmark, the "ai" lowercase convention, a final small gold hairline. The back cover of the bound prospectus — closed, sealed, done.

---

## 7. References channeled (and the one thing taken from each)

1. **Anthropic (anthropic.com)** — *the warm paper ground + serif-for-authority.* Taken: the proof that an *ai company reading as a heritage institution reads MORE premium* — Cormorant-on-ivory is our Styrene+Tiempos-on-clay. The single most relevant precedent; it licenses the entire register.
2. **Stripe (stripe.com)** — *spectacle confined to one zone.* Taken: color/motion as a *contained event* — our two dark bands + the single hero press are the gold-on-ink translation of Stripe's one-gradient-band discipline. Everything else stays calm.
3. **Vercel (vercel.com)** — *hairline-bordered modular grid + mono as a precision signal.* Taken: Geist Mono used deliberately for figures/IDs/price (not prose), and the hairline 1px rule as the page's organizing skeleton over drop-shadow cards.

*(Linear's short-travel scroll reveals and intentional empty grid cells inform §4.3/§5.1 but the three above are the load-bearing references.)*

---

## 8. Why this wins — and the single biggest risk

### Why it wins
The entire AI-automation category looks the same: dark SaaS, purple/teal gradients, glowing-brain hero art, three equal cards, an audit funnel everyone now runs. **THE STANDING AUDIT occupies a register almost no competitor can:** print heritage — engraved serif, ruled ledger grid, wet-seal proof. Print discipline is the strongest "real institution / real money" signal on the web *because a template can't fake the restraint of a high-contrast serif on a ruled grid with one metallic seal.* And uniquely here, the aesthetic **is** the argument: a page that looks like a certified inspection record *proves* "we build automation that survives an audit" before the copy speaks. Form and thesis are the same gesture. The system already encodes ~10 of 14 premium tells and structurally blocks ~13 of 16 AI tells — this direction spends its effort on the four upgrades that matter (display contrast/scale, whitespace, contained color, ink-not-bounce motion) and on the one signature (the press) that makes it unforgettable.

### The single biggest risk
**Reading conservative-to-the-point-of-cold — a beautiful document nobody is moved to *act* on.** The prospectus register's discipline can tip into austerity; an audit door still has to *convert a nervous SMB owner into booking a call.* The mitigation is deliberate and built into the direction: the two dark bands inject the only two moments of emotional heat (the indictment's gravity, the verdict's relief), the guarantee sits unmissable in the H1 and the offer band, the CTA is one repeated warm imperative ("Book the audit") not a cold "Submit," and the hero's *PASS* press delivers a small hit of resolution-and-safety in the first 700ms. Calm is the brand; cold is the failure mode — and the line between them is held by warmth in the *copy and the two heat-bands*, never by adding decoration. If live testing shows it reading too austere, the lever is **GT Sectra Display on the masthead + slightly warmer body copy**, *not* more color or more motion. We never solve coldness with gold fills or animation; we solve it with sharper type and braver words.

---

*Direction authored as a complete, buildable point of view. Build the revised plan exactly; derive every color and type decision from §2–§5. The brief's words win where they pin the direction; freedom was spent on the press, the ledger, and the air — not on the warm-cream-serif default.*
