"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, CheckCircle, FlaskConical, Truck } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";

const certifications = ["ISO 22000", "HACCP", "Halal", "GMP"];

const steps = [
  { key: "step1" as const, descKey: "step1Desc" as const, icon: CheckCircle },
  { key: "step2" as const, descKey: "step2Desc" as const, icon: FlaskConical },
  { key: "step3" as const, descKey: "step3Desc" as const, icon: Award },
  { key: "step4" as const, descKey: "step4Desc" as const, icon: Truck },
];

interface QualitySectionProps {
  showFull?: boolean;
}

export function QualitySection({ showFull = false }: QualitySectionProps) {
  const t = useTranslations("quality");
  const th = useTranslations("home");

  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={t("title")}
          title={showFull ? t("subtitle") : th("qualityPreview")}
          description={showFull ? t("description") : undefined}
        />

        {showFull && (
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-6 py-3"
              >
                <Award className="h-5 w-5 text-secondary" aria-hidden />
                <span className="font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden border-border/50">
                <div className="absolute inset-s-0 top-0 h-1 w-full bg-linear-to-r from-primary to-secondary" />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-bold">{t(step.key)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(step.descKey)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
