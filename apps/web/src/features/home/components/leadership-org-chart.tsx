"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useLanguageStore } from "@/stores/language.store";
import { LEADERSHIP_PROFILES, VisionaryLeader } from "../data/leadership.data";
import {
  leadershipContainerVariants,
  chairmanRevealVariants,
  directorItemVariants,
  VIEWPORT_CONFIG,
} from "@/lib/motion";

// Custom badge theme mapping for distinct visual clarity
const BADGE_THEMES: Record<string, { bg: string; text: string; border: string }> = {
  syed_miraj_hossain: {
    bg: "bg-[#C5A059]/15",
    text: "text-[#8C6A2B]",
    border: "border-[#C5A059]/30",
  },
  sirajul_islam_lipon: {
    bg: "bg-blue-500/10",
    text: "text-blue-700",
    border: "border-blue-500/25",
  },
  md_shahbul_islam: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-700",
    border: "border-indigo-500/25",
  },
  md_mukul_hossain: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-700",
    border: "border-emerald-500/25",
  },
  md_saidur_rahman: {
    bg: "bg-amber-500/10",
    text: "text-amber-800",
    border: "border-amber-500/25",
  },
};

const LOCATIONS: Record<string, { en: string; bn: string }> = {
  syed_miraj_hossain: { en: "Dhaka Central Bureau", bn: "ঢাকা সেন্ট্রাল ব্যুরো" },
  sirajul_islam_lipon: { en: "International Corridors", bn: "আন্তর্জাতিক করিডোর" },
  md_shahbul_islam: { en: "Board Secretariat", bn: "বোর্ড সচিবালয়" },
  md_mukul_hossain: { en: "Headquarters Operations", bn: "হেডকোয়ার্টার অপারেশনস" },
  md_saidur_rahman: { en: "GCC & Europe Affairs", bn: "ইউরোপ ও মধ্যপ্রাচ্য ব্যুরো" },
};

