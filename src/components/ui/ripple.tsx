"use client";

import { memo, type ReactNode } from "react";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  children?: ReactNode; // 🔹 dodane
  circleTop?: string
  circleLeft?: string
  borderColor?: string
  sizeIncrement?: number
}

export const Ripple = memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 1,
  numCircles = 10,
  className,
  children, // 🔹 dodane
  circleTop,
  circleLeft,
  borderColor,
  sizeIncrement = 70,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {/* Kręgi */}
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * sizeIncrement;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;

        let finalBorderColor: string;
        if (borderColor) {
          const rgbMatch = borderColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            finalBorderColor = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
          } else {
            finalBorderColor = borderColor;
          }
        } else {
          finalBorderColor = `rgba(245, 245, 244, ${opacity})`;
        }

        return (
          <div
            key={i}
            className="absolute rounded-full border shadow-xl animate-pulse-ripple"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: finalBorderColor,
                top: circleTop ?? "90%",
                left: circleLeft ?? "95%",
                transform: "translate(-50%, -50%) scale(1)",
                animationDelay,
              } as CSSProperties
            }
          />

        );
      })}

      {/* 🔹 Napis w środku ripple */}
      {children && (
        <div className="absolute top-1/2 left-1/2 translate-x-[20%] -translate-y-1/2 z-20">
          <span className="font-bold text-lg text-black">{children}</span>
        </div>
      )}
    </div>
  );
});

Ripple.displayName = "Ripple";


export type { RippleProps };
