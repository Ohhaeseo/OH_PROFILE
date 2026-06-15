import { motion } from "framer-motion";
import { projects, sideWorks, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-mocha/40 px-3 py-1 text-[11px] tracking-wide text-coffee">
      {children}
    </span>
  );
}

function FeaturedProject({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* 이미지 */}
      <Reveal className={flip ? "lg:order-2" : ""}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[1.75rem] border border-sand bg-sand/60 p-3 shadow-[0_40px_90px_-40px_rgba(74,58,44,0.55)]"
        >
          <div className="overflow-hidden rounded-2xl bg-cream">
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              className="warm-screenshot aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          </div>
          {p.gallery && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {p.gallery.map((g) => (
                <div
                  key={g}
                  className="overflow-hidden rounded-xl bg-cream ring-1 ring-sand"
                >
                  <img
                    src={g}
                    alt=""
                    loading="lazy"
                    className="warm-screenshot aspect-[4/3] w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </Reveal>

      {/* 텍스트 */}
      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-5xl text-mocha/60">{p.num}</span>
            {p.award && (
              <span className="rounded-full bg-caramel/12 px-3 py-1 text-[11px] font-medium tracking-wide text-caramel ring-1 ring-caramel/30">
                {p.award}
              </span>
            )}
          </div>
          <h3 className="mt-4 font-serif text-4xl tracking-tight text-espresso sm:text-5xl">
            {p.title}
          </h3>
          <p className="mt-2 text-[15px] text-coffee">{p.subtitle}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-mocha">
            <span>{p.year}</span>
            <span className="h-3 w-px bg-mocha/40" />
            <span>{p.role}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-coffee">
            {p.summary}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="mt-6 space-y-2.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[13.5px] text-coffee">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-caramel" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function MiniProject({ p }: { p: Project }) {
  return (
    <Reveal className="group">
      <div className="overflow-hidden rounded-2xl border border-sand bg-sand/50 p-2.5 transition-shadow duration-500 hover:shadow-[0_30px_70px_-40px_rgba(74,58,44,0.5)]">
        <div className="overflow-hidden rounded-xl bg-cream">
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className="warm-screenshot aspect-[4/3] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>
      <div className="mt-5 px-1">
        <div className="flex items-baseline justify-between">
          <h4 className="font-serif text-2xl text-espresso">{p.title}</h4>
          <span className="text-[11px] text-mocha">{p.year}</span>
        </div>
        <p className="mt-1 text-[13px] text-coffee">{p.subtitle}</p>
        {p.award && (
          <p className="mt-2 text-[11px] tracking-wide text-caramel">
            ✦ {p.award}
          </p>
        )}
        <p className="mt-3 text-[13px] leading-relaxed text-coffee/90">
          {p.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  // PULSE는 별도 전용 섹션(PulseFeature)에서 다루므로 제외
  const featured = projects.filter((p) => p.featured && p.id !== "pulse");
  const minis = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Selected Work — 그 외 프로젝트
        </Reveal>
        <Reveal>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight text-espresso sm:text-6xl">
            만든 것들, 그리고 그 안의 고민들.
          </h2>
        </Reveal>

        <div className="mt-24 space-y-28 sm:space-y-36">
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-28 grid gap-12 sm:grid-cols-2 sm:gap-x-10">
          {minis.map((p) => (
            <MiniProject key={p.id} p={p} />
          ))}
        </div>

        {/* 학습·역량 증명 소형 작업 */}
        <Reveal className="mt-28 mb-10 text-[12px] uppercase tracking-[0.3em] text-caramel">
          Craft & Study — 역량의 토대
        </Reveal>
        <div id="craft" className="grid gap-8 sm:grid-cols-3">
          {sideWorks.map((s) => (
            <Reveal key={s.title} className="group">
              <div className="overflow-hidden rounded-2xl border border-sand bg-sand/40 p-2 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="overflow-hidden rounded-xl bg-cream">
                  <img
                    src={s.cover}
                    alt={s.title}
                    loading="lazy"
                    className="warm-screenshot aspect-[4/3] w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                  />
                </div>
              </div>
              <h4 className="mt-4 px-1 text-base font-semibold text-espresso">
                {s.title}
              </h4>
              <p className="mt-1.5 px-1 text-[13px] leading-relaxed text-coffee">
                {s.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 px-1">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] text-mocha">
                    #{t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
