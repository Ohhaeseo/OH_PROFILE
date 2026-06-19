// ──────────────────────────────────────────────────────────────
// 프로필 / 콘텐츠를 한 곳에서 관리합니다. 문구는 자유롭게 수정하세요.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "오해서",
  nameEn: "OH HAESEO",
  // 히어로 대형 헤드라인 (담백하게 2줄)
  headlineLines: ["데이터를 읽고", "서비스로 옮기는 개발자"],
  // 헤드라인 아래 짧은 보조 문장
  heroSub: "사용자의 흐름을 보고, 필요한 기능을 끝까지 연결합니다.",
  roleLine: "백엔드를 중심으로 AI와 콘텐츠 흐름을 설계하는 개발자",
  tagline:
    "리뷰 한 줄이 분석이 되고, 분석이 다시 행동으로 이어지는 구조를 만듭니다.",
  school: "성결대학교 미디어소프트웨어학과",
  studentId: "21학번 · 202120997",
  birthDate: "2002.03.26",
  leadership: "미디어소프트웨어학과 26대 부학생회장",
  email: "ohhs0355@naver.com",
  github: "https://github.com/Ohhaeseo",
  githubLabel: "Ohhaeseo",
  phone: "010-2676-0547",
};

export const about = {
  lead: "사용자가 다음 행동을 알 수 있는\n흐름을 만드는 개발자입니다.",
  paragraphs: [
    "성결대학교 미디어소프트웨어학과 4학년에 재학 중이며 2027년 졸업을 앞두고 있습니다.",
    "가장 오래 붙잡고 공부한 영역은 Java와 Spring Boot 기반의 백엔드입니다. 사용자와 데이터가 오가는 길을 안정적으로 만들고, 그 위에 AI 분석과 콘텐츠 생성 기능을 연결하는 작업에 관심이 많습니다.",
    "프로젝트를 볼 때는 먼저 사용자가 어디에서 막히는지부터 봅니다. 그다음 필요한 데이터, API, 화면 흐름을 정리하고 실제로 돌아가는 구조까지 이어 붙입니다. 졸업작품 PULSE는 이 방식으로 가장 깊게 만든 프로젝트입니다.",
    "아직 배워야 할 것이 많지만, 모르는 영역을 피하기보다 직접 작게 만들어 보며 이해하려고 합니다. 백엔드를 중심에 두되, AI와 콘텐츠 경험까지 함께 설계할 수 있는 개발자로 성장하고 싶습니다.",
  ],
};

export type Value = { title: string; en: string; desc: string };

export const values: Value[] = [
  {
    title: "능동적 학습",
    en: "Active Learning",
    desc: "새로운 기술이 필요하면 작은 예제로 먼저 확인합니다. 익힌 내용은 기록으로 남겨 다음 작업에 다시 쓸 수 있게 정리합니다.",
  },
  {
    title: "계획적 개발",
    en: "Planned Development",
    desc: "바로 구현하기보다 요구사항과 흐름을 먼저 잡습니다. 구조를 먼저 세우고, 일정 안에서 완성 가능한 단위로 나누어 진행합니다.",
  },
  {
    title: "원활한 소통",
    en: "Communication",
    desc: "혼자 빠르게 가기보다 같이 이해할 수 있는 길을 찾습니다. 문서와 대화로 막히는 지점을 줄이려 합니다.",
  },
  {
    title: "성실한 태도",
    en: "Sincerity",
    desc: "맡은 역할은 끝까지 책임지려 합니다. 작은 약속을 지키는 태도가 결국 신뢰를 만든다고 생각합니다.",
  },
];

export type StackGroup = {
  label: string;
  icon: string;
  items: string[];
  note?: string;
};

export const stacks: StackGroup[] = [
  {
    label: "Backend & DB",
    icon: "▤",
    items: ["Java", "Spring Boot", "FastAPI", "MySQL"],
    note: "안정적인 서버·API 설계와 DB 모델링",
  },
  {
    label: "Frontend",
    icon: "</>",
    items: ["React", "React Native", "TypeScript", "JavaScript"],
    note: "웹·앱 화면 구현",
  },
  {
    label: "AI · Generative",
    icon: "✶",
    items: ["LLM · DSPy", "Vertex AI · VEO", "BERTopic", "CLIP · VQA"],
    note: "분석부터 영상 생성·평가까지",
  },
  {
    label: "AI Agent",
    icon: "◇",
    items: ["AI Agent", "MCP", "Skills 활용", "Claude Code"],
    note: "에이전트·도구를 엮어 개발 자동화",
  },
  {
    label: "XR · Content",
    icon: "◐",
    items: ["Unity 3D", "C#", "Premiere · Photoshop"],
    note: "실감형 콘텐츠와 영상",
  },
  {
    label: "Tools",
    icon: "⚙",
    items: ["Git · GitHub", "Notion", "Figma", "Playwright"],
    note: "협업·문서화·자동화",
  },
];

export type TimelineItem = {
  year: string;
  grade: string;
  title: string;
  award?: string;
  desc: string;
  latest?: boolean;
  active?: boolean; // 현재 활동중
};

// 수상 (상장) — 활동과 섞지 않음
export const awards: TimelineItem[] = [
  {
    year: "2025",
    grade: "3학년",
    title: "가상융합서비스 개발자 경진대회",
    award: "준우승",
    desc: "VR 기술을 활용한 가상 공간 발표 플랫폼 개발 (2등)",
    latest: true,
  },
  {
    year: "2025",
    grade: "3학년",
    title: "사용자 경험(UX) 디자인 소논문 경진대회",
    award: "최우수상",
    desc: "사용자 중심 디자인 프로세스 및 연구 방법론 적용",
  },
  {
    year: "2025",
    grade: "3학년",
    title: "VR / AR / Game 경진대회",
    award: "최우수상",
    desc: "실감형 콘텐츠 기획 및 프로토타입 구현 능력 입증",
  },
  {
    year: "2024",
    grade: "2학년",
    title: "생성 AI를 활용한 게임 기획 경진대회",
    award: "우수상",
    desc: "Gen-AI 툴을 활용한 혁신적인 게임 컨셉 및 시나리오 제안",
  },
  {
    year: "2021",
    grade: "1학년",
    title: "사용자 조사를 통한 웹/앱 서비스 기획 경진대회",
    award: "우수상",
    desc: "시장 조사 및 페르소나 설정을 통한 니즈 분석과 서비스 기획",
  },
];

// 활동 — 수상과 분리
export const activities: TimelineItem[] = [
  {
    year: "2026",
    grade: "활동",
    title: "멋쟁이사자처럼 14기 백엔드 아기사자",
    desc: "대학 IT 연합 동아리 멋쟁이사자처럼 14기 백엔드 트랙 활동",
    active: true,
  },
  {
    year: "2025",
    grade: "활동",
    title: "미디어소프트웨어학과 26대 부학생회장",
    desc: "학과 학생회 부학생회장으로 행사 기획·운영과 학우 소통을 맡음",
  },
];
