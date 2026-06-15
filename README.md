# 오해서 · 포트폴리오 웹사이트

성결대학교 미디어소프트웨어학과 졸업 포트폴리오.
감성적인 **브라운 톤온톤** + 가벼운 **3D 모션**의 에디토리얼 싱글 페이지.

레퍼런스 무드: mersi-architecture · austinknight(미니멀·따뜻함·부드러운 스크롤),
phantom.land(절제된 3D 오브제).

## 기술 스택

- Vite + React + TypeScript
- Tailwind CSS v4 (브라운 디자인 토큰)
- Lenis (부드러운 스크롤)
- Framer Motion (스크롤·등장 모션)
- Three.js (히어로 3D 오브제 1개)

## 개발

```bash
npm install
npm run dev        # http://localhost:5173
```

## 빌드 / 미리보기

```bash
npm run build      # dist/ 정적 산출물 생성
npm run preview
```

## 콘텐츠 수정

문구·프로젝트·수상 이력은 모두 아래 두 파일에서 관리합니다.

- `src/data/profile.ts` — 이름·소개·가치관·기술 스택·타임라인·연락처
- `src/data/projects.ts` — 대표 프로젝트 / 소형 작업

이미지는 `public/assets/` 에 있습니다. (PDF 포트폴리오에서 추출·가공한 스크린샷 포함)

> 연락처 기본값은 PDF 포트폴리오 기준 `dhgot@naver.com` 입니다. 바꾸려면 `src/data/profile.ts`의 `email`을 수정하세요.

## 배포

정적 사이트라 어디서든 호스팅됩니다.

- **Netlify / Vercel**: 저장소 연결 후 빌드 명령 `npm run build`, 배포 폴더 `dist`. `vite.config.ts`의 `base`는 `/` 유지.
- **GitHub Pages**: `vite.config.ts`의 `base`를 `"/<레포지토리-이름>/"` 로 바꾼 뒤 `npm run build`, `dist/`를 Pages로 배포.

## reduced-motion

`prefers-reduced-motion: reduce` 사용자에게는 Lenis·grain·등장 모션이 자동으로 비활성화되고,
3D 오브제 회전이 느려집니다. WebGL 미지원 시 정적 브라운 그라데이션으로 폴백됩니다.
