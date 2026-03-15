/* ==========================================================================
   NAVBAR, Interactive Mega-Dropdown Design
   Light frosted glass nav · Animated services mega-menu · Locations dropdown
   Mobile accordion for both Services and Locations
   ========================================================================== */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown,
  MapPin, Zap, FileText, Link2, Search, ShoppingCart,
  Globe, Monitor, Bot, BarChart2, TrendingUp, ArrowRight,
  Wrench, Utensils, Stethoscope, ShoppingBag, Cpu
} from "lucide-react";

/* ── Service categories for the mega-dropdown ── */
const serviceGroups = [
  {
    category: "Core SEO",
    items: [
      { label: "SEO Services", href: "/services/seo", icon: TrendingUp, desc: "Full-service SEO for Melbourne businesses" },
      { label: "Local SEO", href: "/services/local-seo", icon: MapPin, desc: "Dominate Google Maps & local search" },
      { label: "Technical SEO", href: "/services/technical-seo", icon: Zap, desc: "Fix the issues holding your rankings back" },
      { label: "On-Page SEO", href: "/services/on-page-seo", icon: FileText, desc: "Optimise every page for rankings" },
    ],
  },
  {
    category: "Authority & Content",
    items: [
      { label: "Link Building", href: "/services/link-building", icon: Link2, desc: "Build authority Google trusts" },
      { label: "SEO Audit", href: "/services/seo-audit", icon: Search, desc: "Know exactly what's holding you back" },
      { label: "AEO / LLM SEO", href: "/services/aeo-llm-seo", icon: Bot, desc: "Get found in ChatGPT & AI search" },
    ],
  },
  {
    category: "Platform SEO",
    items: [
      { label: "Ecommerce SEO", href: "/services/ecommerce-seo", icon: ShoppingCart, desc: "Drive organic sales for online stores" },
      { label: "Shopify SEO", href: "/services/shopify-seo", icon: BarChart2, desc: "Unlock your Shopify store's potential" },
      { label: "WordPress SEO", href: "/services/wordpress-seo", icon: Globe, desc: "Get more from the world's top CMS" },
      { label: "SaaS SEO", href: "/services/saas-seo", icon: Monitor, desc: "Grow your software business organically" },
      { label: "Website Design", href: "/services/website-design", icon: Monitor, desc: "SEO-ready websites built to convert" },
    ],
  },
];

/* ── Case study pages ── */
const caseStudyLinks = [
  { label: "Plumbing Company", href: "/case-studies/plumbing-seo", icon: Wrench, desc: "312% organic traffic increase" },
  { label: "Electrical Contractor", href: "/case-studies/electrical-seo", icon: Zap, desc: "Map pack in 4 months" },
  { label: "Restaurant", href: "/case-studies/restaurant-seo", icon: Utensils, desc: "147% more bookings" },
  { label: "Dental Practice", href: "/case-studies/dental-seo", icon: Stethoscope, desc: "2x patient enquiries" },
  { label: "Ecommerce Store", href: "/case-studies/ecommerce-seo", icon: ShoppingBag, desc: "$127K organic revenue" },
  { label: "IT Services", href: "/case-studies/it-services-seo", icon: Cpu, desc: "Top 5 B2B keywords" },
];

/* ── Location sub-pages ── */
const locationLinks = [
  { label: "Werribee", href: "/locations/werribee", desc: "Local SEO for Werribee businesses" },
  { label: "Hoppers Crossing", href: "/locations/hoppers-crossing", desc: "Stand out in a competitive local market" },
  { label: "Tarneit", href: "/locations/tarneit", desc: "Reach new residents before competitors" },
  { label: "Melton", href: "/locations/melton", desc: "Connect across the Melton region" },
];

const topNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

