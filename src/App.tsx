import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { MotionConfig } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLenis } from "./lib/useLenis";
import { Nav } from "./components/Nav";
import { Portfolio } from "./pages/Portfolio";
import { Fashion } from "./pages/Fashion";
import { ProjectDetail } from "./pages/ProjectDetail";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      (
        window as unknown as {
          __portfolioLenis?: {
            scrollTo: (target: number | HTMLElement, options?: object) => void;
          };
        }
      ).__portfolioLenis?.scrollTo(0, { immediate: true, force: true });
      return;
    }

    if (!location.hash) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(
        decodeURIComponent(location.hash.slice(1)),
      );
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY;
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
      window.scrollTo({ top, left: 0, behavior: "auto" });
      (
        window as unknown as {
          __portfolioLenis?: {
            scrollTo: (target: number | HTMLElement, options?: object) => void;
          };
        }
      ).__portfolioLenis?.scrollTo(target, { immediate: true, force: true });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return null;
}

function Shell() {
  useLenis();
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain-overlay" />
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </MotionConfig>
  );
}

// GitHub Pages 프로젝트 경로(/OH_PROFILE) 대응. 로컬("/")에선 기본값.
const basename =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Shell />
    </BrowserRouter>
  );
}
