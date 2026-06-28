import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { routing } from "@/i18n/routing";
import { products } from "@/lib/content/products";
import { blogPosts } from "@/lib/content/blog";
import { blogCategories } from "@/lib/content/blog";

export const dynamic = "force-static";

const staticPages = [
  "",
  "/about",
  "/products",
  "/quality",
  "/testimonials",
  "/blog",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}/${l}${page}`]),
          ),
        },
      });
    }

    for (const product of products) {
      entries.push({
        url: `${SITE_URL}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const category of blogCategories) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
