/**
 * VROLBD Centralized Design Token System
 * Edit colors here or in apps/web/app/globals.css to update the color palette everywhere across the site.
 */

export const THEME_TOKENS = {
  // Light Canvas Zone (Natural Paper Foundation)
  canvasBase: "var(--canvas-base, #F7F4F3)",
  canvasZebra: "var(--canvas-zebra, #EAE6E4)",
  cardSurface: "var(--card-surface, #FFFFFF)",

  // Brand & Contrast Foundation
  brandBlack: "var(--brand-black, #080708)",
  brandGold: "var(--brand-gold, #FDC600)",
  brandSlate: "var(--brand-slate, #B2B6BD)",

  // High-Contrast Editorial Typography
  textHeading: "var(--brand-black, #080708)",
  textBody: "#334155",
  textMuted: "#64748B",
  textGold: "var(--brand-gold, #FDC600)",

  // Border & Dividers
  borderSubtle: "rgba(178, 182, 189, 0.45)",
  borderGold: "rgba(253, 198, 0, 0.4)",
} as const;
