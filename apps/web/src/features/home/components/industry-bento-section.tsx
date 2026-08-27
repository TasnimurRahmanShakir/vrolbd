"use client";

import React from "react";
import Image from "next/image";
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

        {/* 🏛️ Institutional Compliance Glass Banner with Fading Right Realistic Image */}
        <motion.div
          variants={itemVariants}
          className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0A192F] text-white border border-[#C5A059]/40 shadow-2xl flex flex-col justify-center lg:col-span-3 relative overflow-hidden group min-h-[230px]"
        >
          {/* 🖼️ Right Side Image: VROLBD Corporate Office with BMET Wall Emblem & Recruits (Left-only Fade) */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-1/2 h-full pointer-events-none overflow-hidden [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,transparent_100%)]">
            <Image
              src="/images/vrolbd-bmet-office.webp"
              alt="VROLBD Corporate Office with Official BMET Emblem Accreditation Wall"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center lg:object-right brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Soft navy blend from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/30 to-transparent" />
          </div>

          {/* Left Side Content */}
          <div className="relative z-10 max-w-2xl lg:max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-[11px] font-bold uppercase tracking-widest border border-[#C5A059]/30 backdrop-blur-sm">
              <Icon name="verified_user" size={15} />
              <span>{t.complianceTitle}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              BMET License 1173 <br /> ISO 9001:2015 Accredited Architecture
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl sm:max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {t.complianceDesc} Every candidate undergoes direct consular registration, wage protection escrow confirmation, and government smart clearance before boarding.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
