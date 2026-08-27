"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/common/section-header";
import { useDeploymentPipeline } from "../hooks/use-deployment-pipeline";

export function DeploymentPipelineSection() {
  const {
    containerRef,
    viewMode,
    setViewMode,
    hoveredStep,
    setHoveredStep,
    steps,
    language,
    t,
  } = useDeploymentPipeline();

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="py-10 md:py-14 px-4 sm:px-6 max-w-[1440px] mx-auto relative"
    >
      {/* 🏛️ 1. Reusable Left-Aligned Section Header with Extended Accent Line & Magnetic Pill Toggle */}
      <SectionHeader
        tag={t.tag}
        tagIcon="linear_scale"
        heading={t.heading}
        subheading={t.subheading}
        rightElement={
          /* 🧲 Magnetic Pill Toggle with Fluid Spring Slider */
          <div className="relative inline-flex p-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("employer")}
              className={`relative z-10 px-5 py-2.5 rounded-full text-xs font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "employer"
                  ? "text-[#0A192F]"
                  : "text-slate-500 hover:text-slate-900"
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
              className={`relative z-10 px-5 py-2.5 rounded-full text-xs font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "candidate"
                  ? "text-[#0A192F]"
                  : "text-slate-500 hover:text-slate-900"
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

      {/* ⚡ 2. Animated SVG Circuit Line Spanning across Steps */}
      <div className="relative mb-6">
        <div className="hidden lg:block absolute -top-3.5 left-8 right-8 h-1 pointer-events-none z-0">
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="circuitGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#C5A059" stopOpacity="1" />
                <stop offset="100%" stopColor="#8C6A2B" stopOpacity="0.8" />
              </linearGradient>
              <filter id="goldGlowDot" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Smooth Baseline */}
            <line
              x1="0%"
              y1="4"
              x2="100%"
              y2="4"
              stroke="#E2E8F0"
              strokeWidth="2.5"
              strokeDasharray="4 6"
            />
            {/* Glowing Golden Stroke Animation */}
            <motion.line
              x1="0%"
              y1="4"
              x2="100%"
              y2="4"
              stroke="url(#circuitGoldLine)"
              strokeWidth="3.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        {/* 🪗 3. Buttery-Smooth Accordion Focus Hover & Kinetic Odometer Roll-Up Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-6 relative z-10"
          >
            {steps.map((step, idx) => {
              const isHovered = hoveredStep === step.id;
              const hasAnyHover = hoveredStep !== null;
              const isDimmed = hasAnyHover && !isHovered;

              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  animate={{
                    flex: isHovered ? 1.35 : isDimmed ? 0.88 : 1,
                    opacity: isDimmed ? 0.65 : 1,
                    scale: isHovered ? 1.01 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 22,
                    mass: 0.85,
                  }}
                  className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm ${
                    isHovered
                      ? "border-[#C5A059] shadow-xl"
                      : "border-slate-200/90 hover:border-[#C5A059]/60"
                  }`}
                >
                  <div>
                    {/* 🖼️ High-Visibility Step Thumbnail with Floating Overlays */}
                    <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-4 border border-slate-200/80 shadow-xs">
                      <Image
                        src={step.image}
                        alt={step.titleEn}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.96]"
                      />
                      {/* Subtle Dark Gradient for Floating Badge Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                      {/* Top Left: Step Number Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] text-xs font-bold font-mono tracking-wider shadow-sm">
                        {step.stepNumber}
                      </div>

                      {/* Top Right: Step Icon */}
                      <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#E2CB8F] flex items-center justify-center shadow-sm">
                        <Icon name={step.icon} size={16} />
                      </div>

                      {/* Bottom Floating Step Tag on Image */}
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider block drop-shadow-md">
                          {language === "bn" ? step.badgeBn : step.badgeEn}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-[#8C6A2B] transition-colors duration-200 font-serif mb-2 leading-snug">
                      {language === "bn" ? step.titleBn : step.titleEn}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {language === "bn" ? step.descBn : step.descEn}
                    </p>
                  </div>

                  {/* Bottom Highlight Tag */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-[#8C6A2B] flex items-center gap-1.5">
                      <Icon name="check_circle" size={14} />
                      <span>{language === "bn" ? step.highlightBn : step.highlightEn}</span>
                    </span>
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
