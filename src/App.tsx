import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { useLenis } from "./lib/useLenis";
import { Nav } from "./components/Nav";
import { Portfolio } from "./pages/Portfolio";
import { Fashion } from "./pages/Fashion";

function Shell() {
  useLenis();
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain-overlay" />
      <Nav />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/fashion" element={<Fashion />} />
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
