"use client";

import React from "react";
import { useCountUp } from "../hooks/use-count-up";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  highlight?: boolean;
  theme?: "light" | "dark";
}

export function AnimatedStat({
  value,
  suffix = "",
  decimals = 0,
  label,
  highlight = false,
  theme = "dark",
}: AnimatedStatProps) {
  const animatedNumber = useCountUp(value, 2000, decimals);
  const isDark = theme === "dark";

  return (
    <div>
      <div
        className={`text-xl sm:text-2xl font-extrabold font-['Outfit'] tracking-tight ${
          highlight
            ? isDark
              ? "text-[#C5A059]"
              : "text-[#8C6A2B]"
            : isDark
            ? "text-white"
            : "text-[#0A192F]"
        }`}
      >
        <span>{animatedNumber}</span>
        <span>{suffix}</span>
      </div>
      <p
        className={`text-[11px] font-medium tracking-wide mt-0.5 ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
