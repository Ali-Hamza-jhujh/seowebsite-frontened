/* ==========================================================================
   TRUST BAR, Clean Light Design System
   Stats row + scrolling industry ticker
   ========================================================================== */

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Clients" },
  { value: "No", label: "Lock-in Contracts" },
  { value: "100%", label: "Transparent Reporting" },
];

const industries = [
  "HOSPITALITY", "MEDICAL", "FINANCE", "TRADES", "LEGAL",
  "REAL ESTATE", "E-COMMERCE", "RETAIL", "PROFESSIONAL SERVICES",
  "EDUCATION", "BEAUTY & WELLNESS", "AUTOMOTIVE",
];

const tickerItems = [...industries, ...industries];

export default function TrustBar() {
  return (
    <section className="py-0 relative">
      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-y border-gray-200 bg-white py-8"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="stat-number text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Industry ticker */}
      <div className="py-3.5 overflow-hidden border-b border-gray-100 bg-gray-50">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-6 shrink-0">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
