/* ==========================================================================
   SERVICE PAGE TEMPLATE, Reusable template for all service pages
   Light theme: warm off-white bg, charcoal text, emerald accents
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  meta: { title: string; description: string };
  graphic?: ReactNode;
  hero: {
    label: string;
    h1: string;
    h1Accent?: string;
    subheadline: string;
    supporting?: string;
    primaryCta?: string;
    primaryCtaHref?: string;
    secondaryCta?: string;
    secondaryCtaHref?: string;
  };
  intro?: {
    label?: string;
    heading: string;
    body: string | string[];
  };
  included?: {
    heading?: string;
    features: ServiceFeature[];
  };
  process?: {
    heading?: string;
    steps: ServiceProcess[];
  };
  faqs?: ServiceFAQ[];
  cta?: {
    heading: string;
    body: string;
    primary: string;
    primaryHref?: string;
    secondary?: string;
    secondaryHref?: string;
  };
}

function FAQItem({ faq }: { faq: ServiceFAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq-item cursor-pointer ${open ? "border-[#04315b/30]" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <h3 className="font-semibold text-[#1A1A1A] text-sm leading-snug" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          {faq.q}
        </h3>
        <ChevronDown
          size={18}
          className={`text-[#04315b] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ServicePageTemplate({
  meta,
  hero,
  graphic,
  intro,
  included,
  process,
  faqs,
  cta,
}: ServicePageProps) {
  return (
    <PageLayout title={meta.title} description={meta.description}>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,219,20,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container relative">
          <div className={`grid ${graphic ? 'lg:grid-cols-2 gap-12 lg:gap-16' : ''} items-center`}>
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp}>
                <span className="section-label mb-6">{hero.label}</span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {hero.h1}{" "}
                {hero.h1Accent && (
                  <span style={{
                    color: '#04315b',
                    textDecoration: 'underline',
                    textDecorationColor: '#ffdb14',
                    textDecorationThickness: '4px',
                    textUnderlineOffset: '6px',
                  }}>
                    {hero.h1Accent}
                  </span>
                )}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {hero.subheadline}
              </motion.p>
              {hero.supporting && (
                <motion.p variants={fadeUp} className="text-base text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {hero.supporting}
                </motion.p>
              )}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href={hero.primaryCtaHref || "/free-seo-audit"} className="btn-navy">
                  {hero.primaryCta || "Get Your Free SEO Audit"} <ArrowRight size={16} />
                </Link>
                <Link href={hero.secondaryCtaHref || "/contact"} className="btn-ghost">
                  {hero.secondaryCta || "Book a Call"}
                </Link>
              </motion.div>
            </motion.div>
            {/* Graphic */}
            {graphic && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                {graphic}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      {intro && (
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl">
              {intro.label && <span className="section-label mb-4">{intro.label}</span>}
              <h2 className="text-3xl font-bold text-[#1A1A1A] mt-4 mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {intro.heading}
              </h2>
              {Array.isArray(intro.body) ? (
                <div className="space-y-4">
                  {intro.body.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{intro.body}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── What's Included ── */}
      {included && (
        <section className="py-20 bg-[#F7F6F2]">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="section-label mb-4">What's Included</span>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {included.heading || "What's Included in This Service"}
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {included.features.map((f, i) => (
                  <motion.div key={f.title} variants={fadeUp} custom={i} className="glow-card p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center mb-4">
                      <f.icon size={20} className="text-[#04315b]" />
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Process ── */}
      {process && (
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10 text-center">
                <span className="section-label mb-4 inline-flex">How It Works</span>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {process.heading || "My Process"}
                </h2>
              </motion.div>
              <div className="space-y-4 max-w-3xl mx-auto">
                {process.steps.map((s, i) => (
                  <motion.div key={s.title} variants={fadeUp} custom={i} className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center">
                      <span className="text-[#ffdb14] font-bold text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.step}</span>
                    </div>
                    <div className="glow-card p-5 flex-1">
                      <h3 className="font-bold text-[#1A1A1A] mb-1.5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-[#F7F6F2]">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10 text-center">
                <span className="section-label mb-4 inline-flex">FAQs</span>
                <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Frequently Asked Questions
                </h2>
              </motion.div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <FAQItem faq={faq} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {cta && (
        <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#04315b] opacity-[0.07] rounded-full blur-3xl" />
          </div>
          <div className="container relative text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {cta.heading}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {cta.body}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
                <Link href={cta.primaryHref || "/free-seo-audit"} className="btn-navy">
                  {cta.primary} <ArrowRight size={16} />
                </Link>
                {cta.secondary && (
                  <Link href={cta.secondaryHref || "/contact"} className="btn-ghost" style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}>
                    {cta.secondary}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
