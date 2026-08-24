"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export interface KineticOdometerProps {
  value: string;
  className?: string;
}

export function KineticOdometer({ value, className = "" }: KineticOdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Extract number and suffix safely, e.g. "22.8K+" -> num: 22.8, suffix: "K+"
  const match = value ? value.match(/^([\d.]+)(.*)$/) : null;
  const targetNum = match && match[1] ? parseFloat(match[1]) : 0;
  const suffix = match && match[2] ? match[2] : "";
  const isDecimal = match && match[1] ? match[1].includes(".") : false;

  const [displayValue, setDisplayValue] = useState("0");
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    stiffness: 70,
    damping: 18,
    mass: 0.8,
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(targetNum);
    }
  }, [isInView, motionVal, targetNum]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      if (isDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.round(latest).toLocaleString());
      }
    });
    return () => unsubscribe();
  }, [springVal, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
