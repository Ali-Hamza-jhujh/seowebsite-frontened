import { ShopifySEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ShoppingCart, Zap, FileText, Link2, Search, Settings, Tag, BarChart2 } from "lucide-react";

export default function ShopifySEO() {
  return (
    <ServicePageTemplate
  graphic={<ShopifySEOGraphic />}
      meta={{
        title: "Shopify SEO Melbourne | Unlock Your Store's Organic Potential | Khalis Marketing",
        description: "Shopify SEO Melbourne, fix platform limitations and build organic traffic that drives sales. Expert Shopify SEO for Melbourne online stores.",
      }}
      hero={{
        label: "Shopify SEO Melbourne",
        h1: "Shopify SEO Melbourne",
        h1Accent: "Unlock Your Store's Organic Potential",
        subheadline: "Shopify is built for selling, but out of the box, it's not built for SEO. I fix that. Strategic optimisation that helps your Shopify store rank higher and sell more.",
        supporting: "Shopify powers millions of stores, but most owners don't realise the platform has SEO limitations baked in. I help Melbourne Shopify businesses work around those limitations and build organic traffic that drives sales.",
        primaryCta: "Get Your Free Shopify SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why Shopify Needs Specialist SEO",
        heading: "Why Shopify Stores Need Specialist SEO",
        body: [
          "Shopify is an incredible platform for running an online store. It's easy to use, reliable, and scales beautifully. But when it comes to SEO, it has quirks that can hold your rankings back if you don't know how to handle them.",
          "Duplicate content from /collections/ and /products/ URL structures. Limited control over certain meta elements. Canonical tag issues. Slow theme code. These are Shopify-specific problems that require Shopify-specific solutions.",
          "I've worked with Shopify stores extensively and know exactly where the platform falls short for SEO, and how to fix it.",
        ],
      }}
      included={{
        heading: "What's Included in My Shopify SEO Service",
        features: [
          { icon: Settings, title: "Shopify Technical SEO Fixes", desc: "Resolving duplicate content issues, canonical tag problems, and URL structure challenges specific to Shopify." },
          { icon: Zap, title: "Page Speed Optimisation", desc: "Improving Shopify store load times, theme code optimisation, image compression, and app audit." },
          { icon: Tag, title: "Product & Collection Page SEO", desc: "Optimising product titles, descriptions, meta tags, and schema markup for maximum search visibility." },
          { icon: Search, title: "Keyword Research & Mapping", desc: "Finding the product and category keywords your buyers search, mapped to the right Shopify pages." },
          { icon: FileText, title: "Blog & Content Strategy", desc: "Using Shopify's blog to capture informational traffic and drive product discovery." },
          { icon: Link2, title: "Internal Linking Structure", desc: "Building a strong internal link architecture that distributes authority across your store." },
          { icon: ShoppingCart, title: "Schema Markup Implementation", desc: "Product, review, and breadcrumb schema that enables rich results in Google search." },
          { icon: BarChart2, title: "Performance Reporting", desc: "Monthly reports on organic traffic, keyword rankings, and revenue attributed to SEO." },
        ],
      }}
      process={{
        heading: "My Shopify SEO Process",
        steps: [
          { step: "01", title: "Shopify SEO Audit", desc: "A comprehensive audit of your store's technical health, current rankings, and Shopify-specific SEO issues." },
          { step: "02", title: "Technical Fixes", desc: "Resolving duplicate content, canonical issues, speed problems, and other Shopify-specific technical SEO challenges." },
          { step: "03", title: "On-Page Optimisation", desc: "Optimising product pages, collection pages, and the homepage for target keywords and conversion." },
          { step: "04", title: "Content & Authority Building", desc: "Blog content strategy and link building to grow your store's authority over time." },
          { step: "05", title: "Ongoing Monitoring", desc: "Monthly performance reviews with ranking tracking, traffic analysis, and strategy refinement." },
        ],
      }}
      faqs={[
        { q: "Does Shopify have SEO problems?", a: "Yes, Shopify has several well-known SEO limitations including duplicate content from its URL structure, limited control over certain meta elements, and canonical tag issues. These are fixable, but require knowing what to look for." },
        { q: "Can I do Shopify SEO myself?", a: "Some basics, like writing good product descriptions and adding alt text to images, are straightforward. But technical fixes, keyword research, and link building require specialist knowledge to do effectively." },
        { q: "How long does Shopify SEO take to show results?", a: "Technical fixes can show results within weeks. Keyword rankings typically improve within 3-6 months of consistent optimisation. Significant organic revenue growth usually takes 6-12 months." },
        { q: "Do you work with Shopify apps like Yoast or SEO Booster?", a: "Yes, I can work with whatever apps you have installed, or recommend the best SEO apps for your specific needs. Apps are tools, but they don't replace strategy." },
      ]}
      cta={{
        heading: "Ready to Unlock Your Shopify Store's Potential?",
        body: "Find out what Shopify SEO issues are limiting your organic growth. Get a free Shopify SEO audit and I'll show you exactly what to fix first.",
        primary: "Get Your Free Shopify SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
