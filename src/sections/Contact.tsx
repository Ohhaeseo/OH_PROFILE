import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-espresso py-28 text-cream sm:py-40"
    >
      {/* 은은한 브라운 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #a6724b 0%, rgba(166,114,75,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 text-center sm:px-8">
        <Reveal className="mb-7 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.32em] text-caramel">
          Vision 2026
        </Reveal>

        <Reveal>
          <h2 className="mx-auto max-w-4xl font-serif text-[10vw] leading-[1.05] tracking-tight sm:text-[clamp(2.5rem,6vw,5.5rem)]">
            즐거움을 주는 경험,
            <br />
            <span className="text-mocha">견고한 소프트웨어.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-cream/70">
            다양한 기술적 도전을 넘어, 사용자의 경험을 설계하는 개발자로
            성장하겠습니다. 함께 만들고 싶은 이야기가 있다면 언제든 연락 주세요.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -3 }}
              className="rounded-full bg-cream px-8 py-3.5 text-[14px] font-medium text-espresso transition-colors hover:bg-caramel hover:text-cream"
            >
              {profile.email}
            </motion.a>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="rounded-full border border-cream/30 px-8 py-3.5 text-[14px] text-cream transition-colors hover:border-caramel hover:text-caramel"
            >
              {profile.githubLabel} ↗
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-cream/50">
            <span>{profile.name} · OH HAESEO</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span>{profile.school}</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span>{profile.phone}</span>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-16 font-serif text-2xl text-cream/80">감사합니다.</p>
        </Reveal>
      </div>
    </section>
  );
}
