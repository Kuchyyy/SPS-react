"use client";

import { memo, type ReactNode } from "react";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  children?: ReactNode; // 🔹 dodane
}

export const Ripple = memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 10,
  className,
  children, // 🔹 dodane
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
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;

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
      borderColor: `rgba(245, 245, 244, ${opacity})`, // stone-100
      top: "90%",
      left: "95%",
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
