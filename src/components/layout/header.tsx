"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";
import {
  motionTransitionFast,
  navIndicatorTransition,
  staggerContainer,
} from "@/lib/motion";

const navItems = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/products", labelKey: "products" },
  { href: "/quality", labelKey: "quality" },
  { href: "/testimonials", labelKey: "testimonials" },
  { href: "/blog", labelKey: "blog" },
  { href: "/faq", labelKey: "faq" },
  { href: "/contact", labelKey: "contact" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  layoutId: string;
  className?: string;
  onClick?: () => void;
}

function NavLink({ href, label, active, layoutId, className, onClick }: NavLinkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-flex items-center justify-center font-medium",
        "transition-[color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        active
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-lg bg-primary shadow-sm shadow-primary/20"
          transition={
            prefersReducedMotion ? { duration: 0 } : navIndicatorTransition
          }
          style={{ willChange: "transform, width, height" }}
          aria-hidden
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </Link>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center gap-2" aria-label="Al RAKY Home">
          <Image
            src="/images/logo.png"
            alt="Al RAKY Logo"
            width={132}
            height={72}
            unoptimized
            className="h-11 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <LayoutGroup id="desktop-nav">
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={t(item.labelKey)}
                  active={active}
                  layoutId="nav-active-indicator"
                  className="rounded-lg px-3 py-2 text-sm"
                />
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="/contact" className="hidden sm:block">
            <Button size="sm">{tc("contactUs")}</Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden w-9 px-0"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={motionTransitionFast}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
            aria-hidden={false}
          >
            <LayoutGroup id="mobile-nav">
              <motion.nav
                className="flex flex-col gap-1 p-4"
                aria-label="Mobile navigation"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
              {navItems.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <NavLink
                      href={item.href}
                      label={t(item.labelKey)}
                      active={active}
                      layoutId="nav-active-indicator-mobile"
                      className="w-full rounded-xl px-4 py-3 text-base justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                  </motion.div>
                );
              })}
              <motion.div
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                className="mt-4"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">{tc("contactUs")}</Button>
                </Link>
              </motion.div>
              </motion.nav>
            </LayoutGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
