/* ==========================================================================
   HERO SECTION, Khalis Marketing
   Design: Plus Jakarta Sans headings, DM Sans body
   Colors: Navy #04315b, Yellow #ffdb14, Off-white #F8F7F3
   Hero graphic: Fully coded SEO dashboard, SERP rankings + traffic chart
   ========================================================================== */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Shield, BarChart2 } from "lucide-react";
import { Link } from "wouter";

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const heroStats = [
  { icon: TrendingUp, value: 241, suffix: "%", label: "Avg. Traffic Increase" },
  { icon: Users, value: 50, suffix: "+", label: "Clients" },
  { icon: Shield, value: 10, suffix: "+", label: "Years in SEO" },
];

/* ── SEO Dashboard Graphic (fully coded, no external image) ── */
function SEODashboard() {
  const chartBars = [22, 28, 25, 34, 30, 42, 38, 52, 48, 62, 58, 78];
  const keywords = [
    { kw: "plumber Dandenong", pos: 1, change: "+6", vol: "480/mo" },
    { kw: "emergency plumber near me", pos: 2, change: "+9", vol: "1,200/mo" },
    { kw: "dental clinic Sunshine", pos: 1, change: "+4", vol: "320/mo" },
    { kw: "electrician Epping", pos: 2, change: "+5", vol: "390/mo" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px] mx-auto lg:mx-0"
    >
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-[#04315b]/10 border border-gray-100 overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 flex items-center gap-2">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span className="text-[11px] text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>google.com/search?q=SEO+Melbourne</span>
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Traffic chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Organic Traffic</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[#04315b]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>12,847</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp size={11} /> +247%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                <BarChart2 size={10} /> Growing
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-1 h-14 mb-1">
              {chartBars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.04, ease: "easeOut" }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    background:
                      i === chartBars.length - 1 ? '#04315b'
                      : i >= chartBars.length - 3 ? 'rgba(4,49,91,0.45)'
                      : 'rgba(4,49,91,0.12)',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <span className="text-[9px] text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Jan</span>
              <span className="text-[9px] text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Jun</span>
              <span className="text-[9px] text-[#04315b] font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Now</span>
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* Keyword rankings */}
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Keyword Rankings</p>
            <div className="space-y-1.5">
              {keywords.map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.9 + i * 0.08 }}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-extrabold flex-shrink-0"
                      style={{
                        background: k.pos === 1 ? '#ffdb14' : k.pos === 2 ? '#04315b' : '#e5e7eb',
                        color: k.pos === 1 ? '#04315b' : k.pos === 2 ? '#fff' : '#6b7280',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {k.pos}
                    </div>
                    <span className="text-[11px] text-gray-700 truncate font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{k.kw}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <span className="text-[9px] text-gray-400 hidden sm:block" style={{ fontFamily: "'DM Sans', sans-serif" }}>{k.vol}</span>
                    <span className="text-[10px] font-bold text-emerald-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>{k.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge, #1 Google */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 1.3 }}
        className="absolute -top-5 -right-5 bg-[#ffdb14] rounded-xl shadow-lg shadow-yellow-200 px-3.5 py-2.5 flex items-center gap-2"
      >
        <div className="w-7 h-7 bg-[#04315b] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>#1</span>
        </div>
        <div>
          <p className="text-[9px] text-[#04315b]/70 font-medium leading-none mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Client Result</p>
          <p className="text-[11px] text-[#04315b] font-extrabold leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Page 1 in 90 Days</p>
        </div>
      </motion.div>

      {/* Floating badge, traffic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 1.5 }}
        className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg shadow-gray-200 border border-gray-100 px-3.5 py-2.5 flex items-center gap-2"
      >
        <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <TrendingUp size={13} className="text-emerald-600" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>This month</p>
          <p className="text-[11px] text-emerald-600 font-extrabold leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>+312% Traffic</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(t);
  }, []);

  const c0 = useCountUp(241, 2000, started);
  const c1 = useCountUp(50, 1800, started);
  const c2 = useCountUp(10, 1600, started);
  const counts = [c0, c1, c2];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16" style={{ background: '#F8F7F3' }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05]" style={{ background: '#04315b' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.07]" style={{ background: '#ffdb14' }} />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 bg-[#04315b]/8 border border-[#04315b]/15 text-[#04315b] text-xs font-semibold px-4 py-2 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffdb14] animate-pulse" />
                Australia's SEO Specialist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-6xl xl:text-[64px] font-extrabold leading-[1.06] tracking-tight mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A1A' }}
            >
              The SEO{" "}
              <span style={{ color: '#04315b' }}>Specialist That</span>{" "}
              <span style={{
                color: '#04315b',
                textDecoration: 'underline',
                textDecorationColor: '#ffdb14',
                textDecorationThickness: '4px',
                textUnderlineOffset: '8px',
              }}>
                Actually Delivers
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg font-semibold text-gray-700 mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              SEO Without the Runaround.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-base text-gray-500 leading-relaxed mb-9 max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              No long-term contracts. No empty promises. Just transparent strategies that get your business found on Google. Khalis Marketing helps businesses grow organic traffic, generate quality leads, and outrank competitors.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link href="/free-seo-audit" className="btn-yellow text-base py-3.5 px-7">
                Get Your Free SEO Audit <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-ghost text-base py-3.5 px-7">
                Book a Call
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="flex flex-wrap gap-7"
            >
              {heroStats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#04315b]/8 border border-[#04315b]/12 flex items-center justify-center">
                      <Icon size={15} className="text-[#04315b]" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#04315b] leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {counts[i]}{s.suffix}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: SEO Dashboard ── */}
          <div className="flex justify-center lg:justify-end">
            <SEODashboard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
