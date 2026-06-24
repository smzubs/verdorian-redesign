# Research — Premium Web Animation & Interaction Tech (2026)

**Thread:** T5 — `ai-automation-researcher`
**Target site:** Verdorian (verdorian.com) — premium AI-automation studio
**Existing stack (must stay compatible):** Next.js 16.2.2 (App Router, RSC), React 19.2.4, TypeScript strict, Tailwind CSS 4, Framer Motion 12.6.3, `@studio-freight/lenis` 1.0.42, Bun, self-hosted `next/font`.
**Date:** 2026-06-23 · **Cost cap:** ~15 sources, 9 used.

> **Label key:** **Fact** = verified version/spec via registry/docs this session · **Estimate** = informed approximation from cited sources · **Assumption** = inference not directly verified.
> Bundle costs are gzipped approximations unless noted.

---

## 0. Version reality check (verify first — the repo is on renamed/old packages)

Two packages in the current `package.json` are on **deprecated names**. Both should be migrated before building new animation work.

| In repo now | Status | Current package + version | Source |
| --- | --- | --- | --- |
| `@studio-freight/lenis@1.0.42` | **DEPRECATED** name (Studio Freight → Darkroom Engineering) | **`lenis@1.3.23`** — ships vanilla engine + React wrapper at `lenis/react` | **Fact** (npm registry API, this session) |
| `framer-motion@12.6.3` | Still published & valid, but the project was **renamed to `motion`** mid-2025 | **`framer-motion@12.41.0`** == **`motion@12.41.0`** (same release line; import from `motion/react`) | **Fact** (npm registry API, this session) |

Other libraries evaluated (latest published, verified via npm registry API this session — **Fact**):

| Library | Latest version | Use |
| --- | --- | --- |
| `lenis` | 1.3.23 | smooth scroll |
| `motion` / `framer-motion` | 12.41.0 | spring/physics + scroll reveals + orchestration |
| `@react-spring/web` | 10.1.1 | spring physics (alternative) |
| `@lottiefiles/dotlottie-react` | 0.19.4 | Lottie/dotLottie player |
| `@rive-app/react-canvas` | 4.29.2 | Rive runtime (WASM) |
| `@react-three/fiber` | 9.6.1 | React Three Fiber (3D) |
| `@splinetool/react-spline` | 4.1.0 | Spline 3D embed |

> **Migration note (Assumption, low-risk):** the repo's `overrides` pin `motion-dom`/`motion-utils` to `12.6.3`. Bumping `framer-motion` to `12.41.0` means bumping those overrides in lockstep (or dropping the overrides). React 19 is fully supported on the 12.x line — **Fact** (Motion docs).

---

## 1. Smooth scroll — Lenis

