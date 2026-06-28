"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, motionTransition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerProps extends HTMLMotionProps<"div"> {
  slow?: boolean;
}

export function Stagger({
  children,
  className,
  slow = false,
  ...props
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? undefined
          : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
      }
      transition={motionTransition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
