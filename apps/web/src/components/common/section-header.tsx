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
                ? "bg-[#FDC600]/15 border border-[#FDC600]/30 text-[#FDC600]"
                : "bg-[#080708]/8 border border-[#080708]/15 text-[#080708]"
            }`}
          >
            {tagIcon && (
              <Icon
                name={tagIcon}
                size={14}
                className={isDark ? "text-[#FDC600]" : "text-[#B8860B]"}
              />
            )}
            <span>{tag}</span>
          </div>
          <div
            className={`h-px flex-1 max-w-[140px] sm:max-w-[220px] ${
              isDark
                ? "bg-gradient-to-r from-[#FDC600]/40 via-[#FDC600]/15 to-transparent"
                : "bg-gradient-to-r from-[#080708]/30 via-[#B2B6BD]/50 to-transparent"
            }`}
          />
        </div>

        {/* Section Heading */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight leading-tight ${
            isDark ? "text-white" : "text-[#080708]"
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
