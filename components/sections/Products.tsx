'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  IconMicrophone,
  IconFileText,
  IconQrcode,
  IconCompass,
  IconShield,
  IconArrowRight,
  IconPlus,
} from '@tabler/icons-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/motion'
import { PRODUCTS } from '@/lib/utils'
import type { Product } from '@/lib/utils'
import { cn } from '@/lib/utils'

type TablerIcon = React.ComponentType<{
  size?: number
  stroke?: number
  style?: React.CSSProperties
}>

const ICON_MAP: Record<string, TablerIcon> = {
  IconMicrophone,
  IconFileText,
  IconQrcode,
  IconCompass,
  IconShield,
}

// Per-card atmospheric gradients — Raycast technique, positioned at 25-30% from top
const CARD_GRADIENTS: Record<string, string> = {
  VoicePencil:   'radial-gradient(94% 78% at 50% 29%, rgba(139,92,246,0.25), rgba(20,21,22,0.95))',
  ChangeOrderAI: 'radial-gradient(90% 75% at 50% 25%, rgba(34,211,238,0.20), rgba(20,21,22,0.95))',
  QRSafePro:     'radial-gradient(86% 70% at 50% 30%, rgba(16,185,129,0.25), rgba(20,21,22,0.95))',
  WithinYouAI:   'radial-gradient(90% 75% at 50% 25%, rgba(99,102,241,0.20), rgba(20,21,22,0.95))',
  PolicyPilot:   'radial-gradient(85% 70% at 50% 30%, rgba(245,158,11,0.18), rgba(20,21,22,0.95))',
}

// Desktop grid column/row spans per product
const GRID_STYLES: Record<string, React.CSSProperties> = {
  VoicePencil:   { gridColumn: '1 / 9',  gridRow: '1 / 2' },
  ChangeOrderAI: { gridColumn: '9 / 13', gridRow: '1 / 2' },
  QRSafePro:     { gridColumn: '1 / 6',  gridRow: '2 / 3' },
  WithinYouAI:   { gridColumn: '6 / 13', gridRow: '2 / 3' },
  PolicyPilot:   { gridColumn: '1 / 7',  gridRow: '3 / 4' },
}

const MIN_HEIGHTS: Record<string, string> = {
  VoicePencil:   '380px',
  ChangeOrderAI: '280px',
  QRSafePro:     '280px',
  WithinYouAI:   '280px',
  PolicyPilot:   '240px',
}

// ─── Shared card inner content ────────────────────────────────────────────────
interface CardContentProps {
  product: Product
  isFeatured?: boolean
}

