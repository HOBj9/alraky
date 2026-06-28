"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocalized } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductsSectionProps {
  products: Product[];
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function ProductsSection({
  products,
  showAll = false,
  title,
  subtitle,
}: ProductsSectionProps) {
  const t = useTranslations("products");
  const th = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section-y bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={subtitle ?? t("title")}
          title={title ?? (showAll ? t("allProducts") : th("productsPreview"))}
          description={showAll ? t("description") : undefined}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={`/products/${product.slug}`}>
                <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={getLocalized(product.name, locale)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {getLocalized(product.name, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {getLocalized(product.shortDescription, locale)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline" className="gap-2">
                {tc("viewAll")}
                <Arrow className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
