import { AEOGraphic } from "@/components/ServiceGraphics";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Bot, Search, FileCode, Globe, Star, TrendingUp, Shield, BarChart2 } from "lucide-react";

export default function AEOSEO() {
  return (
    <ServicePageTemplate
  graphic={<AEOGraphic />}
      meta={{
        title: "AEO Services Melbourne | Answer Engine Optimization | Khalis Marketing",
        description: "AEO services Melbourne, get found in ChatGPT, Perplexity, and Google AI Overviews. Answer Engine Optimization that puts you in AI-generated answers.",
      }}
      hero={{
        label: "AEO / LLM SEO Melbourne",
        h1: "AEO Services",
        h1Accent: "Get Your Business Found in AI Search",
        subheadline: "Answer Engine Optimization for the new era of search. I help Melbourne businesses get cited, recommended, and surfaced by ChatGPT, Perplexity, Google AI Overviews, and other AI-powered search tools.",
        supporting: "Search is evolving. Millions of people now ask AI assistants for recommendations instead of scrolling through Google results. If your business isn't optimised for answer engines, you're becoming invisible to a growing audience.",
        primaryCta: "Get Your Free AEO Audit",
        secondaryCta: "Book a Call",
      }}
      intro={{
        label: "What Is AEO?",
        heading: "What Is Answer Engine Optimization (AEO)?",
        body: [
          "Answer Engine Optimization, or AEO, is the practice of optimising your online presence so AI-powered search tools recommend and cite your business.",
          "Traditional SEO focuses on ranking in Google's blue links. AEO focuses on being the answer that AI tools like ChatGPT, Perplexity, Google's AI Overviews, Microsoft Copilot, and Siri provide when users ask questions.",
          "When someone asks ChatGPT 'What's the best plumber in Melbourne?' or Perplexity 'Which SEO agency should I hire?', the AI pulls from sources across the web to generate an answer. The businesses that get mentioned are the ones optimised for how these AI systems find, evaluate, and surface information.",
          "This is no longer future speculation. It's happening now. And most businesses, including your competitors, haven't caught on yet.",
        ],
      }}
      included={{
        heading: "What's Included in My AEO Services",
        features: [
          { icon: Search, title: "AI Visibility Audit", desc: "I analyse how your business currently appears (or doesn't) in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and other platforms." },
          { icon: Shield, title: "E-E-A-T Enhancement", desc: "Strengthening Experience, Expertise, Authoritativeness, and Trustworthiness signals across your website, author bios, credentials, trust indicators, and content depth." },
          { icon: FileCode, title: "Structured Data Implementation", desc: "Schema markup that helps AI systems understand your content, FAQ, How-To, LocalBusiness, and more." },
          { icon: Globe, title: "Brand Mention Building", desc: "Building your brand presence through PR, guest posts, directory listings, and authoritative mentions that train AI models to recognise your business." },
          { icon: Bot, title: "Content Optimisation for AI", desc: "Optimising content for question-based queries, featured snippet formats, and conversational search patterns that AI tools favour." },
          { icon: Star, title: "Knowledge Panel Optimisation", desc: "Optimising your Google Knowledge Panel and ensuring brand information is accurate across sources AI systems reference." },
          { icon: TrendingUp, title: "Competitor Gap Analysis", desc: "Identifying what competitors getting cited in AI answers are doing differently, and closing those gaps." },
          { icon: BarChart2, title: "Ongoing AI Monitoring", desc: "Tracking how your business appears in AI-generated results and adapting strategies as platforms evolve." },
        ],
      }}
      process={{
        heading: "How I Approach AEO",
        steps: [
          { step: "01", title: "AI Visibility Audit", desc: "Testing how your business currently appears when relevant questions are asked across major AI platforms. This reveals your baseline visibility." },
          { step: "02", title: "Gap Analysis", desc: "Comparing your presence against competitors who are getting cited. What are they doing that you're not? Where are the opportunities?" },
          { step: "03", title: "Strategy Development", desc: "Creating an AEO strategy, content improvements, structured data, E-E-A-T signals, and brand mention opportunities." },
          { step: "04", title: "Implementation", desc: "Executing the strategy, optimising content, adding schema markup, building authoritative mentions, and strengthening trust signals." },
          { step: "05", title: "Monitor & Adapt", desc: "Tracking your visibility in AI-generated answers and refining the approach as the landscape changes." },
        ],
      }}
      faqs={[
        { q: "What's the difference between SEO and AEO?", a: "SEO focuses on ranking in traditional search engine results (Google's blue links). AEO focuses on being cited and recommended by AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews. They're complementary, good SEO supports good AEO." },
        { q: "Is AEO replacing SEO?", a: "No. Traditional SEO is still essential. But AEO is an additional layer that's becoming increasingly important as more users shift to AI-powered search. The best approach is both working together." },
        { q: "How do I know if I'm appearing in AI answers?", a: "I run visibility audits across major AI platforms, testing relevant queries for your industry. You'll see exactly where you're being mentioned, and where you're missing." },
        { q: "How long does AEO take to work?", a: "It varies. Some improvements (like structured data) can have quick impact. Others (like building brand mentions) take time to influence AI training data. Expect meaningful progress within 3-6 months." },
        { q: "Can you guarantee I'll be recommended by ChatGPT?", a: "No, and anyone who guarantees that is lying. AI systems are complex and constantly evolving. What I can do is optimise every factor within your control to maximise your chances of being cited and recommended." },
        { q: "Do I need to do SEO first before AEO?", a: "Not necessarily, but they work best together. Strong SEO foundations (quality content, E-E-A-T, backlinks) make AEO more effective. I can assess your situation and recommend the right approach." },
      ]}
      cta={{
        heading: "Ready for the Future of Search?",
        body: "Find out how visible your business is in AI-powered search. Get an AEO audit and I'll show you exactly where you stand in ChatGPT, Perplexity, and Google AI Overviews, plus what it takes to get recommended.",
        primary: "Get Your Free AEO Audit",
        secondary: "Book a Call with Bhavleen",
      }}
    />
  );
}
