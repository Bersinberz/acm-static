import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ---------------- WEBSITE PAGES (eager — always needed) ---------------- */
import Home from "./pages/website/Home";
import About from "./pages/website/Aboutus";
import Membership from "./pages/website/Membership";
import Ourroots from "./pages/website/Ourroots";
import JoinUs from "./pages/website/Joinus";
import Archives from "./pages/website/archives";
import Blogs from "./pages/website/blogs";
import Events from "./pages/website/events";
import NotFound from "./pages/website/NotFound";

/* ---------------- COMPONENTS ---------------- */
import Nav from "./components/Navbar";
import ScrollToTop from "./components/ScrolltoTop";
import LogoLoading from "./components/logoLoader";

/* ---------------- STYLES ---------------- */
import "./App.css";

/* ---------------- ARCHIVE PAGES (lazy — only loaded when visited) ---------------- */
const Inaugural      = lazy(() => import("./pages/website/Archives/inaugural"));
const Azure          = lazy(() => import("./pages/website/Archives/azure"));
const Genai          = lazy(() => import("./pages/website/Archives/genAi"));
const Digiart        = lazy(() => import("./pages/website/Archives/digitalart"));
const Spaceday       = lazy(() => import("./pages/website/Archives/spaceday"));
const Synergy        = lazy(() => import("./pages/website/Archives/synergy"));
const Insightx       = lazy(() => import("./pages/website/Archives/insightx"));
const HelloJava      = lazy(() => import("./pages/website/Archives/hellojava"));
const ThinkTankers   = lazy(() => import("./pages/website/Archives/ThinkTankers"));
const IdeaToLaunch   = lazy(() => import("./pages/website/Archives/ideatolaunch"));
const Linkedin       = lazy(() => import("./pages/website/Archives/linkedin"));
const Harmonix       = lazy(() => import("./pages/website/Archives/harmonix"));
const Gitready       = lazy(() => import("./pages/website/Archives/Gitready"));
const Quicktrain     = lazy(() => import("./pages/website/Archives/Quicktrain"));
const CareerCompass  = lazy(() => import("./pages/website/Archives/CareerCompass"));
const Technopoly     = lazy(() => import("./pages/website/Archives/Technopoly"));
const MindAuction    = lazy(() => import("./pages/website/Archives/MindAuction"));
const AgileEngineering = lazy(() => import("./pages/website/Archives/AgileEngineering"));
const Cognibot       = lazy(() => import("./pages/website/Archives/Cognibot"));
const ResumeBuilding = lazy(() => import("./pages/website/Archives/ResumeBuilding"));
const TechUNO        = lazy(() => import("./pages/website/Archives/TechUNO"));
const SpaceZ         = lazy(() => import("./pages/website/Archives/SpaceZ"));
const StartupXcel    = lazy(() => import("./pages/website/Archives/StartupXcel"));
const CyberSprint    = lazy(() => import("./pages/website/Archives/CyberSprint"));
const Techmemeathon  = lazy(() => import("./pages/website/Archives/Techmemeathon"));

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  /* -------- SHOW LOADER ON EVERY ROUTE CHANGE -------- */
  // Pages that manage their own loading state (e.g. async data fetch) are excluded
  // so the route loader doesn't delay their mount and cause a blank flash.
  const SELF_LOADING_ROUTES = ['/blogs'];

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Don't show the route loader for self-loading pages or unknown routes
    const isKnownRoute = [
      '/', '/about', '/membership', '/archives', '/blogs',
      '/our-roots', '/join-us', '/events'
    ].includes(location.pathname) || location.pathname.startsWith('/archives/');

    if (SELF_LOADING_ROUTES.includes(location.pathname)) return;
    if (!isKnownRoute) return; // 404 page handles its own entrance animation

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Nav />

      <AnimatePresence mode="wait">
        {loading ? (
          <LogoLoading />
        ) : (
          <motion.div
            key={location.pathname}
            className="main-contentapp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/our-roots" element={<Ourroots />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/events" element={<Events />} />

              {/* Archive sub-pages — lazy loaded, only fetched when visited */}
              <Route path="/archives/inaugural"       element={<Suspense fallback={<LogoLoading />}><Inaugural /></Suspense>} />
              <Route path="/archives/azure"           element={<Suspense fallback={<LogoLoading />}><Azure /></Suspense>} />
              <Route path="/archives/genai"           element={<Suspense fallback={<LogoLoading />}><Genai /></Suspense>} />
              <Route path="/archives/digiart"         element={<Suspense fallback={<LogoLoading />}><Digiart /></Suspense>} />
              <Route path="/archives/spaceday"        element={<Suspense fallback={<LogoLoading />}><Spaceday /></Suspense>} />
              <Route path="/archives/synergy"         element={<Suspense fallback={<LogoLoading />}><Synergy /></Suspense>} />
              <Route path="/archives/insightx"        element={<Suspense fallback={<LogoLoading />}><Insightx /></Suspense>} />
              <Route path="/archives/hellojava"       element={<Suspense fallback={<LogoLoading />}><HelloJava /></Suspense>} />
              <Route path="/archives/thinktankers"    element={<Suspense fallback={<LogoLoading />}><ThinkTankers /></Suspense>} />
              <Route path="/archives/ideatolaunch"    element={<Suspense fallback={<LogoLoading />}><IdeaToLaunch /></Suspense>} />
              <Route path="/archives/linkedin"        element={<Suspense fallback={<LogoLoading />}><Linkedin /></Suspense>} />
              <Route path="/archives/harmonix"        element={<Suspense fallback={<LogoLoading />}><Harmonix /></Suspense>} />
              <Route path="/archives/Gitready"        element={<Suspense fallback={<LogoLoading />}><Gitready /></Suspense>} />
              <Route path="/archives/Quicktrain"      element={<Suspense fallback={<LogoLoading />}><Quicktrain /></Suspense>} />
              <Route path="/archives/CareerCompass"   element={<Suspense fallback={<LogoLoading />}><CareerCompass /></Suspense>} />
              <Route path="/archives/Technopoly"      element={<Suspense fallback={<LogoLoading />}><Technopoly /></Suspense>} />
              <Route path="/archives/MindAuction"     element={<Suspense fallback={<LogoLoading />}><MindAuction /></Suspense>} />
              <Route path="/archives/AgileEngineering" element={<Suspense fallback={<LogoLoading />}><AgileEngineering /></Suspense>} />
              <Route path="/archives/Cognibot"        element={<Suspense fallback={<LogoLoading />}><Cognibot /></Suspense>} />
              <Route path="/archives/ResumeBuilding"  element={<Suspense fallback={<LogoLoading />}><ResumeBuilding /></Suspense>} />
              <Route path="/archives/Techuno"         element={<Suspense fallback={<LogoLoading />}><TechUNO /></Suspense>} />
              <Route path="/archives/SpaceZ"          element={<Suspense fallback={<LogoLoading />}><SpaceZ /></Suspense>} />
              <Route path="/archives/StartupXcel"     element={<Suspense fallback={<LogoLoading />}><StartupXcel /></Suspense>} />
              <Route path="/archives/CyberSprint"     element={<Suspense fallback={<LogoLoading />}><CyberSprint /></Suspense>} />
              <Route path="/archives/Techmemeathon"   element={<Suspense fallback={<LogoLoading />}><Techmemeathon /></Suspense>} />

              {/* Catch-all — any unknown route → 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- ROOT WRAPPER ---------------- */
function Root() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default Root;