/* ── Mega dropdown panel (Services) ── */
function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] max-w-[calc(100vw-2rem)]"
      style={{ zIndex: 100 }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-200 rounded-sm" />

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-[#04315b] to-[#0a4a85] px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              All SEO Services
            </p>
            <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Melbourne-based SEO agency, every service, one expert
            </p>
          </div>
          <Link
            href="/services"
            onClick={onClose}
            className="flex items-center gap-1.5 text-[#ffdb14] text-xs font-semibold hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            View all services <ArrowRight size={12} />
          </Link>
        </div>

        {/* Service groups grid */}
        <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
          {serviceGroups.map((group) => (
            <div key={group.category} className="p-5">
              <p
                className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {group.category}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-150"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#04315b]/8 flex items-center justify-center group-hover:bg-[#04315b] group-hover:border-[#04315b] transition-all duration-200">
                      <item.icon size={14} className="text-[#04315b] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-semibold text-gray-800 group-hover:text-[#04315b] transition-colors leading-tight"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-0.5 leading-tight"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-3.5 flex items-center justify-between">
          <p className="text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Not sure which service you need?
          </p>
          <Link
            href="/free-seo-audit"
            onClick={onClose}
            className="flex items-center gap-1.5 bg-[#ffdb14] text-[#04315b] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#e6c400] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Get a Free SEO Audit <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Case Studies dropdown panel ── */
function CaseStudiesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80"
      style={{ zIndex: 100 }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-200 rounded-sm" />

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#04315b] to-[#0a4a85] px-5 py-3.5 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Case Studies
            </p>
            <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Real results across 6 industries
            </p>
          </div>
          <Link
            href="/case-studies"
            onClick={onClose}
            className="flex items-center gap-1 text-[#ffdb14] text-xs font-semibold hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            All <ArrowRight size={11} />
          </Link>
        </div>

        {/* Case study links */}
        <div className="p-3 space-y-0.5">
          {caseStudyLinks.map((cs) => (
            <Link
              key={cs.label}
              href={cs.href}
              onClick={onClose}
              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#04315b]/8 flex items-center justify-center group-hover:bg-[#04315b] transition-all duration-200">
                <cs.icon size={14} className="text-[#04315b] group-hover:text-white transition-colors duration-200" />
              </div>
              <div className="min-w-0">
                <p
                  className="text-sm font-semibold text-gray-800 group-hover:text-[#04315b] transition-colors leading-tight"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {cs.label}
                </p>
                <p
                  className="text-xs text-gray-500 mt-0.5 leading-tight"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {cs.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Locations dropdown panel ── */
function LocationsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72"
      style={{ zIndex: 100 }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-200 rounded-sm" />

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#04315b] to-[#0a4a85] px-5 py-3.5 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Melbourne West
            </p>
            <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Local SEO across the western suburbs
            </p>
          </div>
          <Link
            href="/locations"
            onClick={onClose}
            className="flex items-center gap-1 text-[#ffdb14] text-xs font-semibold hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            All <ArrowRight size={11} />
          </Link>
        </div>

        {/* Location links */}
        <div className="p-3 space-y-0.5">
          {locationLinks.map((loc) => (
            <Link
              key={loc.label}
              href={loc.href}
              onClick={onClose}
              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#04315b]/8 flex items-center justify-center group-hover:bg-[#04315b] transition-all duration-200">
                <MapPin size={14} className="text-[#04315b] group-hover:text-white transition-colors duration-200" />
              </div>
              <div className="min-w-0">
                <p
                  className="text-sm font-semibold text-gray-800 group-hover:text-[#04315b] transition-colors leading-tight"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {loc.label}
                </p>
                <p
                  className="text-xs text-gray-500 mt-0.5 leading-tight"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {loc.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile services accordion ── */
function MobileServicesAccordion({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Services
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-0.5">
              {serviceGroups.map((group) => (
                <div key={group.category}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 py-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {group.category}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#04315b]/8 flex items-center justify-center flex-shrink-0">
                        <item.icon size={13} className="text-[#04315b]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile case studies accordion ── */
function MobileCaseStudiesAccordion({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Case Studies
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-0.5">
              <Link
                href="/case-studies"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#04315b]/8 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={13} className="text-[#04315b]" />
                </div>
                <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  All Case Studies
                </span>
              </Link>
              {caseStudyLinks.map((cs) => (
                <Link
                  key={cs.label}
                  href={cs.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#04315b]/8 flex items-center justify-center flex-shrink-0">
                    <cs.icon size={13} className="text-[#04315b]" />
                  </div>
                  <span className="text-sm text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {cs.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile locations accordion ── */
function MobileLocationsAccordion({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Locations
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-0.5">
              {/* All locations link */}
              <Link
                href="/locations"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#04315b]/8 flex items-center justify-center flex-shrink-0">
                  <Globe size={13} className="text-[#04315b]" />
                </div>
                <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  All Locations
                </span>
              </Link>
              {locationLinks.map((loc) => (
                <Link
                  key={loc.label}
                  href={loc.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#04315b]/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={13} className="text-[#04315b]" />
                  </div>
                  <span className="text-sm text-gray-700" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {loc.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type DropdownKey = "services" | "caseStudies" | "locations" | null;

/* ── Main Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const navRowRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();

  const openDropdown = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 80);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const servicesOpen = activeDropdown === "services";
  const caseStudiesOpen = activeDropdown === "caseStudies";
  const locationsOpen = activeDropdown === "locations";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRowRef.current && !navRowRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              {/* Dual-colour text-only wordmark */}
              <div className="leading-none transition-opacity duration-200 group-hover:opacity-85">
                <span
                  className="text-[20px] font-extrabold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#04315b', letterSpacing: '-0.02em' }}
                >Khalis</span><span
                  className="text-[20px] font-extrabold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffdb14', letterSpacing: '-0.02em' }}
                >&nbsp;Marketing</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div ref={navRowRef} className="hidden lg:flex items-center gap-0.5" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
              {/* Home */}
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/about") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                About Us
              </Link>

              {/* Services, with mega dropdown */}
              <div className="relative">
                <button
                  onClick={() => openDropdown(servicesOpen ? null : "services")}
                  onMouseEnter={() => openDropdown("services")}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    servicesOpen || isActive("/services") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#04315b]" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <div onMouseEnter={cancelClose}>
                      <MegaMenu onClose={() => setActiveDropdown(null)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Case Studies, with dropdown */}
              <div className="relative">
                <button
                  onClick={() => openDropdown(caseStudiesOpen ? null : "caseStudies")}
                  onMouseEnter={() => openDropdown("caseStudies")}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    caseStudiesOpen || isActive("/case-studies") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Case Studies
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${caseStudiesOpen ? "rotate-180 text-[#04315b]" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {caseStudiesOpen && (
                    <div onMouseEnter={cancelClose}>
                      <CaseStudiesDropdown onClose={() => setActiveDropdown(null)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Locations, with dropdown */}
              <div className="relative">
                <button
                  onClick={() => openDropdown(locationsOpen ? null : "locations")}
                  onMouseEnter={() => openDropdown("locations")}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    locationsOpen || isActive("/locations") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Locations
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${locationsOpen ? "rotate-180 text-[#04315b]" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {locationsOpen && (
                    <div onMouseEnter={cancelClose}>
                      <LocationsDropdown onClose={() => setActiveDropdown(null)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/blog") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive("/contact") ? "text-[#04315b] bg-[#04315b]/8" : "text-gray-600 hover:text-[#04315b] hover:bg-[#04315b]/5"
                }`}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Contact Us
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/free-seo-audit" className="btn-yellow text-sm py-2.5 px-5">
                Free SEO Audit
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 nav-blur border-b border-gray-200 max-h-[80vh] overflow-y-auto"
          >
            <div className="container py-4 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                About Us
              </Link>

              {/* Services accordion */}
              <MobileServicesAccordion onClose={() => setMobileOpen(false)} />

                {/* Case Studies accordion */}
              <MobileCaseStudiesAccordion onClose={() => setMobileOpen(false)} />

              {/* Locations accordion */}
              <MobileLocationsAccordion onClose={() => setMobileOpen(false)} />

              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Contact Us
              </Link>

              <Link
                href="/free-seo-audit"
                onClick={() => setMobileOpen(false)}
                className="btn-yellow mt-2 text-sm justify-center"
              >
                Free SEO Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
