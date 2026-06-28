"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary/80 px-6 py-10 text-center text-primary-foreground sm:px-12"
        >
          <div className="absolute inset-0 grid-pattern opacity-10" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{t("description")}</p>
            <Link href="/contact" className="mt-8 inline-block">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {t("button")}
                <Arrow className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
