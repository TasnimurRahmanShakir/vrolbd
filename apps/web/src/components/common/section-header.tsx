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
      className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-5 border-b ${
        isDark ? "border-white/10" : "border-slate-200/80"
      } ${className}`}
    >
      <div className="space-y-2.5 max-w-4xl lg:max-w-full text-left">
        {/* Tag line with extended gradient accent line */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[11px] font-bold uppercase tracking-widest text-[#8C6A2B] shrink-0">
            {tagIcon && <Icon name={tagIcon} size={14} />}
            <span>{tag}</span>
          </div>
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[220px] bg-gradient-to-r from-[#C5A059]/50 via-[#C5A059]/20 to-transparent" />
        </div>

        {/* Section Heading */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight leading-tight ${
            isDark ? "text-white" : "text-[#0A192F]"
          }`}
        >
          {heading}
        </h2>

        {/* Subheading */}
        {subheading && (
          <p
            className={`text-xs sm:text-sm leading-relaxed max-w-4xl lg:max-w-full ${
              isDark ? "text-slate-300" : "text-slate-600"
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
