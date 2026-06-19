import { motion } from "framer-motion";
import { pulse, contributions, type Contribution } from "../data/pulse";
import { Reveal } from "../components/Reveal";
import { ProjectDetailLink } from "../components/ProjectDetailLink";

const pulseTone = {
  bg: "#f1f5fc",
  panel: "#fbfdff",
};

function PulseKeyword({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#002b7a] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-22px_rgba(0,43,122,0.8)]">
      {children}
    </span>
  );
}

function ContributionBlock({ c, flip }: { c: Contribution; flip: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[1.75rem] border border-sand bg-sand/50 p-3 shadow-[0_40px_90px_-40px_rgba(74,58,44,0.5)]"
        >
          <div className="overflow-hidden rounded-2xl bg-cream">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="warm-screenshot aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </Reveal>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-5xl text-mocha/50">{c.no}</span>
            <span className="rounded-full bg-caramel/12 px-3 py-1 text-[12px] font-medium tracking-wide text-caramel ring-1 ring-caramel/30">
              {c.tag}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-5 font-serif text-3xl tracking-tight text-espresso sm:text-4xl">
            {c.title}
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-espresso">
            {c.lead}
          </p>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="mt-6 space-y-4 max-w-xl">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-caramel">
                Why
              </span>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-coffee">
                {c.why}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-caramel">
                How
              </span>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-coffee">
                {c.how}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-6 space-y-2.5 border-t border-sand pt-5">
            {c.points.map((p) => (
              <li key={p} className="flex gap-3 text-[13px] text-coffee">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-caramel" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export function PulseFeature() {
  return (
    <section id="projects" className="relative bg-cream pt-28 pb-8 sm:pt-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-9">
        {/* 헤더 */}
        <Reveal className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Main Project 01
        </Reveal>

        <div
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-sand px-5 py-10 shadow-[0_40px_100px_-70px_rgba(74,58,44,0.7)] sm:px-8 sm:py-14 lg:px-12"
          style={{ backgroundColor: pulseTone.bg }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 top-10 hidden select-none font-display text-[15vw] leading-none text-espresso/[0.05] lg:block"
          >
            PULSE
          </span>
          <div className="relative z-10 grid items-end gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="font-serif text-[19vw] leading-[0.86] tracking-tight text-espresso sm:text-[clamp(5rem,13vw,12rem)]">
                {pulse.title}
              </h2>
            </Reveal>
            <div className="lg:col-span-5 lg:pb-3">
              <p className="text-[15px] text-coffee sm:text-base">
                {pulse.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pulse.keywords.map((keyword) => (
                  <PulseKeyword key={keyword}>{keyword}</PulseKeyword>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {pulse.stack.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-mocha/40 bg-white/35 px-3 py-1 text-[11px] tracking-wide text-coffee"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ProjectDetailLink
                to="/projects/pulse"
                returnTo="#projects"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-[12px] font-semibold tracking-wide text-cream shadow-[0_18px_40px_-24px_rgba(39,31,25,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel active:scale-[0.98]"
              />
            </div>
          </div>

          {/* 대형 커버 */}
          <Reveal className="relative z-10 mt-12">
            <motion.div
              whileHover={{ y: -10, rotate: 0.25 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="interactive-card relative overflow-hidden rounded-[2rem] border border-white/70 p-3 shadow-[0_50px_110px_-54px_rgba(74,58,44,0.58)]"
              style={{ backgroundColor: pulseTone.panel }}
            >
              <span className="accent-spark absolute right-6 top-6 z-10">✦</span>
              <img
                src={pulse.cover}
                alt="PULSE 랜딩"
                className="warm-screenshot aspect-[16/9] w-full rounded-[1.4rem] object-cover object-top"
              />
            </motion.div>
          </Reveal>

        {/* 개요 + 루프 */}
        <div className="relative z-10 mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-serif-ko text-2xl leading-snug text-espresso sm:text-[1.7rem]">
              {pulse.tagline}
            </p>
            <ProjectDetailLink
              to="/projects/pulse"
              returnTo="#projects"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-[12px] font-semibold tracking-wide text-cream shadow-[0_18px_40px_-24px_rgba(39,31,25,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel active:scale-[0.98] lg:hidden"
            />
          </Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-coffee lg:col-span-6 lg:col-start-7">
            {pulse.overview.slice(0, 2).map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-caramel">
                {pulse.loop.map((step, i) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-caramel/10 px-3 py-1.5 ring-1 ring-caramel/25">
                      {step}
                    </span>
                    {i < pulse.loop.length - 1 && (
                      <span className="text-mocha">→</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        </div>

        {/* My Part */}
        <Reveal className="mt-24 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          My Part · 맡은 역할과 구현 흐름
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl font-serif text-2xl text-espresso sm:text-3xl">
            영상 생성 로직 · 인플루언서 매칭 · 로그인/회원가입
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {contributions.slice(0, 2).map((c, i) => (
            <ContributionBlock key={c.no} c={c} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
