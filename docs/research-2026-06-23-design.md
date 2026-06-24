# Verdorian — Premium Blend Art Direction
### Paper × Glass: The Settled Audit
**Authored:** 2026-06-23  
**For:** verdorian.com rebuild — Services, Our Work / Products, Why Choose Us, and global polish  
**Status:** Build-ready spec. Reference for all section agents.

---

## 0. The Guiding Concept

The site is a **sealed compliance dossier that happens to be made of glass in the places light touches it.**

The paper (ivory, hairlines, ink, gold seal) is the **substrate** — the medium of authority, permanence, archival trust. The glass (backdrop-blur, frosted fill, inner highlight, ambient gold) is the **fenestration** — windows cut into the dossier so you can see the live work behind it. Glass appears where something is *active* or *current*. Paper appears where something is *settled* or *authoritative*.

That decision — glass = live/active, paper = settled/authoritative — is the single rule that keeps the blend intentional. A services card is currently *available* (glass). A ledger entry of why to trust us is *settled fact* (paper). A product proof is a *live artifact* (glass card sitting on a paper section). The reader never sees two themes fighting; they see a document with illuminated plates inside it.

**What this is NOT:**
- Generic SaaS glassmorphism (cyan gradients, dark mode, 24px rounded corners, shadow-md)
- A frosted overlay on a dark surface
- Two separate pages bolted together

---

## 1. BLEND RULES — Paper vs Glass Decision Matrix

### 1.1 The Surface Decision Rule

| Surface | Treatment | Rationale |
|---|---|---|
| Page background / base | Paper (`--paper #F7F3EA`) | The dossier's laid paper — permanent ground |
| Section dividers / rules | Hairlines (`--rule`, `--rule-strong`) | Typeset document columns |
| Section bands (alternate) | `--paper-deep #F1EADB` | Slightly aged paper, still the same book |
| Dark bands (`band-dark`) | Ink `--ink #1A1714` | The contract page — authoritative dark leaf |
| **Services cards** | **Glass** | Live, available, currently offered |
| **Products / Our Work cards** | **Glass** | Active software, running today |
| **Why Choose Us rows** | **Paper / ledger** | Settled argument, ruled record |
| Capabilities cards (existing) | Paper (plate) — keep as-is | Categorized skills are a filed record |
| Pull-quote / guarantee band | Paper (or ink band) | A verdict, not an offer |
| Nav bar | Ultra-light glass on paper | Floating document header |

### 1.2 Glass Token Values

These are the ONLY glass values used. No variation outside these tokens.

```css
/* Glass surface fills */
--glass-fill:        rgba(252, 250, 244, 0.64);   /* warm cream-frosted */
--glass-fill-deep:   rgba(241, 234, 219, 0.72);   /* deeper warm glass */
--glass-blur:        backdrop-filter: blur(18px) saturate(1.18);
--glass-border:      1px solid rgba(196, 154, 10, 0.14);
--glass-border-hover: 1px solid rgba(196, 154, 10, 0.34);

/* Inner highlight — top edge of glass card (the "frosted" tell) */
--glass-inner-top: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.44) 0%,
  rgba(255, 255, 255, 0.00) 100%
);
/* Applied as ::before pseudo, height: 1px, top: 0, left/right: 0 */

/* Ambient gold radial — behind glass, upper-right or upper-center */
--glass-ambient: radial-gradient(
  ellipse 72% 54% at 82% -8%,
  rgba(196, 154, 10, 0.09) 0%,
  transparent 68%
);

/* Shadow — layered, not a single drop shadow */
--glass-shadow:
  0 1px 0 rgba(255, 255, 255, 0.64) inset,     /* inner top edge */
  0 1px 3px rgba(26, 23, 20, 0.04),             /* near shadow */
  0 8px 24px -8px rgba(26, 23, 20, 0.12),       /* mid shadow */
  0 24px 64px -24px rgba(26, 23, 20, 0.18);     /* far diffusion */

--glass-shadow-hover:
  0 1px 0 rgba(255, 255, 255, 0.72) inset,
  0 1px 3px rgba(26, 23, 20, 0.05),
  0 12px 32px -8px rgba(26, 23, 20, 0.16),
  0 32px 80px -24px rgba(26, 23, 20, 0.24),
  0 0 0 1px rgba(196, 154, 10, 0.10) inset;     /* gold inner frame on hover */
```

