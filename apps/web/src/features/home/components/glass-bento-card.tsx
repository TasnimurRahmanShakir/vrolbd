"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { IndustrySector } from "../data/industry-sectors.data";

export interface GlassBentoCardProps {
  sector: IndustrySector;
  language: "en" | "bn";
}

export function GlassBentoCard({ sector, language }: GlassBentoCardProps) {
  const title = language === "bn" ? sector.titleBn : sector.titleEn;
  const desc = language === "bn" ? sector.descBn : sector.descEn;

  return (
    <Link href="/jobs" className="block h-full">
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
        className="h-full bg-white rounded-2xl border border-slate-200/90 hover:border-[#C5A059] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
      >
        {/* 🖼️ Crisp Visual Sector Banner */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={sector.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient vignette to blend cleanly into the card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Floating Top-Left Sector Icon Badge */}
          <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-[#0A192F]/90 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-md">
            <Icon name={sector.icon} size={20} />
          </div>

          {/* Floating Top-Right Accredited Badge */}
          <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#0A192F] text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>{language === "bn" ? "অনুমোদিত খাত" : "Accredited Trade"}</span>
          </div>
        </div>

        {/* 📝 Card Content: Clean, Readable Editorial Typography */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-[#8C6A2B] transition-colors font-serif leading-snug">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {desc}
            </p>
          </div>

          {/* 🔗 Clean Bottom Action Row (Zero Clutter) */}
          <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
              <Icon name="verified" size={14} className="text-[#C5A059]" />
              <span>{language === "bn" ? "যাচাইকৃত ট্রেড" : "Verified Workforce"}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-[#8C6A2B] font-bold text-xs group-hover:text-[#0A192F] group-hover:translate-x-1 transition-all">
              <span>{language === "bn" ? "নিয়োগ দেখুন" : "View Roles"}</span>
              <Icon name="arrow_forward" size={14} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
