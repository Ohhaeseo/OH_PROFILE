import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fashionIntro, looks, type Look } from "../data/fashion";

const EASE = [0.16, 1, 0.3, 1] as const;

function LookCard({ look }: { look: Look }) {
  const wide = look.span === "wide";
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className={`group relative ${wide ? "sm:col-span-2" : ""}`}
    >
      <div className="relative overflow-hidden bg-[#1b1a18]">
        <img
          src={look.image}
          alt={look.title}
          loading="lazy"
          className={`w-full object-cover grayscale-[0.15] transition-all duration-[1.3s] ease-out group-hover:scale-[1.05] group-hover:grayscale-0 ${
            wide ? "aspect-[16/10]" : "aspect-[4/5]"
          }`}
        />
        {/* 인덱스 */}
        <span className="absolute left-4 top-3 font-display text-2xl text-bone/85 mix-blend-difference">
          {look.id}
        </span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-grotesk text-sm font-semibold uppercase tracking-wide text-bone">
          {look.title}
        </span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-ash">
          {look.meta}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export function Fashion() {
  return (
    <main className="min-h-screen bg-[#100f0e] text-bone">
      {/* ───────── HERO (full-bleed dark) ───────── */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <motion.img
          src={fashionIntro.hero}
          alt=""
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 w-full px-5 pb-14 sm:px-9 sm:pb-20">
          <div className="mx-auto max-w-[1500px]">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/70"
            >
              <span className="h-px w-10 bg-bone/50" />
              {fashionIntro.kicker} · OH HAESEO
            </motion.p>

            <h1 className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
                className="block font-display text-[24vw] leading-[0.82] tracking-tight text-bone sm:text-[clamp(7rem,17vw,17rem)]"
              >
                WARDROBE
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-bone/75 sm:text-base"
            >
              {fashionIntro.lead}
            </motion.p>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-bone/50 sm:block"
        >
          Scroll ↓
        </motion.span>
      </section>

      {/* ───────── MANIFESTO ───────── */}
      <section className="px-5 py-28 sm:px-9 sm:py-40">
        <div className="mx-auto max-w-[1500px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="max-w-4xl font-display text-[12vw] leading-[0.95] text-bone sm:text-[clamp(3rem,7vw,7rem)]"
          >
            {fashionIntro.manifesto}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed text-ash"
          >
            {fashionIntro.manifestoSub}
          </motion.p>
        </div>
      </section>

      {/* ───────── LOOKBOOK ───────── */}
      <section className="px-5 pb-28 sm:px-9 sm:pb-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
            <span className="font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-bone">
              Lookbook
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-ash">
              2025 — 2026 · {looks.length} Looks
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {looks.map((l) => (
              <LookCard key={l.id} look={l} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── OUTRO ───────── */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-9">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-3xl uppercase text-bone sm:text-4xl">
            Back to building.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-[13px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-[#100f0e]"
          >
            ← Developer Portfolio
          </Link>
        </div>
        <p className="mx-auto mt-12 max-w-[1500px] text-[11px] uppercase tracking-[0.25em] text-ash">
          오해서 · OH HAESEO — Off Duty
        </p>
      </section>
    </main>
  );
}
