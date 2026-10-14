"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CityPin, CityRoute } from "@/data/city-explorer";
import type { CityImage } from "@/data/city-images";
import type { MapEra, MapLink } from "@/data/map-explorer";

const LON0 = 12.452;
const LON1 = 12.518;
const LAT0 = 41.913;
const LAT1 = 41.87;
const K = 1000 / ((LON1 - LON0) * 0.7445);
const W = 1000;
const H = Math.round((LAT0 - LAT1) * K);
const px = (lon: number) => +((lon - LON0) * 0.7445 * K).toFixed(1);
const py = (lat: number) => +((LAT0 - lat) * K).toFixed(1);
const pts = (a: number[][]) => a.map(([la, lo]) => `${px(lo)},${py(la)}`).join(" ");

// 모두 [위도, 경도]. 손으로 단순화한 대략의 선입니다.
const TIBER = [[41.913,12.4705],[41.906,12.4745],[41.9035,12.47],[41.9017,12.4663],[41.8995,12.4665],[41.896,12.469],[41.8925,12.4705],[41.891,12.476],[41.8895,12.479],[41.886,12.479],[41.882,12.4765],[41.8795,12.473],[41.874,12.4715],[41.87,12.47]];
const SERVIAN = [[41.8935,12.4815],[41.901,12.485],[41.9055,12.4975],[41.8975,12.5035],[41.889,12.5],[41.884,12.495],[41.884,12.4893],[41.88,12.485],[41.877,12.478],[41.881,12.4755],[41.889,12.4785],[41.8935,12.4815]];
const AURELIAN = [[41.9105,12.4742],[41.9112,12.4764],[41.912,12.483],[41.9095,12.489],[41.9105,12.497],[41.9093,12.5016],[41.906,12.507],[41.899,12.511],[41.8915,12.5155],[41.885,12.5085],[41.879,12.499],[41.8735,12.5016],[41.873,12.495],[41.8765,12.481],[41.877,12.4728]];
const AURELIAN_W = [[41.8775,12.4712],[41.881,12.468],[41.889,12.464],[41.8935,12.4675],[41.8958,12.4692]];
const HILLS: [string, string, number, number, number, number][] = [
  ["팔라티누스", "Palatine", 41.8892, 12.4875, 36, 26],
  ["카피톨리누스", "Capitoline", 41.8935, 12.4826, 22, 18],
  ["아벤티누스", "Aventine", 41.8835, 12.4785, 42, 34],
  ["카일리우스", "Caelian", 41.8865, 12.4955, 44, 26],
  ["에스퀼리누스", "Esquiline", 41.896, 12.4995, 50, 36],
  ["비미날리스", "Viminal", 41.9005, 12.4945, 30, 22],
  ["퀴리날리스", "Quirinal", 41.9005, 12.4885, 38, 22],
];
const ROADS: [string, number[][]][] = [
  ["Via Appia", [[41.884,12.4893],[41.8735,12.5016],[41.87,12.5045]]],
  ["Via Flaminia", [[41.895,12.4825],[41.9112,12.4764],[41.913,12.4755]]],
  ["Via Sacra", [[41.8902,12.491],[41.8925,12.4855]]],
  ["Via Ostiensis", [[41.884,12.4835],[41.8765,12.481],[41.87,12.479]]],
  ["Via Salaria", [[41.9055,12.4975],[41.9105,12.497],[41.913,12.498]]],
  ["Via Nomentana", [[41.9055,12.4975],[41.9093,12.5016],[41.913,12.506]]],
  ["Via Labicana", [[41.8902,12.4922],[41.8915,12.5155],[41.8905,12.518]]],
  ["Via Aurelia", [[41.8935,12.4675],[41.8895,12.452]]],
];

const ERA_LABEL: Record<MapEra, string> = { republic: "왕정·공화정", empire: "제정", late: "후기" };

