import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const gradeStats = [
  { label: "총 평점 평균", value: "3.71", note: "누적 GPA" },
  { label: "총 취득 학점", value: "104", note: "졸업요구 123학점 중 이수" },
  { label: "전공 이수", value: "69", note: "전필 33 · 전선 36" },
];

const scholarships = [
  {
    term: "2024-1",
    title: "면학장학금 · 경진대회장학금",
    amount: "675,000원",
  },
  {
    term: "2024-2",
    title: "재학생성적우수 C급(우등) · 면학장학금",
    amount: "2,508,000원",
  },
  {
    term: "2025-1",
    title: "부학생회장 봉사장학금 · 면학/경진대회장학금",
    amount: "1,926,500원",
  },
  {
    term: "2025-2",
    title: "부학생회장 봉사장학금 · 경진대회장학금",
    amount: "1,386,500원",
  },
];

export function AcademicRecord() {
  return (
    <section id="records" className="relative bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-8 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Records · 성적과 장학
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-sand bg-cream p-7 shadow-[0_34px_80px_-66px_rgba(74,58,44,0.72)] sm:p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-caramel">
                Academic Snapshot
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
                꾸준히 쌓아온
                <br />
                학업과 활동의 기록
              </h2>
              <p className="mt-6 max-w-md text-[14px] leading-loose text-coffee">
                전공 학습, 프로젝트 활동, 학과 역할을 병행하며 받은 성적과 장학 수혜 이력을 필요한 정보만 정리했습니다.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {gradeStats.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl border border-sand bg-linen/65 p-5"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mocha">
                      {item.label}
                    </span>
                    <div className="mt-2 flex items-end gap-3">
                      <strong className="font-display text-5xl leading-none text-espresso">
                        {item.value}
                      </strong>
                      <span className="pb-1 text-[12px] text-coffee">
                        {item.note}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full overflow-hidden rounded-[2rem] border border-sand bg-espresso p-5 text-cream shadow-[0_34px_90px_-60px_rgba(43,33,26,0.86)] sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-5 border-b border-cream/10 pb-6">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-mocha">
                    Scholarship Timeline
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
                    총 장학 수혜 6,496,000원
                  </h3>
                </div>
                <span className="rounded-full border border-cream/15 bg-white/[0.06] px-4 py-2 text-[12px] text-sand">
                  2024-1 ~ 2025-2
                </span>
              </div>

              <div className="mt-5 divide-y divide-cream/10">
                {scholarships.map((item, index) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid gap-4 py-5 sm:grid-cols-[6rem_1fr_auto] sm:items-center"
                  >
                    <span className="font-display text-3xl leading-none text-caramel">
                      {item.term}
                    </span>
                    <p className="text-[14px] leading-relaxed text-sand">
                      {item.title}
                    </p>
                    <strong className="text-base text-cream">
                      {item.amount}
                    </strong>
                  </motion.div>
                ))}
              </div>

              <p className="mt-5 rounded-2xl border border-cream/10 bg-white/[0.045] p-4 text-[12.5px] leading-relaxed text-cream/65">
                성적증명 및 장학수혜 확인서 기준으로 정리했으며, 포트폴리오에는 확인에 필요한 성과 정보만 노출했습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
