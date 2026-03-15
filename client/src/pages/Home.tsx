/* ==========================================================================
   HOME PAGE, Khalis Marketing
   Obsidian Glow Design System
   Sections: Navbar → Hero → TrustBar → About → Services → Testimonials
             → CaseStudies → FAQ → CTA → Footer

   Performance: Hero + TrustBar are eagerly loaded (above-the-fold).
   All below-the-fold sections are lazy-loaded via React.lazy + Suspense
   to reduce the initial JS bundle and improve LCP / PageSpeed score.
   ========================================================================== */

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

// Below-the-fold sections — lazy-loaded to reduce initial bundle
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CaseStudiesSection = lazy(() => import("@/components/CaseStudiesSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

// Minimal placeholder that preserves layout height while section loads
function SectionSkeleton({ height = "h-64" }: { height?: string }) {
  return <div className={`w-full ${height} bg-[#050508]`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] overflow-x-hidden">
      <Navbar />
      {/* Above-the-fold: eagerly loaded */}
      <HeroSection />
      <TrustBar />
      {/* Below-the-fold: lazy-loaded */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CaseStudiesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  );
}
