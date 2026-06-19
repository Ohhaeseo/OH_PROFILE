import { motion } from "framer-motion";
import { profile, about, values } from "../data/profile";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="mb-14 flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-caramel">
          <span className="h-px w-10 bg-caramel/60" />
          Introduction · 소개
        </Reveal>

        <div className="grid gap-12 border-t border-sand pt-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* 왼쪽: 스티키 듀오톤 포트레이트 */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-[380px]"
            >
              <div className="flex items-end justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-sand to-linen shadow-[0_30px_80px_-30px_rgba(74,58,44,0.45)]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/profile-duotone.png`}
                  alt="오해서"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain object-bottom"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between px-1">
                <span className="font-serif text-xl text-espresso">
                  {profile.name} · {profile.nameEn}
                </span>
              </div>
              <p className="px-1 text-[12.5px] text-mocha">{profile.school}</p>
            </motion.div>
          </div>

          {/* 오른쪽: 소개 텍스트 */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="whitespace-pre-line font-serif-ko text-2xl leading-snug text-espresso sm:text-[2.1rem] sm:leading-snug">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-9 space-y-5 text-[15px] leading-relaxed text-coffee sm:text-base">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            {/* 부학생회장 — 강조 없이 끝에 살짝 */}
            <Reveal delay={0.1}>
              <p className="mt-10 border-t border-sand pt-6 text-[13px] leading-relaxed text-mocha">
                그 외 · 미디어소프트웨어학과 26대 부학생회장으로 학과 활동을 함께
                했습니다.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 가치관 4가지 */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
