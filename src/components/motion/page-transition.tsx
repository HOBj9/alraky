"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeIn, motionTransitionFast } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-content"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeIn}
        transition={motionTransitionFast}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
