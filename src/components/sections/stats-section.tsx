"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Leaf, Shield, Sparkles } from "lucide-react";

const stats = [
  { value: "75+", labelKey: "years" as const, icon: Award },
  { value: "15+", labelKey: "products" as const, icon: Sparkles },
  { value: "15K", labelKey: "farmers" as const, icon: Leaf },
  { value: "30+", labelKey: "countries" as const, icon: Shield },
];

export function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="border-y border-border bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5, margin: "0px 0px -48px 0px" }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden />
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
