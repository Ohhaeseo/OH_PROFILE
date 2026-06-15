import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Craft", href: "#craft" },
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
        {/* 좌측: 로고 + 현재 위치 */}
        <div className="flex items-baseline gap-3">
          <Link
            to="/"
            className={`tracking-tight ${
              onFashion
                ? "font-display text-lg uppercase text-bone sm:text-xl"
                : "font-serif text-xl text-espresso sm:text-2xl"
            }`}
          >
            오해서
          </Link>
          <span
            className={`hidden text-[11px] uppercase tracking-[0.25em] sm:inline ${
              onFashion ? "text-bone/55" : "text-mocha"
            }`}
          >
            {onFashion ? "→ Wardrobe" : "→ Developer"}
          </span>
        </div>

        {/* 우측: 메뉴 */}
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
              ← Portfolio
            </Link>
          ) : (
            <Link
              to="/fashion"
              className="rounded-full border border-mocha/50 px-4 py-1.5 text-[12px] tracking-wide text-coffee transition-colors duration-300 hover:border-caramel hover:text-caramel"
            >
              Wardrobe ↗
            </Link>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
