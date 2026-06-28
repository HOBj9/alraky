import { Link } from "@/i18n/navigation";
import { ChevronRight, Home } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/i18n/routing";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: Locale;
}

export async function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  const t = await getTranslations("breadcrumbs");

  const allItems = [{ label: t("home"), href: "/" }, ...items];

  const jsonLdItems = allItems.map((item) => ({
    name: item.label,
    url: `${SITE_URL}/${locale}${item.href ?? ""}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(jsonLdItems)} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 rtl:rotate-180"
                    aria-hidden
                  />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden />}
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
