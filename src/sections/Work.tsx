import { motion } from "framer-motion";
import { projects, sideWorks, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { ProjectDetailLink } from "../components/ProjectDetailLink";

type SubProject = {
  num: string;
  title: string;
  subtitle: string;
  meta: string;
  desc: string;
  tags: string[];
  cover: string;
};

type ProjectTone = {
  bg: string;
  panel: string;
  accent: string;
  muted: string;
  word: string;
};

const projectTones: Record<string, ProjectTone> = {
  pulse: {
    bg: "#f1f5fc",
    panel: "#fbfdff",
    accent: "#002b7a",
    muted: "#7689bd",
    word: "PULSE",
  },
  "vr-live": {
    bg: "#efeafd",
    panel: "#fbf9ff",
    accent: "#7c5cff",
    muted: "#8b7ab7",
    word: "IMMERSIVE",
  },
  nullnull: {
    bg: "#edf3ff",
    panel: "#f8fbff",
    accent: "#4d5eff",
    muted: "#7081c8",
    word: "NOWCAST",
  },
  "dspy-ad": {
    bg: "#f4eadb",
    panel: "#fffaf2",
    accent: "#9f6a3d",
    muted: "#a87955",
    word: "PROMPT",
  },
};

const subProjectTones: ProjectTone[] = [
  { bg: "#f3eee7", panel: "#fffaf3", accent: "#a6724b", muted: "#a78a72", word: "TRIP" },
  { bg: "#edf0e6", panel: "#fbfcf6", accent: "#7b8a36", muted: "#8c9468", word: "UNITY" },
  { bg: "#eef3f5", panel: "#fbfdfe", accent: "#4f7688", muted: "#78919b", word: "WEB" },
  { bg: "#f5ecef", panel: "#fff8fa", accent: "#a76275", muted: "#a47b86", word: "MEDIA" },
];

const projectLenses: Record<
  string,
  { problem: string; build: string; signal: string }
> = {
  pulse: {
    problem: "리뷰와 홍보가 분리된 외식업 운영",
    build: "분석 서버, 액션 대시보드, 영상 생성 흐름",
    signal: "사장님이 바로 다음 행동을 볼 수 있는 구조",
  },
  "vr-live": {
    problem: "발표와 면접의 긴장감을 실제처럼 연습하기 어려움",
    build: "VR 씬, 음성 기록, 질문 루프, Firebase 저장",
    signal: "연습 이후 피드백까지 남는 실감형 플로우",
  },
  nullnull: {
    problem: "서울 여행 중 혼잡과 날씨로 생기는 헛걸음",
    build: "실시간 도시 데이터 보정과 대안 장소 추천",
    signal: "지금 가도 괜찮은지를 빠르게 판단하는 앱 흐름",
  },
  "dspy-ad": {
    problem: "생성형 영상이 광고 구조 없이 장면만 만드는 문제",
    build: "AIDA 장면 분해, DSPy 프롬프트, CLIP/VQA 평가",
    signal: "광고다운 흐름을 평가 가능한 기준으로 정리",
  },
  tripcode: {
    problem: "여행 전 장소의 실제 분위기를 파악하기 어려움",
    build: "디지털 트윈 탐색과 현장 정보 연결",
    signal: "방문 전 동선과 기대감을 먼저 확인하는 경험",
  },
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-mocha/40 px-3 py-1 text-[11px] tracking-wide text-coffee">
      {children}
    </span>
  );
}

function Keyword({ children, accent }: { children: string; accent: string }) {
  return (
    <span
      className="rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream shadow-[0_14px_28px_-22px_rgba(43,33,26,0.8)]"
      style={{ backgroundColor: accent }}
    >
      {children}
    </span>
  );
}

function LensRail({
  lens,
  accent,
}: {
  lens: { problem: string; build: string; signal: string };
  accent: string;
}) {
  const items = [
    ["Problem", lens.problem],
    ["Build", lens.build],
    ["Signal", lens.signal],
  ];

  return (
    <div className="mt-7 grid overflow-hidden rounded-2xl border border-white/70 bg-white/30 sm:grid-cols-3">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="border-sand/70 p-4 sm:border-l first:sm:border-l-0"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accent }}
          >
            {label}
          </span>
          <p className="mt-2 text-[12.5px] leading-relaxed text-coffee">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

function imageClassName(num: string) {
  const preserveFullImage = ["04", "05", "08"].includes(num);

  return preserveFullImage
    ? "warm-screenshot aspect-[16/10] w-full object-contain object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
    : "warm-screenshot aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]";
}

