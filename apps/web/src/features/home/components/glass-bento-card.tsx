"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      className={`p-6 sm:p-7 rounded-2xl bg-[#0A192F] border border-[#C5A059]/30 hover:border-[#C5A059]/80 shadow-xl hover:shadow-[0_20px_45px_-10px_rgba(197,160,89,0.35)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-white cursor-pointer ${
        sector.colSpan === "col-span-2" ? "lg:col-span-2 min-h-[340px]" : "lg:col-span-1 min-h-[340px]"
      }`}
    >
      {/* 🖼️ Photographic Sector Visual (Ultra-Vivid WebP) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={sector.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center brightness-[0.88] contrast-[1.05] group-hover:scale-105 group-hover:brightness-[0.98] transition-all duration-700 ease-out"
        />
        {/* Bottom-focused subtle gradient solely behind the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D18]/95 via-[#050D18]/65 via-35% to-transparent" />
      </div>

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

      {/* 🔝 Top Bar: Magnetic Icon & Kinetic Odometer */}
      <div className="relative z-10 flex items-center justify-between">
        {/* 🧲 5. Magnetic Floating Icon */}
        <motion.div
          animate={{
            y: isHovered ? -4 : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black/45 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#0A192F] transition-colors duration-300"
        >
          <Icon name={sector.icon} size={24} />
        </motion.div>

        {/* 🔢 3. Kinetic Odometer Statistic */}
        <div className="text-right px-3 py-1.5 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 shadow-lg">
          <span className="block text-xl sm:text-2xl font-extrabold text-[#C5A059] font-mono leading-none tracking-tight">
            <KineticOdometer value={sector.metricNumber} />
          </span>
          <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5 block">
            {metricLabel}
          </span>
        </div>
      </div>

      {/* ⬇️ Bottom Content: Title, Short Description & Tags */}
      <div className="relative z-10 mt-auto pt-10 space-y-2.5">
        {/* Title with shadow */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E2CB8F] transition-colors font-serif leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {title}
        </h3>

        {/* Short & Easy Description */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {desc}
        </p>

        {/* 🏷️ Staggered Outline Glass Tags */}
        <div className="pt-2.5 border-t border-white/15 flex flex-wrap gap-1.5">
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
              className="px-2.5 py-1 text-[10px] sm:text-[11px] font-medium rounded-lg border border-white/20 bg-black/50 backdrop-blur-md text-slate-100 group-hover:border-[#C5A059]/60 group-hover:text-[#E2CB8F] transition-colors shadow-sm"
            >
              {role}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
