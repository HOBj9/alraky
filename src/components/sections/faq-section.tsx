"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeader } from "@/components/layout/section-header";
import { AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getLocalized } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
  showAll?: boolean;
  limit?: number;
}

export function FAQSection({ items, showAll = false, limit = 5 }: FAQSectionProps) {
  const t = useTranslations("faq");
  const th = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();
  const displayed = showAll ? items : items.slice(0, limit);

  return (
    <section className="section-y bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={t("title")}
          title={showAll ? t("subtitle") : th("faqPreview")}
          description={showAll ? t("description") : undefined}
        />

        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
          {displayed.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={getLocalized(item.question, locale)}
              answer={getLocalized(item.answer, locale)}
              defaultOpen={index === 0}
            />
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <Link href="/faq">
              <Button variant="outline">{tc("viewAll")}</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
