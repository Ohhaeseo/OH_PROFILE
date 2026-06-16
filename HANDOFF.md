# 인수인계 (HANDOFF) — 오해서 포트폴리오 사이트

# 인수인계 (HANDOFF) — 오해서 포트폴리오 사이트

> 다른 모델/작업자가 이어받기 위한 현재 상태 정리.

## 0. 한눈에

- **프로젝트 위치**: `c:\OH_profile\portfolio_site`
- **라이브 사이트**: https://ohhaeseo.github.io/OH_PROFILE/ (GitHub Pages, 공개 레포)
- **원격**: https://github.com/Ohhaeseo/OH_PROFILE.git (브랜치 `main`)
- **스택**: Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis + Three.js(패션 페이지 전용 lazy-load) + react-router-dom v6
- **페이지**: `/` 개발 포트폴리오(브라운 에디토리얼), `/fashion` 패션 포트폴리오(다크 + 3D)

## 1. ⚠️ 지금 git 상태 (중요)

- 원격/HEAD 최신 커밋: **`a0c0b21`** ("polish: 자기소개 보강·히어로 가독성·컨택트 담백·파이프라인 축소")
- **커밋 안 된 로컬 변경분이 남아 있음** (push 안 됨). 아래 수정이 작업트리에만 있고 커밋이 계속 중단됨:
  - `src/styles/theme.css` — body에 `word-break: keep-all; overflow-wrap: break-word;` 추가 (한글 어절 단위 줄바꿈)
  - `src/data/profile.ts` — `about` 자기소개: **2027년 졸업 예정**으로 수정 + 문구 자연스럽게
  - `src/data/pulse.ts` — `eyebrow` "Main Project · 졸업작품", `tagline`/`overview`에서 불필요한 쉼표·따옴표·기호 제거해 자연스럽게
- **다음 작업자 첫 할 일**: `git add -A && git commit -m "..." && git push origin main` 로 이 변경분을 올릴 것. (빌드 통과 상태 — `npm run build` OK)

### 인증/배포 메모

- `gh` CLI 없음. **Git Credential Manager에 Ohhaeseo 토큰 캐시**되어 push 가능 (scope: repo, workflow).
- push 자격증명 트릭:
  ```bash
  git -c credential.helper='!f() { echo "username=Ohhaeseo"; printf "protocol=https\nhost=github.com\n\n" | git credential fill 2>/dev/null | grep "^password="; }; f' push origin main
  ```
- **배포는 GitHub Actions 자동**: `main` push 시 `.github/workflows/deploy.yml`이 빌드 후 Pages 배포(1~2분).
- Pages 활성화됨(build_type: workflow). 무료 플랜이라 **레포 public 전환**해 둠(비공개 시 Pages 중단).

## 2. 사용자가 마지막으로 요청한 것 (남은 TODO)

1. ✅(작업트리·커밋필요) 한글 단어 중간 끊김 → `word-break: keep-all` 전역
2. ✅(작업트리·커밋필요) **2027년 졸업 예정**
3. 🔶 **모든 글 AI스러운 표현 줄이기** — 일부만 됨(about, pulse overview). 남은 곳:
   - `src/data/pulse.ts` `contributions[].lead/why/how/points` (예: "단순히 'AI로 영상 생성'이 아니라, ...")
   - `src/data/projects.ts` 각 `summary`/`highlights` (em대시 `—`, "~가 아니라, ~", 과한 수식)
   - `src/sections/Contact.tsx` 카피
   - `src/data/fashion.ts` `manifesto`("디테일은 거짓말을 하지 않는다" 등)
   - 규칙: "~가 아니라, ~"의 불필요한 쉼표 제거 / em대시·따옴표 남발 자제 / 담백·사람이 쓴 듯한 한국어.
