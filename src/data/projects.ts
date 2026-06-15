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
    year: "2026 · 졸업작품 (대표 프로젝트)",
    role: "My Part — 영상 생성 로직 · 인플루언서 매칭 · 로그인/회원가입",
    award: "Main Project",
    tags: ["FastAPI", "Spring Boot", "React", "LLM · VEO", "Google Veo"],
    summary:
      "“사장님이 마케팅을 잘하게 만드는 것이 아니라, 마케팅이 사장님 없이도 굴러가게 만드는 것.” 리뷰·상권 데이터로 손님의 마음을 읽고, 사진 한 장으로 숏폼 릴스를 만들고, 다음 행동까지 제안하는 단일 마케팅 루프. 제가 맡은 핵심 파트는 아래와 같습니다.",
    highlights: [
      "영상 생성 로직 — 페르소나·사진 입력 → AI 스토리보드(HOOK·BODY·OUTRO) → 자막·트랜지션이 입혀진 9:16 숏폼 릴스 자동 생성",
      "인플루언서 매칭 — 가게 스타일 기반 푸드 크리에이터 추천·검색·협찬 의뢰까지 이어지는 Pro 매칭 플로우 구현",
      "로그인 / 회원가입 — 2단계 가입(기본정보 → 가게정보)과 인증·보호 라우트(Protected Route) 구성",
    ],
    cover: `${A}/pulse-landing.png`,
    gallery: [
      `${A}/pulse-reels.png`,
      `${A}/pulse-influencer.png`,
      `${A}/pulse-login.png`,
    ],
    featured: true,
  },
  {
    id: "vr-live",
    num: "02",
    title: "VR Live Performance",
    subtitle: "발표 · 면접 · 공연을 미리 겪는 실감형 연습 플랫폼",
    year: "2025",
    role: "기획 · Unity 개발",
    award: "가상융합서비스 경진대회 준우승",
    tags: ["Unity 3D", "C#", "XR Interaction"],
    summary:
      "많은 사람이 무대 위에서 ‘처음’이라 떨립니다. VR Live Performance는 그 ‘처음’을 미리 겪게 해주는 플랫폼입니다. 실제 강당·면접장·공연장과 유사한 3D 공간을 VR로 재현하고, 관객의 시선과 반응까지 배치해 현장의 긴장감을 그대로 연습할 수 있게 했습니다. 단순한 시뮬레이션을 넘어 ‘실전 같은 리허설’을 목표로 설계했고, 가상융합서비스 개발자 경진대회에서 준우승했습니다.",
    highlights: [
      "강당 · 면접실 · 공연 무대 등 상황별 3D 공간을 실제와 유사하게 재현",
      "관객 시선·반응을 배치해 발표 긴장감을 실전처럼 연습하는 몰입 환경 구현",
      "Unity 3D · C# 기반 인터랙션과 동선 설계로 ‘실전 같은 리허설’ 경험 제공",
    ],
    cover: `${A}/vr-main.png`,
    gallery: [`${A}/vr-office.png`, `${A}/vr-interview.png`],
    featured: true,
  },
  {
    id: "dspy-ad",
    num: "03",
    title: "AD Video Generation",
    subtitle: "DSPy 기반 광고영상 프롬프트 프레임워크 연구 (KCI)",
    year: "2025 · KCI 등재",
    role: "연구 · 프롬프트 설계 · 실험 · 평가",
    award: "UX 소논문 경진대회 최우수상",
    tags: ["DSPy", "Vertex AI · VEO", "CLIP", "Gemini VQA"],
    summary:
      "“비전문가가 광고 영상을 만들면 왜 어색할까?”라는 질문에서 출발한 연구입니다. 비전문 사용자가 단순히 제품을 설명하는 문장만으로는 광고에 필요한 장면 흐름·소구점·CTA가 담기지 않는다는 문제를 정의하고, 수많은 외식업 광고 아카이브를 분석해 반복되는 장면 구조를 Hook → Showcase → Highlight → CTA 로 정리했습니다. 이 구조를 DSPy 기반 프롬프트 생성 프레임워크로 전환해 Vertex AI VEO로 숏폼 광고를 생성하고, 정량 지표로 그 효과를 검증했습니다. (PULSE의 ‘홍보 영상 만들기’ 로직이 이 연구에서 출발했습니다.)",
    highlights: [
      "TVCF 외식업 광고 아카이브 분석 → Hook·Showcase·Highlight·CTA 장면 구조 도출",
      "5개 비교군(기본 입력 · 직접 LLM · DSPy · 수동 템플릿 · 루브릭 개선)으로 생성 품질 정량 비교",
      "CLIP Score · Gemini 기반 VQA로 의미 일치도와 광고 구조 반영도를 객관 평가",
    ],
    cover: `${A}/kci-paper.png`,
    featured: true,
  },
  {
    id: "tripcode",
    num: "04",
    title: "TripCode",
    subtitle: "디지털 트윈으로 여행지를 미리 걷는 O2O 가이드",
    year: "2025",
    role: "기획 · 풀스택",
    tags: ["React-Native", "Python", "Flask"],
    summary:
      "여행은 설레지만, 막상 가보면 ‘생각과 달랐다’는 경험이 많습니다. TripCode는 떠나기 전에 가상 랜드마크를 먼저 탐험하며 여행지를 ‘사전 답사’하게 하는 디지털 트윈 기반 가이드입니다. 오프라인의 실제 장소와 디지털 정보를 실시간으로 연결해, 도착했을 때 이미 익숙한 여행을 만드는 것을 목표로 했습니다.",
    highlights: [
      "가상 랜드마크 탐험으로 여행지를 미리 경험하는 ‘사전 답사’ UX 설계",
      "Flask 서버로 여행 데이터를 처리하고 사용자 맞춤 루트를 구성",
      "오프라인 여행과 디지털 정보를 실시간으로 잇는 O2O 구조",
    ],
    cover: `${A}/tripcode-main.png`,
    featured: false,
  },
  {
    id: "nullnull",
    num: "05",
    title: "널널 AI",
    subtitle: "도착하기 전에 붐빔을 예측하는 서울 이동 비서",
    year: "2025 · 멋쟁이사자처럼 아이디어톤",
    role: "기획 · 프론트엔드",
    tags: ["Expo Router", "React Native Web", "TypeScript"],
    summary:
      "‘지금 거기 가면 사람 많을까?’ 누구나 한 번쯤 하는 고민을 데이터로 풀었습니다. 널널 AI는 목적지의 예상 혼잡도, 지하철 상황, 날씨, 주변 대체 장소를 한 화면에서 안내해 ‘지금 가도 괜찮은지 · 언제 가면 덜 붐비는지 · 어디로 바꾸면 좋은지’를 바로 판단하게 돕는 모바일형 웹 앱입니다. 400개 이상 지하철역 데이터를 기반으로, API 없이도 실제 서비스처럼 동작하도록 설계했습니다.",
    highlights: [
      "목적지 혼잡도 · 지하철 · 날씨 · 대체 장소를 한 화면에서 통합 안내",
      "AI 위험도 판단과 시간대 추천(‘5시 이후 방문 시 혼잡 40%↓’)으로 행동 가이드 제공",
      "널널 비서 챗봇과 정적 웹 export 구조로 API 없이 실제 서비스처럼 시연",
    ],
    cover: `${A}/nullnull-home.png`,
    gallery: [`${A}/nullnull-ai.png`, `${A}/nullnull-detail.png`],
    featured: false,
  },
];

