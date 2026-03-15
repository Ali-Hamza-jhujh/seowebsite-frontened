/* ==========================================================================
   CONTACT PAGE, Contact form and info for Khalis Marketing
   Light theme: warm off-white bg, charcoal text, emerald accents
   ========================================================================== */

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contactkhalismarketing@gmail.com",
    href: "mailto:contactkhalismarketing@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0433 929 754",
    href: "tel:0433929754",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, Australia",
    sub: "Serving businesses across Melbourne and Australia-wide",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday: 9am – 5pm AEST",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent! I'll get back to you within 24 hours.");
  };

  return (
    <PageLayout
      title="Contact | Khalis Marketing"
      description="Get in touch with Khalis Marketing. SEO services for Melbourne businesses. Email, phone, or send a message. I respond within 24 hours."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-[#F7F6F2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#04315b/6] opacity-60 blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6">Get in Touch</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Get in <span className="text-[#04315b]">Touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Have a question or ready to talk SEO? I'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Contact Information
              </motion.h2>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#04315b]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1A1A1A] font-semibold hover:text-[#04315b] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#1A1A1A] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.value}</p>
                      )}
                      {item.sub && <p className="text-gray-500 text-sm mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.sub}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Response time */}
              <motion.div variants={fadeUp} className="mt-8 p-5 rounded-xl bg-[#04315b/6] border border-[#04315b/12]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#04315b]" />
                  <p className="font-bold text-[#04315b] text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Fast Response Guaranteed</p>
                </div>
                <p className="text-[#04315b] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  I respond to all enquiries within 24 hours on business days.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <div className="glow-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#04315b/10] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-[#04315b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Message Sent!</h3>
                    <p className="text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Thanks for reaching out. I'll get back to you within 24 hours on business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      Send a Message
                    </h2>
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F6F2] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F6F2] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                            style={{ fontFamily: "DM Sans, sans-serif" }}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="04XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F6F2] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Message <span className="text-[#04315b]">*</span>
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell me about your business and what you're looking to achieve with SEO..."
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F6F2] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-sm resize-none"
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
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
