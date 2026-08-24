"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Combobox } from "@/components/ui/combobox";
import { SectionHeader } from "@/components/common/section-header";
import { useManpowerEstimator } from "../hooks/use-manpower-estimator";

export function ManpowerEstimatorSection() {
  const {
    countryKey,
    setCountryKey,
    tradeKey,
    setTradeKey,
    headcount,
    setHeadcount,
    countryOptions,
    tradeOptions,
    isScanning,
    computedDays,
    readyDossiers,
    dailyTestingCapacity,
    triggerRecalculate,
    t,
    handleRequestQuote,
  } = useManpowerEstimator();

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 max-w-[1440px] mx-auto">
      {/* 🏛️ Reusable Left-Aligned Section Header */}
      <SectionHeader
        tag={t.tag}
        tagIcon="calculate"
        heading={t.heading}
        subheading={t.subheading}
      />

      {/* SaaS Dashboard Calculator Card */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl relative z-20">
        {/* Top Dashboard Terminal Bar */}
        <div className="px-6 py-4 bg-[#0A192F] text-white flex flex-wrap items-center justify-between gap-4 border-b border-white/10 rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            </div>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-300">
              VISION-RECRUITING-SIMULATOR://MOBILIZATION-ENGINE-v2.6
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#C5A059] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
            </span>
            <span>EMBASSY CLEARANCE STREAM: ACTIVE</span>
          </div>
        </div>

        {/* Interactive Calculator Body */}
        <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-b-3xl">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Country Corridor Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.destinationLabel}
              </label>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-[#C5A059] transition-all shadow-xs">
                <Combobox
                  options={countryOptions}
                  value={countryKey}
                  onChange={(v) => {
                    setCountryKey(v);
                    triggerRecalculate();
                  }}
                  variant="light"
                />
              </div>
            </div>

            {/* Trade Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.tradeLabel}
              </label>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-[#C5A059] transition-all shadow-xs">
                <Combobox
                  options={tradeOptions}
                  value={tradeKey}
                  onChange={(v) => {
                    setTradeKey(v);
                    triggerRecalculate();
                  }}
                  variant="light"
                />
              </div>
            </div>

            {/* Headcount Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.headcountLabel}
                </label>
                <span className="text-base font-extrabold text-[#8C6A2B] font-mono">
                  {headcount} Workers
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={1500}
                step={10}
                value={headcount}
                onChange={(e) => {
                  setHeadcount(Number(e.target.value));
                  triggerRecalculate();
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>20 Min</span>
                <span>500 Standard</span>
                <span>1500+ Mega Cohort</span>
              </div>
            </div>

          </div>

          {/* Real-Time Results Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F243B] text-white border border-[#C5A059]/40 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            
            {/* Ambient gold glow */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin mx-auto" />
                  <h4 className="text-sm font-bold text-white font-mono">
                    {t.scanningTitle}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.scanningDesc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-[#C5A059] block mb-1">
                      {t.resultLeadTime}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                        {computedDays}
                      </span>
                      <span className="text-lg font-bold text-[#C5A059]">
                        {t.daysUnit}
                      </span>
                      <span className="text-xs text-slate-400 ml-auto font-mono">
                        ± 2 Days Buffer
                      </span>
                    </div>
                  </div>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-0.5">
                        {t.resultDossiers}
                      </span>
                      <span className="text-base font-bold font-mono text-white">
                        {readyDossiers.toLocaleString()}+ Candidates
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-0.5">
                        {t.resultTradeTest}
                      </span>
                      <span className="text-base font-bold font-mono text-[#C5A059]">
                        {dailyTestingCapacity}/Day
                      </span>
                    </div>
                  </div>

                  {/* 1-Click Request Trigger */}
                  <button
                    type="button"
                    onClick={handleRequestQuote}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E2CB8F] via-[#C5A059] to-[#AA853C] text-[#0A192F] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <Icon name="flash_on" size={16} />
                    <span>{t.actionBtn}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
