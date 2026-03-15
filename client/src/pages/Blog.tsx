/* ==========================================================================
   BLOG PAGE — Khalis Marketing
   Design: Inspired by bhavleensingh.com/blog
   - Dark navy hero with yellow accent label + left vertical bar
   - Off-white card grid section
   - Pure text cards with dashed border, category pill, date, read more
   - 3-column grid
   - Dark CTA footer strip
   Brand colours: #04315b (navy), #ffdb14 (yellow)
   ========================================================================== */

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const categories = ["All", "Local SEO", "Technical SEO", "Content Strategy", "Link Building", "AI Search"];

const blogPosts = [
  {
    slug: "local-seo-guide-2025",
    title: "The Complete Guide to Local SEO in 2025",
    excerpt: "Everything business owners need to know about ranking in local search results and Google Maps — from local citations and on-page optimisation to review management and map pack rankings.",
    category: "Local SEO",
    readTime: "8 min read",
    date: "18 March 2025",
    featured: true,
  },
  {
    slug: "technical-seo-checklist-2025",
    title: "Technical SEO Checklist: 20 Issues Silently Killing Your Rankings",
    excerpt: "Most websites have technical SEO problems the owner doesn't know exist. Here's how to find and fix the issues preventing Google from properly crawling and ranking your site.",
    category: "Technical SEO",
    readTime: "12 min read",
    date: "30 January 2025",
    featured: false,
  },
  {
    slug: "ai-search-seo-2025",
    title: "How to Optimise for ChatGPT, Perplexity, and Google AI Overviews",
    excerpt: "AI-powered search is changing how customers find businesses. Here's what Answer Engine Optimisation (AEO) is, why it matters, and the practical steps to get cited by AI tools.",
    category: "AI Search",
    readTime: "10 min read",
    date: "10 January 2025",
    featured: false,
  },
  {
    slug: "local-seo-map-pack-rankings",
    title: "How to Rank in the Google Map Pack Without a Google Business Profile",
    excerpt: "The map pack drives the most clicks for local searches. Here's how to build local authority, earn citations, and improve your map pack visibility through on-site and off-site signals.",
    category: "Local SEO",
    readTime: "9 min read",
    date: "5 December 2024",
    featured: false,
  },
  {
    slug: "link-building-2025",
    title: "Link Building: What Actually Works in 2025",
    excerpt: "Forget link schemes and private blog networks. Here's how to build genuine, high-quality backlinks that actually improve your rankings.",
    category: "Link Building",
    readTime: "11 min read",
    date: "20 November 2024",
    featured: false,
  },
  {
    slug: "content-strategy-seo",
    title: "Content Strategy for SEO: How to Create Content That Actually Ranks",
    excerpt: "Most businesses create content that nobody reads and Google ignores. Here's how to build a strategy that targets the right keywords and earns organic traffic.",
    category: "Content Strategy",
    readTime: "7 min read",
    date: "8 November 2024",
    featured: false,
  },
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div
          className="group h-full flex flex-col bg-white rounded-sm cursor-pointer transition-all duration-300 hover:shadow-md"
          style={{ border: '1.5px dashed rgba(4,49,91,0.2)' }}
        >
          <div className="p-6 flex flex-col flex-1">
            {/* Top row: category + read time */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'rgba(4,49,91,0.07)',
                  color: '#04315b',
                  letterSpacing: '0.1em',
                }}
              >
                <Tag size={9} />
                {post.category}
              </span>
              <span
                className="flex items-center gap-1.5 text-xs text-gray-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-lg font-bold text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#04315b] transition-colors duration-200 flex-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p
              className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {post.excerpt}
            </p>

            {/* Bottom row: date + read more */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span
                className="flex items-center gap-1.5 text-xs text-gray-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Calendar size={11} />
                {post.date}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffdb14] group-hover:gap-2.5 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#04315b' }}
              >
                Read more <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  return (
    <PageLayout
      title="Blog | SEO Tips & Insights | Khalis Marketing"
      description="Practical SEO insights — local SEO, technical SEO, content strategy, and getting found online."
    >
      {/* ── Standard off-white hero (matches rest of site) ── */}
      <section className="pt-32 pb-16 bg-[#F7F6F2] relative overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(4,49,91,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,219,20,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            {/* Section label pill */}
            <span className="section-label mb-6 inline-flex">Insights &amp; Perspectives</span>

            <h1
              className="text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.0] mb-5 mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}
            >
              The{" "}
              <span style={{
                color: '#04315b',
                textDecoration: 'underline',
                textDecorationColor: '#ffdb14',
                textDecorationThickness: '4px',
                textUnderlineOffset: '6px',
              }}>SEO Blog</span>
            </h1>
            <p
              className="text-gray-500 text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Practical SEO insights from working in competitive markets.<br />
              No fluff — just what actually works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="bg-[#f5f4f0] border-b border-gray-200 sticky top-[68px] z-30">
        <div className="container">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 flex-shrink-0 mr-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.08em',
                  background: activeCategory === cat ? '#ffdb14' : 'transparent',
                  color: activeCategory === cat ? '#04315b' : '#6b7280',
                  border: activeCategory === cat ? '1.5px solid #ffdb14' : '1.5px solid #d1d5db',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Card grid ── */}
      <section className="py-14 bg-[#f5f4f0] min-h-[60vh]">
        <div className="container">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <p className="text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  No articles in this category yet.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-3 text-sm text-[#04315b] underline underline-offset-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View all
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Dark CTA strip ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#04315b' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              Want SEO advice tailored to your business?
            </h2>
            <p
              className="text-white/60 text-base mb-8 max-w-md mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              These posts cover the fundamentals — but every business is different. Let's talk about yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: '#ffdb14',
                color: '#04315b',
              }}
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
