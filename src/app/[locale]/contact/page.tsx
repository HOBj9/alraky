import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactForm } from "@/components/forms/contact-form";
import { COMPANY } from "@/lib/company";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tc = await getTranslations("common");

  const contactInfo = [
    { icon: MapPin, label: tc("address"), value: t("info.address") },
    { icon: Phone, label: tc("phone"), value: t("info.phone"), href: `tel:${COMPANY.phoneTel}` },
    { icon: Mail, label: tc("email"), value: t("info.email"), href: `mailto:${COMPANY.email}` },
    { icon: Clock, label: tc("workingHours"), value: t("info.hours") },
  ];

  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: t("title") }]} locale={locale as Locale} />

      <SectionHeader
        subtitle={t("title")}
        title={t("subtitle")}
        description={t("description")}
        align="start"
        className="mb-8"
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="space-y-6 lg:col-span-2">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="mt-1 font-semibold hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold">{value}</p>
                )}
              </div>
            </div>
          ))}

          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{t("info.instagram")}</p>
              <p className="mt-1 font-semibold hover:text-primary">{COMPANY.instagramHandle}</p>
            </div>
          </a>

          <div className="overflow-hidden rounded-xl border border-border">
            <div
              className="flex h-64 items-center justify-center bg-muted text-muted-foreground"
              role="img"
              aria-label={t("mapTitle")}
            >
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8" aria-hidden />
                <p className="text-sm font-medium">{t("mapTitle")}</p>
                <p className="mt-1 text-xs">{t("info.address")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
