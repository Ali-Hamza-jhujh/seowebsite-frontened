/* ==========================================================================
   CASE STUDIES SECTION — Homepage
   Features 3 real case studies with links to individual pages
   Brand: Navy #04315b, Yellow #ffdb14, Off-white #F7F6F2
   ========================================================================== */

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Stethoscope } from "lucide-react";
import { Link } from "wouter";

const cases = [
  {
    slug: "plumbing-seo",
    icon: Zap,
    industry: "Plumbing",
    location: "South East Melbourne",
    headline: "312% Increase in Organic Traffic",
    challenge: "A local plumbing company with no online presence, losing customers to competitors every day.",
    solution: "New website, local SEO foundation, suburb-specific service pages, and citation building.",
    results: [
      { metric: "312%", label: "Organic Traffic" },
      { metric: "45+", label: "Page 1 Keywords" },
      { metric: "3x", label: "Monthly Enquiries" },
    ],
  },
  {
    slug: "dental-seo",
    icon: Stethoscope,
    industry: "Dental",
    location: "Western Melbourne",
    headline: "2x Patient Enquiries in 6 Months",
    challenge: "A dental clinic relying entirely on word-of-mouth with an outdated, unoptimised website.",
    solution: "New website, suburb-specific keyword strategy, local citations, and patient-focused content.",
    results: [
      { metric: "2x", label: "Patient Enquiries" },
      { metric: "34", label: "Page 1 Keywords" },
      { metric: "89%", label: "Local Visibility Increase" },
    ],
  },
  {
    slug: "ecommerce-seo",
    icon: TrendingUp,
    industry: "Ecommerce",
    location: "Melbourne (Australia-wide)",
    headline: "$127K in Organic Revenue in 6 Months",
    challenge: "An online retailer spending heavily on ads with zero organic search revenue.",
    solution: "Site architecture restructure, technical SEO fixes, product page optimisation, and link building.",
    results: [
      { metric: "$127K", label: "Organic Revenue" },
      { metric: "215%", label: "Organic Traffic" },
      { metric: "40%", label: "Less Paid Ad Reliance" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F7F6F2' }}>
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label mb-4 inline-flex">Proof of Work</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              SEO Results That{" "}
              <span style={{ color: '#04315b', textDecoration: 'underline', textDecorationColor: '#ffdb14', textDecorationThickness: '3px', textUnderlineOffset: '5px' }}>
                Speak for Themselves
              </span>
            </h2>
            <div className="flex flex-col gap-3 items-start lg:items-end">
              <p className="text-gray-500 max-w-xs text-sm text-right" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Real strategies. Real businesses. No vanity metrics.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04315b] hover:gap-2.5 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Read More Client Wins <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              >
                <Link href={`/case-studies/${c.slug}`}>
                  <div className="glow-card p-7 group h-full flex flex-col cursor-pointer hover:border-[#04315b]/25 hover:shadow-xl transition-all duration-300">

                    {/* Top: industry + icon */}
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(4,49,91,0.07)', color: '#04315b', fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {c.industry}
                        </span>
                        <p className="text-xs text-gray-400 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {c.location}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#04315b] flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-[#ffdb14]" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3
                      className="text-lg font-extrabold text-[#1A1A1A] mb-3 group-hover:text-[#04315b] transition-colors duration-200"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {c.headline}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-3">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>Challenge</div>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {c.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-5">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>Solution</div>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {c.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 p-4 rounded-xl bg-[#F7F6F2] border border-gray-100 mb-5 mt-auto">
                      {c.results.map((r) => (
                        <div key={r.label} className="text-center">
                          <div
                            className="text-lg font-extrabold text-[#04315b] mb-0.5"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#04315b] group-hover:gap-3 transition-all duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Read Full Case Study <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ background: '#04315b', color: '#ffdb14', fontFamily: "'DM Sans', sans-serif" }}
          >
            View More Client Wins <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
