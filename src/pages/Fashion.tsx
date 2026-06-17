import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { fashionIntro, looks, type Look } from "../data/fashion";

const EASE = [0.16, 1, 0.3, 1] as const;

function EntryPull() {
  return (
    <motion.div
      aria-hidden
      initial={{ clipPath: "circle(0% at 86% 8%)", opacity: 1 }}
      animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 0 }}
      transition={{ duration: 1.15, ease: EASE }}
      className="pointer-events-none fixed inset-0 z-[80] bg-[#080706]"
    />
  );
}

function MovingWord({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["18vw", "-18vw"] : ["-18vw", "18vw"],
  );

  return (
    <div ref={ref} className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 overflow-hidden">
      <motion.span
        style={{ x }}
        className="block whitespace-nowrap font-display text-[26vw] uppercase leading-none text-bone/[0.09] mix-blend-difference"
      >
        {text} {text}
      </motion.span>
    </div>
  );
}

function LookCard({ look, index }: { look: Look; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 54, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.95, ease: EASE, delay: (index % 3) * 0.05 }}
      className="group relative grid min-h-[96svh] items-center overflow-hidden border-t border-white/10 py-20 lg:grid-cols-[0.85fr_1fr] lg:gap-16"
    >
      <MovingWord text={look.title.replaceAll(" ", "")} reverse={reverse} />
      <div className={`relative z-10 ${reverse ? "lg:order-2" : ""}`}>
        <motion.div
          whileHover={{ y: -10, rotate: reverse ? 0.4 : -0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-[2rem] bg-[#1b1a18] shadow-[0_50px_120px_-70px_rgba(0,0,0,0.9)]"
        >
        <img
          src={look.image}
          alt={look.title}
          loading="lazy"
          className="h-[72svh] w-full object-cover object-center grayscale-[0.08] transition-all duration-[1.4s] ease-out group-hover:scale-[1.045] group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/52 via-black/5 to-transparent" />
        </motion.div>
        <span className="absolute right-7 top-7 z-10 font-display text-5xl text-bone/90 mix-blend-difference">
          {look.id}
        </span>
      </div>
      <figcaption className={`relative z-30 max-w-xl ${reverse ? "lg:order-1" : ""}`}>
          <span className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.84] text-bone">
            {look.title}
          </span>
          <span className="mt-7 block max-w-[360px] text-[12px] uppercase tracking-[0.26em] text-bone/58">
            {look.meta}
          </span>
          <p className="mt-8 border-l border-bone/20 pl-5 text-[15px] leading-[1.8] text-ash">
            옷의 실루엣과 색감이 먼저 보이도록 크게 두고, 디테일은 천천히 따라오게 구성했습니다.
          </p>
      </figcaption>
    </motion.figure>
  );
}

export function Fashion() {
  return (
    <main className="min-h-screen bg-[#080706] text-bone">
      <EntryPull />

      <section className="relative flex min-h-[112svh] items-end overflow-hidden">
        <motion.img
          src={fashionIntro.hero}
          alt=""
          aria-hidden
          initial={{ scale: 1.08, opacity: 0.35 }}
          animate={{ scale: 1, opacity: 0.82 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.92)_0%,rgba(8,7,6,0.58)_42%,rgba(8,7,6,0.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-black/20" />

        <span
          aria-hidden
          className="pointer-events-none absolute -left-[3vw] top-[13%] font-display text-[22vw] uppercase leading-none text-bone/[0.08]"
        >
          HAESEO
        </span>

        <div className="relative z-10 w-full px-5 pb-20 sm:px-9 sm:pb-28">
          <div className="mx-auto max-w-[1500px]">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-bone/75"
            >
              <span className="h-px w-10 bg-bone/50" />
              {fashionIntro.kicker} · OH HAESEO
            </motion.p>
            <h1 className="overflow-hidden">
              <motion.span
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease: EASE, delay: 0.58 }}
                className="block font-display text-[18vw] uppercase leading-[0.78] text-bone sm:text-[clamp(8rem,17vw,18rem)]"
              >
                {fashionIntro.title}
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.95 }}
              className="mt-8 grid gap-5 sm:grid-cols-[minmax(0,520px)_auto]"
            >
              <p className="border-l border-bone/25 pl-5 text-[15px] leading-relaxed text-bone/82 sm:text-base">
                {fashionIntro.lead}
              </p>
              <p className="max-w-sm text-[12px] uppercase tracking-[0.24em] text-bone/55 sm:self-end">
                Daily fit archive / calm tones / oversized shape
              </p>
            </motion.div>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-bone/55 sm:block"
        >
          Scroll ↓
        </motion.span>
      </section>

      <section className="px-5 py-24 sm:px-9 sm:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="font-display text-[14vw] uppercase leading-[0.86] text-bone sm:text-[clamp(4.5rem,9vw,9rem)]"
          >
            Looks
            <br />
            I Wear.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="max-w-2xl text-[16px] leading-[1.9] text-ash sm:text-[18px]"
          >
            {fashionIntro.manifesto}
            <br />
            {fashionIntro.manifestoSub}
          </motion.p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-9 sm:pb-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
            <span className="font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-bone">
              Lookbook
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-ash">
              2025 · 2026 · {looks.length} Looks
            </span>
          </div>

          <div className="space-y-0">
            {looks.map((look, index) => (
              <LookCard key={look.id} look={look} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 sm:px-9">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-4xl uppercase leading-none text-bone sm:text-6xl">
            Back to portfolio.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-[13px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-[#100f0e]"
          >
            Developer Portfolio
          </Link>
        </div>
        <p className="mx-auto mt-12 max-w-[1500px] text-[11px] uppercase tracking-[0.25em] text-ash">
          오해서 · OH HAESEO · Off Duty
        </p>
      </section>
    </main>
  );
}
