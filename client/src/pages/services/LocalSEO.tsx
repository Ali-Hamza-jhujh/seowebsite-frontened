import { LocalSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { MapPin, Star, Building2, Link2, FileText, Search, TrendingUp, Users } from "lucide-react";

export default function LocalSEO() {
  return (
    <ServicePageTemplate
  graphic={<LocalSEOGraphic />}
      meta={{
        title: "Local SEO Melbourne | Dominate Local Search | Khalis Marketing",
        description: "Local SEO Melbourne, get found by customers in your suburb. Local citations, map pack rankings, and on-page optimisation. Free local SEO audit available.",
      }}
      hero={{
        label: "Local SEO Melbourne",
        h1: "Local SEO Melbourne",
        h1Accent: "Dominate Your Area on Google",
        subheadline: "Get found by customers in your suburb, your city, and your service area. Local SEO that puts your business in the map pack and drives calls, enquiries, and foot traffic.",
        supporting: "When Melbourne customers search for services 'near me,' your business should be the one they find. I help local businesses rank higher in Google Maps and local search results, so you get more leads from people ready to buy.",
        primaryCta: "Get Your Free Local SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why It Matters",
        heading: "Why Local SEO Matters for Melbourne Businesses",
        body: [
          "When someone searches 'plumber near me' or 'best cafe in Fitzroy,' Google doesn't just show any website, it shows local businesses that are optimised for local search.",
          "The map pack, those three business listings that appear at the top of local search results, captures the majority of clicks. If you're not in it, you're invisible to customers who are ready to buy right now.",
          "Local SEO is the most cost-effective way for Melbourne businesses to compete online. You don't need to outrank national brands, you just need to be the most visible business in your area.",
        ],
      }}
      included={{
        heading: "What's Included in My Local SEO Services",
        features: [
          { icon: Building2, title: "Local Presence Optimisation", desc: "Strengthening every local signal — accurate business information, compelling descriptions, and consistent data across the web." },
          { icon: Link2, title: "Local Citation Building", desc: "Consistent business listings across relevant Australian directories to improve local rankings and credibility." },
          { icon: FileText, title: "On-Page Local SEO", desc: "Website content, meta tags, and schema markup optimised with local keywords to signal relevance to search engines." },
          { icon: Star, title: "Review Management Strategy", desc: "A system for generating and managing online reviews that builds trust and improves your local rankings." },
          { icon: Search, title: "Local Keyword Research", desc: "Identifying the most profitable local keywords for your business, the exact terms your customers are searching." },
          { icon: MapPin, title: "Local Link Building", desc: "High-quality backlinks from local Melbourne businesses and industry-relevant websites to build your domain authority." },
        ],
      }}
      process={{
        heading: "My Proven Local SEO Process",
        steps: [
          { step: "01", title: "Discovery & Local Audit", desc: "I audit your current local presence, citations, reviews, rankings, and on-site signals to identify the gaps holding you back." },
          { step: "02", title: "Strategy Development", desc: "A customised local SEO strategy with specific actions, timelines, and expected outcomes for your suburb and industry." },
          { step: "03", title: "Implementation", desc: "Building citations, cleaning up inconsistencies, and enhancing your website for local search signals." },
          { step: "04", title: "Monitoring & Reporting", desc: "Monthly reports on your local rankings, map pack visibility, and lead generation, with clear progress tracking." },
          { step: "05", title: "Refinement & Growth", desc: "Adapting strategy based on performance data and algorithm changes to ensure sustained local dominance." },
        ],
      }}
      faqs={[
        { q: "What is local SEO?", a: "Local SEO focuses on optimising your online presence to attract more customers from searches performed in your geographic area, particularly searches with local intent like 'near me' or suburb-specific queries." },
        { q: "How long does it take to see results from local SEO?", a: "Most businesses start seeing improvements within 3-6 months, with significant growth over 6-12 months. Some quick wins, like citation clean-ups and on-page fixes, can show results within weeks." },
        { q: "Is local SEO suitable for all businesses?", a: "Local SEO is ideal for businesses with a physical location or those that serve a specific geographic area, tradies, restaurants, retail stores, medical practices, professional services, and more." },
        { q: "What's the difference between local SEO and regular SEO?", a: "Regular SEO targets broader keyword rankings. Local SEO specifically targets location-based searches and the Google Maps/map pack results, which is where most local buying decisions are made." },
        { q: "Do I need a website for local SEO?", a: "A website helps significantly and unlocks far more opportunities — from landing pages targeting specific suburbs to structured data and local content that builds authority." },
      ]}
      cta={{
        heading: "Ready to Dominate Your Local Market?",
        body: "Don't let your local competitors steal your customers. Get a free local SEO audit and I'll show you exactly where you stand, and what it takes to rank higher in your area.",
        primary: "Get Your Free Local SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