### 1.3 Glass Border-Radius

The paper system uses near-square radii (`--r-sm: 2px`, `--r-md: 3px`). Glass cards use a slightly softer radius to signal their different material, but stay architectural — not bubbly:

```
Glass cards: border-radius: 8px   (one step above the paper plate's 3px)
Glass panels: border-radius: 12px  (for larger panel surfaces only)
```

Never exceed 12px. Never use 16px, 24px, or pill on glass cards. The restraint is the luxury signal.

### 1.4 Backdrop Blur Performance

`backdrop-filter: blur(18px)` is GPU-composited (no JS cost, no layout thrash) if the glass element is on its own compositor layer. Ensure:
- `will-change: transform` or `transform: translateZ(0)` on the glass card wrapper
- Never apply `backdrop-filter` to more than ~6–8 elements visible simultaneously
- On mobile: reduce blur to `blur(12px)` via media query to protect mid-range GPUs

### 1.5 How Gold Ambient Works in the Blend

Gold ambient (`radial-gradient` ellipses, `filter: blur`) is used in two modes:

**Mode A — Section Crown (Paper sections):** The existing `body::before` crown (`radial-gradient ellipse 62% 42% at 50% -6%`) stays. No changes.

**Mode B — Glass Card Halo:** Each glass card gets a faint gold radial at upper-right corner via `::before` pseudo positioned `absolute inset-0 pointer-events-none`. This is CSS-only, zero JS, renders as a composited layer. It brightens on hover (transition: opacity 0.4s).

```css
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: var(--glass-ambient);
  opacity: 0.6;
  transition: opacity 0.4s var(--ease-prospectus);
  z-index: 0;
}
.glass-card:hover::before { opacity: 1; }
```

### 1.6 Graceful Degradation

If `backdrop-filter` is unsupported (Firefox without flag, older Android):
```css
@supports not (backdrop-filter: blur(1px)) {
  .glass-card {
    background: rgba(252, 250, 244, 0.95);  /* nearly opaque warm cream */
    /* border and shadow remain — card still reads expensive */
  }
}
```

---

## 2. PREMIUM TYPOGRAPHY

### 2.1 The Type Hierarchy (Unchanged Foundation, Sharpened Usage)

The Cormorant Garamond + Geist pair is correct and stays. The elevation is in how each face is *used*, not in adding new fonts.

**Cormorant Garamond — the engraving instrument**

| Level | Size | Weight | Tracking | Leading | Notes |
|---|---|---|---|---|---|
| Hero masthead | `clamp(44px, 7vw, 104px)` | 500 (Medium) | `-0.018em` | 1.04 | Thin + large = struck into paper |
| Hero accent word | Inherits | 500 italic | `-0.018em` | 1.04 | Gold shimmer or italic only |
| Section H2 | `clamp(34px, 5vw, 64px)` | 600 | `-0.012em` | 1.08 | Confident but not heavy |
| Sub-head H3 | `clamp(20px, 2.4vw, 28px)` | 600 | `-0.005em` | 1.18 | |
| Pull-quote | `clamp(26px, 3.4vw, 44px)` | 500 italic | `-0.012em` | 1.24 | Verdict voice |
| Section numerals | 52px | 600 italic, gold stroke | — | 0.9 | `.engraved` / `.chapter-num` |

**Geist — the workhorse body**

| Level | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Lead sentence | 18px | 400 | 0 | 1.62 |
| Body | 16px | 400 | 0 | 1.62 |
| Eyebrow | 12px | 600 CAPS | `0.3em` | — |
| Button / label | 12px | 600 CAPS | `0.18em` | — |
| Proof line / meta | 11.5px | 400 | `0.01em` | 1.45 |

**Measure cap:** Body text `max-width: 62ch` on all sections. This is the single highest-leverage "expensive" change — it introduces editorial air and prevents the cramped SaaS look.

### 2.2 Hairlines and Rules as Premium Structural Elements

Rules are not decoration. Every rule earns its place by doing structural work:

