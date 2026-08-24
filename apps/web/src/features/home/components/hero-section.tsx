"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { InteractiveWorldMap } from "./interactive-world-map";
import { AnimatedStat } from "./animated-stat";

export function HeroSection() {
  return (
    <section className="relative pt-4 pb-12 lg:pt-8 lg:pb-16 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Authority Copy, Badges & CTAs */}
        <div className="lg:col-span-5 space-y-5 text-left">
          
          {/* Government License Authority Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Icon name="verified_user" size={15} className="text-[#C5A059]" />
            <span className="tracking-wide text-[11px] sm:text-xs">Govt. Approved Agency • RL-2849 | Lic. 1173</span>
          </div>

          {/* Refined Proportional Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.12]">
              Global Talent. <br />
              <span className="gold-gradient-text">Precision Deployment.</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-lg pt-1">
              Bangladesh’s premier overseas workforce architecture. Connecting accredited technical, engineering, and healthcare manpower to GCC and global enterprise corridors with zero-friction consular processing.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-all rounded-xl shadow-lg"
            >
              <Icon name="travel_explore" size={16} />
              <span>Explore Requisitions</span>
            </a>

            <a
              href="#b2b-gateway"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all rounded-xl backdrop-blur-md hover:border-[#C5A059]/40"
            >
              <Icon name="corporate_fare" size={16} className="text-[#C5A059]" />
              <span>B2B Manpower Request</span>
            </a>
          </div>

          {/* Animated Metrics Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
            <AnimatedStat
              value={48.5}
              suffix="K+"
              decimals={1}
              label="Deployed Candidates"
            />
            <AnimatedStat
              value={14}
              suffix=" Days"
              decimals={0}
              label="Avg. Consular Visa"
              highlight
            />
            <AnimatedStat
              value={99.4}
              suffix="%"
              decimals={1}
              label="Contract Retention"
            />
          </div>
        </div>

        {/* Right Column: Flat Borderless High-Contrast Interactive World Map */}
        <div className="lg:col-span-7 w-full flex items-center justify-center">
          <InteractiveWorldMap />
        </div>

      </div>
    </section>
  );
}
