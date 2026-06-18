const A = `${import.meta.env.BASE_URL}assets`;

export const pulse = {
  eyebrow: "Main Project · Graduation Project",
  title: "PULSE",
  subtitle: "외식업 사장님을 위한 AI 마케팅 자동화 플랫폼",
  cover: `${A}/pulse-landing.png`,
  pipeline: `${A}/pulse-pipeline.png`,
  tagline:
    "리뷰 수집, 손님 분석, 숏폼 생성, 다음 액션 제안이 하나의 운영 루프로 이어지도록 설계했습니다.",
  overview: [
    "PULSE의 실제 구현은 React 프론트엔드, Spring Boot 메인 백엔드, FastAPI AI 서버로 나뉩니다. 프론트는 사장님이 보는 화면과 기능 흐름을 담당하고, Spring은 인증과 가게 정보, AI 서버 호출의 관문 역할을 맡으며, FastAPI는 리뷰 수집과 분석, LLM 인사이트, 홍보 영상 생성을 처리합니다.",
    "AI 서버는 분석 요청을 받으면 즉시 task_id를 발급하고 백그라운드에서 리뷰 수집, MongoDB 스냅샷 저장, Kiwi/BERTopic 기반 토픽 분석, LLM 리포트 생성을 진행합니다. 사용자는 진행률을 polling으로 확인하고, 완료된 결과를 손님 분석 화면과 대시보드에서 다시 사용할 수 있습니다.",
    "홍보 영상 생성은 단순한 업로드 버튼이 아니라 분석 맥락을 이어받는 흐름입니다. 페르소나, 매장 요약, 액션 제안, 업로드 이미지를 바탕으로 프롬프트를 추천하고, Hook, Showcase, Highlight, CTA 구조의 9:16 숏폼 광고로 변환하는 방향을 잡았습니다.",
  ],
  loop: ["Review Insight", "Persona", "Smart Reels", "Action Dashboard", "Pro Matching"],
  stack: ["React", "Spring Boot", "FastAPI", "MongoDB", "Kiwi", "BERTopic", "LLM", "Veo"],
  links: [{ label: "GitHub", href: "https://github.com/Ohhaeseo" }],
};

export type Contribution = {
  no: string;
  tag: string;
  title: string;
  image: string;
  lead: string;
  why: string;
  how: string;
  points: string[];
};

export const contributions: Contribution[] = [
  {
    no: "01",
    tag: "Smart Reels Studio",
    title: "분석 맥락을 이어받는 릴스 생성 흐름",
    image: `${A}/pulse-reels.png`,
    lead: "고객 인사이트, 매장 분위기, 업종 정보를 릴스 제작 화면으로 넘겨 9:16 숏폼 광고 생성을 시작하는 흐름을 설계했습니다.",
    why: "사장님이 가장 어려워하는 지점은 무엇을 찍고 어떤 문구로 홍보해야 하는지 결정하는 일입니다. 그래서 빈 입력창에서 시작하지 않고, 이미 분석된 손님 맥락을 영상 제작의 출발점으로 삼았습니다.",
    how: "페르소나와 매장 요약을 기반으로 프롬프트를 추천하고, Hook, Showcase, Highlight, CTA 광고 구조로 스토리보드 방향을 정리했습니다.",
    points: [
      "분석 결과를 영상 프롬프트 입력값으로 연결",
      "9:16 숏폼 광고 기준의 제작 흐름 설계",
      "Veo/Gemini 기반 생성 API와 polling UX 고려",
    ],
  },
  {
    no: "02",
    tag: "Influencer Pro",
    title: "핵심 루프와 분리한 인플루언서 매칭",
    image: `${A}/pulse-influencer.png`,
    lead: "가게 업종, 메뉴, 지역, 콘텐츠 성향에 맞는 크리에이터를 추천하고 요청까지 이어지는 Pro 기능 흐름을 정리했습니다.",
    why: "모든 사장님에게 인플루언서 매칭이 필요한 것은 아닙니다. 핵심 마케팅 루프를 복잡하게 만들지 않으면서, 더 강한 홍보가 필요한 사용자를 위한 확장 기능으로 분리했습니다.",
    how: "추천 결과가 단순 순위가 아니라 왜 어울리는지 설명될 수 있도록 매칭 이유와 기준을 함께 보여주는 구조를 고려했습니다.",
    points: [
      "핵심 루프와 Pro 수익 기능 분리",
      "가게 정보 기반 크리에이터 추천 흐름",
      "매칭 이유를 보여주는 설명 가능한 추천 UX",
    ],
  },
  {
    no: "03",
    tag: "Auth & Onboarding",
    title: "가입 직후 분석으로 이어지는 초기 진입",
    image: `${A}/pulse-login.png`,
    lead: "회원가입과 가게 정보 입력을 단순 계정 생성이 아니라 첫 분석 파이프라인의 시작점으로 바라보고 화면 흐름을 구성했습니다.",
    why: "마케팅 도구는 첫 진입에서 무엇을 입력해야 하는지 많아 보이면 쉽게 이탈합니다. 필요한 정보만 단계적으로 받고, 이후 분석과 제작으로 바로 이어지는 구조가 중요했습니다.",
    how: "가게 정보 입력, 인증 상태, 보호 라우팅, 분석 결과 조회 흐름을 분리해 처음 들어온 사장님도 서비스 목적을 빠르게 이해하도록 정리했습니다.",
    points: [
      "2단계 회원가입과 가게 정보 입력",
      "가입 이후 AI 분석 트리거 구조 고려",
      "분석 완료 전후 상태를 나누는 진입 UX",
    ],
  },
];
