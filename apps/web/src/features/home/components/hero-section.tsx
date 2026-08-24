"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { InteractiveWorldMap } from "./interactive-world-map";

export function HeroSection() {
  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Authority Copy, Badges & CTAs */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Government License Authority Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Icon name="verified_user" size={16} className="text-[#C5A059]" />
            <span className="tracking-wide">Govt. Approved Agency • RL-2849 | Lic. 1173</span>
          </div>

          {/* Main Kinetic Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08]">
              Global Talent. <br />
              <span className="gold-gradient-text">Precision Deployment.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-2">
              Bangladesh’s premier overseas workforce architecture. Connecting accredited technical, engineering, and healthcare manpower to GCC and global enterprise corridors with zero-friction consular processing.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A192F] bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] hover:opacity-95 transition-all rounded-2xl shadow-xl hover:shadow-2xl"
            >
              <Icon name="travel_explore" size={18} />
              <span>Explore Requisitions</span>
            </a>

            <a
              href="#b2b-gateway"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all rounded-2xl backdrop-blur-md hover:border-[#C5A059]/40"
            >
              <Icon name="corporate_fare" size={18} className="text-[#C5A059]" />
              <span>B2B Manpower Request</span>
            </a>
          </div>

          {/* Quick Credibility Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">48.5K+</div>
              <p className="text-[11px] text-slate-400">Deployed Candidates</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#C5A059] font-['Outfit']">14 Days</div>
              <p className="text-[11px] text-slate-400">Avg. Consular Visa</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">99.4%</div>
              <p className="text-[11px] text-slate-400">Contract Retention</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive World Map with Real-time Flight Arcs */}
        <div className="lg:col-span-7 w-full">
          <InteractiveWorldMap />
        </div>

      </div>
    </section>
  );
}
