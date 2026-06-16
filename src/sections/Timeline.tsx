import { awards, activities, type TimelineItem } from "../data/profile";
import { Reveal } from "../components/Reveal";

// 연도 목록 (최신순)
const years = Array.from(
  new Set([...awards, ...activities].map((t) => t.year))
).sort((a, b) => Number(b) - Number(a));

function AwardCard({ t, align }: { t: TimelineItem; align: "left" | "right" }) {
  return (
    <Reveal
      className={`rounded-2xl border border-sand bg-cream p-4 transition-colors duration-500 hover:bg-linen ${
        align === "left" ? "lg:text-right" : ""
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-2 ${
          align === "left" ? "lg:justify-end" : ""
        }`}
      >
        <h4 className="text-[15px] font-semibold text-espresso">{t.title}</h4>
        {t.award && (
          <span className="whitespace-nowrap rounded-full bg-caramel/12 px-2.5 py-0.5 text-[11px] font-medium text-caramel ring-1 ring-caramel/30">
            {t.award}
          </span>
        )}
      </div>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-coffee">{t.desc}</p>
    </Reveal>
  );
}

function ActivityCard({ t }: { t: TimelineItem }) {
  return (
    <Reveal className="rounded-2xl border border-coffee/20 bg-bark/[0.04] p-4 transition-colors duration-500 hover:bg-bark/[0.08]">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-[15px] font-semibold text-espresso">{t.title}</h4>
        {t.active && (
          <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-caramel/12 px-2.5 py-0.5 text-[11px] font-medium text-caramel ring-1 ring-caramel/30">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-caramel" />
            활동중
          </span>
        )}
      </div>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-coffee">{t.desc}</p>
    </Reveal>
  );
}

function YearRow({ year }: { year: string }) {
  const ya = awards.filter((t) => t.year === year);
  const yc = activities.filter((t) => t.year === year);
  return (
    <div className="relative grid grid-cols-1 items-center gap-5 py-7 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
      {/* 왼쪽: 수상 */}
      <div className="order-2 space-y-3 lg:order-1">
        {ya.map((t) => (
          <AwardCard key={t.title} t={t} align="left" />
        ))}
      </div>

      {/* 중앙: 연도 노드 */}
      <div className="order-1 flex items-center gap-3 lg:order-2 lg:flex-col lg:gap-0">
        <Reveal className="z-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-caramel/30 bg-cream font-serif text-2xl text-espresso shadow-[0_10px_30px_-12px_rgba(74,58,44,0.4)]">
            {year}
          </div>
        </Reveal>
        <span className="text-[11px] uppercase tracking-[0.2em] text-mocha lg:hidden">
          {ya.length ? "수상" : ""}
          {ya.length && yc.length ? " · " : ""}
          {yc.length ? "활동" : ""}
        </span>
      </div>

      {/* 오른쪽: 활동 */}
      <div className="order-3 space-y-3">
        {yc.map((t) => (
          <ActivityCard key={t.title} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="roadmap" className="relative bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-4 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Roadmap · 성장의 기록
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-espresso sm:text-6xl">
              걸어온 길.
            </h2>
          </Reveal>
          {/* 범례 */}
          <Reveal className="flex items-center gap-5 text-[12px] text-coffee">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-caramel" /> 수상
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-coffee/40 bg-bark/10" />{" "}
              활동
            </span>
          </Reveal>
        </div>

        {/* 로드맵 */}
        <div className="relative mt-16">
          {/* 중앙 스파인 (데스크탑) */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sand to-transparent lg:block" />
          {/* 좌측 스파인 (모바일) */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-[39px] w-px bg-gradient-to-b from-transparent via-sand to-transparent lg:hidden" />

          {years.map((y) => (
            <YearRow key={y} year={y} />
          ))}
        </div>
      </div>
    </section>
  );
}
