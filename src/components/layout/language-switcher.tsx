"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const switchLocale = () => {
    const next = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: next });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      aria-label={t("switch")}
      className="gap-1.5 font-medium"
    >
      <Globe className="h-4 w-4" aria-hidden />
      <span>{locale === "ar" ? "EN" : "AR"}</span>
    </Button>
  );
}
