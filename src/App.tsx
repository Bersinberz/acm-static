import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ---------------- WEBSITE PAGES ---------------- */
import Home from "./pages/website/Home";
import About from "./pages/website/Aboutus";
import Membership from "./pages/website/Membership";
import Ourroots from "./pages/website/Ourroots";
import JoinUs from "./pages/website/Joinus";
import Archives from "./pages/website/archives";
import Blogs from "./pages/website/blogs";
import Events from "./pages/website/events";

/* ---------------- COMPONENTS ---------------- */
import Nav from "./components/Navbar";
import ScrollToTop from "./components/ScrolltoTop";
import LogoLoading from "./components/logoLoader";

/* ---------------- STYLES ---------------- */
import "./App.css";

/* ---------------- OTHERS ---------------- */
import Inaugural from "./pages/website/Archives/inaugural";
import Azure from "./pages/website/Archives/azure";
import Genai from "./pages/website/Archives/genAi";
import Digiart from "./pages/website/Archives/digitalart";
import Spaceday from "./pages/website/Archives/spaceday";
import Synergy from "./pages/website/Archives/synergy";
import Insightx from "./pages/website/Archives/insightx";
import HelloJava from "./pages/website/Archives/hellojava";
import ThinkTankers from "./pages/website/Archives/ThinkTankers";
import IdeaToLaunch from "./pages/website/Archives/ideatolaunch";
import Linkedin from "./pages/website/Archives/linkedin";
import Harmonix from "./pages/website/Archives/harmonix";
import Gitready from "./pages/website/Archives/Gitready";
import Quicktrain from "./pages/website/Archives/Quicktrain";
import CareerCompass from "./pages/website/Archives/CareerCompass"
import Technopoly from "./pages/website/Archives/Technopoly";
import MindAuction from "./pages/website/Archives/MindAuction";
import AgileEngineering from "./pages/website/Archives/AgileEngineering";
import Cognibot from "./pages/website/Archives/Cognibot";
import ResumeBuilding from "./pages/website/Archives/ResumeBuilding";
import TechUNO from "./pages/website/Archives/TechUNO";
import SpaceZ from "./pages/website/Archives/SpaceZ";
import StartupXcel from "./pages/website/Archives/StartupXcel";
import CyberSprint from "./pages/website/Archives/CyberSprint";
import Techmemeathon from "./pages/website/Archives/Techmemeathon";

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

    if (SELF_LOADING_ROUTES.includes(location.pathname)) return;

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
              <Route path="/archives/inaugural" element={<Inaugural />} />
              <Route path="/archives/azure" element={<Azure />} />
              <Route path="/archives/genai" element={<Genai />} />
              <Route path="/archives/digiart" element={<Digiart />} />
              <Route path="/archives/spaceday" element={<Spaceday />} />
              <Route path="/archives/synergy" element={<Synergy />} />
              <Route path="/archives/insightx" element={<Insightx />} />
              <Route path="/archives/hellojava" element={<HelloJava />} />
              <Route path="/archives/thinktankers" element={<ThinkTankers />} />
              <Route path="/archives/ideatolaunch" element={<IdeaToLaunch />} />
              <Route path="/archives/linkedin" element={<Linkedin />} />
              <Route path="/archives/harmonix" element={<Harmonix />} />
              <Route path="/archives/Gitready" element={<Gitready />} />
              <Route path="/archives/Quicktrain" element={<Quicktrain />} />
              <Route path="/archives/CareerCompass" element={<CareerCompass />} />
              <Route path="/archives/Technopoly" element={<Technopoly />} />
              <Route path="/archives/MindAuction" element={<MindAuction />} />
              <Route path="/archives/AgileEngineering" element={<AgileEngineering />} />
              <Route path="/archives/Cognibot" element={<Cognibot />} />
              <Route path="/archives/ResumeBuilding" element={<ResumeBuilding />} />
              <Route path="/archives/Techuno" element={<TechUNO />} />
              <Route path="/archives/SpaceZ" element={<SpaceZ />} />
              <Route path="/archives/StartupXcel" element={<StartupXcel />} />
              <Route path="/archives/CyberSprint" element={<CyberSprint />} />
              <Route path="/archives/Techmemeathon" element={<Techmemeathon />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/our-roots" element={<Ourroots />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/events" element={<Events />} />
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