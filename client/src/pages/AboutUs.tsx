/* ==========================================================================
   ABOUT US PAGE, Bhavleen Singh's story, credentials, and CTA
   Light theme: warm off-white bg, charcoal text, emerald accents
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, MapPin, GraduationCap, CheckCircle2, Briefcase, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const credentials = [
  { icon: GraduationCap, label: "Master of Marketing", sub: "Victoria University, Melbourne" },
  { icon: Award, label: "Technical SEO Certification", sub: "Moz, Industry Leading Standard" },
  { icon: Briefcase, label: "10 Years Experience", sub: "US & Australian Digital Marketing" },
  { icon: MapPin, label: "Melbourne Based", sub: "Serving businesses Australia-wide" },
];

const values = [
  {
    title: "Modern strategies, not recycled tactics",
    desc: "I stay current with algorithm updates, AI integration, and evolving search trends. Your SEO strategy is built for 2025 and beyond, not 2015.",
  },
  {
    title: "Transparency over promises",
    desc: "I'll tell you exactly what I'm doing and why. You'll understand your SEO, not just pay for it blindly.",
  },
  {
    title: "Results over rankings",
    desc: "Rankings mean nothing if they don't bring customers. I focus on traffic that converts: leads, enquiries, and revenue.",
  },
  {
    title: "Honesty over sales",
    desc: "If SEO isn't right for your business, I'll tell you. I only take on clients I'm confident I can help.",
  },
];

export default function AboutUs() {
  return (
    <PageLayout
      title="About Us | Khalis Marketing, Melbourne SEO Consultant"
      description="Meet Bhavleen Singh, founder of Khalis Marketing. A Melbourne-based SEO specialist with 10 years of experience helping businesses get found on Google."
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-[#F7F6F2] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#04315b/6] opacity-60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#04315b/6] opacity-40 blur-3xl" />
        </div>

        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label mb-6">About Khalis Marketing</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.08] mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Meet the SEO Consultant Behind{" "}
              <span className="text-[#04315b]">Khalis Marketing</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              No sales team. No account managers. Just Bhavleen, a Melbourne-based SEO specialist with 10 years of experience helping businesses get found on Google.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image placeholder + caption */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-gray-200 border border-gray-100">
                  <img
                    src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663403813396/nOGqtxSlDeZxWNbB.jpg?Expires=1804319325&Signature=iYDSqr56SxUBhMIOxrcKbE-BWl-9aXvh5UeDb-E-BPakkokR9k4rg8QnuU8BANqBb12O-JCPPiPKzb6MXfHo0hvU9I9Vs2SLaQsYdPd~vL-G1tdO8cvQR8CjW5HGmRZeWaGtv-LiXiR4kLpRE5RVhuZMQzEFmOAKfVWHHoQg2PSxUuU-l6i-1JkybuxIObxRSK4Zqn~M8VC4yXloeDU586qVRMg5VO5txg833Fz8xuZue~Tq16p7ZIq6KTe5yOLYQ0gih9wPqCC1LLQPYNn84P3o8tXJkO54VjBTrxN0psZbpbsIK029yBvevNYKEFxC1zP7wCB4tth520oIcebBIw__&Key-Pair-Id=K2HSFNDJXOU9YS"
                    alt="Bhavleen Singh, Founder, Khalis Marketing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <MapPin size={13} className="text-[#04315b]" />
                    Bhavleen Singh, Founder, Khalis Marketing
                  </p>
                </div>

                {/* Floating credential badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#04315b] flex items-center justify-center">
                      <Award size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>Certified</p>
                      <p className="text-sm font-bold text-[#1A1A1A]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Moz Technical SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                I'm Bhavleen Singh, Founder of Khalis Marketing
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <p>
                  I started Khalis Marketing because the SEO industry has a trust problem.
                </p>
                <p>
                  After a decade working in digital marketing for agencies in the US and here in Melbourne, I've seen how this industry operates from the inside. Agencies are charging thousands while delivering recycled strategies from 2015. Clients are locked into 12-month contracts with nothing to show for it: big promises, zero accountability.
                </p>
                <p>
                  I've sat in meetings where the work being sold wasn't the work being done. I've watched businesses get burned by "experts" who disappeared after the contract was signed.
                </p>
                <p className="font-semibold text-[#1A1A1A]">That's not how I want to work.</p>
                <p>
                  <span className="text-[#04315b] font-semibold">Khalis</span> means "pure" in Arabic, genuine, honest, unadulterated. I chose this name because it reflects exactly what I want this agency to be: straightforward SEO that delivers real results, with no runaround.
                </p>
                <p>
                  When you work with Khalis Marketing, you work directly with me. I do the strategy. I do the implementation. I answer your calls. There's no junior getting handed your account after the sale. No middlemen. No excuses.
                </p>
                <p className="font-semibold text-[#1A1A1A]">
                  And if I don't believe I can deliver results for your business, I won't sign you up. Simple as that.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <span className="section-label mb-4">Experience & Credentials</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                10 Years of SEO Experience Across Multiple Industries
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeUp} className="space-y-5 text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <p>
                  My journey into digital marketing started as a freelance content writer. In 2020, I pivoted to SEO when I recognised the industry was shifting, and I wanted to be ahead of the curve, not chasing it.
                </p>
                <p>
                  I got my start at a US-based digital marketing agency, where I cut my teeth on competitive niches: retail, hospitality, medical, finance, and trade services. I've taken websites from zero visibility to page one rankings. I've built SEO strategies that increased organic traffic by over 100%, in some cases, far more.
                </p>
                <p>
                  In 2023, I moved to Melbourne to pursue a <strong>Master of Marketing at Victoria University</strong>, combining hands-on experience with formal education in consumer behaviour, digital strategy, and marketing analytics.
                </p>
                <p>
                  I also hold a <strong>Technical SEO Certification from Moz</strong>, one of the most respected names in the SEO industry.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred) => (
                  <div key={cred.label} className="glow-card p-5">
                    <div className="w-10 h-10 rounded-lg bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center mb-3">
                      <cred.icon size={20} className="text-[#04315b]" />
                    </div>
                    <p className="font-bold text-[#1A1A1A] text-sm leading-snug mb-1" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{cred.label}</p>
                    <p className="text-gray-500 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>{cred.sub}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Different ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <span className="section-label mb-4">My Approach</span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mt-4 max-w-xl" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Why I Do Things Differently
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                I've worked for agencies that were still using SEO tactics from ten years ago. The SEO landscape has changed, especially with the rise of AI and Google's increasingly sophisticated algorithms. At Khalis Marketing, I take a different approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  custom={i}
                  className="glow-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-[#04315b]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{v.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>{v.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Beyond SEO ── */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="section-label mb-4">
                  <Heart size={12} className="text-[#04315b]" />
                  Beyond SEO
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-[#1A1A1A] mt-4 mb-6" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                The Person Behind the Strategy
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <p>
                  When I'm not optimising websites or analysing search data, you'll find me gaming, spending time with family, or planning the next getaway.
                </p>
                <p>
                  The most beautiful place I've discovered in Australia? <strong className="text-[#1A1A1A]">Bright, Victoria</strong>, if you haven't been, put it on your list.
                </p>
                <p>
                  I chose Melbourne because it's a city that rewards hard work and genuine connection. That's exactly how I approach my clients: authentic relationships, real results, and no agency nonsense.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#04315b] opacity-[0.07] rounded-full blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#04315b]/30 bg-[#04315b]/10 text-[#ffdb14] text-xs font-bold uppercase tracking-widest mb-6">
                Let's Talk
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Let's Talk About Your SEO Goals
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              No pressure. No confusing jargon. Just a straight conversation about where your business is, where you want it to be, and whether I can help you get there.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/free-seo-audit" className="btn-navy">
                Get Your Free SEO Audit
                <ArrowRight size={16} />
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
