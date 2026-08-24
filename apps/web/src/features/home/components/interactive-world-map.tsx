"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import worldDataRaw from "../data/world-110m.json";
import { ISO_NUMERIC_TO_COUNTRY } from "../data/country-names";
import { Icon } from "@/components/ui/icon";

export interface DestinationCorridor {
  id: string;
  name: string;
  countryCode: string;
  isoId: string;
  city: string;
  region: string;
  coordinates: [number, number]; // [Longitude, Latitude]
  deployedCount: number;
  activeOpenings: number;
  processingDays: string;
  topSectors: string[];
}

export interface HoveredCountryInfo {
  name: string;
  isoId: string;
  corridor?: DestinationCorridor;
}

// Dhaka, Bangladesh Origin Coordinates
const DHAKA_COORDINATES: [number, number] = [90.4125, 23.8103];

const DESTINATIONS: DestinationCorridor[] = [
  {
    id: "saudi",
    name: "Kingdom of Saudi Arabia",
    countryCode: "KSA",
    isoId: "682",
    city: "Riyadh, Jeddah & Dammam",
    region: "GCC Corridor",
    coordinates: [45.0792, 23.8859],
    deployedCount: 18450,
    activeOpenings: 120,
    processingDays: "12-14 Days",
    topSectors: ["Construction & MEP", "Industrial Logistics", "Healthcare"],
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    countryCode: "UAE",
    isoId: "784",
    city: "Dubai & Abu Dhabi",
    region: "GCC Corridor",
    coordinates: [54.3773, 24.4539],
    deployedCount: 12300,
    activeOpenings: 85,
    processingDays: "10-14 Days",
    topSectors: ["Luxury Hospitality", "Electrical Eng", "Facility Mgmt"],
  },
  {
    id: "qatar",
    name: "State of Qatar",
    countryCode: "QAT",
    isoId: "634",
    city: "Doha & Lusail",
    region: "GCC Corridor",
    coordinates: [51.25, 25.35],
    deployedCount: 8640,
    activeOpenings: 45,
    processingDays: "14-18 Days",
    topSectors: ["Oil & Gas Infrastructure", "Security", "Civil Works"],
  },
  {
    id: "kuwait",
    name: "State of Kuwait",
    countryCode: "KWT",
    isoId: "414",
    city: "Kuwait City",
    region: "GCC Corridor",
    coordinates: [47.4818, 29.3117],
    deployedCount: 4890,
    activeOpenings: 32,
    processingDays: "15-20 Days",
    topSectors: ["Healthcare & Nursing", "Heavy Transport", "Refinery"],
  },
  {
    id: "oman",
    name: "Sultanate of Oman",
    countryCode: "OMN",
    isoId: "512",
    city: "Muscat & Salalah",
    region: "GCC Corridor",
    coordinates: [57.5589, 21.4735],
    deployedCount: 3420,
    activeOpenings: 24,
    processingDays: "14-16 Days",
    topSectors: ["Marine Logistics", "Agriculture Tech", "Construction"],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    countryCode: "MYS",
    isoId: "458",
    city: "Kuala Lumpur & Penang",
    region: "Southeast Asia",
    coordinates: [101.9758, 4.2105],
    deployedCount: 5780,
    activeOpenings: 60,
    processingDays: "20-25 Days",
    topSectors: ["Semiconductor Manufacturing", "Plantations", "Services"],
  },
  {
    id: "japan",
    name: "Japan",
    countryCode: "JPN",
    isoId: "392",
    city: "Tokyo & Osaka",
    region: "East Asia",
    coordinates: [138.2529, 36.2048],
    deployedCount: 920,
    activeOpenings: 18,
    processingDays: "30-45 Days",
    topSectors: ["TITP Technical Interns", "Caregiving (SSW)", "Automotive"],
  },
  {
    id: "romania",
    name: "Romania & EU",
    countryCode: "ROU",
    isoId: "642",
    city: "Bucharest",
    region: "European Union",
    coordinates: [24.9668, 45.9432],
    deployedCount: 1650,
    activeOpenings: 28,
    processingDays: "45-60 Days",
    topSectors: ["Automotive Assembly", "Hospitality", "Industrial Welding"],
  },
];

