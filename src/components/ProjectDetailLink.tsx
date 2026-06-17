import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectDetailLink({
  to,
  returnTo,
  className,
}: {
  to: string;
  returnTo: string;
  className?: string;
}) {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const enterProject = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      navigate(to, { state: { returnTo } });
    }, 620);
  };

  return (
    <>
      <button
        type="button"
        onClick={enterProject}
        className={
          className ??
          "group mt-7 inline-flex items-center gap-2 rounded-full bg-caramel px-5 py-2.5 text-[12px] font-semibold tracking-wide text-cream shadow-[0_18px_40px_-24px_rgba(111,75,43,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso active:scale-[0.98]"
        }
      >
        프로젝트 상세보기
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </button>

      <AnimatePresence>
        {leaving && (
          <motion.div
            aria-hidden
            className="fixed inset-0 z-[120] bg-espresso"
            initial={{
              clipPath: "circle(0% at 50% 50%)",
              filter: "blur(10px)",
            }}
            animate={{
              clipPath: "circle(150% at 50% 50%)",
              filter: "blur(0px)",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.62, ease: EASE }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/30"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 9, opacity: 0 }}
              transition={{ duration: 0.62, ease: EASE }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
