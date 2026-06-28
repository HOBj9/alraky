import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCallButton } from "@/components/layout/floating-call-button";
import { MainContent } from "@/components/motion/main-content";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd } from "@/lib/seo/jsonld";

const themeProviderProps = {
  attribute: "class" as const,
  defaultTheme: "dark",
  enableSystem: true,
  disableTransitionOnChange: true,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const initialTheme = await getTheme();

  return (
    <>
      <JsonLd data={organizationJsonLd(locale as Locale)} />
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider
          {...themeProviderProps}
          initialTheme={initialTheme ?? undefined}
        >
          <div className="relative flex min-h-full flex-col">
            <Header />
            <main className="flex-1">
              <MainContent>{children}</MainContent>
            </main>
            <Footer />
            <FloatingCallButton />
          </div>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