function MainProject({ p }: { p: Project }) {
  const tone = projectTones[p.id] ?? projectTones["dspy-ad"];
  const keywords = p.keywords ?? p.tags.slice(0, 4);
  const lens = projectLenses[p.id];

  return (
    <article
      id={`project-${p.id}`}
      className="relative grid min-h-[78vh] scroll-mt-24 items-center gap-10 overflow-hidden rounded-[2rem] border border-sand px-5 py-14 shadow-[0_38px_90px_-64px_rgba(74,58,44,0.7)] sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12"
      style={{ backgroundColor: tone.bg }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-8 hidden select-none font-display text-[15vw] leading-none text-espresso/[0.055] lg:block"
      >
        {tone.word}
      </span>
      <Reveal>
        <motion.div
          whileHover={{ y: -10, rotate: -0.35 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group interactive-card relative overflow-hidden rounded-[1.75rem] border border-white/60 p-3 shadow-[0_40px_90px_-44px_rgba(74,58,44,0.58)]"
          style={{ backgroundColor: tone.panel }}
        >
          <span className="accent-spark absolute right-5 top-5 z-10">✦</span>
          <div className="overflow-hidden rounded-2xl bg-cream">
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              className={imageClassName(p.num)}
            />
          </div>
          {p.extraCover && (
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 overflow-hidden rounded-2xl bg-cream ring-1 ring-sand"
            >
              <img
                src={p.extraCover.src}
                alt={p.extraCover.label}
                loading="lazy"
                className="warm-screenshot aspect-[16/10] w-full object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.025]"
              />
              <figcaption className="flex items-start justify-between gap-4 px-4 py-3">
                <span>
                  <span
                    className="block text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: tone.accent }}
                  >
                    {p.extraCover.label}
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-relaxed text-coffee">
                    {p.extraCover.caption}
                  </span>
                </span>
                <span
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: tone.accent }}
                />
              </figcaption>
            </motion.figure>
          )}
          {p.gallery && p.id !== "nullnull" && (
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

      <div className="relative z-10">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span
              className="font-display text-6xl leading-none"
              style={{ color: tone.muted }}
            >
              {p.num}
            </span>
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

        <Reveal delay={0.04}>
          <div className="mt-5 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Keyword key={keyword} accent={tone.accent}>
                {keyword}
              </Keyword>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-mocha">
            <span>{p.year}</span>
            <span className="h-3 w-px bg-mocha/40" />
            <span>{p.role}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[14.5px] leading-[1.85] text-coffee">
            {p.summary}
          </p>
        </Reveal>

        {lens && (
          <Reveal delay={0.12}>
            <LensRail lens={lens} accent={tone.accent} />
          </Reveal>
        )}

        <Reveal delay={0.14}>
          <ul className="mt-6 space-y-2.5">
            {p.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex gap-3 text-[13.5px] text-coffee">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-caramel" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-wrap gap-2">
            {p.tags.slice(0, 5).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <ProjectDetailLink
            to={`/projects/${p.id}`}
            returnTo={`#project-${p.id}`}
          />
        </Reveal>
      </div>
    </article>
  );
}

function SubProjectSection({
  project,
  index,
}: {
  project: SubProject;
  index: number;
}) {
  const flip = index % 2 === 1;
  const tone = subProjectTones[index % subProjectTones.length];
  const keywords = project.tags.slice(0, 3);

  return (
    <Reveal>
      <section
        className="relative grid min-h-[72vh] items-center gap-10 overflow-hidden rounded-[2rem] border border-sand px-5 py-14 shadow-[0_34px_80px_-66px_rgba(74,58,44,0.62)] sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12"
        style={{ backgroundColor: tone.bg }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-10 hidden select-none font-display text-[13vw] leading-none text-espresso/[0.045] lg:block"
        >
          {tone.word}
        </span>
        <motion.div
          whileHover={{ y: -8, rotate: flip ? 0.35 : -0.35 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`group interactive-card relative overflow-hidden rounded-[1.75rem] border border-white/60 p-3 shadow-[0_36px_80px_-44px_rgba(74,58,44,0.55)] ${
            flip ? "lg:order-2" : ""
          }`}
          style={{ backgroundColor: tone.panel }}
        >
          <span className="accent-spark absolute right-5 top-5 z-10">✦</span>
          <div className="overflow-hidden rounded-2xl bg-cream">
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className={imageClassName(project.num)}
            />
          </div>
        </motion.div>

        <div className={`relative z-10 ${flip ? "lg:order-1" : ""}`}>
          <span
            className="font-display text-6xl leading-none"
            style={{ color: tone.muted }}
          >
            {project.num}
          </span>
          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-caramel">
            Sub Project
          </p>
          <h3 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-espresso sm:text-6xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] text-coffee">{project.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Keyword key={keyword} accent={tone.accent}>
                {keyword}
              </Keyword>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-mocha">{project.meta}</p>
          <p className="mt-7 max-w-2xl text-[15px] leading-[1.85] text-coffee">
            {project.desc}
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ["문제", "왜 필요한 작업인지 먼저 정리했습니다."],
              ["흐름", "화면과 데이터가 이어지는 순서를 기준으로 구성했습니다."],
              ["학습", "작게 만들어 보며 다음 프로젝트에 남길 기준을 찾았습니다."],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/70 bg-white/30 p-4"
              >
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: tone.accent }}
                >
                  {label}
                </span>
                <p className="mt-2 text-[12.5px] leading-relaxed text-coffee">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export function ProjectCompass() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => Number(a.num) - Number(b.num));

  return (
    <section
      id="quick-projects"
      className="relative overflow-hidden bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-sand bg-espresso px-5 py-7 text-cream shadow-[0_38px_90px_-58px_rgba(43,33,26,0.9)] sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
              <div>
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-mocha">
                  <span className="h-px w-10 bg-mocha/70" />
                  Quick Jump · 핵심 프로젝트
                </div>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-cream sm:text-5xl">
                  보고 싶은 프로젝트로
                  <br />
                  바로 이동할 수 있게.
                </h2>
                <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-sand">
                  긴 포트폴리오를 처음부터 읽지 않아도 핵심 프로젝트의 문제, 역할, 키워드를 빠르게 확인하고 원하는 위치로 이동할 수 있습니다.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {featured.map((p, index) => {
                  const tone = projectTones[p.id] ?? projectTones["dspy-ad"];
                  const lens = projectLenses[p.id];

                  return (
                    <motion.a
                      key={p.id}
                      href={p.id === "pulse" ? "#projects" : `#project-${p.id}`}
                      whileHover={{ y: -6, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.055] p-5 transition-colors duration-500 hover:bg-white/[0.09]"
                    >
                      <span
                        aria-hidden
                        className="absolute -right-3 -top-4 font-display text-7xl leading-none opacity-10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                        style={{ color: tone.accent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mocha">
                            Main Project {p.num}
                          </span>
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: tone.accent }}
                          />
                        </div>
                        <p className="mt-4 font-serif text-3xl text-cream">
                          {p.title}
                        </p>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-sand">
                          {lens?.problem ?? p.subtitle}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {(p.keywords ?? p.tags).slice(0, 3).map((keyword) => (
                            <span
                              key={keyword}
                              className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-cream"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Work() {
  const mainProjects = projects
    .filter((p) => p.featured && p.id !== "pulse")
    .sort((a, b) => Number(a.num) - Number(b.num));
  const otherProjectItems = projects
    .filter((p) => !p.featured)
    .sort((a, b) => Number(a.num) - Number(b.num));
  const subProjects: SubProject[] = [
    ...otherProjectItems.map((p) => ({
      num: p.num,
      title: p.title,
      subtitle: p.subtitle,
      meta: `${p.year} · ${p.role}`,
      desc: p.summary,
      tags: p.tags,
      cover: p.cover,
    })),
    ...sideWorks.map((s, index) => ({
      num: String(otherProjectItems.length + index + 5).padStart(2, "0"),
      title: s.title,
      subtitle: "학습과 구현 감각을 넓힌 제작 작업",
      meta: "Practice · Craft",
      desc: s.desc,
      tags: s.tags,
      cover: s.cover,
    })),
  ];

  return (
    <section id="work" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-10 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Main Project 02-04
        </Reveal>

        <div className="space-y-8">
          {mainProjects.map((p) => (
            <MainProject key={p.id} p={p} />
          ))}
        </div>

        <Reveal className="mt-24 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel sm:mt-32">
          <span className="h-px w-10 bg-caramel/60" />
          그 외 프로젝트
        </Reveal>

        <div className="mt-8 space-y-8">
          {subProjects.map((project, index) => (
            <SubProjectSection
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
