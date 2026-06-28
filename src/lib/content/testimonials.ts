import type { Testimonial } from "@/types";
import { PRODUCT_IMAGES } from "./product-images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: { ar: "محمد العبد", en: "Mohamed El-Abd" },
    role: { ar: "مدير المشتريات", en: "Procurement Manager" },
    company: { ar: "سلسلة مطاعم النيل", en: "Nile Restaurant Chain" },
    content: {
      ar: "نتعامل مع الراقي منذ أكثر من 15 عاماً. جودة منتجاتهم ثابتة وخدمتهم ممتازة. معجون الطماطم والبهارات من أفضل ما جربناه في السوق المصري.",
      en: "We've worked with Al RAKY for over 15 years. Their product quality is consistent and service is excellent. Their tomato paste and spices are among the best we've tried in the Egyptian market.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.tomatoPaste,
  },
  {
    id: "2",
    name: { ar: "فاطمة حسن", en: "Fatma Hassan" },
    role: { ar: "صاحبة مطبخ منزلي", en: "Home Kitchen Owner" },
    company: { ar: "مطبخ أم فاطمة", en: "Umm Fatma Kitchen" },
    content: {
      ar: "منتجات الراقي أساسية في مطبخي. العملاء دائماً يسألون عن سر النكهة — والسر هو جودة المكونات من الراقي.",
      en: "Al RAKY products are essential in my kitchen. Customers always ask about the secret flavor — and the secret is Al RAKY's quality ingredients.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.oliveOil,
  },
  {
    id: "3",
    name: { ar: "أحمد رشدي", en: "Ahmed Rushdy" },
    role: { ar: "مدير التسويق", en: "Marketing Director" },
    company: { ar: "كارفور مصر", en: "Carrefour Egypt" },
    content: {
      ar: "الراقي من أكثر الموردين موثوقية. التزامهم بمواعيد التسليم وجودة المنتج يجعلهم شريكاً استراتيجياً لنا.",
      en: "Al RAKY is one of our most reliable suppliers. Their commitment to delivery schedules and product quality makes them a strategic partner.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.tomatoPaste,
  },
  {
    id: "4",
    name: { ar: "نور الدين سالم", en: "Nour El-Din Salem" },
    role: { ar: "شيف تنفيذي", en: "Executive Chef" },
    company: { ar: "فندق فور سيزونز القاهرة", en: "Four Seasons Cairo" },
    content: {
      ar: "في مطبخ فندق من فئة خمس نجوم، لا نقبل إلا بأفضل المكونات. زيت زيتون الراقي وبهاراتهم يستخدمان يومياً في مطبخنا.",
      en: "In a five-star hotel kitchen, we only accept the finest ingredients. Al RAKY olive oil and spices are used daily in our kitchen.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.oliveOil,
  },
  {
    id: "5",
    name: { ar: "ليلى محمود", en: "Layla Mahmoud" },
    role: { ar: "مدونة طعام", en: "Food Blogger" },
    company: { ar: "مذاق مصر", en: "Mazaq Masr" },
    content: {
      ar: "أوصي بمنتجات الراقي لجمهوري دائماً. الجودة حقيقية والأسعار معقولة. معجون الطماطم منهم لا يُضاهى.",
      en: "I always recommend Al RAKY products to my audience. The quality is genuine and prices are fair. Their tomato paste is unmatched.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.tomatoPaste,
  },
  {
    id: "6",
    name: { ar: "خالد منصور", en: "Khaled Mansour" },
    role: { ar: "مدير عام", en: "General Manager" },
    company: { ar: "مجموعة طيبة للتجارة", en: "Taiba Trading Group" },
    content: {
      ar: "شراكتنا مع الراقي تمتد لثلاثة عقود. ثقة مبنية على جودة لا تتزعزع وابتكار مستمر في المنتجات.",
      en: "Our partnership with Al RAKY spans three decades. Trust built on unwavering quality and continuous product innovation.",
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    galleryImage: PRODUCT_IMAGES.oliveOil,
  },
];

export const clientLogos = [
  { name: "Carrefour", initials: "CF" },
  { name: "Metro", initials: "MT" },
  { name: "Spinneys", initials: "SP" },
  { name: "Four Seasons", initials: "FS" },
  { name: "Nile Restaurants", initials: "NR" },
  { name: "Hyper One", initials: "H1" },
];
