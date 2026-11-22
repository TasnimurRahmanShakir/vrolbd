"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useHeroSection } from "../hooks/use-hero-section";
import { InteractiveWorldMap } from "./interactive-world-map";
import {
  heroContainerVariants,
  heroChildVariants,
  heroMapVariants,
  trustStripVariants,
  trustItemVariants,
  VIEWPORT_CONFIG,
} from "@/lib/motion";

export function HeroSection() {
  const { t, language } = useHeroSection();

  return (
    <section className="relative w-full min-h-[auto] lg:min-h-[82vh] flex flex-col justify-between overflow-hidden bg-[#080C14] text-white">
      {/* 🖼️ Full-Page / Full-Bleed Cinematic Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/jobs-career-hero.webp"
            alt="Bangladeshi skilled technical workforce and engineers on an active infrastructure project site"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[68%_center] brightness-[0.72] contrast-[1.12]"
          />
        </motion.div>

        {/* 🎨 Cinematic Dark Charcoal Scrim Overlay (Matching VROLBD Logo Palette) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/95 via-40% md:via-[#080C14]/80 md:via-60% to-[#080C14]/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/85 via-transparent via-50% to-[#080C14]" />

        {/* Ambient Subtle Gold Aura */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C5A059]/10 rounded-full blur-[160px]" />
      </div>

      {/* 🏛️ Main Editorial Content + Interactive Map (50/50 Split) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column (50%): Brand, Headline, Value Prop & CTAs */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 text-left"
          >
            {/* Official Company Logo Badge */}
            <motion.div variants={heroChildVariants} className="relative inline-block mb-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-black/60 backdrop-blur-md p-2.5 sm:p-3 shadow-2xl max-w-[210px] sm:max-w-[250px]">
                <Image
                  src="/vrolbd-logo.png"
                  alt="Vision Recruiting & Overseas Ltd. (RL-1173)"
                  width={240}
                  height={70}
                  priority
                  className="w-full h-auto object-contain brightness-105"
                />
              </div>
            </motion.div>

            {/* Commanding Editorial Headline (Balanced 2-Line Architecture) */}
            <motion.div variants={heroChildVariants} className="space-y-3.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold tracking-tight text-white font-serif leading-[1.15] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                <span className="block">{t.headlineLead}</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6C4] via-[#C5A059] to-[#AA853C]">
                  {t.headlineAccent}
                </span>
              </h1>

              {/* Single Punchy Sentence Description */}
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {t.description}
              </p>
            </motion.div>

            {/* Dual Action Gateways (Standard 8px Scale) */}
            <motion.div variants={heroChildVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href="#b2b-gateway"
                className="py-3 px-6 sm:py-3.5 sm:px-7 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 text-[#080C14] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/25 hover:scale-[1.02] transition-all cursor-pointer min-h-[46px]"
              >
                <Icon name="corporate_fare" size={18} />
                <span>{t.b2bRequest}</span>
              </a>

              <Link
                href="/jobs"
                className="py-3 px-6 sm:py-3.5 sm:px-7 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C5A059]/60 text-slate-100 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-all cursor-pointer min-h-[46px] backdrop-blur-sm"
              >
                <Icon name="travel_explore" size={18} className="text-[#C5A059]" />
                <span>{t.exploreRequisitions}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (50%): Interactive Global Talent Radar Map */}
          <motion.div
            variants={heroMapVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-white/15 hover:border-[#C5A059]/30 transition-colors bg-[#0B0F19]/65 backdrop-blur-md p-2.5 sm:p-3 shadow-2xl shadow-black/60 relative overflow-hidden">
              <InteractiveWorldMap variant="hero" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 🏛️ Full-Width Institutional Credential Ribbon with Sequential Reveal */}
      <motion.div
        variants={trustStripVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        className="relative z-10 w-full border-t border-white/15 bg-[#060910]/95 backdrop-blur-md py-4 sm:py-4.5 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-x-6 gap-y-4 sm:gap-6 text-sm">
          <motion.div variants={trustItemVariants} className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Icon name="verified" size={20} className="text-[#E2CB8F]" />
            </div>
            <span className="font-bold text-white text-xs sm:text-sm lg:text-[15px] tracking-tight">
              {language === "bn" ? "বিএমইটি লাইসেন্স আরএল-১১৭৩" : "BMET License RL-1173"}
            </span>
          </motion.div>

          <div className="hidden lg:block h-7 w-px bg-white/20" />

          <motion.div variants={trustItemVariants} className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Icon name="military_tech" size={20} className="text-[#E2CB8F]" />
            </div>
            <span className="font-bold text-white text-xs sm:text-sm lg:text-[15px] tracking-tight">
              {language === "bn" ? "আইএসও ৯০০১:২০১৫ সার্টিফাইড" : "ISO 9001:2015 Accredited"}
            </span>
          </motion.div>

          <div className="hidden lg:block h-7 w-px bg-white/20" />

          <motion.div variants={trustItemVariants} className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Icon name="shield" size={20} className="text-[#E2CB8F]" />
            </div>
            <span className="font-bold text-white text-xs sm:text-sm lg:text-[15px] tracking-tight">
              {language === "bn" ? "আইএলও নৈতিক নিয়োগ ফ্রেমওয়ার্ক" : "Ethical Recruitment Framework"}
            </span>
          </motion.div>

          <div className="hidden lg:block h-7 w-px bg-white/20" />

          <motion.div variants={trustItemVariants} className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Icon name="flight_takeoff" size={20} className="text-[#E2CB8F]" />
            </div>
            <span className="font-bold text-white text-xs sm:text-sm lg:text-[15px] tracking-tight">
              {language === "bn" ? "দূতাবাস সত্যায়িত করিডোর" : "100% Embassy Attested Corridors"}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
