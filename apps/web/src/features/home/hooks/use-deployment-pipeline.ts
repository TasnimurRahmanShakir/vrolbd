import { useState, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useLanguageStore, translations } from "@/stores/language.store";
import {
  EMPLOYER_PIPELINE_STEPS,
  CANDIDATE_PIPELINE_STEPS,
  StepItem,
} from "../data/pipeline-steps.data";

export type PipelineViewMode = "employer" | "candidate";

export interface UseDeploymentPipelineReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  pathLength: any;
  viewMode: PipelineViewMode;
  setViewMode: (mode: PipelineViewMode) => void;
  hoveredStep: number | null;
  setHoveredStep: (id: number | null) => void;
  steps: StepItem[];
  language: "en" | "bn";
  t: (typeof translations)["en"]["pipeline"];
}

export function useDeploymentPipeline(): UseDeploymentPipelineReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguageStore();
  const t = translations[language].pipeline;

  const [viewMode, setViewMode] = useState<PipelineViewMode>("employer");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const steps =
    viewMode === "employer"
      ? EMPLOYER_PIPELINE_STEPS
      : CANDIDATE_PIPELINE_STEPS;

  return {
    containerRef,
    pathLength,
    viewMode,
    setViewMode,
    hoveredStep,
    setHoveredStep,
    steps,
    language,
    t,
  };
}
