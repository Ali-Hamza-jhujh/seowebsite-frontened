/* ==========================================================================
   ABOUT SECTION, Clean Light Design System
   Split layout: coded SEO analytics graphic + trust pillars
   Brand: Navy #04315b, Yellow #ffdb14
   ========================================================================== */

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, MapPin, Star, Phone, Globe, Navigation, ChevronRight } from "lucide-react";
import { Link } from "wouter";

/* ── Map Pack listing data ── */
const mapPackResults = [
  {
    rank: 1,
     name: "Werribee Plumbing Co.",
    category: "Plumber · Werribee",
    rating: 4.9,
    reviews: 87,
    status: "Open",
    highlight: true,
  },
  {
    rank: 2,
    name: "Melbourne Pipe Masters",
    category: "Plumber · Werribee",
    rating: 4.6,
    reviews: 43,
    status: "Open",
    highlight: false,
  },
  {
    rank: 3,
    name: "Rapid Flow Plumbing",
    category: "Plumber · Hoppers Crossing",
    rating: 4.4,
    reviews: 29,
    status: "Closed",
    highlight: false,
  },
];

const pillars = [
  { title: "Month-to-Month", desc: "Stay because it's working, not because you're trapped." },
  { title: "You Own Everything", desc: "Your accounts, data, and content, always yours." },
  { title: "Direct Communication", desc: "Talk to the person doing the work, not account managers." },
  { title: "No Hidden Fees", desc: "Transparent pricing with no surprises on your invoice." },
];

/* ── Google Map Pack Mockup Graphic ── */
function MapPackGraphic() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}
    >
      {/* Google search bar */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-2 shadow-sm">
          {/* Google coloured dots */}
          <div className="flex gap-0.5 flex-shrink-0">
            <div className="w-2 h-2 rounded-full" style={{ background: '#4285F4' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#EA4335' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#FBBC05' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#34A853' }} />
          </div>
          <span className="text-[11px] text-gray-500 flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>plumber near me melbourne</span>
          <Navigation size={11} className="text-[#4285F4] flex-shrink-0" />
        </div>
      </div>

      {/* Map area */}
      <div className="relative h-28 overflow-hidden flex-shrink-0" style={{ background: '#e8f0e8' }}>
        {/* Stylised map grid */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.5 }}>
          {/* Road grid */}
          <line x1="0" y1="35" x2="100%" y2="35" stroke="#fff" strokeWidth="6" />
          <line x1="0" y1="75" x2="100%" y2="75" stroke="#fff" strokeWidth="4" />
          <line x1="80" y1="0" x2="80" y2="100%" stroke="#fff" strokeWidth="6" />
          <line x1="200" y1="0" x2="200" y2="100%" stroke="#fff" strokeWidth="4" />
          <line x1="320" y1="0" x2="320" y2="100%" stroke="#fff" strokeWidth="4" />
          {/* Park block */}
          <rect x="90" y="42" width="100" height="28" rx="3" fill="#c8dfc8" />
          {/* Building blocks */}
          <rect x="210" y="42" width="40" height="28" rx="2" fill="#d0d8e0" />
          <rect x="258" y="48" width="30" height="22" rx="2" fill="#d0d8e0" />
          <rect x="330" y="42" width="50" height="28" rx="2" fill="#d0d8e0" />
        </svg>
        {/* Map pins */}
        {[
          { x: '28%', y: '30%', rank: 1, highlight: true },
          { x: '55%', y: '55%', rank: 2, highlight: false },
          { x: '75%', y: '35%', rank: 3, highlight: false },
        ].map(({ x, y, rank, highlight }) => (
          <motion.div
            key={rank}
            initial={{ opacity: 0, scale: 0, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + rank * 0.15, type: 'spring', stiffness: 300 }}
            className="absolute flex flex-col items-center"
            style={{ left: x, top: y, transform: 'translate(-50%, -100%)' }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-md"
              style={{
                background: highlight ? '#04315b' : '#fff',
                color: highlight ? '#ffdb14' : '#04315b',
                border: highlight ? 'none' : '2px solid #04315b',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {rank}
            </div>
            <div className="w-0 h-0" style={{ borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `6px solid ${highlight ? '#04315b' : '#04315b'}` }} />
          </motion.div>
        ))}
      </div>

      {/* Local pack results */}
      <div className="flex-1 overflow-hidden">
        {mapPackResults.map((biz, i) => (
          <motion.div
            key={biz.rank}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.12 }}
            className={`flex items-start gap-3 px-4 py-3 ${
              i < mapPackResults.length - 1 ? 'border-b border-gray-100' : ''
            } ${biz.highlight ? 'bg-[#04315b06]' : ''}`}
          >
            {/* Rank badge */}
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold flex-shrink-0 mt-0.5"
              style={{
                background: biz.highlight ? '#04315b' : '#f1f5f9',
                color: biz.highlight ? '#ffdb14' : '#64748b',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {biz.rank}
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className="text-[12px] font-bold leading-tight"
                  style={{ color: biz.highlight ? '#04315b' : '#1e293b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {biz.name}
                </span>
                {biz.highlight && (
                  <span
                    className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                    style={{ background: '#ffdb14', color: '#04315b', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    #1
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={9}
                      className={si < Math.floor(biz.rating) ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-[10px] text-gray-500 ml-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {biz.rating} ({biz.reviews})
                  </span>
                </div>
                <span
                  className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                    biz.status === 'Open' ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400 bg-gray-100'
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {biz.status}
                </span>
              </div>
              <div className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MapPin size={8} />{biz.category}
              </div>
            </div>
            {/* Action icons */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <Phone size={10} className="text-[#4285F4]" />
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <Globe size={10} className="text-[#34A853]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Google · Local Pack Results</span>
        <div className="flex items-center gap-1 text-[10px] text-[#4285F4]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          More places <ChevronRight size={10} />
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F7F6F2' }}>
      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #04315b0d 0%, transparent 70%)" }} />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Map Pack Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] shadow-xl shadow-gray-200 rounded-2xl overflow-hidden">
              <MapPackGraphic />
            </div>

            {/* Floating client results card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 p-5 w-52"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Client Result</span>
              </div>
              <div className="text-3xl font-bold mb-0.5" style={{ color: '#04315b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>+312%</div>
              <div className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>Organic traffic growth for a plumbing client</div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-[#04315b] rounded-2xl shadow-lg shadow-[#04315b30] p-4 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#ffdb14' }}>
                <Award size={16} className="text-[#04315b]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>10+ Years</div>
                <div className="text-xs text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>in SEO</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-6 inline-flex">About Khalis</span>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}>
              An SEO Agency You Can Actually Trust
            </h2>

            <div className="space-y-4 text-gray-600 mb-8" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.75' }}>
              <p>
                <span className="text-[#04315b] font-semibold">Khalis</span> means "pure" in Arabic, and that's exactly how we approach search engine optimisation. No hidden fees. No confusing jargon. No dodgy tactics that put your website at risk.
              </p>
              <p>
                After a decade in digital marketing, working with businesses across retail, hospitality, medical, finance, and trades, we've seen how the SEO industry operates. Agencies that lock clients into 12-month contracts. Vague reports that say nothing. Promises of "#1 rankings" that never materialise.
              </p>
              <p className="font-semibold text-gray-800">
                We started Khalis Marketing to do things differently.
              </p>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white border border-gray-100 hover:border-[#04315b]/20 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 size={16} className="text-[#04315b] mb-2" />
                  <div className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{pillar.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pillar.desc}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-navy inline-flex">
              Meet Bhavleen
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
