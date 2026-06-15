import * as THREE from "three";

/**
 * 히어로용 가벼운 3D 오브제.
 * 브라운 톤 그라데이션 + 노이즈 디스플레이스먼트가 적용된 천천히 일렁이는 구체.
 * 마우스에 따라 살짝 기울고, 단일 메쉬라 가볍다.
 *
 * mount(container) 호출 시 캔버스를 붙이고, 반환된 dispose()로 정리한다.
 */
export function mountHero(container: HTMLElement): () => void {
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
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 4.2);

  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    // 브라운 팔레트 (caramel highlight → mocha → espresso)
    uColorA: { value: new THREE.Color("#e0bd95") },
    uColorB: { value: new THREE.Color("#9c6437") },
    uColorC: { value: new THREE.Color("#2e2118") },
  };

  const geometry = new THREE.IcosahedronGeometry(1.25, 64);

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vNormal;
      varying vec3 vPos;
      varying float vNoise;

      // simplex noise (Ashima)
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
        vNormal = normal;
        float t = uTime * 0.18;
        float n = snoise(position * 1.1 + vec3(t, t * 0.7, -t));
        n += 0.5 * snoise(position * 2.3 - vec3(t * 0.6));
        vNoise = n;
        vec3 displaced = position + normal * n * 0.28;
        vPos = displaced;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      varying vec3 vNormal;
      varying vec3 vPos;
      varying float vNoise;

      void main() {
        // 높이/노이즈 기반 브라운 그라데이션
        float g = smoothstep(-0.6, 0.9, vPos.y + vNoise * 0.5);
        vec3 col = mix(uColorC, uColorB, smoothstep(0.0, 0.55, g));
        col = mix(col, uColorA, smoothstep(0.5, 1.0, g));

        // 부드러운 fresnel 림라이트 (캐러멜 톤으로 은은하게)
        vec3 viewDir = normalize(-vPos);
        float fres = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.6);
        col += fres * vec3(0.32, 0.22, 0.12);

        gl_FragColor = vec4(col, 0.985);
      }
    `,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 크기 대응
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  // 마우스 반응 (전역 포인터)
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

  // 탭이 보이지 않을 때 렌더 중단
  const onVisibility = () => {
    running = document.visibilityState === "visible";
    if (running) {
      clock.start();
      raf = requestAnimationFrame(render);
    }
  };
  document.addEventListener("visibilitychange", onVisibility);

  function render() {
    if (!running) return;
    uniforms.uTime.value = clock.getElapsedTime();
    // 마우스를 부드럽게 추적
    uniforms.uMouse.value.lerp(target, 0.05);
    mesh.rotation.y += reduce ? 0.0008 : 0.0016;
    mesh.rotation.x = uniforms.uMouse.value.y * 0.35;
    mesh.rotation.z = uniforms.uMouse.value.x * 0.2;
    camera.position.x += (uniforms.uMouse.value.x * 0.4 - camera.position.x) * 0.04;
    camera.position.y += (uniforms.uMouse.value.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  }
  raf = requestAnimationFrame(render);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener("pointermove", onPointer);
    document.removeEventListener("visibilitychange", onVisibility);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    if (renderer.domElement.parentElement === container) {
      container.removeChild(renderer.domElement);
    }
  };
}
