"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLocalized, formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogSectionProps {
  posts: BlogPost[];
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function BlogSection({ posts, showAll = false, title, subtitle }: BlogSectionProps) {
  const t = useTranslations("blog");
  const th = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();

  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle={subtitle ?? t("title")}
          title={title ?? (showAll ? t("latest") : th("blogPreview"))}
          description={showAll && !title ? t("description") : undefined}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                  <div className="relative aspect-16/10 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={getLocalized(post.title, locale)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <Badge className="absolute inset-s-3 top-3 bg-background/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {post.readTime} {tc("minutesRead")}
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {getLocalized(post.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {getLocalized(post.excerpt, locale)}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      {formatDate(post.publishedAt, locale)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button variant="outline">{tc("viewAll")}</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