- **Section opener rule:** Full-width `1px solid var(--rule-strong)` above every section heading, with the eyebrow sitting `16px` above it. The rule announces the new chapter.
- **Gold crown hairline:** `linear-gradient(to right, transparent, rgba(196,154,10,0.32), transparent)` — used exactly once per section, beneath the section heading, before the content begins. Not every section; only the ones with a strong "I am about to declare something" energy (Services, Why Choose Us).
- **Gold animated underline (`.gold-link`):** Unchanged. Used on all text links. Scale-in from left on hover.
- **Ruled ledger lines:** `border-bottom: 1px solid var(--rule-faint)` on every Why Choose Us row. The paper is lined. The reader's eye tracks down a column.
- **Inter-card hairlines in grid:** When cards tile as a grid, the shared hairlines between them (border-top + border-left on the grid container, cards stripping their own top/left) create a ruled ledger feel rather than floating-cards soup. The Capabilities section already does this correctly.

### 2.3 Tracked Eyebrows as Section Entry

Every section opens with a `.eyebrow` (`GEIST 600 CAPS, letter-spacing: 0.3em, color: var(--gold), font-size: 12px`) + a full-width `rule-strong` hairline. This two-element sequence is the "chapter heading" of the dossier. It is the highest-impact typographic premium tell at zero performance cost.

Pattern:
```
EYEBROW TEXT  ← gold, 12px, 0.3em tracking
─────────────────────────────  ← rule-strong
Big Cormorant headline
accent word in italic gold shimmer
```

---

## 3. SERVICES CARDS — Per-Card Theme System

### 3.1 Glass Treatment for Services

Services are OFFERED, not filed. They use glass cards on a paper section.

**Card structure:**
```
[Glass card, border-radius: 8px]
  ::before — gold ambient radial (upper-right, 9% opacity → 14% on hover)
  Inner top highlight (::after, 1px, rgba(255,255,255,0.44))
  
  [Header row]
    Mark (40×40 SVG, existing hand-drawn vocabulary — keep)
    Tier label (Geist Mono if available, else Geist 600 CAPS, gold, 10px, 0.3em)
  
  [Price / value signal]  ← NEW premium element
    Large Cormorant italic price or value word
  
  [Headline]
    Cormorant 600, 22–24px
  
  [Body]
    Geist 400, 14–15px, var(--ink-soft)
  
  [Rule]  ← hairline faint
  
  [Proof / "What you get" bullets or WHAT YOU GET block]
    Geist 400, 13px, var(--ink-faint)
  
  [CTA]
    btn-ink (existing — ink bg, shine sweep on hover)
```

### 3.2 Per-Card Motif System

Each service tier gets a **unique ambient color temperature** that reflects the tier's character, while all staying in the gold/warm palette (no cyan, no purple, no brand-breaking hues):