// 학습·역량 증명용 소형 작업들
export type Side = { title: string; desc: string; tags: string[]; cover: string };
export const sideWorks: Side[] = [
  {
    title: "Unity 3D 탱크 게임",
    desc: "Rigidbody 물리와 지형 타일링, 적 AI까지 직접 구현한 3D 게임. 게임 수학과 엔진의 동작 원리를 손으로 익히며 ‘만들면서 배우는’ 과정을 거친 작업입니다.",
    tags: ["Unity 3D", "C#", "Game Physics"],
    cover: `${A}/tank-1.png`,
  },
  {
    title: "LoL 웹사이트 클론",
    desc: "공식 페이지를 픽셀 단위로 분석해 HTML/CSS Grid·Flex만으로 전체 레이아웃을 재현. 프레임워크 없이 웹 표준과 구조 설계 감각을 다진 클론 코딩입니다.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    cover: `${A}/lol.png`,
  },
  {
    title: "멀티미디어 · 콘텐츠",
    desc: "동아리 모집 포스터 디자인부터 숏폼 영상 편집까지. 기획한 메시지를 ‘보이는 콘텐츠’로 옮기는, 개발과 디자인의 경계를 넘나든 작업입니다.",
    tags: ["Photoshop", "Premiere Pro", "Design"],
    cover: `${A}/multimedia-poster.png`,
  },
];
