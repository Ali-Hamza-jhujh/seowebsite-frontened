import { WebsiteDesignGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Monitor, Smartphone, Zap, Search, FileCode, Palette, Globe, TrendingUp } from "lucide-react";

export default function WebsiteDesign() {
  return (
    <ServicePageTemplate
  graphic={<WebsiteDesignGraphic />}
      meta={{
        title: "Website Design Melbourne | SEO-Ready Websites | Khalis Marketing",
        description: "Website design Melbourne, beautiful, fast, SEO-ready websites built to rank and convert. WordPress and Shopify specialists. Free consultation available.",
      }}
      hero={{
        label: "Website Design Melbourne",
        h1: "Website Design Melbourne",
        h1Accent: "Built to Rank and Convert",
        subheadline: "A website that looks great but doesn't rank is a missed opportunity. I design and build websites that are beautiful, fast, and optimised for search from day one.",
        supporting: "Most web designers don't think about SEO. Most SEO agencies don't build websites. I do both, which means your site is built with the technical foundations that make ranking possible, not bolted on as an afterthought.",
        primaryCta: "Get a Free Consultation",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Design + SEO",
        heading: "Why Your Website Design Affects Your SEO",
        body: [
          "Your website is the foundation of your entire online presence. Every SEO effort, content, links, local citations, ultimately points back to your site. If the site is slow, poorly structured, or not mobile-friendly, all that effort is undermined.",
          "I design websites with SEO baked in from the start. Clean code, fast load times, proper heading structure, schema markup, mobile-first design, the technical elements that search engines reward.",
          "The result is a website that not only looks professional and converts visitors into customers, but also has the technical foundation to rank well in Google from launch.",
        ],
      }}
      included={{
        heading: "What's Included in My Website Design Service",
        features: [
          { icon: Palette, title: "Custom Design", desc: "A unique design tailored to your brand, not a generic template. Clean, modern, and built to convert." },
          { icon: Smartphone, title: "Mobile-First Development", desc: "Fully responsive design that looks and performs perfectly on every device and screen size." },
          { icon: Zap, title: "Performance Optimisation", desc: "Fast load times from day one, optimised images, clean code, and caching setup." },
          { icon: Search, title: "On-Page SEO Setup", desc: "Title tags, meta descriptions, heading structure, schema markup, and sitemap, all configured correctly at launch." },
          { icon: FileCode, title: "Technical SEO Foundation", desc: "Proper URL structure, canonical tags, robots.txt, and Google Search Console setup." },
          { icon: Monitor, title: "CMS Integration", desc: "WordPress or Shopify setup with a user-friendly CMS so you can update content without a developer." },
          { icon: Globe, title: "Google Analytics & Search Console", desc: "Full tracking setup so you can measure traffic, rankings, and conversions from day one." },
          { icon: TrendingUp, title: "Post-Launch SEO Support", desc: "Optional ongoing SEO management to grow your rankings after the site goes live." },
        ],
      }}
      process={{
        heading: "My Website Design Process",
        steps: [
          { step: "01", title: "Discovery & Strategy", desc: "Understanding your business, target audience, competitors, and goals, so the site is built with purpose." },
          { step: "02", title: "Design & Wireframing", desc: "Creating wireframes and design mockups for your approval before any development begins." },
          { step: "03", title: "Development", desc: "Building your site on WordPress or Shopify with clean, fast, SEO-optimised code." },
          { step: "04", title: "Content Integration", desc: "Adding your content, images, and copy, or helping you create it if needed." },
          { step: "05", title: "Launch & Handover", desc: "Testing, launching, and handing over the site with training on how to manage it yourself." },
        ],
      }}
      faqs={[
        { q: "Do you build websites on WordPress or Shopify?", a: "Both. WordPress is ideal for service businesses, blogs, and content-heavy sites. Shopify is best for ecommerce. I'll recommend the right platform for your specific needs." },
        { q: "How long does a website take to build?", a: "A typical 5-10 page website takes 4-6 weeks from start to launch. More complex sites with custom functionality take longer. I'll give you a clear timeline at the start of the project." },
        { q: "Will my new website rank in Google immediately?", a: "New websites take time to build authority and rankings, typically 3-6 months to see meaningful organic traffic. However, by building with SEO from day one, you're set up to rank much faster than a site that needs SEO retrofitted later." },
        { q: "Can you redesign my existing website?", a: "Yes, website redesigns are a significant part of my work. I'll audit your existing site's SEO before redesigning to ensure you don't lose any existing rankings in the transition." },
      ]}
      cta={{
        heading: "Ready to Build a Website That Ranks?",
        body: "Get a free consultation and I'll show you what a well-designed, SEO-ready website could do for your business.",
        primary: "Get a Free Consultation",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
