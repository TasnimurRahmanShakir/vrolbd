"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import worldDataRaw from "@/features/home/data/world-110m.json";

interface DestinationNode {
  id: string;
  name: string;
  region: string;
  coords: [number, number]; // [lng, lat]
  color: string;
}

const WORLDWIDE_NODES: DestinationNode[] = [
  // Europe & Scandinavia
  { id: "sweden", name: "Sweden (Scandinavia)", region: "Europe", coords: [18.0686, 59.3293], color: "#38BDF8" },
  { id: "romania", name: "Romania (Balkans & EU)", region: "Europe", coords: [26.1025, 44.4268], color: "#F43F5E" },
  { id: "poland", name: "Poland (Central Europe)", region: "Europe", coords: [21.0122, 52.2297], color: "#38BDF8" },
  { id: "uk", name: "United Kingdom", region: "Europe", coords: [-0.1278, 51.5074], color: "#38BDF8" },
  
  // Gulf & Middle East
  { id: "ksa", name: "Saudi Arabia (KSA)", region: "Middle East", coords: [46.6753, 24.7136], color: "#10B981" },
  { id: "uae", name: "UAE (Dubai / Abu Dhabi)", region: "Middle East", coords: [55.2708, 25.2048], color: "#10B981" },
  { id: "qatar", name: "Qatar", region: "Middle East", coords: [51.5310, 25.2854], color: "#10B981" },
  { id: "kuwait", name: "Kuwait", region: "Middle East", coords: [47.9774, 29.3759], color: "#10B981" },

  // East Asia & Asia-Pacific
  { id: "japan", name: "Japan", region: "East Asia", coords: [139.6917, 35.6895], color: "#FBBF24" },
  { id: "korea", name: "South Korea", region: "East Asia", coords: [126.9780, 37.5665], color: "#FBBF24" },
  { id: "malaysia", name: "Malaysia", region: "Southeast Asia", coords: [101.6869, 3.1390], color: "#A855F7" },
  { id: "singapore", name: "Singapore", region: "Southeast Asia", coords: [103.8198, 1.3521], color: "#A855F7" },

  // Americas & Oceania
  { id: "canada", name: "Canada", region: "North America", coords: [-75.6972, 45.4215], color: "#38BDF8" },
  { id: "australia", name: "Australia", region: "Oceania", coords: [145.0, -32.0], color: "#FBBF24" },
];

