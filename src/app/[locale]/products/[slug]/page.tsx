import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata, SITE_URL } from "@/lib/seo/metadata";
import { productJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { getProductBySlug, products, productCategories } from "@/lib/content/products";
import { getLocalized, getLocalizedArray } from "@/lib/utils";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return products.flatMap((product) =>
    ["ar", "en"].map((locale) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    locale: locale as Locale,
    title: getLocalized(product.name, locale),
    description: getLocalized(product.shortDescription, locale),
    path: `/products/${slug}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("products");
  const category = productCategories.find((c) => c.slug === product.category);
  const name = getLocalized(product.name, locale);
  const description = getLocalized(product.description, locale);
  const features = getLocalizedArray(product.features, locale);

  return (
    <>
      <JsonLd
        data={productJsonLd({
          locale: locale as Locale,
          name,
          description,
          url: `${SITE_URL}/${locale}/products/${slug}`,
          image: product.image,
        })}
      />
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t("title"), href: "/products" },
            { label: name },
          ]}
          locale={locale as Locale}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={product.image}
              alt={name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            {category && (
              <Badge variant="secondary" className="mb-4">
                {getLocalized(category.name, locale)}
              </Badge>
            )}
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="mt-8">
              <h2 className="mb-4 font-semibold">{t("features")}</h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
      <CTASection />
    </>
  );
}
