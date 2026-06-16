export type Project = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  award?: string;
  tags: string[];
  summary: string;
  highlights: string[];
  cover: string;
  gallery?: string[];
  link?: { label: string; href: string };
  featured: boolean;
};

const A = `${import.meta.env.BASE_URL}assets`;

export const projects: Project[] = [
  {
    id: "pulse",
    num: "01",
    title: "PULSE",
    subtitle: "외식업 사장님을 위한 AI 마케팅 자동화 플랫폼",
    year: "2026 · 졸업작품",
    role: "My Part · 영상 생성 로직 · 인플루언서 매칭 · 인증/가입 흐름",
    award: "Main Project",
    tags: ["FastAPI", "Spring Boot", "React", "LLM · VEO", "Google Veo"],
    summary:
      "PULSE는 외식업 사장님이 마케팅을 따로 공부하지 않아도 고객을 이해하고, 홍보 영상을 만들고, 다음 행동을 확인할 수 있도록 설계한 AI 마케팅 자동화 플랫폼입니다. 리뷰와 상권 데이터를 기반으로 고객 인사이트를 만들고, 그 결과를 릴스 제작과 인플루언서 매칭 흐름으로 연결했습니다.",
    highlights: [
      "리뷰가 충분할 때는 Review Insight, 부족할 때는 Local Insight로 보완하는 Dual Insight Model을 설계했습니다.",
      "사진 업로드 이후 Hook, Showcase, Highlight, CTA 구조로 숏폼 광고 스토리보드를 생성하는 흐름을 정리했습니다.",
      "핵심 마케팅 루프와 Pro 인플루언서 매칭 기능을 분리해 서비스의 사용성과 수익 구조를 함께 고려했습니다.",
    ],
    cover: `${A}/pulse-landing.png`,
    gallery: [
      `${A}/pulse-persona.png`,
      `${A}/pulse-reels.png`,
      `${A}/pulse-main.png`,
      `${A}/pulse-influencer.png`,
      `${A}/pulse-arch.png`,
      `${A}/pulse-bm.png`,
    ],
    featured: true,
  },
  {
    id: "vr-live",
    num: "02",
    title: "VR Performance",
    subtitle: "발표 · 면접 · 공연을 VR 공간에서 연습하는 실감형 플랫폼",
    year: "2025",
    role: "기획 · Unity 개발 · 발표/면접 플로우 구현",
    award: "가상융합서비스 경진대회 준우승",
    tags: ["Unity 3D", "C#", "XR Interaction", "Firebase", "STT/TTS"],
    summary:
      "VR Performance는 발표, 면접, 공연처럼 긴장감이 큰 상황을 VR 공간에서 미리 경험하도록 만든 Unity 기반 플랫폼입니다. PDF 발표자료 업로드, 발표 녹음, AI 피드백, 면접 질문 루프, Firebase 기록 저장까지 실제 연습 흐름을 중심으로 구성했습니다.",
    highlights: [
      "OfficeRoom과 InterviewRoom 등 목적별 씬을 분리해 발표와 면접 경험을 다르게 설계했습니다.",
      "PDF를 이미지 슬라이드로 변환하고 VR 화면 안에서 넘겨 보며 발표할 수 있도록 구현했습니다.",
      "마이크 녹음, STT, 질문 생성, TTS, Firestore 저장을 연결해 연습 이후 피드백까지 이어지게 만들었습니다.",
    ],
    cover: `${A}/vr-main.png`,
    gallery: [`${A}/vr-office.png`, `${A}/vr-interview.png`],
    featured: true,
  },
  {
    id: "nullnull",
    num: "03",
    title: "NULL NULL AI",
    subtitle: "서울 여행자의 헛걸음을 줄이는 AI Nowcasting 앱 프로토타입",
    year: "2025 · All Day Project",
    role: "기획 · UI 설계 · 프로토타입",
    award: "Main Project",
    tags: ["Expo Router", "React Native Web", "TypeScript", "Nowcasting"],
    summary:
      "NULL NULL AI는 서울을 찾은 외국인 여행자가 혼잡, 날씨, 이동 변수 때문에 시간을 낭비하지 않도록 돕는 모바일 앱 콘셉트입니다. 서울시 실시간 도시 데이터의 지연을 지하철 승하차와 날씨 정보로 보완하고, 지금 가도 괜찮은 장소와 대안을 추천하는 구조를 기획했습니다. 프로젝트 범위는 기획, 디자인, 발표 가능한 프로토타입까지입니다.",
    highlights: [
      "T-30 도시 데이터의 지연을 T-0 지하철 데이터와 날씨 정보로 보완하는 AI Nowcasting 구조를 제안했습니다.",
      "외국인 여행자를 기준으로 혼잡도 지도, 날씨 필터, 대안 장소 추천 흐름을 설계했습니다.",
      "실제 서비스 구현 전 단계로 PRD, 화면 구조, 프로토타입, 발표자료까지 정리했습니다.",
    ],
    cover: `${A}/nullnull-home.png`,
    gallery: [
      `${A}/nullnull-onboarding.png`,
      `${A}/nullnull-ai.png`,
      `${A}/nullnull-detail.png`,
    ],
    featured: true,
  },
  {
    id: "dspy-ad",
    num: "04",
    title: "AD Video Generation",
    subtitle: "DSPy 기반 광고 영상 프롬프트 생성 프레임워크 연구",
    year: "2025 · JCCT 등재",
    role: "연구 · 프롬프트 설계 · 실험 · 평가",
    award: "Main Project",
    tags: ["DSPy", "Vertex AI · VEO", "CLIP", "Gemini VQA", "AIDA"],
    summary:
      "AD Video Generation은 음식점 광고 영상을 만들 때 단순한 메뉴 설명이 아니라 광고다운 장면 흐름이 반영되도록 프롬프트 구조를 연구한 프로젝트입니다. 외식업 광고를 Hook, Showcase, Highlight, CTA 장면으로 나누고, DSPy 기반 프롬프트 생성 절차와 CLIP/VQA 평가를 통해 결과를 검증했습니다.",
    highlights: [
      "AIDA 모델을 장면 단위 광고 구조로 재구성해 숏폼 영상 프롬프트에 적용했습니다.",
      "User baseline, Direct LLM, DSPy framework, Manual template, Rubric refined 조건을 비교했습니다.",
      "CLIP은 의미 정합성, VQA는 광고 구조 반영도를 평가하도록 분리해 결과를 해석했습니다.",
    ],
    cover: `${A}/jcct-dspy-paper.png`,
    featured: true,
  },
  {
    id: "tripcode",
    num: "05",
    title: "TripCode",
    subtitle: "디지털 트윈으로 여행지를 미리 걷는 O2O 가이드",
    year: "2025",
    role: "기획 · 프로토타입",
    tags: ["React Native", "Python", "Flask"],
    summary:
      "TripCode는 여행 전 실제 장소의 분위기와 동선을 미리 확인할 수 있도록 기획한 디지털 트윈 기반 여행 가이드입니다. 사용자가 관광지의 실제 구조를 먼저 탐색하고, 현장 방문 전 필요한 정보를 빠르게 파악하도록 화면 흐름을 구성했습니다.",
    highlights: [
      "여행 기대와 실제 장소 경험 사이의 차이를 줄이는 문제에서 출발했습니다.",
      "가상 탐색과 실제 장소 정보가 자연스럽게 연결되는 O2O 흐름을 설계했습니다.",
      "React Native 화면과 Flask 서버를 기준으로 초기 구조를 실험했습니다.",
    ],
    cover: `${A}/tripcode-main.png`,
    featured: false,
  },
];

export type Side = {
  title: string;
  desc: string;
  tags: string[];
  cover: string;
};

export const sideWorks: Side[] = [
  {
    title: "Unity 3D 탱크 게임",
    desc: "Rigidbody 물리, 지형 이동, 적 AI를 구현하며 Unity 엔진의 기본 동작을 익힌 3D 게임 프로젝트입니다.",
    tags: ["Unity 3D", "C#", "Game Physics"],
    cover: `${A}/tank-1.png`,
  },
  {
    title: "LoL 웹사이트 클론",
    desc: "공식 페이지의 구조를 분석하고 HTML/CSS Grid와 Flex로 레이아웃을 재현한 웹 퍼블리싱 학습 프로젝트입니다.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    cover: `${A}/lol.png`,
  },
  {
    title: "멀티미디어 콘텐츠",
    desc: "동아리 모집 포스터와 릴스 영상을 제작하며 메시지를 시각 콘텐츠로 정리하는 감각을 키운 작업입니다.",
    tags: ["Photoshop", "Premiere Pro", "Design"],
    cover: `${A}/multimedia-poster.png`,
  },
];
