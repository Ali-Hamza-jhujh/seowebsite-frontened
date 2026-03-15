/* ==========================================================================
   HOPPERS CROSSING SEO PAGE
   Content sourced from: Khalis Marketing — Hoppers Crossing Location Page Content
   Meta Title: SEO Hoppers Crossing | Local SEO | Khalis Marketing
   Meta Description: SEO services for Hoppers Crossing businesses. Rank higher in
   local search and Google Maps. Beat local competitors. Free SEO audit available.
   Brand: Navy #04315b, Yellow #ffdb14, Off-white #F7F6F2
   ========================================================================== */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const offerings = [
  {
    title: "Map Pack Positioning",
    desc: "When someone searches for local services, the map results get the most clicks. I strengthen your local citations and on-page signals to push you into those top 3 positions where the real leads come from.",
  },
  {
    title: "Suburb-Specific Targeting",
    desc: "Hoppers Crossing residents search differently than Werribee or Tarneit residents. I research the actual search terms used in your area and build content that matches local intent.",
  },
  {
    title: "Competitive Positioning",
    desc: "Your competitors are already showing up somewhere in search results. I analyse what's working for them and build a strategy to outrank them for the searches that matter most to your business.",
  },
];

const industries = [
  "Trades & construction — roofers, concreters, fencing contractors, renovation specialists",
  "Food & retail — takeaway shops, bakeries, specialty retail along Old Geelong Road",
  "Health & fitness — gyms, personal trainers, chiropractors, massage therapists",
  "Professional services — mortgage brokers, tax accountants, migration agents",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-gray-900 text-sm lg:text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q}</span>
        <ChevronDown size={18} className="flex-shrink-0 text-[#04315b] transition-transform duration-300" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "300px" : "0px" }}>
        <p className="pb-5 text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{a}</p>
      </div>
    </div>
  );
}

export default function HoppersCrossing() {
  return (
    <PageLayout
      title="SEO Hoppers Crossing | Local SEO | Khalis Marketing"
      description="SEO services for Hoppers Crossing businesses. Rank higher in local search and Google Maps. Beat local competitors. Free SEO audit available."
    >
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,219,20,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6 inline-flex items-center gap-1.5"><MapPin size={13} /> Hoppers Crossing, Melbourne</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              SEO Hoppers Crossing —{" "}
              <span style={{ color: '#04315b', textDecoration: 'underline', textDecorationColor: '#ffdb14', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>Stand Out in a Competitive Local Market</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get found when Hoppers Crossing residents search for businesses like yours. Local SEO that puts you ahead of the competition.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
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

      {/* ── INTRO ── */}
      <section className="py-20 lg:py-28" style={{ background: '#F7F6F2' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">About Hoppers Crossing</motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}>
                SEO Services for Hoppers Crossing Businesses
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>Hoppers Crossing is one of Melbourne's most established western suburbs. With the train station connecting commuters to the CBD, busy retail strips along Old Geelong Road and Heaths Road, and a dense residential population, it's prime territory for local businesses.</p>
                <p>But established also means competitive. Every plumber, café, and mechanic in the area is fighting for the same customers. When locals search "takeaway Hoppers Crossing" or "electrician near me," multiple businesses appear. The question is whether yours is one of them.</p>
                <p>I help Hoppers Crossing businesses cut through the noise with local SEO that targets the searches your customers actually make.</p>
              </motion.div>
            </motion.div>

            {/* Ranking mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100 p-6"
            >
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Google Search: "takeaway Hoppers Crossing"</div>
              <div className="space-y-3">
                {[
                  { pos: 1, name: "Your Business", highlight: true, reviews: "4.8 (112)" },
                  { pos: 2, name: "Competitor A", highlight: false, reviews: "4.1 (45)" },
                  { pos: 3, name: "Competitor B", highlight: false, reviews: "3.9 (28)" },
                ].map((r, i) => (
                  <motion.div key={r.pos} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${r.highlight ? 'bg-[#04315b] border-[#04315b]' : 'bg-gray-50 border-gray-100'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${r.highlight ? 'bg-[#ffdb14] text-[#04315b]' : 'bg-white text-gray-500 border border-gray-200'}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{r.pos}</div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold truncate ${r.highlight ? 'text-white' : 'text-gray-800'}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{r.name}</div>
                      <div className={`text-xs flex items-center gap-1 ${r.highlight ? 'text-white/70' : 'text-gray-400'}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <Star size={10} className={r.highlight ? 'text-[#ffdb14]' : 'text-yellow-400'} fill="currentColor" />{r.reviews}
                      </div>
                    </div>
                    {r.highlight && <span className="text-[10px] font-bold bg-[#ffdb14] text-[#04315b] px-2 py-0.5 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>YOU</span>}
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <TrendingUp size={14} className="text-emerald-500" />
                <span className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>This is where your business could be ranking</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">The Advantage</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}>
              The Hoppers Crossing Advantage
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p>Hoppers Crossing has something many newer suburbs lack: density and routine. Residents have established patterns — the morning coffee spot, the regular mechanic, the go-to takeaway. But when they need something new or their usual isn't available, they search.</p>
              <p>Those searches are your opportunity. "Best Thai Hoppers Crossing." "24 hour plumber western suburbs." "Physio near Hoppers Crossing station."</p>
              <p>The businesses winning these searches aren't necessarily the biggest — they're the ones who've invested in being visible when it matters. That's where local SEO makes the difference.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT I OFFER ── */}
      <section className="py-20 lg:py-28" style={{ background: '#F7F6F2' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">How I Help</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}>
              How I Help Hoppers Crossing Businesses Compete
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-5">
            {offerings.map((o, i) => (
              <motion.div key={o.title} variants={fadeUp} custom={i} className="glow-card p-7">
                <div className="w-10 h-10 rounded-xl bg-[#04315b] flex items-center justify-center mb-5">
                  <span className="text-[#ffdb14] font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>0{i + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{o.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{o.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label mb-5 inline-flex">Industries</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}>
              Hoppers Crossing Businesses I Work With
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              I focus on local businesses where Google visibility directly impacts revenue:
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-3">
              {industries.map((ind) => (
                <div key={ind} className="flex items-start gap-3 p-4 bg-[#F7F6F2] rounded-xl border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-[#04315b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#ffdb14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-gray-700 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ind}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="text-gray-500 text-sm mt-6 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              If your business relies on Hoppers Crossing customers finding you online, I can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #04315b 0%, #0a4a85 100%)' }}>
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
              <MapPin size={16} className="text-[#ffdb14]" />
              <span className="text-[#ffdb14] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Serving Hoppers Crossing</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Find Out Where You Stand in Hoppers Crossing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get a clear picture of your local search visibility. I'll show you which searches you're winning, which you're losing, and exactly what it takes to improve.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/free-seo-audit" className="btn-yellow text-base py-3.5 px-7">
                Get Your Free Hoppers Crossing SEO Audit <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-ghost text-base py-3.5 px-7" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>
                Book a Call with Bhavleen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
