import { copyFileSync, existsSync } from "fs";
// SPA 라우팅을 위한 GitHub Pages 폴백: 404.html = index.html
if (existsSync("dist/index.html")) {
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("postbuild: dist/404.html 생성 (SPA 폴백)");
}
