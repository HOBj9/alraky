import type { Variants, Transition } from "framer-motion";

/** Respects user preference for reduced motion */
export const motionTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const motionTransitionFast: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

/** Navbar active pill — slide + width morph between routes */
export const navIndicatorTransition: Transition = {
  type: "spring",
  duration: 0.72,
  bounce: 0.08,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInFromStart: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const slideInFromEnd: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export function staggerDelay(index: number, base = 0.08) {
  return { delay: index * base };
}
