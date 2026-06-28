"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { cn, getLocalized } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  item: Testimonial;
  locale: string;
  className?: string;
  featured?: boolean;
}

export function TestimonialCard({
  item,
  locale,
  className,
  featured = false,
}: TestimonialCardProps) {
  const t = useTranslations("testimonials");

  return (
    <Card
      className={cn(
        "relative h-full overflow-hidden border-border/60 bg-card shadow-sm transition-shadow duration-300",
        featured ? "border-primary/20 shadow-md shadow-primary/5" : "border-transparent",
        className,
      )}
    >
      <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="mb-4 flex gap-1" aria-label={`${item.rating} ${t("rating")}`}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
          ))}
        </div>
        <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-7">
          &ldquo;{getLocalized(item.content, locale)}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/15">
            <Image
              src={item.image}
              alt={getLocalized(item.name, locale)}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-foreground">
              {getLocalized(item.name, locale)}
            </p>
            <p className="truncate text-sm text-muted-foreground">
              {getLocalized(item.role, locale)} — {getLocalized(item.company, locale)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
