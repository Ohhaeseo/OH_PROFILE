import * as THREE from "three";

/**
 * 패션 히어로용 다크 3D 배경.
 * 검은 오브시디언 같은 금속질 구체가 노이즈로 천천히 일렁이며 회전.
 * 림라이트(bone)와 스크롤 반응으로 압도적인 무드를 만든다.
 * 단일 메쉬 + 셰이더라 가볍고, 패션 페이지에서만 lazy-load 된다.
 *
 * mount(container) → dispose() 반환.
 * setScroll(p): 0~1 스크롤 진행도를 받아 회전·왜곡 강도를 키운다.
 */
export function mountFashion(container: HTMLElement): {
  dispose: () => void;
  setScroll: (p: number) => void;
} {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 4);

  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorLow: { value: new THREE.Color("#070605") },
    uColorMid: { value: new THREE.Color("#211e1a") },
    uColorRim: { value: new THREE.Color("#ece7de") },
  };

  const geometry = new THREE.IcosahedronGeometry(1.35, 96);

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uScroll;
      varying vec3 vViewN;
      varying vec3 vViewPos;
      varying vec3 vPos;
      varying float vN;

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        float t = uTime * 0.16;
        float amp = 0.22 + uScroll * 0.34;
        float n = snoise(position * 1.05 + vec3(t, -t*0.6, t*0.4));
        n += 0.5 * snoise(position * (2.1 + uScroll*1.5) + vec3(-t*0.7));
        vN = n;
        vec3 disp = position + normal * n * amp;
        vPos = disp;
        vec4 mv = modelViewMatrix * vec4(disp, 1.0);
        vViewPos = mv.xyz;
        vViewN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColorLow;
      uniform vec3 uColorMid;
      uniform vec3 uColorRim;
      varying vec3 vViewN;
      varying vec3 vViewPos;
      varying vec3 vPos;
      varying float vN;

      void main() {
        float g = smoothstep(-0.7, 0.9, vPos.y + vN * 0.5);
        vec3 col = mix(uColorLow, uColorMid, g);   // 몸체는 어둡게 유지
        vec3 viewDir = normalize(-vViewPos);
        float fres = pow(1.0 - max(dot(normalize(vViewN), viewDir), 0.0), 3.2);
        // 가장자리에만 얇고 날카로운 bone 림라이트
        col += uColorRim * smoothstep(0.45, 1.0, fres) * 0.95;
        col += uColorRim * pow(fres, 9.0) * 0.5;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  const target = new THREE.Vector2(0, 0);
  const onPointer = (e: PointerEvent) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  window.addEventListener("pointermove", onPointer);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clock = new THREE.Clock();
  let raf = 0;
  let running = true;
  let scrollP = 0;

  const onVis = () => {
    running = document.visibilityState === "visible";
    if (running) {
      clock.start();
      raf = requestAnimationFrame(render);
    }
  };
  document.addEventListener("visibilitychange", onVis);

  function render() {
    if (!running) return;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uScroll.value += (scrollP - uniforms.uScroll.value) * 0.06;
    uniforms.uMouse.value.lerp(target, 0.05);
    mesh.rotation.y += reduce ? 0.0006 : 0.0014 + scrollP * 0.004;
    mesh.rotation.x = uniforms.uMouse.value.y * 0.3;
    mesh.rotation.z = uniforms.uMouse.value.x * 0.15;
    // 스크롤 내릴수록 카메라가 더 가까워지며 압도
    const z = 4 - scrollP * 1.1;
    camera.position.x += (uniforms.uMouse.value.x * 0.5 - camera.position.x) * 0.04;
    camera.position.z += (z - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  }
  raf = requestAnimationFrame(render);

  return {
    setScroll: (p: number) => {
      scrollP = Math.max(0, Math.min(1, p));
    },
    dispose: () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVis);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container)
        container.removeChild(renderer.domElement);
    },
  };
}
