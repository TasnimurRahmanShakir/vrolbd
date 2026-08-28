"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";

export function PresidentMessageSection() {
  const { language } = useLanguageStore();
  const t = translations[language].presidentMessage;

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-[1440px] mx-auto relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-b from-[#C5A059]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Diplomatic Letterhead Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" rounded-2xl sm:rounded-3xl border border-[#C5A059]/30 bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#FAF8F5] shadow-2xl overflow-hidden relative"
      >
        {/* Top Gold Geometric Seal Trim Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#AA853C] via-[#E2CB8F] to-[#AA853C]" />

        {/* Letterhead Official Banner */}
        <div className="md:px-16 px-4 sm:px-6 border-b border-slate-200/80 py-4 bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#C5A059] flex items-center justify-center shadow-xs shrink-0">
              <Icon name="military_tech" size={22} />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#8C6A2B] font-['Outfit'] block leading-none">
                {t.tag}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0A192F] mt-1 block">
                {t.deskBadge}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A192F] text-[#C5A059] text-xs font-semibold tracking-wide shadow-xs">
              <Icon name="verified" size={15} />
              <span>{t.licenseText}</span>
            </span>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="md:px-16 px-4 sm:px-6 py-10 sm:py-12 lg:py-14 flex flex-col lg:flex-row items-center gap-6 sm:gap-7 lg:gap-8">

          {/* Left Column: Portrait Card */}
          <div className="shrink-0 w-full max-w-[320px] sm:max-w-[340px] lg:w-[320px] xl:w-[340px]">
            <div className="relative group w-full">
              {/* Gold Accent Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#C5A059]/40 via-[#E2CB8F]/25 to-[#C5A059]/40 blur-xs transition duration-500 group-hover:opacity-100" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A059]/60 shadow-2xl bg-[#0A192F] aspect-[4/5]">
                <Image
                  src="/SIRAJUL ISLAM LIPON.jpeg"
                  alt={t.name}
                  width={420}
                  height={525}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/95 via-[#071324]/20 to-transparent pointer-events-none" />

                {/* Middle-Aligned Centered Plaque on the Image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-center">
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#071324]/85 backdrop-blur-md border border-[#C5A059]/35 shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2CB8F] block mb-0.5">
                      {t.role}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-serif text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Message & Learn More */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">

            {/* Letter Header */}
            <div className="space-y-2 relative">
              <Icon
                name="format_quote"
                size={56}
                className="text-[#C5A059]/20 absolute -top-6 -left-3 pointer-events-none"
              />

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif text-[#0A192F] tracking-tight leading-[1.2]">
                {t.heading}
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-[#8C6A2B] font-medium leading-relaxed">
                {t.subheading}
              </p>
            </div>

            {/* Letter Body Paragraphs (Justified) */}
            <div className="space-y-3.5 text-slate-700 text-xs sm:text-[13.5px] md:text-sm leading-relaxed border-l-2 border-[#C5A059]/40 pl-4 sm:pl-5 text-justify">
              <p>
                {t.p1}
              </p>

              <p>
                {t.p2}
              </p>

              <p className="font-semibold text-[#0A192F]">
                {t.p3}
              </p>
            </div>

            {/* Presidential Signature Block & Learn More Button */}
            <div className="pt-3.5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#0A192F]">
                  {t.name}
                </span>
                <span className="block text-xs font-semibold text-[#8C6A2B] uppercase tracking-wider">
                  {t.role}
                </span>
                <span className="block text-[11px] text-slate-500">
                  {t.company}
                </span>
              </div>

              {/* Learn More About Us Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#0F243B] text-[#C5A059] hover:text-[#E2CB8F] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group/btn"
              >
                <span>{t.learnMore}</span>
                <Icon name="arrow_forward" size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Gold Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#AA853C] via-[#E2CB8F] to-[#AA853C]" />
      </motion.div>
    </section>
  );
}
