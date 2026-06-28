import type { BlogPost } from "@/types";
import { PRODUCT_IMAGES } from "./product-images";

export const blogCategories = [
  { slug: "recipes", name: { ar: "وصفات", en: "Recipes" } },
  { slug: "nutrition", name: { ar: "تغذية", en: "Nutrition" } },
  { slug: "industry", name: { ar: "صناعة غذائية", en: "Food Industry" } },
  { slug: "news", name: { ar: "أخبار", en: "News" } },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "authentic-egyptian-koshari-recipe",
    title: {
      ar: "وصفة الكشري المصري الأصيل",
      en: "Authentic Egyptian Koshari Recipe",
    },
    excerpt: {
      ar: "اكتشف سر تحضير الكشري المصري الأصيل باستخدام منتجات الراقي عالية الجودة",
      en: "Discover the secret to authentic Egyptian koshari using Al RAKY premium products",
    },
    content: {
      ar: "الكشري هو الطبق الوطني المصري الذي يجمع بين الأرز والعدس والمعكرونة والحمص. في هذه الوصفة، نستخدم معجون طماطم الراقي الفاخر لتحضير صلصة طماطم غنية بالنكهة.\n\nالمكونات:\n- 2 كوب أرز\n- 1 كوب عدس\n- 2 كوب معكرونة\n- 3 ملاعق معجون طماطم الراقي\n- بهارات الراقي المصرية\n\nالتحضير:\n1. اسلق العدس والأرز والمعكرونة على حدة\n2. حمّر البصل حتى يذبل\n3. أضف معجون الطماطم والبهارات\n4. قدم الطبق مع الصلصة والدقة",
      en: "Koshari is Egypt's national dish combining rice, lentils, pasta, and chickpeas. In this recipe, we use Al RAKY premium tomato paste for a rich, flavorful sauce.\n\nIngredients:\n- 2 cups rice\n- 1 cup lentils\n- 2 cups pasta\n- 3 tbsp Al RAKY tomato paste\n- Al RAKY Egyptian spice blend\n\nInstructions:\n1. Boil lentils, rice, and pasta separately\n2. Sauté onions until translucent\n3. Add tomato paste and spices\n4. Serve with sauce and crispy onions",
    },
    category: "Recipes",
    categorySlug: "recipes",
    author: { ar: "Chef Ahmed Hassan", en: "Chef Ahmed Hassan" },
    publishedAt: "2026-03-15",
    readTime: 8,
    image: PRODUCT_IMAGES.tomatoPaste,
    tags: ["koshari", "egyptian", "recipe"],
  },
  {
    id: "2",
    slug: "benefits-of-natural-tomato-paste",
    title: {
      ar: "فوائد معجون الطماطم الطبيعي",
      en: "Benefits of Natural Tomato Paste",
    },
    excerpt: {
      ar: "تعرف على الفوائد الصحية لمستهلك معجون الطماطم الطبيعي الغني بالليكوبين",
      en: "Learn about the health benefits of natural tomato paste rich in lycopene",
    },
    content: {
      ar: "معجون الطماطم الطبيعي من أغنى المصادر الغذائية بالليكوبين، مضاد أكسدة قوي يساعد في:\n\n- تقوية المناعة\n- حماية القلب\n- تحسين صحة البشرة\n- دعم صحة العيون\n\nفي الراقي، نضمن أن كل عبوة معجون طماطم تحتوي على أعلى نسبة من الليكوبين من خلال اختيار أفضل أنواع الطماطم وعمليات التصنيع المحكمة.",
      en: "Natural tomato paste is one of the richest dietary sources of lycopene, a powerful antioxidant that helps:\n\n- Boost immunity\n- Protect the heart\n- Improve skin health\n- Support eye health\n\nAt Al RAKY, we ensure every jar contains the highest lycopene content through selecting the finest tomatoes and precise manufacturing processes.",
    },
    category: "Nutrition",
    categorySlug: "nutrition",
    author: { ar: "Dr. Sara Mahmoud", en: "Dr. Sara Mahmoud" },
    publishedAt: "2026-02-28",
    readTime: 5,
    image: PRODUCT_IMAGES.tomatoPaste,
    tags: ["nutrition", "tomato", "health"],
  },
  {
    id: "3",
    slug: "al-raky-75-years-of-excellence",
    title: {
      ar: "الراقي: 75 عاماً من التميز",
      en: "Al RAKY: 75 Years of Excellence",
    },
    excerpt: {
      ar: "رحلة عبر تاريخ الراقي للصناعات الغذائية منذ تأسيسها عام 1951",
      en: "A journey through Al RAKY Food Industries history since founding in 1951",
    },
    content: {
      ar: "منذ عام 1951، ونحن في الراقي نلتزم بتقديم أفضل المنتجات الغذائية للأسر المصرية. بدأنا كمؤسسة عائلية صغيرة وتحولنا إلى واحدة من أكبر شركات الصناعات الغذائية في مصر.\n\nمحطات مهمة:\n- 1951: التأسيس في القاهرة\n- 1975: افتتاح أول مصنع حديث\n- 2000: الحصول على شهادة ISO\n- 2026: 75 عاماً من التميز",
      en: "Since 1951, Al RAKY has been committed to delivering the finest food products to Egyptian families. We started as a small family business and grew into one of Egypt's largest food industry companies.\n\nKey milestones:\n- 1951: Founded in Cairo\n- 1975: First modern factory opened\n- 2000: ISO certification achieved\n- 2026: 75 years of excellence",
    },
    category: "News",
    categorySlug: "news",
    author: { ar: "Al RAKY Team", en: "Al RAKY Team" },
    publishedAt: "2026-01-10",
    readTime: 6,
    image: PRODUCT_IMAGES.oliveOil,
    tags: ["history", "company", "anniversary"],
  },
  {
    id: "4",
    slug: "food-safety-standards-guide",
    title: {
      ar: "دليل معايير سلامة الغذاء",
      en: "Food Safety Standards Guide",
    },
    excerpt: {
      ar: "كيف تضمن الراقي أعلى معايير سلامة الغذاء في كل منتج",
      en: "How Al RAKY ensures the highest food safety standards in every product",
    },
    content: {
      ar: "سلامة الغذاء هي أولويتنا القصوى. نطبق نظام HACCP ومعايير ISO 22000 في جميع مراحل الإنتاج:\n\n1. اختيار المواد الخام\n2. التخزين والنقل\n3. التصنيع والتعبئة\n4. فحص الجودة\n5. التوزيع\n\nكل منتج يخضع لأكثر من 50 فحص جودة قبل وصوله إلى المستهلك.",
      en: "Food safety is our top priority. We implement HACCP and ISO 22000 standards across all production stages:\n\n1. Raw material selection\n2. Storage and transport\n3. Manufacturing and packaging\n4. Quality inspection\n5. Distribution\n\nEvery product undergoes over 50 quality checks before reaching consumers.",
    },
    category: "Food Industry",
    categorySlug: "industry",
    author: { ar: "Quality Team", en: "Quality Team" },
    publishedAt: "2026-02-01",
    readTime: 7,
    image: PRODUCT_IMAGES.oliveOil,
    tags: ["safety", "quality", "standards"],
  },
  {
    id: "5",
    slug: "mediterranean-salad-with-olive-oil",
    title: {
      ar: "سلطة متوسطية بزيت الزيتون",
      en: "Mediterranean Salad with Olive Oil",
    },
    excerpt: {
      ar: "سلطة صحية ولذيذة بزيت زيتون الراقي البكر الممتاز",
      en: "A healthy and delicious salad with Al RAKY extra virgin olive oil",
    },
    content: {
      ar: "سلطة متوسطية طازجة وصحية مثالية لفصل الصيف.\n\nالمكونات:\n- خس طازج\n- طماطم كرزية\n- خيار\n- جبنة فيتا\n- زيت زيتون الراقي البكر\n- عصير ليمون\n\nاخلط المكونات واسكب زيت الزيتون وعصير الليمون. تتبيل بملح وبهارات الراقي.",
      en: "A fresh, healthy Mediterranean salad perfect for summer.\n\nIngredients:\n- Fresh lettuce\n- Cherry tomatoes\n- Cucumber\n- Feta cheese\n- Al RAKY extra virgin olive oil\n- Lemon juice\n\nMix ingredients and drizzle with olive oil and lemon juice. Season with salt and Al RAKY spices.",
    },
    category: "Recipes",
    categorySlug: "recipes",
    author: { ar: "Chef Ahmed Hassan", en: "Chef Ahmed Hassan" },
    publishedAt: "2026-03-01",
    readTime: 4,
    image: PRODUCT_IMAGES.oliveOil,
    tags: ["salad", "mediterranean", "recipe"],
  },
  {
    id: "6",
    slug: "sustainable-food-production",
    title: {
      ar: "الإنتاج الغذائي المستدام",
      en: "Sustainable Food Production",
    },
    excerpt: {
      ar: "التزام الراقي بالاستدامة البيئية في جميع عمليات الإنتاج",
      en: "Al RAKY's commitment to environmental sustainability in all production processes",
    },
    content: {
      ar: "نؤمن في الراقي بأن الإنتاج الغذائي المستدام هو مسؤوليتنا تجاه الأجيال القادمة. نطبق:\n\n- تقليل استهلاك المياه بنسبة 40%\n- استخدام طاقة متجددة في المصانع\n- تقليل النفايات البلاستيكية\n- دعم المزارعين المحليين\n\nهدفنا الوصول إلى الحياد الكarbonي بحلول 2030.",
      en: "At Al RAKY, we believe sustainable food production is our responsibility to future generations. We implement:\n\n- 40% water consumption reduction\n- Renewable energy in factories\n- Reduced plastic waste\n- Supporting local farmers\n\nOur goal is carbon neutrality by 2030.",
    },
    category: "Food Industry",
    categorySlug: "industry",
    author: { ar: "Sustainability Team", en: "Sustainability Team" },
    publishedAt: "2026-01-25",
    readTime: 6,
    image: PRODUCT_IMAGES.oliveOil,
    tags: ["sustainability", "environment", "green"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.categorySlug === current.categorySlug)
    .slice(0, limit);
}

export function searchPosts(query: string, locale: string): BlogPost[] {
  const q = query.toLowerCase();
  return blogPosts.filter((p) => {
    const title = p.title[locale as "ar" | "en"].toLowerCase();
    const excerpt = p.excerpt[locale as "ar" | "en"].toLowerCase();
    return title.includes(q) || excerpt.includes(q) || p.tags.some((t) => t.includes(q));
  });
}
