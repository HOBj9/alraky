"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp, motionTransition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants =
    direction === "down"
      ? { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } }
      : direction === "none"
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : fadeInUp;

  return (
    <motion.div
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...motionTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
