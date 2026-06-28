"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobTransition = {
  duration: 28,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-surface absolute inset-0" />

      <motion.div
        className="absolute -start-[12%] top-[8%] h-[420px] w-[420px] rounded-full bg-primary/18 blur-[100px] sm:h-[520px] sm:w-[520px]"
        animate={prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, -18, 0], opacity: [0.55, 0.7, 0.55] }}
        transition={blobTransition}
      />
      <motion.div
        className="absolute end-[-8%] top-[18%] h-[380px] w-[380px] rounded-full bg-secondary/16 blur-[96px] sm:h-[480px] sm:w-[480px]"
        animate={prefersReducedMotion ? undefined : { x: [0, -20, 0], y: [0, 14, 0], opacity: [0.45, 0.62, 0.45] }}
        transition={{ ...blobTransition, duration: 32 }}
      />
      <motion.div
        className="absolute start-[35%] bottom-[-10%] h-[340px] w-[340px] rounded-full bg-primary/10 blur-[88px]"
        animate={prefersReducedMotion ? undefined : { x: [0, 16, 0], y: [0, -12, 0] }}
        transition={{ ...blobTransition, duration: 36 }}
      />

      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grain absolute inset-0 opacity-[0.035] dark:opacity-[0.06]" />
    </div>
  );
}
