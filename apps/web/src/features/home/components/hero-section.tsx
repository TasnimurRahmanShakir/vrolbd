"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { InteractiveWorldMap } from "./interactive-world-map";
import { AnimatedStat } from "./animated-stat";
import { useHeroSection } from "../hooks/use-hero-section";

export function HeroSection() {
  const {
    t,
    activeGatewayTab,
    setActiveGatewayTab,
    handleGatewayAction,
  } = useHeroSection();

  return (
    <section className="relative pt-4 pb-10 lg:pt-6 lg:pb-14 px-4 sm:px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* Left Column: Authority Copy, Dual Gateway & CTAs */}
        <div className="lg:col-span-5 space-y-4 text-left">

          {/* Government License Authority Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-xs font-semibold text-[#C5A059] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Icon name="verified_user" size={15} className="text-[#C5A059]" />
            <span className="tracking-wide text-[11px] sm:text-xs">
              {t.licenseBadge}
            </span>
          </div>

          {/* Refined Proportional Headline */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.12]">
              {t.headlineLead} <br />
              <span className="gold-gradient-text">{t.headlineAccent}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-lg">
              {t.description}
            </p>
          </div>

          {/* 🎯 Section 1: The Dual Gateway (Merged Seamless Experience) */}
          <div className="p-3 sm:p-4 rounded-2xl bg-[#0F243B]/80 border border-[#C5A059]/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Segmented Dual Switch */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-[#0A192F]/90 border border-white/10 gap-1 mb-3">
              <button
                type="button"
                onClick={() => setActiveGatewayTab("employer")}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${activeGatewayTab === "employer"
                    ? "bg-[#C5A059] text-[#0A192F] shadow-md font-extrabold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon name="corporate_fare" size={15} />
                <span className="truncate">{t.gatewayEmployerTab.split(" ")[1]} Portal</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveGatewayTab("candidate")}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${activeGatewayTab === "candidate"
                    ? "bg-[#C5A059] text-[#0A192F] shadow-md font-extrabold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon name="person" size={15} />
                <span className="truncate">{t.gatewayCandidateTab.split(" ")[0]} Portal</span>
              </button>
            </div>

            {/* Animated Gateway Content */}
            <AnimatePresence mode="wait">
              {activeGatewayTab === "employer" ? (
                <motion.div
                  key="employer-tab"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-[#C5A059]/20 text-[#C5A059]">
                      <Icon name="groups" size={16} />
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {t.gatewayEmployerHeading}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {t.gatewayEmployerSub}
                  </p>
                  <button
                    type="button"
                    onClick={handleGatewayAction}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <Icon name="send" size={15} />
                    <span>{t.gatewayEmployerBtn}</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="candidate-tab"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-[#C5A059]/20 text-[#C5A059]">
                      <Icon name="badge" size={16} />
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {t.gatewayCandidateHeading}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {t.gatewayCandidateSub}
                  </p>
                  <button
                    type="button"
                    onClick={handleGatewayAction}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <Icon name="travel_explore" size={15} />
                    <span>{t.gatewayCandidateBtn}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Animated Metrics Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <AnimatedStat
              value={48.5}
              suffix="K+"
              decimals={1}
              label={t.statDeployedLabel}
            />
            <AnimatedStat
              value={14}
              suffix={t.statVisaSuffix}
              decimals={0}
              label={t.statVisaLabel}
              highlight
            />
            <AnimatedStat
              value={99.4}
              suffix="%"
              decimals={1}
              label={t.statRetentionLabel}
            />
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
