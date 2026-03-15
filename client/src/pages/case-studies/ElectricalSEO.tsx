import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ElectricalSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "Electrician SEO Case Study | Map Pack in 4 Months | Khalis Marketing",
          description: "How an electrical contractor went from zero Google visibility to ranking in the map pack for 12 high-intent keywords in just 4 months.",
        },
        industry: "Electrical",
        location: "Northern Melbourne",
        services: ["Website Build", "Technical SEO", "Keyword Research", "On-Page SEO", "Local SEO", "Citation Building", "Link Building"],
        headline: "From Invisible to Map Pack in 4 Months",
        subheadline: "An electrical contractor with a new website and zero Google visibility. We optimised their local search presence and built citations that put them in the map pack for high-intent keywords.",
        results: [
          { metric: "12", label: "Map Pack Keywords" },
          { metric: "187%", label: "Website Traffic Increase" },
          { metric: "28", label: "New Leads Per Month" },
        ],
        trafficData: [
          { month: "M1", value: 95 },
          { month: "M2", value: 160 },
          { month: "M3", value: 290 },
          { month: "M4", value: 510 },
          { month: "M5", value: 740 },
          { month: "M6", value: 980 },
          { month: "M7", value: 1190 },
          { month: "M8", value: 1430 },
          { month: "M9", value: 1660 },
          { month: "M10", value: 1870 },
          { month: "M11", value: 2050 },
          { month: "M12", value: 2270, highlight: true },
        ],
        keywords: [
          { keyword: "electrician Epping", before: 58, after: 2 },
          { keyword: "emergency electrician near me", before: 72, after: 4 },
          { keyword: "switchboard upgrade", before: 84, after: 6 },
          { keyword: "residential electrician", before: 49, after: 3 },
          { keyword: "commercial electrician Thomastown", before: 77, after: 8 },
          { keyword: "EV charger installation", before: 93, after: 7 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "Technical audit, on-page fixes, keyword mapping, and schema markup implementation" },
          { phase: "Month 2-3", duration: "Weeks 5-12", action: "Citation building, suburb landing pages, and review generation strategy" },
          { phase: "Month 4", duration: "Weeks 13-16", action: "Map pack entry achieved for 12 keywords, link building launched" },
          { phase: "Month 5+", duration: "Ongoing", action: "Ranking consolidation, new suburb expansion, and monthly reporting" },
        ],
        challenge: [
          "This electrical contractor had recently launched a new website but was generating virtually no organic traffic. Despite being an experienced, reliable business, they were invisible online. Competitors with older, more established websites were dominating the search results for every relevant keyword.",
          "For a trades business, being absent from local search is a significant competitive disadvantage. Customers searching for an electrician are ready to hire immediately. Every day without visibility was a day of lost leads.",
          "The challenge was not just ranking in organic results, but specifically breaking into the map pack, where the majority of local search clicks go.",
        ],
        whatWeDid: [
          {
            title: "Optimised the Website for Local Search",
            body: "We conducted a thorough technical and on-page audit of the new website, addressing crawlability issues, improving page speed, and implementing proper schema markup. Every service page was rewritten with targeted local keywords and clear calls to action.",
          },
          {
            title: "Built a Comprehensive Local Citation Profile",
            body: "We systematically built and verified consistent business listings across key Australian directories and industry-specific platforms. Citation consistency is a foundational local ranking signal, and this business had almost none in place.",
          },
          {
            title: "Implemented Suburb-Specific Service Pages",
            body: "Rather than relying on a single location page, we built individual landing pages targeting each suburb within the client's service area. This gave the site a chance to rank for '[service] electrician [suburb]' searches across their entire operating radius.",
          },
          {
            title: "Developed a Review Generation Strategy",
            body: "We built a simple, repeatable process for the client to request reviews from satisfied customers. Consistent review volume is a key map pack ranking factor, and this strategy helped accelerate their local visibility significantly.",
          },
          {
            title: "Built Targeted Local Backlinks",
            body: "We secured relevant backlinks from local business associations, home improvement directories, and industry publications to strengthen domain authority and support competitive rankings.",
          },
        ],
        resultsList: [
          "Ranking in the map pack for 12 high-intent service keywords within 4 months",
          "187% increase in website traffic from organic search",
          "28 new leads per month generated entirely from organic search, no paid advertising",
          "Consistent review growth improving both local rankings and conversion rates",
          "Suburb-specific pages ranking for location-based service searches across the service area",
        ],
        keyTakeaway: "For new or recently launched websites, local SEO fundamentals, citations, on-page optimisation, and a review strategy, can produce meaningful results faster than most business owners expect. The map pack is achievable within months when the right foundations are in place.",
        prevSlug: "plumbing-seo",
        prevLabel: "Plumbing Company",
        nextSlug: "restaurant-seo",
        nextLabel: "Restaurant",
      }}
    />
  );
}
