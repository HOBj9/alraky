"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { COMPANY } from "@/lib/company";

export function FloatingCallButton() {
  const t = useTranslations("common");
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.8 },
        whileHover: { scale: 1.08 },
        whileTap: { scale: 0.95 },
      };

  return createPortal(
    <motion.div
      className="fixed inset-e-6 bottom-6 z-9999"
      {...motionProps}
    >
      <a
        href={`tel:${COMPANY.phoneTel}`}
        aria-label={t("callUs")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Phone className="h-7 w-7" aria-hidden />
      </a>
    </motion.div>,
    document.body,
  );
}
