"use client";

import React from "react";
import { useCountUp } from "../hooks/use-count-up";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  highlight?: boolean;
}

export function AnimatedStat({
  value,
  suffix = "",
  decimals = 0,
  label,
  highlight = false,
}: AnimatedStatProps) {
  const animatedNumber = useCountUp(value, 2000, decimals);

  return (
    <div>
      <div
        className={`text-xl sm:text-2xl font-extrabold font-['Outfit'] tracking-tight ${
          highlight ? "text-[#C5A059]" : "text-white"
        }`}
      >
        <span>{animatedNumber}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-[11px] text-slate-400 font-medium tracking-wide mt-0.5">{label}</p>
    </div>
  );
}
