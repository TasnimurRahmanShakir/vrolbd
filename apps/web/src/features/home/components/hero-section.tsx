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

      {/* 🏛️ Prominent Institutional Authority Credential Deck (Client Highlight Requirement) */}
      <motion.div
        variants={trustStripVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        className="relative z-10 w-full border-t border-[#DAC0A3]/30 bg-[#0A1A33]/95 backdrop-blur-xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Micro-header for Authority */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DAC0A3] animate-pulse" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#DAC0A3] font-semibold">
                {language === "bn" ? "অফিসিয়াল অনুমোদন ও আন্তর্জাতিক এক্রেডিটেশন" : "Official Accreditations & Compliance Framework"}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-300">
              <Icon name="verified_user" size={14} className="text-[#DAC0A3]" />
              <span>{language === "bn" ? "১০০% যাচাইকৃত ও সুরক্ষিত" : "100% Verified & Fully Regulated"}</span>
            </div>
          </div>

          {/* 4 Prominent High-Impact Credential Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
            
            {/* Card 1: Govt BMET License */}
            <motion.div
              variants={trustItemVariants}
              className="relative rounded-2xl bg-[#102C57]/80 hover:bg-[#102C57] border border-[#DAC0A3]/30 hover:border-[#DAC0A3] p-4 transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(218,192,163,0.2)] group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DAC0A3]/25 to-[#C5A059]/10 border border-[#DAC0A3]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="verified" size={24} className="text-[#F5E6C4]" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#DAC0A3]/15 text-[#F5E6C4] border border-[#DAC0A3]/30">
                  {language === "bn" ? "সরকারি অনুমোদন" : "Govt. Licensed"}
                </span>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base tracking-tight group-hover:text-[#F5E6C4] transition-colors">
                  {language === "bn" ? "বিএমইটি লাইসেন্স আরএল-১১৭৩" : "BMET License RL-1173"}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                  {language === "bn" 
                    ? "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয় অনুমোদিত" 
                    : "Ministry of Expatriates' Welfare & Overseas Employment"}
                </p>
              </div>
            </motion.div>

            {/* Card 2: ISO 9001:2015 */}
            <motion.div
              variants={trustItemVariants}
              className="relative rounded-2xl bg-[#102C57]/80 hover:bg-[#102C57] border border-[#DAC0A3]/30 hover:border-[#DAC0A3] p-4 transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(218,192,163,0.2)] group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DAC0A3]/25 to-[#C5A059]/10 border border-[#DAC0A3]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="military_tech" size={24} className="text-[#F5E6C4]" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#DAC0A3]/15 text-[#F5E6C4] border border-[#DAC0A3]/30">
                  {language === "bn" ? "আন্তর্জাতিক মানদণ্ড" : "ISO Accredited"}
                </span>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base tracking-tight group-hover:text-[#F5E6C4] transition-colors">
                  {language === "bn" ? "আইএসও ৯০০১:২০১৫ সার্টিফাইড" : "ISO 9001:2015 Accredited"}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                  {language === "bn"
                    ? "আন্তর্জাতিক মানসম্পন্ন জনশক্তি ব্যবস্থাপনা ও যাচাইকরণ"
                    : "Quality Management System for Global Recruitment"}
                </p>
              </div>
            </motion.div>

            {/* Card 3: ILO Fair Framework */}
            <motion.div
              variants={trustItemVariants}
              className="relative rounded-2xl bg-[#102C57]/80 hover:bg-[#102C57] border border-[#DAC0A3]/30 hover:border-[#DAC0A3] p-4 transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(218,192,163,0.2)] group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DAC0A3]/25 to-[#C5A059]/10 border border-[#DAC0A3]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="shield" size={24} className="text-[#F5E6C4]" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#DAC0A3]/15 text-[#F5E6C4] border border-[#DAC0A3]/30">
                  {language === "bn" ? "নৈতিক নিয়োগ" : "Ethical Standard"}
                </span>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base tracking-tight group-hover:text-[#F5E6C4] transition-colors">
                  {language === "bn" ? "আইএলও নৈতিক নিয়োগ ফ্রেমওয়ার্ক" : "ILO Fair Recruitment Framework"}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                  {language === "bn"
                    ? "শোষণমুক্ত, স্বচ্ছ ও ন্যায়সংগত আন্তর্জাতিক রিক্রুটমেন্ট"
                    : "Zero-Exploitation, Transparent & Fair Employment Practices"}
                </p>
              </div>
            </motion.div>

            {/* Card 4: 100% Embassy Attested */}
            <motion.div
              variants={trustItemVariants}
              className="relative rounded-2xl bg-[#102C57]/80 hover:bg-[#102C57] border border-[#DAC0A3]/30 hover:border-[#DAC0A3] p-4 transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_-5px_rgba(218,192,163,0.2)] group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DAC0A3]/25 to-[#C5A059]/10 border border-[#DAC0A3]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="flight_takeoff" size={24} className="text-[#F5E6C4]" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#DAC0A3]/15 text-[#F5E6C4] border border-[#DAC0A3]/30">
                  {language === "bn" ? "আইনি নিশ্চয়তা" : "100% Attested"}
                </span>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base tracking-tight group-hover:text-[#F5E6C4] transition-colors">
                  {language === "bn" ? "দূতাবাস সত্যায়িত ভিসা" : "100% Embassy Attested Visas"}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                  {language === "bn"
                    ? "পররাষ্ট্র মন্ত্রণালয় ও সংশ্লিষ্ট দূতাবাস অনুমোদিত বৈধ চুক্তি"
                    : "MoFA & Embassy Verified Work Contracts & Visas"}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
