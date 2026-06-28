"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

const AUTOPLAY_MS = 4500;

interface Testimonials3DCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  autoplayMs?: number;
}

export function Testimonials3DCarousel({
  testimonials,
  className,
  autoplayMs = AUTOPLAY_MS,
}: Testimonials3DCarouselProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const count = testimonials.length;
  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      const next = ((index % count) + count) % count;
      setActive(next);
      dragX.set(0);
    },
    [count, dragX],
  );

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (prefersReducedMotion || count <= 1 || isPaused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
      dragX.set(0);
    }, autoplayMs);

    return () => window.clearInterval(id);
  }, [autoplayMs, count, dragX, isPaused, prefersReducedMotion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        isRtl ? goNext() : goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        isRtl ? goPrev() : goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goNext, goPrev, isRtl]);

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = isRtl ? -info.offset.x : info.offset.x;
    const velocity = isRtl ? -info.velocity.x : info.velocity.x;
    if (offset < -60 || velocity < -400) goNext();
    else if (offset > 60 || velocity > 400) goPrev();
    else animate(dragX, 0, { type: "spring", stiffness: 400, damping: 35 });
  };

  if (count === 0) return null;

  const getCardStyle = (index: number) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;

    const clamped = Math.max(-3, Math.min(3, diff));
    const abs = Math.abs(clamped);

    const rotateY = clamped * -22;
    const translateX = clamped * 195;
    const translateZ = -abs * 85;
    const scale = 1 - abs * 0.08;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.88 : 0.55;
    const zIndex = 10 - abs;

    return { rotateY, translateX, translateZ, scale, opacity, zIndex, abs, isActive: clamped === 0 };
  };

  return (
    <div
      className={cn("relative mx-auto w-full max-w-7xl", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        ref={containerRef}
        className="relative h-[min(400px,58vh)] w-full select-none overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d", x: dragX }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={(e, info) => {
            onDragEnd(e, info);
            setIsPaused(false);
          }}
        >
          {testimonials.map((item, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={item.id}
                className="absolute overflow-hidden rounded-2xl w-[min(300px,72vw)] cursor-grab active:cursor-grabbing sm:w-[min(320px,42vw)] lg:w-[min(340px,28vw)]"
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1200,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  zIndex: style.zIndex,
                }}
                animate={{
                  rotateY: style.rotateY,
                  x: style.translateX,
                  z: style.translateZ,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 28 }
                }
                onClick={() => {
                  if (!style.isActive) goTo(index);
                }}
              >
                <TestimonialCard
                  item={item}
                  locale={locale}
                  featured={style.isActive}
                  className={cn(
                    "min-h-[300px] transition-shadow duration-300",
                    style.isActive ? "shadow-2xl shadow-primary/10" : "shadow-lg",
                  )}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5"
        >
          {isRtl ? (
            <ChevronRight className="h-5 w-5" aria-hidden />
          ) : (
            <ChevronLeft className="h-5 w-5" aria-hidden />
          )}
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === active}
              onClick={() => goTo(dotIndex)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                dotIndex === active
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5"
        >
          {isRtl ? (
            <ChevronLeft className="h-5 w-5" aria-hidden />
          ) : (
            <ChevronRight className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
