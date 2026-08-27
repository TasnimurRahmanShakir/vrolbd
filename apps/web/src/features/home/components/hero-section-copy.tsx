"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { InteractiveWorldMap } from "./interactive-world-map";
import { AnimatedStat } from "./animated-stat";
import { useHeroSection } from "../hooks/use-hero-section";

export function HeroSection() {
  const { t } = useHeroSection();

  return (
    <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Column: Authority Copy, Primary CTAs & Metrics */}
        <div className="lg:col-span-5 space-y-6 text-left">

          {/* Official Brand Logo Showcase & Govt License Badge */}
          <div className="space-y-3">
            <div className="relative inline-block group ">
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 via-[#E2CB8F]/10 to-transparent rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              <div className="flex items-center pb-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <Icon name="verified_user" size={15} className="text-[#C5A059]" />
                  <span className="tracking-wide text-[11px] sm:text-xs">
                    {t.licenseBadge}
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/35 shadow-2xl bg-black/40 p-2 backdrop-blur-md group-hover:border-[#C5A059]/70 transition-all duration-300 max-w-[280px] sm:max-w-[320px]">
                <Image
                  src="/footer-logo.jpeg"
                  alt="Vision Recruiting & Overseas Ltd. (RL-1173)"
                  width={180}
                  height={120}
                  priority
                  className="w-full h-auto object-contain rounded-xl brightness-105 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Government License Authority Badge */}

          </div>

          {/* Refined Proportional Headline */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[43px] font-extrabold tracking-tight text-white font-serif leading-[1.16]">
              {t.headlineLead} <br />
              <span className="gold-gradient-text">{t.headlineAccent}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-lg">
              {t.description}
            </p>
          </div>

          {/* 🚀 Clean & Elegant Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <Link
              href="/jobs"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20 hover:opacity-95 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Icon name="travel_explore" size={18} />
              <span>{t.exploreRequisitions}</span>
            </Link>

            <a
              href="#b2b-gateway"
              className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/50 text-slate-100 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Icon name="corporate_fare" size={18} className="text-[#C5A059]" />
              <span>{t.b2bRequest}</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-Visibility Interactive World Map */}
        <div className="lg:col-span-7 w-full flex items-center justify-center">
          <InteractiveWorldMap />
        </div>

      </div>
    </section>
  );
}
