/**
 * Premium Animation & Motion System for Vision Recruiting & Overseas Ltd. (VROLBD)
 * Easing, timing, and 30% viewport trigger coordinates.
 */

import { Variants } from "framer-motion";

// Luxury editorial cubic-bezier: smooth, dignified, authoritative, non-bouncy
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
export const EASE_SUBTLE = [0.16, 1, 0.3, 1] as const;

// Smooth Exploratory Viewport Trigger (triggers as soon as section approaches view, eliminating blank lag)
export const VIEWPORT_CONFIG = {
  once: true,
  margin: "0px 0px -80px 0px",
  amount: 0.15,
} as const;

// Stagger & timing tokens
export const TIMING = {
  fast: 0.35,
  medium: 0.55,
  slow: 0.75,
  stagger: 0.08,
} as const;

/**
 * Section 01: Hero Layered Entrance
 */
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const heroChildVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
};

export const heroMapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: EASE_PREMIUM,
      delay: 0.25,
    },
  },
};

/**
 * Section 02: Trust Strip Sequential Reveal
 */
export const trustStripVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_SUBTLE,
      staggerChildren: 0.09,
    },
  },
};

export const trustItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Section 03: Leadership Hierarchical Reveal
 */
export const leadershipContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export const chairmanRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
};

export const treeStemVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

export const directorItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Section 04: Specializations Editorial Asymmetrical Reveal
 */
export const editorialGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const featuredPanelVariants: Variants = {
  hidden: { opacity: 0, x: -30, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.75,
      ease: EASE_PREMIUM,
    },
  },
};

export const supportingCardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Section 05: Recruitment Journey Pathway
 */
export const journeyContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const journeyStepVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Section 06: Live Job Openings Horizontal Stagger
 */
export const jobListContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const jobRowVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Section 07: B2B Enterprise CTA Split Reveal
 */
export const ctaLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const ctaFormVariants: Variants = {
  hidden: { opacity: 0, x: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
      delay: 0.1,
    },
  },
};