- **Pick:** **`lenis@1.3.23`** + `ReactLenis` from `lenis/react`. **Fact** (npm; Darkroom Engineering README).
- **Good for:** the buttery "expensive" inertial scroll that anchors a premium studio feel; gives Motion's `useScroll` a smoothed source so scroll-linked reveals don't jitter on trackpads. The `root` prop mounts one global instance usable via `useLenis` anywhere. **Fact** (lenis/react README).
- **React 19 / Next 16 compatibility:** Compatible. The `lenis` package is framework-agnostic JS; the React wrapper is a thin context provider — no React-version ceiling. Mount it in a `'use client'` boundary high in the App Router tree. **Assumption** (no React-19 peer cap found; widely used on Next 15/16 per 2026 guides) — *flagged in "Could not verify."*
- **Tradeoffs / jank watch:**
  - Hijacks native scroll → must respect `prefers-reduced-motion`. Disable by **not rendering** `ReactLenis` (cleanest) or passing `options={{ lerp: 1 }}` for instant scroll. Gate on `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. **Fact** (2026 setup guides).
  - Can fight anchor-link / focus scrolling and `scroll-into-view` — test keyboard nav.
  - Don't pair with CSS `scroll-snap` carelessly; they compete.
- **Bundle cost:** **Estimate** ~3–5 KB gzip core (very light; it's a lerp loop on `requestAnimationFrame`, not a physics engine).

---

## 2. Scroll-driven reveals — Motion `whileInView`/`useScroll` vs native CSS `animation-timeline`

**Option A — Motion (`framer-motion`/`motion`) JS, already in repo.**
- `whileInView` (IntersectionObserver-backed) for one-shot reveals; `useScroll` + `useTransform` for continuous scroll-linked parallax/progress. v12 added **hardware-accelerated scroll animations** and `ViewTimeline` support. **Fact** (Motion changelog).
- **Good for:** orchestrated, staggered, spring-eased reveals with full JS control and easy reduced-motion gating.
- **Cost:** zero marginal bundle (already shipped). Slight main-thread cost for `useScroll` transforms, mitigated by Lenis smoothing + GPU-only props (`transform`/`opacity`).

**Option B — Native CSS scroll-driven animations (`animation-timeline: view()` / `scroll()`).**
- **Browser support (2026):** Chrome/Edge/Opera 115+ full; **Safari 26 full** (added in 18); **Firefox** implemented but **behind a flag** (`layout.css.scroll-driven-animations.enabled`), default in Nightly. **Fact** (MDN, caniuse, Chrome blog).
- **Good for:** zero-JS, off-main-thread reveals — cheapest possible perf for simple fade/slide-in-on-enter.
- **Tradeoffs:** Firefox stable still needs a JS/Motion fallback today; progressive-enhancement is clean (unknown property is ignored → element rests in `animation-fill-mode` end state). **Fact** (MDN).

**Recommendation:** Use **Motion's `whileInView`/`useScroll`** as the primary (consistent cross-browser, reduced-motion trivial, already in bundle). Optionally hand the *simplest* decorative fades to native CSS `view()` as a zero-cost progressive enhancement — but don't make hero/critical reveals depend on it while Firefox stable is flagged.

---

## 3. Spring / physics motion

- **Pick:** **Motion springs** (`framer-motion@12.41.0`) — `transition={{ type: 'spring' }}`, `useSpring`, `useTransform`. Already the repo's motion engine; v12 has full React 19 / concurrent-rendering support and oklch/color-mix interpolation. **Fact** (Motion changelog/docs).
- **Alternatives:**
  - **`@react-spring/web@10.1.1`** — excellent imperative spring physics, but **adds a second animation runtime** (~15–25 KB gzip **Estimate**) for capability Motion already covers. Not justified here.
  - **Motion One** — the tiny (~5 KB) WAAPI-based core; redundant once full Motion is in the bundle.
- **Verdict:** No new dependency. Use Motion springs for hover-lift on glass cards, the hero's element entrances, and `useSpring`-smoothed pointer/parallax.

---

## 4. Hero "product-in-action" vector animation (tasks clearing / data flowing / report generating)

This is the centerpiece decision. Three viable routes:

| Approach | Weight (gzip) | Control / "expensive" feel | Reduced-motion | Verdict for Verdorian |
| --- | --- | --- | --- | --- |
| **SVG + Motion orchestration** (hand-built React/SVG, animated with Motion) | **~0 KB** marginal (Motion already loaded) | **Highest** — every checkmark, row, data dot is a real DOM/SVG node you can stagger, theme to brand cyan, and sync to scroll/state. Reads as bespoke, not stock. | Trivial — wrap motion in a reduced-motion guard, render static end-state | ✅ **RECOMMENDED** |
| **Lottie / dotLottie** (`@lottiefiles/dotlottie-react@0.19.4`) | runtime ~50–60 KB gzip + the `.lottie`/JSON asset; dotLottie compresses 40–70% | Designer-driven (After Effects/Lottie Creator); good polish, **limited runtime control** unless using new state machines | Pause/segment via player API | ⚠️ Only if a designer delivers a polished file; adds runtime weight |
| **Rive** (`@rive-app/react-canvas@4.29.2`) | **~200 KB gzip WASM runtime** + small `.riv` | **Best interactivity** (state machines: idle→processing→done, GPU canvas, bypasses layout) | State-driven; can hold idle | ⚠️ Overkill weight for a non-interactive hero; great if the hero becomes a stateful interactive toy |

**Weight/perf facts:** Rive web runtime ≈ **200 KB gzip** (WASM) vs lottie-web ≈ **60 KB**; CSS/SVG ≈ **0**. dotLottie shrinks the asset 40–70% but not the runtime. **Estimate/Fact** (PkgPulse, Callstack 2026 comparisons).

**Why SVG + Motion for this site:** the hero concept (tasks clearing, data flowing, a report assembling) is a *staged, deterministic, on-brand* sequence, not a free-form illustration or an interactive widget. Hand-built SVG animated with the Motion already in the bundle gives the most control over the Electric-Cyan palette, the cleanest `prefers-reduced-motion` story (swap to a finished static "report" frame), zero added KB, and a genuinely bespoke look that won't read as a stock Lottie. Reserve **Rive** only if the hero is later upgraded into something the user can interact with (drag/trigger), and **Lottie** only if a finished designer file lands.

---

## 5. Optional 3D — React Three Fiber / Spline

- **R3F `@react-three/fiber@9.6.1`** (v9 = React 19 compatible — **Fact**, registry): full WebGL via three.js. **Cost: heavy** — three.js core alone ~150 KB+ gzip, plus drei helpers, plus the GPU/battery cost and SSR/hydration care in App Router.
- **Spline `@splinetool/react-spline@4.1.0`:** fastest path to a 3D scene (no-code editor) but ships a large runtime + remote scene payload; can be **MB-scale** over the wire. **Estimate.**
- **Verdict for Verdorian:** **Skip for v1.** Not weight-justified for a performance-budgeted marketing site whose premium feel is achievable with glass + Lenis + SVG/Motion. If 3D is ever wanted, lazy-load it below the fold behind an IntersectionObserver and a reduced-data/`prefers-reduced-motion` guard. **Assumption.**

---

## 6. View Transitions API (Next.js 16)

- **Cross-document (MPA):** native CSS `@view-transition { navigation: auto; }`. Browser support is Chromium + Safari; not relevant for an App Router SPA-style site. **Fact** (MDN).
- **Same-document in Next 16:** **first-class but experimental.** Enable `experimental.viewTransition: true` in `next.config.js`, then `import { unstable_ViewTransition as ViewTransition } from 'react'`. Route navigations auto-trigger transitions; `<Link transitionTypes={[...]}>` is supported. Used in production by the Vercel dashboard, but the `unstable_` prefix signals API/import-path churn — **Next docs say not recommended for production yet.** **Fact** (Next.js 16.2 docs/blog).
- **Verdict:** Optional polish. Safe for subtle cross-page fades if you accept the experimental flag and a likely rename later. Keep transitions short and reduced-motion-gated. Don't make core UX depend on it for v1.

---

## ✅ RECOMMENDED STACK (lean · jank-free · reduced-motion-safe)

| Layer | Pick (verified version) | One-line rationale | Bundle cost |
| --- | --- | --- | --- |
| **Smooth scroll** | **`lenis@1.3.23`** (`lenis/react`, replace deprecated `@studio-freight/lenis`) | Premium inertial scroll + smooths Motion's `useScroll`; gate off for reduced-motion | ~3–5 KB gzip (**Estimate**) |
| **Reveals / scroll-link** | **Motion `whileInView` + `useScroll`** (`framer-motion@12.41.0`) | Cross-browser, reduced-motion-trivial, already loaded; native CSS `view()` as optional zero-cost enhancement | ~0 marginal |
| **Spring/physics** | **Motion springs** (`useSpring`/spring transitions) | Covers hover-lift, entrances, parallax — no second runtime (skip react-spring) | ~0 marginal |
| **Hero "product-in-action"** | **Hand-built SVG orchestrated with Motion** | Max control, on-brand cyan, bespoke feel, cleanest reduced-motion static fallback, 0 added KB | ~0 marginal |
| **3D** | **None for v1** (R3F 9.6.1 / Spline 4.1.0 available if ever justified) | Not weight-justified; glass + SVG/Motion delivers the premium feel | — (deferred) |
| **View Transitions** | **Optional** — Next 16 `experimental.viewTransition` + React `unstable_ViewTransition` | Subtle page-fade polish only; experimental/`unstable_`, don't make UX depend on it | ~0 |

**Net new weight vs current repo:** effectively **~0** — the plan *removes* the deprecated Lenis package for the maintained one and bumps Motion; it adds **no new animation runtime**. The whole premium motion system rides on Lenis + the Motion already in `package.json`.

**Global guardrails (apply everywhere):**
1. One top-level `prefers-reduced-motion` check → disable Lenis (don't render `ReactLenis`), short-circuit hero loop to its static end-frame, drop reveal animations to instant.
2. Animate **only `transform` + `opacity`** (GPU-composited) — never `width`/`top`/`box-shadow` in motion.
3. Lenis + `useScroll` is the only allowed scroll-position source — don't also bind raw `scroll` listeners.

---

## Could not verify (open items)

- **Exact `lenis` React-19 peer range:** no explicit React-19 peer cap was located in the registry metadata this session; compatibility is inferred from broad Next 15/16 + React 19 community usage in 2026 guides. Confirm with `bun why lenis` / peer-deps after install. (**Assumption**, low risk.)
- **`react-spring@10.1.1` and R3F `9.6.1` gzip figures** are approximations from general three.js/spring sizing, not measured against this exact build. (**Estimate**.)
- **npm web pages returned HTTP 403** to the fetch tool; all version numbers above were instead taken from the **npm registry JSON API** (`registry.npmjs.org/<pkg>/latest`) this session — treat those as **Fact**, dated 2026-06-23.

---

## Sources

- [lenis — npm](https://www.npmjs.com/package/lenis) (version via registry API)
- [lenis/react README — Darkroom Engineering (GitHub)](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md)
- [framer-motion / motion — npm](https://www.npmjs.com/package/framer-motion) (version via registry API)
- [Motion changelog — motion.dev](https://motion.dev/changelog)
- [Motion & Framer Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide)
- [CSS scroll-driven animations — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [animation-timeline: scroll() — caniuse](https://caniuse.com/mdn-css_properties_animation-timeline_scroll)
- [CSS scroll-triggered animations — Chrome for Developers](https://developer.chrome.com/blog/scroll-triggered-animations)
- [Lottie vs Rive vs CSS Animations 2026 — PkgPulse](https://www.pkgpulse.com/guides/lottie-vs-rive-vs-css-animations-web-animation-formats-2026)
- [Lottie vs Rive — Callstack](https://www.callstack.com/blog/lottie-vs-rive-optimizing-mobile-app-animation)
- [next.config.js: viewTransition — Next.js docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)
- [Next.js 16.2 release blog](https://nextjs.org/blog/next-16-2)
