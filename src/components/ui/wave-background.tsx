"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export const WaveBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full overflow-hidden bg-brand-navy", className)}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6321" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#141414" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6321" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#141414" stopOpacity="0" />
            </linearGradient>
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>
          
          <g filter="url(#blurFilter)">
            <motion.path
              d="M0,400 Q360,200 720,400 T1440,400 V800 H0 Z"
              fill="url(#grad1)"
              animate={{
                d: [
                  "M0,400 Q360,200 720,400 T1440,400 V800 H0 Z",
                  "M0,400 Q360,600 720,400 T1440,400 V800 H0 Z",
                  "M0,400 Q360,200 720,400 T1440,400 V800 H0 Z",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.path
              d="M0,500 Q360,700 720,500 T1440,500 V800 H0 Z"
              fill="url(#grad2)"
              animate={{
                d: [
                  "M0,500 Q360,700 720,500 T1440,500 V800 H0 Z",
                  "M0,500 Q360,300 720,500 T1440,500 V800 H0 Z",
                  "M0,500 Q360,700 720,500 T1440,500 V800 H0 Z",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
