import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { ProductsSection } from "@/components/sections/products-section";
import { CTASection } from "@/components/sections/cta-section";
import { products } from "@/lib/content/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/products",
  });
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");

  return (
    <>
      <PageContainer tight>
        <Breadcrumbs items={[{ label: t("title") }]} locale={locale as Locale} />
      </PageContainer>
      <ProductsSection products={products} showAll title={t("allProducts")} subtitle={t("title")} />
      <CTASection />
    </>
  );
}