4. 🔶 **패션 3D**: 오브제 크기 줄이고 오른쪽 이동 + 페이지 구성 깔끔히 — **미착수**.
   - 크기/위치: `src/lib/fashionThree.ts` 에서 `mesh.scale.setScalar(0.75); mesh.position.x = 1.1;` 등 + `src/pages/Fashion.tsx` `Hero3D` div 마스크 `radial-gradient(circle at 57% 40% ...)`를 오른쪽(예: `78% 40%`)으로.
   - 레이아웃: `src/pages/Fashion.tsx` (HERO / MANIFESTO / LOOKBOOK / OUTRO).
5. ✅(커밋 a0c0b21 반영) Contact 담백·줄간격, PULSE 파이프라인 이미지 축소(max-w-600), 히어로 이름 가독성(mix-blend 제거+글로우)·포트레이트 하단 페이드.

## 3. 구조 / 핵심 파일

```
src/
  App.tsx              # 라우터(basename=/OH_PROFILE on prod) + Nav + Routes
  components/Nav.tsx   # 라우트 인지 스타일, Wardrobe↔Portfolio
  components/Reveal.tsx
  pages/Portfolio.tsx  # HeroIntro→PulseFeature→Work→Capabilities→Timeline→Contact
  pages/Fashion.tsx    # 다크 패션. Hero3D(lazy three)+Manifesto+Lookbook+Outro
  sections/HeroIntro.tsx   # ★히어로: 데스크탑=스크롤 트래블(사진 중앙→좌측+소개), 모바일=스택. IntroText/Values 포함
  sections/PulseFeature.tsx# ★PULSE 전용(커버/개요/파이프라인/기여 Why·How)
  sections/Work.tsx        # PULSE 제외 프로젝트 + Craft
  sections/Capabilities.tsx# Tech Stack 6그룹
  sections/Timeline.tsx    # ★로드맵(중앙 스파인, 좌=수상/우=활동)
  sections/Contact.tsx
  sections/Hero.tsx, About.tsx  # 구버전, 현재 미사용
  data/profile.ts   # 이름/about/values/stacks/awards/activities
  data/projects.ts  # 프로젝트 + sideWorks
  data/pulse.ts     # PULSE 상세
  data/fashion.ts   # 패션 인트로/룩북
  lib/fashionThree.ts  # ★패션 다크 3D 셰이더 (mount→{dispose,setScroll})
  lib/useLenis.ts, useMediaQuery.ts, threeHero.ts(미사용)
  styles/theme.css  # 브라운 토큰 + bone/ash + 폰트 + grain + word-break
public/assets/ , public/assets/fashion/(fashion-1~6.jpg)
.github/workflows/deploy.yml , public/.nojekyll , scripts/postbuild.mjs
vite.config.ts  # base prod=/OH_PROFILE/ , dev=/
```

## 4. 콘텐츠 수정 위치

- 자기소개/이름/연락처/스택/수상·활동: `src/data/profile.ts`
- 프로젝트: `src/data/projects.ts`
- PULSE 상세: `src/data/pulse.ts`
- 패션: `src/data/fashion.ts`
- 연락처 섹션 문구: `src/sections/Contact.tsx`

## 5. 명령

```bash
cd c:\OH_profile\portfolio_site
npm install
npm run dev          # http://localhost:5173 (로컬 base=/)
npx tsc -b           # 타입체크
npm run build        # dist/ (+404.html). base=/OH_PROFILE/
git add -A && git commit -m "..." && git push origin main   # Actions 자동배포
```

## 6. Gotchas

- 로컬 URL `/`, 배포 `/OH_PROFILE/`. 라우터 basename 자동(BASE_URL 기반).
- `/fashion` 직접접속은 GH Pages 404 상태지만 404.html(=앱) 폴백으로 브라우저 렌더 정상.
- 패션 3D는 `three` 동적 import(코드 스플릿) → 패션 페이지만 로드.
- 헤드리스 스크린샷이 이 환경에서 자주 멈춤 → 빌드/타입체크 후 라이브에서 눈으로 확인 권장.
- 사용자 선호: 한국어, 담백·사람이 쓴 듯한 문구(AI스러운 쉼표/수식/em대시 지양), 브라운(개발)/다크(패션).
- 커밋 메시지 끝 `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` 관례.
