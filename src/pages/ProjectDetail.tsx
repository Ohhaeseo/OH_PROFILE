import { useLayoutEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { projects, type Project } from "../data/projects";
import { pulse, contributions } from "../data/pulse";
import { Reveal } from "../components/Reveal";

const detailProjectIds = ["pulse", "vr-live", "nullnull", "dspy-ad"];

type DetailCopy = {
  label: string;
  category: string;
  lead: string;
  intent: string;
  role: string;
  result: string;
  process: string[];
  focus: { title: string; body: string }[];
  deepTitle: string;
  deepLead: string;
  deepCards: { title: string; body: string }[];
  study: { kicker: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  evidenceTitle: string;
  evidence: { label: string; value: string }[];
  note?: string;
};

const details: Record<string, DetailCopy> = {
  pulse: {
    label: "Main Project 01",
    category: "AI Marketing Platform",
    lead: "PULSE는 외식업 사장님이 마케팅을 따로 공부하지 않아도 고객을 이해하고, 홍보 영상을 만들고, 다음 행동을 확인할 수 있도록 설계한 AI 마케팅 자동화 플랫폼입니다.",
    intent:
      "기획서에서 가장 크게 다룬 문제는 외식업 사장님이 마케팅의 필요성을 알고 있어도 실행까지 이어가기 어렵다는 점이었습니다. 리뷰를 분석하고, 고객을 이해하고, 촬영 방향을 정하고, 성과를 보며 다음 콘텐츠를 판단하는 과정이 모두 사장님에게는 별도의 노동입니다. PULSE는 이 과정을 하나의 반복 가능한 흐름으로 묶어, 사장님이 마케팅을 '배워서 하는 것'보다 '서비스가 다음 행동을 제안해주는 것'에 가깝게 만드는 방향으로 설계했습니다.",
    role: "Smart Reels Studio의 영상 생성 흐름, 인플루언서 매칭 화면, 로그인/회원가입 진입 구조를 맡았습니다. 특히 분석 결과가 화면 안에서 끝나지 않고 홍보 영상 제작, Pro 매칭, 대시보드의 다음 액션으로 이어지도록 기능 간 연결을 정리했습니다.",
    result:
      "고객 인사이트, 릴스 제작, 가게 현황, 인플루언서 매칭이 각각 따로 존재하는 기능이 아니라 하나의 마케팅 루프처럼 보이도록 구조화했습니다. 결과적으로 사용자는 '무엇을 해야 할지'를 고민하는 대신 서비스가 제안하는 다음 행동을 따라갈 수 있습니다.",
    process: [
      "Problem Framing",
      "Dual Insight",
      "Guest Persona",
      "Smart Reels",
      "Dashboard Action",
      "Pro Matching",
    ],
    focus: [
      {
        title: "고객 이해에서 시작",
        body: "리뷰와 상권 데이터를 바탕으로 사장님이 손님을 더 쉽게 이해하도록 만들고, 이 결과를 이후 기능의 출발점으로 사용했습니다.",
      },
      {
        title: "홍보 실행까지 연결",
        body: "분석 결과가 리포트로 끝나지 않도록 릴스 제작 화면에 맥락을 넘기고, 광고 장면 구조에 맞는 영상 생성 흐름으로 이어지게 했습니다.",
      },
      {
        title: "Pro 기능의 분리",
        body: "인플루언서 매칭은 핵심 루프 밖의 Pro 기능으로 분리해 서비스가 복잡해지지 않으면서 수익 모델을 가질 수 있게 정리했습니다.",
      },
    ],
    deepTitle: "기능을 늘리기보다 사장님의 하루에 맞는 실행 루프를 설계했습니다.",
    deepLead:
      "PULSE 기획서의 핵심 문장은 '마케팅이 사장님 없이도 굴러가게 만드는 것'에 가깝습니다. 그래서 상세 페이지에서는 기능 목록을 나열하기보다, 사장님이 서비스 안에서 어떤 순서로 판단하고 실행하는지 보여주는 구조로 재정리했습니다.",
    deepCards: [
      {
        title: "Dual Insight Model",
        body: "리뷰가 충분한 매장은 Review Insight를 사용하고, 리뷰가 부족한 매장은 상권 데이터를 바탕으로 Local Insight를 제공합니다. 데이터가 부족한 신규 매장도 첫 분석 경험을 받을 수 있도록 설계했습니다.",
      },
      {
        title: "AI Guest Persona",
        body: "분석 결과를 단순 키워드로 보여주지 않고 가상의 대표 고객처럼 대화할 수 있게 구성했습니다. 사장님이 '우리 손님은 무엇을 좋아하는가'를 더 직관적으로 이해하도록 돕습니다.",
      },
      {
        title: "Smart Reels Studio",
        body: "사진 업로드 후 Hook, Showcase, Highlight, CTA 구조로 숏폼 광고 스토리보드를 생성합니다. 영상 제작을 기술 기능이 아니라 매출 행동으로 연결하는 화면입니다.",
      },
      {
        title: "Action Dashboard",
        body: "대시보드는 긴 리포트가 아니라 오늘 해야 할 행동을 먼저 보여주는 구조입니다. 사장님이 분석을 읽고 끝내지 않고 바로 다음 콘텐츠나 매칭으로 이동하도록 설계했습니다.",
      },
    ],
    study: [
      {
        kicker: "Problem",
        title: "PULSE가 해결하려는 문제는 '마케팅 지식 부족'만이 아닙니다.",
        paragraphs: [
          "외식업 사장님은 보통 매장 운영, 조리, 직원 관리, 정산, 고객 응대를 동시에 처리합니다. 이 상황에서 SNS 콘텐츠를 꾸준히 만들고, 고객 반응을 해석하고, 홍보 방향을 조정하는 일은 우선순위에서 밀리기 쉽습니다. 그래서 PULSE는 사장님에게 더 많은 분석 화면을 제공하는 것보다, 분석이 바로 실행으로 바뀌는 흐름을 만드는 데 초점을 맞췄습니다.",
          "기획서에서는 마케팅 지식 부족, 시간 부족, 전문가 신뢰 비용을 핵심 장벽으로 정의했습니다. 이 세 가지 문제는 서로 연결되어 있습니다. 무엇을 해야 하는지 모르기 때문에 시간이 더 걸리고, 시간이 없기 때문에 전문가에게 맡기고 싶지만, 비용과 신뢰 문제가 다시 발목을 잡습니다. PULSE는 이 반복되는 막힘을 AI 기반의 간단한 실행 루프로 줄이는 방향을 선택했습니다.",
        ],
        bullets: [
          "사장님이 직접 마케팅 전략을 공부하지 않아도 시작할 수 있어야 함",
          "리뷰와 상권 분석이 콘텐츠 제작으로 자연스럽게 이어져야 함",
          "핵심 기능과 수익 기능을 분리해 사용 흐름이 복잡해지지 않아야 함",
        ],
      },
      {
        kicker: "Service Flow",
        title: "핵심은 고객 인사이트, 릴스 제작, 대시보드가 끊기지 않는 것입니다.",
        paragraphs: [
          "PULSE의 주요 흐름은 '손님 마음 읽기 → 홍보 영상 만들기 → 우리 가게 현황'입니다. 손님 마음 읽기에서는 리뷰와 상권 데이터를 바탕으로 고객 유형을 파악하고, 홍보 영상 만들기에서는 그 분석 결과를 광고 소재로 변환합니다. 마지막으로 우리 가게 현황에서는 성과와 다음 액션을 확인합니다. 이 흐름은 단순한 메뉴 구성이 아니라 사장님의 실제 작업 순서를 서비스 안에 옮긴 것입니다.",
          "Smart Reels Studio는 분석 결과를 받아 광고 영상의 방향을 잡는 역할을 합니다. 예를 들어 퇴근길 직장인에게 어울리는 메뉴, 매장의 분위기, 촬영 가능한 사진이 함께 들어오면 이를 Hook, Showcase, Highlight, CTA 구조로 바꿉니다. 사용자는 영상 제작 도구를 다루는 것이 아니라, 자신의 매장 상황에 맞는 홍보 실행안을 받는 경험을 하게 됩니다.",
        ],
      },
      {
        kicker: "My Contribution",
        title: "제가 맡은 영역은 AI 기능을 실제 사용자 행동으로 연결하는 부분입니다.",
        paragraphs: [
          "프로젝트에서 제가 집중한 부분은 영상 생성 로직, 인플루언서 매칭, 인증/가입 흐름입니다. 영상 생성은 단순히 모델 API를 호출하는 문제가 아니라, 사용자가 어떤 맥락에서 들어왔는지에 따라 필요한 입력값과 결과물이 달라져야 합니다. 그래서 분석 결과, 매장 정보, 사진, 광고 구조가 한 번에 이어지도록 화면과 기능 흐름을 정리했습니다.",
          "인플루언서 매칭은 Pro 기능으로 분리했습니다. PULSE의 기본 가치는 사장님이 직접 마케팅을 실행할 수 있도록 돕는 것이지만, 실제 홍보에서는 외부 크리에이터와의 연결이 필요할 수 있습니다. 이 기능을 핵심 루프 안에 강제로 넣으면 서비스가 복잡해지기 때문에, 필요한 사용자가 확장 기능처럼 사용할 수 있는 구조로 정리했습니다.",
        ],
        bullets: [
          "분석 결과가 영상 프롬프트로 넘어가는 흐름 설계",
          "업종, 메뉴, 분위기에 맞는 인플루언서 매칭 화면 구성",
          "회원가입 이후 가게 정보 입력과 주요 기능 진입 연결",
        ],
      },
    ],
    evidenceTitle: "PULSE 기획서에서 반영한 기준",
    evidence: [
      { label: "Core Loop", value: "손님 마음 읽기 → 홍보 영상 만들기 → 우리 가게 현황" },
      { label: "MVP", value: "Review/Local Insight, Smart Reels Studio, Store Dashboard, Pro Matching" },
      { label: "Video", value: "9:16 SNS 숏폼, 6~10초 광고, Hook/Showcase/Highlight/CTA" },
      { label: "Design", value: "No Scroll Policy, Action-centric Dashboard, Web MVP" },
    ],
  },
  "vr-live": {
    label: "Main Project 02",
    category: "Unity VR Platform",
    lead: "VR Performance는 발표, 면접, 공연처럼 긴장감이 큰 상황을 VR 공간에서 미리 연습하도록 만든 Unity 기반 실감형 플랫폼입니다.",
    intent:
      "발표와 면접은 내용을 아는 것만으로 충분하지 않습니다. 공간, 시선, 시간 압박, 질문 대응까지 실제 상황에 가까운 흐름을 먼저 경험해야 합니다. 이 프로젝트는 사용자가 연습 환경 안에서 발표 자료를 불러오고, 발표 또는 면접을 수행하고, 결과를 피드백으로 남기는 흐름을 만드는 데 집중했습니다.",
    role: "Unity 씬 구성과 C# 기반 발표/면접 플로우를 구현했습니다. PDF 업로드, 발표 녹음, STT/피드백 요청, 질문 생성, TTS 재생, Firebase 저장까지 실제 프로젝트 코드에서 확인되는 주요 흐름을 연결했습니다.",
    result:
      "사용자는 로그인 후 공간을 선택하고, 발표 자료를 불러와 VR 환경에서 발표하거나 면접 질문에 답할 수 있습니다. 녹음 결과는 서버로 전달되고, 피드백과 질문 기록은 사용자별로 저장되는 구조를 갖추었습니다.",
    process: ["Login", "Main World", "Office Room", "PDF Upload", "Recording", "Feedback"],
    focus: [
      {
        title: "목적별 공간",
        body: "MainWorld, OfficeRoom, InterviewRoom 등 씬을 분리해 발표와 면접 경험이 다르게 느껴지도록 구성했습니다.",
      },
      {
        title: "발표 자료 흐름",
        body: "사용자가 PDF를 선택하면 이미지 슬라이드로 변환하고, VR 화면 안에서 페이지를 넘기며 발표할 수 있게 했습니다.",
      },
      {
        title: "피드백 루프",
        body: "마이크 녹음, STT, 질문 생성, TTS, Firestore 저장을 연결해 연습 이후 기록까지 이어지게 만들었습니다.",
      },
    ],
    deepTitle: "실제 Unity 프로젝트의 기능 흐름을 기준으로 정리했습니다.",
    deepLead:
      "프로젝트 파일에는 XR Interaction Toolkit, OpenXR, Firebase, PDF 파일 브라우저, Flask 기반 STT/TTS 요청 흐름이 함께 들어 있습니다. 상세 페이지는 이 구조를 사용자 경험 기준으로 다시 풀어낸 것입니다.",
    deepCards: [
      {
        title: "PDF Slide Practice",
        body: "OpenPDF.cs에서 PDF를 선택하고 poppler로 PNG 슬라이드로 변환한 뒤 RawImage에 표시하도록 구성했습니다.",
      },
      {
        title: "Presentation Record",
        body: "PTRecorder.cs는 발표 음성을 녹음하고 Flask 서버로 전송해 전달력, 발음/속도, 설득력 피드백을 받습니다.",
      },
      {
        title: "Interview Loop",
        body: "InterviewSceneTrigger와 QAManage는 첫 질문, 사용자 답변 녹음, STT, 다음 질문 생성 루프를 담당합니다.",
      },
      {
        title: "History Save",
        body: "FirebaseFeedbackUploader.cs는 점수와 질문 목록을 사용자별 FeedbackHistory로 저장하는 구조입니다.",
      },
    ],
    study: [
      {
        kicker: "Implementation",
        title: "VR 공간 안에서 연습, 질문, 피드백이 이어지도록 구성했습니다.",
        paragraphs: [
          "발표 모드에서는 사용자가 선택한 PDF를 슬라이드 이미지로 변환해 VR 화면에 띄우고, 발표 시간이 시작되면 음성을 녹음합니다. 녹음 파일은 서버로 전송되어 전달력, 발음과 속도, 설득력 기준으로 피드백을 받도록 설계했습니다.",
          "면접 모드에서는 첫 질문을 불러오고, 사용자의 음성 답변을 STT로 변환한 뒤 다음 질문을 생성합니다. 질문은 필요할 경우 TTS로 재생됩니다. 이 흐름을 통해 단순한 VR 공간 체험이 아니라 실제 연습에 가까운 반복 루프를 만들었습니다.",
        ],
      },
    ],
    evidenceTitle: "코드에서 확인한 구현 요소",
    evidence: [
      { label: "Scenes", value: "LoginScene, MainWorld, OfficeRoom, InterviewRoom" },
      { label: "XR", value: "XR Interaction Toolkit 2.5.4, OpenXR, Mock HMD" },
      { label: "Server", value: "/upload, /stt, /generate_questions, /interview, /tts" },
      { label: "Storage", value: "Firebase Auth, Firestore FeedbackHistory" },
    ],
  },
  nullnull: {
    label: "Main Project 03",
    category: "AI Nowcasting Prototype",
    lead: "NULL NULL AI는 서울을 찾은 외국인 여행자가 혼잡, 날씨, 이동 변수 때문에 헛걸음하지 않도록 돕는 AI Nowcasting 앱 프로토타입입니다.",
    intent:
      "서울시 실시간 도시 데이터는 유용하지만 지연이 있고, 여행자는 이동하기 전에 지금 가도 괜찮은지 알고 싶어 합니다. PRD에서는 이 간극을 지하철 T-0 데이터와 날씨 정보로 보완하는 방향을 잡았습니다.",
    role: "문제 정의, PRD 구조화, 주요 화면 흐름, AI 추천 경험, 발표 가능한 프로토타입 구성을 맡았습니다. 실제 배포 서비스가 아니라 기획, 디자인, 프로토타입 단계까지 진행한 프로젝트입니다.",
    result:
      "혼잡도 지도, AI Nowcasting, 날씨 필터, 대안 장소 추천을 중심으로 서울 여행자의 의사결정을 줄여주는 서비스 콘셉트를 정리했습니다.",
    process: ["Wasted Trip", "Persona", "Data Mapping", "Nowcasting", "Recommendation", "Prototype"],
    focus: [
      {
        title: "헛걸음 방지",
        body: "여행자가 장소에 도착한 뒤 후회하지 않도록 출발 전 혼잡과 날씨 리스크를 먼저 보여줍니다.",
      },
      {
        title: "데이터 보정",
        body: "서울시 T-30 데이터의 지연을 지하철 승하차량과 날씨 정보로 보완하는 예측 구조를 제안했습니다.",
      },
      {
        title: "대안 추천",
        body: "목적지가 붐비거나 날씨 조건이 좋지 않으면 가까운 대체 장소를 추천하는 흐름을 설계했습니다.",
      },
    ],
    deepTitle: "PRD의 문제 정의를 모바일 경험으로 압축했습니다.",
    deepLead:
      "첨부된 PRD는 서비스 이름을 NoWhere로 정의하며, 'No more wasted trips in Seoul'을 핵심 가치로 잡고 있습니다. 포트폴리오에서는 NULL NULL AI 프로젝트로 묶어 기획 의도와 프로토타입 범위를 명확히 드러냈습니다.",
    deepCards: [
      {
        title: "AI Nowcasting Engine",
        body: "서울시 실시간 인구 데이터, 지하철 승하차 데이터, 날씨 API를 함께 사용해 현재 체감 혼잡을 예측합니다.",
      },
      {
        title: "Crowd Density Map",
        body: "장소별 혼잡 수준을 지도에서 빠르게 파악하고, 방문 전 의사결정을 돕는 화면을 중심에 둡니다.",
      },
      {
        title: "Weather Filter",
        body: "비, 폭염, 추위처럼 여행 경험에 직접 영향을 주는 조건을 추천 로직에 반영합니다.",
      },
      {
        title: "Smart Alternative",
        body: "목적지가 위험하거나 붐비면 사용자 취향과 거리 기준에 맞는 대안을 제안합니다.",
      },
    ],
    study: [
      {
        kicker: "Planning Scope",
        title: "구현보다 문제 정의와 서비스 흐름을 명확히 하는 데 집중했습니다.",
        paragraphs: [
          "이 프로젝트는 실제 서비스 배포가 아니라 기획, 디자인, 프로토타입 단계까지 진행한 작업입니다. 그래서 상세 페이지에서는 기술 구현을 과장하기보다, 어떤 문제를 정의했고 어떤 데이터와 화면 구조로 풀려고 했는지에 초점을 맞췄습니다.",
          "외국인 여행자는 현지 정보를 빠르게 판단하기 어렵고, 이미 이동한 뒤에 혼잡이나 날씨 문제를 마주하면 시간 손실이 커집니다. NULL NULL AI는 이 결정을 출발 전으로 앞당기는 서비스입니다.",
        ],
      },
    ],
    evidenceTitle: "PRD 기준 서비스 지표",
    evidence: [
      { label: "Target", value: "서울을 방문하는 20~35세 외국인 여행자" },
      { label: "Metric", value: "Wasted Trip Prevented, Prediction Accuracy, DAU" },
      { label: "Data", value: "Seoul real-time city data, Subway T-0, Weather API, ODsay" },
      { label: "Scope", value: "기획 · UI 디자인 · 발표용 프로토타입" },
    ],
    note: "이 프로젝트는 구현 완료 서비스가 아니라 기획, 디자인, 프로토타입 단계까지 진행한 프로젝트입니다.",
  },
  "dspy-ad": {
    label: "Main Project 04",
    category: "Research · Prompt Engineering",
    lead: "AD Video Generation은 외식업 광고 영상을 만들 때 단순한 메뉴 설명이 아니라 광고 장면의 흐름이 반영되도록 프롬프트 구조를 연구한 논문 프로젝트입니다.",
    intent:
      "생성형 영상 모델은 텍스트의 의미를 어느 정도 따라가지만, 광고가 가져야 하는 설득 구조를 항상 안정적으로 만들지는 못합니다. 메뉴명과 분위기만 입력하면 맛있어 보이는 영상은 나올 수 있어도, 시선을 끌고 제품을 보여주고 장점을 강조한 뒤 행동을 유도하는 광고 흐름은 약해질 수 있습니다. 이 연구는 그 문제를 Hook, Showcase, Highlight, CTA라는 장면 구조로 해결하려고 했습니다.",
    role: "외식업 광고 장면 구조 분석, DSPy Signature/Module 기반 프롬프트 생성 절차 설계, 비교 실험 구성, CLIP Score와 Gemini VQA 평가 기준 정리를 맡았습니다. 논문에서는 생성 결과를 단순히 잘 나왔는지 보는 대신 의미 정합성과 광고 구조 반영을 분리해 평가했습니다.",
    result:
      "Direct LLM 방식은 CLIP 기준 의미 정합성에서 강점을 보였고, DSPy 기반 구조화 프롬프트는 VQA 기준 광고 구조 반영에서 상대적으로 안정적인 결과를 보였습니다. 연구 결과는 JCCT 등재용 논문으로 정리되었습니다.",
    process: ["AIDA", "Scene Structure", "DSPy Module", "Prompt Groups", "Generation", "CLIP/VQA"],
    focus: [
      {
        title: "광고 구조",
        body: "AIDA 모델을 Hook, Showcase, Highlight, CTA 장면 구조로 재해석해 숏폼 광고 프롬프트에 적용했습니다.",
      },
      {
        title: "비교 실험",
        body: "User baseline, Direct LLM, DSPy framework, Manual template, Rubric refined 조건을 비교했습니다.",
      },
      {
        title: "평가 분리",
        body: "CLIP은 의미 정합성, VQA는 광고 구조와 시각 안정성을 확인하도록 평가 축을 분리했습니다.",
      },
    ],
    deepTitle: "논문의 핵심은 프롬프트를 감이 아니라 절차로 만드는 것입니다.",
    deepLead:
      "연구는 성수 수제버거, 대학가 디저트 카페, 오피스 샐러드볼처럼 구체적인 음식점 광고 시나리오를 두고, 프롬프트 조건에 따라 생성 영상의 의미 정합성과 광고 구조 반영이 어떻게 달라지는지 비교했습니다.",
    deepCards: [
      {
        title: "Hook",
        body: "초반 장면에서 시선을 붙잡는 메뉴, 분위기, 상황 정보를 먼저 배치합니다. 숏폼에서는 첫 장면의 목적이 명확해야 이탈을 줄일 수 있습니다.",
      },
      {
        title: "Showcase",
        body: "제품의 재료, 질감, 조리 과정처럼 핵심 상품성이 보이는 장면을 구성합니다. 음식 광고에서는 제품 자체가 설득의 중심이 됩니다.",
      },
      {
        title: "Highlight",
        body: "브랜드 분위기와 차별점을 강화하는 장면을 넣어 영상의 설득력을 높입니다. 단순 제품 소개에서 광고로 넘어가는 구간입니다.",
      },
      {
        title: "CTA",
        body: "방문, 주문, 공유처럼 광고가 유도하는 행동을 마지막 장면에 정리합니다. 생성 영상에서 텍스트가 깨질 수 있어 후편집 전략도 함께 고려했습니다.",
      },
    ],
    study: [
      {
        kicker: "Research Question",
        title: "좋은 영상 프롬프트는 '예쁜 장면'보다 '광고로 작동하는 흐름'을 가져야 합니다.",
        paragraphs: [
          "생성형 영상 모델은 이미지를 아름답게 만들 수 있지만, 광고는 단순히 보기 좋은 장면의 모음이 아닙니다. 사용자의 시선을 붙잡고, 제품을 이해시키고, 차별점을 강조한 뒤, 특정 행동을 유도해야 합니다. 이 연구는 외식업 광고에서 반복적으로 등장하는 설득 흐름을 장면 구조로 정의하고, 그 구조가 프롬프트에 반영될 때 결과가 어떻게 달라지는지 확인했습니다.",
          "AIDA 모델은 Attention, Interest, Desire, Action으로 광고의 설득 단계를 설명합니다. 논문에서는 이를 생성형 영상 프롬프트에 맞게 Hook, Showcase, Highlight, CTA로 재구성했습니다. 이 변환은 단순한 용어 변경이 아니라, 모델이 실제로 장면을 만들 수 있는 단위로 광고 이론을 내려놓는 작업입니다.",
        ],
        bullets: [
          "광고 이론을 영상 생성 모델이 사용할 수 있는 장면 단위로 변환",
          "프롬프트 조건별 결과를 동일 시나리오에서 비교",
          "의미 정합성과 광고 구조 반영을 분리해 평가",
        ],
      },
      {
        kicker: "Method",
        title: "DSPy를 사용해 프롬프트 생성을 반복 가능한 절차로 구성했습니다.",
        paragraphs: [
          "Direct LLM 방식은 자유롭게 프롬프트를 만들 수 있지만, 항상 같은 기준으로 광고 구조를 유지한다고 보장하기 어렵습니다. 반면 DSPy는 입력, 출력, 제약 조건을 Signature와 Module로 정리할 수 있기 때문에 프롬프트 생성을 더 절차화된 방식으로 다룰 수 있습니다. 연구에서는 메뉴와 매장 상황을 입력으로 받아 광고 장면 구조를 포함한 프롬프트를 생성하도록 설계했습니다.",
          "실험은 User baseline, Direct LLM, DSPy framework, Manual template, Rubric refined 조건으로 나누었습니다. 이 구분을 통해 단순 사용자 입력, 일반 LLM 생성, 구조화된 DSPy 생성, 사람이 만든 템플릿, 평가 기준을 반영한 개선 프롬프트가 각각 어떤 차이를 만드는지 비교할 수 있었습니다.",
        ],
      },
      {
        kicker: "Evaluation",
        title: "CLIP과 VQA를 함께 사용해 결과를 더 입체적으로 해석했습니다.",
        paragraphs: [
          "CLIP Score는 텍스트와 영상 프레임이 의미적으로 얼마나 맞는지 확인하는 데 유용합니다. 하지만 광고 구조가 잘 반영되었는지, CTA가 적절한지, 장면 흐름이 안정적인지는 CLIP만으로 판단하기 어렵습니다. 그래서 논문에서는 CLIP과 함께 Gemini 2.5 Flash 기반 VQA 평가를 사용했습니다.",
          "VQA 평가는 광고 구조, 제품 반영, 시각 품질, 안정성, CTA 적합성 기준으로 이루어졌습니다. 결과적으로 Direct LLM은 의미 정합성에서 강점을 보였고, DSPy framework는 광고 구조 반영 측면에서 안정적인 경향을 보였습니다. 이 차이는 실제 서비스에서 어떤 지표를 우선할지에 따라 프롬프트 전략이 달라져야 한다는 점을 보여줍니다.",
        ],
        bullets: [
          "CLIP: 8개 프레임 평균 기반 텍스트-영상 의미 정합성",
          "VQA: 대표 프레임을 기준으로 광고 구조와 시각 품질 평가",
          "실무 적용: 텍스트/CTA는 생성 이후 후편집 전략과 함께 다루는 것이 안정적",
        ],
      },
    ],
    evidenceTitle: "논문에서 사용한 평가 기준",
    evidence: [
      { label: "CLIP", value: "8개 프레임 평균 기반 텍스트-영상 의미 정합성" },
      { label: "VQA", value: "Gemini 2.5 Flash 기반 4개 대표 프레임 평가" },
      { label: "Rubric", value: "광고 구조, 제품 반영, 시각 품질, 안정성, CTA 적합성" },
      { label: "Finding", value: "DSPy 조건은 광고 구조 반영에서 비교적 안정적인 경향" },
    ],
    note: "생성 영상의 텍스트는 깨질 수 있어, 논문에서는 CTA 문구를 후편집 단계에서 다루는 전략도 함께 언급했습니다.",
  },
};

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-cream/25 px-3 py-1 text-[11px] tracking-wide text-cream/75">
      {children}
    </span>
  );
}

function LightChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-cream/18 bg-cream/[0.06] px-3 py-1 text-[11px] tracking-wide text-cream/68">
      {children}
    </span>
  );
}

function shouldContainImage(project: Project) {
  return project.id === "dspy-ad" || project.id === "nullnull";
}

function imageClassName(project: Project, extra = "") {
  const fit = shouldContainImage(project)
    ? "object-contain object-center"
    : "object-cover object-top";
  return `warm-screenshot w-full rounded-[1.35rem] ${fit} ${extra}`;
}

export function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const project = projects.find((p) => p.id === id);

  useLayoutEffect(() => {
    const goTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      (
        window as unknown as {
          __portfolioLenis?: {
            scrollTo: (target: number | HTMLElement, options?: object) => void;
          };
        }
      ).__portfolioLenis?.scrollTo(0, { immediate: true, force: true });
    };

    goTop();
    requestAnimationFrame(goTop);
    const timers = [0, 80, 180].map((delay) => window.setTimeout(goTop, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [id]);

  if (!project || !detailProjectIds.includes(project.id)) {
    return <Navigate to="/#projects" replace />;
  }

  const detail = details[project.id];
  const isPulse = project.id === "pulse";
  const returnTo =
    (location.state as { returnTo?: string } | null)?.returnTo ?? "#projects";

  return (
    <main className="min-h-screen bg-cream text-espresso">
      <section className="relative overflow-hidden bg-espresso px-5 pb-10 pt-28 text-cream sm:px-9 sm:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cream/25" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[72vh] w-px bg-cream/10" />
        <div className="mx-auto max-w-[1480px]">
          <Link
            to={`/${returnTo}`}
            replace
            className="link-underline text-[12px] uppercase tracking-[0.26em] text-cream/60"
          >
            Back to Projects
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel">
                <span>{detail.label}</span>
                <span className="h-px w-10 bg-caramel/60" />
                <span>{detail.category}</span>
              </div>
              <h1 className="mt-7 font-serif text-[clamp(4.8rem,13vw,14rem)] leading-[0.82] tracking-tight text-cream">
                {project.title}
              </h1>
              <p className="mt-8 max-w-4xl text-[clamp(1.2rem,2vw,2rem)] leading-relaxed text-cream/76">
                {project.subtitle}
              </p>
            </div>

            <aside className="rounded-[1.4rem] border border-cream/15 bg-cream/[0.06] p-6 shadow-[0_30px_100px_-65px_rgba(0,0,0,0.85)] backdrop-blur">
              <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-caramel">
                Case Info
              </p>
              <div className="mt-6 space-y-5 text-[14px] leading-relaxed text-cream/75">
                <p>{project.year}</p>
                <p>{project.role}</p>
                {project.award && (
                  <p className="w-fit rounded-full bg-cream/10 px-3 py-1 text-[12px] font-medium text-cream ring-1 ring-cream/20">
                    {project.award}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </aside>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-cream/15 bg-cream/10 p-3 shadow-[0_70px_160px_-70px_rgba(0,0,0,0.9)]">
            <div className="absolute left-6 top-6 z-10 rounded-full bg-espresso/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cream/70 backdrop-blur">
              Case Study View
            </div>
            <img
              src={project.cover}
              alt={project.title}
              className={imageClassName(project, "aspect-[16/8.1] bg-cream")}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-sand bg-linen px-5 py-10 sm:px-9">
        <div className="mx-auto grid max-w-[1320px] gap-px overflow-hidden rounded-[1.3rem] border border-sand bg-sand md:grid-cols-3">
          {[
            ["Intent", detail.intent],
            ["My Role", detail.role],
            ["Result", detail.result],
          ].map(([label, body], index) => (
            <Reveal key={label} delay={index * 0.04} className="bg-cream p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-caramel">
                {label}
              </p>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-coffee">
                {body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
              Overview
            </p>
            <p className="mt-5 max-w-5xl text-[22px] leading-[1.9] text-coffee">
              {detail.lead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-sand bg-sand lg:grid-cols-3">
            {detail.focus.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="bg-cream p-8"
              >
                <span className="font-display text-5xl font-bold text-mocha/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-8 text-2xl font-semibold text-espresso">
                  {item.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.85] text-coffee">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-5 py-20 text-cream sm:px-9 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
              System Logic
            </p>
            <h2 className="mt-5 max-w-4xl font-serif-ko text-4xl leading-tight text-cream sm:text-6xl">
              {detail.deepTitle}
            </h2>
            <p className="mt-7 max-w-4xl text-[16px] leading-[1.9] text-cream/70">
              {detail.deepLead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-cream/15 bg-cream/15 md:grid-cols-2 lg:grid-cols-4">
            {detail.deepCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 0.04}
                className="bg-espresso p-7"
              >
                <span className="font-serif text-4xl text-caramel">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-semibold text-cream">
                  {card.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.8] text-cream/68">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
              Process
            </p>
            <div className="mt-5 grid gap-px overflow-hidden rounded-[1.5rem] border border-cream/15 bg-cream/15 md:grid-cols-3 lg:grid-cols-6">
              {detail.process.map((item, index) => (
                <div key={item} className="bg-cream/[0.06] p-5">
                  <span className="font-display text-4xl font-bold text-cream/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-7 text-[14px] font-semibold leading-snug text-cream/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-28">
        <div className="mx-auto max-w-[1220px]">
          {detail.study.map((block, index) => (
            <Reveal
              key={block.title}
              className="grid gap-10 border-t border-sand py-14 lg:grid-cols-[280px_1fr]"
            >
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
                  {block.kicker}
                </p>
                <span className="mt-8 block font-display text-7xl text-mocha/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <article>
                <h2 className="font-serif-ko text-4xl leading-tight text-espresso sm:text-5xl">
                  {block.title}
                </h2>
                <div className="mt-7 space-y-5 text-[16px] leading-[1.95] text-coffee">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {block.bullets && (
                  <ul className="mt-8 grid gap-3 md:grid-cols-3">
                    {block.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-2xl border border-sand bg-linen/60 p-5 text-[14px] leading-[1.75] text-coffee"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-linen px-5 py-20 sm:px-9 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="rounded-[1.75rem] border border-sand bg-cream p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-caramel">
                  Source Based
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-espresso">
                  {detail.evidenceTitle}
                </h3>
                {detail.note && (
                  <p className="mt-5 text-[14px] leading-[1.8] text-caramel">
                    {detail.note}
                  </p>
                )}
              </div>
              <div className="grid gap-px overflow-hidden rounded-[1.2rem] border border-sand bg-sand md:grid-cols-2">
                {detail.evidence.map((item) => (
                  <div key={item.label} className="bg-cream p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-caramel">
                      {item.label}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.7] text-coffee">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
              Screens & Materials
            </p>
            <h2 className="mt-4 font-serif-ko text-4xl leading-tight text-espresso sm:text-5xl">
              화면과 자료를 프로젝트별 맥락에 맞게 담았습니다.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[project.cover, ...(project.gallery ?? [])].map((image, index) => (
              <Reveal key={image} delay={index * 0.04}>
                <div className="overflow-hidden rounded-[1.6rem] border border-sand bg-sand/35 p-2">
                  <img
                    src={image}
                    alt=""
                    loading={index === 0 ? undefined : "lazy"}
                    className={imageClassName(project, "aspect-[4/3] bg-cream")}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isPulse && (
        <section className="bg-espresso px-5 py-24 text-cream sm:px-9 sm:py-32">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-caramel">
                PULSE Flow
              </p>
              <h2 className="mt-4 max-w-3xl font-serif-ko text-4xl leading-tight text-cream sm:text-5xl">
                {pulse.tagline}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_420px]">
              <div className="space-y-5 text-[16px] leading-[1.9] text-cream/70">
                {pulse.overview.map((text, index) => (
                  <Reveal key={text} delay={index * 0.04}>
                    <p>{text}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-cream/15 bg-cream p-5">
                  <img
                    src={pulse.pipeline}
                    alt="PULSE 기술 파이프라인"
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </Reveal>
            </div>

            <div className="mt-20 space-y-8">
              {contributions.map((item, index) => (
                <Reveal
                  key={item.no}
                  delay={index * 0.04}
                  className="grid gap-6 border-t border-cream/15 pt-8 lg:grid-cols-[170px_1fr]"
                >
                  <div>
                    <span className="font-display text-5xl font-bold text-cream/30">
                      {item.no}
                    </span>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
                      {item.tag}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-[15px] leading-[1.85] text-cream/68">
                      {item.lead}
                    </p>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <p className="text-[13.5px] leading-[1.8] text-cream/64">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
                          Why
                        </span>
                        {item.why}
                      </p>
                      <p className="text-[13.5px] leading-[1.8] text-cream/64">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
                          How
                        </span>
                        {item.how}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <LightChip key={point}>{point}</LightChip>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
