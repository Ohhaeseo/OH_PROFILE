import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { profile, about, values } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { useMediaQuery } from "../lib/useMediaQuery";

const EASE = [0.16, 1, 0.3, 1] as const;
const PORTRAIT = `${import.meta.env.BASE_URL}assets/profile-duotone.png`;

const personalInfo = [
  { label: "Born", value: profile.birthDate },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
];

const workStyles = [
  {
    label: "Observe",
    title: "먼저 흐름을 봅니다",
    desc: "기능을 바로 만들기보다 사용자가 어디에서 멈추는지, 데이터가 어디서 끊기는지부터 차분히 확인합니다.",
  },
  {
    label: "Structure",
    title: "복잡한 것을 정리합니다",
    desc: "요구사항, API, 화면 이동, 데이터 모델을 한 번에 보려고 하지 않고 작은 단위로 나누어 연결합니다.",
  },
  {
    label: "Connect",
    title: "백엔드에서 경험까지 이어갑니다",
    desc: "서버가 안정적으로 동작하는 것에 그치지 않고, 분석과 AI 기능이 실제 사용자 행동으로 이어지는 구조를 고민합니다.",
  },
  {
    label: "Refine",
    title: "조금씩 더 나아지게 만듭니다",
    desc: "처음부터 완벽한 답을 내기보다 직접 만들고 확인하면서 기록하고, 다음 버전에서 더 읽기 쉬운 형태로 다듬습니다.",
  },
];

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mocha">
        {label}
      </dt>
      <dd className="text-[14px] font-medium text-espresso sm:text-[16px]">
        {value}
      </dd>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={label === "GitHub" ? "_blank" : undefined}
        rel={label === "GitHub" ? "noreferrer" : undefined}
        className="grid grid-cols-[84px_1fr] items-center gap-4 border-t border-sand py-2 transition-colors duration-300 hover:text-caramel lg:h-full lg:py-0"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="grid grid-cols-[84px_1fr] items-center gap-4 border-t border-sand py-2 lg:h-full lg:py-0">
      {content}
    </div>
  );
}

function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const travel = isDesktop && !reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 0.86, 1], ["0vw", "-36vw", "-36vw"]);
  const y = useTransform(scrollYProgress, [0, 0.86, 1], ["0vh", "-8vh", "-8vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.86, 1], [1, 0.51, 0.51]);
  const portraitOpacity = useTransform(
    scrollYProgress,
    [0, 0.88, 1],
    [1, 1, 0],
  );
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className={`relative bg-cream ${travel ? "h-[220vh]" : "min-h-[100svh]"}`}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.span
          aria-hidden
          style={travel ? { opacity: watermarkOpacity } : undefined}
          initial={travel ? undefined : { opacity: 0, scale: 0.98 }}
          animate={travel ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.15 }}
          className="pointer-events-none absolute top-[19%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[22vw] leading-none tracking-tight text-sand/70"
        >
          OH HAESEO
        </motion.span>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {[
            ["✦", "left-[18%] top-[28%]"],
            ["⌁", "right-[20%] top-[35%]"],
            ["◐", "left-[24%] bottom-[22%]"],
            ["↗", "right-[28%] bottom-[18%]"],
          ].map(([symbol, position], index) => (
            <motion.span
              key={symbol}
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 + index * 0.1 }}
              className={`symbol-drift warm-pill absolute grid h-12 w-12 place-items-center rounded-full text-lg text-caramel ${position}`}
            >
              {symbol}
            </motion.span>
          ))}
        </div>

        <motion.img
          src={PORTRAIT}
          alt="오해서"
          style={travel ? { x, y, scale, opacity: portraitOpacity } : undefined}
          initial={travel ? undefined : { opacity: 0, y: 42, scale: 0.96 }}
          animate={travel ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.35, ease: EASE, delay: 0.25 }}
          className="relative z-10 h-[74vh] w-auto object-contain drop-shadow-[0_30px_60px_rgba(74,58,44,0.22)] [mask-image:linear-gradient(to_bottom,#000_68%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_68%,transparent_96%)]"
        />

        <motion.div
          style={travel ? { opacity: nameOpacity } : undefined}
          initial={travel ? undefined : { opacity: 0, y: 22 }}
          animate={travel ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.65 }}
          className="pointer-events-none absolute bottom-[9.5%] left-0 right-0 z-20 text-center"
        >
          <span className="block text-[13px] uppercase tracking-[0.45em] text-coffee">
            {profile.nameEn}
          </span>
        </motion.div>

        <motion.div
          style={travel ? { opacity: cueOpacity } : undefined}
          initial={travel ? undefined : { opacity: 0 }}
          animate={travel ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center text-mocha"
        >
          <span className="block h-8 w-px bg-mocha/45" />
        </motion.div>
      </div>
    </section>
  );
}

