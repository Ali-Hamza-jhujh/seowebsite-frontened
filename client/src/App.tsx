import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Eagerly load only the homepage (above-the-fold critical path)
import Home from "./pages/Home";

// Lazy-load all other pages — eliminates 203 KiB of unused JS on initial load
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Locations = lazy(() => import("./pages/Locations"));
const Contact = lazy(() => import("./pages/Contact"));
const FreeSEOAudit = lazy(() => import("./pages/FreeSEOAudit"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Location sub-pages
const Werribee = lazy(() => import("./pages/locations/Werribee"));
const HoppersCrossing = lazy(() => import("./pages/locations/HoppersCrossing"));
const Tarneit = lazy(() => import("./pages/locations/Tarneit"));
const Melton = lazy(() => import("./pages/locations/Melton"));

// Blog posts
const LocalSEOGuide2025 = lazy(() => import("./pages/blog/LocalSEOGuide2025"));

// Case study pages
const PlumbingSEO = lazy(() => import("./pages/case-studies/PlumbingSEO"));
const ElectricalSEO = lazy(() => import("./pages/case-studies/ElectricalSEO"));
const RestaurantSEO = lazy(() => import("./pages/case-studies/RestaurantSEO"));
const DentalSEO = lazy(() => import("./pages/case-studies/DentalSEO"));
const EcommerceSEOCase = lazy(() => import("./pages/case-studies/EcommerceSEO"));
const ITServicesSEO = lazy(() => import("./pages/case-studies/ITServicesSEO"));

// Service pages
const SEOServices = lazy(() => import("./pages/services/SEOServices"));
const LocalSEO = lazy(() => import("./pages/services/LocalSEO"));
const TechnicalSEO = lazy(() => import("./pages/services/TechnicalSEO"));
const OnPageSEO = lazy(() => import("./pages/services/OnPageSEO"));
const LinkBuilding = lazy(() => import("./pages/services/LinkBuilding"));
const SEOAudit = lazy(() => import("./pages/services/SEOAudit"));
const AEOSEO = lazy(() => import("./pages/services/AEOSEO"));
const EcommerceSEO = lazy(() => import("./pages/services/EcommerceSEO"));
const ShopifySEO = lazy(() => import("./pages/services/ShopifySEO"));
const WordPressSEO = lazy(() => import("./pages/services/WordPressSEO"));
const SaaSEO = lazy(() => import("./pages/services/SaaSEO"));
const WebsiteDesign = lazy(() => import("./pages/services/WebsiteDesign"));

// Minimal loading fallback — no layout shift, just a blank white screen
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]" aria-hidden="true" />
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Homepage — eagerly loaded */}
        <Route path="/" component={Home} />

        {/* Main pages */}
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/local-seo-guide-2025" component={LocalSEOGuide2025} />
        <Route path="/locations" component={Locations} />
        <Route path="/locations/werribee" component={Werribee} />
        <Route path="/locations/hoppers-crossing" component={HoppersCrossing} />
        <Route path="/locations/tarneit" component={Tarneit} />
        <Route path="/locations/melton" component={Melton} />
        <Route path="/contact" component={Contact} />
        <Route path="/free-seo-audit" component={FreeSEOAudit} />

        {/* Case studies */}
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/plumbing-seo" component={PlumbingSEO} />
        <Route path="/case-studies/electrical-seo" component={ElectricalSEO} />
        <Route path="/case-studies/restaurant-seo" component={RestaurantSEO} />
        <Route path="/case-studies/dental-seo" component={DentalSEO} />
        <Route path="/case-studies/ecommerce-seo" component={EcommerceSEOCase} />
        <Route path="/case-studies/it-services-seo" component={ITServicesSEO} />

        {/* Individual service pages */}
        <Route path="/services/seo" component={SEOServices} />
        <Route path="/services/local-seo" component={LocalSEO} />
        <Route path="/services/technical-seo" component={TechnicalSEO} />
        <Route path="/services/on-page-seo" component={OnPageSEO} />
        <Route path="/services/link-building" component={LinkBuilding} />
        <Route path="/services/seo-audit" component={SEOAudit} />
        <Route path="/services/aeo-llm-seo" component={AEOSEO} />
        <Route path="/services/ecommerce-seo" component={EcommerceSEO} />
        <Route path="/services/shopify-seo" component={ShopifySEO} />
        <Route path="/services/wordpress-seo" component={WordPressSEO} />
        <Route path="/services/saas-seo" component={SaaSEO} />
        <Route path="/services/website-design" component={WebsiteDesign} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
