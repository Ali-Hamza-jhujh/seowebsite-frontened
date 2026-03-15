import { TechnicalSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap, Smartphone, Search, Shield, Globe, Settings, FileCode, TrendingUp } from "lucide-react";

export default function TechnicalSEO() {
  return (
    <ServicePageTemplate
  graphic={<TechnicalSEOGraphic />}
      meta={{
        title: "Technical SEO Melbourne | Fix Hidden Ranking Issues | Khalis Marketing",
        description: "Technical SEO Melbourne, fix site speed, crawl errors, mobile issues, and indexing problems. A strong technical foundation is where sustainable rankings start.",
      }}
      hero={{
        label: "Technical SEO Melbourne",
        h1: "Technical SEO Melbourne",
        h1Accent: "Fix What's Holding Your Rankings Back",
        subheadline: "Your website might look great, but if Google can't crawl, index, or understand it properly, you won't rank. I find and fix the technical issues silently killing your organic visibility.",
        supporting: "Technical SEO is the foundation everything else is built on. Without it, your content and backlinks won't deliver the results they should. I help Melbourne businesses identify and resolve the hidden technical problems stopping them from ranking.",
        primaryCta: "Get Your Free Technical SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why It Matters",
        heading: "Why Technical SEO Matters",
        body: [
          "You can have the best content and strongest backlinks in your industry, but if your website has technical problems, Google won't rank it.",
          "Technical SEO covers everything that affects how search engines crawl, index, and interpret your website. It's invisible to users but critical to rankings.",
          "Most websites have technical issues the owner doesn't know about. Slow load times, crawl errors, duplicate content, broken redirects, poor mobile performance, these problems compound over time and drag down every other SEO effort you make.",
        ],
      }}
      included={{
        heading: "What My Technical SEO Service Covers",
        features: [
          { icon: Zap, title: "Site Speed & Core Web Vitals", desc: "Optimising load times, LCP, CLS, and FID to meet Google's performance thresholds and improve user experience." },
          { icon: Smartphone, title: "Mobile Usability", desc: "Ensuring your site is fully responsive and passes Google's mobile-friendliness requirements." },
          { icon: Search, title: "Crawl Error Resolution", desc: "Fixing broken links, redirect chains, and crawl errors that waste your crawl budget and confuse search engines." },
          { icon: FileCode, title: "Indexing & Robots.txt", desc: "Ensuring the right pages are indexed and the wrong ones aren't, including sitemap optimisation." },
          { icon: Shield, title: "HTTPS & Security", desc: "SSL certificate verification, mixed content fixes, and security headers that protect rankings." },
          { icon: Globe, title: "Structured Data & Schema", desc: "Implementing schema markup so Google understands your content and can display rich results." },
          { icon: Settings, title: "Duplicate Content Fixes", desc: "Identifying and resolving duplicate content issues through canonical tags, redirects, and content consolidation." },
          { icon: TrendingUp, title: "Technical Audit Report", desc: "A detailed report of all issues found, prioritised by impact, with clear instructions for resolution." },
        ],
      }}
      process={{
        heading: "My Technical SEO Process",
        steps: [
          { step: "01", title: "Comprehensive Technical Audit", desc: "A deep crawl of your website using professional tools combined with manual analysis to uncover every technical issue." },
          { step: "02", title: "Prioritised Issue Report", desc: "Issues ranked by impact, critical fixes first, then high-priority improvements, then optimisations." },
          { step: "03", title: "Implementation", desc: "Fixing issues directly on your site or providing clear developer instructions for each fix." },
          { step: "04", title: "Verification & Testing", desc: "Confirming every fix is correctly implemented and not causing new issues." },
          { step: "05", title: "Ongoing Monitoring", desc: "Regular technical health checks to catch new issues before they impact your rankings." },
        ],
      }}
      faqs={[
        { q: "How do I know if my site has technical SEO issues?", a: "Most sites have issues that aren't visible to the naked eye. A technical audit using tools like Screaming Frog, Google Search Console, and PageSpeed Insights will reveal them. I include a free technical audit with every engagement." },
        { q: "Will fixing technical SEO issues improve my rankings?", a: "Yes, for most sites, fixing technical issues provides a meaningful ranking improvement. The bigger the issues, the bigger the improvement. It also makes every other SEO effort more effective." },
        { q: "Do I need a developer to fix technical SEO issues?", a: "Some fixes require developer access. Others can be done through your CMS (WordPress, Shopify, etc.) without coding. I'll tell you exactly what needs a developer and what doesn't." },
        { q: "How long does a technical SEO audit take?", a: "A thorough technical audit typically takes 3-5 business days, depending on the size of your website. You'll receive a detailed report with prioritised recommendations." },
      ]}
      cta={{
        heading: "Ready to Fix Your Technical SEO?",
        body: "Find out what technical issues are holding your rankings back. Get a free technical SEO audit and I'll show you exactly what needs fixing, and in what order.",
        primary: "Get Your Free Technical SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
