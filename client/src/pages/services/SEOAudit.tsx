import { SEOAuditGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap, FileText, Search, MapPin, Link2, Users, BarChart2, CheckCircle2 } from "lucide-react";

export default function SEOAudit() {
  return (
    <ServicePageTemplate
  graphic={<SEOAuditGraphic />}
      meta={{
        title: "SEO Audit Melbourne | Know What's Holding You Back | Khalis Marketing",
        description: "SEO audit Melbourne, comprehensive analysis of technical health, content, on-page optimisation, backlinks, and local presence. Clear roadmap to better rankings.",
      }}
      hero={{
        label: "SEO Audit Melbourne",
        h1: "SEO Audit Melbourne",
        h1Accent: "Know Exactly What's Holding You Back",
        subheadline: "A comprehensive audit of your website's technical health, content quality, on-page optimisation, backlinks, and local presence. No guesswork, just a clear roadmap to better rankings.",
        supporting: "Before you invest in SEO, you need to know where you stand. My SEO audit uncovers every issue affecting your visibility, and gives you a prioritised action plan to fix them.",
        primaryCta: "Get Your Free SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "What Is an SEO Audit?",
        heading: "What Is an SEO Audit, And Why Does It Matter?",
        body: [
          "An SEO audit is a complete health check for your website's search performance. It examines everything that affects how Google crawls, indexes, and ranks your site, from technical foundations to content quality to backlink profile.",
          "Think of it like a diagnostic report. Without it, you're guessing at what's wrong. With it, you know exactly where to focus your time and budget for maximum impact.",
          "Most websites have issues the owner doesn't even know exist. Pages that aren't being indexed. Content that's cannibalising itself. Technical errors silently killing rankings. Competitors outperforming you for reasons you can't see. An SEO audit brings all of this to light, and gives you a clear path forward.",
        ],
      }}
      included={{
        heading: "What My SEO Audit Covers",
        features: [
          { icon: Zap, title: "Technical SEO Audit", desc: "Site speed, Core Web Vitals, mobile usability, crawl errors, indexing issues, robots.txt, XML sitemap, HTTPS, and structured data." },
          { icon: FileText, title: "On-Page SEO Audit", desc: "Title tags, meta descriptions, heading structure, keyword targeting, internal linking, URL structure, image optimisation, and duplicate content." },
          { icon: Search, title: "Content Audit", desc: "Content quality, gaps, keyword cannibalisation, outdated pages, performance analysis, and E-E-A-T signals." },
          { icon: MapPin, title: "Local SEO Audit", desc: "Citation consistency, local on-page signals, map pack visibility, and local keyword rankings." },
          { icon: Link2, title: "Backlink Audit", desc: "Link profile strength, toxic links, competitor backlink comparison, and link building opportunities." },
          { icon: Users, title: "Competitor Analysis", desc: "Who's outranking you, why they're winning, and the specific gaps you need to close to overtake them." },
          { icon: BarChart2, title: "Keyword Rankings Report", desc: "Current ranking positions for your target keywords, with opportunity analysis for quick wins." },
          { icon: CheckCircle2, title: "Prioritised Action Plan", desc: "Not just a list of issues, a prioritised roadmap of what to fix first for the fastest ranking improvements." },
        ],
      }}
      process={{
        heading: "How the Audit Works",
        steps: [
          { step: "01", title: "You Share Access", desc: "You provide access to Google Search Console and Google Analytics so I can see real performance data alongside technical findings." },
          { step: "02", title: "Deep Analysis", desc: "I run a comprehensive crawl and manual analysis across all six audit areas, typically taking 3-5 business days for thorough coverage." },
          { step: "03", title: "Report Delivery", desc: "You receive a detailed audit report with every issue documented, explained in plain English, and prioritised by impact." },
          { step: "04", title: "Walkthrough Call", desc: "A 45-minute call to walk through the findings, answer your questions, and discuss the recommended next steps." },
          { step: "05", title: "Implementation Support", desc: "I can implement the recommendations myself, or hand off clear instructions to your developer or team." },
        ],
      }}
      faqs={[
        { q: "Is the SEO audit really free?", a: "Yes, my initial audit is completely free with no obligation. It covers the key areas of your site and gives you actionable insights you can use whether you work with me or not." },
        { q: "How long does the audit take?", a: "A thorough audit takes 3-5 business days depending on your site's size. You'll receive the report with a walkthrough call included." },
        { q: "What do I need to provide for the audit?", a: "Ideally, read-only access to Google Search Console and Google Analytics. This gives me real performance data to complement the technical analysis. If you don't have these set up, I can still audit your site." },
        { q: "Will the audit tell me what to fix first?", a: "Yes, the report includes a prioritised action plan. Not just a list of issues, but a clear recommendation of what to tackle first for the fastest ranking improvements." },
        { q: "Do I have to hire you to fix the issues?", a: "No. The audit is yours to keep and use however you like. Many clients use it to brief their developer or in-house team. Others choose to work with me on implementation." },
      ]}
      cta={{
        heading: "Ready to See What's Holding You Back?",
        body: "Get a comprehensive audit of your website's SEO health, free, with no obligation. You'll know exactly where you stand and what to fix first.",
        primary: "Get Your Free SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