**Tier 1 — Audit ($497):**
- Ambient: warm amber-gold `rgba(196, 154, 10, 0.09)` — the classic gold
- Gold top-rule draws in on hover (existing pattern, keep)
- Mark: `MarkReconcile` (the audit's job is finding and resolving)
- Motif concept: **The Ledger Check** — ink column of items, one gold checkmark resolving them. Communicates: we go line by line, we find the gaps.

**Tier 2 — Buildout ($1,500–$5k):**
- Ambient: sage-warm `rgba(105, 115, 90, 0.07)` — the color of production, of real systems
- Mark: `MarkWorkflow` or custom **Construction Mark**: a scaffold/frame being assembled from one ink line, with a gold bolt at the joint. Communicates: we build the real thing.
- Gold top-rule, slightly wider gold border on hover `rgba(196,154,10,0.40)`

**Tier 3 — Ongoing Care:**
- Ambient: deep paper-warm `rgba(90, 84, 76, 0.06)` — permanence, reliability
- Mark: Custom **Compass/Dial Mark**: an ink compass with the needle at gold. Communicates: continuous orientation, always calibrated.
- Subtle green-pass tint on hover border `rgba(47, 93, 58, 0.24)` — the only section where green appears, because "Care" = system health.

### 3.3 Hover / Animation Behavior

On hover, each glass card:
1. Lifts `translateY(-3px)` via spring (stiffness: 300, damping: 24)
2. Gold ambient opacity: 0.6 → 1.0
3. Border: `--glass-border` → `--glass-border-hover`
4. Inner gold frame shadow appears (the inset gold ring in `--glass-shadow-hover`)
5. Gold top-rule draws in left→right over 450ms `var(--ease-prospectus)`
6. Mark's gold stroke brightens (existing `active` prop pattern — keep)

Framer Motion spring config:
```ts
transition: { type: 'spring', stiffness: 300, damping: 24, mass: 0.8 }
whileHover: { y: -3 }
```

---

## 4. OUR WORK / PRODUCTS — Premium Showcase Pattern

### 4.1 Layout Decision

Products use the **editorial chapter pattern** (`.chapter`, `.chapter-rev`) — alternating text + figure rows, each separated by a hairline rule. This is already in globals.css and the right call. The elevation is in treating each product as a **Case Study Plate**, not a feature card.

### 4.2 The Case Study Plate Structure

Each product gets:

**Left column (text):**
```
[Case-file ID]          ← Geist Mono / Geist CAPS, 10px, 0.22em tracking
  e.g. "PROJECT · NO. 01" or "EXHIBIT A"
  
[Engraved numeral]      ← `.chapter-num` (.engraved, gold stroke, 52px italic)
  "01"
  
[Product name]          ← Cormorant 600, clamp(28px, 3vw, 40px)
  
[The win / outcome]     ← Cormorant italic 500, 18–20px, var(--gold)
  One italic sentence capturing the result.
  e.g. "Equipment inspection records that survive OSHA walk-throughs."
  
[Rule faint]
  
[What we did]           ← Geist 400, 15px, var(--ink-soft), max-width: 42ch
  2–3 sentences of honest craft description.
  
[Bullet proof list]     ← existing `.chapter-bullets` pattern (◆ gold bullets)
  
[Tech / stack pill row]   ← `.label-quiet` spaced row, 10.5px
```

**Right column (figure):**
Glass plate containing the product mockup (`mock` primitives) — frosted glass surface with browser chrome or phone chrome, sitting on the paper ground with ambient gold behind it.

```
Glass mock plate:
  backdrop-filter: blur(14px) saturate(1.15)
  background: var(--glass-fill)
  border: var(--glass-border)
  border-radius: 8px
  box-shadow: var(--glass-shadow)
  
  [Mock bar / browser chrome]  ← existing .mock-bar pattern
  [Mock content]               ← existing .mock-table or bento
```

The glass mock plate sits on a subtle gold ambient radial behind it (section-level, not card-level):
```css
.chapter-figure {
  position: relative;
}
.chapter-figure::before {
  content: '';
  position: absolute;
  inset: -20% -10%;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,154,10,0.07) 0%, transparent 70%);
  filter: blur(32px);
  pointer-events: none;
  z-index: -1;
}
```

### 4.3 Product Entrance Animation

Staggered entrance as section scrolls into view:
1. Text column: `FADE_UP` (existing) — `y: 24px → 0, opacity: 0 → 1` over 500ms
2. Figure: `FADE_UP` with `delay: 0.12s` — slightly behind text, creates natural read order
3. The engraved numeral counts up from `00` → `01` over 600ms on entry (CSS counter-increment if no JS, or a simple Framer number animation if that's in scope — keep it optional)

On hover (the glass mock plate):
- Lift `translateY(-2px)`, shadow deepens
- Gold ambient opacity: → 1.0
- Mock bar and inner content stay still — only the outer plate lifts

### 4.4 The Win Line — highest-impact move for Products

The **italic gold "win" sentence** immediately under the product name is the single highest-impact change for this section. Currently products state what they are. The win line states what they proved. Example:

> *"Live in the field. Equipment inspection that passes OSHA review."*

Set in Cormorant italic 500, color `var(--gold)`, size 19px. It reads like a verdict — and in the paper/glass blend, verdicts are set in italic serif.

---

## 5. WHY CHOOSE US — Layout + Motion for the Literary-Warm Voice

### 5.1 The Right Layout: Ruled Ledger (Keep, Sharpen)

The existing ledger layout (engraved numeral | headline + body) is correct for this section. The literary-warm register (Humayun Ahmed / Satyajit Ray / Mujtaba Ali voice — honest, unhurried, direct) needs **air to breathe**, not glass cards. Glass would make the section feel like a feature grid. The ruled ledger makes it feel like a deposition — someone speaking plainly on the record.

**Sharpen the existing pattern:**

1. **Wider numeral column.** Current `120px` → `160px`. The `64px` engraved italic numeral deserves more negative space to its right before the text begins. The emptiness in the numeral column is the luxury signal (Resend's "confidence through emptiness").

2. **Larger vertical rhythm.** Current `padding: 40px 0` per row → `56px 0`. Generous spacing between each reason tells the reader: each point is a chapter, not a bullet. The prose deserves this room.

3. **Gold crown hairline above the heading.** One `.gold-hairline` between the eyebrow + section heading and the ledger. Single use.

4. **Body text at 16px, `var(--ink-soft)`, `max-width: 580px`, `line-height: 1.72`.** The Humayun Ahmed register needs long, honest sentences to land. Line-height of 1.72 (generous, almost poetic) gives each sentence room to breathe. This is the only section on the site with this leading — it signals "this is prose, not a bullet list."

5. **Italic on the conviction clauses.** Within each body paragraph, the key honest claim is set in italic (using `<em>` or a `<cite>` span). Example: *"It's a slower way to win a customer, and the only one that lets us keep you."* Cormorant italic at body size doesn't work (too small for Cormorant); use Geist italic (`font-style: italic`) for emphasis inline. This is a subtle register signal — the craftsman's voice admitting the trade-off.

6. **The trust strip at the bottom.** The existing `['Shipped, not promised', 'Honest about fit', 'Falsifiable guarantee', 'Stays after launch']` strip is excellent. Sharpen: increase spacing between items and use the gold dot separator at `6px × 6px` (up from 4px). Give it `padding-top: 32px` and a `rule-strong` above it — one more hairline before the statement of summary, like a ruling that ends a court record.

### 5.2 One Considered Glass Accent (Optional, Additive)

If the section feels too flat after polish, ONE glass element can be added without breaking the ledger:

A **glass pull-quote panel** before the numbered reasons — a frosted plate containing the section's opening editorial statement, set in Cormorant italic 32px, centered. This appears only on desktop (≥ 900px) and stacks under the heading on mobile.

Example content: *"We'd rather tell you when not to automate than sell you something that collects dust."*

Glass panel spec:
```
background: var(--glass-fill)
backdrop-filter: blur(14px)
border: var(--glass-border)
border-radius: 8px
padding: 40px 48px
box-shadow: var(--glass-shadow)
max-width: 680px
margin: 0 auto 64px
text-align: center
```

This panel is the "illuminated plate" in the dossier's honest argument. It is the only glass in the section — surrounded entirely by paper and ink. The contrast makes it read as a highlighted exhibit.

### 5.3 Motion for Why Choose Us

This is the section that should **not** animate aggressively. The literary voice needs stillness around it.

- Each row: `FADE_UP` (`y: 16px → 0, opacity: 0 → 1`, 450ms, `var(--ease-prospectus)`)
- Stagger: `0.10s` per row (gentle, like turning pages, not a tech demo cascade)
- The engraved numeral: on entry, opacity goes `0 → 1` only (NO count-up, NO slide — the numeral is the settled record, it was always there)
- Hover: `y: -1px` on the row div (barely perceptible lift, signals the row is a unit)
- The gold-hairline rule at bottom of section: draws in left→right on scroll (existing `.gold-link` animation technique applied to the rule width: `scaleX(0) → scaleX(1)`)

---

## 6. MOTION SYSTEM

### 6.1 Philosophy

One sentence: **motion should feel like a document being read, not a demo being played.**

The page never performs for attention. Every animation has exactly one job: telling the reader that new content has arrived and is ready. When the content is established, the motion stops and the stillness becomes the signal of confidence.

### 6.2 Entrance / Scroll-Reveal System

All scroll-reveal animations use `whileInView` with `viewport={{ once: true, margin: '-80px' }}`. Once revealed, the element never re-animates. This is the "settled" behavior — documents don't re-introduce themselves when you scroll back.

**Standard entrance (`FADE_UP`):**
```ts
{
  hidden:  { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
  }
}
```

**Card entrance (staggered grid):**
```ts
// Parent container
STAGGER_CONTAINER: {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

// Individual cards
CARD_ENTRANCE: {
  hidden:  { opacity: 0, y: 16, scale: 0.99 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] }
  }
}
```

The `scale: 0.99 → 1` is subtle (1% change) but adds a dimensionality to glass cards that flat opacity-only reveals lack. It suggests the card emerging from the background, not appearing on top of it.

**Section heading entrance:**
```ts
// Eyebrow fades first, then headline rises
// Achieved via stagger on the SectionHeading component's children
eyebrow:  { hidden: { opacity: 0 },    visible: { opacity: 1, transition: { delay: 0 } } }
headline: { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }
```

### 6.3 Hover System

**Glass card hover (Services, Products):**
```ts
// Framer spring — never linear, never ease
whileHover: { y: -3, scale: 1.0 }   // y only — no scale on glass, it fights the frosted illusion
transition: { type: 'spring', stiffness: 300, damping: 24, mass: 0.8 }

// CSS transitions (not Framer) for color properties:
// border-color, box-shadow, opacity of ::before — these are GPU-composited
// transition: border-color 0.4s var(--ease-prospectus), ...
```

**Plate / paper card hover (Capabilities, Why Choose Us rows):**
```ts
whileHover: { y: -1 }
transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
```

Glass lifts 3px. Paper lifts 1px. The difference signals their material.

### 6.4 Signature Micro-interactions

**Gold top-rule draw-in (Services cards, existing pattern — keep and extend to Products):**
```css
/* scaleX(0) → scaleX(1), transformOrigin: left, 450ms var(--ease-prospectus) */
/* Used on: service card top, product chapter header rule, section gold hairline */
```

**Btn-ink shine sweep (existing — keep exactly):**
The `translateX(-120%) → translateX(120%)` shine on `.btn-ink` hover is already the right micro-moment. Do not remove it.

**Gold-link underline scale-in (existing — keep):**
All text links use the existing scaleX underline pattern.

**Nav glass blur on scroll:**
The nav `backdrop-filter` intensity should increase as the user scrolls. At `scrollY === 0`: `blur(8px) saturate(1.0)`. At `scrollY > 40px`: `blur(18px) saturate(1.18)`. CSS-only via scroll-driven animation or a lightweight `scroll` listener (the Lenis instance already exists — attach one listener).

### 6.5 Parallax (Restrained)

Only the `body::before` gold crown (the large radial at `50% -6%`) gets a gentle parallax: it moves at 0.15× scroll speed, slightly toward the user as they scroll down. This is a CSS scroll-driven animation (no JS overhead):

```css
@supports (animation-timeline: scroll()) {
  body::before {
    animation: parallaxCrown linear both;
    animation-timeline: scroll();
    animation-range: 0 100vh;
  }
  @keyframes parallaxCrown {
    from { transform: translateY(0); }
    to   { transform: translateY(8%); }
  }
}
```

This is the only parallax on the page. Section content does not parallax — it settles into place on scroll-reveal and stays still. Parallax on individual cards creates the "demo feel."

### 6.6 Performance Notes

All motion that costs GPU budget:
- `backdrop-filter`: limit to ≤ 6 simultaneously visible glass elements. Services (3 cards) + Products glass mock (1) + Nav (1) = 5 at any time. Within budget.
- `filter: blur()` on ambient orbs / gold crown: `pointer-events: none`, `position: fixed/absolute`, `z-index: -1`. Already GPU-composited in the existing CSS.
- `transform` + `opacity` changes only via Framer (runs on compositor). No `height`, `width`, `margin`, `top` animated.
- `will-change: transform` on glass cards — add sparingly (not on paper plates).
- The grain overlay (`body::after`, `mix-blend-mode: multiply`) is a static SVG filter at 3.2% opacity — zero animation, zero cost.

### 6.7 prefers-reduced-motion

The existing `@media (prefers-reduced-motion: reduce)` block in globals.css already kills all transitions and animations. Extend it with:

```css
@media (prefers-reduced-motion: reduce) {
  /* existing rules preserved, add: */
  .glass-card { will-change: auto; }
  .glass-card:hover { transform: none !important; }
  [data-framer-motion] { 
    opacity: 1 !important; 
    transform: none !important; 
  }
}
```

Framer Motion 12: use `useReducedMotion()` hook at the root. If true, set all animation durations to `0.01ms` and remove spring configs from `whileHover`.

---

## 7. GLOBAL PREMIUM POLISH — Section-by-Section

### 7.1 Nav

- Glass treatment: `background: rgba(247, 243, 234, 0.72); backdrop-filter: blur(18px) saturate(1.18)`
- `border-bottom: 1px solid var(--rule-strong)` — the document header's edge
- On scroll (`scrollY > 40`): `border-bottom` color lightens to `rgba(196,154,10,0.14)` (gold) — the dossier is "open"

### 7.2 Hero

- Hero heading: Cormorant weight 500 (not 600), `clamp(44px, 7vw, 104px)`, `letter-spacing: -0.018em`, `line-height: 1.04`
- The accent word stays in `.gold-shimmer` italic — this is the one shimmer animation allowed globally. It runs continuously (7s ease-in-out) because it's a single ink word, not a field of color.
- The seal stamp (`.stamp .stamp-live`) presses once on load with a `scale(0.7) → scale(1), rotate(-7deg)` spring. After press: stays still. No loop.
- Hero body copy: max-width `52ch`, `line-height: 1.62`, Geist 400, `var(--ink-soft)`

### 7.3 ProofBar

- Keep existing pattern. Consider replacing the divider dots with hairline rules between items to reinforce the ledger register.

### 7.4 Problem (band-dark)

- Keep ink band, existing gold crown, existing orbs. Possibly add one glass panel for the central pullquote statement — frosted dark glass: `background: rgba(26,23,20,0.72); backdrop-filter: blur(14px)`. Dark glass is intentional contrast — the Problem is a different medium from the Solutions.

### 7.5 Offer / Guarantee Band

- Paper section or ink band. The guarantee line (Cormorant italic, 28–34px) is the most important trust element. Give it `max-width: 22ch`, centered, with full air above and below.
- The `$497` price: **Geist Mono** if available, else Geist 600. Large (40–48px). Engraved style (the number is the contract).

### 7.6 Body Copy Measure — Global

Apply `max-width: 62ch` to all body `<p>` elements site-wide. This single change is the most cost-effective premium upgrade and currently missing.

---

## 8. REFERENCE GALLERY — Concrete Patterns Observed

| Source | Pattern Borrowed |
|---|---|
| Anthropic (anthropic.com) | Warm ivory ground + serif authority + sans body = trust without cold tech |
| Vercel (vercel.com) | Hairline 1px borders + modular grid + mono precision labels |
| Stripe (stripe.com) | Spectacle confined to ONE zone; everywhere else calm + editorial |
| Resend (resend.com) | Confidence through emptiness; small content column in large air |
| Linear (linear.app) | Short-travel scroll reveals (8–16px); whitespace as the primary luxury material |
| Awwwards editorial camp | Grid-disciplined restraint, one striking typographic idea, no kinetic spectacle |
| Heritage print (prospectus) | Ruled columns, chapter numerals, double-frame plates, ruled hairlines as structure |
| Glass precedent (iOS 26 / Apple) | Warm frosted cream glass, not cold white; inner highlight + ambient gold, not gradient soup |

**On glassmorphism done tastefully (the failure modes to avoid):**

The market is full of glass done badly. The failure modes, in order of frequency:
1. **Dark glass on dark surface** — zero paper ground visible, just murky overlay
2. **Cyan/blue tinted glass** — the AI startup cliché
3. **Glass radius too large** (24px+) — looks like a mobile game UI, not a professional tool
4. **Too many glass elements** (entire page) — no visual hierarchy, no "this is special"
5. **Animation on the blur itself** — flickers, repaints, costs GPU

The Verdorian blend avoids all five by: (1) keeping the warm paper ground, (2) using gold ambient not colored tints, (3) capping radius at 8–12px, (4) reserving glass for Services + Products only, and (5) keeping all glass static except the hover y-lift.

---

## 9. BUILD AGENT BRIEF — Highest-Impact Move Per Section

### Services
**Highest-impact move:** Upgrade from paper plates to glass cards (the seven tokens in §1.2) + introduce per-tier ambient color temperature (§3.2). The glass makes the services feel *available now*, not archived.

### Our Work / Products  
**Highest-impact move:** Add the italic gold "win line" immediately under each product name (§4.4). One italic Cormorant sentence stating the outcome changes the section from "features" to "proof."

### Why Choose Us  
**Highest-impact move:** Increase body `line-height` to `1.72` and `max-width` to `580px`, and widen the numeral column to `160px` (§5.1). These three CSS changes alone give the literary-warm voice its necessary room. The prose becomes readable as prose, not a feature list.

### Global  
**Highest-impact move:** Apply `max-width: 62ch` to all body paragraph elements site-wide (§7.6). This single token is the most cost-effective premium upgrade — it creates editorial air on every section simultaneously and is the one change that most separates "template" from "designed."

---

*End of spec. Token values and animation configs above are final. All values use existing CSS custom properties where possible. New tokens defined in §1.2 should be added to `:root` in `app/globals.css` before component work begins.*
