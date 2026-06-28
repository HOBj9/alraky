import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "products",
    question: {
      ar: "ما هي منتجات الراقي المتاحة؟",
      en: "What Al RAKY products are available?",
    },
    answer: {
      ar: "نقدم مجموعة واسعة تشمل المربيات، المخللات، زيت الزيتون، معجون الطماطم، المكدوس، صلصة الفلفل الحار، الخل، دبس الرمان، وماء الزهر وماء الورد.",
      en: "We offer a wide range including jams, pickles, olive oil, tomato paste, makdous, hot pepper sauce, vinegar, pomegranate molasses, and rosewater & blossom water.",
    },
  },
  {
    id: "2",
    category: "products",
    question: {
      ar: "هل منتجاتكم خالية من المواد الحافظة؟",
      en: "Are your products free from preservatives?",
    },
    answer: {
      ar: "نعم، معظم منتجاتنا خالية من المواد الحافظة الاصطناعية. نستخدم تقنيات تعبئة وتخزين متقدمة للحفاظ على الجودة والطزاجة بشكل طبيعي.",
      en: "Yes, most of our products are free from artificial preservatives. We use advanced packaging and storage techniques to maintain quality and freshness naturally.",
    },
  },
  {
    id: "3",
    category: "quality",
    question: {
      ar: "ما هي شهادات الجودة التي حصلتم عليها؟",
      en: "What quality certifications do you have?",
    },
    answer: {
      ar: "حصلنا على شهادات ISO 22000، HACCP، وشهادة Halal. كما نخضع لفحوصات دورية من هيئات الجودة المصرية والدولية.",
      en: "We hold ISO 22000, HACCP, and Halal certifications. We also undergo regular inspections by Egyptian and international quality authorities.",
    },
  },
  {
    id: "4",
    category: "ordering",
    question: {
      ar: "كيف يمكنني طلب منتجات الراقي بالجملة؟",
      en: "How can I order Al RAKY products in bulk?",
    },
    answer: {
      ar: "للطلبات بالجملة، تواصل مع فريق المبيعات عبر نموذج الاتصال أو اتصل بنا مباشرة. نقدم أسعاراً تنافسية وشروط دفع مرنة للموزعين والتجار.",
      en: "For bulk orders, contact our sales team via the contact form or call us directly. We offer competitive pricing and flexible payment terms for distributors and retailers.",
    },
  },
  {
    id: "5",
    category: "ordering",
    question: {
      ar: "ما هي مناطق التوزيع؟",
      en: "What are your distribution areas?",
    },
    answer: {
      ar: "نوزع منتجاتنا في سوريا وتركيا، ونصدّر إلى الدول العربية وأفريقيا وأوروبا والولايات المتحدة وكندا وأستراليا.",
      en: "We distribute in Syria and Turkey, and export to Arab countries, Africa, Europe, the United States, Canada, and Australia.",
    },
  },
  {
    id: "6",
    category: "company",
    question: {
      ar: "منذ متى تأسست شركة الراقي؟",
      en: "When was Al RAKY founded?",
    },
    answer: {
      ar: "تأسست الراقي للصناعات الغذائية عام 1951 في كفرسوسة – دمشق، سوريا. نحن فخورون بأكثر من 75 عاماً من التميز في صناعة الغذاء.",
      en: "Al RAKY Food Industries was founded in 1951 in Kafar Sousseh, Damascus, Syria. We are proud of over 75 years of excellence in the food industry.",
    },
  },
  {
    id: "7",
    category: "quality",
    question: {
      ar: "كيف تضمنون سلامة الغذاء؟",
      en: "How do you ensure food safety?",
    },
    answer: {
      ar: "نطبق نظام HACCP في جميع مراحل الإنتاج. كل منتج يخضع لأكثر من 50 فحص جودة من اختيار المواد الخام حتى التوزيع.",
      en: "We implement HACCP across all production stages. Every product undergoes over 50 quality checks from raw material selection to distribution.",
    },
  },
  {
    id: "8",
    category: "company",
    question: {
      ar: "هل تدعمون المزارعين المحليين؟",
      en: "Do you support local farmers?",
    },
    answer: {
      ar: "نعم، نتعاون مع أكثر من 500 مزارع مصري. نؤمن بأن دعم الزراعة المحلية هو أساس جودة منتجاتنا واستدامة مجتمعاتنا.",
      en: "Yes, we partner with over 500 Egyptian farmers. We believe supporting local agriculture is the foundation of our product quality and community sustainability.",
    },
  },
];

export const faqCategories = [
  { slug: "products", nameKey: "faq.categories.products" },
  { slug: "quality", nameKey: "faq.categories.quality" },
  { slug: "ordering", nameKey: "faq.categories.ordering" },
  { slug: "company", nameKey: "faq.categories.company" },
];