function LinkRow({ title, en, links }: { title: string; en: string; links: MapLink[] }) {
  if (!links.length) return null;
  return (
    <div className="mt-3">
      <p className="text-xs font-medium text-ink">
        {title} <span className="text-[10px] tracking-wider text-muted">{en}</span>
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="inline-block rounded-full border border-line bg-bg px-2.5 py-1 text-xs text-laurel hover:border-terra hover:text-terra">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CityExplorer({ pins, routes, images, eras, storyNote }: { pins: CityPin[]; routes: CityRoute[]; images: Record<string, CityImage>; eras: { id: MapEra; ko: string; en: string }[]; storyNote: string }) {
  const [era, setEra] = useState<MapEra | "all">("all");
  const [selected, setSelected] = useState("colosseum");
  const [routeId, setRouteId] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const byId = useMemo(() => new Map(pins.map((p) => [p.id, p])), [pins]);

  useEffect(() => {
    const read = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (byId.has(id)) {
        setEra("all");
        setSelected(id);
        document.getElementById("city-explorer")?.scrollIntoView({ block: "start" });
      }
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [byId]);

  const visiblePins = useMemo(() => (era === "all" ? pins : pins.filter((p) => p.events.some((e) => e.era === era))), [era, pins]);
  const visibleRoutes = era === "all" ? routes : routes.filter((r) => r.era === era);
  const route = visibleRoutes.find((r) => r.id === routeId) ?? null;
  const pin = visiblePins.find((p) => p.id === selected) ?? null;
  const img = pin ? images[pin.id] : undefined;

  useEffect(() => {
    if (!playing || !route) return;
    if (step >= route.steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 2200);
    return () => clearTimeout(t);
  }, [playing, step, route]);

  useEffect(() => {
    if (route) setSelected(route.steps[step].pin);
  }, [route, step]);

  const events = pin ? pin.events.filter((e) => era === "all" || e.era === era) : [];
  const stepPins = route ? route.steps.map((s) => byId.get(s.pin)!) : [];

  return (
    <section id="city-explorer" aria-labelledby="city-heading" className="mt-8 scroll-mt-24">
      <style>{`
        @keyframes cx-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        .cx-seg-new { stroke-dasharray: 1; animation: cx-draw .9s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .cx-seg-new { animation: none; } }
      `}</style>
      <h2 id="city-heading" className="sr-only">로마 시내 지도 City map</h2>
      <div className="flex flex-wrap gap-2" role="group" aria-label="시대 필터 Era filter">
        {[{ id: "all" as const, ko: "전체", en: "All" }, ...eras].map((e) => (
          <button key={e.id} type="button" aria-pressed={era === e.id} onClick={() => setEra(e.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${era === e.id ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}>
            {e.ko} <span className="text-[10px] opacity-80">{e.en}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <div className="overflow-hidden rounded-lg border border-line bg-[#efe7d8]">
            <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full touch-manipulation" role="img" aria-label="고대 로마 시내 지도 Map of ancient Rome">
              <defs>
                {routes.map((r) => (
                  <marker key={r.id} id={`cx-arrow-${r.id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill={r.color} />
                  </marker>
                ))}
              </defs>
              {HILLS.map(([ko, en, la, lo, rx, ry]) => (
                <g key={en}>
                  <ellipse cx={px(lo)} cy={py(la)} rx={rx * 1.6} ry={ry * 1.6} fill="#ddd0b6" opacity="0.8" />
                  <text x={px(lo)} y={py(la) - ry * 1.6 + 14} textAnchor="middle" fontSize="13" fill="#8a7658" fontStyle="italic">{ko}</text>
                </g>
              ))}
              <polyline points={pts(TIBER)} fill="none" stroke="#9cc0cf" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
              <text x={px(12.4665) - 8} y={py(41.906)} fontSize="15" fill="#5f8aa0" fontStyle="italic" textAnchor="end">Tiberis 티베르강</text>
              {ROADS.map(([name, p]) => (
                <g key={name}>
                  <polyline points={pts(p)} fill="none" stroke="#b9a68c" strokeWidth="3" strokeDasharray="1 0" />
                  <text x={px(p[p.length - 1][1])} y={py(p[p.length - 1][0]) - 4} fontSize="11" fill="#8a7658" textAnchor={p[p.length - 1][1] > 12.5 ? "end" : "start"}>{name}</text>
                </g>
              ))}
              <polyline points={pts(SERVIAN)} fill="none" stroke="#8a5a24" strokeWidth="3" strokeDasharray="8 5" />
              <polyline points={pts(AURELIAN)} fill="none" stroke="#6e6258" strokeWidth="5" />
              <polyline points={pts(AURELIAN_W)} fill="none" stroke="#6e6258" strokeWidth="5" />
              <circle cx={px(12.4775)} cy={py(41.8906)} r="6" fill="#efe7d8" stroke="#9cc0cf" />

              {route ? (
                <g>
                  {stepPins.slice(1, step + 1).map((s, i) => {
                    const a = stepPins[i];
                    const isNew = i === step - 1;
                    return (
                      <line key={`${route.id}-${i}-${isNew ? step : "o"}`} x1={px(a.lon)} y1={py(a.lat)} x2={px(s.lon)} y2={py(s.lat)} pathLength={1}
                        className={isNew ? "cx-seg-new" : undefined} stroke={route.color} strokeWidth="5" strokeLinecap="round" strokeOpacity={isNew ? 1 : 0.6}
                        markerEnd={`url(#cx-arrow-${route.id})`} />
                    );
                  })}
                  {stepPins.slice(0, step + 1).map((s, i) => (
                    <g key={i}>
                      <circle cx={px(s.lon) + 12} cy={py(s.lat) - 12} r="10" fill={route.color} />
                      <text x={px(s.lon) + 12} y={py(s.lat) - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{i + 1}</text>
                    </g>
                  ))}
                </g>
              ) : null}

              {visiblePins.map((p) => {
                const on = p.id === selected;
                return (
                  <g key={p.id} role="button" tabIndex={0} aria-label={`${p.ko} ${p.en}`} aria-pressed={on}
                    onClick={() => setSelected(p.id)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(p.id); } }}
                    className="cursor-pointer outline-none">
                    <circle cx={px(p.lon)} cy={py(p.lat)} r="13" fill="transparent" />
                    <circle cx={px(p.lon)} cy={py(p.lat)} r={on ? 8 : 6} fill={on ? "#a34732" : "#241c16"} stroke="#fff" strokeWidth="2" />
                    <text x={px(p.lon) + (p.lx ?? 10)} y={py(p.lat) + (p.ly ?? 4)} textAnchor={p.anchor ?? "start"} fontSize={on ? 16 : 12.5} fontWeight={on ? 700 : 500}
                      fill={on ? "#7d3324" : "#241c16"} stroke="#efe7d8" strokeWidth="3.5" paintOrder="stroke">
                      {p.ko.replace(/\(.*\)/, "").replace(/·.*$/, "")}
                    </text>
                  </g>
                );
              })}
              <g fontSize="12" fill="#6e6258">
                <line x1="20" y1={H - 52} x2="50" y2={H - 52} stroke="#8a5a24" strokeWidth="3" strokeDasharray="8 5" />
                <text x="58" y={H - 48}>세르비우스 성벽 Servian Wall (전 4세기)</text>
                <line x1="20" y1={H - 32} x2="50" y2={H - 32} stroke="#6e6258" strokeWidth="5" />
                <text x="58" y={H - 28}>아우렐리아누스 성벽 Aurelian Walls (271–)</text>
                <line x1="20" y1={H - 12} x2="50" y2={H - 12} stroke="#b9a68c" strokeWidth="3" />
                <text x="58" y={H - 8}>주요 도로 Roads</text>
              </g>
            </svg>
          </div>
          <p className="mt-1 text-[11px] leading-5 text-muted">
            지도: 코드로 그린 단순화 지도이며 언덕·성벽·도로·건물 위치는 대략입니다. 밀비우스 다리는 실제로는 더 북쪽입니다. Simplified map drawn in code; positions approximate.
          </p>
          <div className="mt-3">
            <p className="text-xs font-medium text-ink">건물 바로가기 <span className="text-[10px] text-muted">Buildings</span></p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {visiblePins.map((p) => (
                <button key={p.id} type="button" onClick={() => setSelected(p.id)} aria-pressed={p.id === selected}
                  className={`rounded-full border px-2.5 py-1 text-xs ${p.id === selected ? "border-terra bg-terra text-white" : "border-line bg-card hover:border-terra"}`}>
                  {p.ko}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-line bg-card p-4">
            <p className="text-xs font-medium text-ink">산책 경로 <span className="text-[10px] text-muted">Walking routes</span></p>
            {visibleRoutes.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {visibleRoutes.map((r) => (
                  <button key={r.id} type="button" aria-pressed={r.id === routeId}
                    onClick={() => { setRouteId(r.id === routeId ? null : r.id); setStep(0); setPlaying(false); }}
                    className="rounded-full border px-2.5 py-1 text-xs"
                    style={r.id === routeId ? { background: r.color, borderColor: r.color, color: "#fff" } : { borderColor: r.color, color: r.color }}>
                    {r.ko}
                  </button>
                ))}
              </div>
            ) : null}
            {route ? (
              <div className="mt-3">
                <p className="text-xs text-muted">{route.en}</p>
                <div className="mt-2 rounded-md bg-bg p-3" aria-live="polite">
                  <p className="text-xs text-terra">{step + 1} / {route.steps.length} · {route.steps[step].time} · {byId.get(route.steps[step].pin)?.ko}</p>
                  <p className="mt-1 text-sm text-ink">{route.steps[step].ko}</p>
                  <p className="text-[11px] text-muted">{route.steps[step].en}</p>
                </div>
                <div className="mt-2 flex gap-2">
                  <button type="button" disabled={step === 0} onClick={() => { setPlaying(false); setStep((s) => Math.max(0, s - 1)); }} className="flex-1 rounded-full border border-line px-3 py-2 text-sm disabled:opacity-40">← 이전 Prev</button>
                  <button type="button" onClick={() => { if (step >= route.steps.length - 1) setStep(0); setPlaying((p) => !p); }} className="rounded-full border border-line px-3 py-2 text-sm">{playing ? "멈춤" : "재생"}</button>
                  <button type="button" disabled={step === route.steps.length - 1} onClick={() => { setPlaying(false); setStep((s) => Math.min(route.steps.length - 1, s + 1)); }} className="flex-1 rounded-full bg-terra px-3 py-2 text-sm text-white disabled:opacity-40">다음 Next →</button>
                </div>
              </div>
            ) : null}
          </div>

          <article className="overflow-hidden rounded-lg border border-line bg-card" aria-live="polite">
            {pin ? (
              <>
                {img ? (
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} width={img.w} height={img.h} alt={`${pin.ko} 사진 (${pin.en})`} className="block h-auto w-full bg-stone" loading="lazy" decoding="async" />
                    <figcaption className="px-4 pt-1.5 text-[10px] leading-4 text-muted">
                      {pin.photoNote ? <span className="block">{pin.photoNote}</span> : null}
                      사진: {img.author || "작가 미상"} ·{" "}
                      {img.licenseUrl ? <a href={img.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline">{img.license}</a> : img.license} ·{" "}
                      <a href={img.source} target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a>
                    </figcaption>
                  </figure>
                ) : null}
                <div className="p-4">
                  <p className="text-[11px] tracking-[0.12em] text-terra">{pin.en.toUpperCase()}</p>
                  <h3 className="mt-0.5 font-serif text-xl text-ink">{pin.ko}</h3>
                  <p className="mt-2 text-xs font-medium text-ink">지은 사람·때 <span className="text-[10px] text-muted">Builder & date</span></p>
                  <p className="text-sm text-ink">{pin.builder.ko}</p>
                  <p className="text-[11px] text-muted">{pin.builder.en}</p>
                  <p className="mt-3 text-xs font-medium text-ink">여기서 있었던 일 <span className="text-[10px] text-muted">What happened{era !== "all" ? ` · ${ERA_LABEL[era]}` : ""}</span></p>
                  <ol className="mt-1.5 space-y-2">
                    {events.map((e, i) => (
                      <li key={i} className="border-l-2 border-terra/50 pl-2.5">
                        <p className="text-sm text-ink"><span className="mr-1 font-medium text-terra">{e.year}</span>{e.ko}</p>
                        <p className="text-[11px] text-muted">{e.en}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-md bg-bg p-2.5">
                      <p className="text-[11px] font-medium text-terra">그때 Then</p>
                      <p className="text-sm text-ink">{pin.then.ko}</p>
                      <p className="text-[11px] text-muted">{pin.then.en}</p>
                    </div>
                    <div className="rounded-md bg-bg p-2.5">
                      <p className="text-[11px] font-medium text-laurel">지금 Now</p>
                      <p className="text-sm text-ink">{pin.now.ko}</p>
                      <p className="text-[11px] text-muted">{pin.now.en}</p>
                    </div>
                  </div>
                  <LinkRow title="인물" en="People" links={pin.people} />
                  <LinkRow title="전쟁" en="Wars" links={pin.wars} />
                  <LinkRow title="관련 영화" en="Films" links={pin.films} />
                  {pin.stories.length ? (
                    <div className="mt-4 rounded-md border border-dashed border-[#a6843d] bg-[#fbf3e6] p-3">
                      <p className="text-xs font-medium text-[#8a5a24]">전해지는 이야기 <span className="text-[10px] opacity-80">Unverified tales</span></p>
                      <ul className="mt-1.5 space-y-1.5">
                        {pin.stories.map((s, i) => (
                          <li key={i}><p className="text-sm text-ink">{s.ko}</p><p className="text-[11px] text-muted">{s.en}</p></li>
                        ))}
                      </ul>
                      <p className="mt-2 text-[10px] text-muted">{storyNote}</p>
                    </div>
                  ) : null}
                </div>
              </>
            ) : (
              <p className="p-4 text-sm text-muted">이 시대에는 고른 건물의 사건이 없습니다. 다른 핀을 고르세요. No events here in this era.</p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
