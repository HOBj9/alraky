import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold">{t("noResults")}</h1>
      <Link href="/" className="mt-8">
        <Button>{t("backToHome")}</Button>
      </Link>
    </div>
  );
}
