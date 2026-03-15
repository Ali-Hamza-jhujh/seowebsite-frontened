/* ==========================================================================
   FAQ SECTION, Clean Light Design System
   Animated accordion with emerald accents on white background
   ========================================================================== */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most Melbourne businesses start seeing measurable improvements in organic traffic and rankings within 3–6 months, depending on competition and your website's current state. We set realistic expectations upfront, no false promises.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. Khalis Marketing operates on a month-to-month basis. You stay because you're seeing results, not because you're stuck in a contract. We believe in earning your business every month.",
  },
  {
    q: "What's included in the free SEO audit?",
    a: "Our free audit covers technical SEO issues, on-page optimisation gaps, local SEO opportunities, competitor analysis, and a prioritised action plan. It's a genuine assessment, not a sales pitch disguised as an audit.",
  },
  {
    q: "Do I own my accounts and data?",
    a: "Absolutely. Your Google Analytics, Search Console, and any content we create — it's all yours. If you ever leave, everything stays with you.",
  },
  {
    q: "How is Khalis Marketing different from other SEO agencies?",
    a: "We're transparent about what we do and why. No jargon-filled reports. No mysterious \"proprietary methods.\" You get clear communication, honest timelines, and strategies that focus on leads and revenue, not just rankings.",
  },
  {
    q: "Which industries do you work with?",
    a: "We work with Melbourne businesses across trades, retail, hospitality, medical, finance, and professional services. Our strategies are tailored to your industry, audience, and goals.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label mb-6 inline-flex">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A' }}>
              Frequently Asked<br />Questions
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Everything you need to know about working with Khalis Marketing. Can't find your answer?
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-ghost inline-flex text-sm"
            >
              Ask Us Directly
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-base font-semibold text-gray-900 pr-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    open === i ? 'bg-[#04315b/6] text-[#04315b] border border-[#04315b/20]' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
