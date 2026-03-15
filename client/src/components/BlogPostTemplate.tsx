/* ==========================================================================
   BLOG POST TEMPLATE — Khalis Marketing
   Design: Minimal editorial — no hero image, pure typography-led layout
   - Off-white #F7F6F2 background throughout
   - Left-rail progress indicator on desktop
   - Narrow reading column (65ch) centred with generous whitespace
   - Yellow accent for pull quotes, navy for headings
   - Sticky author card on desktop right rail
   - Related posts strip at the bottom
   Brand: Navy #04315b, Yellow #ffdb14, Off-white #F7F6F2
   ========================================================================== */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Reading progress bar ── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-100">
      <motion.div
        className="h-full origin-left"
        style={{ background: "#ffdb14", scaleX: progress / 100 }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

export interface BlogSection {
  type: "h2" | "h3" | "p" | "quote" | "ul" | "ol" | "callout";
  content: string | string[];
}

export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  metaDescription: string;
  sections: BlogSection[];
  relatedPosts: RelatedPost[];
}

/* ── Render a single section ── */
function Section({ s }: { s: BlogSection }) {
  if (s.type === "h2") return (
    <h2 className="text-2xl font-extrabold mt-12 mb-4 leading-tight"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#04315b" }}>
      {s.content as string}
    </h2>
  );
  if (s.type === "h3") return (
    <h3 className="text-lg font-bold mt-8 mb-3"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a1a" }}>
      {s.content as string}
    </h3>
  );
  if (s.type === "p") return (
    <p className="text-[17px] leading-[1.85] text-gray-700 mb-5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {s.content as string}
    </p>
  );
  if (s.type === "quote") return (
    <blockquote className="my-10 pl-6 border-l-4 border-[#ffdb14]">
      <p className="text-xl font-semibold leading-relaxed text-[#04315b] italic"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        "{s.content as string}"
      </p>
    </blockquote>
  );
  if (s.type === "ul") return (
    <ul className="mb-5 space-y-2.5 pl-1">
      {(s.content as string[]).map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[17px] text-gray-700 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#ffdb14] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
  if (s.type === "ol") return (
    <ol className="mb-5 space-y-3 pl-1 counter-reset-none">
      {(s.content as string[]).map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[17px] text-gray-700 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#04315b] text-white text-[11px] font-bold flex items-center justify-center mt-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {i + 1}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
  if (s.type === "callout") return (
    <div className="my-8 p-6 rounded-xl border border-[#04315b]/15 bg-[#04315b]/[0.03]">
      <p className="text-[16px] font-medium text-[#04315b] leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {s.content as string}
      </p>
    </div>
  );
  return null;
}

export default function BlogPostTemplate({ data }: { data: BlogPostData }) {
  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <ReadingProgress />

      {/* ── Hero / Title area ── */}
      <section className="pt-24 pb-12" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#04315b] transition-colors mb-8 group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Category pill */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#ffdb14", color: "#04315b", fontFamily: "'DM Sans', sans-serif" }}>
              <Tag size={9} /> {data.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#04315b" }}>
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-xl text-gray-600 leading-relaxed mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {data.subtitle}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-wrap items-center gap-5 pb-8 border-b border-gray-200">
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <img
                src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663403813396/wUcouPdEWhAWJiGz.png?Expires=1804411334&Signature=uaoN54lomkIyZBjGmv~5uNJfjEXrAvWUvqNpT~xznA6bEVN~EuLL~ERQOYGQfwoNDp0BgeggwyHiS7YrwVAO3iFftEcOR2akSOGifRBgT3X91Qn323XjBApFiU5~Kh5-yo5osse4Vlgd2YuFipXhh4TT2eXmfPBhfJ5DTjapFJqer4G6pwAJqtXt1-1nODzPS7JMRrsaWWMGD2ZFtu6nWpTVMP1xUS4ic2ZrwRF6EQIyM9Gc~C1HatiPpxLCPhBnrWF5ku~ehS-CL1yarroBHFd~B8jv-IVs5ecN5kMm6~tHoQMJuIESJ-oeIPwCNaETz1A73ua40Uw3NN0kYoeIOw__&Key-Pair-Id=K2HSFNDJXOU9YS"
                alt="Bhavleen Singh"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-[13px] font-semibold text-gray-900 leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{data.author}</p>
                <p className="text-[11px] text-gray-500 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>{data.authorTitle}</p>
              </div>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-[13px] text-gray-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Calendar size={13} /> {data.date}
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Clock size={13} /> {data.readTime}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="py-12" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            ref={articleRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {data.sections.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Section s={s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Author bio strip ── */}
      <section className="py-10 border-t border-gray-200" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start gap-5 p-6 rounded-2xl border border-gray-200 bg-white">
            <img
              src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663403813396/wUcouPdEWhAWJiGz.png?Expires=1804411334&Signature=uaoN54lomkIyZBjGmv~5uNJfjEXrAvWUvqNpT~xznA6bEVN~EuLL~ERQOYGQfwoNDp0BgeggwyHiS7YrwVAO3iFftEcOR2akSOGifRBgT3X91Qn323XjBApFiU5~Kh5-yo5osse4Vlgd2YuFipXhh4TT2eXmfPBhfJ5DTjapFJqer4G6pwAJqtXt1-1nODzPS7JMRrsaWWMGD2ZFtu6nWpTVMP1xUS4ic2ZrwRF6EQIyM9Gc~C1HatiPpxLCPhBnrWF5ku~ehS-CL1yarroBHFd~B8jv-IVs5ecN5kMm6~tHoQMJuIESJ-oeIPwCNaETz1A73ua40Uw3NN0kYoeIOw__&Key-Pair-Id=K2HSFNDJXOU9YS"
              alt="Bhavleen Singh"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>Written by</p>
              <p className="text-[17px] font-extrabold text-[#04315b] mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{data.author}</p>
              <p className="text-[13px] text-gray-500 mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>{data.authorTitle}</p>
              <p className="text-[14px] text-gray-600 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Bhavleen is an SEO specialist with 10+ years of experience helping businesses across retail, hospitality, medical, finance, and trades rank on Google. He founded Khalis Marketing to offer transparent, no-contract SEO that actually delivers results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {data.relatedPosts.length > 0 && (
        <section className="py-16 border-t border-gray-200" style={{ background: "#F7F6F2" }}>
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>Continue Reading</p>
            <div className="space-y-0 divide-y divide-gray-200">
              {data.relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="flex items-start justify-between gap-6 py-5 group">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#04315b]/60 mb-1.5 block"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>{post.category}</span>
                    <p className="text-[16px] font-semibold text-gray-900 group-hover:text-[#04315b] transition-colors leading-snug"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{post.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-[12px] text-gray-400"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="flex-shrink-0 text-gray-300 group-hover:text-[#04315b] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA strip ── */}
      <section className="py-16" style={{ background: "#04315b" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>Ready to grow?</p>
          <h2 className="text-3xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Want results like these for your business?
          </h2>
          <p className="text-white/70 mb-8 text-[16px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Get a free SEO audit and find out exactly what it would take to grow your organic traffic and leads.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-seo-audit" className="btn-yellow">
              Get Your Free SEO Audit <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
