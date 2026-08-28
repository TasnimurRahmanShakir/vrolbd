"use client";

import React from "react";
import { motion } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import worldDataRaw from "@/features/home/data/world-110m.json";

export function AboutHeroWorldMap() {
  // Generate high-precision natural earth country paths
  const { paths, origin, destinations } = React.useMemo(() => {
    const projection = geoNaturalEarth1()
      .rotate([-85, 0, 0])
      .center([0, 20])
      .scale(265)
      .translate([760, 260]);

    const pathGenerator = geoPath().projection(projection);
    const countries = topojson.feature(
      worldDataRaw as any,
      (worldDataRaw as any).objects.countries
    ) as any;

    const countryPaths = countries.features.map((feat: any, idx: number) => ({
      key: `about-country-${idx}`,
      path: pathGenerator(feat) || "",
    }));

    // Dhaka HQ Coordinates
    const [dhakaX, dhakaY] = projection([90.4125, 23.8103]) || [760, 260];

    // Global Hubs for connecting arcs
    const hubs = [
      { id: "ksa", coords: [46.6753, 24.7136], name: "Saudi Arabia" },
      { id: "uae", coords: [55.2708, 25.2048], name: "UAE" },
      { id: "qatar", coords: [51.531, 25.2854], name: "Qatar" },
      { id: "romania", coords: [26.1025, 44.4268], name: "Romania" },
      { id: "japan", coords: [139.6917, 35.6895], name: "Japan" },
      { id: "malaysia", coords: [101.6869, 3.139], name: "Malaysia" },
      { id: "kuwait", coords: [47.9774, 29.3759], name: "Kuwait" },
    ];

    const destPoints = hubs.map((hub) => {
      const [destX, destY] = projection(hub.coords as [number, number]) || [0, 0];
      const dx = destX - dhakaX;
      const dy = destY - dhakaY;
      const curvature = Math.abs(dx) > 120 ? -0.28 : -0.2;
      const midX = (dhakaX + destX) / 2 - dy * curvature;
      const midY = (dhakaY + destY) / 2 + dx * curvature;
      const pathData = `M ${dhakaX} ${dhakaY} Q ${midX} ${midY} ${destX} ${destY}`;

      return {
        id: hub.id,
        name: hub.name,
        x: destX,
        y: destY,
        pathData,
      };
    });

    return {
      paths: countryPaths,
      origin: { x: dhakaX, y: dhakaY },
      destinations: destPoints,
    };
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 h-[680px] sm:h-[760px] lg:h-[820px] pointer-events-none overflow-hidden select-none z-0">
      {/* Soft Vignette Mask */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A192F]/50 to-[#0A192F] z-10" />

      <svg
        viewBox="0 0 1200 520"
        className="w-full h-full object-cover opacity-60 sm:opacity-75 [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0.9)_45%,rgba(0,0,0,0.3)_75%,transparent_100%)]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="aboutFlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#E2CB8F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>

          <filter id="aboutGoldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Global Country Landmasses with Royal Gold Borders */}
        <g>
          {paths.map((item: { key: string; path: string }) => (
            <path
              key={item.key}
              d={item.path}
              fill="#0E243D"
              stroke="#C5A059"
              strokeWidth="0.8"
              opacity="0.85"
            />
          ))}
        </g>

        {/* Tactical Latitude/Longitude Grid Lines */}
        <g stroke="#173B61" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35">
          <line x1="0" y1="120" x2="1080" y2="120" />
          <line x1="0" y1="240" x2="1080" y2="240" />
          <line x1="0" y1="360" x2="1080" y2="360" />
          <line x1="270" y1="0" x2="270" y2="480" />
          <line x1="540" y1="0" x2="540" y2="480" />
          <line x1="810" y1="0" x2="810" y2="480" />
        </g>

        {/* Curved Connecting Flight Trajectory Arcs */}
        {destinations.map((dest, idx) => (
          <g key={`about-arc-${dest.id}`}>
            {/* Dashed Flight Arc Line */}
            <path
              d={dest.pathData}
              fill="none"
              stroke="url(#aboutFlightBeam)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.75"
            />

            {/* Moving Aeroplane Along Connecting Corridor */}
            <motion.g
              filter="url(#aboutGoldGlow)"
              initial={{ offsetDistance: "0%" }}
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 4.5 + (idx % 3) * 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.7,
              }}
              style={{
                offsetPath: `path("${dest.pathData}")`,
                offsetRotate: "auto",
              }}
            >
              <g transform="scale(0.55) translate(-12, -12)">
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="#FFF8E7"
                  stroke="#0A192F"
                  strokeWidth="0.8"
                  transform="rotate(90 12 12)"
                />
              </g>
            </motion.g>

            {/* Destination Hub Pulsing Beacon */}
            <circle
              cx={dest.x}
              cy={dest.y}
              r="7"
              fill="#C5A059"
              opacity="0.25"
              className="animate-ping"
            />
            <circle cx={dest.x} cy={dest.y} r="3" fill="#0A192F" stroke="#C5A059" strokeWidth="1.2" />
            <circle cx={dest.x} cy={dest.y} r="1.5" fill="#FFF" />
          </g>
        ))}

        {/* Dhaka HQ Central Anchor */}
        <g>
          <circle
            cx={origin.x}
            cy={origin.y}
            r="12"
            fill="#C5A059"
            opacity="0.35"
            className="animate-ping"
          />
          <circle cx={origin.x} cy={origin.y} r="5" fill="#0A192F" stroke="#E2CB8F" strokeWidth="2" />
          <circle cx={origin.x} cy={origin.y} r="2" fill="#FFF" />
        </g>
      </svg>
    </div>
  );
}