function CardContent({ product, isFeatured = false }: CardContentProps) {
  const IconComponent = ICON_MAP[product.icon]

  return (
    <div
      style={{
        padding: '28px',
        height: '100%',
        minHeight: MIN_HEIGHTS[product.name] ?? '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        opacity: product.status === 'in-development' ? 0.85 : 1,
      }}
    >
      {/* iOS pill badge for VoicePencil */}
      {isFeatured && (
        <div
          aria-label="iOS App"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '4px 12px',
            borderRadius: 'var(--r-pill)',
            background: 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.25)',
            fontFamily: 'monospace',
            fontSize: '10px',
            fontWeight: 500,
            color: 'var(--c-plasma)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          iOS App
        </div>
      )}

      {/* Animated waveform for VoicePencil */}
      {isFeatured && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '64px',
            right: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            opacity: 0.18,
          }}
        >
          {[16, 28, 20, 36, 24, 40, 20, 32, 18, 28, 16, 24].map((h, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: `${h}px`,
                borderRadius: '2px',
                background: 'var(--c-plasma)',
                animation: `waveBar 1.4s ease-in-out ${(i * 0.08).toFixed(2)}s infinite alternate`,
              }}
            />
          ))}
          <style>{`
            @keyframes waveBar {
              0%   { transform: scaleY(0.5); }
              100% { transform: scaleY(1.2); }
            }
            @media (prefers-reduced-motion: reduce) {
              @keyframes waveBar { 0%, 100% { transform: none; } }
            }
          `}</style>
        </div>
      )}

      {/* Top section */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--r-md)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {IconComponent && (
              <IconComponent
                size={24}
                stroke={1.5}
                style={{ color: 'var(--c-plasma)' }}
              />
            )}
          </div>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--c-text-3)',
              paddingTop: '4px',
            }}
          >
            {product.category}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-geist), sans-serif',
            fontWeight: 600,
            fontSize: '22px',
            color: 'var(--c-text-1)',
            letterSpacing: 'var(--track-h3)',
            margin: '0 0 8px',
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '14px',
            color: 'var(--c-text-2)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {product.tagline}
        </p>
      </div>

      {/* Bottom: status + link arrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '24px',
        }}
      >
        <StatusBadge status={product.status} />

        {product.status === 'live' && product.href && (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name} — opens in new tab`}
            className="product-arrow-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--r-pill)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--c-text-2)',
              opacity: 0,
              transition: 'opacity 0.2s var(--ease-expo), transform 0.2s var(--ease-expo)',
              transform: 'translateX(-6px)',
            }}
          >
            <IconArrowRight size={16} stroke={2} aria-hidden="true" />
          </a>
        )}
      </div>

      <style>{`
        .group:hover .product-arrow-link {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  )
}

// ─── Ghost card ───────────────────────────────────────────────────────────────
function GhostCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(className)}
      style={{
        minHeight: '240px',
        borderRadius: 'var(--r-lg)',
        border: '1px dashed rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '28px',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: 'var(--r-pill)',
          border: '1px dashed rgba(255,255,255,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconPlus size={20} stroke={1.5} style={{ color: 'var(--c-text-3)' }} />
      </div>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'var(--c-text-3)',
          textAlign: 'center',
          letterSpacing: '0.05em',
          margin: 0,
        }}
      >
        More products in the forge...
      </p>
    </div>
  )
}

// ─── Compact card for tablet/mobile ──────────────────────────────────────────
function CompactCard({ product, showTilt }: { product: Product; showTilt: boolean }) {
  const IconComponent = ICON_MAP[product.icon]
  const cardGradient = CARD_GRADIENTS[product.name]
  return (
    <GlassCard tilt={showTilt} style={cardGradient ? { background: cardGradient } : undefined}>
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          opacity: product.status === 'in-development' ? 0.85 : 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            aria-hidden="true"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--r-md)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {IconComponent && (
              <IconComponent
                size={22}
                stroke={1.5}
                style={{ color: 'var(--c-plasma)' }}
              />
            )}
          </div>
          <div>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--c-text-3)',
                display: 'block',
                marginBottom: '2px',
              }}
            >
              {product.category}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                color: 'var(--c-text-1)',
                margin: 0,
                letterSpacing: 'var(--track-h3)',
              }}
            >
              {product.name}
            </h3>
          </div>
        </div>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--c-text-2)',
            lineHeight: 1.5,
            margin: 0,
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          {product.tagline}
        </p>
        <StatusBadge status={product.status} />
      </div>
    </GlassCard>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Products() {
  const featured = PRODUCTS[0]!
  const rest = PRODUCTS.slice(1)

  return (
    <section
      id="products"
      aria-label="Our Products"
      style={{
        paddingTop: '160px',
        paddingBottom: '160px',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.div variants={FADE_UP}>
              <SectionLabel>OUR PRODUCTS</SectionLabel>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              style={{
                fontFamily: 'var(--font-geist), sans-serif',
                fontWeight: 700,
                fontSize: 'var(--t-h2)',
                color: 'var(--c-text-1)',
                letterSpacing: 'var(--track-h2)',
                margin: 0,
                lineHeight: 1.1,
                textWrap: 'balance',
              }}
            >
              What we&apos;re building
            </motion.h2>
          </div>

          {/* Bento grid */}
          <motion.div variants={FADE_UP}>
            {/* ── Desktop 12-col grid (lg+) ── */}
            <div
              className="hidden lg:grid"
              style={{
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '16px',
              }}
            >
              {/* Featured: VoicePencil col-span-8 */}
              <div style={{ ...GRID_STYLES[featured.name] }}>
                <GlassCard tilt style={{ background: CARD_GRADIENTS[featured.name] }}>
                  <CardContent product={featured} isFeatured />
                </GlassCard>
              </div>

              {/* Rest of products */}
              {rest.map((product) => (
                <div key={product.name} style={{ ...GRID_STYLES[product.name] }}>
                  <GlassCard tilt style={{ background: CARD_GRADIENTS[product.name] }}>
                    <CardContent product={product} />
                  </GlassCard>
                </div>
              ))}

              {/* Ghost "more coming" card — col 7-12, row 3 */}
              <div
                style={{
                  gridColumn: '7 / 13',
                  gridRow: '3 / 4',
                  minHeight: '240px',
                }}
              >
                <GhostCard />
              </div>
            </div>

            {/* ── Tablet 2-col grid (md, hidden on lg+) ── */}
            <div
              className="hidden md:grid lg:hidden"
              style={{
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              {PRODUCTS.map((product) => (
                <CompactCard key={product.name} product={product} showTilt />
              ))}
            </div>

            {/* ── Mobile 1-col (hidden on md+) ── */}
            <div
              className="flex md:hidden flex-col"
              style={{ gap: '16px' }}
            >
              {PRODUCTS.map((product) => (
                <CompactCard key={product.name} product={product} showTilt={false} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