export function InteractiveWorldMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Interaction states
  const [hoveredInfo, setHoveredInfo] = useState<HoveredCountryInfo | null>(null);
  const [activeCorridor, setActiveCorridor] = useState<DestinationCorridor | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Pan & Zoom Navigation States (Default zoomed-in state for clear visibility)
  const [zoom, setZoom] = useState(1.25);
  const [pan, setPan] = useState({ x: -20, y: -10 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Map destination corridors by ISO id
  const corridorByIso = useMemo(() => {
    const map = new Map<string, DestinationCorridor>();
    DESTINATIONS.forEach((d) => map.set(d.isoId, d));
    return map;
  }, []);

  // Natural Earth Projection with optimized focal scale
  const { countriesPaths, originPoint, destinationPoints } = useMemo(() => {
    const projection = geoNaturalEarth1()
      .scale(215)
      .translate([460, 245]);

    const pathGenerator = geoPath().projection(projection);

    // Extract geojson features from topojson
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const worldGeo = topojson.feature(worldDataRaw as any, (worldDataRaw as any).objects.countries) as any;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paths = worldGeo.features.map((feature: any, idx: number) => {
      const rawId = String(feature.id || "");
      const paddedId = rawId && rawId !== "-99" ? rawId.padStart(3, "0") : `poly-${idx}`;
      const countryName = ISO_NUMERIC_TO_COUNTRY[paddedId] || ISO_NUMERIC_TO_COUNTRY[rawId] || "International Territory";
      const corridor = corridorByIso.get(paddedId) || corridorByIso.get(rawId);

      return {
        key: `country-poly-${idx}-${paddedId}`,
        id: paddedId,
        name: countryName,
        corridor,
        path: pathGenerator(feature) || "",
      };
    });

    const origin = projection(DHAKA_COORDINATES) || [0, 0];

    const dests = DESTINATIONS.map((d) => {
      const [px, py] = projection(d.coordinates) || [0, 0];
      const dx = px - origin[0];
      const dy = py - origin[1];
      const midX = (origin[0] + px) / 2;
      const midY = (origin[1] + py) / 2;
      const curvature = Math.min(Math.abs(dx) * 0.38, 60);
      const ctrlX = midX;
      const ctrlY = midY - curvature;

      const pathData = `M ${origin[0]} ${origin[1]} Q ${ctrlX} ${ctrlY} ${px} ${py}`;

      return {
        ...d,
        px,
        py,
        pathData,
      };
    });

    return {
      countriesPaths: paths,
      originPoint: { x: origin[0], y: origin[1] },
      destinationPoints: dests,
    };
  }, [corridorByIso]);

  const activeTarget = hoveredInfo?.corridor || activeCorridor;

  // Zoom Helpers (Up to 6.0x deep zoom)
  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(Number((z + 0.4).toFixed(2)), 6.0));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(Number((z - 0.4).toFixed(2)), 0.7);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1.25);
    setPan({ x: -20, y: -10 });
    setActiveCorridor(null);
    setHoveredInfo(null);
  }, []);

  // Mouse drag pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    if (isDragging) {
      const maxPanX = 650 * (zoom + 0.5);
      const maxPanY = 450 * (zoom + 0.5);
      const newX = Math.max(-maxPanX, Math.min(maxPanX, e.clientX - dragStart.x));
      const newY = Math.max(-maxPanY, Math.min(maxPanY, e.clientY - dragStart.y));
      setPan({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse wheel zoom (Deep zoom up to 6.0x)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(Number((z + 0.25).toFixed(2)), 6.0));
    } else {
      setZoom((z) => {
        const next = Math.max(Number((z - 0.25).toFixed(2)), 0.7);
        if (next <= 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className={`relative w-full rounded-3xl glass-panel border border-[#C5A059]/30 p-5 sm:p-7 overflow-hidden shadow-2xl bg-[#06101E]/95 backdrop-blur-2xl select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {/* Backlit Subtle Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-radial from-[#173B61]/40 via-[#0A192F]/70 to-transparent blur-[110px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-2 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]" />
          </span>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white font-['Outfit']">
              Live Global Talent Corridors & Interactive Map
            </h4>
            <p className="text-[10px] text-slate-400">
              Drag to pan in any direction • Scroll wheel or HUD to zoom in/out
            </p>
          </div>
        </div>

        {/* Floating Zoom Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5 shadow-md backdrop-blur-md">
            <button
              onClick={handleZoomIn}
              type="button"
              className="px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
              title="Zoom In (Max 6.0x)"
              aria-label="Zoom In"
            >
              <Icon name="zoom_in" size={16} className="text-[#C5A059]" />
              <span className="font-mono font-semibold">{zoom.toFixed(1)}x</span>
            </button>
            <button
              onClick={handleZoomOut}
              type="button"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <Icon name="remove" size={16} />
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Reset View"
              aria-label="Reset View"
            >
              <Icon name="restart_alt" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Authentic SVG World Map with Smooth Pan & Zoom */}
      <div className="relative w-full aspect-[960/490] min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center justify-center overflow-hidden">
        <svg
          ref={svgRef}
          viewBox="0 0 960 490"
          className="w-full h-full select-none"
          style={{ filter: "drop-shadow(0 0 20px rgba(4, 9, 17, 0.95))" }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="activeBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFF8E7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="inactiveBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E4D7B" stopOpacity="0.12" />
            </linearGradient>

            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Master Navigable Group with Transform Pan & Zoom */}
          <g
            transform={`translate(480, 245) translate(${pan.x}, ${pan.y}) scale(${zoom}) translate(-480, -245)`}
            style={{ transition: isDragging ? "none" : "transform 0.2s ease-out" }}
          >
            {/* Authentic Real World Continents & Country Polygons */}
            <g>
              {countriesPaths.map((item: { key: string; id: string; name: string; corridor?: DestinationCorridor; path: string }) => {
                const isHovered = hoveredInfo?.isoId === item.id;
                const isCorridor = Boolean(item.corridor);
                const isActiveCorridor = activeTarget?.isoId === item.id;

                return (
                  <path
                    key={item.key}
                    d={item.path}
                    fill={
                      isActiveCorridor
                        ? "#1E4D7B"
                        : isHovered
                        ? "#173B61"
                        : isCorridor
                        ? "#0F2640"
                        : "#0A1B2F"
                    }
                    stroke={
                      isActiveCorridor
                        ? "#C5A059"
                        : isHovered
                        ? "#4A7FA8"
                        : isCorridor
                        ? "#1D4269"
                        : "#132D4A"
                    }
                    strokeWidth={isActiveCorridor ? 1.2 / zoom : isHovered ? 0.9 / zoom : 0.6 / zoom}
                    className="cursor-pointer transition-colors duration-150"
                    onMouseEnter={() => {
                      setHoveredInfo({
                        name: item.name,
                        isoId: item.id,
                        corridor: item.corridor,
                      });
                    }}
                    onMouseLeave={() => setHoveredInfo(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.corridor) {
                        setActiveCorridor(activeCorridor?.id === item.corridor.id ? null : item.corridor);
                      }
                    }}
                  />
                );
              })}
            </g>

            {/* Tactical HUD Coordinate Grids */}
            <g stroke="#173B61" strokeWidth={0.35 / zoom} strokeDasharray="3 5" opacity="0.35">
              <line x1="0" y1="120" x2="960" y2="120" />
              <line x1="0" y1="240" x2="960" y2="240" />
              <line x1="0" y1="360" x2="960" y2="360" />
              <line x1="240" y1="0" x2="240" y2="490" />
              <line x1="480" y1="0" x2="480" y2="490" />
              <line x1="720" y1="0" x2="720" y2="490" />
            </g>

            {/* Curved Flight Trajectory Arcs */}
            {destinationPoints.map((dest) => {
              const isHighlighted = activeTarget?.id === dest.id;

              return (
                <g key={`arc-${dest.id}`}>
                  {/* Flight Path Arc */}
                  <path
                    d={dest.pathData}
                    fill="none"
                    stroke={isHighlighted ? "url(#activeBeamGrad)" : "url(#inactiveBeamGrad)"}
                    strokeWidth={isHighlighted ? 2.5 / zoom : 1.1 / zoom}
                    strokeDasharray={isHighlighted ? "none" : "3 4"}
                    filter={isHighlighted ? "url(#goldGlow)" : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Animated Particle Beam traversing the flight arc */}
                  <motion.circle
                    r={isHighlighted ? 4 / zoom : 2.2 / zoom}
                    fill={isHighlighted ? "#FFF9E6" : "#C5A059"}
                    filter="url(#goldGlow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{
                      offsetDistance: ["0%", "100%"],
                    }}
                    transition={{
                      duration: isHighlighted ? 2.0 : 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1.5,
                    }}
                    style={{
                      offsetPath: `path("${dest.pathData}")`,
                    }}
                  />
                </g>
              );
            })}

            {/* Dhaka, Bangladesh HQ Origin Anchor */}
            <g>
              <circle cx={originPoint.x} cy={originPoint.y} r={16 / zoom} fill="#C5A059" opacity="0.2" className="animate-ping" />
              <circle cx={originPoint.x} cy={originPoint.y} r={7 / zoom} fill="#0A192F" stroke="#C5A059" strokeWidth={2.5 / zoom} />
              <circle cx={originPoint.x} cy={originPoint.y} r={3 / zoom} fill="#FFF" />
              <text
                x={originPoint.x + 12 / zoom}
                y={originPoint.y + 4 / zoom}
                fill="#E2CB8F"
                fontSize={11 / zoom}
                fontWeight="bold"
                fontFamily="Outfit, sans-serif"
                letterSpacing="0.4"
              >
                DHAKA HQ
              </text>
            </g>

            {/* Destination Nodes */}
            {destinationPoints.map((dest) => {
              const isHighlighted = activeTarget?.id === dest.id;

              return (
                <g
                  key={`node-${dest.id}`}
                  className="cursor-pointer group"
                  onMouseEnter={() => {
                    setHoveredInfo({
                      name: dest.name,
                      isoId: dest.isoId,
                      corridor: dest,
                    });
                  }}
                  onMouseLeave={() => setHoveredInfo(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCorridor(activeCorridor?.id === dest.id ? null : dest);
                  }}
                >
                  {/* Pulsing ring on hover/selection */}
                  {isHighlighted && (
                    <circle
                      cx={dest.px}
                      cy={dest.py}
                      r={16 / zoom}
                      fill="#C5A059"
                      opacity="0.25"
                      className="animate-pulse"
                    />
                  )}

                  {/* Target Node */}
                  <circle
                    cx={dest.px}
                    cy={dest.py}
                    r={isHighlighted ? 6 / zoom : 4 / zoom}
                    fill={isHighlighted ? "#C5A059" : "#173B61"}
                    stroke={isHighlighted ? "#FFF" : "#C5A059"}
                    strokeWidth={isHighlighted ? 2 / zoom : 1.2 / zoom}
                    className="transition-all duration-200 group-hover:scale-125"
                  />

                  {/* Country Code Label */}
                  <text
                    x={dest.px}
                    y={dest.py - 10 / zoom}
                    fill={isHighlighted ? "#FFF" : "#94A3B8"}
                    fontSize={9 / zoom}
                    fontWeight="600"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    className="pointer-events-none select-none transition-colors duration-200"
                  >
                    {dest.countryCode}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Dynamic Floating Glassmorphic Tooltip */}
        <AnimatePresence>
          {(hoveredInfo || activeCorridor) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 6 }}
              transition={{ duration: 0.12 }}
              className="absolute z-40 pointer-events-none p-3.5 sm:p-4 rounded-2xl glass-panel border border-[#C5A059]/45 shadow-2xl bg-[#06101E]/95 backdrop-blur-xl w-60 sm:w-68 text-left"
              style={{
                left: tooltipPos.x > 320 ? Math.max(16, tooltipPos.x - 260) : Math.min(tooltipPos.x + 16, 520),
                top: Math.max(16, Math.min(tooltipPos.y - 45, 260)),
              }}
            >
              {hoveredInfo?.corridor || activeCorridor ? (
                // Full Corridor Intelligence Card
                (() => {
                  const data = hoveredInfo?.corridor || activeCorridor!;
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A059]">
                          {data.region}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40">
                          {data.processingDays} Visa
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-0.5 flex items-center gap-1.5">
                        <Icon name="location_on" size={15} className="text-[#C5A059]" />
                        {data.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 mb-2.5">{data.city}</p>

                      <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-[11px]">Deployed Talent:</span>
                          <span className="font-bold text-white font-mono">
                            {data.deployedCount.toLocaleString()}+
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-[11px]">Active Demand:</span>
                          <span className="font-bold text-[#C5A059] font-mono">
                            {data.activeOpenings} Requisitions
                          </span>
                        </div>
                        <div className="pt-1">
                          <span className="text-[9px] text-slate-500 block mb-1">Key Sectors:</span>
                          <div className="flex flex-wrap gap-1">
                            {data.topSectors.map((sector) => (
                              <span
                                key={sector}
                                className="px-1.5 py-0.5 text-[9px] rounded bg-white/5 border border-white/10 text-slate-300"
                              >
                                {sector}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                // Generic Hover Card for Any Other Country
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-400">
                      Global Geography
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                      ISO {hoveredInfo?.isoId}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Icon name="public" size={14} className="text-[#C5A059]" />
                    {hoveredInfo?.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1">
                    International diplomatic territory & potential workforce corridor.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corridor Filter Chips */}
      <div className="relative z-20 pt-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0">Explore Corridors:</span>
        {DESTINATIONS.map((dest) => {
          const isSelected = activeTarget?.id === dest.id;
          return (
            <button
              key={`btn-${dest.id}`}
              onMouseEnter={() => {
                setHoveredInfo({
                  name: dest.name,
                  isoId: dest.isoId,
                  corridor: dest,
                });
              }}
              onMouseLeave={() => setHoveredInfo(null)}
              onClick={() => {
                setActiveCorridor(activeCorridor?.id === dest.id ? null : dest);
              }}
              type="button"
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#C5A059] text-[#0A192F] shadow-lg font-bold"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <span>{dest.name.split(" ")[0]}</span>
              <span className={`text-[10px] ${isSelected ? "text-[#0A192F]" : "text-[#C5A059]"}`}>
                ({(dest.deployedCount / 1000).toFixed(1)}k)
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
