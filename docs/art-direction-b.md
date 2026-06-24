# Art Direction B — "ROOM 404"

### A Technical Grotesk / Frontier Engineering Studio direction for verdorian.com

> _Named for the room where the audit happens — the back office, the panel-box, the file cabinet of incomplete OSHA logs. "Room 404": the place a thing should be and isn't. We go in, we find the gaps, we close them. The whole site feels like standing in that room with the lights on._

**The feeling, in one sentence:** A frontier engineering studio that walks into your operation, opens the panel, and shows you exactly what's missing on a ruled grid — precise, near-monochrome, unhurried, and so confident it never raises its voice.

This is the opposite pole from Direction A's engraved-Victorian prospectus. Where A says _"old money, bound ledger, wax seal,"_ B says _"the engineering studio that audits old money."_ Same honesty, same proof-led spine, same warm paper underfoot — but the register moves from _heritage publication_ to _instrument panel_. Linear's systematic restraint, Vercel/Geist's precision, Resend's whitespace — evolved onto the Heritage-Prospectus paper base so it never becomes another cold dark-mode SaaS clone. **It is ink-on-paper, not white-on-black.** That single decision is what keeps it out of the cliché.

---

## 0. Why this is a distinct direction, not a reskin

The current CSS (`globals.css`) is genuinely a heritage-prospectus system: Cormorant Garamond display, italic chapter numerals, double-frame `.plate`, wet-seal `.stamp`, gold-shimmer hero word, `◆` bullets. Direction B keeps the **paper, ink, and single-metal discipline** but swaps the _voice of the type and the geometry of the grid_:

| Axis | Current (Heritage Prospectus) | Direction B (Room 404) |
|---|---|---|
| Display face | Cormorant Garamond (high-contrast serif) | **Söhne / grotesk** (no serif anywhere as identity) |
| Register | Engraved bank-note, bound ledger | Instrument panel, spec sheet, audit report |
| Numerals | Italic serif "No. 01" | **Mono tabular** `[ 01 ]`, `R-404.2`, monospaced codes |
| Card | `.plate` double-frame + drop shadow | **`.cell`** — single hairline, square corners, ruled like graph paper |
| Accent | Gold leaf as seal/shimmer | Gold as **one signal pixel** — a status dot, a found-gap underline, a "LIVE" tick. No shimmer. |
| Motion | Seal presses, gold shimmer loop | **Audit runs**: rows scan, a counter ticks, a gap gets flagged. Mechanical, not decorative. |
| Asymmetry | Alternating text∥figure chapters | **Swiss grid** — 12-col, deliberate empty cells, left-rail labels, content hangs off a baseline |

Both are honest, proof-led, non-generic. B is the choice if Verdorian wants to read as **a software studio that happens to know compliance**, rather than **a compliance house that happens to write software**. Given the positioning ruling (safety is the _story_, broad automation is the _offer_), B has an advantage: a grotesk/engineering register sells the _broad capability spine_ more naturally, while the content carries the safety wedge.

---

## 1. TYPE SYSTEM

The whole direction lives or dies on the display face. The brief is explicit: **never Inter/system-default as identity.** The premium tells research (§2) names the move — _"a real (or convincingly bespoke) typeface."_ Three faces, each doing one job.

### 1.1 Display + UI — **Söhne** (Klim Type Foundry, Kris Sowersby)

