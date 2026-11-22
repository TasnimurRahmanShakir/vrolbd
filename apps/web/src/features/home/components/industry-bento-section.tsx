"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import { SectionHeader } from "@/components/common/section-header";
import { INDUSTRY_SECTORS, IndustrySector } from "../data/industry-sectors.data";
import {
  editorialGridVariants,
  featuredPanelVariants,
  supportingCardVariants,
  VIEWPORT_CONFIG,
} from "@/lib/motion";

export function IndustryBentoSection() {
  const { language } = useLanguageStore();
  const t = translations[language].bento;

  const featuredSector: IndustrySector = INDUSTRY_SECTORS[0]!;
  const supportingSectors: IndustrySector[] = INDUSTRY_SECTORS.slice(1);

  return (
    <section id="sectors" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 🏷️ Section Header: Left-Aligned for Consistent Brand Identity */}
      <div className="text-left max-w-2xl mb-8 sm:mb-12">
        <SectionHeader
          tag={t.tag}
          tagIcon="domain"
          heading={t.heading}
          subheading={t.subheading}
        />
      </div>

      <motion.div
        variants={editorialGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        className="space-y-6 sm:space-y-8"
      >
        {/* 🏛️ 1. Large Featured Specialization Hero Panel (01: Construction & Heavy Infrastructure) */}
        <motion.div
          variants={featuredPanelVariants}
          className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px]">
            {/* Left Image Column (Large Architectural Photography) */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-900">
              <Image
                src={featuredSector.image}
                alt={language === "bn" ? featuredSector.titleBn : featuredSector.titleEn}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/60" />
              
              {/* Category 01 Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#C5A059]/40 text-[#E2CB8F] text-[11px] font-mono font-bold">
                  {"// 01 FEATURED"}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
                  <Icon name={featuredSector.icon} size={14} className="text-[#C5A059]" />
                  <span>{language === "bn" ? "আন্তর্জাতিক চাহিদা" : "High Demand"}</span>
                </span>
              </div>

              {/* Bottom Image Stat Overlay */}
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block drop-shadow-md">
                  {featuredSector.metricNumber}
                </span>
                <span className="text-xs text-slate-200 font-medium">
                  {language === "bn" ? featuredSector.metricLabelBn : featuredSector.metricLabelEn}
                </span>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white text-slate-800">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8C6A2B]">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>{language === "bn" ? "প্রধান কর্মসংস্থান ক্যাটাগরি" : "Primary Accredited Discipline"}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#080C14] leading-tight">
                  {language === "bn" ? featuredSector.titleBn : featuredSector.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === "bn" ? featuredSector.descBn : featuredSector.descEn}
                </p>

                {/* Verified Roles Tags */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-2">
                    {language === "bn" ? "প্রস্তুতকৃত দক্ষ কর্মী তালিকা:" : "Accredited Technical Cadres:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(language === "bn" ? featuredSector.rolesBn : featuredSector.rolesEn).map((role) => (
                      <span
                        key={role}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#b2b-gateway"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#080C14] hover:text-[#8C6A2B] transition-colors uppercase tracking-wider"
                >
                  <span>{language === "bn" ? "জনশক্তি রিকুইজিশন পাঠান" : "Request Workforce Supply"}</span>
                  <Icon name="arrow_forward" size={16} className="group-hover:translate-x-1.5 transition-transform text-[#C5A059]" />
                </a>

                <span className="text-xs font-mono font-semibold text-slate-400">
                  RL-1173
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🏛️ 2. Supporting Specializations (02 to 06): Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportingSectors.map((sector, index) => {
            const indexNumber = String(index + 2).padStart(2, "0");
            const isWide = index === 3; // Card 05 spans wider on lg if needed or standard balanced

            return (
              <motion.div
                key={sector.id}
                variants={supportingCardVariants}
                className={`rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden group flex flex-col justify-between ${
                  isWide ? "lg:col-span-2" : "col-span-1"
                }`}
              >
                <div>
                  {/* Card Image Header with Numbering Badge */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={sector.image}
                      alt={language === "bn" ? sector.titleBn : sector.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.92]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Category Number Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[#E2CB8F] text-[10px] font-mono font-bold">
                        {"//"} {indexNumber}
                      </span>
                    </div>

                    {/* Metric overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                      <div>
                        <span className="text-lg font-bold font-mono block leading-tight text-white drop-shadow-xs">
                          {sector.metricNumber}
                        </span>
                        <span className="text-[10.5px] text-slate-300 font-medium">
                          {language === "bn" ? sector.metricLabelBn : sector.metricLabelEn}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#E2CB8F]">
                        <Icon name={sector.icon} size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3 bg-white text-slate-800">
                    <h4 className="text-lg font-bold font-serif text-[#080C14] leading-snug">
                      {language === "bn" ? sector.titleBn : sector.titleEn}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {language === "bn" ? sector.descBn : sector.descEn}
                    </p>

                    {/* Role Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(language === "bn" ? sector.rolesBn : sector.rolesEn).slice(0, 3).map((role) => (
                        <span
                          key={role}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 border border-slate-200/60 text-slate-700"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#b2b-gateway"
                    className="text-xs font-bold text-[#080C14] hover:text-[#8C6A2B] transition-colors flex items-center gap-1.5"
                  >
                    <span>{language === "bn" ? "ক্যাডার তালিকা দেখুন" : "View Roles"}</span>
                    <Icon name="arrow_forward" size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">BMET Certified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
