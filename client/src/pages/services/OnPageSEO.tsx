import { OnPageSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileText, Tag, Heading1, Link2, Image, Search, LayoutList, TrendingUp } from "lucide-react";

export default function OnPageSEO() {
  return (
    <ServicePageTemplate
  graphic={<OnPageSEOGraphic />}
      meta={{
        title: "On-Page SEO Melbourne | Optimise Every Page | Khalis Marketing",
        description: "On-page SEO Melbourne, strategic optimisation of titles, meta tags, headings, content, and internal links. Every page working harder for your rankings.",
      }}
      hero={{
        label: "On-Page SEO Melbourne",
        h1: "On-Page SEO Melbourne",
        h1Accent: "Optimise Every Page for Rankings",
        subheadline: "Strategic on-page optimisation that tells Google exactly what your pages are about, and convinces visitors to take action.",
        supporting: "On-page SEO is where content meets strategy. I optimise your titles, meta descriptions, headings, content structure, and internal links to help every page rank higher and convert better.",
        primaryCta: "Get Your Free SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "What Is On-Page SEO?",
        heading: "What Is On-Page SEO?",
        body: [
          "On-page SEO refers to everything you can optimise directly on your website to improve search rankings. This includes the words on your pages, how they're structured, and the signals they send to Google about relevance and quality.",
          "It's the difference between a page that ranks on page 5 and one that ranks on page 1, even when the content is similar. Strategic on-page optimisation ensures Google understands exactly what each page is about and why it deserves to rank.",
          "For Melbourne businesses, on-page SEO is often the fastest way to improve existing rankings without building new content from scratch.",
        ],
      }}
      included={{
        heading: "What's Included in Your On-Page SEO Service",
        features: [
          { icon: Tag, title: "Title Tag Optimisation", desc: "Compelling, keyword-rich title tags that improve click-through rates and signal relevance to Google." },
          { icon: FileText, title: "Meta Description Writing", desc: "Persuasive meta descriptions that improve CTR from search results, because clicks are a ranking signal too." },
          { icon: Heading1, title: "Heading Structure (H1-H6)", desc: "Logical heading hierarchy that helps Google understand your content structure and improves readability." },
          { icon: Search, title: "Keyword Targeting & Placement", desc: "Strategic placement of target keywords in the right locations, naturally, without keyword stuffing." },
          { icon: Link2, title: "Internal Linking Optimisation", desc: "Building a strong internal link structure that distributes authority and helps Google discover all your pages." },
          { icon: Image, title: "Image Optimisation", desc: "Alt text, file names, and compression to improve accessibility, page speed, and image search visibility." },
          { icon: LayoutList, title: "Content Structure Improvement", desc: "Reorganising content for better readability, featured snippet eligibility, and user engagement." },
          { icon: TrendingUp, title: "URL Structure Optimisation", desc: "Clean, descriptive URLs that include target keywords and communicate page content clearly." },
        ],
      }}
      process={{
        heading: "My On-Page SEO Process",
        steps: [
          { step: "01", title: "Page Audit & Keyword Mapping", desc: "Auditing your existing pages and mapping the right keywords to each, ensuring no cannibalisation." },
          { step: "02", title: "Competitive Analysis", desc: "Analysing what top-ranking pages are doing well and identifying opportunities to outperform them." },
          { step: "03", title: "On-Page Optimisation", desc: "Implementing all changes, titles, meta, headings, content, internal links, and schema markup." },
          { step: "04", title: "Content Enhancement", desc: "Improving existing content depth, structure, and E-E-A-T signals to meet Google's quality standards." },
          { step: "05", title: "Tracking & Reporting", desc: "Monitoring ranking improvements for each optimised page and reporting on progress monthly." },
        ],
      }}
      faqs={[
        { q: "How quickly will I see results from on-page SEO?", a: "On-page changes can start showing results within 4-8 weeks as Google recrawls and re-evaluates your pages. Significant ranking improvements typically take 2-4 months." },
        { q: "Will you rewrite my existing content?", a: "Not necessarily. Often, strategic restructuring and optimisation of existing content is more effective than rewriting. I'll recommend the best approach for each page." },
        { q: "Do you do keyword research as part of on-page SEO?", a: "Yes. Proper on-page SEO starts with understanding which keywords each page should target. I include keyword research and mapping as part of the service." },
        { q: "What's the difference between on-page SEO and content marketing?", a: "On-page SEO optimises existing pages for search. Content marketing creates new content to target additional keywords. Both work together, on-page SEO makes your content marketing more effective." },
      ]}
      cta={{
        heading: "Ready to Climb the Rankings?",
        body: "Let's optimise your website and start driving more organic traffic. Get in touch today for a free consultation and SEO audit.",
        primary: "Get Your Free SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
