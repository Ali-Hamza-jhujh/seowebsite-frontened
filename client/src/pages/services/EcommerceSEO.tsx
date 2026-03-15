import { EcommerceSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ShoppingCart, Tag, Search, Link2, FileText, BarChart2, Zap, Globe } from "lucide-react";

export default function EcommerceSEO() {
  return (
    <ServicePageTemplate
  graphic={<EcommerceSEOGraphic />}
      meta={{
        title: "Ecommerce SEO Melbourne | Drive Organic Sales | Khalis Marketing",
        description: "Ecommerce SEO Melbourne, rank for high-intent product searches and build sustainable organic revenue. SEO for online stores that turns browsers into buyers.",
      }}
      hero={{
        label: "Ecommerce SEO Melbourne",
        h1: "Ecommerce SEO Melbourne",
        h1Accent: "Drive Organic Sales, Not Just Traffic",
        subheadline: "SEO for online stores that turns browsers into buyers. I help ecommerce businesses rank for high-intent product searches and build a sustainable revenue channel beyond paid ads.",
        supporting: "Paid ads stop working the moment you stop paying. Ecommerce SEO builds organic visibility that compounds over time, driving sales month after month without paying for every click.",
        primaryCta: "Get Your Free Ecommerce SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why Ecommerce Needs SEO",
        heading: "Why Ecommerce Businesses Need SEO",
        body: [
          "Running an online store is expensive. Between ad spend, platform fees, and operational costs, margins are tight. Every dollar matters.",
          "Most ecommerce businesses are almost entirely dependent on paid advertising. That's a fragile position, ad costs keep rising, and the moment you pause campaigns, revenue drops.",
          "SEO changes that equation. A well-optimised ecommerce store attracts buyers who are actively searching for your products, without paying for every click. Over time, organic traffic becomes your most profitable acquisition channel.",
        ],
      }}
      included={{
        heading: "My Ecommerce SEO Services Include",
        features: [
          { icon: Search, title: "Keyword Research for Products", desc: "Finding the high-intent product and category keywords your buyers are searching, and mapping them to the right pages." },
          { icon: Tag, title: "Product Page Optimisation", desc: "Titles, descriptions, schema markup, and content that help product pages rank and convert." },
          { icon: ShoppingCart, title: "Category Page SEO", desc: "Optimising category pages, often the highest-value pages on an ecommerce site, for competitive keyword rankings." },
          { icon: Zap, title: "Technical SEO for Ecommerce", desc: "Fixing crawl issues, duplicate content from faceted navigation, site speed, and indexing problems common to online stores." },
          { icon: Link2, title: "Ecommerce Link Building", desc: "Building authority through product reviews, brand mentions, and industry-relevant backlinks." },
          { icon: FileText, title: "Content Strategy", desc: "Blog content and buying guides that capture top-of-funnel traffic and drive product discovery." },
          { icon: Globe, title: "International SEO", desc: "For stores selling across multiple countries, hreflang implementation and international keyword strategy." },
          { icon: BarChart2, title: "Revenue-Focused Reporting", desc: "Reporting on organic revenue, not just traffic, so you can see the actual ROI of your SEO investment." },
        ],
      }}
      process={{
        heading: "My Ecommerce SEO Process",
        steps: [
          { step: "01", title: "Store Audit & Opportunity Analysis", desc: "Comprehensive audit of your store's technical health, current rankings, and biggest revenue opportunities." },
          { step: "02", title: "Keyword & Revenue Mapping", desc: "Mapping high-intent keywords to your product and category pages, prioritising by search volume and buying intent." },
          { step: "03", title: "Technical Fixes", desc: "Resolving crawl issues, duplicate content, site speed problems, and indexing errors that are limiting your visibility." },
          { step: "04", title: "On-Page Optimisation", desc: "Optimising product pages, category pages, and site structure for both rankings and conversion." },
          { step: "05", title: "Content & Link Building", desc: "Building authority through targeted content and backlink acquisition to support long-term ranking growth." },
        ],
      }}
      faqs={[
        { q: "How is ecommerce SEO different from regular SEO?", a: "Ecommerce SEO has unique challenges, product page duplication, faceted navigation creating crawl issues, large site architecture, and the need to optimise for transactional (buying) intent rather than informational queries." },
        { q: "What ecommerce platforms do you work with?", a: "I work with Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. Each platform has different SEO strengths and limitations that I'm experienced in navigating." },
        { q: "How long does ecommerce SEO take to show results?", a: "Most ecommerce stores start seeing meaningful organic traffic improvements within 4-6 months, with significant revenue impact at 6-12 months. Quick wins like fixing technical issues can show results faster." },
        { q: "Can SEO replace paid ads for my store?", a: "For most stores, the goal isn't to replace ads entirely but to reduce dependence on them. SEO builds a compounding asset that reduces your cost per acquisition over time while paid ads handle short-term demand." },
      ]}
      cta={{
        heading: "Ready to Grow Your Online Store?",
        body: "Find out what's holding your ecommerce store back from organic growth. Get a free ecommerce SEO audit and discover your biggest opportunities.",
        primary: "Get Your Free Ecommerce SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
