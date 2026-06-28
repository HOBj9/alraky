import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalized<T extends Record<"ar" | "en", string>>(
  field: T,
  locale: string,
): string {
  const key = locale === "en" ? "en" : "ar";
  return field[key];
}

export function getLocalizedArray<T extends Record<"ar" | "en", string[]>>(
  field: T,
  locale: string,
): string[] {
  const key = locale === "en" ? "en" : "ar";
  return field[key];
}

export function formatDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
