/* ==========================================================================
   LOCATIONS SECTION, Clean Light Design System
   Melbourne suburbs bento grid on white background
   ========================================================================== */

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const locations = [
  "Melbourne CBD", "South Yarra", "Richmond", "Fitzroy", "Collingwood",
  "St Kilda", "Prahran", "Hawthorn", "Camberwell", "Box Hill",
  "Footscray", "Sunshine", "Dandenong", "Frankston", "Ringwood",
  "Doncaster", "Essendon", "Coburg", "Brunswick", "Northcote",
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label mb-4 inline-flex">Service Areas</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A' }}>
              SEO Services Across<br />
              <span style={{ color: '#04315b' }}>Greater Melbourne</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            We serve businesses across all Melbourne suburbs and the greater metropolitan area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {locations.map((loc, i) => (
            <motion.button
              key={loc}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              onClick={() => toast(`SEO services in ${loc}, contact us for details!`)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#04315b/30] hover:bg-[#04315b/6] hover:text-[#04315b] text-gray-600 transition-all duration-200 group"
            >
              <MapPin size={13} className="text-gray-400 group-hover:text-[#04315b] transition-colors" />
              <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{loc}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#04315b/6] border border-[#04315b/12] flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-[#04315b]" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 mb-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Don't see your suburb?</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>We work with Melbourne businesses across all suburbs. Get in touch to discuss your location.</div>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost text-sm shrink-0 flex items-center gap-2"
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
