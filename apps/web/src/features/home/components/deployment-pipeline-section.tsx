"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useDeploymentPipeline } from "../hooks/use-deployment-pipeline";
import {
  journeyContainerVariants,
  journeyStepVariants,
  VIEWPORT_CONFIG,
} from "@/lib/motion";

export function DeploymentPipelineSection() {
  const {
    containerRef,
    viewMode,
    setViewMode,
    steps,
    language,
    t,
  } = useDeploymentPipeline();

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* 🏛️ 1. Reusable Left-Aligned Section Header & Magnetic View Mode Pill */}
      <SectionHeader
        tag={t.tag}
        tagIcon="linear_scale"
        heading={t.heading}
        subheading={t.subheading}
        rightElement={
          /* 🧲 Magnetic Pill Toggle with Fluid Spring Slider */
          <div className="relative inline-flex p-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("employer")}
              className={`relative z-10 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "employer"
                  ? "text-[#080C14]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {viewMode === "employer" && (
                <motion.span
                  layoutId="pipelinePillTab"
                  className="absolute inset-0 bg-[#C5A059] rounded-full shadow-md -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                    mass: 0.8,
                  }}
                />
              )}
              <Icon name="corporate_fare" size={16} />
              <span>{t.tabEmployer}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("candidate")}
              className={`relative z-10 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "candidate"
                  ? "text-[#080C14]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {viewMode === "candidate" && (
                <motion.span
                  layoutId="pipelinePillTab"
                  className="absolute inset-0 bg-[#C5A059] rounded-full shadow-md -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                    mass: 0.8,
                  }}
                />
              )}
              <Icon name="person" size={16} />
              <span>{t.tabCandidate}</span>
            </button>
          </div>
        }
      />

      {/* ⚡ 2. Connected 4-Stage Recruitment Journey */}
      <div className="relative mt-10 sm:mt-14">
        {/* Continuous Horizontal Visual Connecting Pathway (Desktop ≥1024px) */}
        <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-1 pointer-events-none z-0">
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="journeyGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#C5A059" stopOpacity="1" />
                <stop offset="100%" stopColor="#8C6A2B" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <line
              x1="0%"
              y1="4"
              x2="100%"
              y2="4"
              stroke="#1E293B"
              strokeWidth="2.5"
              strokeDasharray="4 6"
            />
            <motion.line
              x1="0%"
              y1="4"
              x2="100%"
              y2="4"
              stroke="url(#journeyGoldGradient)"
              strokeWidth="3.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </svg>
        </div>

        {/* 4-Stage Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            variants={journeyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          >
            {steps.map((step, idx) => {
              const stepNumber = idx + 1;

              return (
                <motion.div
                  key={step.id}
                  variants={journeyStepVariants}
                  className="flex flex-col relative group"
                >
                  {/* Top Pathway Journey Anchor Pill (Numbered 1, 2, 3, 4) */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#C5A059] shadow-sm flex items-center justify-center text-[#080C14] group-hover:scale-110 group-hover:bg-[#C5A059] transition-all duration-300 z-10 relative">
                      <span className="text-xl font-bold font-serif">{stepNumber}</span>
                      <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-white" />
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div className="flex-1 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between text-slate-800">
                    <div>
                      {/* Step Thumbnail Visual */}
                      <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-2xs">
                        <Image
                          src={step.image}
                          alt={step.titleEn}
                          fill
                          sizes="(max-width: 1024px) 100vw, 25vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                        {/* Top Right: Step Icon */}
                        <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-xs">
                          <Icon name={step.icon} size={16} />
                        </div>

                        {/* Bottom Floating Tag */}
                        <div className="absolute bottom-2.5 left-3 right-3">
                          <span className="text-[10.5px] font-bold text-white uppercase tracking-wider block drop-shadow-md">
                            {language === "bn" ? step.badgeBn : step.badgeEn}
                          </span>
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-[#080C14] font-serif mb-2 leading-snug">
                        {language === "bn" ? step.titleBn : step.titleEn}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {language === "bn" ? step.descBn : step.descEn}
                      </p>
                    </div>

                    {/* Step Highlight Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8C6A2B]">
                        <Icon name="check_circle" size={14} className="text-[#C5A059]" />
                        <span>{language === "bn" ? step.highlightBn : step.highlightEn}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        STEP 0{stepNumber}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
