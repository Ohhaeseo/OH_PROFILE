import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const gradeStats = [
  { label: "총 평점 평균", value: "3.71", note: "누적 GPA" },
  { label: "총 취득 학점", value: "104", note: "졸업요구 123학점 중 이수" },
  { label: "전공 이수", value: "69", note: "전필 33 · 전선 36" },
];

const scholarships = [
  {
    term: "2024-1",
    title: "면학장학금 · 경진대회장학금",
  },
  {
    term: "2024-2",
    title: "재학생성적우수 C급(우등) · 면학장학금",
  },
  {
    term: "2025-1",
    title: "부학생회장 봉사장학금 · 면학/경진대회장학금",
  },
  {
    term: "2025-2",
    title: "부학생회장 봉사장학금 · 경진대회장학금",
  },
];

const A = `${import.meta.env.BASE_URL}assets/records`;

const evidenceDocs = [
  {
    id: "grade-summary",
    title: "성적 및 이수 학점",
    label: "Grade Proof",
    src: `${A}/grade-summary.webp`,
    desc: "총취득학점 104 · 총평점평균 3.71",
  },
  {
    id: "scholarship-2024-1",
    title: "2024-1 장학",
    label: "Scholarship",
    src: `${A}/scholarship-2024-1.webp`,
    desc: "면학장학금 · 경진대회장학금",
  },
  {
    id: "scholarship-2024-2",
    title: "2024-2 장학",
    label: "Scholarship",
    src: `${A}/scholarship-2024-2.webp`,
    desc: "성적우수 C급(우등) · 면학장학금",
  },
  {
    id: "scholarship-2025-1",
    title: "2025-1 장학",
    label: "Scholarship",
    src: `${A}/scholarship-2025-1.webp`,
    desc: "부학생회장 봉사 · 면학/경진대회",
  },
  {
    id: "scholarship-2025-2",
    title: "2025-2 장학",
    label: "Scholarship",
    src: `${A}/scholarship-2025-2.webp`,
    desc: "부학생회장 봉사 · 경진대회",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

export function AcademicRecord() {
  const [activeDocIndex, setActiveDocIndex] = useState<number | null>(null);
  const activeDoc = activeDocIndex === null ? null : evidenceDocs[activeDocIndex];

  const showPrevDoc = () => {
    setActiveDocIndex((current) =>
      current === null ? current : (current - 1 + evidenceDocs.length) % evidenceDocs.length,
    );
  };

  const showNextDoc = () => {
    setActiveDocIndex((current) =>
      current === null ? current : (current + 1) % evidenceDocs.length,
    );
  };

  useEffect(() => {
    if (activeDocIndex === null) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDocIndex(null);
      if (event.key === "ArrowLeft") showPrevDoc();
      if (event.key === "ArrowRight") showNextDoc();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeDocIndex]);

  return (
    <section id="records" className="relative bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          {...fadeIn}
          className="mb-8 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel"
        >
          <span className="h-px w-10 bg-caramel/60" />
          Records · 성적과 장학
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div {...fadeIn}>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full overflow-hidden rounded-[2rem] border border-sand bg-espresso p-5 text-cream shadow-[0_34px_90px_-60px_rgba(43,33,26,0.86)] sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-5 border-b border-cream/10 pb-6">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-mocha">
                    Scholarship Timeline
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
                    장학 수혜 기록
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.16 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid gap-4 py-5 sm:grid-cols-[6rem_1fr] sm:items-center"
                  >
                    <span className="font-display text-3xl leading-none text-caramel">
                      {item.term}
                    </span>
                    <p className="text-[14px] leading-relaxed text-sand">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-5 rounded-2xl border border-cream/10 bg-white/[0.045] p-4 text-[12.5px] leading-relaxed text-cream/65">
                성적증명 및 장학수혜 확인서 기준으로 정리했으며, 포트폴리오에는 확인에 필요한 성과 정보만 노출했습니다.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="rounded-[2rem] border border-sand bg-cream p-5 shadow-[0_34px_80px_-66px_rgba(74,58,44,0.72)] sm:p-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-caramel">
                Evidence Cards
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-espresso sm:text-4xl">
                PDF 자료도 작게나마
                <br />
                함께 확인할 수 있게.
              </h3>
              <p className="mt-5 max-w-md text-[13.5px] leading-loose text-coffee">
                성적증명서와 장학수혜 확인서에서 필요한 영역만 이미지로 담았습니다. 개인정보 영역은 포트폴리오 공개를 고려해 가렸고, 카드를 누르면 크게 볼 수 있습니다.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {evidenceDocs.map((doc, index) => (
                <motion.button
                  key={doc.id}
                  type="button"
                  layoutId={`evidence-${doc.id}`}
                  onClick={() => setActiveDocIndex(index)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group min-w-0 rounded-[1.15rem] border border-sand bg-linen/70 p-2 text-left shadow-[0_24px_58px_-44px_rgba(74,58,44,0.76)] transition-colors hover:bg-cream"
                  aria-label={`${doc.title} 증빙 크게 보기`}
                >
                  <div className="overflow-hidden rounded-[0.9rem] bg-white ring-1 ring-white/80">
                    <img
                      src={doc.src}
                      alt={doc.title}
                      loading="lazy"
                      className="aspect-[1.55/1] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-3">
                    <p className="type-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-caramel">
                      {doc.label}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-espresso">
                      {doc.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeDoc && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-espresso/72 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDocIndex(null)}
          >
            <motion.div
              layoutId={`evidence-${activeDoc.id}`}
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-cream/20 bg-cream p-3 shadow-[0_50px_140px_-55px_rgba(0,0,0,0.95)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveDocIndex(null)}
                className="absolute right-5 top-5 z-10 rounded-full bg-espresso px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] transition-colors hover:bg-caramel"
              >
                Close
              </button>
              <div className="relative overflow-hidden rounded-[1.2rem] bg-linen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeDoc.id}
                    src={activeDoc.src}
                    alt={activeDoc.title}
                    initial={{ opacity: 0, x: 70, scale: 0.985 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -70, scale: 0.985 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="max-h-[78vh] w-full object-contain"
                  />
                </AnimatePresence>

                <button
                  type="button"
                  onClick={showPrevDoc}
                  className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-espresso/10 bg-cream/88 text-xl text-espresso shadow-[0_20px_45px_-30px_rgba(0,0,0,0.8)] backdrop-blur transition-all hover:-translate-x-1 hover:bg-espresso hover:text-cream"
                  aria-label="이전 증빙 보기"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNextDoc}
                  className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-espresso/10 bg-cream/88 text-xl text-espresso shadow-[0_20px_45px_-30px_rgba(0,0,0,0.8)] backdrop-blur transition-all hover:translate-x-1 hover:bg-espresso hover:text-cream"
                  aria-label="다음 증빙 보기"
                >
                  →
                </button>
              </div>
              <div className="px-3 pb-3 pt-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
                      {activeDoc.label}
                    </p>
                    <h4 className="mt-1 font-serif text-2xl text-espresso">
                      {activeDoc.title}
                    </h4>
                    <p className="mt-1 text-[13px] text-coffee">
                      {activeDoc.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {evidenceDocs.map((doc, index) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setActiveDocIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeDocIndex
                            ? "w-7 bg-caramel"
                            : "w-2.5 bg-sand hover:bg-mocha"
                        }`}
                        aria-label={`${doc.title} 보기`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
