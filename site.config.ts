import type { SiteConfig } from "@/lib/types";

const g = (n: number, w: number, h: number, caption: string, href: string) => ({
  src: `/images/post-${n}.webp`, width: w, height: h, alt: `${caption} by TheBakeStories`, caption, href,
});

export const site: SiteConfig = {
  name: "TheBakeStories",
  tagline: "Eggless whipped cream custom cakes, cupcakes and hampers in Brampton.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://the-bake-stories.vercel.app",

  theme: { preset: "bakery-pastel" },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Eggless cakes in Brampton",
    headline: "Eggless custom cakes, made fresh to order",
    subhead: "Whipped cream custom cakes, cupcakes, bento cakes and hampers with no preservatives. Send a DM with your date and idea to order.",
    images: [
      { src: "/images/post-2.webp", alt: "Diwali hamper collection by TheBakeStories" },
      { src: "/images/post-3.webp", alt: "Custom cake by TheBakeStories" },
      { src: "/images/post-4.webp", alt: "Custom cake by TheBakeStories" },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/thebakestories2025" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["100% eggless", "Made fresh to order", "No preservatives", "Orders by Instagram DM"],

  about: {
    title: "Eggless cakes, baked fresh",
    body: [
      "TheBakeStories is a Brampton bakery making eggless whipped cream custom cakes, cupcakes and hampers. Every order is made fresh, with no preservatives.",
    ],
    image: { src: "/images/post-6.webp", alt: "Cake by TheBakeStories" },
  },

  menu: {
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Message us on Instagram for pricing on your date and design.",
    groups: [
      {
        title: "Cakes and treats",
        items: [
          { name: "Eggless whipped cream custom cakes", veg: true },
          { name: "Bento cakes", veg: true },
          { name: "Cupcakes", veg: true },
          { name: "Cake platters", veg: true },
          { name: "Wedding cakes", veg: true },
          { name: "Hampers", description: "Diwali hamper collection now posted.", href: "https://www.instagram.com/p/De7xcZmMAq5/" },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      g(2, 1024, 1360, "Diwali hamper collection", "https://www.instagram.com/p/De7xcZmMAq5/"),
      g(1, 900, 1600, "Pinned reel", "https://www.instagram.com/reel/DdWpAqWxoos/"),
      g(3, 1104, 1456, "Custom cake", "https://www.instagram.com/p/De4UBEPRw0N/"),
      g(4, 1170, 1560, "Custom cake", "https://www.instagram.com/p/De17kO5lOjV/"),
      g(5, 640, 1136, "Fresh from the kitchen", "https://www.instagram.com/reel/DecILi2x-jW/"),
      g(6, 1200, 1584, "Made to order", "https://www.instagram.com/p/DeN0d6cMsbd/"),
      g(7, 900, 1600, "Cake stories", "https://www.instagram.com/reel/Dd4PUeINhH4/"),
    ],
  },

  instagram: {
    handle: "thebakestories2025",
    embeds: ["https://www.instagram.com/p/De7xcZmMAq5/"],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi TheBakeStories! I would like to order...\nCake, cupcakes or hamper:\nDate needed:\nQuantity or servings:\nPickup or delivery:\nDesign idea (I can send an inspo photo):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Are your cakes eggless?", a: "Yes. TheBakeStories makes eggless whipped cream cakes." },
    { q: "How do I order?", a: "Send a DM on Instagram @thebakestories2025 with your date, quantity and design idea." },
    { q: "Where are you based?", a: "Brampton, Ontario." },
  ],

  contact: {
    area: "Brampton, Ontario",
    socials: [{ label: "Instagram @thebakestories2025", href: "https://www.instagram.com/thebakestories2025/" }],
  },

  seo: {
    title: "TheBakeStories | Eggless custom cakes in Brampton",
    description: "Eggless whipped cream custom cakes, cupcakes, bento cakes and hampers in Brampton, ON. Made fresh to order with no preservatives. Order by Instagram DM.",
    keywords: ["eggless cakes Brampton", "custom cakes Brampton", "bento cakes Brampton", "Diwali hampers Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
