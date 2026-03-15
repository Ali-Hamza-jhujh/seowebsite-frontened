/* ==========================================================================
   CASE STUDIES PAGE — Khalis Marketing
   Design: Navy #04315b, Yellow #ffdb14, Off-white #F7F6F2
   Layout: Hero + intro + 6 case study cards grid + CTA
   All em dashes replaced with hyphens or commas per client request
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, MapPin, ShoppingCart, Stethoscope, Zap, Utensils } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const caseStudies = [
  {
    slug: "plumbing-seo",
    industry: "Plumbing",
    location: "South East Melbourne",
    icon: Zap,
    headline: "312% Increase in Organic Traffic",
    summary: "A local plumbing company struggling to rank against established competitors. We rebuilt their local SEO foundation and created service-area content that now generates consistent leads.",
    results: [
      { metric: "312%", label: "Organic Traffic Increase" },
      { metric: "45+", label: "Page 1 Keywords" },
      { metric: "3x", label: "More Enquiries/Month" },
    ],
    accent: "#04315b",
    featured: true,
  },
  {
    slug: "electrical-seo",
    industry: "Electrical",
    location: "Northern Melbourne",
    icon: Zap,
    headline: "From Invisible to Map Pack in 4 Months",
    summary: "An electrical contractor with a new website and zero Google visibility. We optimised their local search presence and built citations that put them in the map pack for high-intent keywords.",
    results: [
      { metric: "12", label: "Map Pack Keywords" },
      { metric: "187%", label: "Website Traffic Increase" },
      { metric: "28", label: "New Leads/Month" },
    ],
    accent: "#0a4a85",
    featured: true,
  },
  {
    slug: "restaurant-seo",
    industry: "Hospitality",
    location: "Melbourne CBD",
    icon: Utensils,
    headline: "147% More Bookings from Organic Search",
    summary: "A boutique Melbourne restaurant losing visibility to bigger competitors. We focused on local SEO, review strategy, and content that showcased their unique offerings, driving reservations without relying on paid ads.",
    results: [
      { metric: "147%", label: "Organic Bookings Increase" },
      { metric: "4.8", label: "Star Average (200+ Reviews)" },
      { metric: "#1", label: "Page 1 for Key Terms" },
    ],
    accent: "#c8a800",
    featured: true,
  },
  {
    slug: "dental-seo",
    industry: "Dental",
    location: "Western Melbourne",
    icon: Stethoscope,
    headline: "2x Patient Enquiries in 6 Months",
    summary: "A dental clinic relying entirely on word-of-mouth. We built a local SEO strategy targeting suburb-specific keywords and optimised their site for patient conversions, doubling their monthly enquiries.",
    results: [
      { metric: "2x", label: "New Patient Enquiries" },
      { metric: "34", label: "Page 1 Keywords" },
      { metric: "89%", label: "Increase in Local Visibility" },
    ],
    accent: "#04315b",
    featured: false,
  },
  {
    slug: "ecommerce-seo",
    industry: "Ecommerce",
    location: "Melbourne (Australia-wide)",
    icon: ShoppingCart,
    headline: "$127K in Organic Revenue (6 Months)",
    summary: "An online retailer spending heavily on ads but getting nothing from organic search. We restructured their site architecture, optimised product pages, and built quality backlinks, creating a sustainable revenue channel.",
    results: [
      { metric: "$127K", label: "Organic Revenue (6 months)" },
      { metric: "215%", label: "Organic Traffic Increase" },
      { metric: "40%", label: "Reduced Reliance on Paid Ads" },
    ],
    accent: "#0a4a85",
    featured: false,
  },
  {
    slug: "it-services-seo",
    industry: "IT Services",
    location: "Australia",
    icon: TrendingUp,
    headline: "Organic Authority Built in a Competitive B2B Market",
    summary: "An IT services company competing against larger, established providers. We built topical authority through content depth and technical SEO, creating a compounding organic asset that keeps delivering.",
    results: [
      { metric: "Top 5", label: "B2B Service Keywords" },
      { metric: "3x", label: "Organic Traffic Growth" },
      { metric: "Growing", label: "Inbound B2B Pipeline" },
    ],
    accent: "#04315b",
    featured: false,
  },
];

function CaseStudyCard({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  const Icon = cs.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link href={`/case-studies/${cs.slug}`}>
        <div className="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#04315b]/25 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: cs.accent }} />

          <div className="p-7 flex flex-col flex-1">
            {/* Industry + location */}
            <div className="flex items-center justify-between mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: `${cs.accent}10`, color: cs.accent, fontFamily: "'DM Sans', sans-serif" }}
              >
                <Icon size={11} />
                {cs.industry}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MapPin size={11} />
                {cs.location}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-xl font-extrabold text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#04315b] transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {cs.headline}
            </h2>

            {/* Summary */}
            <p className="text-sm text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {cs.summary}
            </p>

            {/* Results grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#F7F6F2] border border-gray-100 mt-auto">
              {cs.results.map((r) => (
                <div key={r.label} className="text-center">
                  <div
                    className="text-lg font-extrabold mb-0.5"
                    style={{ color: cs.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {r.metric}
                  </div>
                  <div className="text-[10px] text-gray-500 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Read more */}
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
              style={{ color: cs.accent, fontFamily: "'DM Sans', sans-serif" }}
            >
              Read Case Study <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <PageLayout
      title="SEO Case Studies Melbourne | Khalis Marketing"
      description="See real SEO results from Melbourne businesses. Traffic growth, more leads, higher revenue. Explore case studies from Khalis Marketing."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6 inline-flex items-center gap-1.5">
                <TrendingUp size={13} /> Proof of Work
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.06] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              SEO Results That{" "}
              <span style={{ color: '#04315b', textDecoration: 'underline', textDecorationColor: '#ffdb14', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
                Speak for Themselves
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Real strategies. Real businesses. Real growth. See how businesses have increased their organic traffic, leads, and revenue through transparent, results-driven SEO.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-gray-700 text-base leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every business is different, and so is every SEO strategy.
            </p>
            <p className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              These case studies show what is possible when you combine technical expertise, smart content strategy, and consistent execution. No vanity metrics. No inflated numbers. Just honest results from real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case study cards ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#04315b' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              Ready to Be the Next Success Story?
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every case study started with a conversation. Let's talk about your business, your goals, and how SEO can get you there.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/free-seo-audit"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-sm transition-all duration-200 hover:opacity-90"
                style={{ background: '#ffdb14', color: '#04315b', fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Your Free SEO Audit <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-sm border border-white/30 text-white transition-all duration-200 hover:bg-white/10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Call with Bhavleen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
