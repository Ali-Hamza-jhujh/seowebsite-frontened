/* ==========================================================================
   FREE SEO AUDIT PAGE, Audit request form and what's included
   Light theme: warm off-white bg, charcoal text, emerald accents
   ========================================================================== */

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Send, Zap, Search, FileText, MapPin, Link2, Users, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

const auditAreas = [
  {
    icon: Zap,
    title: "Technical SEO",
    desc: "Site speed, mobile usability, crawl errors, and indexing issues",
    color: "bg-orange-50 border-orange-100 text-orange-600",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: "Title tags, meta descriptions, headings, and keyword targeting",
    color: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    icon: Search,
    title: "Content",
    desc: "Quality, gaps, and cannibalisation issues holding you back",
    color: "bg-purple-50 border-purple-100 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Local citations, map pack visibility, and local keyword rankings",
    color: "bg-[#04315b/6] border-[#04315b/12] text-[#04315b]",
  },
  {
    icon: Link2,
    title: "Backlinks",
    desc: "Link profile strength, toxic links, and opportunities",
    color: "bg-teal-50 border-teal-100 text-teal-600",
  },
  {
    icon: Users,
    title: "Competitors",
    desc: "Who's outranking you and why",
    color: "bg-rose-50 border-rose-100 text-rose-600",
  },
];

const benefits = [
  "Prioritised action plan with quick wins",
  "Clear next steps you can act on immediately",
  "No jargon, practical recommendations",
  "Whether you work with me or not",
  "100% free, no obligation",
];

export default function FreeSEOAudit() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.website) {
      toast.error("Please fill in your name, email, and website URL.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
    toast.success("Audit request received! I'll be in touch within 24 hours.");
  };

  return (
    <PageLayout
      title="Free SEO Audit Melbourne | Khalis Marketing"
      description="Free SEO audit for Melbourne businesses. Technical, content, local, and backlink analysis with a prioritised action plan. No obligation."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full bg-[#04315b/6] opacity-70 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-50 opacity-50 blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6">
                <CheckCircle2 size={12} className="text-[#04315b]" />
                100% Free, No Obligation
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Get Your{" "}
              <span className="text-[#04315b]">Free SEO Audit</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              A complete health check for your website's search performance, no cost, no obligation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  <CheckCircle2 size={14} className="text-[#04315b] flex-shrink-0" />
                  <span className="text-sm text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>{b}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="section-label mb-4">What You Get</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4 mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Your Free Audit Covers Six Critical Areas
              </h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                You'll receive a prioritised action plan with quick wins and clear next steps. No jargon, just practical recommendations you can act on, whether you work with me or not.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {auditAreas.map((area, i) => (
                <motion.div key={area.title} variants={fadeUp} custom={i} className="glow-card p-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${area.color}`}>
                    <area.icon size={20} />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{area.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Action plan callout */}
            <motion.div variants={fadeUp} className="bg-[#1A1A1A] rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ArrowRight size={18} className="text-[#ffdb14]" />
                <p className="text-[#ffdb14] font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>What You Receive</p>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                A Prioritised Action Plan
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Not a generic report. A specific, prioritised list of what's holding your site back, with clear recommendations on what to fix first for the fastest results.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="section-label mb-4">Request Your Audit</span>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Request Your Free Audit
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="glow-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#04315b/10] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-[#04315b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Audit Request Received!</h3>
                    <p className="text-gray-600 mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Thanks for requesting your free SEO audit. I'll review your website and get back to you within 24 hours on business days.
                    </p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Keep an eye on your inbox at <strong>{form.email}</strong>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Name <span className="text-[#04315b]">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Email <span className="text-[#04315b]">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="04XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Website URL <span className="text-[#04315b]">*</span>
                        </label>
                        <input
                          type="url"
                          value={form.website}
                          onChange={(e) => setForm({ ...form, website: e.target.value })}
                          placeholder="https://yourwebsite.com.au"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        What's your biggest challenge with getting found online?{" "}
                        <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                        placeholder="e.g. My competitors are outranking me, I'm not showing up in Google Maps, my traffic dropped after a Google update..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm resize-none"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-navy w-full justify-center"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Request My Free Audit <Send size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      No credit card required. I'll respond within 24 hours on business days.
                    </p>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
