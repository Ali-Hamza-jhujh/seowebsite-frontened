/* ==========================================================================
   SERVICES SECTION, Bento grid with proper routing links to service pages
   Design: Navy #04315b, Yellow #ffdb14, Off-white background
   ========================================================================== */

import { motion } from "framer-motion";
import { MapPin, Code2, FileText, Link2, Search, Globe, ShoppingCart, Bot, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    href: "/services/local-seo",
    desc: "Get found by customers in your area. We build local citations, strengthen your local search presence, and help you rank in the map pack.",
    badge: "Most Popular",
    large: true,
    accent: "#04315b",
  },
  {
    icon: Code2,
    title: "Technical SEO",
    href: "/services/technical-seo",
    desc: "Site speed, mobile performance, crawlability, indexing issues, we fix the backend problems holding your rankings back.",
    large: false,
    accent: "#0a4a85",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    href: "/services/on-page-seo",
    desc: "Strategic keyword placement, meta optimisation, and content structure that tells Google exactly what your pages are about.",
    large: false,
    accent: "#04315b",
  },
  {
    icon: Link2,
    title: "Link Building",
    href: "/services/link-building",
    desc: "High-quality, white-hat backlinks from Australian and industry-relevant websites that build your domain authority over time.",
    large: false,
    accent: "#04315b",
  },
  {
    icon: Search,
    title: "SEO Audit",
    href: "/services/seo-audit",
    desc: "A comprehensive review of your website's technical health, content quality, backlink profile, and competitive landscape.",
    large: false,
    accent: "#c8a800",
  },
  {
    icon: Bot,
    title: "AEO / LLM SEO",
    href: "/services/aeo-llm-seo",
    desc: "Get your business cited in ChatGPT, Gemini, and AI Overviews. The next frontier of search, we'll get you there first.",
    large: false,
    accent: "#0a4a85",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    href: "/services/ecommerce-seo",
    desc: "Drive organic sales for your online store. Product page optimisation, category SEO, and schema markup that converts.",
    large: false,
    accent: "#04315b",
  },
  {
    icon: Globe,
    title: "Website Design",
    href: "/services/website-design",
    desc: "SEO-optimised websites built to convert, fast, mobile-first, and designed to rank from day one.",
    large: false,
    accent: "#0a4a85",
  },
];

/* ── Animated mini SERP graphic for the large Local SEO card ── */
function LocalSEOGraphic() {
  const results = [
    { pos: 1, name: "Your Business", highlight: true },
    { pos: 2, name: "Competitor A" },
    { pos: 3, name: "Competitor B" },
  ];
  return (
    <div className="relative h-44 overflow-hidden rounded-t-2xl" style={{ background: 'linear-gradient(135deg, #04315b 0%, #0a4a85 100%)' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Map pack mockup */}
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-3 space-y-1.5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-[#ffdb14] flex items-center justify-center">
              <MapPin size={10} className="text-[#04315b]" />
            </div>
            <span className="text-white text-[10px] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Google Map Pack</span>
          </div>
          {results.map((r, i) => (
            <motion.div
              key={r.pos}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg ${r.highlight ? 'bg-[#ffdb14]' : 'bg-white/10'}`}
            >
              <span
                className={`text-[10px] font-extrabold w-4 text-center ${r.highlight ? 'text-[#04315b]' : 'text-white/60'}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >#{r.pos}</span>
              <span
                className={`text-[11px] font-medium ${r.highlight ? 'text-[#04315b]' : 'text-white/80'}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >{r.name}</span>
              {r.highlight && <span className="ml-auto text-[9px] font-bold text-[#04315b] bg-white/60 px-1.5 py-0.5 rounded-full">YOU</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const smallServices = services.filter(s => !s.large);
  const largeService = services.find(s => s.large)!;

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F7F6F2' }}>
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label mb-5 inline-flex">Our Services</span>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}
            >
              SEO Services That Drive<br />
              <span style={{ color: '#04315b' }}>Real Results</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From local search domination to technical fixes and content that ranks, complete SEO services tailored to Melbourne businesses.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Large card, Local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href={largeService.href} className="block glow-card overflow-hidden group hover:border-[#04315b]/30 transition-all duration-300 h-full">
              <LocalSEOGraphic />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#04315b]/8 border border-[#04315b]/12">
                    <MapPin size={20} className="text-[#04315b]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Local SEO</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ffdb14] text-[#04315b]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Most Popular</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Get found by customers in your area. We build local citations, strengthen your local search presence, and help you rank in the map pack for searches that matter.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#04315b] group-hover:gap-3 transition-all" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Learn more <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Small cards */}
          {smallServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * (i + 1) }}
              >
                <Link href={service.href} className="block glow-card p-6 group hover:border-[#04315b]/25 transition-all duration-300 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border"
                    style={{ background: `${service.accent}10`, borderColor: `${service.accent}20`, color: service.accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.desc}</p>
                  <div
                    className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color: service.accent, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn more <ArrowRight size={15} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/services" className="btn-ghost inline-flex">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
