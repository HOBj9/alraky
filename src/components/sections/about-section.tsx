"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Lightbulb, Shield, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_IMAGES } from "@/lib/content/product-images";

const values = [
  { key: "valueQuality" as const, descKey: "valueQualityDesc" as const, icon: Shield },
  { key: "valueTrust" as const, descKey: "valueTrustDesc" as const, icon: Heart },
  { key: "valueInnovation" as const, descKey: "valueInnovationDesc" as const, icon: Lightbulb },
  { key: "valueSustainability" as const, descKey: "valueSustainabilityDesc" as const, icon: Leaf },
];

interface AboutSectionProps {
  showFull?: boolean;
}

export function AboutSection({ showFull = false }: AboutSectionProps) {
  const t = useTranslations("about");
  const th = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={t("title")}
          title={showFull ? t("subtitle") : th("aboutPreview")}
          description={showFull ? t("description") : undefined}
          align={showFull ? "start" : "center"}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: locale === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src={PRODUCT_IMAGES.oliveOil}
              alt={t("title")}
              fill
              priority={showFull}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div className="flex flex-col justify-center gap-6">
            {showFull && (
              <>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t("mission")}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t("missionText")}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{t("vision")}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t("visionText")}</p>
                </div>
              </>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-5">
                      <value.icon className="mb-3 h-6 w-6 text-secondary" aria-hidden />
                      <h4 className="font-semibold">{t(value.key)}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{t(value.descKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {!showFull && (
              <Link href="/about">
                <Button variant="outline" className="w-fit gap-2">
                  {tc("learnMore")}
                  <Arrow className="h-4 w-4" aria-hidden />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
