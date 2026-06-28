"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, motionTransition, viewportOnce } from "@/lib/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={motionTransition}
      className={cn(
        "mb-8 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && <Badge className="mb-4">{badge}</Badge>}
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ ...motionTransition, delay: 0.15 }}
          className="mt-4 text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
