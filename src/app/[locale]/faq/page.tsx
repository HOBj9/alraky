import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { faqItems } from "@/lib/content/faq";
import { getLocalized } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/faq",
  });
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");

  const faqData = faqItems.map((item) => ({
    question: getLocalized(item.question, locale),
    answer: getLocalized(item.answer, locale),
  }));

  return (
    <>
      <JsonLd data={faqJsonLd(faqData)} />
      <PageContainer tight>
        <Breadcrumbs items={[{ label: t("title") }]} locale={locale as Locale} />
      </PageContainer>
      <FAQSection items={faqItems} showAll />
      <CTASection />
    </>
  );
}