export function LeadershipOrgChart() {
  const { language } = useLanguageStore();
  const [selectedLeader, setSelectedLeader] = useState<VisionaryLeader | null>(null);

  // Chairman is top of hierarchy
  const chairman: VisionaryLeader =
    LEADERSHIP_PROFILES.find((l) => l.id === "syed_miraj_hossain") ?? LEADERSHIP_PROFILES[0]!;

  // Preferred diplomatic hierarchy order for executive board:
  // 1. Founding President, 2. Vice Chairman, 3. Managing Director, 4. CEO
  const EXECUTIVE_ORDER = [
    "sirajul_islam_lipon",
    "md_shahbul_islam",
    "md_mukul_hossain",
    "md_saidur_rahman",
  ];

  const executiveBoard = EXECUTIVE_ORDER.map(
    (id) => LEADERSHIP_PROFILES.find((l) => l.id === id)!
  ).filter(Boolean);

  if (!chairman) return null;

  return (
    <motion.section
      id="leadership"
      variants={leadershipContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative"
    >
      {/* 🏷️ Section Header: Left-Aligned for Consistent Brand Identity */}
      <div className="text-left max-w-2xl mb-6 sm:mb-8">
        <SectionHeader
          tag={language === "bn" ? "বোর্ড নেতৃত্ব" : "Leadership Team"}
          tagIcon="groups"
          heading={
            language === "bn"
              ? "পরিচালনা পর্ষদ ও শীর্ষ নেতৃত্ব"
              : "Our Board of Directors & Leadership"
          }
          subheading={
            language === "bn"
              ? "অভিজ্ঞ নেতৃত্বের দিকনির্দেশনায় আমরা শতভাগ স্বচ্ছতা ও আস্থার সাথে দক্ষ জনশক্তিকে পৌঁছে দিচ্ছি আন্তর্জাতিক কর্মক্ষেত্রে।"
              : "Meet the dedicated leaders guiding our ethical recruitment and connecting skilled talent with trusted international employers."
          }
        />
      </div>

      {/* 🧭 Interactive Org Chart Canvas */}
      <div className="relative w-full rounded-3xl bg-slate-50/70 border border-slate-200/80 p-4 sm:p-6 lg:p-8 shadow-xs overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#080C14 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Chart Header Bar / Meta signals */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#080C14]">
              {language === "bn" ? "অফিসিয়াল বোর্ড চার্ট" : "Official Board of Directors"}
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#8C6A2B]">
              RL-1173
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
            <Icon name="touch_app" size={15} className="text-[#C5A059] shrink-0" />
            <span>
              {language === "bn"
                ? "প্রোফাইল দেখতে যে কোনো কার্ডে ক্লিক করুন"
                : "Click any profile to view statement & pillars"}
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────────────────
            📱 1. MOBILE VIEW (<640px): Adaptive Vertical Hierarchy Tree
        ───────────────────────────────────────────────────────────────────────────── */}
        <div className="block sm:hidden pt-4 pb-2">
          {/* Level 1: Chairman Apex Card */}
          <div className="flex flex-col items-center relative">
            <div
              onClick={() => setSelectedLeader(chairman)}
              className="w-full max-w-[280px] bg-white rounded-2xl pt-11 pb-4 px-4 text-center border border-[#C5A059]/50 shadow-sm relative cursor-pointer active:scale-[0.99] transition-transform"
            >
              {/* Circular Avatar with Gold Ring */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-md ring-4 ring-white bg-[#0A192F]">
                <Image
                  src={chairman.image}
                  alt={language === "bn" ? chairman.nameBn : chairman.nameEn}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h4 className="text-base font-bold font-serif text-[#0A192F] leading-tight">
                {language === "bn" ? chairman.nameBn : chairman.nameEn}
              </h4>
              <p className="text-[11px] font-semibold text-slate-500 mt-0.5 mb-1.5">
                {language === "bn" ? chairman.roleBn : chairman.roleEn}
              </p>
              <div className="mb-1.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#8C6A2B] border border-[#C5A059]/30">
                  {language === "bn" ? chairman.badgeBn : chairman.badgeEn}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <Icon name="location_on" size={12} className="text-slate-400" />
                <span>{language === "bn" ? LOCATIONS[chairman.id]?.bn : LOCATIONS[chairman.id]?.en}</span>
              </div>

              {/* Profile Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-white ring-2 ring-white border border-slate-200/90 shadow-2xs px-2.5 py-0.5 rounded-full text-[9px] font-bold text-slate-500 flex items-center gap-1">
                <span>{language === "bn" ? "প্রোফাইল" : "Profile"}</span>
                <Icon name="expand_more" size={12} />
              </div>
            </div>

            {/* Vertical stem connecting Chairman down */}
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* 🔀 Connecting Bridge (Horizontally transitions from center to left spine in clear open space) */}
          <div className="relative h-6 -mt-0.5">
            {/* Horizontal branch across from center (right-1/2) to left spine (left-[15px]) */}
            <div className="absolute left-[15px] right-1/2 top-0 h-0.5 bg-slate-300" />
            {/* Turn down from horizontal elbow directly into the spine */}
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-slate-300" />
          </div>

          {/* Vertical Connecting Spine running down to 4 Executive Members */}
          <div className="relative pl-5 space-y-3">
            {/* Continuous Vertical Spine Line on the left, terminating neatly at the last card's center */}
            <div className="absolute left-[15px] top-0 bottom-8 w-0.5 bg-slate-300" />

            {executiveBoard.map((leader) => {
              const theme = BADGE_THEMES[leader.id] || { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-200" };
              const location = LOCATIONS[leader.id] || { en: "Dhaka Head Office", bn: "ঢাকা প্রধান কার্যালয়" };

              return (
                <div key={leader.id} className="relative flex items-center">
                  {/* Horizontal branch line connecting from spine into card */}
                  <div className="w-3.5 h-0.5 bg-slate-300 shrink-0" />

                  {/* Sleek Horizontal Executive List Card (Full, Non-Truncated Layout) */}
                  <div
                    onClick={() => setSelectedLeader(leader)}
                    className="flex-1 ml-1.5 bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs active:scale-[0.99] hover:border-[#C5A059] transition-all cursor-pointer flex items-center gap-3"
                  >
                    {/* Circular Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#C5A059]/60 shadow-xs ring-2 ring-white bg-[#0A192F] self-start mt-0.5">
                      <Image
                        src={leader.image}
                        alt={language === "bn" ? leader.nameBn : leader.nameEn}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Info: Name, Role, Badge & Location all flow without truncating */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold font-serif text-[#0A192F] leading-snug">
                            {language === "bn" ? leader.nameBn : leader.nameEn}
                          </h4>
                          <p className="text-[11px] font-semibold text-slate-500 mt-0.5 leading-tight">
                            {language === "bn" ? leader.roleBn : leader.roleEn}
                          </p>
                        </div>
                        <Icon name="chevron_right" size={16} className="text-slate-400 shrink-0 mt-0.5" />
                      </div>

                      {/* Meta Row: Department Badge + Location Pin */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${theme.bg} ${theme.text} ${theme.border}`}
                        >
                          {language === "bn" ? leader.badgeBn : leader.badgeEn}
                        </span>
                        <span className="text-[9.5px] text-slate-400 flex items-center gap-1">
                          <Icon name="location_on" size={10} className="text-slate-400 shrink-0" />
                          <span>{language === "bn" ? location.bn : location.en}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────────────────
            📱💻 2. TABLET VIEW (640px - 1023px): 2×2 Sub-Tree
        ───────────────────────────────────────────────────────────────────────────── */}
        <div className="hidden sm:block lg:hidden pt-8 pb-6">
          <div className="flex flex-col items-center">
            {/* Level 1: Chairman */}
            <div className="relative z-10 mb-8">
              <OrgNodeCard
                leader={chairman}
                language={language}
                onSelect={() => setSelectedLeader(chairman)}
                isApex
              />
              {/* Stem down to 2-column connector */}
              <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 w-0.5 h-[26px] bg-slate-300 pointer-events-none" />
            </div>

            {/* 2-Column Connector Bus */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-[540px] h-6 mb-8">
              <div className="relative h-full flex justify-center">
                <div className="absolute top-0 left-1/2 -right-4 h-0.5 bg-slate-300" />
                <div className="w-0.5 h-full bg-slate-300" />
              </div>
              <div className="relative h-full flex justify-center">
                <div className="absolute top-0 -left-4 right-1/2 h-0.5 bg-slate-300" />
                <div className="w-0.5 h-full bg-slate-300" />
              </div>
            </div>

            {/* Level 2: 2×2 Grid of Executive Board Directors */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-[540px]">
              {executiveBoard.map((leader) => (
                <div key={leader.id} className="flex justify-center">
                  <OrgNodeCard
                    leader={leader}
                    language={language}
                    onSelect={() => setSelectedLeader(leader)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────────────────
            🖥️ 3. DESKTOP VIEW (≥1024px): Full 1×4 Tree
        ───────────────────────────────────────────────────────────────────────────── */}
        <div className="hidden lg:block pt-10 pb-6">
          <div className="flex flex-col items-center">
            
            {/* Level 1: Chairman Apex Card */}
            <motion.div variants={chairmanRevealVariants} className="relative z-10 mt-1 mb-9">
              <OrgNodeCard
                leader={chairman}
                language={language}
                onSelect={() => setSelectedLeader(chairman)}
                isApex
              />

              {/* Connecting Stem going down from Chairman (emerging cleanly below the Profile pill) */}
              <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 w-0.5 h-[28px] bg-slate-300 pointer-events-none" />
            </motion.div>

            {/* Connecting Lines: Horizontal Bus */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-4 gap-6 w-full max-w-[880px] h-7 mb-8 origin-center"
            >
              {executiveBoard.map((leader, i) => (
                <div key={leader.id} className="relative h-full flex justify-center">
                  {/* Continuous horizontal connector bar spanning from center of Col 1 to center of Col 4 */}
                  {i === 0 && (
                    <div className="absolute top-0 left-1/2 -right-3 h-0.5 bg-slate-300" />
                  )}
                  {(i === 1 || i === 2) && (
                    <div className="absolute top-0 -left-3 -right-3 h-0.5 bg-slate-300" />
                  )}
                  {i === 3 && (
                    <div className="absolute top-0 -left-3 right-1/2 h-0.5 bg-slate-300" />
                  )}

                  {/* Vertical Drop line centered with mathematical precision over each card */}
                  <div className="w-0.5 h-full bg-slate-300" />
                </div>
              ))}
            </motion.div>

            {/* Level 2: 4 Executive Board Directors */}
            <div className="grid grid-cols-4 gap-6 w-full max-w-[880px]">
              {executiveBoard.map((leader) => (
                <motion.div key={leader.id} variants={directorItemVariants} className="flex justify-center">
                  <OrgNodeCard
                    leader={leader}
                    language={language}
                    onSelect={() => setSelectedLeader(leader)}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* 📋 Modal Dialog: Expanded Executive Profile */}
      <AnimatePresence>
        {selectedLeader && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <Icon name="close" size={20} />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
                {/* Portrait */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-md shrink-0 bg-[#0A192F]">
                  <Image
                    src={selectedLeader.image}
                    alt={language === "bn" ? selectedLeader.nameBn : selectedLeader.nameEn}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Titles */}
                <div className="text-center sm:text-left min-w-0">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                      BADGE_THEMES[selectedLeader.id]?.bg || "bg-slate-100"
                    } ${BADGE_THEMES[selectedLeader.id]?.text || "text-slate-700"} border ${
                      BADGE_THEMES[selectedLeader.id]?.border || "border-slate-200"
                    }`}
                  >
                    {language === "bn" ? selectedLeader.badgeBn : selectedLeader.badgeEn}
                  </span>

                  <h3 className="text-xl font-bold font-serif text-[#0A192F] leading-tight">
                    {language === "bn" ? selectedLeader.nameBn : selectedLeader.nameEn}
                  </h3>

                  <p className="text-xs font-semibold text-[#8C6A2B] mt-0.5">
                    {language === "bn" ? selectedLeader.roleBn : selectedLeader.roleEn}
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === "bn" ? selectedLeader.titleBn : selectedLeader.titleEn}
                  </p>
                </div>
              </div>

              {/* Statement Quote */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 relative">
                <Icon
                  name="format_quote"
                  size={24}
                  className="text-[#C5A059] opacity-30 absolute top-2 right-2 pointer-events-none"
                />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed pr-4">
                  &ldquo;
                  {language === "bn"
                    ? selectedLeader.statementBn
                    : selectedLeader.statementEn}
                  &rdquo;
                </p>
              </div>

              {/* Strategic Pillars */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  {language === "bn" ? "মূল নীতিনির্ধারণী দায়িত্ব" : "Strategic Responsibilities"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(language === "bn"
                    ? selectedLeader.pillarsBn
                    : selectedLeader.pillarsEn
                  ).map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{pillar}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Institutional Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Vision Recruiting & Overseas Ltd.</span>
                <span className="font-semibold text-slate-600">BMET License RL-1173</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🃏 Individual Node Card (Styled exactly after reference image)
// ─────────────────────────────────────────────────────────────────────────────
interface OrgNodeCardProps {
  leader: VisionaryLeader;
  language: string;
  onSelect: () => void;
  isApex?: boolean;
}

function OrgNodeCard({ leader, language, onSelect, isApex = false }: OrgNodeCardProps) {
  const theme = BADGE_THEMES[leader.id] || {
    bg: "bg-slate-100",
    text: "text-slate-700",
    border: "border-slate-200",
  };
  const location = LOCATIONS[leader.id] || { en: "Dhaka Head Office", bn: "ঢাকা প্রধান কার্যালয়" };

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer transition-all duration-300 group ${
        isApex ? "w-64 sm:w-72" : "w-52 sm:w-56"
      }`}
    >
      {/* Card Body */}
      <div
        className={`bg-white rounded-2xl pt-12 pb-5 px-4 text-center border transition-all duration-300 relative ${
          isApex
            ? "border-[#C5A059]/40 shadow-md hover:shadow-xl hover:border-[#C5A059]"
            : "border-slate-200 shadow-sm hover:shadow-lg hover:border-[#C5A059]/60 hover:-translate-y-1"
        }`}
      >
        {/* 👤 Floating Circular Avatar Overlapping Top Edge */}
        <div
          className={`absolute -top-10 left-1/2 -translate-x-1/2 z-10 rounded-full overflow-hidden border-2 shadow-md ring-4 ring-white bg-[#080C14] transition-transform duration-300 group-hover:scale-105 ${
            isApex
              ? "w-20 h-20 border-[#C5A059]"
              : "w-18 h-18 border-slate-300 group-hover:border-[#C5A059]"
          }`}
        >
          <Image
            src={leader.image}
            alt={language === "bn" ? leader.nameBn : leader.nameEn}
            width={120}
            height={120}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name */}
        <h4 className="text-sm sm:text-base font-bold font-serif text-[#080C14] group-hover:text-[#8C6A2B] transition-colors leading-tight">
          {language === "bn" ? leader.nameBn : leader.nameEn}
        </h4>

        {/* Role Designation */}
        <p className="text-[11px] font-semibold text-slate-500 mt-0.5 mb-2 line-clamp-1">
          {language === "bn" ? leader.roleBn : leader.roleEn}
        </p>

        {/* Focus Department Pill Badge */}
        <div className="mb-2.5">
          <span
            className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${theme.bg} ${theme.text} ${theme.border}`}
          >
            {language === "bn" ? leader.badgeBn : leader.badgeEn}
          </span>
        </div>

        {/* Location Pin */}
        <div className="flex items-center justify-center gap-1 text-[10.5px] text-slate-400 font-medium">
          <Icon name="location_on" size={13} className="text-slate-400" />
          <span className="truncate">
            {language === "bn" ? location.bn : location.en}
          </span>
        </div>

        {/* Bottom Expand Indicator / Interactive Pill (Matching reference image) */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-white ring-2 ring-white border border-slate-200/90 shadow-xs group-hover:border-[#C5A059] px-2.5 py-0.5 rounded-full text-[9.5px] font-bold text-slate-500 group-hover:text-[#8C6A2B] flex items-center gap-1 transition-colors whitespace-nowrap">
          <span>{language === "bn" ? "প্রোফাইল" : "Profile"}</span>
          <Icon name="expand_more" size={12} />
        </div>
      </div>
    </div>
  );
}
