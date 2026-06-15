// ──────────────────────────────────────────────────────────────
// 프로필 / 콘텐츠를 한 곳에서 관리합니다. 문구는 자유롭게 수정하세요.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "오해서",
  nameEn: "OH HAESEO",
  // 히어로 대형 헤드라인 (담백하게 2줄)
  headlineLines: ["AI·콘텐츠를 만드는", "풀스택 메이커"],
  // 헤드라인 아래 짧은 보조 문장
  heroSub: "데이터와 감각 사이를 잇는 일을 합니다.",
  roleLine: "AI·콘텐츠를 만드는 풀스택 메이커",
  tagline:
    "리뷰 한 줄에서 시작해 영상이 되고, 손님의 마음이 되는 — 데이터와 감각 사이를 잇는 일을 합니다.",
  school: "성결대학교 미디어소프트웨어학과",
  studentId: "21학번 · 202120997",
  leadership: "미디어소프트웨어학과 26대 부학생회장",
  email: "dhgot@naver.com",
  github: "https://github.com/Ohhaeseo",
  githubLabel: "github.com/Ohhaeseo",
  phone: "010-2676-0547",
  mbti: "INFJ",
};

export const about = {
  lead: "코드로 경험을 만드는\n개발자, 오해서입니다.",
  paragraphs: [
    "만 24세, 성결대학교 미디어소프트웨어학과 4학년에 재학 중이며 2026년 졸업을 앞두고 있습니다.",
    "Java와 Spring Boot 기반의 백엔드에 가장 자신이 있습니다. 견고한 서버와 API를 설계하는 일을 좋아하고, 그 위에 데이터 분석과 생성형 AI, VR 콘텐츠까지 하나의 흐름으로 엮어내는 데 재미를 느낍니다.",
    "기술을 넓게 펼치기보다, 사용자의 실제 행동 흐름을 따라 ‘왜 이 구조인가’를 끝까지 고민하는 편입니다. 졸업작품 PULSE는 그 고민을 가장 깊게 담은 결과물입니다.",
    "아직 배우고 싶은 것도, 직접 부딪혀보고 싶은 것도 많습니다. 다양한 경험을 두려워하지 않고, 견고한 백엔드 위에서 사람의 경험까지 설계하는 개발자로 성장하고 싶습니다.",
  ],
};

export type Value = { title: string; en: string; desc: string };

export const values: Value[] = [
  {
    title: "능동적 학습",
    en: "Active Learning",
    desc: "새로운 기술이 두려운 적이 없습니다. 프로젝트와 스터디로 스스로 학습하고, 익힌 것을 기록해 팀원과 공유합니다.",
  },
  {
    title: "계획적 개발",
    en: "Planned Development",
    desc: "코드 작성 전 요구사항을 분석해 흐름을 잡습니다. 구조를 먼저 설계하고 일정을 지켜 안정적으로 완성합니다.",
  },
  {
    title: "원활한 소통",
    en: "Communication",
    desc: "혼자 빠르게 가기보다 함께 멀리 가는 길을 택합니다. 명확한 문서와 대화로 협업의 마찰을 줄입니다.",
  },
  {
    title: "성실한 태도",
    en: "Sincerity",
    desc: "맡은 역할은 끝까지 책임집니다. 작은 약속을 지키는 태도가 결국 신뢰를 만든다고 믿습니다.",
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
