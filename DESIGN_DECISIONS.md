# Design Decisions — Verdorian Technologies Landing Page

## Typography: Why Syne

Syne is a geometric display typeface designed by Lucas Descroix at the Bonjour Monde type foundry. At heavy weights (700-800), its constructed, angular letterforms create the "engineered" aesthetic that matches the VOID FORGE concept — software forged from pure intelligence. Unlike Space Grotesk or Inter (which feel generic in dark-mode portfolios), Syne has distinctive character that makes headlines feel deliberate and owned.

Paired with DM Sans for body text, the contrast is intentional: geometric precision in headlines, warm readability in paragraphs. JetBrains Mono is reserved for exactly three contexts — section labels, status badges, and the tech stack — to prevent overuse of monospace as a crutch.

## Smooth Scroll: Why Lenis Over Native

Native CSS `scroll-behavior: smooth` provides no control over easing or lerp values. Lenis (by Studio Freight) gives us:
- `lerp: 0.08` for a buttery, cinematic feel that matches the animation language
- Programmatic scroll-to with offset (80px for sticky nav compensation)
- Integration with Framer Motion's scroll-linked animations
- Proper cleanup and reduced-motion respect

The tradeoff is ~8KB additional JS, justified by the qualitative improvement in scroll feel that's immediately noticeable on award-quality sites.

## The "Plasma Materialization" Letter Reveal

The hero title reveals character-by-character through a live particle canvas. Each character transitions from `opacity: 0, y: 20, filter: blur(8px)` to its final state with a 25ms stagger. The total reveal is ~2.4 seconds — under the 2.8s threshold where loading animations start feeling slow.

The effect works because the particle field is already alive when the text appears through it, creating the illusion that the words are being "forged" from the particles. This is entirely CSS + Framer Motion — no WebGL or Three.js needed.

When `prefers-reduced-motion` is active, the reveal is replaced with an instant opacity fade per line.

## Card Tilt: Why ±5deg (Not 8)

Initial designs used ±8 degrees of rotation on product card hover. Testing revealed this felt toy-like — the card rotation was competing with the content for attention. At ±5 degrees with a 1000px perspective, the tilt is noticeable enough to feel interactive but subtle enough to keep focus on the product information. The holographic grid overlay (20px repeating gradient) adds depth without overwhelming.

Tilt is desktop-only — touch devices get standard tap interactions.

## Bento Grid: Asymmetric by Design

The product grid uses intentionally asymmetric column spans:
- Row 1: 8 + 4 (VoicePencil featured, ChangeOrderAI compact)
- Row 2: QRSafePro + PolicyPilot (clean 4-item bento after WithinYouAI removal)
- Row 3: 6 + 6 (PolicyPilot + ghost card)

Uniform grids (4/4/4) read as templates. The asymmetry signals intentional design decisions and creates visual rhythm that keeps the eye moving. Each row has different proportions, preventing the section from feeling repetitive.

## Performance Tradeoffs

### No Three.js
The particle field uses Canvas 2D, not WebGL. For 80 particles with connection lines, Canvas 2D is more than sufficient and avoids the ~150KB Three.js bundle. The particles are simple circles with linear motion — no shader complexity needed.

### No Custom Cursor
The v2 design included a custom plasma cursor with magnetic snap. It was cut because:
1. Custom cursors are a 2022-2024 dark portfolio cliche
2. They add ~2KB of always-running JS for questionable UX value
3. Magnetic snap on every interactive element is exhausting
4. Screen reader and keyboard users get no benefit

### Particle Count: 80 Desktop, 35 Mobile
Canvas 2D performance scales linearly with particle count. At 80 particles with connection line checks (O(n²) comparisons), desktop maintains 60fps. Mobile devices (which also have smaller viewports making dense particles unnecessary) use 35 particles to stay performant.

## Color: Why Violet (#8B5CF6) Over Indigo (#6366F1)

The original palette used Tailwind's Indigo 500 — the most common accent in dark-mode sites. Shifting to Violet 500 (#8B5CF6) creates a more distinctive three-way gradient with cyan (#22D3EE) and amber (#F59E0B). The violet-to-cyan gradient has more visual energy than indigo-to-cyan, and it's less likely to be confused with every other developer portfolio.

## Hero Copy: "We don't consult. We create. Then we ship."

The original "We Build the Future of Software" was replaced because:
1. It's generic — every agency and bootcamp portfolio uses a variant
2. It says nothing specific about Verdorian
3. It doesn't match the VOID FORGE aesthetic (forging implies creation, not building)

"We don't consult. We create. Then we ship." works because:
1. It differentiates (not a consultancy)
2. It has rhythm (three beats, escalating action)
3. The periods give the letter-by-letter animation natural pauses
4. It matches the founder's actual process (solo builder, ships fast)
