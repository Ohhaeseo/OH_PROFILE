import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { BrandMark } from "./BrandMark";

const sectionLinks = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onFashion = pathname.startsWith("/fashion");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 sm:px-9 ${
          scrolled ? "py-3" : "py-5 sm:py-7"
        }`}
      >
        <Link
          to="/"
          aria-label="Portfolio home"
          className="group grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-500 hover:-translate-y-0.5"
        >
          <BrandMark className="h-9 w-9" dark={onFashion} />
        </Link>

        <nav
          className={`flex items-center gap-5 text-[12.5px] tracking-wide sm:gap-7 ${
            onFashion ? "text-bone" : "text-coffee"
          }`}
        >
          {!onFashion &&
            sectionLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline hidden py-1 sm:inline"
              >
                {l.label}
              </a>
            ))}
          {onFashion ? (
            <Link
              to="/"
              className="rounded-full border border-bone/40 px-4 py-1.5 text-[12px] uppercase tracking-wide text-bone transition-colors duration-300 hover:bg-bone hover:text-[#100f0e]"
            >
              Portfolio
            </Link>
          ) : (
            <motion.div whileTap={{ scale: 0.9 }} className="relative">
              <Link
                to="/fashion"
                className="group relative isolate inline-flex overflow-hidden rounded-full border border-mocha/50 px-4 py-1.5 text-[12px] tracking-wide text-coffee transition-colors duration-300 hover:border-caramel hover:text-cream"
              >
                <span className="absolute inset-0 -z-10 scale-x-0 rounded-full bg-espresso transition-transform duration-500 ease-out group-hover:scale-x-100" />
                Wardrobe ↗
              </Link>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
