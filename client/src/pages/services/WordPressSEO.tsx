import { WordPressSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Settings, Zap, Shield, FileText, Link2, Search, FileCode, BarChart2 } from "lucide-react";

export default function WordPressSEO() {
  return (
    <ServicePageTemplate
  graphic={<WordPressSEOGraphic />}
      meta={{
        title: "WordPress SEO Melbourne | Get More From Your CMS | Khalis Marketing",
        description: "WordPress SEO Melbourne, unlock the full SEO potential of your WordPress site. Speed, structure, plugins, and content optimisation for better rankings.",
      }}
      hero={{
        label: "WordPress SEO Melbourne",
        h1: "WordPress SEO Melbourne",
        h1Accent: "Get More From the World's Most Popular CMS",
        subheadline: "WordPress powers over 40% of the web, but most sites barely scratch the surface of its SEO potential. I help Melbourne businesses unlock what WordPress can really do for organic search.",
        supporting: "WordPress is incredibly SEO-friendly when configured correctly. The problem is, most sites aren't. I optimise your WordPress website for speed, structure, and search visibility, turning a good platform into a ranking machine.",
        primaryCta: "Get Your Free WordPress SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "WordPress & SEO",
        heading: "Why WordPress Is Great for SEO, When Done Right",
        body: [
          "WordPress is one of the most SEO-friendly platforms available. Clean code, flexible structure, powerful plugins, and full control over every element that matters for rankings.",
          "But 'SEO-friendly' doesn't mean 'automatically optimised.' Most WordPress sites have significant technical issues, bloated themes, misconfigured plugins, slow load times, poor site structure, that undermine their ranking potential.",
          "When properly configured and optimised, WordPress can outperform almost any other CMS for organic search. I help Melbourne businesses get there.",
        ],
      }}
      included={{
        heading: "What's Included in My WordPress SEO Service",
        features: [
          { icon: Settings, title: "WordPress Technical SEO", desc: "Plugin configuration (Yoast, Rank Math, or similar), permalink structure, XML sitemaps, and robots.txt optimisation." },
          { icon: Zap, title: "Page Speed Optimisation", desc: "Caching setup, image optimisation, database cleanup, and hosting recommendations to hit Core Web Vitals targets." },
          { icon: Shield, title: "Security & HTTPS", desc: "SSL configuration, security plugin setup, and mixed content fixes that protect both users and rankings." },
          { icon: FileCode, title: "Structured Data & Schema", desc: "Implementing schema markup through plugins and custom code for rich results in Google search." },
          { icon: Search, title: "Keyword Research & Mapping", desc: "Comprehensive keyword research mapped to your existing pages and content calendar." },
          { icon: FileText, title: "Content Optimisation", desc: "Optimising existing posts and pages for target keywords, readability, and E-E-A-T signals." },
          { icon: Link2, title: "Internal Linking Strategy", desc: "Building a logical internal link structure that distributes authority and improves crawlability." },
          { icon: BarChart2, title: "Performance Tracking", desc: "Google Search Console and Analytics setup with monthly reporting on rankings and organic traffic." },
        ],
      }}
      process={{
        heading: "My WordPress SEO Process",
        steps: [
          { step: "01", title: "WordPress SEO Audit", desc: "A comprehensive audit of your WordPress site's technical health, plugin configuration, and current ranking performance." },
          { step: "02", title: "Technical Configuration", desc: "Setting up and optimising your SEO plugin, fixing technical issues, and ensuring proper indexing." },
          { step: "03", title: "Speed & Performance", desc: "Improving page load times through caching, image optimisation, and code cleanup." },
          { step: "04", title: "On-Page Optimisation", desc: "Optimising existing content and pages for target keywords and user intent." },
          { step: "05", title: "Ongoing SEO Management", desc: "Monthly content optimisation, link building, and performance reporting to drive continued growth." },
        ],
      }}
      faqs={[
        { q: "Which SEO plugin should I use for WordPress?", a: "Yoast SEO and Rank Math are both excellent. Rank Math has more features in the free version; Yoast has a longer track record. I can work with either and will recommend the best option for your specific site." },
        { q: "Can WordPress SEO be done without a developer?", a: "Many optimisations can be done through plugins without coding. However, some technical fixes, theme code, server configuration, advanced schema, may require developer involvement. I'll tell you exactly what needs a developer." },
        { q: "My WordPress site is slow. Will that affect SEO?", a: "Yes, page speed is a confirmed Google ranking factor. A slow WordPress site will rank lower than a fast competitor with similar content. Speed optimisation is one of the highest-ROI SEO improvements you can make." },
        { q: "I have a lot of old blog posts. Should I update them?", a: "Probably yes. Outdated content can drag down your site's overall quality signals. I include a content audit that identifies which posts to update, consolidate, or remove." },
      ]}
      cta={{
        heading: "Ready to Unlock Your WordPress Site's Potential?",
        body: "Find out what's holding your WordPress site back from its ranking potential. Get a free WordPress SEO audit today.",
        primary: "Get Your Free WordPress SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
