import { ImageResponse } from "next/og";

export const alt = "로마이야기 · 쉬운 로마 역사";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const title = "로마이야기";
  const sub = "어려운 로마 역사를 짧은 한국어로";
  const font = await loadFont(`${title}${sub}ROME STORIES`);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f6f1e8",
          color: "#2c241e",
          padding: "72px",
          borderTop: "18px solid #8f3d2a",
          borderBottom: "18px solid #8f3d2a",
          fontFamily: font ? "NotoSerifKR" : "serif",
        }}
      >
        <div style={{ color: "#8a5a2a", fontSize: 28, letterSpacing: 8 }}>ROME STORIES</div>
        <div style={{ marginTop: 20, fontSize: 92 }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 34, color: "#6e6258" }}>{sub}</div>
        <div style={{ marginTop: 36, fontSize: 26, color: "#8f3d2a" }}>시대 · 지도 · 왕과 황제 · 전쟁 · 일상 · 군인</div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "NotoSerifKR", data: font, weight: 700 as const, style: "normal" as const }] } : {}),
    },
  );
}