export function CountriesServedMap() {
  const [hoveredNode, setHoveredNode] = useState<DestinationNode | null>(null);

  const { paths, origin, destinations } = React.useMemo(() => {
    // 2x Zoom Natural Earth projection centered on Europe, Middle East, Asia, and Dhaka
    const projection = geoNaturalEarth1()
      .rotate([-60, 0, 0])
      .center([0, 26])
      .scale(285)
      .translate([500, 240]);

    const pathGenerator = geoPath().projection(projection);
    const countries = topojson.feature(
      worldDataRaw as any,
      (worldDataRaw as any).objects.countries
    ) as any;

    const countryPaths = countries.features.map((feat: any, idx: number) => ({
      key: `served-country-${idx}`,
      path: pathGenerator(feat) || "",
    }));

    // Dhaka HQ Coordinates
    const [dhakaX, dhakaY] = projection([90.4125, 23.8103]) || [500, 240];

    const dests = WORLDWIDE_NODES.map((node) => {
      const [destX, destY] = projection(node.coords) || [0, 0];
      const dx = destX - dhakaX;
      const dy = destY - dhakaY;
      const curvature = Math.abs(dx) > 130 ? -0.26 : -0.18;
      const midX = (dhakaX + destX) / 2 - dy * curvature;
      const midY = (dhakaY + destY) / 2 + dx * curvature;
      const arcPath = `M ${dhakaX} ${dhakaY} Q ${midX} ${midY} ${destX} ${destY}`;

      return {
        ...node,
        x: destX,
        y: destY,
        arcPath,
      };
    });

    return {
      paths: countryPaths,
      origin: { x: dhakaX, y: dhakaY },
      destinations: dests,
    };
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[390px] bg-transparent flex items-center justify-center select-none overflow-hidden">
      {/* SVG Canvas */}
      <svg
        viewBox="0 0 1000 480"
        className="w-full h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Flight Beam Gradient */}
          <linearGradient id="globalBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#E2CB8F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>

          <filter id="goldGlowPin" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Directional Soft 3D Cast Shadow */}
          <filter id="globalContinentShadow" x="-15%" y="-15%" width="135%" height="135%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Global Continents: Header Navy Fill + Gold Country Dividers */}
        <g filter="url(#globalContinentShadow)">
          {paths.map((item: { key: string; path: string }) => (
            <path
              key={item.key}
              d={item.path}
              fill="#10253E"
              stroke="#C5A059"
              strokeWidth="0.85"
              strokeOpacity="0.75"
              className="transition-colors duration-200 hover:fill-[#173B61]"
            />
          ))}
        </g>

        {/* Worldwide Flight Trajectory Arcs */}
        {destinations.map((dest, idx) => (
          <g key={`arc-${dest.id}`}>
            {/* Curved dashed beam */}
            <path
              d={dest.arcPath}
              fill="none"
              stroke="url(#globalBeamGrad)"
              strokeWidth="1.3"
              strokeDasharray="4 4"
              opacity="0.75"
            />

            {/* Flying Airplane along trajectory */}
            <motion.g
              filter="url(#goldGlowPin)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 4.5 + (idx % 4) * 0.7,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.45,
              }}
              style={{
                offsetPath: `path("${dest.arcPath}")`,
                offsetRotate: "auto",
              }}
            >
              <g transform="scale(0.5) translate(-12, -12)">
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="#FFF8E7"
                  stroke="#0A192F"
                  strokeWidth="0.8"
                  transform="rotate(90 12 12)"
                />
              </g>
            </motion.g>
          </g>
        ))}

        {/* Dhaka HQ Origin Beacon */}
        <g>
          <circle cx={origin.x} cy={origin.y} r="14" fill="#C5A059" opacity="0.35" className="animate-ping" />
          <circle cx={origin.x} cy={origin.y} r="6" fill="#0A192F" stroke="#E2CB8F" strokeWidth="2" />
          <circle cx={origin.x} cy={origin.y} r="2.5" fill="#FFF" />
          <text
            x={origin.x + 10}
            y={origin.y + 4}
            fill="#E2CB8F"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="0.05em"
            className="select-none pointer-events-none drop-shadow-md"
          >
            DHAKA HQ
          </text>
        </g>

        {/* Worldwide Destination Beacons with Glowing Pins */}
        {destinations.map((dest) => (
          <g
            key={`pin-${dest.id}`}
            className="cursor-pointer group"
            onMouseEnter={() => setHoveredNode(dest)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Pulsing Outer Glow Ring */}
            <circle
              cx={dest.x}
              cy={dest.y}
              r="9"
              fill={dest.color}
              opacity="0.4"
              className="group-hover:scale-150 transition-transform"
            />
            {/* Solid Pin Core */}
            <circle
              cx={dest.x}
              cy={dest.y}
              r="4.5"
              fill={dest.color}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              filter="url(#goldGlowPin)"
            />
            <circle cx={dest.x} cy={dest.y} r="1.5" fill="#0A192F" />
          </g>
        ))}
      </svg>

      {/* Floating Interactive Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-3 right-4 z-20 px-3.5 py-2 rounded-xl bg-[#0F243B]/95 backdrop-blur-md border border-[#C5A059]/40 shadow-2xl text-white pointer-events-none"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: hoveredNode.color }}
              />
              <span className="text-xs font-bold text-white">{hoveredNode.name}</span>
            </div>
            <span className="text-[10px] text-slate-300 block mt-0.5">
              Active Legal Migration Corridor • {hoveredNode.region}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Worldwide Regional Legend Bar */}
      <div className="absolute bottom-2 left-2 z-10 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#0F243B]/90 backdrop-blur-md border border-[#C5A059]/30 shadow-lg text-[10.5px] text-slate-200 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          <span>Europe & Scandinavia</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>GCC & Middle East</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
          <span>East Asia</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
          <span>Southeast Asia</span>
        </div>
      </div>
    </div>
  );
}
