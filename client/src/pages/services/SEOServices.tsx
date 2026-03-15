import { SEOServicesGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search, TrendingUp, MapPin, Zap, Link2, FileText, BarChart2, Users } from "lucide-react";

export default function SEOServices() {
  return (
    <ServicePageTemplate
  graphic={<SEOServicesGraphic />}
      meta={{
        title: "SEO Services Melbourne | Rank Higher, Get More Leads | Khalis Marketing",
        description: "SEO services Melbourne, technical SEO, local SEO, content strategy, and link building. Helping Melbourne businesses rank higher and get more organic leads.",
      }}
      hero={{
        label: "SEO Services Melbourne",
        h1: "SEO Services Melbourne",
        h1Accent: "Rank Higher, Get More Leads",
        subheadline: "Comprehensive SEO services that improve your Google rankings, drive qualified organic traffic, and turn visitors into customers.",
        supporting: "I help Melbourne businesses get found online through strategic SEO, combining technical expertise, content strategy, and authority building to deliver sustainable ranking improvements.",
        primaryCta: "Get Your Free SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "What Is SEO?",
        heading: "SEO That Delivers Real Business Results",
        body: [
          "Search Engine Optimization (SEO) is the practice of improving your website's visibility in Google and other search engines. When done well, it puts your business in front of people actively searching for what you offer, at the exact moment they're ready to buy.",
          "Unlike paid advertising, SEO builds a compounding asset. Rankings you earn today continue driving traffic and leads for months and years, without paying for every click.",
          "I take a comprehensive approach to SEO that covers every factor Google uses to rank websites: technical health, content quality, on-page optimisation, and backlink authority.",
        ],
      }}
      included={{
        heading: "What's Included in My SEO Services",
        features: [
          { icon: Zap, title: "Technical SEO", desc: "Fixing the technical issues that prevent Google from properly crawling, indexing, and ranking your site." },
          { icon: FileText, title: "On-Page Optimisation", desc: "Optimising titles, meta tags, headings, content, and internal links for target keywords." },
          { icon: Search, title: "Keyword Research", desc: "Finding the exact terms your customers search, and building a strategy to rank for them." },
          { icon: MapPin, title: "Local SEO", desc: "Dominating Google Maps and local search results in your suburb and service area." },
          { icon: Link2, title: "Link Building", desc: "Earning high-quality backlinks that build your domain authority and support ranking improvements." },
          { icon: TrendingUp, title: "Content Strategy", desc: "Creating and optimising content that ranks, educates, and converts visitors into leads." },
          { icon: BarChart2, title: "SEO Reporting", desc: "Monthly reports on rankings, traffic, and leads, with clear explanations of progress and next steps." },
          { icon: Users, title: "Competitor Analysis", desc: "Understanding what your competitors are doing well and building a strategy to outperform them." },
        ],
      }}
      process={{
        heading: "My SEO Process",
        steps: [
          { step: "01", title: "SEO Audit & Discovery", desc: "A comprehensive audit of your current SEO performance, technical health, rankings, content, and backlinks." },
          { step: "02", title: "Strategy Development", desc: "A customised SEO strategy based on your goals, competition, and the biggest opportunities for growth." },
          { step: "03", title: "Technical Foundation", desc: "Fixing technical issues and ensuring your site is properly set up for Google to crawl and index." },
          { step: "04", title: "On-Page & Content Optimisation", desc: "Optimising existing pages and creating new content to target high-value keywords." },
          { step: "05", title: "Link Building & Authority", desc: "Building backlinks and citations to grow your domain authority and support ranking improvements." },
          { step: "06", title: "Reporting & Refinement", desc: "Monthly reporting on progress with ongoing strategy refinement based on what's working." },
        ],
      }}
      faqs={[
        { q: "How long does SEO take to work?", a: "Most businesses start seeing meaningful ranking improvements within 3-6 months. Significant traffic and lead growth typically takes 6-12 months of consistent work. SEO is a long-term investment, but the compounding returns make it the most cost-effective marketing channel for most businesses." },
        { q: "How much does SEO cost?", a: "SEO investment varies based on your goals, competition, and the scope of work required. I offer a free audit and consultation to understand your situation before recommending a strategy and investment level." },
        { q: "Can you guarantee first page rankings?", a: "No, and any agency that guarantees specific rankings is misleading you. Google's algorithm is complex and constantly changing. What I can guarantee is a strategic, ethical approach that consistently improves your visibility over time." },
        { q: "Do I need SEO if I'm already running Google Ads?", a: "Yes. Ads and SEO serve different purposes. Ads give you immediate visibility but stop the moment you stop paying. SEO builds long-term organic visibility that reduces your dependence on paid advertising over time." },
        { q: "How do I know if SEO is working?", a: "I provide monthly reports showing keyword ranking improvements, organic traffic growth, and leads generated from organic search. You'll always know exactly what's happening and why." },
      ]}
      cta={{
        heading: "Ready to Rank Higher on Google?",
        body: "Find out exactly what it will take to improve your rankings and get more organic leads. Get a free SEO audit and strategy consultation today.",
        primary: "Get Your Free SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
