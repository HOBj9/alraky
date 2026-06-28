"use client";

import { PageTransition } from "@/components/motion/page-transition";

export function MainContent({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
