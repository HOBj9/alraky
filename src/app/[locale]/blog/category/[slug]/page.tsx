import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { BlogSection } from "@/components/sections/blog-section";
import { BlogFilters } from "@/components/blog/blog-filters";
import { blogCategories, getPostsByCategory } from "@/lib/content/blog";
import { getLocalized } from "@/lib/utils";

export function generateStaticParams() {
  return blogCategories.flatMap((cat) =>
    ["ar", "en"].map((locale) => ({ locale, slug: cat.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return {};

  const name = getLocalized(category.name, locale);

  return buildMetadata({
    locale: locale as Locale,
    title: name,
    description: `${name} - Al RAKY Blog`,
    path: `/blog/category/${slug}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const t = await getTranslations("blog");
  const name = getLocalized(category.name, locale);
  const posts = getPostsByCategory(slug);

  return (
    <>
      <PageContainer className="pb-0">
        <Breadcrumbs
          items={[
            { label: t("title"), href: "/blog" },
            { label: name },
          ]}
          locale={locale as Locale}
        />
        <BlogFilters activeCategory={slug} />
      </PageContainer>
      <BlogSection posts={posts} showAll title={name} subtitle={t("categories")} />
    </>
  );
}
