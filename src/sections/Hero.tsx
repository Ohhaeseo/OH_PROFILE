import { motion } from "framer-motion";
import { profile } from "../data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden bg-cream"
    >
      {/* 배경 워터마크 대형 이름 */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="pointer-events-none absolute top-[20%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[26vw] leading-none tracking-tight text-sand/70 sm:top-[16%] sm:text-[20vw]"
      >
        OH HAESEO
      </motion.span>

      {/* 상단 에디토리얼 라벨 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-[16%] left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-caramel sm:flex"
      >
        <span className="h-px w-8 bg-caramel/50" />
        Developer · Maker
        <span className="h-px w-8 bg-caramel/50" />
      </motion.div>

      {/* 듀오톤 누끼 포트레이트 */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/profile-duotone.png`}
        alt="오해서"
        initial={{ opacity: 0, y: 40, scale: 1.02 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        className="relative z-10 h-[66vh] max-h-[760px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(74,58,44,0.25)] sm:h-[72vh]"
      />

      {/* 이름 오버레이 (포트레이트 하단에 겹침) */}
      <div className="pointer-events-none absolute bottom-[11%] left-0 right-0 z-20 text-center sm:bottom-[14%]">
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.9 }}
            className="block whitespace-nowrap font-serif text-[19vw] leading-[0.9] tracking-tight text-caramel mix-blend-multiply sm:text-[clamp(5rem,11vw,11rem)]"
          >
            {profile.name}
          </motion.span>
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-2 block text-[11px] uppercase tracking-[0.45em] text-coffee sm:text-[13px]"
        >
          {profile.nameEn}
        </motion.span>
      </div>

      {/* 하단 역할 + 스크롤 큐 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-0 right-0 z-20 flex items-end justify-between px-5 text-[11px] text-mocha sm:px-9"
      >
        <span className="max-w-[40%] leading-relaxed">{profile.roleLine}</span>
        <a
          href="#about"
          className="pointer-events-auto flex flex-col items-center gap-2 uppercase tracking-[0.3em]"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-7 w-px bg-mocha/50"
          />
        </a>
        <span className="hidden max-w-[40%] text-right leading-relaxed sm:block">
          {profile.school}
        </span>
      </motion.div>
    </section>
  );
}
