import { LinkBuildingGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Link2, Globe, Building2, Search, TrendingUp, Shield, FileText, Star } from "lucide-react";

export default function LinkBuilding() {
  return (
    <ServicePageTemplate
  graphic={<LinkBuildingGraphic />}
      meta={{
        title: "Link Building Melbourne | Build Authority Google Trusts | Khalis Marketing",
        description: "Link building Melbourne, strategic backlink acquisition and local citation building. Build the authority your site needs to outrank competitors in organic search.",
      }}
      hero={{
        label: "Link Building Melbourne",
        h1: "Link Building Melbourne",
        h1Accent: "Build Authority That Google Trusts",
        subheadline: "Quality backlinks and local citations are the foundation of SEO success. I build both, earning your site the authority it needs to outrank competitors.",
        supporting: "Links remain one of Google's strongest ranking signals. Without them, even perfectly optimised content struggles to rank. I help Melbourne businesses build genuine authority through strategic backlink acquisition and comprehensive local citation building.",
        primaryCta: "Get Your Free SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why Links Matter",
        heading: "Why Link Building Matters",
        body: [
          "Google's algorithm was built on one core idea: pages that other websites link to are more trustworthy and valuable than pages that nobody references.",
          "That principle still holds today. Backlinks remain one of the top three ranking factors in Google's algorithm. Without them, even the best content struggles to rank for competitive keywords.",
          "But not all links are equal. A single link from a respected industry publication is worth more than a hundred links from irrelevant directories. My approach focuses on quality, relevance, and genuine authority, the kind of links that move rankings and withstand algorithm updates.",
        ],
      }}
      included={{
        heading: "What's Included in My Link Building Service",
        features: [
          { icon: Globe, title: "Guest Post Outreach", desc: "Securing placements on relevant, high-authority Australian websites in your industry, real editorial links that move rankings." },
          { icon: Building2, title: "Local Citation Building", desc: "Consistent business listings across Australian directories, Google, Yelp, True Local, Yellow Pages, and industry-specific directories." },
          { icon: Link2, title: "Broken Link Building", desc: "Finding broken links on relevant sites and offering your content as a replacement, a white-hat tactic with high success rates." },
          { icon: Search, title: "Competitor Backlink Analysis", desc: "Identifying where your competitors are getting their links and replicating the best opportunities for your site." },
          { icon: Shield, title: "Toxic Link Removal", desc: "Identifying and disavowing harmful backlinks that could be dragging down your rankings or risking a penalty." },
          { icon: FileText, title: "Digital PR & Brand Mentions", desc: "Building brand mentions and unlinked citations across the web, signals that AI systems and Google both value." },
          { icon: TrendingUp, title: "Link Velocity Management", desc: "Building links at a natural, sustainable pace that looks organic to Google and avoids algorithmic red flags." },
          { icon: Star, title: "Monthly Link Reports", desc: "Transparent reporting on every link built, the source, domain authority, anchor text, and impact on rankings." },
        ],
      }}
      process={{
        heading: "My Link Building Process",
        steps: [
          { step: "01", title: "Backlink Audit", desc: "Analysing your existing link profile, what you have, what's helping, and what might be hurting." },
          { step: "02", title: "Competitor Research", desc: "Mapping where your top competitors get their links and identifying the best opportunities to replicate and exceed them." },
          { step: "03", title: "Strategy & Targeting", desc: "Building a targeted outreach list of relevant, high-authority sites that will genuinely move your rankings." },
          { step: "04", title: "Outreach & Acquisition", desc: "Personalised outreach to secure placements, guest posts, resource pages, and editorial mentions." },
          { step: "05", title: "Reporting & Iteration", desc: "Monthly reports on links acquired, domain authority growth, and ranking improvements, with ongoing strategy refinement." },
        ],
      }}
      faqs={[
        { q: "How many links do I need to rank?", a: "It depends on your competition. I analyse your competitors' link profiles to determine what's needed to outrank them, then build a strategy to get there." },
        { q: "Are all backlinks good for SEO?", a: "No. Low-quality, spammy, or irrelevant links can hurt your rankings. I focus exclusively on quality, relevant links from real websites, and I can help remove toxic links already pointing to your site." },
        { q: "How long does link building take to show results?", a: "New links typically start influencing rankings within 4-12 weeks as Google discovers and processes them. Consistent link building over 6-12 months produces the most significant results." },
        { q: "Do you use private blog networks (PBNs)?", a: "No. PBNs are a black-hat tactic that can result in manual penalties. I only build links through legitimate, white-hat methods that are sustainable long-term." },
        { q: "What's a local citation and why does it matter?", a: "A local citation is any online mention of your business name, address, and phone number (NAP). Consistent citations across directories help Google verify your business information and improve local rankings." },
      ]}
      cta={{
        heading: "Ready to Build Real Authority?",
        body: "Find out where your backlink profile stands and what it takes to outrank your competitors. Get a free link profile audit today.",
        primary: "Get Your Free SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
