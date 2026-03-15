/* ==========================================================================
   SERVICES PAGE, All SEO services with bento grid layout
   Light theme: warm off-white bg, charcoal text, emerald accents
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Search, MapPin, Settings, FileText, Link2, ClipboardList, Globe, ShoppingBag, ShoppingCart, Cpu, Bot, Monitor } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const coreServices = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    desc: "Comprehensive SEO strategies that improve your visibility across Google search. From keyword research and content optimisation to technical improvements and link building, everything works together to move your site up the rankings and bring in qualified traffic.",
    href: "/services/seo",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Get found by customers in your area. I build local citations, strengthen your local search presence, and target location-based keywords so you show up in the map pack and local search results. Essential for trades, hospitality, medical, and service-based businesses.",
    href: "/services/local-seo",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: "Your website might look great, but if Google can't crawl it properly, you won't rank. I fix site speed issues, mobile usability problems, crawl errors, indexing issues, and core web vitals. A strong technical foundation is where sustainable rankings start.",
    href: "/services/technical-seo",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: "Strategic optimisation of your website's content, meta tags, headings, internal links, and keyword placement. I make sure every page communicates clearly to both users and search engines, so Google knows exactly what you offer and who you serve.",
    href: "/services/on-page-seo",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "Quality backlinks remain one of the strongest ranking signals. I build links through genuine outreach to relevant Australian websites, no spammy directories, no private blog networks, no shortcuts that put your site at risk. Just legitimate authority-building.",
    href: "/services/link-building",
  },
  {
    icon: ClipboardList,
    title: "SEO Audit",
    desc: "A complete health check for your website's search performance. I analyse technical issues, on-page gaps, backlink profile, competitor positioning, and content opportunities, then deliver a prioritised action plan you can actually use.",
    href: "/services/seo-audit",
  },
];

const platformServices = [
  {
    icon: Globe,
    title: "WordPress SEO",
    desc: "WordPress powers over 40% of the web, but out-of-the-box, it's not fully optimised for search. I configure your WordPress site for speed, clean URLs, proper indexing, schema markup, and plugin optimisation to maximise your organic visibility.",
    href: "/services/wordpress-seo",
  },
  {
    icon: ShoppingBag,
    title: "Shopify SEO",
    desc: "Shopify is built for selling, but it has SEO limitations. I work around them, optimising collection pages, product descriptions, site structure, and technical elements so your store ranks for the keywords your customers are searching.",
    href: "/services/shopify-seo",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    desc: "Drive organic traffic that converts into sales. I optimise product pages, category structures, site speed, and internal linking to help your online store compete against the big players and capture high-intent shoppers.",
    href: "/services/ecommerce-seo",
  },
  {
    icon: Cpu,
    title: "SaaS SEO",
    desc: "For software companies, SEO is a long-term growth channel. I build strategies focused on product-led content, comparison keywords, feature pages, and link building that positions your SaaS brand as an authority in your niche.",
    href: "/services/saas-seo",
  },
];

const emergingServices = [
  {
    icon: Bot,
    title: "LLM SEO (AI Search Optimisation)",
    desc: "Search is evolving. Tools like ChatGPT, Perplexity, and Google's AI Overviews are changing how people find information. I help your brand get cited and recommended by AI-powered search engines, so you're visible wherever your customers are looking.",
    href: "/services/llm-seo",
    badge: "New",
  },
];

const webServices = [
  {
    icon: Monitor,
    title: "Website Design",
    desc: "A website built for search from day one. I design fast, mobile-friendly, SEO-ready websites that look professional and convert visitors into customers. No templates that tank your rankings, just clean, strategic design that works.",
    href: "/services/website-design",
  },
];

function ServiceCard({ service, index }: { service: typeof coreServices[0] & { badge?: string }; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link href={service.href}>
        <div className="glow-card p-6 h-full group cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center group-hover:bg-[#04315b] group-hover:border-[#04315b] transition-all duration-300">
              <service.icon size={20} className="text-[#04315b] group-hover:text-white transition-colors duration-300" />
            </div>
            {service.badge && (
              <span className="text-xs font-bold bg-[#04315b] text-white px-2.5 py-1 rounded-full" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {service.badge}
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-2.5 group-hover:text-[#04315b] transition-colors duration-200" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
            {service.desc}
          </p>
          <div className="flex items-center gap-1.5 text-[#04315b] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Learn More <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <PageLayout
      title="SEO Services Melbourne | Khalis Marketing"
      description="Melbourne SEO services tailored to your business. Local SEO, technical SEO, link building, and more. No contracts, transparent strategies. Get your free audit."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full bg-[#04315b/6] opacity-70 blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6">SEO Services Melbourne</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              SEO Services Melbourne{" "}
              <span className="text-[#04315b]">Businesses Rely On</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              From local search dominance to technical fixes and AI-ready optimisation, tailored SEO strategies that drive traffic, leads, and revenue.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              No cookie-cutter packages. No outdated tactics. Every strategy is built around your business, your industry, and your goals. Month-to-month service, full transparency, and results you can actually measure.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4">Our Philosophy</span>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mt-4 mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              SEO That's Built for Results, Not Vanity Metrics
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Rankings mean nothing if they don't bring customers through the door. At Khalis Marketing, every SEO service is designed with one goal: growing your business. Whether you need to dominate local search, fix technical issues holding your site back, or future-proof your visibility for AI-driven search, I'll build a strategy that fits your needs and budget.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              No long-term contracts. No disappearing after the invoice. Just honest, effective SEO from a Melbourne consultant who does the work himself.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core SEO Services ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4">Foundation</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Core SEO Services</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreServices.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Platform-Specific ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4">Platform Specialists</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Platform-Specific SEO</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {platformServices.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Emerging SEO ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4">Future-Ready</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Emerging & Specialised SEO</h2>
              <p className="text-gray-600 mt-3 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Search is evolving beyond traditional Google rankings. Stay ahead with strategies built for the next generation of search.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
              {emergingServices.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Web Services ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4">Web Services</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Web Services</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
              {webServices.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
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
                Free Consultation
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Not Sure Which SEO Service You Need?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Let's figure it out together. Book a free consultation and I'll assess your current situation, identify the biggest opportunities, and recommend a strategy that makes sense for your business and budget. No obligations. No pressure. Just honest advice.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit <ArrowRight size={16} />
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
