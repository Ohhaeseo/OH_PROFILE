import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages 프로젝트 페이지: https://ohhaeseo.github.io/OH_PROFILE/
// 프로덕션 빌드에서만 base 경로를 적용하고, 로컬 개발은 "/" 사용.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/OH_PROFILE/" : "/",
  plugins: [react(), tailwindcss()],
}));
