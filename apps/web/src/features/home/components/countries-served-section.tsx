"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import { CountriesServedMap } from "./countries-served-map";

export function CountriesServedSection() {
  const { language } = useLanguageStore();
  const t = translations[language].countriesServed;

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 max-w-[1440px] mx-auto relative text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* 🏛️ Left Column: Tag, Header, Narrative & Regional Corridors List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E2CB8F] text-[11px] font-bold uppercase tracking-wider">
            <Icon name="public" size={13} className="text-[#C5A059]" />
            <span>{t.tag}</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white leading-tight">
            <span>{t.headingLead} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] block sm:inline">
              {t.headingAccent}
            </span>
          </h2>

          {/* Narrative Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
            {t.description}
          </p>

          {/* Vertical Accent Border List */}
          <div className="border-l-2 border-[#C5A059] pl-4 sm:pl-5 space-y-3.5 pt-1">
            
            {/* 1. Europe (Core Market) */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 font-serif">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>{t.coreMarketTitle}</span>
              </h4>
              <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed">
                <span className="text-[#E2CB8F] font-semibold">{t.scandinaviaTitle}</span> – {t.scandinaviaList}
              </p>
              <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed">
                <span className="text-[#E2CB8F] font-semibold">{t.balkansTitle}</span> – {t.balkansList}
              </p>
            </div>

            {/* 2. East Asia */}
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                <span>{t.asiaTitle}</span>
              </h4>
              <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed">
                {t.asiaList}
              </p>
            </div>

            {/* 3. Gulf & Middle East (GCC) */}
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>{t.gulfTitle}</span>
              </h4>
              <p className="text-[11.5px] sm:text-xs text-slate-300 leading-relaxed">
                {t.gulfList}
              </p>
            </div>

          </div>

          {/* Compliance Footnote */}
          <div className="flex items-start gap-2 text-slate-400 pt-2 border-t border-white/10">
            <Icon name="verified_user" size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
            <p className="text-[11px] italic leading-relaxed text-slate-400">
              {t.complianceNote}
            </p>
          </div>

          {/* Action Link Button */}
          <div className="pt-1">
            <Link
              href="/corridors"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A192F] text-[11px] font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg shrink-0 group cursor-pointer"
            >
              <span>{t.btnExploreCorridors}</span>
              <Icon name="arrow_forward" size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* 🗺️ Right Column: Flat World Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 flex items-center justify-center"
        >
          <CountriesServedMap />
        </motion.div>

      </div>
    </section>
  );
}
