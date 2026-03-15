/* ==========================================================================
   PAGE LAYOUT, Shared wrapper for all inner pages
   Includes Navbar + Footer, with scroll-to-top on mount
   ========================================================================== */

import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
