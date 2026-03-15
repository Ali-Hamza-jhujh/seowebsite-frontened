import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DentalSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "Dental SEO Case Study | 2x Patient Enquiries | Khalis Marketing",
          description: "How a Melbourne dental practice went from invisible to fully booked through SEO, doubling their monthly patient enquiries in 6 months.",
        },
        industry: "Dental",
        location: "Western Melbourne",
        services: ["Website Build", "Technical SEO", "Keyword Research", "On-Page SEO", "Local SEO", "Content Strategy", "Link Building"],
        headline: "How a Melbourne Dental Practice Went from Invisible to Fully Booked Through SEO",
        subheadline: "A dental clinic relying entirely on word-of-mouth. We built a local SEO strategy targeting suburb-specific keywords and optimised their site for patient conversions, doubling their monthly enquiries.",
        results: [
          { metric: "2x", label: "New Patient Enquiries" },
          { metric: "34", label: "Page 1 Keywords" },
          { metric: "89%", label: "Increase in Local Visibility" },
        ],
        trafficData: [
          { month: "M1", value: 180 },
          { month: "M2", value: 290 },
          { month: "M3", value: 450 },
          { month: "M4", value: 660 },
          { month: "M5", value: 890 },
          { month: "M6", value: 1140 },
          { month: "M7", value: 1360 },
          { month: "M8", value: 1580 },
          { month: "M9", value: 1790 },
          { month: "M10", value: 2020 },
          { month: "M11", value: 2280 },
          { month: "M12", value: 2560, highlight: true },
        ],
        keywords: [
          { keyword: "dentist Sunshine", before: 44, after: 2 },
          { keyword: "emergency dentist near me", before: 61, after: 4 },
          { keyword: "teeth whitening Footscray", before: 78, after: 5 },
          { keyword: "Invisalign Melbourne", before: 55, after: 6 },
          { keyword: "dental implants Sunshine", before: 83, after: 8 },
          { keyword: "children's dentist near me", before: 69, after: 3 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "New website build, keyword research, and full technical SEO foundation" },
          { phase: "Month 2-3", duration: "Weeks 5-12", action: "Service pages, local citations, content strategy, and on-page optimisation" },
          { phase: "Month 4-5", duration: "Weeks 13-20", action: "Page one rankings achieved, link building, and patient enquiry tracking" },
          { phase: "Month 6+", duration: "Ongoing", action: "Content expansion, review strategy, and new treatment page creation" },
        ],
        challenge: [
          "When this dental practice came to Khalis Marketing, they had a problem that many small healthcare businesses face: a decent clinic with no digital presence to match. Their existing website was outdated, slow, and completely unoptimised, ranking for almost nothing beyond their own business name.",
          "In a city like Melbourne, where patients have dozens of dental options within a short drive, not appearing on page one of Google meant losing a steady stream of potential patients every single day. The practice was relying almost entirely on word-of-mouth, which had a ceiling. They needed a consistent, scalable source of new patient enquiries.",
        ],
        whatWeDid: [
          {
            title: "Built a New Website from the Ground Up",
            body: "The existing site was beyond saving. We designed and built a new, fast-loading website with a clean user experience, clear calls to action, and a structure built specifically for SEO from day one, not bolted on as an afterthought.",
          },
          {
            title: "Conducted Full Keyword Research and On-Page Strategy",
            body: "We mapped out every service the practice offered, general dentistry, teeth whitening, Invisalign, emergency dental, and more, and built dedicated optimised pages for each. This meant the site could rank for multiple high-intent search terms rather than competing with itself on a single generic homepage.",
          },
          {
            title: "Dominated Local Search and Map Pack",
            body: "For a dental practice, local SEO is everything. We built consistent local citations across key directories and implemented location-specific on-page signals. The goal was simple: show up when someone nearby searches 'dentist near me' or 'emergency dentist Melbourne.'",
          },
          {
            title: "Built Topical Authority Through Content",
            body: "We developed a content strategy targeting common patient questions and search queries, covering topics like what to expect from specific treatments, how to manage dental anxiety, and when to see an emergency dentist. This positioned the practice as a trusted, authoritative source in their local area.",
          },
          {
            title: "Built High-Quality Backlinks",
            body: "We pursued relevant, legitimate link building through local business directories, health-related publications, and community partnerships, building the domain authority needed to compete in a crowded market.",
          },
        ],
        resultsList: [
          "2x increase in new patient enquiries through the website contact form and phone within 6 months",
          "34 keywords now ranking on page one of Google across core treatment terms",
          "89% increase in local search visibility for suburb-specific dental searches",
          "Significant increase in organic search visibility across core treatment keywords",
          "Consistent growth in website traffic from organic search month-on-month",
          "Google Maps presence established and ranking prominently for local dental searches",
        ],
        keyTakeaway: "Dental is a competitive local SEO niche, but the fundamentals done well still win. A fast, well-structured website combined with strong local SEO signals and genuine content is enough to outperform most competitors who are relying on outdated or neglected digital presences.",
        prevSlug: "restaurant-seo",
        prevLabel: "Restaurant",
        nextSlug: "ecommerce-seo",
        nextLabel: "Ecommerce Store",
      }}
    />
  );
}
