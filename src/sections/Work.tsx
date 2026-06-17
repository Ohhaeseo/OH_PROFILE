import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, sideWorks, type Project } from "../data/projects";
import { Reveal } from "../components/Reveal";

type SubProject = {
  num: string;
  title: string;
  subtitle: string;
  meta: string;
  desc: string;
  tags: string[];
  cover: string;
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-mocha/40 px-3 py-1 text-[11px] tracking-wide text-coffee">
      {children}
    </span>
  );
}

function imageClassName(num: string) {
  const preserveFullImage = ["04", "05", "08"].includes(num);

  return preserveFullImage
    ? "warm-screenshot aspect-[16/10] w-full object-contain object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
    : "warm-screenshot aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]";
}

function MainProject({ p }: { p: Project }) {
  return (
    <div
      id={`project-${p.id}`}
      className="grid min-h-[78vh] scroll-mt-24 items-center gap-10 border-t border-sand py-20 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal>
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
              className={imageClassName(p.num)}
            />
          </div>
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

      <div>
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
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <Link
            to={`/projects/${p.id}`}
            state={{ returnTo: `#project-${p.id}` }}
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
            className="mt-7 inline-flex rounded-full bg-caramel px-5 py-2.5 text-[12px] font-semibold tracking-wide text-cream shadow-[0_18px_40px_-24px_rgba(111,75,43,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
          >
            Case Study 보기
          </Link>
        </Reveal>
      </div>
    </div>
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

  return (
    <Reveal>
      <section className="grid min-h-[72vh] items-center gap-10 border-t border-sand py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`group overflow-hidden rounded-[1.75rem] border border-sand bg-sand/45 p-3 shadow-[0_36px_80px_-44px_rgba(74,58,44,0.55)] ${
            flip ? "lg:order-2" : ""
          }`}
        >
          <div className="overflow-hidden rounded-2xl bg-cream">
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className={imageClassName(project.num)}
            />
          </div>
        </motion.div>

        <div className={flip ? "lg:order-1" : ""}>
          <span className="font-serif text-5xl text-mocha/55">
            {project.num}
          </span>
          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.28em] text-caramel">
            Sub Project
          </p>
          <h3 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-espresso sm:text-6xl">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] text-coffee">{project.subtitle}</p>
          <p className="mt-3 text-[12px] text-mocha">{project.meta}</p>
          <p className="mt-7 max-w-2xl text-[15px] leading-[1.85] text-coffee">
            {project.desc}
          </p>
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
          Project Rooms 02-04
        </Reveal>

        <div className="space-y-4">
          {mainProjects.map((p) => (
            <MainProject key={p.id} p={p} />
          ))}
        </div>

        <Reveal className="mt-24 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel sm:mt-32">
          <span className="h-px w-10 bg-caramel/60" />
          그 외 프로젝트
        </Reveal>

        <div className="mt-8">
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
