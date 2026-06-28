import { SITE_URL } from "./metadata";
import type { Locale } from "@/i18n/routing";
import { COMPANY, SOCIAL_LINKS } from "@/lib/company";

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "ar" ? COMPANY.name.ar : COMPANY.name.en,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/images/logo.png`,
    foundingDate: String(COMPANY.founded),
    description:
      locale === "ar"
        ? "منذ 1951، الراقي للصناعات الغذائية تقدم أفضل المنتجات عالية الجودة من دمشق، سوريا"
        : "Since 1951, Al RAKY Food Industries delivers premium quality food products from Damascus, Syria",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Damascus",
      addressRegion: "Kafar Sousseh",
      addressCountry: "SY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phoneTel,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd(options: {
  locale: Locale;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    image: options.image,
    datePublished: options.publishedAt,
    author: {
      "@type": "Person",
      name: options.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Al RAKY",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": options.url,
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productJsonLd(options: {
  locale: Locale;
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: options.name,
    description: options.description,
    image: options.image,
    url: options.url,
    brand: {
      "@type": "Brand",
      name: "Al RAKY",
    },
    manufacturer: {
      "@type": "Organization",
      name:
        options.locale === "ar"
          ? "الراقي للصناعات الغذائية"
          : "Al RAKY Food Industries",
    },
  };
}
