"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/company";

const footerLinks = [
  { href: "/about", labelKey: "about" },
  { href: "/products", labelKey: "products" },
  { href: "/quality", labelKey: "quality" },
  { href: "/blog", labelKey: "blog" },
  { href: "/faq", labelKey: "faq" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const tc = useTranslations("contact.info");

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
      >
        <span
          className="block text-[clamp(4.75rem,21vw,13.5rem)] font-extrabold lowercase leading-none tracking-[0.28em] text-[#000000] opacity-[0.045] dark:text-[#ffffff] dark:opacity-[0.12]"
          style={{ paddingInlineEnd: "0.28em" }}
        >
          alraky
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Al RAKY"
              width={152}
              height={84}
              unoptimized
              className="mb-4 h-14 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tf("description")}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${handle}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{tf("quickLinks")}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{tf("followUs")}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {tc("address")}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="tel:+963116214007" className="hover:text-primary">
                  {tc("phone")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="mailto:info@alraky.com" className="hover:text-primary">
                  {tc("email")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{tf("newsletter")}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{tf("newsletterDesc")}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter subscription"
            >
              <Input
                type="email"
                placeholder={tf("newsletterPlaceholder")}
                aria-label={tf("newsletterPlaceholder")}
                required
              />
              <Button type="submit" size="sm" className="shrink-0">
                {tf("subscribe")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Al RAKY. {tf("rights")}.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-primary">
              {tf("privacy")}
            </Link>
            <Link href="/contact" className="hover:text-primary">
              {tf("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
