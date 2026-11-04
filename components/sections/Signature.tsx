'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SIG_RINGS, SIG_VIEWBOX as VB } from '@/components/signature/rings'
import { EASE_PROSPECTUS } from '@/lib/motion'

// Brand sign-off before contact: the V mark inside its own contour field (rings traced
// from the V silhouette, as on the brand poster), with a slow metallic sheen across the mark.

const MARK = '/brand/verdorian-mark.webp'

export default function Signature() {
  return (
    <section id="signature" aria-label="Verdorian Technologies" className="sig">
      <style>{`
        .sig {
          position: relative;
          overflow: hidden;
          padding: clamp(72px, 9vw, 120px) 0 clamp(56px, 7vw, 96px);
          display: flex;
          flex-direction: column;
          align-items: center;
          /* quiet field: hides the site-wide contour lines so only the V's own rings show */
          background: radial-gradient(ellipse 52% 50% at 50% 42%, rgba(14, 10, 13, 0.96) 42%, rgba(14, 10, 13, 0.7) 62%, transparent 80%);
        }
        .sig-stage {
          position: relative;
          width: min(660px, 112vw);
          margin: -4% 0;
        }
        .sig-stage::before {            /* rose bloom behind the mark */
          content: '';
          position: absolute;
          inset: 18% 22%;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(195, 112, 128, 0.28), rgba(126, 48, 66, 0.12) 55%, transparent);
          filter: blur(30px);
          pointer-events: none;
        }
        .sig-svg { position: relative; display: block; width: 100%; height: auto; overflow: visible; }

        .sig-rings path {
          fill: none;
          stroke: #C37080;
          stroke-width: 1.15;
          vector-effect: non-scaling-stroke;
          opacity: 0.16;
          animation: sigRipple 7s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.32s);
        }
        /* outer rings fade toward the page so the field has no hard edge */
        .sig-rings { -webkit-mask-image: radial-gradient(closest-side, #000 62%, transparent 100%); mask-image: radial-gradient(closest-side, #000 62%, transparent 100%); }
        @keyframes sigRipple {
          0%, 100% { opacity: 0.14; }
          35%      { opacity: 0.62; stroke: #E3A3B0; }
          60%      { opacity: 0.22; }
        }

        .sig-mark { filter: drop-shadow(0 18px 40px rgba(126, 48, 66, 0.55)) drop-shadow(0 0 24px rgba(195, 112, 128, 0.25)); }
        .sig-sheen { animation: sigSheen 6.5s cubic-bezier(0.45, 0, 0.25, 1) infinite; }
        @keyframes sigSheen {
          0%, 30% { transform: translateX(-110%); }
          70%, 100% { transform: translateX(110%); }
        }
        .sig-float { animation: sigFloat 8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes sigFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        .sig-word { position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; }
        .sig-name {
          font-family: var(--font-tech), system-ui, sans-serif;
          font-size: clamp(20px, 2.8vw, 36px);
          letter-spacing: 0.42em;
          padding-left: 0.42em;           /* balance the trailing tracking so the word sits centred */
          color: var(--ink);
          line-height: 1;
        }
        .sig-tech {
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 500;
          letter-spacing: 0.62em;
          padding-left: 0.62em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }

        @media (prefers-reduced-motion: reduce) {
          .sig-rings path, .sig-sheen, .sig-float { animation: none !important; }
          .sig-rings path { opacity: 0.32; }
          .sig-sheen { display: none; }
        }
      `}</style>

      <motion.div
        className="sig-stage"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: EASE_PROSPECTUS }}
      >
        <svg
          className="sig-svg"
          viewBox={`0 0 ${VB.width} ${VB.height}`}
          role="img"
          aria-label="The Verdorian V mark"
        >
          <defs>
            <mask id="sig-v-mask" style={{ maskType: 'alpha' } as React.CSSProperties}>
              <image href={MARK} x={VB.markX} y={VB.markY} width={VB.markW} height={VB.markH} />
            </mask>
            <linearGradient id="sig-sheen-grad" x1="0" y1="0" x2="1" y2="0.35">
              <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="0.65" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="sig-rings" aria-hidden="true">
            {SIG_RINGS.map((d, i) => (
              <path key={i} d={d} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </g>

          <g className="sig-float">
            <image className="sig-mark" href={MARK} x={VB.markX} y={VB.markY} width={VB.markW} height={VB.markH} />
            <g mask="url(#sig-v-mask)" aria-hidden="true">
              <rect
                className="sig-sheen"
                x={VB.markX}
                y={VB.markY}
                width={VB.markW}
                height={VB.markH}
                fill="url(#sig-sheen-grad)"
                style={{ mixBlendMode: 'soft-light' }}
              />
            </g>
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="sig-word"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE_PROSPECTUS }}
      >
        <span className="sig-name">VERDORIAN</span>
        <span className="sig-tech">Technologies</span>
      </motion.div>
    </section>
  )
}
