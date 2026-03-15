import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function PlumbingSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "Plumbing SEO Case Study | 312% Organic Traffic | Khalis Marketing",
          description: "How a local plumbing company went from zero online presence to page one of Google, generating consistent inbound leads without paid advertising.",
        },
        industry: "Plumbing",
        location: "South East Melbourne",
        services: ["Website Build", "Technical SEO", "Keyword Research", "On-Page SEO", "Local SEO", "Content Strategy", "Link Building"],
        headline: "From Zero Online Presence to Page One: A Plumbing Business That Now Gets Leads While They Sleep",
        subheadline: "A local plumbing company struggling to rank against established competitors. We rebuilt their local SEO foundation and created service-area content that now generates consistent leads.",
        results: [
          { metric: "312%", label: "Organic Traffic Increase" },
          { metric: "45+", label: "Page 1 Keywords" },
          { metric: "3x", label: "More Enquiries Per Month" },
        ],
        trafficData: [
          { month: "M1", value: 120 },
          { month: "M2", value: 180 },
          { month: "M3", value: 310 },
          { month: "M4", value: 520 },
          { month: "M5", value: 740 },
          { month: "M6", value: 980 },
          { month: "M7", value: 1240 },
          { month: "M8", value: 1580 },
          { month: "M9", value: 1890 },
          { month: "M10", value: 2340 },
          { month: "M11", value: 2780 },
          { month: "M12", value: 3254, highlight: true },
        ],
        keywords: [
          { keyword: "emergency plumber Dandenong", before: 48, after: 2 },
          { keyword: "blocked drain plumber", before: 62, after: 4 },
          { keyword: "hot water system replacement", before: 71, after: 6 },
          { keyword: "plumber near me", before: 55, after: 3 },
          { keyword: "gas plumber Frankston", before: 80, after: 5 },
          { keyword: "leaking tap repair", before: 44, after: 8 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "Technical audit, website rebuild, keyword research, and competitor analysis" },
          { phase: "Month 2-3", duration: "Weeks 5-12", action: "On-page optimisation, service pages, local citations, and suburb landing pages" },
          { phase: "Month 4-6", duration: "Weeks 13-24", action: "Content strategy, blog publishing, and link building outreach" },
          { phase: "Month 7+", duration: "Ongoing", action: "Ranking consolidation, new keyword expansion, and monthly reporting" },
        ],
        challenge: [
          "This plumbing business had been operating for years almost entirely through referrals and word of mouth. It worked, until it didn't. Referral work is unpredictable, and the business owner wanted a more reliable pipeline of new customers.",
          "They had no real website, no Google presence, and no visibility in search. Competitors in their service area were showing up at the top of Google every day, capturing customers who had no idea this business even existed.",
          "The goal was clear: build an online presence that generated consistent inbound leads from people actively searching for a plumber.",
        ],
        whatWeDid: [
          {
            title: "Designed and Built a Conversion-Focused Website",
            body: "We built a new website with one primary objective: turn visitors into leads. That meant clear service pages, prominent phone numbers, fast load times, and a simple enquiry form. Every page was structured for both SEO and conversion.",
          },
          {
            title: "Mapped and Targeted High-Intent Service Keywords",
            body: "Plumbing searches are highly intent-driven. People searching 'blocked drain plumber' or 'emergency plumber near me' are ready to book. We identified the most valuable search terms across their full service offering and built optimised pages for each.",
          },
          {
            title: "Invested Heavily in Local SEO",
            body: "For a trades business, local SEO is the highest-ROI activity. We built out local citations and implemented suburb-specific landing pages to capture searches across their entire service area, not just the suburb they were based in.",
          },
          {
            title: "Created Content That Answered Real Customer Questions",
            body: "We developed blog content targeting common questions homeowners type into Google, things like 'why is my water pressure low' or 'signs you need to replace your hot water system.' This drove additional organic traffic and built credibility with both users and Google.",
          },
          {
            title: "Built Relevant Backlinks",
            body: "We secured backlinks from local business directories, home improvement sites, and industry-relevant sources to strengthen the domain and improve competitive rankings.",
          },
        ],
        resultsList: [
          "Website ranking on page one for multiple high-value plumbing keywords in their service area",
          "Local search presence appearing in the map pack for core search terms",
          "Consistent flow of inbound enquiries from organic search, customers finding them without any paid advertising",
          "Significant reduction in reliance on referrals as the primary source of new work",
          "312% increase in organic traffic over the campaign period",
          "45+ keywords now ranking on page one of Google",
          "3x more enquiries per month compared to pre-SEO baseline",
        ],
        keyTakeaway: "Trades businesses are one of the biggest SEO opportunities in local search. Most competitors have weak websites and minimal SEO investment, which means that doing the basics well, consistently, creates an outsized advantage. A well-optimised trades business can dominate local search within its service area.",
        nextSlug: "electrical-seo",
        nextLabel: "Electrical Contractor",
      }}
    />
  );
}
