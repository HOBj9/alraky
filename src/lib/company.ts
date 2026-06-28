export const COMPANY = {
  name: {
    ar: "الراقي للصناعات الغذائية",
    en: "Al RAKY Food Industries",
  },
  instagram: "https://www.instagram.com/alraky.co/",
  instagramHandle: "@alraky.co",
  website: "https://www.alraky.com",
  phone: "+963 11 621 4007",
  phoneTel: "+963116214007",
  fax: "+963 11 621 7241",
  email: "info@alraky.com",
  founded: 1951,
  founder: {
    ar: "المرحوم كامل زكريا درغام",
    en: "Kamel Zakaria Durgham",
  },
  address: {
    ar: "كفرسوسة، دمشق، سوريا",
    en: "Kafar Sousseh, Damascus, Syria",
  },
  factories: {
    ar: "مصنع في دمشق (15,000 م²) وفرع في هاتاي، تركيا",
    en: "Factory in Damascus (15,000 m²) and a branch in Hatay, Turkey",
  },
  exportMarkets: {
    ar: "الدول العربية، أفريقيا، أوروبا، الولايات المتحدة، كندا، وأستراليا",
    en: "Arab countries, Africa, Europe, the United States, Canada, and Australia",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    href: COMPANY.instagram,
    label: "Instagram",
    handle: COMPANY.instagramHandle,
  },
] as const;
