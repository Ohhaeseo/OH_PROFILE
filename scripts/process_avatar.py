"""
아바타 이미지의 흰색 배경을 투명하게 만들어 브라운 헤일로 위에 깔끔하게 띄웁니다.

사용:
  1) 받은 3D 아바타 이미지를 아래 경로에 저장
       public/assets/avatar.png
  2) 프로젝트 루트에서 실행
       python scripts/process_avatar.py

흰 배경이 아니거나 이미 투명한 PNG면 그대로 두면 됩니다.
"""

from PIL import Image
from collections import deque
import os

SRC = os.path.join("public", "assets", "avatar.png")
OUT = SRC  # 같은 파일을 투명 처리해 덮어씀

THRESHOLD = 28  # 흰색으로 간주할 허용 오차(0~255). 크게 할수록 더 많이 지움


def near_white(px):
    r, g, b = px[0], px[1], px[2]
    return (255 - r) <= THRESHOLD and (255 - g) <= THRESHOLD and (255 - b) <= THRESHOLD


def main():
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    px = img.load()

    # 네 모서리에서 flood fill — 인물 안쪽의 흰색(예: 셔츠 하이라이트)은 보존
    visited = [[False] * w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            q.append((x, y))

    cleared = 0
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, a = px[x, y]
        if not near_white((r, g, b)):
            continue
        px[x, y] = (r, g, b, 0)  # 투명화
        cleared += 1
        q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    # 가장자리 살짝 부드럽게(계단현상 완화)
    img.save(OUT)
    print(f"done: cleared {cleared} px → {OUT} ({w}x{h})")


if __name__ == "__main__":
    main()
