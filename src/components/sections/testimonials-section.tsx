"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Testimonials3DCarousel } from "@/components/testimonials/testimonials-3d-carousel";
import { clientLogos } from "@/lib/content/testimonials";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  showFull?: boolean;
}

export function TestimonialsSection({
  testimonials,
  showFull = false,
}: TestimonialsSectionProps) {
  const t = useTranslations("testimonials");
  const th = useTranslations("home");
  const tc = useTranslations("common");
  const carouselItems = showFull ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="section-y bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={t("title")}
          title={showFull ? t("subtitle") : th("testimonialsPreview")}
          description={showFull ? t("description") : undefined}
        />

        <Testimonials3DCarousel testimonials={carouselItems} className="mt-4" />

        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("clients")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 w-24 items-center justify-center rounded-lg border border-border bg-card text-sm font-bold text-muted-foreground"
                aria-label={logo.name}
              >
                {logo.initials}
              </div>
            ))}
          </div>
        </div>

        {!showFull && (
          <div className="mt-8 text-center">
            <Link href="/testimonials">
              <Button variant="outline">{tc("viewAll")}</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
