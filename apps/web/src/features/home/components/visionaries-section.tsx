"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useLanguageStore, translations } from "@/stores/language.store";
import { LEADERSHIP_PROFILES } from "../data/leadership.data";

export function VisionariesSection() {
  const { language } = useLanguageStore();
  const t = translations[language].visionaries;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);

  // Real-time bidirectional scroll tracking with closest-to-center physics
  useEffect(() => {
    const handleScroll = () => {
      const focusPoint = window.innerHeight * 0.45;
      let minDistance = Infinity;
      let closestIndex = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - focusPoint);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveLeaderIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToLeader = (index: number) => {
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="about"
      className="py-10 md:py-16 px-4 sm:px-6 max-w-[1440px] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
        
        {/* 📌 Left Column: Sticky Asymmetric Pinned Context (top-28) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit space-y-6 self-start z-10">
          <SectionHeader
            tag={t.tag}
            tagIcon="military_tech"
            heading={t.heading}
            subheading={t.subheading}
          />

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
            {language === "bn"
              ? "ভিশন রিক্রুটিং-এর পরিচালনা পর্ষদ নীতিগত সততা, কূটনৈতিক সম্পর্ক এবং আন্তর্জাতিক মানের পেশাদারিত্বের সমন্বয়ে বাংলাদেশের দক্ষ জনশক্তিকে বিশ্বমঞ্চের মেগাপ্রজেক্টে নিয়োজিত করতে অঙ্গীকারবদ্ধ।"
              : "The governance architecture of Vision Recruiting is steered by distinguished diplomatic, operations, and technical pioneers committed to establishing sovereign ethical migration standards and elevating Bangladeshi talent across global mega-projects."}
          </p>

          {/* 🎯 Real-Time Synced Interactive Board of Directors Roster */}
          <div className="hidden lg:block pt-2 space-y-3">
            <div className="text-[11px] uppercase tracking-widest font-bold text-[#8C6A2B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span>
                {language === "bn" ? "বোর্ড সদস্য তালিকা (ক্লিক ও স্ক্রল)" : "Board of Directors Roster"}
              </span>
            </div>

            {/* Interactive Director Navigation */}
            <div className="space-y-2 pl-3 border-l-2 border-slate-200">
              {LEADERSHIP_PROFILES.map((leader, i) => {
                const isActive = activeLeaderIndex === i;
                return (
                  <button
                    key={leader.id}
                    type="button"
                    onClick={() => scrollToLeader(i)}
                    className={`w-full text-left text-xs transition-all duration-300 flex items-center justify-between gap-2 p-1.5 rounded-lg cursor-pointer ${
                      isActive
                        ? "bg-[#0A192F] text-[#C5A059] font-bold shadow-xs translate-x-1"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/70"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                          isActive ? "bg-[#C5A059] ring-2 ring-[#C5A059]/30" : "bg-slate-300"
                        }`}
                      />
                      <span className="truncate">
                        {language === "bn" ? leader.nameBn : leader.nameEn}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full shrink-0 ${
                        isActive
                          ? "bg-[#C5A059]/20 text-[#C5A059] font-bold border border-[#C5A059]/30"
                          : "text-slate-400 bg-slate-100"
                      }`}
                    >
                      {language === "bn" ? leader.roleBn : leader.roleEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Governance Trust Badges */}
          <div className="pt-2 space-y-2.5">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#8C6A2B] flex items-center justify-center shrink-0">
                <Icon name="verified" size={18} />
              </span>
              <div>
                <span className="block text-xs font-bold text-[#0A192F]">
                  {language === "bn" ? "১০০% নিরাপদ ও স্বচ্ছ নিয়োগ" : "100% Ethical Employer-Pay Recruitment"}
                </span>
                <span className="block text-[10px] text-slate-500">
                  {language === "bn" ? "আন্তর্জাতিক আইএলও ও বিএমইটি সনদপ্রাপ্ত" : "ILO Fair Migration & BMET Compliant"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#8C6A2B] flex items-center justify-center shrink-0">
                <Icon name="account_balance" size={18} />
              </span>
              <div>
                <span className="block text-xs font-bold text-[#0A192F]">
                  {language === "bn" ? "সরকারি ও দূতাবাস অনুমোদন" : "Direct Diplomatic & Consular Attestation"}
                </span>
                <span className="block text-[10px] text-slate-500">
                  {language === "bn" ? "লাইসেন্স ১১৭৩ • দ্রুত ভিসা যাচাই" : "License 1173 • Fast-Track Verification"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200 shadow-xs">
              <span className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#8C6A2B] flex items-center justify-center shrink-0">
                <Icon name="bolt" size={18} />
              </span>
              <div>
                <span className="block text-xs font-bold text-[#0A192F]">
                  {language === "bn" ? "১৪ দিনে দ্রুত মোবিলাইজেশন" : "14-Day Rapid Turnkey Mobilization"}
                </span>
                <span className="block text-[10px] text-slate-500">
                  {language === "bn" ? "আধুনিক ট্রেড সেন্টার ও সার্বক্ষণিক সাপোর্ট" : "Turnkey Trade Testing & Airport Logistics"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 📜 Right Column: Scrolling Roster of 5 Board Leaders */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {LEADERSHIP_PROFILES.map((leader, idx) => (
            <motion.div
              key={leader.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.85,
                delay: idx * 0.08,
              }}
              whileHover={{ y: -4 }}
              className={`p-6 sm:p-8 rounded-3xl bg-[#0F243B] text-white border transition-all duration-300 relative group overflow-hidden ${
                activeLeaderIndex === idx
                  ? "border-[#C5A059] shadow-[0_25px_60px_rgba(197,160,89,0.28)]"
                  : "border-[#C5A059]/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-[#C5A059]/70"
              }`}
            >
              {/* Top Accent Gold Trim Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C]" />

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                
                {/* 🎭 Cinematic Portrait: Grayscale by default ➔ Color + Scale 1.05x on Hover or Active */}
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 relative shrink-0 shadow-lg bg-[#0A192F] transition-all duration-500 ${
                    activeLeaderIndex === idx
                      ? "border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                      : "border-[#C5A059]/40 group-hover:border-[#C5A059]"
                  }`}
                >
                  <Image
                    src={leader.image}
                    alt={language === "bn" ? leader.nameBn : leader.nameEn}
                    width={160}
                    height={160}
                    className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                      activeLeaderIndex === idx
                        ? "grayscale-0 contrast-100 brightness-100 scale-105"
                        : "grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                    }`}
                  />
                  {/* Subtle rim highlight inside portrait */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Profile Header Info */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                      {language === "bn" ? leader.badgeBn : leader.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-[#E2CB8F] transition-colors">
                    {language === "bn" ? leader.nameBn : leader.nameEn}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-[#C5A059] uppercase tracking-wider">
                    {language === "bn" ? leader.roleBn : leader.roleEn}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    {language === "bn" ? leader.titleBn : leader.titleEn}
                  </p>
                </div>
              </div>

              {/* 💬 Statement Quote with Metallic Signature Sweep Micro-Interaction */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#0A192F]/80 border border-white/10 relative overflow-hidden group/quote">
                {/* Metallic Shimmer Sweep on Card Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent pointer-events-none" />

                <Icon
                  name="format_quote"
                  size={26}
                  className="text-[#C5A059] opacity-30 absolute top-2 right-3 pointer-events-none"
                />

                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed relative z-10">
                  &ldquo;{language === "bn" ? leader.statementBn : leader.statementEn}&rdquo;
                </p>
              </div>

              {/* Governance Pillars / Key Focus Areas */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(language === "bn" ? leader.pillarsBn : leader.pillarsEn).map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#C5A059]/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
