import React, { useState, useMemo, useCallback, useRef } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import worldDataRaw from "../data/world-110m.json";
import { ISO_NUMERIC_TO_COUNTRY } from "../data/country-names";
import { DESTINATIONS, DHAKA_COORDINATES } from "../data/corridors.data";
import {
  DestinationCorridor,
  HoveredCountryInfo,
  CountryPathItem,
  DestinationPoint,
  OriginPoint,
} from "../types/corridor.types";

export interface UseWorldMapReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  svgRef: React.RefObject<SVGSVGElement | null>;
  countriesPaths: CountryPathItem[];
  originPoint: OriginPoint;
  destinationPoints: DestinationPoint[];
  destinations: DestinationCorridor[];
  hoveredInfo: HoveredCountryInfo | null;
  activeCorridor: DestinationCorridor | null;
  activeTarget: DestinationCorridor | null | undefined;
  tooltipPos: { x: number; y: number };
  zoom: number;
  pan: { x: number; y: number };
  isDragging: boolean;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleReset: () => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleWheel: (e: React.WheelEvent) => void;
  setHoveredInfo: (info: HoveredCountryInfo | null) => void;
  setActiveCorridor: React.Dispatch<React.SetStateAction<DestinationCorridor | null>>;
}

export function useWorldMap(): UseWorldMapReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [hoveredInfo, setHoveredInfo] = useState<HoveredCountryInfo | null>(null);
  const [activeCorridor, setActiveCorridor] = useState<DestinationCorridor | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Pan & Zoom Navigation States (Initial focused zoom on major corridors)
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

  // Natural Earth Projection with focal scale
  const { countriesPaths, originPoint, destinationPoints } = useMemo(() => {
    const projection = geoNaturalEarth1()
      .scale(215)
      .translate([460, 245]);

    const pathGenerator = geoPath().projection(projection);

    // Extract geojson features from topojson
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const worldGeo = topojson.feature(worldDataRaw as any, (worldDataRaw as any).objects.countries) as any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paths: CountryPathItem[] = worldGeo.features.map((feature: any, idx: number) => {
      const rawId = String(feature.id || "");
      const paddedId = rawId && rawId !== "-99" ? rawId.padStart(3, "0") : `poly-${idx}`;
      const countryName =
        ISO_NUMERIC_TO_COUNTRY[paddedId] || ISO_NUMERIC_TO_COUNTRY[rawId] || "International Territory";
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

    const dests: DestinationPoint[] = DESTINATIONS.map((d) => {
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

  // Zoom Controls
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

  // Mouse Drag / Pan Handlers
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

  // Mouse Wheel Zoom
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

  return {
    containerRef,
    svgRef,
    countriesPaths,
    originPoint,
    destinationPoints,
    destinations: DESTINATIONS,
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
  };
}
