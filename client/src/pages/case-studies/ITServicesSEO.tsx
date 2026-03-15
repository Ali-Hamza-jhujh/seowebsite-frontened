import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ITServicesSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "IT Services SEO Case Study | B2B Organic Authority | Khalis Marketing",
          description: "How an IT services company built organic authority in a competitive B2B market through content depth, technical SEO, and strategic link building.",
        },
        industry: "IT Services",
        location: "Australia",
        services: ["Website Build", "Technical SEO", "Keyword Research", "On-Page SEO", "Content Strategy", "Blogging", "Link Building"],
        headline: "How an IT Services Company Built Organic Authority in a Competitive B2B Market",
        subheadline: "An IT services company competing against larger, established providers. We built topical authority through content depth and technical SEO, creating a compounding organic asset that keeps delivering.",
        results: [
          { metric: "Top 5", label: "B2B Service Keywords" },
          { metric: "3x", label: "Organic Traffic Growth" },
          { metric: "Growing", label: "Inbound B2B Pipeline" },
        ],
        trafficData: [
          { month: "M1", value: 320 },
          { month: "M2", value: 480 },
          { month: "M3", value: 680 },
          { month: "M4", value: 920 },
          { month: "M5", value: 1180 },
          { month: "M6", value: 1450 },
          { month: "M7", value: 1720 },
          { month: "M8", value: 2010 },
          { month: "M9", value: 2340 },
          { month: "M10", value: 2680 },
          { month: "M11", value: 3020 },
          { month: "M12", value: 3380, highlight: true },
        ],
        keywords: [
          { keyword: "managed IT services Melbourne", before: 42, after: 3 },
          { keyword: "IT support for small business", before: 56, after: 4 },
          { keyword: "cybersecurity services Australia", before: 74, after: 5 },
          { keyword: "cloud migration services", before: 61, after: 6 },
          { keyword: "IT consulting Melbourne", before: 48, after: 4 },
          { keyword: "network infrastructure services", before: 79, after: 7 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "New website build, B2B keyword strategy, and technical SEO foundation" },
          { phase: "Month 2-4", duration: "Weeks 5-16", action: "Service pages, content strategy, blogging, and link building outreach" },
          { phase: "Month 5-6", duration: "Weeks 17-24", action: "Top 5 rankings achieved, topical authority building, and B2B lead tracking" },
          { phase: "Month 7+", duration: "Ongoing", action: "Content expansion, new service pages, and competitor gap analysis" },
        ],
        challenge: [
          "IT services is one of the more challenging SEO verticals. It is competitive, the buying cycle is longer than consumer services, and the audience is more technically sophisticated. This client was competing against larger, established IT companies with bigger marketing budgets and stronger domain authority.",
          "Their existing website lacked the depth and structure needed to rank for meaningful B2B search terms. It had very little content, weak technical foundations, and was not building the kind of topical authority Google rewards in competitive industries.",
          "The business needed a strategy that would work over a longer time horizon, building genuine authority rather than chasing quick wins that would not hold up in a sophisticated market.",
        ],
        whatWeDid: [
          {
            title: "Built a Professional B2B-Focused Website",
            body: "We designed and built a new website structured around the client's full service offering, managed IT services, cybersecurity, cloud solutions, IT support, and network infrastructure. Each service had its own dedicated page, properly optimised and written for both technical and non-technical decision-makers.",
          },
          {
            title: "Developed a B2B Keyword Strategy",
            body: "We identified the search terms used by business owners and IT decision-makers when evaluating IT providers, a mix of high-intent service terms, comparison searches, and problem-based queries. The strategy was built to capture prospects at different stages of the buying journey, not just those ready to sign a contract immediately.",
          },
          {
            title: "Built Topical Authority Through Content and Blogging",
            body: "In B2B SEO, content depth is a significant competitive advantage. We developed a sustained content strategy covering cybersecurity best practices, cloud migration guides, IT support advice, and technology explainers, positioning the business as a knowledgeable, trustworthy authority in their space.",
          },
          {
            title: "Executed Technical SEO Thoroughly",
            body: "IT services audiences expect technical competence from their providers. A slow or broken website undermines trust immediately. We conducted a thorough technical audit and addressed every issue: site speed, crawlability, schema markup, internal linking, and mobile performance.",
          },
          {
            title: "Built Authoritative Backlinks",
            body: "We secured backlinks from technology publications, business directories, and industry-relevant sources, building the domain authority needed to compete against larger, more established competitors.",
          },
        ],
        resultsList: [
          "Top 5 rankings for core IT service keywords in the Australian B2B market",
          "3x organic traffic growth over the campaign period",
          "Growing pipeline of inbound B2B enquiries from organic search",
          "Improved rankings for problem-based and comparison searches used by business decision-makers",
          "Established topical authority that continues to compound over time",
          "Reduced reliance on outbound sales activity as inbound enquiries increased",
        ],
        keyTakeaway: "In B2B SEO, patience and content depth win. The buying cycle is longer, but the value of each client is significantly higher. Businesses that invest in building genuine topical authority through quality content, rather than chasing quick wins, build a compounding SEO asset that keeps delivering over time.",
        prevSlug: "ecommerce-seo",
        prevLabel: "Ecommerce Store",
      }}
    />
  );
}
