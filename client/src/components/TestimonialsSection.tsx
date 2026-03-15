/* ==========================================================================
   TESTIMONIALS SECTION, Clean Light Design System
   Staggered card layout with star ratings on white cards
   Real client testimonials from Khalis Marketing clients
   ========================================================================== */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bhavleen is a miracle worker. He got my site ranked on page one of Google in a shorter time than he anticipated. I will definitely be referring my friends with businesses to Khalis Marketing.",
    name: "Jordan Bright",
    business: "DMG",
    location: "United States",
    stars: 5,
    highlight: "Page one faster than expected",
  },
  {
    quote: "Khalis Marketing has done a fantastic job helping with SEO for our website. Bhavleen's knowledge of modern marketing methods is evident in his results. We have already climbed to the top of the search results for many of our keywords. We are very happy with his work on our SEO needs and would highly recommend his expertise!",
    name: "Kayley Maynard",
    business: "Southwest Pool Care",
    location: "United States",
    stars: 5,
    highlight: "Top of search results",
  },
  {
    quote: "Having worked with Bhavleen for many years, we've seen firsthand the exceptional results he consistently delivers for companies. He helps websites rise to the top of search rankings, and his deep knowledge of SEO services shows in every project. He is reliable, skilled, and always achieves top-tier results.",
    name: "Michael Bright",
    business: "Beyond the Books",
    location: "United States",
    stars: 5,
    highlight: "Exceptional results, every project",
  },
  {
    quote: "Bhavleen recently did content writing and SEO work for us. I have been very pleased with him, as he provides high-quality content in a niche industry and is quite professional. I recommend his services to anybody, and in fact, we look forward to working with him in the future also.",
    name: "Amir Akthar",
    business: "Mymskclinic",
    location: "United States",
    stars: 5,
    highlight: "High-quality niche content",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Client Stories</span>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A' }}>
            What Our Clients<br />Have to Say
          </h2>
        </motion.div>

        {/* Cards — 2-col on md, 4-col on xl */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-card p-7 flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote size={28} className="text-[#04315b]/20 mb-4" />

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#04315b]/6 border border-[#04315b]/15 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04315b]" />
                  <span className="text-xs font-semibold text-[#04315b]" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.highlight}</span>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#04315b]/10 to-[#ffdb14]/20 border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#04315b]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.name}</div>
                  <div className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-10 text-center"
        >
          {[
            { value: "5.0", label: "Google Rating" },
            { value: "100+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="stat-number text-3xl font-bold">{item.value}</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
