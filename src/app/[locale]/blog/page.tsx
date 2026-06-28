import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { BlogSection } from "@/components/sections/blog-section";
import { BlogFilters } from "@/components/blog/blog-filters";
import { blogPosts } from "@/lib/content/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/blog",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <>
      <PageContainer className="pb-0">
        <Breadcrumbs items={[{ label: t("title") }]} locale={locale as Locale} />
        <BlogFilters />
      </PageContainer>
      <BlogSection posts={blogPosts} showAll />
    </>
  );
}
