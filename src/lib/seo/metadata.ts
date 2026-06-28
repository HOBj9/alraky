import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alraky.com";

interface PageMetadataOptions {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
}

export function buildMetadata({
  locale,
  title,
  description,
  path,
  image = "/images/logo.png",
  type = "website",
  publishedTime,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  const fullTitle = `${title} | Al RAKY`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Al RAKY",
      "الراقي",
      "food industry",
      "Egypt food",
      ...keywords,
    ],
    alternates: {
      canonical: url,
      languages: {
        ar: `${SITE_URL}/ar${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Al RAKY",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type,
      images: [{ url: `${SITE_URL}${image}`, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export { SITE_URL };
