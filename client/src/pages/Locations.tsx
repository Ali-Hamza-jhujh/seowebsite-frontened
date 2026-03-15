/* ==========================================================================
   LOCATIONS PAGE — Khalis Marketing
   Featured suburb cards + broad coverage grid
   Shows 4 dedicated pages + signals wide service area beyond those 4
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Users, Star, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const featuredLocations = [
  {
    name: "Werribee",
    slug: "werribee",
    desc: "Werribee's growing population means more customers searching locally. I help Werribee businesses dominate local search results and Google Maps.",
    industries: ["Tradies", "Retail", "Medical", "Hospitality"],
    badge: "Dedicated Page",
  },
  {
    name: "Hoppers Crossing",
    slug: "hoppers-crossing",
    desc: "One of Melbourne's busiest western suburbs. Stand out from competitors with SEO that puts your business in front of local customers actively searching.",
    industries: ["Retail", "Services", "Food & Beverage", "Healthcare"],
    badge: "Dedicated Page",
  },
  {
    name: "Tarneit",
    slug: "tarneit",
    desc: "One of Australia's fastest-growing suburbs. Get in front of new residents searching for local services before your competitors do.",
    industries: ["New Residents", "Services", "Childcare", "Retail"],
    badge: "Dedicated Page",
  },
  {
    name: "Melton",
    slug: "melton",
    desc: "A rapidly expanding area with increasing demand for local services. I help Melton businesses capture local search traffic and grow their customer base.",
    industries: ["Tradies", "Healthcare", "Education", "Retail"],
    badge: "Dedicated Page",
  },
];

// Additional suburbs served — no dedicated pages yet, shows breadth of coverage
const additionalSuburbs = [
  "Melbourne CBD", "South Yarra", "Richmond", "Fitzroy", "Collingwood",
  "St Kilda", "Prahran", "Hawthorn", "Camberwell", "Box Hill",
  "Footscray", "Sunshine", "Dandenong", "Frankston", "Ringwood",
  "Doncaster", "Essendon", "Coburg", "Brunswick", "Northcote",
  "Altona", "Laverton", "Point Cook", "Williams Landing", "Truganina",
  "Wyndham Vale", "Manor Lakes", "Rockbank", "Bacchus Marsh", "Caroline Springs",
];

const whyLocal = [
  {
    icon: MapPin,
    title: "Suburb-Specific Strategy",
    desc: "Every suburb has different search patterns, competition levels, and customer behaviour. I build strategies tailored to your specific area.",
  },
  {
    icon: TrendingUp,
    title: "Google Maps Dominance",
    desc: "The map pack captures the most clicks for local searches. I build local citations and strengthen your local signals to appear in the top 3 results.",
  },
  {
    icon: Users,
    title: "Local Citation Building",
    desc: "Consistent business listings across local directories signal trust to Google and improve your local search rankings.",
  },
  {
    icon: Star,
    title: "Review Management",
    desc: "More 5-star reviews mean higher rankings and more customers. I help you build a review strategy that works.",
  },
];

export default function Locations() {
  return (
    <PageLayout
      title="SEO Services Melbourne | Local SEO by Suburb | Khalis Marketing"
      description="Local SEO services across Melbourne and surrounding suburbs. Dedicated pages for Werribee, Hoppers Crossing, Tarneit, and Melton. Serving all Melbourne suburbs."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,219,20,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6 inline-flex items-center gap-1.5">
                <MapPin size={13} /> Service Areas
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Local SEO Wherever{" "}
              <span style={{ color: '#04315b', textDecoration: 'underline', textDecorationColor: '#ffdb14', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
                Your Business Is
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              I work with businesses across Melbourne and its suburbs. Below are the areas with dedicated location pages — but if your suburb isn't listed, I can still help.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Ask About Your Suburb
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Local SEO ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4 inline-flex">Why It Works</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Local SEO That Drives Real Customers
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyLocal.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i} className="glow-card p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(4,49,91,0.06)', border: '1px solid rgba(4,49,91,0.1)' }}>
                    <item.icon size={20} className="text-[#04315b]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Locations ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="section-label mb-4 inline-flex">Featured Areas</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
              <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Dedicated Location Pages
              </h2>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                These suburbs have their own dedicated SEO pages with suburb-specific strategies, local context, and tailored content.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredLocations.map((loc, i) => (
                <motion.div key={loc.name} variants={fadeUp} custom={i}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-[#04315b]/20 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#04315b] flex items-center justify-center flex-shrink-0">
                          <MapPin size={16} className="text-[#ffdb14]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{loc.name}</h3>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffdb14] text-[#04315b] px-2.5 py-1 rounded-full flex-shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {loc.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {loc.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {loc.industries.map((ind) => (
                        <span key={ind} className="text-xs bg-[#F7F6F2] text-gray-600 px-3 py-1 rounded-full border border-gray-200" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          {ind}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="inline-flex items-center gap-2 text-[#04315b] font-semibold text-sm group-hover:gap-3 transition-all"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      View {loc.name} SEO Page <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Broader Coverage ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
              <div>
                <span className="section-label mb-4 inline-flex">Beyond the Featured Areas</span>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  I Also Serve These Suburbs
                </h2>
              </div>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Don't see your suburb? Reach out — if your customers search locally, I can help you rank.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-10">
              {additionalSuburbs.map((suburb, i) => (
                <motion.span
                  key={suburb}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.025 }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-[#F7F6F2] text-gray-600 text-sm"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  <MapPin size={12} className="text-[#04315b] flex-shrink-0" />
                  {suburb}
                </motion.span>
              ))}
            </motion.div>

            {/* "Not listed" callout */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#04315b]/15 p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              style={{ background: 'rgba(4,49,91,0.03)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#04315b] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-[#ffdb14]" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    Your suburb isn't listed? I can still help.
                  </div>
                  <div className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Local SEO works anywhere customers search by location. Get in touch and I'll let you know what's possible for your area.
                  </div>
                </div>
              </div>
              <Link href="/contact" className="btn-navy text-sm flex-shrink-0">
                Get in Touch <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#04315b] opacity-[0.07] rounded-full blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#04315b]/30 bg-[#04315b]/10 text-[#ffdb14] text-xs font-bold uppercase tracking-widest mb-6">
                Free Local SEO Audit
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Ready to Rank in Your Local Area?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Find out how visible your business is in local search. Get a free audit and I'll show you exactly where you stand — and what it takes to outrank your local competitors.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free Local SEO Audit <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}>
                Book a Call with Bhavleen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
