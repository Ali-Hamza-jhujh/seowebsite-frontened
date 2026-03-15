import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function EcommerceSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "Ecommerce SEO Case Study | $127K Organic Revenue | Khalis Marketing",
          description: "How an online retailer generated $127,000 in organic revenue over 6 months by restructuring their site architecture and building quality backlinks.",
        },
        industry: "Ecommerce",
        location: "Melbourne (Australia-wide shipping)",
        services: ["Technical SEO", "Site Architecture", "Keyword Research", "On-Page SEO", "Product Page Optimisation", "Link Building", "Content Strategy"],
        headline: "$127K in Organic Revenue in 6 Months",
        subheadline: "An online retailer spending heavily on ads but getting nothing from organic search. We restructured their site architecture, optimised product pages, and built quality backlinks, creating a sustainable revenue channel.",
        results: [
          { metric: "$127K", label: "Organic Revenue (6 months)" },
          { metric: "215%", label: "Organic Traffic Increase" },
          { metric: "40%", label: "Reduced Reliance on Paid Ads" },
        ],
        trafficData: [
          { month: "M1", value: 1200 },
          { month: "M2", value: 1650 },
          { month: "M3", value: 2300 },
          { month: "M4", value: 3100 },
          { month: "M5", value: 4200 },
          { month: "M6", value: 5480 },
          { month: "M7", value: 6700 },
          { month: "M8", value: 7900 },
          { month: "M9", value: 9200 },
          { month: "M10", value: 10500 },
          { month: "M11", value: 11800 },
          { month: "M12", value: 13780, highlight: true },
        ],
        keywords: [
          { keyword: "outdoor furniture Australia", before: 38, after: 2 },
          { keyword: "buy outdoor furniture online", before: 52, after: 3 },
          { keyword: "best outdoor dining set", before: 67, after: 5 },
          { keyword: "outdoor furniture review", before: 44, after: 4 },
          { keyword: "timber vs aluminium outdoor furniture", before: 71, after: 6 },
          { keyword: "outdoor furniture free shipping Australia", before: 83, after: 8 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "Technical audit, site architecture redesign, and duplicate content resolution" },
          { phase: "Month 2-3", duration: "Weeks 5-12", action: "Category and product page optimisation, schema markup, and content strategy" },
          { phase: "Month 4-5", duration: "Weeks 13-20", action: "Link building campaign, buying guides published, and revenue tracking" },
          { phase: "Month 6+", duration: "Ongoing", action: "New category expansion, seasonal content, and competitor gap analysis" },
        ],
        challenge: [
          "This online retailer had a well-established product range and a loyal customer base, but their organic search channel was essentially non-existent. All of their customer acquisition was running through paid advertising, which was expensive, unpredictable, and provided no compounding return.",
          "Their website had significant structural problems: poor URL architecture, duplicate content across product variants, thin category pages, and no coherent internal linking strategy. Google was struggling to understand and index the site correctly, which meant even their best products were invisible in organic search.",
          "The business owner understood that organic search could be a significant revenue channel, but had never invested in the technical and strategic work required to unlock it.",
        ],
        whatWeDid: [
          {
            title: "Restructured the Site Architecture",
            body: "We redesigned the site's URL structure, category hierarchy, and internal linking to create a logical, crawlable architecture. This made it easier for Google to discover, index, and understand every product and category page on the site.",
          },
          {
            title: "Resolved Technical SEO Issues",
            body: "We conducted a comprehensive technical audit and addressed every issue: duplicate content from product variants, crawl budget waste, missing canonical tags, slow page load times, and mobile usability problems. These fixes alone improved the site's indexation significantly.",
          },
          {
            title: "Optimised Category and Product Pages",
            body: "We rewrote category page content to target high-volume commercial keywords, and optimised product pages with unique descriptions, proper schema markup, and conversion-focused copy. Every page was built to rank and convert.",
          },
          {
            title: "Developed a Content Strategy for Organic Discovery",
            body: "We built a content strategy targeting informational searches related to the product range, buying guides, comparison articles, and how-to content. This content attracted users earlier in the buying journey and built the site's topical authority.",
          },
          {
            title: "Built High-Quality Backlinks",
            body: "We secured backlinks from relevant industry publications, product review sites, and authoritative directories. These links strengthened the domain's authority and directly contributed to improved rankings for competitive commercial keywords.",
          },
        ],
        resultsList: [
          "$127,000 in organic revenue generated over the 6-month campaign period",
          "215% increase in organic traffic from search engines",
          "40% reduction in reliance on paid advertising for customer acquisition",
          "Significant improvement in category page rankings for high-volume commercial keywords",
          "Resolved technical issues that had been suppressing indexation and rankings",
          "A sustainable, compounding organic channel that continues to grow month-on-month",
        ],
        keyTakeaway: "For ecommerce businesses, technical SEO and site architecture are often the biggest untapped opportunities. Most online stores have significant structural problems that suppress organic performance. Fixing these fundamentals, combined with quality content and backlinks, can unlock substantial organic revenue that reduces dependence on paid advertising.",
        prevSlug: "dental-seo",
        prevLabel: "Dental Practice",
        nextSlug: "it-services-seo",
        nextLabel: "IT Services",
      }}
    />
  );
}
