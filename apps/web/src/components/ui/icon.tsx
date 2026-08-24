import React from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  className?: string;
  size?: number | string;
  fill?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  opticalSize?: 20 | 24 | 40 | 48;
}

export function Icon({
  name,
  className,
  size = 24,
  fill = false,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  style,
  ...props
}: IconProps) {
  const fontVariationSettings = `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`;
  const sizeStyle = typeof size === "number" ? `${size}px` : size;

  return (
    <span
      className={cn(
        "material-symbols-outlined inline-flex items-center justify-center select-none leading-none",
        className
      )}
      style={{
        fontVariationSettings,
        fontSize: sizeStyle,
        width: sizeStyle,
        height: sizeStyle,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  );
}
