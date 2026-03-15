/* ==========================================================================
   FOOTER, Clean Design System
   Dark charcoal footer for contrast against light page
   ========================================================================== */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  Services: [
    "Local SEO",
    "Technical SEO",
    "On-Page SEO",
    "Link Building",
    "SEO Audits",
    "Website Design",
  ],
  Company: [
    "About Us",
    "Case Studies",
    "Blog",
    "Locations",
    "Contact Us",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.59 0.17 162.48 / 0.06) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-5">
              {/* Dual-colour text-only wordmark */}
              <div className="leading-none">
                <span
                  className="text-[20px] font-extrabold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff', letterSpacing: '-0.02em' }}
                >Khalis</span><span
                  className="text-[20px] font-extrabold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffdb14', letterSpacing: '-0.02em' }}
                >&nbsp;Marketing</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Melbourne's SEO agency that does things differently. Transparent strategies, no lock-in contracts, real results.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-navy text-sm py-2.5 px-5"
            >
              Free SEO Audit <ArrowRight size={16} />
            </button>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const sectionMap: Record<string, string> = {
                          "About Us": "about",
                          "Case Studies": "case-studies",
                          "Contact Us": "contact",
                          "Locations": "locations",
                          "Local SEO": "services",
                          "Technical SEO": "services",
                          "On-Page SEO": "services",
                          "Link Building": "services",
                          "SEO Audits": "services",
                          "Website Design": "services",
                        };
                        if (sectionMap[link]) {
                          scrollTo(sectionMap[link]);
                        } else {
                          toast(`${link}, coming soon!`);
                        }
                      }}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200 text-left"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            © {new Date().getFullYear()} Khalis Marketing Pty Ltd. All rights reserved. Melbourne, Victoria, Australia.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Facebook", "Instagram"].map((social) => (
              <button
                key={social}
                onClick={() => toast(`${social}, coming soon!`)}
                className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
