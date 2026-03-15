import { SaaSSEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp, Search, FileText, Link2, BarChart2, Users, Globe, Zap } from "lucide-react";

export default function SaaSEO() {
  return (
    <ServicePageTemplate
  graphic={<SaaSSEOGraphic />}
      meta={{
        title: "SaaS SEO Melbourne | Grow Your Software Business Organically | Khalis Marketing",
        description: "SaaS SEO Melbourne, drive signups, demos, and recurring revenue through organic search. SEO for software businesses that scales without scaling ad spend.",
      }}
      hero={{
        label: "SaaS SEO Melbourne",
        h1: "SaaS SEO Melbourne",
        h1Accent: "Grow Your Software Business With Organic Search",
        subheadline: "SEO for SaaS companies that drives signups, demos, and recurring revenue. I help software businesses build organic acquisition channels that scale without scaling ad spend.",
        supporting: "Paid acquisition gets expensive fast. SaaS SEO builds a compounding asset, content and rankings that drive qualified leads month after month, reducing your cost per acquisition over time.",
        primaryCta: "Get Your Free SaaS SEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "Why SaaS Needs SEO",
        heading: "Why SaaS Companies Need a Different SEO Approach",
        body: [
          "SaaS SEO is fundamentally different from local or ecommerce SEO. Your buyers are searching for solutions to problems, not products. The funnel is longer. The keywords are different. The content strategy is different.",
          "SaaS SEO targets three types of queries: problem-aware searches (people who have a problem but don't know your solution exists), solution-aware searches (people comparing tools like yours), and brand searches (people who already know you).",
          "A well-executed SaaS SEO strategy builds content that captures prospects at every stage of the funnel, from first awareness to trial signup to paid conversion.",
        ],
      }}
      included={{
        heading: "What's Included in My SaaS SEO Service",
        features: [
          { icon: Search, title: "SaaS Keyword Research", desc: "Mapping the full keyword landscape, problem keywords, solution keywords, comparison keywords, and alternative searches." },
          { icon: FileText, title: "Content Strategy & Creation", desc: "Building a content engine that targets high-intent queries at every stage of your buyer's journey." },
          { icon: TrendingUp, title: "Product-Led SEO", desc: "Creating free tools, templates, and calculators that attract organic links and drive product discovery." },
          { icon: Link2, title: "SaaS Link Building", desc: "Acquiring backlinks from SaaS directories, review sites, industry publications, and relevant communities." },
          { icon: Globe, title: "Competitor & Alternative Pages", desc: "Creating 'vs competitor' and 'alternative to' pages that capture high-intent comparison traffic." },
          { icon: Users, title: "Integration & Use Case Pages", desc: "Pages targeting integration searches and specific use cases that your ICP is searching for." },
          { icon: Zap, title: "Technical SEO for SaaS", desc: "Ensuring your marketing site and app are properly separated, indexed, and optimised for crawlability." },
          { icon: BarChart2, title: "Pipeline-Focused Reporting", desc: "Reporting on organic signups and demo requests, not just traffic, so you can see real business impact." },
        ],
      }}
      process={{
        heading: "My SaaS SEO Process",
        steps: [
          { step: "01", title: "ICP & Keyword Research", desc: "Understanding your ideal customer profile and mapping the full keyword landscape they search across the buying journey." },
          { step: "02", title: "Content Gap Analysis", desc: "Identifying the content your competitors have that you don't, and prioritising the highest-impact gaps to close first." },
          { step: "03", title: "Technical Foundation", desc: "Ensuring your site structure, indexing, and technical health support aggressive content scaling." },
          { step: "04", title: "Content Production", desc: "Creating SEO-optimised content that targets high-intent keywords and moves prospects through your funnel." },
          { step: "05", title: "Link Building & Authority", desc: "Building domain authority through SaaS-specific link acquisition, directories, reviews, integrations, and PR." },
        ],
      }}
      faqs={[
        { q: "How is SaaS SEO different from regular SEO?", a: "SaaS SEO focuses on the full buyer journey, from problem awareness to solution comparison to conversion. It requires a different keyword strategy, content approach, and success metrics than local or ecommerce SEO." },
        { q: "What's the ROI of SaaS SEO?", a: "SaaS SEO typically has the highest long-term ROI of any acquisition channel because organic traffic compounds over time. A piece of content that ranks today continues driving signups for years, unlike paid ads that stop the moment you pause spend." },
        { q: "How long does SaaS SEO take to show results?", a: "Initial ranking improvements typically appear within 3-6 months. Meaningful pipeline impact usually takes 6-12 months. SaaS SEO is a long-term investment, but the compounding returns make it worth it." },
        { q: "Should I do SEO or content marketing?", a: "They're the same thing done well. SEO without content is just technical optimisation. Content without SEO is writing that nobody finds. The most effective approach integrates both." },
      ]}
      cta={{
        heading: "Ready to Build an Organic Growth Engine?",
        body: "Find out what organic search opportunities exist for your SaaS product. Get a free SEO audit and I'll show you exactly where the biggest opportunities are.",
        primary: "Get Your Free SaaS SEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
