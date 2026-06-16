const A = `${import.meta.env.BASE_URL}assets`;

export const pulse = {
  eyebrow: "Main Project · Graduation Project",
  title: "PULSE",
  subtitle: "외식업 사장님을 위한 AI 마케팅 자동화 플랫폼",
  cover: `${A}/pulse-landing.png`,
  pipeline: `${A}/pulse-pipeline.png`,
  tagline:
    "사장님이 매번 고민하지 않아도, 고객 이해와 홍보 실행이 계속 이어지는 구조를 만들었습니다.",
  overview: [
    "PULSE의 출발점은 명확했습니다. 외식업 사장님은 마케팅이 필요하다는 사실을 알지만, 리뷰를 분석하고 콘텐츠를 만들고 성과를 확인할 시간이 부족합니다. 그래서 기능을 많이 붙이기보다 하나의 반복 가능한 마케팅 루프를 만드는 데 집중했습니다.",
    "핵심 흐름은 손님을 이해하고, 그 결과로 홍보 영상을 만들고, 다시 가게 현황에서 다음 행동을 제안받는 구조입니다. 리뷰가 충분하면 Review Insight로, 부족하면 상권 기반 Local Insight로 보완해 초기 데이터 공백을 줄였습니다.",
    "릴스 제작은 단순 영상 생성 버튼이 아니라, 분석 맥락을 이어받아 Hook, Showcase, Highlight, CTA 구조의 9:16 숏폼 광고 스토리보드로 바뀌도록 설계했습니다. 인플루언서 매칭은 Pro 기능으로 분리해 핵심 루프를 방해하지 않으면서 수익 모델을 만들 수 있게 했습니다.",
  ],
  loop: ["고객 인사이트", "스마트 릴스 제작", "가게 현황", "Pro 매칭"],
  stack: ["FastAPI", "Spring Boot", "React", "Vertex AI · VEO", "LLM"],
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
    why: "사장님이 가장 부담스러워하는 작업은 무엇을 찍고 어떤 문구로 홍보해야 하는지 결정하는 일입니다. 그래서 빈 입력창에서 시작하지 않고, 이미 분석된 맥락이 자동으로 이어지는 경험을 목표로 잡았습니다.",
    how: "Hook, Showcase, Highlight, CTA 광고 구조를 기준으로 스토리보드와 자막 방향을 생성하고, 업로드한 매장 사진이 영상 프롬프트의 핵심 재료가 되도록 구성했습니다.",
    points: [
      "9:16 SNS 숏폼 영상 생성을 기준으로 화면 흐름 설계",
      "고객 인사이트와 매장 맥락을 프롬프트 입력으로 연결",
      "Hook, Showcase, Highlight, CTA 구조 기반 스토리보드 정리",
    ],
  },
  {
    no: "02",
    tag: "Influencer Pro",
    title: "핵심 루프와 분리한 인플루언서 매칭",
    image: `${A}/pulse-influencer.png`,
    lead: "가게 업종, 메뉴, 분위기와 어울리는 크리에이터를 추천하고 요청까지 이어지는 Pro 기능 흐름을 정리했습니다.",
    why: "영상 제작만으로 부족한 사장님에게는 실제 홍보 채널이 필요합니다. 다만 핵심 서비스가 복잡해지지 않도록 Pro 기능으로 분리해 수익 모델과 사용성을 함께 고려했습니다.",
    how: "인플루언서 유형, 지역, 콘텐츠 스타일을 기준으로 탐색과 추천 화면을 구성하고, 매칭 요청으로 자연스럽게 이어지는 구조를 설계했습니다.",
    points: [
      "가게 정보 기반 크리에이터 추천 흐름",
      "지역, 스타일, 콘텐츠 유형 중심 탐색 구조",
      "핵심 마케팅 루프와 Pro BM의 분리",
    ],
  },
  {
    no: "03",
    tag: "Auth & Onboarding",
    title: "사장님이 막히지 않는 초기 진입",
    image: `${A}/pulse-login.png`,
    lead: "회원가입과 로그인, 가게 정보 입력을 단계적으로 구성해 처음 들어온 사장님도 서비스 목적을 이해하며 진입하도록 만들었습니다.",
    why: "마케팅 도구는 첫 진입에서 이미 부담스럽게 느껴질 수 있습니다. 그래서 필요한 정보만 순서대로 받고, 이후 분석과 제작 흐름으로 바로 연결되는 구조가 중요했습니다.",
    how: "기본 계정 정보와 가게 정보를 분리하고, 인증 상태에 따라 접근 가능한 화면을 제어하는 구조를 정리했습니다.",
    points: [
      "2단계 회원가입 흐름",
      "인증 상태 기반 보호 라우팅",
      "가게 정보 입력 이후 분석/제작 흐름 연결",
    ],
  },
];
