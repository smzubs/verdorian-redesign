# Art Direction C — "THE STANDING RECORD"
### A Verdorian compliance dossier that audits itself, live, in front of the reader.

**Lane:** the narrative / cinematic one. **Channels:** investigative-editorial · premium fintech annual report · Anthropic serif authority.
**Studio name for the direction:** *The Standing Record* — an audit report is only worth anything if it *stands* (holds up to scrutiny) and is *standing* (kept current, alive). The whole site is one bound document that is being inspected as you scroll, and it keeps passing.

**Authored against the truth-of-record:** `app/globals.css` (Heritage Prospectus tokens + primitives) is the substrate. This is NOT a reskin — it is the disciplined elevation the research (`research-design.md` §4) explicitly asked for: scale, air, contained color, quiet motion. Positioning is locked by `verified-findings.md` §4 (safety/compliance wedge for story+proof, broad spine for the offer). Everything below maps onto existing primitives — `.plate`, `.stamp`, `.band-dark`, `.mock*`, `.chapter`, `.eyebrow`, `.engraved`, `.gold-link`, `--ease-prospectus`. Where I add, I add one token, never a parallel system.

---

## 0. THE ONE-SENTENCE FEELING

> You opened a sealed compliance dossier from a firm that has clearly done this before, and as you read, each page gets inspected and stamped **PASS** in front of you — calm, engraved, expensive, and quietly daring you to find the thing that fails.

The risk I am spending the whole boldness budget on: **the document is alive.** Not animated-for-delight — *adjudicated.* A real audit report is static and dead. Ours performs the single act competitors only claim: it survives an audit, on camera, once. That is the entire concept and every other decision serves it or gets cut.

---

## 1. TYPE SYSTEM — "engraved, not just serif"

