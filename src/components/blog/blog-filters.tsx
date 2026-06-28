"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { blogCategories, searchPosts } from "@/lib/content/blog";
import { cn, getLocalized } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogFiltersProps {
  activeCategory?: string;
}

export function BlogFilters({ activeCategory }: BlogFiltersProps) {
  const tc = useTranslations("common");
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[] | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length >= 2) {
      setSearchResults(searchPosts(value, locale));
    } else {
      setSearchResults(null);
    }
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="relative max-w-md">
        <Search
          className="absolute inset-s-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          placeholder={tc("searchPlaceholder")}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="ps-10"
          aria-label={tc("search")}
        />
      </div>

      {searchResults && (
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-3 text-sm font-medium">
            {searchResults.length} {tc("search")} &ldquo;{query}&rdquo;
          </p>
          {searchResults.length === 0 ? (
            <p className="text-sm text-muted-foreground">{tc("noResults")}</p>
          ) : (
            <ul className="space-y-2">
              {searchResults.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {getLocalized(post.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          {tc("allCategories")}
        </Link>
        {blogCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog/category/${cat.slug}`}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat.slug
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {getLocalized(cat.name, locale)}
          </Link>
        ))}
      </div>
    </div>
  );
}
