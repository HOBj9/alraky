import type { Product } from "@/types";
import { PRODUCT_IMAGES } from "./product-images";

export const productCategories = [
  { slug: "sauces-pastes", name: { ar: "صلصات ومعاجين", en: "Sauces & Pastes" } },
  { slug: "oils", name: { ar: "زيوت وزيتون", en: "Oils & Olives" } },
  { slug: "spreads-jams", name: { ar: "مربيات و spreads", en: "Spreads & Jams" } },
  { slug: "pickles", name: { ar: "مخللات ومكدوس", en: "Pickles & Makdous" } },
  { slug: "pantry", name: { ar: "مونة وتوابل", en: "Pantry & Condiments" } },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-tomato-paste",
    name: { ar: "معجون طماطم", en: "Tomato Paste" },
    shortDescription: {
      ar: "معجون طماطم مركز بجودة الراقي الأصيلة منذ 1951",
      en: "Concentrated tomato paste with Al RAKY's authentic quality since 1951",
    },
    description: {
      ar: "معجون طماطم فاخر يُنتج في مصانع الراقي المجهزة بأحدث التقنيات. يتميز بقوام كثيف ولون أحمر زاهي ونكهة أصيلة، ويُصدَّر إلى الدول العربية وأوروبا وأمريكا وأستراليا.",
      en: "Premium tomato paste produced in Al RAKY's state-of-the-art factories. Features a thick consistency, vibrant red color, and authentic flavor, exported to Arab countries, Europe, the Americas, and Australia.",
    },
    category: "sauces-pastes",
    image: PRODUCT_IMAGES.tomatoPaste,
    features: {
      ar: ["100% طماطم طبيعية", "تقنية إنتاج حديثة", "جودة تصديرية", "منذ 1951"],
      en: ["100% natural tomatoes", "Modern production technology", "Export-grade quality", "Since 1951"],
    },
    featured: true,
  },
  {
    id: "2",
    slug: "extra-virgin-olive-oil",
    name: { ar: "زيت زيتون", en: "Olive Oil" },
    shortDescription: {
      ar: "زيت زيتون بكر ممتاز من أجود الزيتون",
      en: "Extra virgin olive oil from the finest olives",
    },
    description: {
      ar: "زيت زيتون بكر ممتاز يُستخرج بالعصر على البارد. من أبرز منتجات الراقي التي تُصدَّر إلى جميع أنحاء العالم، بجودة عالية ونكهة أصيلة.",
      en: "Cold-pressed extra virgin olive oil. One of Al RAKY's flagship products exported worldwide, with high quality and authentic flavor.",
    },
    category: "oils",
    image: PRODUCT_IMAGES.oliveOil,
    features: {
      ar: ["عصر على البارد", "جميع أنواع الزيتون", "جودة تصديرية", "نكهة أصيلة"],
      en: ["Cold pressed", "All olive varieties", "Export quality", "Authentic flavor"],
    },
    featured: true,
  },
  {
    id: "3",
    slug: "assorted-jams",
    name: { ar: "مربيات متنوعة", en: "Assorted Jams" },
    shortDescription: {
      ar: "مربيات طبيعية بنكهات متنوعة ولذيذة",
      en: "Natural jams in a variety of delicious flavors",
    },
    description: {
      ar: "مربيات الراقي مصنوعة من أجود الفواكه الطازجة وفق وصفات تقليدية. تُقدَّم بجودة عالية وتعبئة محكمة للحفاظ على الطعم والقيمة الغذائية.",
      en: "Al RAKY jams are made from the finest fresh fruits using traditional recipes. Offered with high quality and airtight packaging to preserve taste and nutritional value.",
    },
    category: "spreads-jams",
    image: PRODUCT_IMAGES.tomatoPaste,
    features: {
      ar: ["فواكه طبيعية", "وصفات تقليدية", "نكهات متنوعة", "تعبئة محكمة"],
      en: ["Natural fruits", "Traditional recipes", "Varied flavors", "Sealed packaging"],
    },
    featured: true,
  },
  {
    id: "4",
    slug: "pickled-vegetables",
    name: { ar: "مخللات", en: "Pickles" },
    shortDescription: {
      ar: "مخللات طازجة ومقرمشة بنكهة أصيلة",
      en: "Fresh, crisp pickles with authentic flavor",
    },
    description: {
      ar: "مخللات الراقي من أشهر منتجات الشركة. تُحضَّر من خضروات طازجة وتُتبَّل بخل الراقي وتوابل مختارة بعناية، لتضفي نكهة مميزة على مائدتكم.",
      en: "Al RAKY pickles are among the company's most popular products. Prepared from fresh vegetables and seasoned with Al RAKY vinegar and carefully selected spices.",
    },
    category: "pickles",
    image: PRODUCT_IMAGES.tomatoPaste,
    features: {
      ar: ["خضروات طازجة", "خل طبيعي", "نكهة أصيلة", "جودة عالية"],
      en: ["Fresh vegetables", "Natural vinegar", "Authentic flavor", "High quality"],
    },
  },
  {
    id: "5",
    slug: "makdous",
    name: { ar: "مكدوس", en: "Makdous (Stuffed Eggplant)" },
    shortDescription: {
      ar: "مكدوس محشي بالجوز في زيت الزيتون",
      en: "Eggplant stuffed with walnuts in olive oil",
    },
    description: {
      ar: "مكدوس الراقي — باذنجان محشي بالجوز والفلفل في زيت الزيتون. من المنتجات السورية الأصيلة التي تشتهر بها الشركة وتُصدَّر إلى العالم.",
      en: "Al RAKY makdous — eggplant stuffed with walnuts and peppers in olive oil. An authentic Syrian specialty the company is renowned for, exported worldwide.",
    },
    category: "pickles",
    image: PRODUCT_IMAGES.oliveOil,
    features: {
      ar: ["وصفة سورية أصيلة", "زيت زيتون فاخر", "محشي بالجوز", "جودة تصديرية"],
      en: ["Authentic Syrian recipe", "Premium olive oil", "Walnut stuffed", "Export quality"],
    },
    featured: true,
  },
  {
    id: "6",
    slug: "red-pepper-hot-sauce",
    name: { ar: "صلصة فلفل حار", en: "Red Pepper Hot Sauce" },
    shortDescription: {
      ar: "صلصة فلفل أحمر حار بنكهة قوية",
      en: "Spicy red pepper sauce with bold flavor",
    },
    description: {
      ar: "صلصة فلفل حمراء من منتجات الراقي المميزة. تُضيف نكهة حارة ولذيذة إلى الأطباق، وتُنتج وفق أعلى معايير الجودة.",
      en: "Red pepper hot sauce from Al RAKY's distinctive range. Adds a spicy, delicious kick to dishes, produced to the highest quality standards.",
    },
    category: "sauces-pastes",
    image: PRODUCT_IMAGES.tomatoPaste,
    features: {
      ar: ["فلفل أحمر طبيعي", "نكهة حارة", "بدون ألوان صناعية", "تعبئة محكمة"],
      en: ["Natural red pepper", "Spicy flavor", "No artificial colors", "Sealed packaging"],
    },
  },
  {
    id: "7",
    slug: "pomegranate-molasses",
    name: { ar: "دبس الرمان", en: "Pomegranate Molasses" },
    shortDescription: {
      ar: "دبس رمان طبيعي بنكهة حامضة حلوة",
      en: "Natural pomegranate molasses with sweet-tart flavor",
    },
    description: {
      ar: "دبس الرمان من الراقي يُستخرج من أجود حبوب الرمان. مثالي للسلطات والمقبلات والطبخ، ويُعد من أساسيات المطبخ الشرقي.",
      en: "Al RAKY pomegranate molasses is extracted from the finest pomegranate seeds. Perfect for salads, appetizers, and cooking — a staple of Middle Eastern cuisine.",
    },
    category: "pantry",
    image: PRODUCT_IMAGES.tomatoPaste,
    features: {
      ar: ["100% رمان طبيعي", "بدون إضافات", "نكهة أصيلة", "متعدد الاستخدامات"],
      en: ["100% natural pomegranate", "No additives", "Authentic flavor", "Versatile use"],
    },
  },
  {
    id: "8",
    slug: "rosewater-blossom-water",
    name: { ar: "ماء الزهر وماء الورد", en: "Rosewater & Blossom Water" },
    shortDescription: {
      ar: "ماء زهر وماء ورد طبيعي للحلويات والمشروبات",
      en: "Natural blossom water and rosewater for desserts and beverages",
    },
    description: {
      ar: "ماء الزهر وماء الورد من الراقي يُنتجان بتقنيات تقليدية محكمة. يُستخدمان في الحلويات الشرقية والمشروبات والطبخ لإضفاء رائحة عطرة فريدة.",
      en: "Al RAKY blossom water and rosewater are produced using precise traditional techniques. Used in Eastern desserts, beverages, and cooking for a unique aromatic touch.",
    },
    category: "pantry",
    image: PRODUCT_IMAGES.oliveOil,
    features: {
      ar: ["تقطير تقليدي", "رائحة طبيعية", "للحلويات والمشروبات", "جودة عالية"],
      en: ["Traditional distillation", "Natural aroma", "For desserts & drinks", "High quality"],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured);
  const oliveFirst = featured.find((p) => p.slug === "extra-virgin-olive-oil");
  const rest = featured.filter((p) => p.slug !== "extra-virgin-olive-oil");
  return oliveFirst ? [oliveFirst, ...rest] : featured;
}
