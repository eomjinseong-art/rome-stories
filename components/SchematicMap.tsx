import { places } from "@/data/places";

const REGIONS = [
  { cx: 210, cy: 58, rx: 36, ry: 24 },
  { cx: 250, cy: 130, rx: 70, ry: 42 },
  { cx: 410, cy: 86, rx: 62, ry: 32 },
  { cx: 90, cy: 205, rx: 58, ry: 46 },
  { cx: 360, cy: 210, rx: 36, ry: 62 },
  { cx: 360, cy: 325, rx: 28, ry: 16 },
  { cx: 500, cy: 220, rx: 48, ry: 36 },
  { cx: 545, cy: 108, rx: 36, ry: 24 },
  { cx: 650, cy: 300, rx: 70, ry: 40 },
  { cx: 250, cy: 360, rx: 120, ry: 36 },
];

export function SchematicMap() {
  const dots = places.filter((place) => place.onMap);

  return (
    <figure className="mt-6 overflow-hidden rounded-lg border border-line bg-sea">
      <svg viewBox="0 0 760 440" role="img" aria-labelledby="map-title map-desc" className="h-auto w-full">
        <title id="map-title">지중해 약도</title>
        <desc id="map-desc">이탈리아를 가운데 두고 서쪽의 히스파니아와 카르타고, 동쪽의 그리스와 이집트를 표시한 이해용 약도입니다.</desc>
        <rect width="760" height="440" fill="#d5e2dc" />
        {REGIONS.map((region) => (
          <ellipse
            key={`${region.cx}-${region.cy}`}
            cx={region.cx}
            cy={region.cy}
            rx={region.rx}
            ry={region.ry}
            fill="#efe4d4"
            stroke="#c4b49a"
            strokeWidth="1"
          />
        ))}
        <text x="24" y="28" fill="#6e6258" fontSize="12">
          이해용 약도 · 해안선이 아니라 위치 관계입니다
        </text>
        {dots.map((place) => {
          const side = place.labelSide ?? "right";
          const labelX = side === "left" ? place.x - 10 : place.x + 10;
          return (
            <a key={place.slug} href={`#${place.slug}`}>
              <circle cx={place.x} cy={place.y} r="5.5" fill="#8f3d2a" />
              <text
                x={labelX}
                y={place.y + 4}
                textAnchor={side === "left" ? "end" : "start"}
                fill="#2c241e"
                fontSize="13"
                fontFamily="var(--font-noto-sans), sans-serif"
              >
                {place.ko}
              </text>
            </a>
          );
        })}
      </svg>
      <figcaption className="border-t border-line bg-card px-4 py-2 text-xs leading-5 text-muted">
        점을 누르면 아래 카드로 이동합니다. 속주의 경계는 세기마다 달라져, 한 장의 지도에 모든 해를 담지 않습니다.
      </figcaption>
    </figure>
  );
}
