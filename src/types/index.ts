export interface Product {
  id: string;
  slug: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  category: string;
  image: string;
  features: { ar: string[]; en: string[] };
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  content: { ar: string; en: string };
  category: string;
  categorySlug: string;
  author: { ar: string; en: string };
  publishedAt: string;
  readTime: number;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  content: { ar: string; en: string };
  rating: number;
  image: string;
  galleryImage?: string;
}

export interface FAQItem {
  id: string;
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
  category: string;
}

export interface NavItem {
  href: string;
  labelKey: string;
}

export interface StatItem {
  value: string;
  labelKey: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
