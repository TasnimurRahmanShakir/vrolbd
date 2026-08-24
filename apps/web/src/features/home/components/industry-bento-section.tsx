"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import { SectionHeader } from "@/components/common/section-header";
import { GlassBentoCard } from "./glass-bento-card";
import { INDUSTRY_SECTORS } from "../data/industry-sectors.data";

export function IndustryBentoSection() {
  const { language } = useLanguageStore();
  const t = translations[language].bento;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 20,
      },
    },
  };

  return (
    <section id="sectors" className="py-10 md:py-14 px-4 sm:px-6 max-w-[1440px] mx-auto">
      {/* 🏛️ Reusable Left-Aligned Section Header with Extended Accent Line */}
      <SectionHeader
        tag={t.tag}
        tagIcon="domain"
        heading={t.heading}
        subheading={t.subheading}
      />

      {/* 🔮 1. Glass-Bento Asymmetric Grid with 2. Staggered Entry */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {INDUSTRY_SECTORS.map((sector) => (
          <motion.div
            key={sector.id}
            variants={itemVariants}
            className={sector.colSpan === "col-span-2" ? "lg:col-span-2" : "lg:col-span-1"}
          >
            <GlassBentoCard sector={sector} language={language} />
          </motion.div>
        ))}

        {/* 🏛️ Institutional Compliance Glass Banner */}
        <motion.div
          variants={itemVariants}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#173B61] text-white border border-[#C5A059]/40 shadow-2xl flex flex-col justify-between lg:col-span-3 relative overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-[11px] font-bold uppercase tracking-widest border border-[#C5A059]/30">
                <Icon name="verified_user" size={15} />
                <span>{t.complianceTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                BMET License 1173 • ISO 9001:2015 Accredited Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {t.complianceDesc} Every candidate undergoes direct consular registration, wage protection escrow confirmation, and government smart clearance before boarding.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#compliance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 text-[#0A192F] text-xs font-bold uppercase tracking-wider shadow-xl transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <Icon name="assignment_turned_in" size={16} />
                <span>Inspect Compliance Charter</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
