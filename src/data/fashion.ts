// ──────────────────────────────────────────────────────────────
// 옷(스타일) 포트폴리오 데이터 — 다크 에디토리얼.
// 사진 교체/추가: public/assets/fashion/ 에 넣고 image 경로만 바꾸면 됩니다.
// ──────────────────────────────────────────────────────────────

const A = `${import.meta.env.BASE_URL}assets/fashion`;

export const fashionIntro = {
  kicker: "OFF THE CLOCK",
  title: "WARDROBE",
  lead: "화면을 설계하지 않는 시간엔, 나를 설계한다.",
  manifesto: "디테일은 거짓말을 하지 않는다.",
  manifestoSub:
    "톤, 실루엣, 질감. 코드처럼 옷도 결국 디테일의 합으로 완성된다고 믿는다. 브라운으로 정돈된 개발자의 시간 너머, 이곳은 조금 더 어둡고 솔직한 취향의 공간이다.",
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
