"use client";

import React from "react";

interface CountryFlagProps {
  country?: string;
  className?: string;
}

export function CountryFlag({ country = "", className = "w-5 h-3.5" }: CountryFlagProps) {
  const norm = country.toLowerCase().trim();

  // 🇦🇪 United Arab Emirates
  if (norm.includes("emirates") || norm === "uae" || norm === "ae") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of United Arab Emirates"
      >
        <rect width="600" height="133.3" fill="#00732F" />
        <rect y="133.3" width="600" height="133.3" fill="#FFFFFF" />
        <rect y="266.6" width="600" height="133.4" fill="#000000" />
        <rect width="150" height="400" fill="#FF0000" />
      </svg>
    );
  }

  // 🇸🇦 Saudi Arabia
  if (norm.includes("saudi") || norm.includes("ksa") || norm === "sa") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Saudi Arabia"
      >
        <rect width="600" height="400" fill="#006C35" />
        {/* Simplified white sword & calligraphy representation */}
        <path
          d="M170 270h260l-20-10h-220l-20 10zm-30 0l20-15v30l-20-15zm40-10v20m20-20v20"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="300"
          y="235"
          fill="#FFFFFF"
          fontSize="48"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          لا إله إلا الله
        </text>
      </svg>
    );
  }

  // 🇶🇦 Qatar
  if (norm.includes("qatar") || norm === "qa") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Qatar"
      >
        <rect width="600" height="400" fill="#8D1B3D" />
        <path
          d="M0 0h170l50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2 50 22.2-50 22.2H0z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 🇰🇼 Kuwait
  if (norm.includes("kuwait") || norm === "kw") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Kuwait"
      >
        <rect width="600" height="133.3" fill="#007A3D" />
        <rect y="133.3" width="600" height="133.3" fill="#FFFFFF" />
        <rect y="266.6" width="600" height="133.4" fill="#CE1126" />
        <polygon points="0,0 150,133.3 150,266.6 0,400" fill="#000000" />
      </svg>
    );
  }

  // 🇴🇲 Oman
  if (norm.includes("oman") || norm === "om") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Oman"
      >
        <rect y="0" width="600" height="133.3" fill="#FFFFFF" />
        <rect y="133.3" width="600" height="133.3" fill="#DB161B" />
        <rect y="266.6" width="600" height="133.4" fill="#008000" />
        <rect width="150" height="400" fill="#DB161B" />
        {/* Emblem on upper hoist */}
        <circle cx="75" cy="65" r="22" fill="none" stroke="#FFFFFF" strokeWidth="5" />
      </svg>
    );
  }

  // 🇧🇭 Bahrain
  if (norm.includes("bahrain") || norm === "bh") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Bahrain"
      >
        <rect width="600" height="400" fill="#CE1126" />
        <path
          d="M0 0h150l60 40-60 40 60 40-60 40 60 40-60 40 60 40-60 40 60 40-60 40H0z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 🇷🇴 Romania & Eastern Europe
  if (norm.includes("romania") || norm === "ro") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Romania"
      >
        <rect width="200" height="400" fill="#002B7F" />
        <rect x="200" width="200" height="400" fill="#FCD116" />
        <rect x="400" width="200" height="400" fill="#CE1126" />
      </svg>
    );
  }

  // 🇲🇾 Malaysia
  if (norm.includes("malaysia") || norm === "my") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Malaysia"
      >
        {/* 14 Stripes */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            y={(i * 400) / 14}
            width="600"
            height={400 / 14}
            fill={i % 2 === 0 ? "#CC0000" : "#FFFFFF"}
          />
        ))}
        {/* Canton */}
        <rect width="300" height={(400 * 8) / 14} fill="#000066" />
        <circle cx="120" cy="115" r="60" fill="#FFCC00" />
        <circle cx="138" cy="115" r="50" fill="#000066" />
        <polygon
          points="200,85 208,105 230,105 212,118 219,138 200,126 181,138 188,118 170,105 192,105"
          fill="#FFCC00"
        />
      </svg>
    );
  }

  // 🇯🇵 Japan
  if (norm.includes("japan") || norm === "jp") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Japan"
      >
        <rect width="600" height="400" fill="#FFFFFF" />
        <circle cx="300" cy="200" r="120" fill="#BC002D" />
      </svg>
    );
  }

  // 🇸🇬 Singapore
  if (norm.includes("singapore") || norm === "sg") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of Singapore"
      >
        <rect width="600" height="200" fill="#ED2939" />
        <rect y="200" width="600" height="200" fill="#FFFFFF" />
        <circle cx="100" cy="100" r="60" fill="#FFFFFF" />
        <circle cx="120" cy="100" r="50" fill="#ED2939" />
      </svg>
    );
  }

  // 🇬🇧 United Kingdom
  if (norm.includes("kingdom") || norm.includes("uk") || norm === "gb") {
    return (
      <svg
        viewBox="0 0 600 400"
        className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 ${className}`}
        aria-label="Flag of United Kingdom"
      >
        <rect width="600" height="400" fill="#012169" />
        <polygon points="0,0 60,0 600,360 600,400 540,400 0,40" fill="#FFFFFF" />
        <polygon points="600,0 540,0 0,360 0,400 60,400 600,40" fill="#FFFFFF" />
        <polygon points="0,0 30,0 600,380 600,400 570,400 0,20" fill="#C8102E" />
        <polygon points="600,0 570,0 0,380 0,400 30,400 600,20" fill="#C8102E" />
        <rect x="240" width="120" height="400" fill="#FFFFFF" />
        <rect y="140" width="600" height="120" fill="#FFFFFF" />
        <rect x="260" width="80" height="400" fill="#C8102E" />
        <rect y="160" width="600" height="80" fill="#C8102E" />
      </svg>
    );
  }

  // Fallback: International Globe Badge
  return (
    <svg
      viewBox="0 0 24 24"
      className={`rounded-[2px] shadow-xs border border-black/10 inline-block shrink-0 bg-slate-100 p-0.5 text-slate-500 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-label="Global corridor"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
