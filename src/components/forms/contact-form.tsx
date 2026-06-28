"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactFormStore } from "@/store/ui-store";
import { scaleIn, motionTransition } from "@/lib/motion";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tv = useTranslations("validation");
  const tc = useTranslations("common");
  const { submitted, setSubmitted } = useContactFormStore();

  const schema = z.object({
    name: z.string().min(2, tv("nameRequired")),
    email: z.string().email(tv("emailInvalid")),
    phone: z.string().min(8, tv("phoneInvalid")),
    subject: z.string().min(3, tv("subjectRequired")),
    message: z.string().min(10, tv("messageMin")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={motionTransition}
          className="flex flex-col items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/5 p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          >
            <CheckCircle className="mb-4 h-12 w-12 text-secondary" aria-hidden />
          </motion.div>
          <p className="text-lg font-semibold">{tc("success")}</p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            {t("name")} <span className="text-primary">*</span>
          </label>
          <Input id="name" {...register("name")} error={!!errors.name} aria-invalid={!!errors.name} />
          {errors.name && (
            <p className="mt-1 text-xs text-primary" role="alert">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            {t("email")} <span className="text-primary">*</span>
          </label>
          <Input id="email" type="email" {...register("email")} error={!!errors.email} aria-invalid={!!errors.email} />
          {errors.email && (
            <p className="mt-1 text-xs text-primary" role="alert">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            {t("phone")} <span className="text-primary">*</span>
          </label>
          <Input id="phone" type="tel" {...register("phone")} error={!!errors.phone} aria-invalid={!!errors.phone} />
          {errors.phone && (
            <p className="mt-1 text-xs text-primary" role="alert">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
            {t("subject")} <span className="text-primary">*</span>
          </label>
          <Input id="subject" {...register("subject")} error={!!errors.subject} aria-invalid={!!errors.subject} />
          {errors.subject && (
            <p className="mt-1 text-xs text-primary" role="alert">{errors.subject.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {t("message")} <span className="text-primary">*</span>
        </label>
        <Textarea id="message" {...register("message")} error={!!errors.message} aria-invalid={!!errors.message} />
        {errors.message && (
          <p className="mt-1 text-xs text-primary" role="alert">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? tc("loading") : t("submit")}
      </Button>
    </form>
  );
}
