/* ==========================================================================
   CTA SECTION, Clean Light Design System
   Light section with white form card, dark text, emerald accents
   ========================================================================== */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  "No lock-in contracts",
  "Free SEO audit included",
  "Transparent monthly reporting",
  "Direct access to your SEO specialist",
];

export default function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", website: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#F7F6F2' }}>
      {/* Subtle emerald glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.59 0.17 162.48 / 0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-6 inline-flex">Get Started</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A' }}>
              Ready to Grow Your Business<br />
              <span style={{ color: '#04315b' }}>with SEO That Works?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Get a free, no-obligation SEO audit and see exactly where your website stands. No sales pressure. No lock-in contracts. Just honest insights from a Melbourne SEO agency that does things differently.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#04315b] shrink-0" />
                  <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center">
                  <Phone size={16} className="text-[#04315b]" />
                </div>
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>+61 3 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center">
                  <Mail size={16} className="text-[#04315b]" />
                </div>
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>hello@khalismarketing.com.au</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center">
                  <MapPin size={16} className="text-[#04315b]" />
                </div>
                <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>Melbourne, Victoria, Australia</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#04315b/6] border border-[#04315b/20] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[#04315b]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Audit Request Received!</h3>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>We'll review your website and get back to you within 24 hours with your free SEO audit.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Get Your Free SEO Audit</h3>
                  <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>No obligation. No credit card. Just honest insights.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Your Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@business.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="04XX XXX XXX"
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Business Name</label>
                        <input
                          type="text"
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          placeholder="My Business Pty Ltd"
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Website URL</label>
                      <input
                        type="url"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        placeholder="https://yourbusiness.com.au"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Tell Us About Your Goals</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="What are your main SEO challenges? What keywords do you want to rank for?"
                        rows={3}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <button type="submit" className="btn-navy w-full justify-center text-base py-3.5">
                      Get My Free SEO Audit
                      <ArrowRight size={18} />
                    </button>
                    <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