**The pick, and why.** Söhne is "the memory of Helvetica as it was on the gridded interfaces of the late 20th century" — a grotesk with the warmth of Akzidenz and the neutrality of a wayfinding sign. It is what Stripe runs (`sohne-var`), which is the single best precedent for _"this looks like real money and real engineering, not a template."_ It is licensable and self-hostable (woff2 via Klim's webfont license), so it passes the bespoke-feeling test that Inter fails.

- **Weights loaded:** Söhne Buch (400), Kräftig (500), Halbfett (600). Three weights, hard ceiling. (The CLAUDE.md anti-pattern bans >2 weights _per component_ — site-wide we carry three, never more than two in a single block.)
- **Display set:** Halbfett (600) — but at large sizes we **lighten optically by tightening tracking**, not by going thin. Grotesk confidence comes from weight + tight tracking, not from hairline strokes (that's A's move).
- **The signature display treatment:** large, tight, lowercase. `we build automation that survives an audit.` set in Söhne Halbfett, `letter-spacing: -0.03em`, line-height `1.02`. Lowercase reinforces the locked "ai" lowercase convention and reads modern-engineering, not corporate-shouty.

**If Söhne licensing is a blocker** (it's a paid foundry license), the fallback ladder, in order:
1. **Neue Montreal** (Pangram Pangram) — slightly more geometric, warmer, generous personal-license terms. Excellent grotesk, very current.
2. **General Sans** (Fontshare/Indian Type Foundry) — **free**, open-license, genuinely good. The pragmatic ship-it pick.
3. **Geist Sans** — already in the repo as `--font-geist`. It _is_ a Swiss grotesk (Vercel's). Promoting Geist from body to **display** is the zero-cost, zero-new-dependency path and is fully on-thesis (Geist is precisely the "precision grotesk" the research channels). **Recommended default unless budget for Söhne/Neue Montreal is approved** — it ships today and keeps the bundle untouched.

> **Ruling:** Spec Söhne as the aspirational identity face; **build on Geist Sans (promoted to display) as the no-risk default.** The direction reads correctly either way — the geometry and grid carry it more than the exact grotesk.

### 1.2 Body — **Geist Sans** (already in repo)

Body stays Geist Sans Regular (400) / Medium (500). It's a clean neutral grotesk that sits perfectly under a Söhne or Neue Montreal display without clashing, and under Geist-display it's a single-family system (the most disciplined option of all). Body measure capped at **62–66ch** — the Resend "confidence through emptiness" lever.

### 1.3 Mono — **Geist Mono** (already in repo, currently aliased away)

This is the **highest-leverage upgrade** in the whole direction and it costs nothing — Geist Mono ships with the `geist` package and `globals.css` currently throws it away (`--font-mono: var(--font-geist)`). Re-point it.

Mono is the engineering-rigor signal (the Vercel tell). It is used **only** for precision objects, never prose:
- Section labels / eyebrows: `[ 01 ] — THE AUDIT`
- Numerals, prices, counts: `$497`, `3 GAPS FOUND`, tabular figures in every `.mock` table
- Status + IDs: `STATUS: LIVE`, `OSHA · 29 CFR 1926`, `REF R-404.2`
- The penalty-trigger figures rendered as data, not stat-flex: `$16,550 / item` set in mono inside a ruled cell reads as _a fact on an instrument_, not a marketing brag (this is how we honor the no-stats-flex voice while still showing the dollarized trigger).

Never mono for body, headlines, or CTAs.

### 1.4 Scale & metrics (replaces the serif-tuned scale in `:root`)

```
--t-hero:    clamp(40px, 6.4vw, 88px)   /* Söhne/Geist Halbfett, track -0.03em, lh 1.02 */
--t-h2:      clamp(28px, 4vw, 52px)      /* track -0.022em, lh 1.06 */
--t-h3:      clamp(19px, 2.2vw, 24px)    /* track -0.01em, lh 1.2 */
--t-body-lg: 18px / lh 1.55
--t-body:    16px / lh 1.6   (measure 62–66ch)
--t-sm:      13.5px
--t-mono-lbl:11.5px  / track 0.16em / UPPERCASE   (the label workhorse)
--t-mono-xs: 10.5px  / track 0.14em                (IDs, refs)

Tracking tokens (retune the existing ones):
--track-hero:    -0.03em      (was -0.018; grotesk wants more negative)
--track-display: -0.022em
--track-h3:      -0.01em
--track-body:     0
--track-label:    0.16em      (mono caps)
--track-eyebrow:  0.16em      (was 0.3em — grotesk caps need less than serif caps)
```

**The one rule that makes it look authored:** display tracks _negative_ and hard (engineering confidence), labels track _positive_ and modest (instrument legends). The gap between those two tracking worlds is the entire personality.

---

## 2. COLOR & CONTRAST

Evolve the existing paper/ink/gold tokens toward a **tighter near-monochrome system** — Linear's "90% achromatic, one hue does the lifting" applied to warm paper instead of black.

### 2.1 The near-monochrome ink scale (keep the warm paper, tighten the ink)

```
--paper:        #F6F2E9   /* primary ground — a hair cooler/flatter than current #F7F3EA, reads "spec sheet" not "antique" */
--paper-deep:   #EFE9DC   /* alt bands, the audit-panel band */
--paper-bright: #FCFAF4   /* cell fills, elevated surfaces */
--ink:          #16130F   /* near-black ink, slightly deeper than current for crisper hairlines on grotesk */
--ink-soft:     #57514A   /* body */
--ink-faint:    #8C8478   /* meta, mono labels, captions */
--ink-line:     rgba(22,19,15,0.14)   /* THE grid hairline — the most-used color on the page */
--ink-line-soft:rgba(22,19,15,0.07)   /* secondary rules, graph-paper feel */
```

The whole page is **ink on warm paper with a graph-paper grid of hairlines.** Most "color" is actually _line weight_. This is the engineering-drawing move — a blueprint is monochrome and reads expensive precisely because the information lives in the rules, not the hues.

### 2.2 The ONE accent — gold, demoted from "leaf" to "signal"

```
--signal:        #B08518   /* slightly warmer/brassier than current #A57A0B — reads "indicator," not "gilt" */
--signal-bright: #D6A521
--signal-ghost:  rgba(176,133,24,0.10)
```

**Where gold is allowed — and nowhere else:**
1. **The found-gap underline.** When the audit "finds" something, the word or row gets a 1.5px gold rule drawn under it. This is the site's signature accent gesture.
2. **The LIVE / status dot.** A 6px gold dot before `STATUS: LIVE` on QRSafePro. One pixel of color = one fact.
3. **The active nav indicator** — a 2px gold tick under the current section.
4. **The primary CTA's micro-affordance** — gold appears only on the arrow/underline inside `Book the audit`, never as the button fill.
5. **Guarantee emphasis** — the words `or the audit's free` carry the gold underline. The guarantee is the one place color is _earned_.

**Where gold is forbidden:** button fills, headline fills, background fields, gradients of any kind, shimmer animation. The current `.gold-shimmer` hero treatment is **explicitly retired** in this direction — a frontier engineering studio doesn't shimmer.

### 2.3 How we avoid gradient soup

There are **zero gradients** in Direction B except two strictly-contained, near-invisible exceptions:
- A single radial vignette at the top of the page (already in `body::before`), reduced to ~6% opacity — atmospheric, not decorative.
- The one **dark band** (Problem section, see §5) inverts to `--ink` ground with a barely-there gold radial crown at ~8%. This is the Stripe "spectacle confined to one zone" logic, executed in gold-on-ink. Everywhere else: flat paper, flat ink, hairlines. Flatness _is_ the premium signal here.

Semantic status colors (`--green-pass #2F5D3A`, `--red-fail #8C3A2E`) are retained **only inside `.mock` proof artifacts** (a real audit table needs pass/fail) and never enter the chrome.

---

## 3. LAYOUT PRINCIPLES

### 3.1 The grid — a real 12-column engineering grid

- **12 columns, 24px gutter, 1240px max content, generous outer margin.** Unlike Direction A's centered editorial measure, B hangs everything off an explicit grid that is _occasionally visible_ (faint vertical hairlines in the hero and section breaks — the laid-paper chain lines in current CSS become honest **graph-paper column rules**).
- **Left rail = labels.** Most sections lead with a narrow left column (cols 1–3) holding the mono section label, the index `[ 01 ]`, and a one-line legend. Content lives in cols 4–12. This left-rail/label pattern is the Vercel + Linear systematic move and instantly reads "documentation-grade."
- **Deliberate empty cells.** The single biggest whitespace lever: in any multi-item row, _leave one cell empty on purpose._ A 3-up that's actually a 4-col grid with one blank = intentional, expensive, anti-"three equal cards."

### 3.2 Asymmetry on the grid

No section is centered+symmetric (kills the #1 AI tell). The rhythm: label-left / content-right, then content-left / figure-right, alternating. Headlines are **left-aligned to the grid**, never centered. The hero itself is asymmetric (see §5).

### 3.3 `.plate` → `.cell` — the card becomes an instrument readout

The double-frame, drop-shadowed `.plate` is replaced by **`.cell`**:

```
.cell {
  background: var(--paper-bright);
  border: 1px solid var(--ink-line);
  border-radius: 3px;          /* near-square; the current 2–4px radii stay — they're already right */
  box-shadow: none;            /* NO drop shadow — depth comes from the hairline + a ruled header, not elevation */
}
.cell__header {                 /* every cell has a ruled header strip, like a form field */
  display: flex; justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--ink-line);
  font: var(--t-mono-lbl) mono;  /* mono label left, status/index right */
}
.cell__body { padding: 20px 16px 24px; }
.cell:hover { border-color: rgba(176,133,24,0.34); }  /* hairline warms to gold — the only hover */
```

**Depth model:** Direction A used layered shadows for an "embossed plate" feel. B uses **none** — flatness with a strong hairline grid is the more expensive, more engineered look (Vercel/Linear both ship near-shadowless). The only "lift" is the border warming to gold on hover. This is a deliberate, opinionated rejection of `shadow-md`-everything.

### 3.4 The data-grid / ruled-table moment — the centerpiece

The current `.mock` table system is _already_ this direction's strongest asset (the research §2 #8 names it). B leans on it harder and makes it the literal hero (see §5). Specs:
- Full-bleed-within-cell ruled tables, `font-variant-numeric: tabular-nums` everywhere (mono).
- Column headers in `--t-mono-lbl`, hairline `border-bottom`.
- Row rules in `--ink-line-soft` (graph-paper).
- Status column carries the only color: a gold `●` for live, green/red stamps for pass/fail.
- A "found" row gets the gold underline + a mono flag `← GAP`.

This ruled-table-as-graphic, repeated as the connective tissue of the whole site, is what makes it read "audit studio" without a single illustration.

---

## 4. MOTION LANGUAGE

**Thesis: nothing decorates; everything demonstrates.** Motion in Room 404 is the audit _running_. Mechanical, exact, calm. The current `--ease-prospectus` (`cubic-bezier(0.22,1,0.36,1)`) is the right curve — keep it, rename it `--ease-instrument`. Travel ≤ 14px, durations 160–320ms. No bounce, no spring overshoot (springs read "playful app"; this reads "precise tool").

**What animates:**
1. **Section reveals** — content rises 10–12px + fades as it crosses the viewport. Mono labels type-in or wipe-reveal left-to-right (a "field populating"). Hairlines **draw** (scaleX 0→1 from left) — a ruled line being inked onto the grid. This replaces A's "ink rising onto paper" with "grid being drawn."
2. **The found-gap underline** — gold rule draws left→right under a word on scroll-into-view. The signature micro-moment, used sparingly (hero guarantee, one Problem line, the live-product status).
3. **Counters** — any numeral (`$497`, `3 gaps`, audit counts) ticks up once on reveal, tabular-nums so it doesn't reflow. Mechanical, ~600ms, ease-out.
4. **Cell hover** — hairline warms to gold over 240ms. That's the whole interaction. No tilt, no scale, no lift (A used tilt springs — B explicitly drops them; instruments don't wobble).

### 4.1 The hero "product-in-action" concept — **"THE AUDIT RUNS"**

The hero figure is a single ruled `.cell` styled as a live audit readout — an instrument scanning a workflow and finding gaps. It is **hand-built SVG/DOM orchestrated with Motion** (per the verified web-tech finding: ≈0 added KB, gold/ink — _never cyan_).

**The sequence (loops once on load, then idles; respects reduced-motion):**
1. A ruled table of workflow rows renders, mono-labeled: `INSPECTION LOGS`, `TRAINING RECORDS`, `WRITTEN PROGRAMS`, `INCIDENT REPORTS`…
2. A thin horizontal **scan line** sweeps top→bottom across the rows (gold, 1px, ~1.4s, ease-instrument) — the audit reading the operation.
3. As it passes certain rows, a status resolves in the right column: most tick `✓ OK` (ink), three rows flag — a gold `●` appears, the row gets the **gold found-gap underline**, and a mono tag wipes in: `← GAP`.
4. A counter in the cell header ticks: `GAPS FOUND: 0 → 3`.
5. Settles. The header reads `STATUS: COMPLETE · 3 OPPORTUNITIES`. This visually _is_ the guarantee ("we find at least 3… or the audit's free") — the animation and the promise are the same object. That coupling is the direction's single best idea.

This is honest (it's a stylized version of the real deliverable), proof-led (it shows the product not a robot), on-brand (gold/ink, ruled, mono), and it carries the safety wedge implicitly through the row labels (OSHA-shaped) while the offer copy stays broad.

**Idle state / no-JS / reduced-motion:** the cell renders in its _settled_ state — three gaps already flagged, gold underlines static, `STATUS: COMPLETE · 3 OPPORTUNITIES`. Fully legible and on-message with zero motion. (The current CSS already has a total reduced-motion freeze — extend it to disable the scan, counters, and underline-draws, falling back to settled state.)

---

## 5. SECTION-LEVEL INTENT

Order follows the approved structure: Nav · Hero · ProofBar · Problem · How-we-build · Services · Products · Offer · PullQuote · FAQ · About · Contact · Footer.

**Nav.** Flat paper, hairline bottom rule only (no glass, no shadow). Wordmark `verdorian` lowercase Söhne/Geist Halbfett left; mono section links right; active section carries the 2px gold tick. CTA `Book the audit →` as a ghost-ink button with the gold arrow micro-affordance. Sticky, hairline strengthens on scroll.

**Hero.** Asymmetric split: cols 1–6 = the words, cols 7–12 = **THE AUDIT RUNS** cell (§4.1). Words: mono eyebrow `[ FRONTIER AUTOMATION STUDIO ]`, then the headline `we build automation that survives an audit.` (lowercase, Halbfett, -0.03em), one-line subhead in body, two CTAs (`Book the $497 audit →` ink-fill, `See what we've shipped` ghost). The guarantee sits directly under the CTAs in `--t-sm` with `or the audit's free` gold-underlined. No centered hero, no blob, no shimmer — every AI tell killed by construction.

**Problem / cost-of-inaction.** The **one dark band** (`--ink` ground, 8% gold crown). Left rail: `[ 02 ] — THE COST OF NOT KNOWING`. Right: a short, calm indictment in light type — documentation gaps, outdated logs, missing written programs. The OSHA-2026 trigger appears as **data on an instrument, not a stat-flex**: a small ruled cell with `SERIOUS VIOLATION  $16,550 / item` and `WILLFUL / REPEAT  up to $165,514 / item` in mono, captioned `OSHA · effective 2026`. Framed as _facts the audit checks for_, never as "scare numbers." This honors the no-stats-flex voice while dollarizing the trigger (exactly the ruling's instruction).

**How-we-build.** Three or four steps as a **horizontal ruled sequence** — `01 AUDIT` → `02 BUILD` → `03 CARE`, each a cell with a mono index, a one-line mechanism, and a hairline connector drawn between them on scroll. Left-rail label `[ 03 ] — THE METHOD`. Deliberately leaves the 4th grid cell empty (whitespace lever).

**Services (3 tiers).** **Exact copy preserved** (locked: $497 Audit / $1,500–$5k Buildout / Ongoing Care, "WHAT YOU GET" bullets, CTAs). Rendered as three `.cell`s on a 12-col grid — but **not equal-weight** (kills "three equal cards"): the **$497 Audit cell is the lead**, given an extra column of width and a gold `●` `START HERE` tag in its header; the other two are quieter, narrower. Prices in mono tabular. Bullets use a mono `+` marker (not the serif `◆`). One empty cell flanks the row.

**Products / proof.** The connective-tissue moment. Each product is a `.cell` with a ruled mini-table or status readout, not a screenshot-in-a-frame. **QRSafePro leads** with a live status: header `STATUS:` `● LIVE` (the gold dot), a 3-row mock inspection table, caption `live · compliance inspections`. Knight Electric follows as a deployment readout (OSHA-shaped). VoicePencil / PolicyPilot / ChangeOrderAI follow as breadth evidence in quieter, smaller cells (reinforcing the broad spine without diluting the safety wedge — per the ruling). Mono refs, tabular numerals, gold only on the LIVE dot.

**Offer band (+ guarantee).** Full-width `--paper-deep` band, ruled top and bottom. Large left-aligned: `$497` in display-scale mono-flavored numerals, then `one audit. at least three opportunities. or it's free.` The guarantee gets the gold underline on `or it's free`. Single CTA `Book the audit →`. This is the page's gravitational center — the whole site's gold budget points here.

**PullQuote.** Retire the serif italic `.pullquote`. Replace with a single **large left-aligned grotesk statement** (Halbfett, tight), e.g. `we'd rather find the gap before the inspector does.` — conviction through type weight + a single gold-underlined clause, not italic flourish.

**FAQ.** Keep the accessible disclosure (`aria-expanded/controls`, focus, 48px taps — already built in `FAQ.tsx`). Each row is a hairline-ruled list item; the `+`/`−` toggle is mono; expanded answer in body at 62ch. Reads like a spec sheet's notes section. No card chrome — just ruled rows.

**About.** Authority via restraint. Left rail `[ — ] — THE STUDIO`. Short "we" paragraph, broad-capability framing (web · software · iOS where it fits the workflow), the qualitative cred strip ("7 years… businesses of all sizes") set as a **mono ruled legend**, not a stat block. No counts, no location, no logos bar (all AI tells / voice violations avoided).

**Contact.** Two cols: left = one-line invitation + the guarantee restated small; right = a **short form styled as form-fields-in-a-cell** (the cell header reads `BOOK THE AUDIT`, fields are ruled underlines not boxed inputs — engineering-form aesthetic). 3 fields max, mono labels, 48px taps, hands off to scheduler. CTA gold-arrowed.

**Footer.** Flat, hairline top rule, mono everything — wordmark, a `REF` line, minimal links, year as `© 2026`. The instrument powers down quietly.

---

## 6. REFERENCES CHANNELED — and the one thing taken from each

1. **Linear (linear.app)** — _Systematic restraint + the single-accent rule._ The one thing taken: **90% achromatic, one hue does all the lifting, and it appears as a signal not a fill.** Gold becomes Linear's "one accent at a time," demoted to a status pixel and a found-gap underline.

2. **Vercel / Geist (vercel.com)** — _Mono-as-precision + hairline modular grid._ The one thing taken: **monospace used deliberately for labels, numerals, and IDs as an engineering-rigor signal** — and the bordered-cell grid with intentional empty cells. (Bonus: Geist Sans + Mono already in the repo make this the zero-cost path.)

3. **Resend (resend.com)** — _Confidence through emptiness._ The one thing taken: **a small content measure (62–66ch) floating in generous air**, with proof shown as crisp ruled artifacts rather than decoration. Whitespace as the primary luxury material.

_(Honorable mention — Anthropic's warm-ivory ground is the reason B stays on `--paper` instead of going dark: it's the proof that an ai company reads MORE premium on warm paper than in cold dark mode. B inherits the paper from the existing system and from Anthropic's precedent, then puts a grotesk engineering grid on top of it.)_

---

## 7. WHY THIS WINS — and the single biggest risk

**Why it wins.**
- It occupies the exact register the positioning ruling wants: **"a software studio that happens to know compliance."** The grotesk/instrument language sells the broad-automation _offer_ natively, while ruled tables and OSHA-shaped row labels carry the safety _story_ — story and offer rendered in one visual system instead of fighting.
- The hero animation **is** the guarantee. "We find at least 3 opportunities or it's free" stops being a line of copy and becomes a thing the visitor watches happen. No competitor in the scan does this; most bury risk-reversal in fine print.
- It is **structurally immune to every AI tell** (no centered hero, no blob, no gradient, no Inter-identity, no three-equal-cards, no emoji, no glass-everywhere, no fake logo bar) while hitting ~12 of the 14 premium tells — and it does so by _subtraction_ (flatness, hairlines, mono, air), which is the cheapest, most foolproof way to look expensive.
- It can **ship on the existing stack with near-zero new dependencies**: Geist Sans + Mono are already installed; the `.mock` table system, `--ease-prospectus` curve, reduced-motion freeze, and mobile guards all carry over. The work is _retuning tokens and restraint_, not a rebuild. (Söhne/Neue Montreal are an optional upgrade, not a requirement.)

**The single biggest risk: it can tip from "precise" into "cold / sterile / generic dev-tool."** Strip the serif warmth and the gold spectacle, and a grotesk-on-flat-paper system risks reading like _every_ Linear/Vercel clone — the very "near-monochrome SaaS" pool the brief warns against. **The mitigations are load-bearing and non-negotiable:** (1) keep the **warm paper ground** — never let it drift to white or dark; the warmth is the anti-clone insurance. (2) Keep the **paper grain overlay** (already in `body::after`) for tactility. (3) Make the **found-gap gold gesture** genuinely delightful and used _just often enough_ to feel human — it's the one moment of personality and it must land. (4) Let the **audit-runs hero** carry warmth through behavior (it's almost playful in a restrained way) so the page has a heartbeat. If those four hold, it's a frontier engineering studio; if they slip, it's a template. The direction is only as good as the discipline that keeps the paper warm and the gold earned.
