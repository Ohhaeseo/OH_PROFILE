// ──────────────────────────────────────────────────────────────
// 옷(스타일) 포트폴리오 데이터 — 다크 에디토리얼.
// 사진 교체/추가: public/assets/fashion/ 에 넣고 image 경로만 바꾸면 됩니다.
// ──────────────────────────────────────────────────────────────

const A = `${import.meta.env.BASE_URL}assets/fashion`;

export const fashionIntro = {
  kicker: "OFF THE CLOCK",
  title: "WARDROBE",
  lead: "평소 즐겨 입는 옷과 분위기를 정리한 개인 스타일 아카이브입니다.",
  manifesto: "크게 꾸미기보다, 자주 손이 가는 옷을 담백하게 남깁니다.",
  manifestoSub:
    "검정, 카키, 버건디, 넓은 실루엣처럼 자주 입는 톤과 형태를 중심으로 기록했습니다. 개발 포트폴리오와는 다른, 조금 더 개인적인 페이지입니다.",
  hero: `${A}/fashion-1.jpg`,
};

export type Look = {
  id: string;
  image: string;
  title: string;
  meta: string;
  span: "tall" | "wide" | "reg";
};

export const looks: Look[] = [
  { id: "01", image: `${A}/fashion-2.jpg`, title: "Layered Black", meta: "Scarf · Cargo · Cap", span: "reg" },
  { id: "02", image: `${A}/fashion-3.jpg`, title: "Utility Olive", meta: "Skirt Layer · Boots", span: "reg" },
  { id: "03", image: `${A}/fashion-4.jpg`, title: "Back View", meta: "Olive Zip · Superstar", span: "reg" },
  { id: "04", image: `${A}/fashion-5.jpg`, title: "Camo Bomber", meta: "Camo · Wide Pants", span: "reg" },
  { id: "05", image: `${A}/fashion-6.jpg`, title: "Quiet Burgundy", meta: "Knit · Charcoal", span: "reg" },
  { id: "06", image: `${A}/fashion-1.jpg`, title: "Concrete Mood", meta: "Check Scarf · Beige", span: "wide" },
];
