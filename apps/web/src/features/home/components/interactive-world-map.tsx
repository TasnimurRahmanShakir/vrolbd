"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { useWorldMap } from "../hooks/use-world-map";
import { useLanguageStore, translations } from "@/stores/language.store";
import { DestinationCorridor } from "../types/corridor.types";

export function InteractiveWorldMap() {
  const { language } = useLanguageStore();
  const t = translations[language].hero;

  const {
    containerRef,
    svgRef,
    countriesPaths,
    originPoint,
    destinationPoints,
    destinations,
    hoveredInfo,
    activeCorridor,
    activeTarget,
    tooltipPos,
    zoom,
    pan,
    isDragging,
    handleZoomIn,
    handleZoomOut,
    handleReset,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
    setHoveredInfo,
    setActiveCorridor,
  } = useWorldMap();

  const [selectedRegion, setSelectedRegion] = useState<"gcc" | "europe" | "asia" | "americas">("gcc");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const regionTabs = [
    { id: "gcc", labelEn: "GCC & Middle East", labelBn: "জিসিসি ও মধ্যপ্রাচ্য", icon: "location_city" },
    { id: "europe", labelEn: "Europe & Scandinavia", labelBn: "ইউরোপ ও স্ক্যান্ডিনেভিয়া", icon: "domain" },
    { id: "asia", labelEn: "Asia-Pacific", labelBn: "এশিয়া-প্যাসিফিক", icon: "travel_explore" },
    { id: "americas", labelEn: "Americas & Oceania", labelBn: "আমেরিকা ও ওশেনিয়া", icon: "flight_takeoff" },
  ];

  const displayedDestinations = React.useMemo(() => {
    // If user is searching, search across all corridors
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      return destinations.filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          (dest.shortName && dest.shortName.toLowerCase().includes(query)) ||
          (dest.shortNameBn && dest.shortNameBn.toLowerCase().includes(query)) ||
          dest.countryCode.toLowerCase().includes(query) ||
          dest.region.toLowerCase().includes(query)
      );
    }

    // Otherwise, filter by selected region and show at most TOP 4 in one line
    const regionMatches = destinations.filter((dest) => {
      if (selectedRegion === "gcc") return dest.region.includes("GCC");
      if (selectedRegion === "europe")
        return (
          dest.region.includes("Europe") ||
          dest.region.includes("Scandinavia") ||
          dest.region.includes("Balkans") ||
          dest.region.includes("Nordics")
        );
      if (selectedRegion === "asia") return dest.region.includes("Asia");
      if (selectedRegion === "americas")
        return dest.region.includes("America") || dest.region.includes("Oceania");
      return true;
    });

    return regionMatches.slice(0, 4);
  }, [destinations, selectedRegion, searchQuery]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className={`relative w-full overflow-hidden select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {/* Subtle Backlit Ambient Radial Underlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-radial from-[#173B61]/25 via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* Minimal Top Control HUD */}
      <div className="relative z-20 flex items-center justify-between gap-3 pb-2 mb-1 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
          </span>
          <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase font-['Outfit']">
            {t.radarTitle}
          </span>
        </div>

        {/* Minimal Floating Zoom HUD */}
        <div className="flex items-center bg-[#0F243B]/80 border border-white/10 rounded-xl p-0.5 shadow-lg backdrop-blur-md">
          <button
            onClick={handleZoomIn}
            type="button"
            className="px-2 py-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px]"
            title="Zoom In (Max 6.0x)"
            aria-label="Zoom In"
          >
            <Icon name="zoom_in" size={15} className="text-[#C5A059]" />
            <span className="font-mono font-semibold">{zoom.toFixed(1)}x</span>
          </button>
          <button
            onClick={handleZoomOut}
            type="button"
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <Icon name="remove" size={15} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            title="Reset Map View"
          >
            <Icon name="restart_alt" size={15} />
          </button>
        </div>
      </div>

      {/* Main SVG Interactive Map Canvas */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[390px] my-2 select-none overflow-hidden rounded-2xl bg-[#071324]/60 border border-white/5 flex items-center justify-center">
        <svg
          ref={svgRef}
          viewBox="0 0 960 480"
          className="w-full h-full select-none"
        >
          <defs>
            <linearGradient id="activeBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFF8E7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="inactiveBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2A5B8C" stopOpacity="0.15" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g
            transform={`translate(480, 240) translate(${pan.x}, ${pan.y}) scale(${zoom}) translate(-480, -240)`}
            style={{ transition: isDragging ? "none" : "transform 0.2s ease-out" }}
          >
            <g>
              {countriesPaths.map((item) => {
                const isHovered = hoveredInfo?.isoId === item.id;
                const isCorridor = Boolean(item.corridor);
                const isActiveCorridor = activeTarget?.isoId === item.id;

                return (
                  <path
                    key={item.key}
                    d={item.path}
                    fill={isActiveCorridor ? "#1E4B7A" : isHovered ? "#24588F" : isCorridor ? "#143456" : "#0E243D"}
                    stroke={isActiveCorridor ? "#FFE599" : isHovered ? "#FFF8E7" : isCorridor ? "#E2CB8F" : "#C5A059"}
                    strokeOpacity={isActiveCorridor || isHovered ? 1 : isCorridor ? 0.95 : 0.65}
                    strokeWidth={isActiveCorridor ? 1.5 / zoom : isHovered ? 1.3 / zoom : isCorridor ? 1.05 / zoom : 0.75 / zoom}
                    className="cursor-pointer transition-colors duration-150"
                    onMouseEnter={() => setHoveredInfo({ name: item.name, isoId: item.id, corridor: item.corridor })}
                    onMouseLeave={() => setHoveredInfo(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.corridor) setActiveCorridor(activeCorridor?.id === item.corridor.id ? null : item.corridor);
                    }}
                  />
                );
              })}
            </g>

            {/* Curved Flight Trajectory Arcs with Animated Airplanes */}
            {destinationPoints.map((dest, idx) => {
              const isHighlighted = activeTarget?.id === dest.id;
              return (
                <g key={`arc-${dest.id}`}>
                  <path
                    d={dest.pathData}
                    fill="none"
                    stroke={isHighlighted ? "url(#activeBeamGrad)" : "url(#inactiveBeamGrad)"}
                    strokeWidth={isHighlighted ? 2.5 / zoom : 1.1 / zoom}
                    strokeDasharray={isHighlighted ? "none" : "3 4"}
                    filter={isHighlighted ? "url(#goldGlow)" : undefined}
                    className="transition-all duration-300"
                  />

                  {/* ✈️ Animated Aeroplane along trajectory */}
                  <motion.g
                    filter="url(#goldGlow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{
                      offsetDistance: ["0%", "100%"],
                    }}
                    transition={{
                      duration: isHighlighted ? 2.8 : 4.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (idx * 0.6) % 2.5,
                    }}
                    style={{
                      offsetPath: `path("${dest.pathData}")`,
                      offsetRotate: "auto",
                    }}
                  >
                    <g transform={`scale(${isHighlighted ? 1.05 / zoom : 0.78 / zoom}) translate(-12, -12)`}>
                      <path
                        d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                        fill={isHighlighted ? "#FFF8E7" : "#E2CB8F"}
                        stroke="#0A192F"
                        strokeWidth="0.8"
                        transform="rotate(90 12 12)"
                        className="drop-shadow-md"
                      />
                    </g>
                  </motion.g>
                </g>
              );
            })}

            {/* Dhaka, Bangladesh HQ Origin Anchor */}
            <g>
              <circle cx={originPoint.x} cy={originPoint.y} r={14 / zoom} fill="#C5A059" opacity="0.25" className="animate-ping" />
              <circle cx={originPoint.x} cy={originPoint.y} r={6.5 / zoom} fill="#0A192F" stroke="#C5A059" strokeWidth={2.5 / zoom} />
              <circle cx={originPoint.x} cy={originPoint.y} r={2.5 / zoom} fill="#FFF" />
              <text
                x={originPoint.x + 11 / zoom}
                y={originPoint.y + 4 / zoom}
                fill="#E2CB8F"
                fontSize={10.5 / zoom}
                fontWeight="bold"
                fontFamily="Outfit, sans-serif"
                letterSpacing="0.4"
              >
                {t.dhakaHq}
              </text>
            </g>

            {/* Destination Nodes */}
            {destinationPoints.map((dest) => {
              const isHighlighted = activeTarget?.id === dest.id;
              return (
                <g key={`node-${dest.id}`} className="cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveCorridor(activeCorridor?.id === dest.id ? null : dest); }}>
                  <circle cx={dest.px} cy={dest.py} r={isHighlighted ? 12 / zoom : 7 / zoom} fill={dest.region.includes("GCC") ? "#10B981" : dest.region.includes("Asia") ? "#FBBF24" : "#38BDF8"} opacity={0.3} />
                  <circle cx={dest.px} cy={dest.py} r={5 / zoom} fill={isHighlighted ? "#FFE599" : "#C5A059"} stroke="#0A192F" strokeWidth={1.5 / zoom} />
                  <circle cx={dest.px} cy={dest.py} r={1.8 / zoom} fill="#FFF" />
                </g>
              );
            })}
          </g>
        </svg>

        <AnimatePresence>
          {activeTarget && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs z-30 p-3 sm:p-4 rounded-2xl bg-[#0F243B]/95 backdrop-blur-md border border-[#C5A059]/40 shadow-2xl text-white pointer-events-none"
            >
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E2CB8F] tracking-wider block">{activeTarget.region}</span>
                  <h4 className="text-sm sm:text-base font-bold font-serif text-white">{activeTarget.name}</h4>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E2CB8F] text-[10px] font-bold">{activeTarget.countryCode}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[10px]">Deployed Workers</span>
                  <span className="text-[#E2CB8F] font-bold font-mono">{activeTarget.deployedCount.toLocaleString()}+</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Avg. Visa Time</span>
                  <span className="text-emerald-400 font-bold font-mono">{activeTarget.processingDays}</span>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-white/10">
                <span className="text-[10px] text-slate-400 block mb-1">Key Sectors:</span>
                <div className="flex flex-wrap gap-1">
                  {activeTarget.topSectors.map((sector) => (
                    <span key={sector} className="px-1.5 py-0.5 rounded bg-white/5 text-[9.5px] text-slate-300 border border-white/5">{sector}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {!activeTarget && hoveredInfo && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-3 left-3 z-30 px-3 py-2 rounded-xl bg-[#0A192F]/90 backdrop-blur-md border border-[#C5A059]/30 text-white pointer-events-none shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                <span className="text-xs font-bold text-white">{hoveredInfo.name}</span>
              </div>
              {hoveredInfo.corridor ? (
                <span className="text-[10px] text-[#E2CB8F] block mt-0.5">Bilateral Corridor • {hoveredInfo.corridor.region}</span>
              ) : (
                <span className="text-[10px] text-slate-400 block mt-0.5">Diplomatic Consular Territory</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🚀 Scalable Corridor Exploration Hub for 110+ Countries */}
      <div className="relative z-20 pt-2.5 border-t border-white/10 mt-1 space-y-2">
        {/* Tier 1: Search Input & Regional Segmented Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Quick Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="search" size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#C5A059] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "bn" ? "১১০+ দেশের করিডোর খুঁজুন (যেমন: সৌদি, সুইডেন, জাপান)..." : "Search 110+ corridors (e.g. Sweden, Japan, Saudi, UK)..."}
              className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-[#071324]/90 border border-white/15 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/40 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                title="Clear Search"
              >
                <Icon name="close" size={13} />
              </button>
            )}
          </div>

          {/* Regional Quick Tabs */}
          <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[#071324]/80 border border-white/10 overflow-x-auto no-scrollbar shrink-0">
            {regionTabs.map((tab) => {
              const isActive = selectedRegion === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSelectedRegion(tab.id as any);
                    setSearchQuery("");
                  }}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all duration-150 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#C5A059] text-[#0A192F] shadow-sm font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon name={tab.icon} size={13} className={isActive ? "text-[#0A192F]" : "text-[#C5A059]"} />
                  <span>{language === "bn" ? tab.labelBn : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Top 4 Sovereign Corridors (Single Row Grid) or Search Results */}
        <div>
          {displayedDestinations.length > 0 ? (
            <div className={searchQuery.trim() ? "flex flex-wrap gap-1.5 max-h-[88px] overflow-y-auto pr-1" : "grid grid-cols-2 sm:grid-cols-4 gap-2"}>
              {displayedDestinations.map((dest) => {
                const isSelected = activeTarget?.id === dest.id;
                const displayName = language === "bn" ? (dest.shortNameBn || dest.name) : (dest.shortName || dest.name);
                return (
                  <button
                    key={`dest-btn-${dest.id}`}
                    onMouseEnter={() => setHoveredInfo({ name: dest.name, isoId: dest.isoId, corridor: dest })}
                    onMouseLeave={() => setHoveredInfo(null)}
                    onClick={() => setActiveCorridor(activeCorridor?.id === dest.id ? null : dest)}
                    type="button"
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center justify-between gap-1.5 cursor-pointer border ${
                      isSelected
                        ? "bg-[#C5A059] text-[#0A192F] font-bold border-[#C5A059] shadow-md shadow-[#C5A059]/20"
                        : "bg-[#0F243B]/90 hover:bg-[#153456] text-slate-200 border-white/10 hover:border-[#C5A059]/40"
                    }`}
                  >
                    <span className="truncate">{displayName}</span>
                    <span className={`text-[10px] font-mono shrink-0 ${isSelected ? "text-[#0A192F]" : "text-[#C5A059]"}`}>
                      ({(dest.deployedCount / 1000).toFixed(1)}k)
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="w-full py-2.5 px-3 text-center text-xs text-slate-400 flex items-center justify-center gap-2 bg-[#071324]/50 rounded-xl border border-white/5">
              <Icon name="search_off" size={15} className="text-[#C5A059]" />
              <span>{language === "bn" ? "কোনো দেশ পাওয়া যায়নি" : "No corridors matched your search"}</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("gcc");
                }}
                className="text-[#C5A059] underline hover:text-[#E2CB8F] ml-1 cursor-pointer"
              >
                {language === "bn" ? "রিসেট করুন" : "Reset search"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
