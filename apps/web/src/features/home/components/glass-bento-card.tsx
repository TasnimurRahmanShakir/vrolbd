"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { KineticOdometer } from "@/components/common/kinetic-odometer";
import { IndustrySector } from "../data/industry-sectors.data";

export interface GlassBentoCardProps {
  sector: IndustrySector;
  language: "en" | "bn";
}

export function GlassBentoCard({ sector, language }: GlassBentoCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const roles = language === "bn" ? sector.rolesBn : sector.rolesEn;
  const title = language === "bn" ? sector.titleBn : sector.titleEn;
  const desc = language === "bn" ? sector.descBn : sector.descEn;
  const metricLabel = language === "bn" ? sector.metricLabelBn : sector.metricLabelEn;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`p-6 sm:p-7 rounded-2xl bg-[#112240]/90 backdrop-blur-xl border border-[#C5A059]/20 hover:border-[#C5A059]/60 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(197,160,89,0.2)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-white cursor-pointer ${
        sector.colSpan === "col-span-2" ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      {/* 🔦 4. Linear-Style Mouse Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 160, 89, 0.18), transparent 75%)`,
        }}
      />

      {/* Subtle Ambient Background Corner Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#C5A059]/10 via-[#C5A059]/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header: Magnetic Icon & Kinetic Odometer */}
        <div className="flex items-center justify-between mb-5">
          {/* 🧲 5. Magnetic Floating Icon */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-12 h-12 rounded-xl bg-[#0F243B] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-md group-hover:bg-[#C5A059] group-hover:text-[#0A192F] transition-colors duration-300"
          >
            <Icon name={sector.icon} size={24} />
          </motion.div>

          {/* 🔢 3. Kinetic Odometer Statistic */}
          <div className="text-right">
            <span className="block text-xl sm:text-2xl font-extrabold text-[#C5A059] font-mono leading-none tracking-tight">
              <KineticOdometer value={sector.metricNumber} />
            </span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1 block">
              {metricLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E2CB8F] transition-colors font-serif mb-2.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      {/* 🏷️ Staggered Outline Glass Tags */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
        {roles.map((role, idx) => (
          <motion.span
            key={role}
            animate={{
              x: isHovered ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: idx * 0.04,
            }}
            className="px-3 py-1 text-[11px] font-medium rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-slate-200 group-hover:border-[#C5A059]/40 group-hover:text-[#E2CB8F] transition-colors"
          >
            {role}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
