/* ==========================================================================
   CASE STUDY TEMPLATE — Khalis Marketing
   Hero matches standard off-white hero (same as ServicePageTemplate)
   All sections centre-aligned
   EEAT graphics: traffic chart, keyword rankings, timeline, expert author block
   Brand: Navy #04315b, Yellow #ffdb14, Off-white #F7F6F2
   No em dashes used anywhere in this file
   ========================================================================== */

import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, ArrowLeft, CheckCircle2, MapPin, Briefcase, Wrench,
  TrendingUp, Award, Clock, Shield
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useRef, useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

/* ── Traffic bar chart (SVG-based, fully contained) ── */
function TrafficChart({ data }: { data: { month: string; value: number; highlight?: boolean }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const max = Math.max(...data.map(d => d.value));

  // Fixed coordinate system:
  // Total SVG height = 200px
  // Top padding for peak label = 20px
  // Bar area = 140px (y: 20 to 160)
  // Label area = 20px (y: 160 to 180)
  // Bottom padding = 20px
  const SVG_H = 200;
  const TOP_PAD = 20;   // space for peak value label
  const BAR_TOP = TOP_PAD;
  const BAR_BOTTOM = 160; // bars end here
  const BAR_AREA = BAR_BOTTOM - BAR_TOP; // 140px available for bars
  const LABEL_Y = 178;  // month label y position
  const BAR_W = 28;
  const GAP = 8;
  const barCount = data.length;
  const SVG_W = barCount * (BAR_W + GAP);

  return (
    <div ref={ref} className="w-full" style={{ height: 200 }}>
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        width="100%"
        height={SVG_H}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: 'block' }}
      >
        {data.map((d, i) => {
          const barH = Math.max(4, (d.value / max) * BAR_AREA);
          const x = i * (BAR_W + GAP);
          const barY = BAR_BOTTOM - barH; // top of bar (grows upward from BAR_BOTTOM)
          const fill = d.highlight ? '#04315b' : 'rgba(4,49,91,0.18)';
          return (
            <g key={d.month}>
              {/* Bar: animates from BAR_BOTTOM upward */}
              <motion.rect
                x={x}
                width={BAR_W}
                rx={3}
                fill={fill}
                initial={{ y: BAR_BOTTOM, height: 0 }}
                animate={inView ? { y: barY, height: barH } : { y: BAR_BOTTOM, height: 0 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              />
              {/* Peak value label above bar */}
              {d.highlight && (
                <motion.text
                  x={x + BAR_W / 2}
                  y={barY - 4}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight="bold"
                  fill="#04315b"
                  fontFamily="DM Sans, sans-serif"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: i * 0.05 + 0.55 }}
                >
                  {d.value.toLocaleString()}
                </motion.text>
              )}
              {/* Month label below bar */}
              <text
                x={x + BAR_W / 2}
                y={LABEL_Y}
                textAnchor="middle"
                fontSize={8}
                fill="#9ca3af"
                fontFamily="DM Sans, sans-serif"
              >
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── Keyword ranking badge ── */
function RankBadge({ pos }: { pos: number }) {
  const color = pos <= 3 ? '#16a34a' : pos <= 10 ? '#04315b' : pos <= 20 ? '#d97706' : '#9ca3af';
  const bg = pos <= 3 ? '#dcfce7' : pos <= 10 ? 'rgba(4,49,91,0.1)' : pos <= 20 ? '#fef3c7' : '#f3f4f6';
  return (
    <span className="inline-flex items-center justify-center w-9 h-7 rounded-md text-xs font-bold"
      style={{ background: bg, color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      #{pos}
    </span>
  );
}

export interface CaseStudyData {
  meta: { title: string; description: string };
  industry: string;
  location: string;
  services: string[];
  headline: string;
  subheadline: string;
  results: { metric: string; label: string }[];
  challenge: string[];
  whatWeDid: { title: string; body: string }[];
  resultsList: string[];
  keyTakeaway: string;
  /* EEAT extras — all optional so existing pages still work */
  trafficData?: { month: string; value: number; highlight?: boolean }[];
  keywords?: { keyword: string; before: number; after: number }[];
  timeline?: { phase: string; duration: string; action: string }[];
  prevSlug?: string;
  prevLabel?: string;
  nextSlug?: string;
  nextLabel?: string;
}

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <PageLayout title={data.meta.title} description={data.meta.description}>

      {/* ── Hero — standard off-white ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,219,20,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#04315b] text-sm transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> All Case Studies
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6 inline-flex">Case Study</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(4,49,91,0.08)', color: '#04315b', fontFamily: "'DM Sans', sans-serif" }}>
                <Briefcase size={11} /> {data.industry}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gray-200 text-gray-500"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MapPin size={11} /> {data.location}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}>
              {data.headline.split(":")[0]}
              {data.headline.includes(":") && (
                <>:{" "}
                  <span style={{ color: '#04315b', textDecoration: 'underline', textDecorationColor: '#ffdb14', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
                    {data.headline.split(":").slice(1).join(":")}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {data.subheadline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {data.services.map((s) => {
                const serviceLinks: Record<string, string> = {
                  "Website Build": "/services/website-design",
                  "Technical SEO": "/services/technical-seo",
                  "Keyword Research": "/services/seo",
                  "On-Page SEO": "/services/on-page-seo",
                  "Local SEO": "/services/local-seo",
                  "Content Strategy": "/services/seo",
                  "Link Building": "/services/link-building",
                  "Citation Building": "/services/local-seo",
                  "Site Architecture": "/services/technical-seo",
                  "Product Page Optimisation": "/services/ecommerce-seo",
                  "Blogging": "/services/seo",
                };
                const href = serviceLinks[s] || "/services";
                return (
                  <Link key={s} href={href}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-[#04315b] hover:text-[#04315b] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Wrench size={10} /> {s}
                  </Link>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-row flex-wrap gap-4">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">Book a Call</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Animated Results at a Glance ── */}
      <section className="py-14 bg-white border-b border-gray-100" ref={statsRef}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-[#04315b]/50 mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Results at a Glance
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
              {data.results.map((r, i) => (
                <motion.div key={r.label} variants={fadeUp} custom={i}
                  className="p-6 rounded-xl border border-gray-100 bg-[#F7F6F2] text-center hover:border-[#04315b]/20 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-extrabold text-[#04315b] mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {r.metric}
                  </div>
                  <div className="text-xs text-gray-500 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {r.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Traffic Growth Chart (EEAT: shows real data visually) ── */}
      {data.trafficData && (
        <section className="py-16 bg-[#F7F6F2]">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="max-w-3xl mx-auto">
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="section-label mb-4 inline-flex">Traffic Growth</span>
                <h2 className="text-2xl font-extrabold text-[#1A1A1A] mt-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Organic Traffic Over Time
                </h2>
                <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Monthly organic sessions from Google Search Console
                </p>
              </motion.div>
              <motion.div variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[#04315b]" />
                      <span className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Peak month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm bg-[rgba(4,49,91,0.15)]" />
                      <span className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Other months</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                    <TrendingUp size={11} /> Growing
                  </span>
                </div>
                <TrafficChart data={data.trafficData} />
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Challenge ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="max-w-2xl mx-auto text-center">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-5 inline-flex">The Challenge</span>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="text-3xl font-extrabold text-[#1A1A1A] mb-6 mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.01em' }}>
              What Was Holding Them Back
            </motion.h2>
            {data.challenge.map((para, i) => (
              <motion.p key={i} variants={fadeUp}
                className="text-gray-600 leading-relaxed mb-4 text-base text-left"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Project Timeline (EEAT: shows structured process) ── */}
      {data.timeline && (
        <section className="py-16 bg-[#04315b] relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
          <div className="container relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                  style={{ background: 'rgba(255,219,20,0.15)', color: '#ffdb14', fontFamily: "'DM Sans', sans-serif" }}>
                  <Clock size={11} /> Project Timeline
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  How the Campaign Unfolded
                </h2>
              </motion.div>
              <div className="relative max-w-4xl mx-auto">
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {data.timeline.map((t, i) => (
                    <motion.div key={t.phase} variants={fadeUp} custom={i}
                      className="relative flex flex-col items-center text-center">
                      {/* Step circle */}
                      <div className="w-16 h-16 rounded-full border-2 border-[#ffdb14]/30 bg-[#ffdb14]/10 flex flex-col items-center justify-center mb-4 relative z-10">
                        <span className="text-[#ffdb14] font-extrabold text-lg leading-none"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {String(i + 1)}
                        </span>
                      </div>
                      <p className="text-[#ffdb14] text-[10px] font-bold uppercase tracking-widest mb-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {t.phase}
                      </p>
                      <p className="text-white/50 text-[10px] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {t.duration}
                      </p>
                      <p className="text-white/80 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {t.action}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── What We Did ── */}
      <section className="py-16 bg-[#F7F6F2]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="section-label mb-5 inline-flex">The Strategy</span>
              <h2 className="text-3xl font-extrabold text-[#1A1A1A] mt-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.01em' }}>
                What We Did
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {data.whatWeDid.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#04315b]/20 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#04315b] flex items-center justify-center mb-4">
                    <span className="text-[#ffdb14] font-extrabold text-xs"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Keyword Rankings Table (EEAT: concrete before/after evidence) ── */}
      {data.keywords && (
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="max-w-3xl mx-auto">
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="section-label mb-4 inline-flex">Keyword Rankings</span>
                <h2 className="text-2xl font-extrabold text-[#1A1A1A] mt-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Before vs. After Rankings
                </h2>
                <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Google Search Console data showing position changes for target keywords
                </p>
              </motion.div>
              <motion.div variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                {/* Table header */}
                <div className="grid grid-cols-3 bg-[#F7F6F2] px-5 py-3 border-b border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Keyword</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 text-center"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Before</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 text-center"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>After</span>
                </div>
                {data.keywords.map((kw, i) => (
                  <motion.div
                    key={kw.keyword}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="grid grid-cols-3 items-center px-5 py-3.5 border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-sm text-gray-700 font-medium pr-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {kw.keyword}
                    </span>
                    <div className="flex justify-center">
                      <RankBadge pos={kw.before} />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <RankBadge pos={kw.after} />
                      {kw.before > kw.after && (
                        <span className="text-[10px] font-bold text-green-600"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          +{kw.before - kw.after}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-center text-xs text-gray-400 mt-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Position 1-3 = top 3 results. Lower number = better ranking.
              </motion.p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Results ── */}
      <section className="py-16 bg-[#F7F6F2]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="max-w-2xl mx-auto text-center">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-5 inline-flex">The Outcome</span>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="text-3xl font-extrabold text-[#1A1A1A] mb-8 mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.01em' }}>
              The Results
            </motion.h2>
            <div className="space-y-3 text-left">
              {data.resultsList.map((r, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <CheckCircle2 size={18} className="text-[#04315b] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {r}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Takeaway ── */}
      <section className="py-14 bg-[#04315b] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#ffdb14] text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Key Takeaway
            </p>
            <p className="text-white text-xl leading-relaxed font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              "{data.keyTakeaway}"
            </p>
          </div>
        </div>
      </section>


      {/* ── Trust signals bar (EEAT: reinforces credibility before CTA) ── */}
      <section className="py-8 bg-[#F7F6F2] border-t border-gray-100 border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: "No Lock-in Contracts" },
              { icon: TrendingUp, text: "Transparent Monthly Reporting" },
              { icon: Award, text: "Proven Results Across Industries" },
              { icon: CheckCircle2, text: "Strategy Tailored to Your Business" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={14} className="text-[#04315b] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-600"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Want results like these for your business?
            </h2>
            <p className="text-gray-500 text-sm mb-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get a free SEO audit and find out exactly what it would take to grow your organic traffic and leads.
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-ghost">Book a Call</Link>
            </div>
          </div>

          {/* Prev / Next navigation */}
          {(data.prevSlug || data.nextSlug) && (
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100 max-w-4xl mx-auto">
              {data.prevSlug ? (
                <Link href={`/case-studies/${data.prevSlug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#04315b] transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <ArrowLeft size={14} /> {data.prevLabel}
                </Link>
              ) : <span />}
              {data.nextSlug ? (
                <Link href={`/case-studies/${data.nextSlug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#04315b] transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {data.nextLabel} <ArrowRight size={14} />
                </Link>
              ) : <span />}
            </div>
          )}
        </div>
      </section>

    </PageLayout>
  );
}