function ProfileStrengths() {
  return (
    <section
      id="about"
      className="relative z-20 bg-cream px-5 pt-8 pb-6 sm:px-9 lg:-mt-[120vh] lg:min-h-screen lg:pt-[7vh]"
    >
        <div className="interactive-card mx-auto max-w-[1120px] rounded-[1.75rem] border border-sand p-5 shadow-[0_35px_100px_-80px_rgba(74,58,44,0.7)]">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-caramel">
              <span className="h-px w-8 bg-caramel/60" />
              Profile
            </div>
            <div className="min-w-0 lg:flex lg:h-[64vh] lg:flex-col">
              <div className="overflow-hidden rounded-[18px] border border-sand bg-linen shadow-[0_30px_100px_-70px_rgba(74,58,44,0.7)]">
                <img
                  src={PORTRAIT}
                  alt="오해서"
                  className="aspect-[4/3.05] w-full object-contain object-bottom"
                />
              </div>
              <div className="mt-3 lg:flex lg:flex-1 lg:flex-col">
                <p className="text-[1.55rem] font-bold tracking-tight text-espresso">
                  오해서 <span className="text-base text-coffee">(OH HAESEO)</span>
                </p>
                <p className="mt-1 text-[12px] text-coffee">
                  Backend · AI Toolkit · Service Flow
                </p>
                <dl className="mt-2 border-b border-sand lg:grid lg:flex-1 lg:grid-rows-5">
                  {personalInfo.map((item) => (
                    <InfoRow key={item.label} {...item} />
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.08 }}
          >
            <div className="min-w-0">
              <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-caramel">
                <span className="h-px w-10 bg-caramel/60" />
                Strengths
              </p>
              <div className="grid h-[64vh] grid-rows-4 overflow-hidden rounded-[1.5rem] border border-sand bg-sand">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="group grid gap-3 border-b border-sand bg-cream p-4 transition-all duration-500 last:border-b-0 hover:bg-linen hover:pl-6 md:grid-cols-[52px_150px_1fr] md:items-center"
                  >
                    <span className="font-serif text-2xl text-mocha/70 transition-colors duration-500 group-hover:text-caramel">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-espresso">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-caramel">
                        {value.en}
                      </p>
                    </div>
                    <p className="text-[13.5px] leading-[1.65] text-coffee">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutWork() {
  return (
    <section className="scroll-mt-48 bg-cream px-5 pt-32 pb-20 sm:px-9 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-caramel">
            <span className="h-px w-10 bg-caramel/60" />
            Introduction
          </p>
          <h2 className="max-w-[860px] font-serif-ko text-[clamp(2rem,2.8vw,3.05rem)] leading-[1.32] tracking-tight text-espresso">
            안정적인 구조 위에 사용자의 행동을 이어 주는 백엔드 개발자가 되고자 합니다.
          </h2>
        </Reveal>

        <div className="mt-9 space-y-10">
          <Reveal delay={0.08}>
            <div className="max-w-4xl space-y-5 text-[15px] leading-[1.9] text-coffee">
              <p>
                좋은 백엔드는 화면 뒤에서 조용히 동작하지만, 서비스의 흐름을
                가장 단단하게 받치는 역할을 한다고 생각합니다. 데이터가
                정확하게 오가고 API가 예측 가능하게 동작하며, 문제가 생겼을 때
                원인을 찾을 수 있는 구조가 중요합니다.
              </p>
              <p>
                저는 기능을 많이 붙이기보다 사용자가 실제로 지나가는 경로를
                먼저 이해하려고 합니다. 필요한 데이터, 서버 로직, 화면의 다음
                행동이 자연스럽게 이어지도록 정리하는 개발자가 되고 싶습니다.
              </p>
              <p>{about.paragraphs[0]}</p>
            </div>
          </Reveal>

          <div className="border-t border-sand">
            <Reveal className="py-5 text-[12px] font-semibold uppercase tracking-[0.34em] text-mocha">
              How I Work
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-sand bg-sand md:grid-cols-4">
              {workStyles.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 0.05}
                  className="group grid min-h-[320px] grid-rows-[72px_30px_64px_1fr] bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-linen"
                >
                  <span className="font-display text-5xl font-bold leading-none text-mocha/55 transition-colors duration-500 group-hover:text-caramel">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="self-end text-[12px] font-semibold uppercase tracking-[0.24em] text-mocha">
                    {item.label}
                  </p>
                  <h3 className="self-start pt-2 text-lg font-semibold leading-snug text-espresso">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-coffee">
                    {item.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroIntro() {
  return (
    <>
      <HeroStage />
      <ProfileStrengths />
      <AboutWork />
    </>
  );
}
