"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Globe2, Award, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, motionTransition, staggerContainer } from "@/lib/motion";
import { PRODUCT_IMAGES } from "@/lib/content/product-images";
import { HeroBackground } from "./hero-background";

const heritageKeys = ["heritage", "export", "quality"] as const;
const heritageIcons = { heritage: Award, export: Globe2, quality: Package };

interface HeroSectionProps {
  image?: string;
  imageAlt?: string;
}

export function HeroSection({ image, imageAlt }: HeroSectionProps) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const heroImage = image?.trim() || PRODUCT_IMAGES.hero;
  const heroAlt = imageAlt?.trim() || (locale === "ar" ? "زيت زيتون" : "Olive Oil");
  const [imgSrc, setImgSrc] = useState(heroImage);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden border-b border-border/60">
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid w-full flex-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between text-center lg:text-start"
          >
            <div>
              <motion.div variants={fadeInUp} transition={motionTransition}>
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/25 bg-background/60 text-primary shadow-sm backdrop-blur-md"
                >
                  {t("badge")}
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                transition={{ ...motionTransition, delay: 0.08 }}
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span className="gradient-text">{t("title")}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ ...motionTransition, delay: 0.16 }}
                className="mt-3 text-xl font-medium text-foreground/85 sm:text-2xl"
              >
                {t("subtitle")}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                transition={{ ...motionTransition, delay: 0.24 }}
                className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                {t("description")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ ...motionTransition, delay: 0.32 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
              >
                {heritageKeys.map((key) => {
                  const Icon = heritageIcons[key];
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-md sm:text-sm"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden />
                      {t(`pillars.${key}`)}
                    </span>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              transition={{ ...motionTransition, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-0 lg:justify-start"
            >
              <Link href="/products">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/15">
                  {t("cta")}
                  <Arrow className="h-4 w-4" aria-hidden />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-border/80 bg-background/55 backdrop-blur-md">
                  {t("secondaryCta")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionTransition, delay: 0.2, duration: 0.7 }}
            className="flex flex-col justify-end"
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:ms-auto lg:max-w-[420px]">
              <div className="hero-glass-panel relative overflow-hidden rounded-3xl p-2.5 sm:p-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={imgSrc}
                    alt={heroAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 85vw, 420px"
                    className="object-cover object-center"
                    onError={() => setImgSrc(PRODUCT_IMAGES.oliveOil)}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="absolute end-3 top-3 rounded-xl border border-white/25 bg-background/75 px-3 py-2 text-start shadow-lg backdrop-blur-xl sm:end-4 sm:top-4 sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary sm:text-xs">
                    {t("estLabel")}
                  </p>
                  <p className="mt-0.5 text-xl font-bold tabular-nums text-foreground sm:text-2xl">1951</p>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -end-4 -top-4 h-20 w-20 rounded-full bg-primary/20 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-6 -start-6 h-24 w-24 rounded-full bg-secondary/15 blur-2xl"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
