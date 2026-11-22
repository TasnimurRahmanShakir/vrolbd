"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { useLanguageStore, translations } from "@/stores/language.store";
import { InteractiveWorldMap } from "./interactive-world-map";

export function CountriesServedSection() {
  const { language } = useLanguageStore();
  const t = translations[language].countriesServed;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative text-white">
      {/* 🏛️ Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div className="max-w-2xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E2CB8F] text-[11px] font-bold uppercase tracking-wider">
            <Icon name="public" size={14} className="text-[#C5A059]" />
            <span>{t.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-tight text-white leading-tight">
            <span>{t.headingLead} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] block sm:inline">
              {t.headingAccent}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Action Link Button */}
        <div className="shrink-0">
          <Link
            href="/corridors"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A192F] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg group cursor-pointer"
          >
            <span>{t.btnExploreCorridors}</span>
            <Icon name="arrow_forward" size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 🗺️ Dedicated Interactive World Map Container */}
      <div className="rounded-3xl overflow-hidden border border-[#C5A059]/40 bg-[#071324]/90 p-4 sm:p-6 shadow-2xl relative">
        <InteractiveWorldMap />
      </div>

      {/* Compliance Footnote */}
      <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-slate-400 text-xs">
        <Icon name="verified_user" size={15} className="text-[#C5A059]" />
        <p className="leading-relaxed">
          {t.complianceNote}
        </p>
      </div>
    </section>
  );
}
