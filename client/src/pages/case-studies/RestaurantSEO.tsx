import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RestaurantSEO() {
  return (
    <CaseStudyTemplate
      data={{
        meta: {
          title: "Restaurant SEO Case Study | 147% More Bookings | Khalis Marketing",
          description: "How a boutique Melbourne restaurant increased organic bookings by 147% and built a 4.8-star review profile through local SEO and content strategy.",
        },
        industry: "Hospitality",
        location: "Melbourne CBD",
        services: ["Technical SEO", "Local SEO", "Content Strategy", "Review Strategy", "On-Page SEO", "Link Building"],
        headline: "147% More Bookings from Organic Search",
        subheadline: "A boutique Melbourne restaurant losing visibility to bigger competitors. We focused on local SEO, review strategy, and content that showcased their unique offerings, driving reservations without relying on paid ads.",
        results: [
          { metric: "147%", label: "Organic Bookings Increase" },
          { metric: "4.8", label: "Star Average (200+ Reviews)" },
          { metric: "#1", label: "Page 1 for Key Search Terms" },
        ],
        trafficData: [
          { month: "M1", value: 210 },
          { month: "M2", value: 310 },
          { month: "M3", value: 480 },
          { month: "M4", value: 680 },
          { month: "M5", value: 870 },
          { month: "M6", value: 1050 },
          { month: "M7", value: 1230 },
          { month: "M8", value: 1440 },
          { month: "M9", value: 1620 },
          { month: "M10", value: 1810 },
          { month: "M11", value: 2040 },
          { month: "M12", value: 2390, highlight: true },
        ],
        keywords: [
          { keyword: "best Italian restaurant Melbourne", before: 34, after: 1 },
          { keyword: "Italian restaurant Fitzroy", before: 41, after: 2 },
          { keyword: "romantic dinner Melbourne", before: 58, after: 5 },
          { keyword: "Italian near me", before: 47, after: 3 },
          { keyword: "private dining Melbourne", before: 63, after: 7 },
          { keyword: "Italian restaurant booking", before: 52, after: 4 },
        ],
        timeline: [
          { phase: "Month 1", duration: "Weeks 1-4", action: "Technical audit, keyword research, citation audit, and on-page optimisation" },
          { phase: "Month 2-3", duration: "Weeks 5-12", action: "Review strategy launched, content creation, and local schema implementation" },
          { phase: "Month 4-5", duration: "Weeks 13-20", action: "Page one rankings achieved, link building, and conversion optimisation" },
          { phase: "Month 6+", duration: "Ongoing", action: "Review growth, content expansion, and seasonal campaign support" },
        ],
        challenge: [
          "This boutique restaurant was competing in one of Melbourne's most crowded dining markets. Despite offering a genuinely excellent dining experience, they were being overshadowed online by larger restaurants with bigger marketing budgets and more established digital presences.",
          "Their website was not optimised for local search, and their review profile was inconsistent. Potential customers searching for restaurants in their category and location were finding competitors first, even when those competitors offered an inferior experience.",
          "The business was also heavily reliant on foot traffic and word-of-mouth, with no reliable organic channel driving online reservations. They needed a strategy that would work without ongoing ad spend.",
        ],
        whatWeDid: [
          {
            title: "Optimised for Local Search and Map Pack",
            body: "We strengthened their local search presence by building consistent citations, optimising on-page local signals, and implementing location-specific schema markup. The goal was to rank prominently whenever someone nearby searched for their cuisine type.",
          },
          {
            title: "Built a Systematic Review Strategy",
            body: "We developed a simple, repeatable process for generating authentic customer reviews. This included timing, messaging, and the right platforms to focus on. The result was a consistent flow of new reviews that improved both rankings and conversion rates.",
          },
          {
            title: "Created Content That Showcased Their Unique Offering",
            body: "We developed content that highlighted what made this restaurant different, the story behind the menu, the sourcing of ingredients, the dining experience. This content ranked for discovery searches and gave potential customers a reason to choose them over generic alternatives.",
          },
          {
            title: "Targeted High-Intent Dining Search Terms",
            body: "We identified the specific search terms Melbourne diners use when looking for restaurants in this category and location, and built the site's content architecture around those terms. This included both 'best [cuisine] Melbourne' searches and more specific occasion-based queries.",
          },
          {
            title: "Improved Website Conversion for Reservations",
            body: "Beyond rankings, we optimised the website itself to convert visitors into bookings. Clear reservation CTAs, a streamlined booking flow, and compelling photography all contributed to turning organic traffic into actual customers.",
          },
        ],
        resultsList: [
          "147% increase in bookings driven by organic search over the campaign period",
          "4.8-star average rating across 200+ reviews, improving both rankings and trust",
          "Page one rankings for key 'best [cuisine] restaurant Melbourne' search terms",
          "Significant reduction in reliance on paid advertising for customer acquisition",
          "Consistent organic traffic growth month-on-month from both local and content-driven searches",
        ],
        keyTakeaway: "In hospitality, the combination of strong local SEO signals and a genuine review strategy is extremely powerful. Customers searching for restaurants are in decision mode, and being visible with strong social proof at that moment is what converts searches into reservations.",
        prevSlug: "electrical-seo",
        prevLabel: "Electrical Contractor",
        nextSlug: "dental-seo",
        nextLabel: "Dental Practice",
      }}
    />
  );
}
