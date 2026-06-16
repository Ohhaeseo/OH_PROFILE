import { useEffect } from "react";
import Lenis from "lenis";

/** 전역 부드러운 스크롤. reduced-motion 사용자에겐 적용하지 않음. */
export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // 스크린샷 검증용: ?static 이면 Lenis 비활성(네이티브 앵커 스크롤 허용)
    const staticMode = window.location.search.includes("static");
    if (reduce || staticMode) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as unknown as { __portfolioLenis?: Lenis }).__portfolioLenis =
      lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // 앵커 클릭 시 부드럽게 이동
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a[href^='#']");
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: 0 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      delete (window as unknown as { __portfolioLenis?: Lenis })
        .__portfolioLenis;
      lenis.destroy();
    };
  }, []);
}