The research is blunt: Cormorant Garamond is a *display* face — aristocratic at 44px+, weak below 20px — and pairing it with a clean sans for body is already correct (`research-design.md` §1.7, premium tell #2 = Anthropic's exact Styrene+Tiempos play). I keep the structure and push it to where it reads *engraved bank-note*, not "a serif headline."

### 1.1 Display — **Cormorant Garamond** (keep, but re-register)
- **Justification over a "sharper alternative":** I considered swapping to a crisper high-contrast display (Fraunces optical, GT Sectra, Canela). I am *rejecting the swap.* Cormorant's extreme hairline-to-stem contrast is the literal "engraved" quality a dossier needs, it is already wired (`--font-cormorant`), self-hostable, and free — and a swap would be reinvention where the brief asked for elevation. The fix is not a new face; it is **using Cormorant the way a foundry intends a display face to be used.** That is the higher-craft move.
- **Re-register it three ways the current build under-uses:**
  1. **Hero masthead — bigger, thinner, more air.** Drive `--t-hero` to the *top* of its clamp (104px desktop) and pair it with `font-weight: 500` not 600, leading `1.04`, tracking `--track-hero (-0.018em)`. Thin + large + tight = Stripe's weight-300 editorial-density move (premium tell #3) in a serif register. The headline should look *struck into the paper.*
  2. **The italic as the firm's voice.** Cormorant italic at large size is the signature editorial instrument (already used in `.pullquote`, `.chapter-num`, `.mock-foot`). Reserve italic for *conviction and verdicts* — the accent word in the hero, the pull-quote, the guarantee clause, plate captions. Italic = "we are speaking plainly now."
  3. **Engraved numerals as structure.** `.engraved` / `.chapter-num` (gold `-webkit-text-stroke`, transparent fill) become the dossier's section register: outlined "No. 01" exhibit numerals. These earn their numbering — see §3, the content genuinely *is* a sequenced report, so numerals encode truth, not decoration (frontend-design: "numbering must encode something true").

### 1.2 Body — **Geist Sans** (keep)
- Already wired (`--font-geist`), Swiss-grotesque lineage, the calm workhorse under the serif. Body at `--t-body 16px` / `--t-body-lg 18px`, leading `1.6`, **measure capped at 62–66ch** (the single biggest "expensive" lever per `research-design.md` §4.3 — air, not ornament). Color `--ink-soft #5C544C` for body, `--ink #1A1714` for lead sentences.
- Two weights max per block (regular 400 + semibold 600). No third weight — premium tell, and a CLAUDE.md anti-pattern.

### 1.3 Utility / "case-file" face — **introduce ONE true monospace: Geist Mono**
- **This is my one type addition, and it is deliberate.** Today `--font-mono` aliases to Geist Sans (`globals.css:26`) — so there is no real precision signal. Vercel's whole "engineering rigor" tell is Geist *Mono* used for labels/numerals (`research-design.md` §1.2, premium tell #4). Geist Mono is the sister face to the Geist Sans already in the build — same foundry, zero tonal clash, self-hostable.
- **Strict scope — mono is for the FILE SYSTEM, never prose** (`research-design.md` §4.2b):
  - Case-file IDs: `FILE NO. VRD-0497`, `EXHIBIT A`, `REF / OSHA-2026`
  - Dates / timestamps on the live report: `ISSUED 2026 · STANDING`
  - Tabular numerals inside `.mock` tables (`font-variant-numeric: tabular-nums` is already there)
  - Audit line-item codes in the hero document
- Prose, headlines, and the `.eyebrow` small-caps labels stay in Geist Sans — the heritage warmth depends on it. Mono is a scalpel: file identifiers only. If mono ever touches a sentence, it has failed.

### 1.4 SCALE (locked to existing tokens, with intent)

| Role | Token | px (clamp) | Face / weight | Tracking | Leading |
|---|---|---|---|---|---|
| Hero masthead | `--t-hero` | 44 → **104** | Cormorant 500 | `-0.018em` | 1.04 |
| Hero accent word | (inherits) | top of clamp | Cormorant **italic** 500 | `-0.018em` | 1.04 |
| Section head (H2) | `--t-h2` | 34 → 64 | Cormorant 600 | `-0.012em` | 1.1 |
| Sub-head (H3) | `--t-h3` | 20 → 28 | Cormorant 600 | `-0.005em` | 1.2 |
| Pull-quote / verdict | `.pullquote` | 26 → 44 | Cormorant **italic** 500 | `-0.012em` | 1.24 |
| Exhibit numeral | `.chapter-num` | 52 | Cormorant italic, gold stroke | — | 0.9 |
| Body large (lead) | `--t-body-lg` | 18 | Geist 400 | 0 | 1.6 |
| Body | `--t-body` | 16 | Geist 400 | 0 | 1.6 |
| Eyebrow (small-caps) | `.eyebrow` | 12 | Geist 600 caps | `0.3em` | — |
| **Case-file label** | **new `.casefile`** | **10.5** | **Geist Mono 500 caps** | **0.22em** | — |
| Stamp | `.stamp` | 11 | Geist 700 caps | `0.18em` | — |

---

## 2. COLOR & CONTRAST — "ink does the work, gold only seals"

The palette is already correct (`research-design.md` §4.4: one contained color event, ink everywhere else). I am not adding hues. I am *tightening the law of gold* and adding two semantic tokens the dossier concept needs.

### 2.1 Tokens (existing — keep verbatim)
```
--paper        #F7F3EA   ivory ground
--paper-deep   #F1EADB   alt bands
--paper-bright #FCFAF4   plate fills
--ink          #1A1714   text + dark bands
--ink-soft     #5C544C   body
--ink-faint    #8A8076   meta / captions
--gold         #A57A0B   seals / hairlines / underlines
--gold-bright  #C49A0A   seal highlight only
--green-pass   #2F5D3A   PASS verdict
--red-fail     #8C3A2E   FAIL verdict (used to threaten, rarely shown)
```

### 2.2 Two new semantic tokens (the dossier needs them; both derive from existing ink)
```
--ink-deep     #12100E   /* the indictment band — one notch darker than --ink, so the
                            dark "cost-of-inaction" section reads as a SEPARATE, graver
                            document than the ink used for body text. Subliminal: the
                            problem section is printed in a heavier ink. */
--paper-aged   #F4EEDF   /* the hero document's page — very slightly warmer/older than
                            --paper, so the live report reads as a real inserted sheet
                            sitting ON the site, not as the site itself. */
```
These are the only additions. Both are ink/paper derivatives — no new hue, no gradient.

### 2.3 THE LAW OF GOLD (enforced, ruthless)
Gold appears in **exactly five** places, nowhere else, ever:
1. **Seals** — the `.stamp` PASS / LIVE color (`--gold` on the LIVE stamp).
2. **Hairlines** — `.gold-hairline` section dividers, the `.plate` hover border, the faint gold "crown" radial (`body::before`, `.band-dark::before`).
3. **The gold-underline draw** — `.gold-link` link hover, the one micro-moment.
4. **Engraved numerals** — `.engraved` / `.chapter-num` gold stroke.
5. **Exactly one accent word** per major headline (hero accent, shimmer reserved for the single hero word via `.gold-shimmer`).

**Never:** gold as a button fill, gold as a background field, gold on body text, gold gradients across a section. This is how we avoid "gradient soup" *and* avoid looking gimmicky — gold is the wax seal on a document, not the document. If a section feels flat, the fix is *more whitespace or a hairline rule*, never more gold.

### 2.4 Contrast / accessibility
- Body `--ink-soft #5C544C` on `--paper #F7F3EA` ≈ 7.0:1 — passes AA/AAA. Lead text `--ink` on paper ≈ 13:1.
- On `.band-dark` / `--ink-deep`: paper-bright text ≈ 14:1. Gold `--gold-bright` on ink-deep ≈ 5.3:1 — passes AA for the large LIVE stamp and numerals (never used for body).
- `--ink-faint #8A8076` (captions) on paper ≈ 3.2:1 — **caption/meta only, never body or interactive**, per WCAG large-text/non-text rule. Enforce in review.
- Focus: keep the existing `2px solid --gold` `:focus-visible` ring, offset 3px. Visible on both paper and ink grounds.

---

## 3. LAYOUT PRINCIPLES — "a bound dossier, not a landing page"

### 3.1 The governing grid
- **12-col, but the document is bound to a spine.** Content lives in a **66ch reading measure offset LEFT of center**, with a persistent ~80px **left margin rail** carrying the dossier's running marginalia: the running file number, the section numeral, and a 1px vertical rule (`.rule-v`) that reads as the *binding edge of the report*. This single asymmetry kills the #1 AI tell (centered symmetry) on every section, and it is *true* to the subject — real audit reports have a binding margin and a running header.
- On mobile (`<860px`) the rail collapses to a top-of-section file-line; the vertical rule hides (already handled — `.rule-v { display:none }` at 480px). No horizontal scroll, 48px taps — CLAUDE.md non-negotiable.

```
DESKTOP — the bound page
┌──────────────────────────────────────────────────────────┐
│ rail │  EXHIBIT A ─────────────────────  small-caps label │
│ No.  │                                                    │
│ 01   │  Cormorant 64px section head, set LEFT,            │
│  │   │  ragged right, ~14 words max                       │
│  │   │                                                    │
│ (1px │  Geist body, 62–66ch measure ........              │
│ rule │  ........................................          │
│  =   │                                                    │
│ spine│        ┌───────────────────────────────┐          │
│  )   │        │  .plate.mock  — EVIDENTIARY     │ ← stamp │
│  │   │        │  live product UI as an exhibit  │ PASS ↩  │
│  │   │        └───────────────────────────────┘          │
│  │   │        Plate I. — italic caption beneath           │
└──────────────────────────────────────────────────────────┘
```

### 3.2 The Exhibit / Plate / Stamp motif system (the spine of the whole site)
Every section is a **numbered exhibit in the report.** This is the structural device, and it earns its numbering because the site genuinely *is* a sequenced dossier (frontend-design law: numbering must encode real order).

- **Exhibit label** (`.eyebrow` + new `.casefile` numeral): `EXHIBIT A · FILE NO. VRD-0497` sits top-left of each section on the rail.
- **Plates** = product mockups. Any `.mock` UI is presented as **"Plate I. — [italic caption]"** (the `.plate-caption` primitive already does exactly this). A product screenshot is never just shown — it is *entered into evidence.*
- **Stamps** = verdicts. The `.stamp` wet-seal (PASS / FAIL / LIVE) is the recurring punctuation. Rules of use:
  - **PASS** (green) — stamped on proof exhibits (shipped products) and on the guarantee clause. Earned, sparing.
  - **LIVE** (gold) — stamped on QRSafePro and on the hero document. Means "this record is currently standing."
  - **FAIL** (red) — appears *once*, deliberately, in the Problem/indictment band, stamped over a *competitor's* undocumented operation (the strawman, unbranded) — the only FAIL on the site, so it lands. We threaten with FAIL once; we deliver PASS everywhere else.
- **Whitespace is the luxury material.** Vertical rhythm between exhibits widens to `--sp-12 (96px)` desktop / `80px` mobile (already in the responsive rules). Intentional empty grid cells in `.chapter` rows. Air > ornament — the single highest-leverage "expensive" move (`research-design.md` §4.3).

### 3.3 Product mockups as evidentiary plates
The `.mock*` system (browser chrome, ruled tables, status pills, tabular numerals) is the *graphics budget* — no illustrations, no AI art, ever (`research-design.md` §4.5: "a ruled data table reads more expensive than any robot render"). Each plate is a real-looking product surface:
- QRSafePro → an inspection-record table, last row stamped **LIVE**, `mock-stage-bound` gold pill.
- The hero → the audit report itself (see §5.1).
Plates alternate left/right via `.chapter` / `.chapter-rev` — broken symmetry that still snaps to the grid (premium tell #10).

---

## 4. MOTION LANGUAGE — "ink, not bounce; the seal presses once"

A prospectus does not bounce (`research-design.md` §4.6). One easing token governs everything: **`--ease-prospectus cubic-bezier(0.22, 1, 0.36, 1)`** (already global). All travel ≤ 16px. Motion personality = *settling onto paper*, not *entering*.

### 4.1 The vocabulary (four moves, no more)
1. **Ink-rise** — scroll-reveal = `opacity 0→1` + `translateY(12px→0)`, 420ms, `--ease-prospectus`, staggered ~60ms across an exhibit's elements. Text appears like ink absorbing into paper.
2. **Gold-underline draw** — `.gold-link` hover, `scaleX(0→1)` from left, 350ms. The one link micro-moment.
3. **Shine sweep** — `.btn-ink::after` diagonal highlight on hover (already built). The CTA's single flourish.
4. **The seal press** — the signature. A `.stamp` does NOT fade in. It **presses once**: starts `scale(1.25)`, `rotate(-14deg)`, `opacity 0`, blurred `2px` → lands at `scale(1)`, `rotate(-7deg)` (the resting tilt already in `.stamp`), `opacity 0.9`, blur 0, over ~520ms `--ease-prospectus`, with a 1px settle-overshoot. It looks like a wet rubber seal struck onto the page. **Each stamp presses exactly once, on first scroll-into-view, never loops.**

### 4.2 THE HERO — "the live audit report generating, then the PASS drop"
This is the cinematic centerpiece. On load (or scroll-into-view), an orchestrated ~2.6s sequence, GOLD/INK only, **never cyan** (`verified-findings.md` R6):

```
t=0.0s  The dossier page (--paper-aged sheet) is present but BLANK except
        chrome + "FILE NO. VRD-0497 / OSHA-2026" mono header.
t=0.2s  Ruled audit line-items type/ink-rise in sequence, one per ~140ms —
        each a workflow being inspected:
          ▸ Inspection logs ............... reconciled
          ▸ Training records .............. current
          ▸ Written programs .............. on file
          ▸ Audit trail ................... complete
        Each line, as it lands, gets a small green ✓ ink-rise at the right.
t=1.9s  A hairline gold rule draws left→right under the last line.
t=2.1s  THE SEAL PRESSES — a large PASS stamp (or LIVE, gold) strikes
        down over the report corner: scale+rotate+blur settle, one strike,
        a barely-perceptible paper "give." Done. It rests.
t=2.4s  Hero headline accent word (.gold-shimmer, italic) completes its
        first shimmer pass. Everything holds, silent.
```
The headline ("We build automation that survives an audit.") and the document are co-staged: the words make a claim, the document *proves it* a beat later. That one-beat gap between claim and proof is the whole brand.

### 4.3 Reduced motion — degrades to a STATIC STAMPED DOCUMENT
`@media (prefers-reduced-motion: reduce)` (already a full freeze in `globals.css:715`):
- The hero document renders **fully generated and already stamped PASS** — all line-items present with ✓, the seal at its resting `rotate(-7deg) scale(1) opacity:0.9`, headline shimmer frozen to flat `--gold`. No generation sequence, no press — just the finished, sealed report. **The reduced-motion state is not a lesser version; it is the same dossier, already adjudicated.** That is the correct fallback because the *artifact*, not the animation, is the message.
- All ink-rise/stagger → instant. Seal-press → no transform, present at rest. Shine sweep → off (already handled). This is a hard requirement and a CLAUDE.md non-negotiable.

---

## 5. SECTION-LEVEL INTENT

Running order (locked by CLAUDE.md): Nav · Hero · ProofBar · Problem · How-we-build · Services · Products · Offer · PullQuote · FAQ · About · Contact · Footer. Each is an **Exhibit** in the dossier.

### 5.1 Hero — *Exhibit A: The Standing Record*
- **Thesis (frontend-design: hero is a thesis).** Left: masthead + the live-audit document (§4.2). The headline is the claim; the stamping document is the proof, one beat later.
- Headline: **"We build automation that survives an audit."** — Cormorant 500, 104px, "survives" set in **gold-shimmer italic** as the single accent word.
- Sub: one Geist line, ≤22 words, the broad spine: *"We map the operation, automate the parts that should never depend on memory, and hand you a record that holds up."*
- CTAs: primary `.btn-ink` **"Book the $497 audit"** · secondary `.btn-ghost` **"See the guarantee"** (anchors to Offer). Single primary action discipline (`verified-findings.md` V16).
- Rail: `FILE NO. VRD-0497 · ISSUED 2026 · STANDING` in mono.

### 5.2 Problem / cost-of-inaction — *Exhibit B: The Indictment* (the dark band)
- `.band-dark` on `--ink-deep` (the graver ink) — the one spectacle zone (Stripe's contained-event logic, in ink not gradient). Faint gold crown from the top (`.band-dark::before`).
- **The honest OSHA framing — qualitative, never a stat-flex** (`verified-findings.md` R5, V23). Do NOT print "$16,550 / $165,514." Instead, the indictment in the firm's voice:
  > *"In 2026 the most expensive failures aren't accidents. They're missing paperwork — a log that wasn't kept, training that lapsed, a written program no one updated. The penalty arrives for the documentation, not the danger."*
- The one **FAIL** stamp on the site presses here, over an unbranded strawman exhibit ("OPERATION — undocumented") — a ruled `.mock` table with blank/overdue cells, stamped red FAIL. This is the only fear-moment; it earns its weight by being singular.
- Turn: a hairline rule, then one ink line — *"The fix is boring. That's the point."* — handing to the build mechanism.

### 5.3 How-we-build — *Exhibit C: Method*
- Genuinely sequenced → numerals earn their place. Three ruled steps, engraved `No. 01 / 02 / 03`:
  1. **Audit** — *"We walk the operation and find where the record breaks."*
  2. **Build** — *"We automate the parts that should never run on memory."*
  3. **Stand it up** — *"We hand you something that holds — and we keep it current."*
- No three-equal-cards (AI tell). These are *rows on the spine*, alternating rail/content, each separated by a hairline `--sp-12` apart. Whitespace-forward.

### 5.4 Services — *Exhibit D: The Schedule of Work* (3 tiers)
- The 3 tiers are a **fee schedule**, presented as a ruled `.plate` table register, not three glossy pricing cards (kills the three-equal-cards tell). Exact copy preserved (CLAUDE.md non-negotiable): **$497 Audit · $1,500–$5,000 Buildout · Ongoing Care.**
- Each tier = a row/plate with mono price, Cormorant tier name, Geist "WHAT YOU GET" bullets (`.chapter-bullets` with the gold ◆), one `.btn-ink` CTA. The Audit row carries a quiet **LIVE**-adjacent emphasis (it's the front door).
- **The honest price anchor** (`verified-findings.md` V12, cite Winder.AI): one quiet caption line — *"Comparable automation audits run $5,000–$15,000."* — set in `--ink-faint` italic beneath the $497, as a factual margin note, not a boast.

### 5.5 Products / Proof — *Exhibits E–H: Entered into Evidence*
- The proof wall, led by the wedge (`verified-findings.md` §4 build instruction). Each product is a **Plate**, alternating `.chapter` / `.chapter-rev`:
  - **Plate I — QRSafePro** (lead, compliance-shaped): inspection-record `.mock` table, last row stamped **LIVE** (gold), `mock-stage-bound` pill. Caption: *"Live audit-ready records, in the field."*
  - **Plate II — Knight Electric** (the OSHA/electrical-safety deployment): the domain-depth proof.
  - **Plates III–IV — ChangeOrderAI / PolicyPilot / VoicePencil**: breadth evidence for the broad spine, smaller, following the wedge — they reinforce capability without diluting the moat.
- Each plate gets a **PASS** seal on first view. No invented metrics, no fake logo bar (`verified-findings.md` R3 — voice violation). The artifact is the proof.

### 5.6 Offer — *Exhibit I: The Engagement* (+ guarantee as a sealed clause)
- The $497 band. The **guarantee is rendered as a clause in the dossier** — the single most ownable move (category buries risk-reversal; we seal it):
  > In a bordered `.plate` set like a contract clause, mono label **"CLAUSE 1 — GUARANTEE"**, then verbatim (LOCKED, `verified-findings.md` V3): *"We find at least 3 automation opportunities in your operation, or the audit's free."* — with a **PASS** wet-seal pressed in the corner. Risk-reversal, sealed and up front.
- Primary CTA repeats: **"Book the $497 audit."**

### 5.7 PullQuote — *the firm's conviction*
- `.pullquote` Cormorant italic, 44px, one line of plain conviction, gold `.pq-mark`:
  > *"Most automation breaks quietly. We build the kind that **holds up** when someone checks."*
- Maximum air around it — a single page in the dossier with one sentence on it.

### 5.8 FAQ — *Exhibit J: For the Record*
- Accessible disclosure (aria-expanded/controls, 48px taps, focus — already built in `FAQ.tsx`). Styled as a **deposition transcript**: mono "Q." / "A." markers, ruled rows, hairline dividers. The "why paid > free" answer lives here (`verified-findings.md` V9): *"A URL can list workflows. It can't walk your floor, read your logs, and stand behind what it finds."*

### 5.9 About — *Exhibit K: Credentials of Record*
- The authority exhibit, voice-compliant: **no location flex, no stats, no "founded," "we" not "I"** (CLAUDE.md). ~7 yrs in the compliance/inspection domain framed as *standing*, not bragging. Cormorant lead sentence + Geist body, 62ch, heavy whitespace. One engraved numeral. The "human in the loop" framed as a *premium feature* (`verified-findings.md` V27): *"A person reads the record. That's not slower — that's the point."*

### 5.10 Contact — *Exhibit L: File a Request*
- Short form (≤3 fields, `verified-findings.md` V18 — the $497 qualifies). Framed as **filing into the record**: label "OPEN A FILE," `.btn-ink` **"Submit request"** → toast **"Request filed."** (active voice, label = result, per frontend-design writing law). Hands to the scheduler.
- Empty/error states in the dossier's voice, never apologetic: error = *"That field's needed for the record — add it and resubmit."*

### 5.11 Footer
- The dossier's colophon: hairline rule, mono file-line `FILE NO. VRD-0497 · STANDING · 2026`, the running gold-link nav, a final quiet **LIVE** seal. The document closes; it remains standing.

---

## 6. REFERENCE SITES CHANNELED (3) — the ONE thing taken from each

1. **Anthropic (anthropic.com)** → *the warm-paper-ground-reads-MORE-premium-than-dark proof.* The single most relevant precedent (`research-design.md` §1.5, V29): an AI company in serif-on-ivory reads as a heritage institution, the exact opposite of the purple-gradient AI cliché. Take: **the courage to be paper, not dark-SaaS.**
2. **Stripe (stripe.com)** → *the contained color event.* Spectacle confined to ONE zone (their gradient band), calm everywhere else. Take: **the dark `.band-dark` indictment is our one spectacle zone — ink, not gradient — and gold stays a seal, never a field.** Plus thin-weight large display tracking.
3. **Vercel (vercel.com)** → *mono as a precision signal + hairline modular grid.* Take: **Geist Mono confined to file-IDs/numerals/dates** (engineering-rigor tell) over hairline-bordered plates — the structural rigor that makes a dossier read as *kept*, not decorated.

*(Honorable mention not counted: the heritage annual-report / engraved-prospectus lineage in `research-design.md` §1.7 — the substrate the whole direction is built on.)*

---

## 7. WHY THIS WINS — and the single biggest risk

### Why it wins
- **It is the only direction that *demonstrates* the H1 instead of asserting it.** "We build automation that survives an audit" + a document that audits itself and stamps PASS in front of you = claim and proof in one motion. No competitor in the scan does this; most bury risk-reversal and over-claim with invented metrics (`verified-findings.md` V8, V15). We do the opposite, visibly.
- **It sells the locked wedge most directly** (`verified-findings.md` §4): the dossier *is* the compliance/inspection world made tangible, while the offer (audit→build→care) rides the broad spine underneath. Story+proof from the safety moat; offer stays vertical-agnostic.
- **It is structurally immune to ~13 of 16 AI tells** (`research-design.md` §4) and spends its one risk on a move templates can't fake: the discipline of a ruled, bound, adjudicated document. Print heritage is the strongest "real institution / real money" signal on the web, and almost no AI competitor occupies it.
- **It elevates, doesn't reinvent** — every element maps onto an existing primitive; the build team adds two ink-derived tokens, one mono face, and one seal-press keyframe. Low build risk, high distinctiveness.

### The single biggest risk: **theme-over-clarity (the dossier metaphor eating the message).**
If the "everything is an audit report" conceit is pushed too hard, a first-time visitor could spend cognitive budget decoding the metaphor (*"why is this a legal file?"*) instead of grasping *what Verdorian does and what to do next.* The dossier is a frame, not a puzzle.
- **Mitigation (enforce in build):** the metaphor must never cost a millisecond of comprehension. The H1 says plainly what we do. Every CTA is literal ("Book the $497 audit," not "File for adjudication"). The case-file mono labels are *garnish on the rail*, never load-bearing for understanding. Run the Chanel test on each section — if a dossier flourish (a stamp, a "CLAUSE," an "EXHIBIT") isn't making the content *clearer or more trustworthy*, remove it. The seal presses once per element; FAIL appears exactly once; gold obeys the five-place law. **Restraint is what separates "a firm that has done this before" from "a landing page wearing a costume."**

---

### Build-team handoff (the only net-new code surface)
- Add tokens: `--ink-deep #12100E`, `--paper-aged #F4EEDF`.
- Add face: Geist Mono → repoint `--font-mono` (currently aliased to Geist Sans, `globals.css:26`); add `.casefile` utility class (mono, 10.5px, caps, 0.22em).
- Add one keyframe: `sealPress` (scale/rotate/blur settle, one strike) on `.stamp`, gated behind first-in-view + reduced-motion-off.
- Everything else = existing primitives, used with the discipline above. No new card system, no glass, no cyan.
