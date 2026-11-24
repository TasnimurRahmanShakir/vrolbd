"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";

export interface SectionHeaderProps {
  tag: string;
  tagIcon?: string;
  heading: string;
  subheading?: string;
  rightElement?: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeader({
  tag,
  tagIcon,
  heading,
  subheading,
  rightElement,
  className = "",
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-4 border-b ${
        isDark ? "border-white/10" : "border-slate-200/80"
      } ${className}`}
    >
      <div className="space-y-2 max-w-4xl lg:max-w-full text-left">
        {/* Tag line with extended gradient accent line */}
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shrink-0 shadow-xs ${
              isDark
                ? "bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#F5E6C4]"
                : "bg-[#102C57]/10 border border-[#102C57]/25 text-[#102C57]"
            }`}
          >
            {tagIcon && (
              <Icon
                name={tagIcon}
                size={14}
                className={isDark ? "text-[#C5A059]" : "text-[#8C6A2B]"}
              />
            )}
            <span>{tag}</span>
          </div>
          <div
            className={`h-px flex-1 max-w-[140px] sm:max-w-[220px] ${
              isDark
                ? "bg-gradient-to-r from-[#C5A059]/50 via-[#C5A059]/20 to-transparent"
                : "bg-gradient-to-r from-[#102C57]/30 via-[#DAC0A3]/40 to-transparent"
            }`}
          />
        </div>

        {/* Section Heading */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight leading-tight ${
            isDark ? "text-white" : "text-[#102C57]"
          }`}
        >
          {heading}
        </h2>

        {/* Subheading (High-Contrast AAA Readability) */}
        {subheading && (
          <p
            className={`text-xs sm:text-sm leading-relaxed max-w-4xl lg:max-w-full font-medium ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {subheading}
          </p>
        )}
      </div>

      {rightElement && (
        <div className="shrink-0 self-start lg:self-end">{rightElement}</div>
      )}
    </div>
  );
}
