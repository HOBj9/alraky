import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductsSection } from "@/components/sections/products-section";
import { QualitySection } from "@/components/sections/quality-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { getFeaturedProducts, products } from "@/lib/content/products";
import { PRODUCT_IMAGES } from "@/lib/content/product-images";
import { blogPosts } from "@/lib/content/blog";
import { testimonials } from "@/lib/content/testimonials";
import { faqItems } from "@/lib/content/faq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("siteName"),
    description: t("description"),
    path: "",
    keywords: ["food industry", "Egypt", "premium food", "الراقي"],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const featuredProducts = getFeaturedProducts();
  const latestPosts = blogPosts.slice(0, 3);
  const loc = locale as Locale;

  const oliveProduct = products.find((p) => p.slug === "extra-virgin-olive-oil");
  const heroAlt =
    oliveProduct?.name[loc] ?? oliveProduct?.name.en ?? (loc === "ar" ? "زيت زيتون" : "Olive Oil");

  return (
    <>
      <HeroSection image={PRODUCT_IMAGES.hero} imageAlt={heroAlt} />
      <StatsSection />
      <AboutSection />
      <ProductsSection products={featuredProducts} />
      <QualitySection />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection posts={latestPosts} />
      <FAQSection items={faqItems} />
      <CTASection />
    </>
  );
}
