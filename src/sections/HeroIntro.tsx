import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { profile, about, values } from "../data/profile";
import { useMediaQuery } from "../lib/useMediaQuery";
import { Reveal } from "../components/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;
const PORTRAIT = `${import.meta.env.BASE_URL}assets/profile-duotone.png`;

/* ───────────────── 가치관 그리드 (공통) ───────────────── */
function Values() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 sm:pb-36">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal
            key={v.title}
            delay={i * 0.06}
            className="group bg-cream p-7 transition-colors duration-500 hover:bg-linen"
          >
            <span className="font-serif text-3xl text-mocha/70 transition-colors duration-500 group-hover:text-caramel">
              0{i + 1}
            </span>
            <h3 className="mt-6 text-lg font-semibold text-espresso">
              {v.title}
            </h3>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-caramel">
              {v.en}
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-coffee">
              {v.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ───────────────── 소개 텍스트 (공통) ───────────────── */
function IntroText() {
  return (
    <>
      <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-caramel">
        <span className="h-px w-8 bg-caramel/60" />
        Introduction
      </p>
      <p className="whitespace-pre-line font-serif-ko text-2xl leading-snug text-espresso sm:text-[1.9rem] sm:leading-snug">
        {about.lead}
      </p>
      <div className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-coffee">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}

/* ───────────────── 데스크탑: 스크롤 연동 트래블 ───────────────── */
function DesktopStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 중앙 큰 사진 → 왼쪽 아래로 이동 + 축소
  const x = useTransform(scrollYProgress, [0, 0.75], ["0vw", "-30vw"]);
  const y = useTransform(scrollYProgress, [0, 0.75], ["0vh", "6vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.64]);

  // 히어로 이름/라벨은 사라지고
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  // 오른쪽 소개가 나타남
  const introOpacity = useTransform(scrollYProgress, [0.34, 0.62], [0, 1]);
  const introX = useTransform(scrollYProgress, [0.34, 0.62], [56, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.78], [0, 1]);

  return (
    <section id="top" ref={ref} className="relative h-[240vh] bg-cream">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* 배경 워터마크 */}
        <motion.span
          aria-hidden
          style={{ opacity: heroOpacity }}
          className="pointer-events-none absolute top-[16%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[20vw] leading-none tracking-tight text-sand/70"
        >
          OH HAESEO
        </motion.span>

        {/* 상단 라벨 */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute top-[15%] left-1/2 flex -translate-x-1/2 items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-caramel"
        >
          <span className="h-px w-8 bg-caramel/50" />
          Developer · Maker
          <span className="h-px w-8 bg-caramel/50" />
        </motion.div>

        {/* 포트레이트 (스크롤로 이동, 하단 자연스러운 페이드) */}
        <motion.img
          src={PORTRAIT}
          alt="오해서"
          style={{ x, y, scale }}
          className="relative z-10 h-[74vh] w-auto object-contain drop-shadow-[0_30px_60px_rgba(74,58,44,0.22)] [mask-image:linear-gradient(to_bottom,#000_66%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_66%,transparent_96%)]"
        />

        {/* 이름 오버레이 (페이드아웃) */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="pointer-events-none absolute bottom-[9%] left-0 right-0 z-20 text-center"
        >
          <span className="block font-serif text-[clamp(5rem,11vw,11rem)] leading-[0.9] tracking-tight text-caramel [text-shadow:0_2px_34px_rgba(244,238,230,0.9)]">
            {profile.name}
          </span>
          <span className="mt-3 block text-[13px] uppercase tracking-[0.45em] text-coffee">
            {profile.nameEn}
          </span>
        </motion.div>

        {/* 오른쪽 소개 (페이드인) */}
        <motion.div
          style={{ opacity: introOpacity, x: introX }}
          className="absolute right-[6%] top-0 bottom-0 z-20 my-auto h-fit w-[40%] max-w-[520px]"
        >
          <IntroText />
          <motion.p
            style={{ opacity: captionOpacity }}
            className="mt-8 border-t border-sand pt-5 text-[12.5px] leading-relaxed text-mocha"
          >
            {profile.name} · {profile.nameEn} — {profile.school}
          </motion.p>
        </motion.div>

        {/* 스크롤 큐 */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-mocha"
        >
          Scroll
          <span className="block h-7 w-px bg-mocha/50" />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── 모바일/감속: 정적 스택 ───────────────── */
function StackedStage() {
  return (
    <section id="top" className="bg-cream">
      {/* 히어로 */}
      <div className="relative flex min-h-[92svh] flex-col items-center justify-end overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[26vw] leading-none text-sand/70"
        >
          OH HAESEO
        </span>
        <motion.img
          src={PORTRAIT}
          alt="오해서"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.3 }}
          className="relative z-10 h-[62vh] w-auto object-contain drop-shadow-[0_30px_60px_rgba(74,58,44,0.22)] [mask-image:linear-gradient(to_bottom,#000_64%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_64%,transparent_96%)]"
        />
        <div className="pointer-events-none absolute bottom-[7%] left-0 right-0 z-20 text-center">
          <span className="block font-serif text-[19vw] leading-[0.9] tracking-tight text-caramel [text-shadow:0_2px_24px_rgba(244,238,230,0.9)]">
            {profile.name}
          </span>
          <span className="mt-2 block text-[11px] uppercase tracking-[0.4em] text-coffee">
            {profile.nameEn}
          </span>
        </div>
      </div>

      {/* 소개 */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <Reveal>
          <IntroText />
        </Reveal>
      </div>
    </section>
  );
}

export function HeroIntro() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();
  const useTravel = isDesktop && !reduce;

  return (
    <>
      {useTravel ? <DesktopStage /> : <StackedStage />}
      <div id="about" className="bg-cream pt-4">
        <Values />
      </div>
    </>
  );
}
