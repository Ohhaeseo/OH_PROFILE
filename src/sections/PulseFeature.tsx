import { motion } from "framer-motion";
import { pulse, contributions, type Contribution } from "../data/pulse";
import { Reveal } from "../components/Reveal";

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
    <section id="pulse" className="relative bg-cream pt-28 pb-8 sm:pt-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-9">
        {/* 헤더 */}
        <Reveal className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          {pulse.eyebrow}
        </Reveal>

        <div className="mt-8 grid items-end gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-[19vw] leading-[0.86] tracking-tight text-espresso sm:text-[clamp(5rem,13vw,12rem)]">
              {pulse.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pb-3">
            <p className="text-[15px] text-coffee sm:text-base">
              {pulse.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pulse.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-mocha/40 px-3 py-1 text-[11px] tracking-wide text-coffee"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 대형 커버 */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-sand bg-sand/40 p-3 shadow-[0_50px_110px_-50px_rgba(74,58,44,0.55)]">
            <img
              src={pulse.cover}
              alt="PULSE 랜딩"
              className="warm-screenshot aspect-[16/9] w-full rounded-[1.4rem] object-cover object-top"
            />
          </div>
        </Reveal>

        {/* 개요 + 루프 */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-serif-ko text-2xl leading-snug text-espresso sm:text-[1.7rem]">
              {pulse.tagline}
            </p>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-coffee lg:col-span-6 lg:col-start-7">
            {pulse.overview.map((p, i) => (
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

        {/* 기술 파이프라인 */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-[1.75rem] border border-sand bg-white/60 p-5 shadow-[0_40px_90px_-50px_rgba(74,58,44,0.45)] sm:p-8">
            <img
              src={pulse.pipeline}
              alt="PULSE 기술 아키텍처 파이프라인"
              loading="lazy"
              className="mx-auto w-full max-w-[920px]"
            />
            <p className="mt-4 text-center text-[12px] text-mocha">
              React · Spring Boot · FastAPI로 이어지는 분석–생성–렌더링 파이프라인
            </p>
          </div>
        </Reveal>

        {/* My Part */}
        <Reveal className="mt-24 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          My Part — 내가 맡은 핵심 파트
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl font-serif text-2xl text-espresso sm:text-3xl">
            영상 생성 로직 · 인플루언서 매칭 · 로그인/회원가입
          </p>
        </Reveal>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {contributions.map((c, i) => (
            <ContributionBlock key={c.no} c={c} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
