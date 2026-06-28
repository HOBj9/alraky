import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata, SITE_URL } from "@/lib/seo/metadata";
import { articleJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogSection } from "@/components/sections/blog-section";
import { Badge } from "@/components/ui/badge";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/content/blog";
import { getLocalized, formatDate } from "@/lib/utils";
import { Clock, User } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.flatMap((post) =>
    ["ar", "en"].map((locale) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    locale: locale as Locale,
    title: getLocalized(post.title, locale),
    description: getLocalized(post.excerpt, locale),
    path: `/blog/${slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.publishedAt,
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const tc = await getTranslations("common");
  const title = getLocalized(post.title, locale);
  const content = getLocalized(post.content, locale);
  const author = getLocalized(post.author, locale);
  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          locale: locale as Locale,
          title,
          description: getLocalized(post.excerpt, locale),
          url: `${SITE_URL}/${locale}/blog/${slug}`,
          image: post.image,
          publishedAt: post.publishedAt,
          author,
        })}
      />
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t("title"), href: "/blog" },
            { label: title },
          ]}
          locale={locale as Locale}
        />

        <article>
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden />
                {t("by")} {author}
              </span>
              <span>{t("publishedOn")} {formatDate(post.publishedAt, locale)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden />
                {post.readTime} {tc("minutesRead")}
              </span>
            </div>

            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-muted">
              <Image
                src={post.image}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div className="prose prose-lg mt-8 max-w-none dark:prose-invert">
              {content.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mb-4 text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </PageContainer>

      {related.length > 0 && (
        <BlogSection posts={related} showAll title={tc("relatedArticles")} />
      )}
    </>
  );
}
