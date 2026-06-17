import { stacks } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function Capabilities() {
  return (
    <section id="stack" className="relative bg-linen py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="mb-4 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
              <span className="h-px w-10 bg-caramel/60" />
              Tech Stack
            </Reveal>
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-espresso sm:text-5xl">
                Full-Stack
                <br />
                &amp; AI Toolkit
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-coffee">
                백엔드를 중심으로 화면, 데이터 분석, 생성형 AI, 콘텐츠 제작까지
                필요한 도구를 프로젝트 흐름에 맞게 사용합니다.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {stacks.map((s, i) => (
              <Reveal
                key={s.label}
                delay={(i % 3) * 0.06}
                className="group interactive-card bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-linen"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-espresso/90 font-serif text-sm text-cream transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-caramel">
                    {s.icon}
                  </span>
                  <h3 className="text-base font-semibold text-espresso">
                    {s.label}
                  </h3>
                </div>
                {s.note && (
                  <p className="mt-3 text-[12px] leading-relaxed text-mocha">
                    {s.note}
                  </p>
                )}
                <ul className="mt-4 space-y-1.5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="text-[13.5px] text-coffee before:mr-2 before:text-caramel before:content-['·']"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
