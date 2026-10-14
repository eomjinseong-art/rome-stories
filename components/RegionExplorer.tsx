"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { MapEra, MapLink, MapPin, MapRoute } from "@/data/map-explorer";

const LON0 = 6;
const LAT0 = 47.3;
const SX = 60;
const SY = 78;
const W = (21.6 - LON0) * SX;
const H = (LAT0 - 36.4) * SY;
const px = (lon: number) => +((lon - LON0) * SX).toFixed(1);
const py = (lat: number) => +((LAT0 - lat) * SY).toFixed(1);
const poly = (pts: number[][]) => pts.map(([lo, la]) => `${px(lo)},${py(la)}`).join(" ");

// 손으로 단순화한 윤곽선입니다(경위도 꼭짓점 약 60개). 실제 해안선이 아닙니다.
const ITALY = [[7.5,43.8],[8.2,44.0],[8.9,44.4],[9.8,44.1],[10.3,43.5],[10.5,42.95],[11.1,42.4],[11.8,42.05],[12.25,41.75],[12.6,41.45],[13.05,41.23],[13.6,41.2],[14.05,40.8],[14.3,40.6],[14.75,40.65],[15.0,40.2],[15.65,40.0],[16.0,39.4],[16.2,38.9],[15.65,38.25],[16.1,37.95],[16.55,38.4],[17.15,39.0],[17.15,39.4],[16.5,39.75],[16.85,40.4],[17.25,40.45],[18.0,40.1],[18.5,39.8],[18.5,40.15],[17.95,40.65],[16.85,41.12],[16.0,41.45],[15.95,41.75],[16.2,41.9],[15.9,41.95],[15.1,41.92],[14.5,42.2],[13.9,42.8],[13.6,43.5],[12.6,44.05],[12.3,44.5],[12.5,44.95],[12.3,45.45],[13.1,45.65],[13.75,45.65],[13.7,46.5],[12.4,46.65],[10.5,46.85],[9.0,46.5],[8.4,46.45],[7.1,45.9],[6.65,45.1],[7.0,44.2]];
const SICILY = [[12.4,37.8],[12.7,38.15],[13.35,38.2],[14.5,38.05],[15.6,38.27],[15.1,37.5],[15.3,37.05],[15.1,36.65],[14.4,36.8],[13.5,37.2],[12.6,37.6]];
const SARDINIA = [[8.2,41.1],[9.25,41.25],[9.8,40.6],[9.65,39.4],[9.0,39.1],[8.4,38.9],[8.4,39.9],[8.5,40.6]];
const CORSICA = [[9.35,43.0],[9.55,42.7],[9.4,41.5],[9.15,41.38],[8.6,41.7],[8.6,42.4],[9.0,42.9]];
const NEIGHBORS = [[6,47.3],[21.6,47.3],[21.6,36.9],[21.3,37.6],[21.0,38.4],[20.7,39.05],[20.0,39.7],[19.35,40.6],[19.5,41.3],[19.4,42.0],[18.5,42.45],[17.5,43.0],[16.4,43.5],[15.2,44.3],[14.4,45.3],[13.75,45.65],[13.7,46.5],[12.4,46.65],[10.5,46.85],[9.0,46.5],[8.4,46.45],[7.1,45.9],[6.65,45.1],[7.0,44.2],[7.5,43.8],[6.9,43.5],[6,43.2]];
const PO = [[7.3,44.8],[8.5,45.1],[9.7,45.1],[10.8,45.0],[11.8,45.0],[12.45,44.95]];
const TIBER = [[12.1,43.5],[12.4,42.8],[12.5,42.2],[12.25,41.75]];

const ERA_LABEL: Record<MapEra, string> = { republic: "왕정·공화정", empire: "제정", late: "후기" };

function LinkRow({ title, en, links }: { title: string; en: string; links: MapLink[] }) {
  if (!links.length) return null;
  return (
    <div className="mt-4">
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

export function RegionExplorer({ pins, routes, eras, storyNote }: { pins: MapPin[]; routes: MapRoute[]; eras: { id: MapEra; ko: string; en: string; range: string }[]; storyNote: string }) {
  const [era, setEra] = useState<MapEra | "all">("all");
  const [selected, setSelected] = useState<string>("rome");
  const [routeId, setRouteId] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const visiblePins = useMemo(() => (era === "all" ? pins : pins.filter((p) => p.events.some((e) => e.era === era))), [era, pins]);
  const visibleRoutes = useMemo(() => (era === "all" ? routes : routes.filter((r) => r.era === era)), [era, routes]);
  const route = routes.find((r) => r.id === routeId && visibleRoutes.includes(r)) ?? null;
  const pin = visiblePins.find((p) => p.id === selected) ?? null;

  useEffect(() => {
    if (!playing || !route) return;
    if (step >= route.steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 2200);
    return () => clearTimeout(t);
  }, [playing, step, route]);

  function chooseRoute(id: string) {
    setRouteId(id === routeId ? null : id);
    setStep(0);
    setPlaying(false);
  }

  const events = pin ? pin.events.filter((e) => era === "all" || e.era === era) : [];

  return (
    <section aria-labelledby="explorer-heading" className="mt-8">
      <style>{`
        @keyframes rx-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        .rx-seg-new { stroke-dasharray: 1; animation: rx-draw .9s ease-out both; }
        @keyframes rx-pulse { 0%,100% { r: 9; opacity: .55 } 50% { r: 16; opacity: 0 } }
        .rx-pulse { animation: rx-pulse 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .rx-seg-new, .rx-pulse { animation: none; } }
      `}</style>
      <h2 id="explorer-heading" className="font-serif text-2xl text-ink">
        지역 탐험 지도 <span className="text-sm tracking-wider text-muted">Region explorer</span>
      </h2>
      <p className="mt-1 text-sm text-muted">핀을 누르면 그곳의 사건·인물·영화가 열립니다. 아래에서 시대를 고르고, 원정 경로를 한 걸음씩 따라가 보세요.</p>
      <p className="text-xs text-muted">Tap a pin for events, people and films; filter by era; step through campaigns.</p>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="시대 필터 Era filter">
        {[{ id: "all" as const, ko: "전체", en: "All", range: "" }, ...eras].map((e) => (
          <button
            key={e.id}
            type="button"
            aria-pressed={era === e.id}
            onClick={() => setEra(e.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${era === e.id ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}
          >
            {e.ko} <span className="text-[10px] opacity-80">{e.en}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <div className="overflow-hidden rounded-lg border border-line bg-[#dfe8ec]">
            <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full touch-manipulation" role="img" aria-label="이탈리아 지역 지도 Map of Italy">
              <defs>
                {routes.map((r) => (
                  <marker key={r.id} id={`rx-arrow-${r.id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill={r.color} />
                  </marker>
                ))}
              </defs>
              <polygon points={poly(NEIGHBORS)} fill="#ebe4d8" stroke="#cbbfae" strokeWidth="1.5" />
              {[ITALY, SICILY, SARDINIA, CORSICA].map((p, i) => (
                <polygon key={i} points={poly(p)} fill="#f6efe2" stroke="#b9a68c" strokeWidth="2" strokeLinejoin="round" />
              ))}
              <circle cx={px(14.24)} cy={py(40.55)} r="3" fill="#f6efe2" stroke="#b9a68c" />
              <circle cx={px(13.43)} cy={py(40.8)} r="3" fill="#f6efe2" stroke="#b9a68c" />
              <polyline points={poly(PO)} fill="none" stroke="#8fb3c4" strokeWidth="2.5" />
              <polyline points={poly(TIBER)} fill="none" stroke="#8fb3c4" strokeWidth="2.5" />
              <text x={px(10.2)} y={py(44.95) + 16} fontSize="14" fill="#5f8aa0" fontStyle="italic">Po</text>
              <text x={px(9.5)} y={py(39.9)} fontSize="18" fill="#7f9fae" fontStyle="italic">Mare Tyrrhenum</text>
              <text x={px(14.6)} y={py(43.6)} fontSize="18" fill="#7f9fae" fontStyle="italic">Mare Adriaticum</text>
              <text x={px(18.2)} y={py(37.6)} fontSize="18" fill="#7f9fae" fontStyle="italic">Mare Ionium</text>

              {route ? (
                <g>
                  {route.steps.slice(1, step + 1).map((s, i) => {
                    const a = route.steps[i];
                    const isNew = i === step - 1;
                    return (
                      <line
                        key={`${route.id}-${i}-${isNew ? step : "old"}`}
                        x1={px(a.lon)} y1={py(a.lat)} x2={px(s.lon)} y2={py(s.lat)}
                        pathLength={1}
                        className={isNew ? "rx-seg-new" : undefined}
                        stroke={route.color} strokeWidth="4" strokeLinecap="round" strokeOpacity={isNew ? 1 : 0.65}
                        markerEnd={`url(#rx-arrow-${route.id})`}
                      />
                    );
                  })}
                  {route.steps.slice(0, step + 1).map((s, i) => (
                    <g key={i}>
                      <circle cx={px(s.lon)} cy={py(s.lat)} r={i === step ? 7 : 4.5} fill={route.color} stroke="#fff" strokeWidth="2" />
                      {i === step ? <circle className="rx-pulse" cx={px(s.lon)} cy={py(s.lat)} r="9" fill={route.color} /> : null}
                    </g>
                  ))}
                  <text x={px(route.steps[step].lon) + 12} y={py(route.steps[step].lat) - 12} fontSize="17" fontWeight="700" fill={route.color} stroke="#fff" strokeWidth="4" paintOrder="stroke">
                    {step + 1}. {route.steps[step].place}
                  </text>
                </g>
              ) : null}

              {visiblePins.map((p) => {
                const on = p.id === selected;
                return (
                  <g
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${p.ko} ${p.en}`}
                    aria-pressed={on}
                    onClick={() => setSelected(p.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(p.id);
                      }
                    }}
                    className="cursor-pointer outline-none"
                  >
                    <circle cx={px(p.lon)} cy={py(p.lat)} r="13" fill="transparent" />
                    <circle cx={px(p.lon)} cy={py(p.lat)} r={on ? 8 : 6} fill={on ? "#a34732" : "#241c16"} stroke="#fff" strokeWidth="2" />
                    <text
                      x={px(p.lon) + (p.lx ?? 10)}
                      y={py(p.lat) + (p.ly ?? 4)}
                      textAnchor={p.anchor ?? "start"}
                      fontSize={on ? 17 : 14}
                      fontWeight={on ? 700 : 500}
                      fill={on ? "#7d3324" : "#241c16"}
                      stroke="#f6efe2" strokeWidth="3.5" paintOrder="stroke"
                    >
                      {p.ko.replace(/\(.*\)/, "")}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="mt-1 text-[11px] leading-5 text-muted">
            지도: 경위도 꼭짓점으로 직접 그린 단순화 윤곽(실제 해안선·고대 국경 아님). 위치는 대략입니다. Simplified outline drawn in code; positions approximate.
          </p>

          <div className="mt-3">
            <p className="text-xs font-medium text-ink">
              지역 바로가기 <span className="text-[10px] text-muted">Places</span>
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {visiblePins.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p.id)}
                  aria-pressed={p.id === selected}
                  className={`rounded-full border px-2.5 py-1 text-xs ${p.id === selected ? "border-terra bg-terra text-white" : "border-line bg-card hover:border-terra"}`}
                >
                  {p.ko}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-line bg-card p-4" aria-live="polite">
            {pin ? (
              <>
                <p className="text-[11px] tracking-[0.16em] text-terra">{pin.en.toUpperCase()}</p>
                <h3 className="mt-0.5 font-serif text-xl text-ink">{pin.ko}</h3>
                <p className="mt-1 text-sm text-ink">{pin.summary.ko}</p>
                <p className="text-xs text-muted">{pin.summary.en}</p>
                <div className="mt-3">
                  <p className="text-xs font-medium text-ink">
                    주요 사건 <span className="text-[10px] text-muted">Key events{era !== "all" ? ` · ${ERA_LABEL[era]}` : ""}</span>
                  </p>
                  <ol className="mt-1.5 space-y-2">
                    {events.map((e, i) => (
                      <li key={i} className="border-l-2 border-terra/50 pl-2.5">
                        <p className="text-sm text-ink">
                          <span className="mr-1 font-medium text-terra">{e.year}</span>
                          {e.ko}
                        </p>
                        <p className="text-[11px] text-muted">{e.en}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <LinkRow title="전쟁" en="Wars" links={pin.wars} />
                <LinkRow title="인물" en="People" links={pin.people} />
                <LinkRow title="관련 영화" en="Films" links={pin.films} />
                {pin.stories.length ? (
                  <div className="mt-4 rounded-md border border-dashed border-[#a6843d] bg-[#fbf3e6] p-3">
                    <p className="text-xs font-medium text-[#8a5a24]">
                      전해지는 이야기 <span className="text-[10px] opacity-80">Unverified tales</span>
                    </p>
                    <ul className="mt-1.5 space-y-1.5">
                      {pin.stories.map((s, i) => (
                        <li key={i}>
                          <p className="text-sm text-ink">{s.ko}</p>
                          <p className="text-[11px] text-muted">{s.en}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-[10px] text-muted">{storyNote}</p>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-sm text-muted">이 시대에는 고른 장소의 사건이 없습니다. 지도에서 다른 핀을 고르세요. No events here in this era.</p>
            )}
          </div>

          <div className="rounded-lg border border-line bg-card p-4">
            <p className="text-xs font-medium text-ink">
              원정 경로 <span className="text-[10px] text-muted">Campaign routes</span>
            </p>
            {visibleRoutes.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {visibleRoutes.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    aria-pressed={r.id === routeId}
                    onClick={() => chooseRoute(r.id)}
                    className="rounded-full border px-2.5 py-1 text-xs"
                    style={r.id === routeId ? { background: r.color, borderColor: r.color, color: "#fff" } : { borderColor: r.color, color: r.color }}
                  >
                    {r.ko}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted">제정기에는 이탈리아 안에서 벌어진 큰 원정 경로를 싣지 않았습니다. No Italian campaign routes for this era.</p>
            )}
            {route ? (
              <div className="mt-3">
                <p className="font-serif text-lg text-ink">{route.ko}</p>
                <p className="text-xs text-muted">{route.en}</p>
                {route.note ? <p className="mt-1 text-[11px] text-muted">{route.note}</p> : null}
                <div className="mt-2 rounded-md bg-bg p-3" aria-live="polite">
                  <p className="text-xs text-terra">
                    {step + 1} / {route.steps.length} · {route.steps[step].year} · {route.steps[step].place}
                  </p>
                  <p className="mt-1 text-sm text-ink">{route.steps[step].ko}</p>
                  <p className="text-[11px] text-muted">{route.steps[step].en}</p>
                </div>
                <div className="mt-2 flex gap-2">
                  <button type="button" disabled={step === 0} onClick={() => { setPlaying(false); setStep((s) => Math.max(0, s - 1)); }} className="flex-1 rounded-full border border-line px-3 py-2 text-sm disabled:opacity-40">
                    ← 이전 Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (step >= route.steps.length - 1) setStep(0); setPlaying((p) => !p); }}
                    className="rounded-full border border-line px-3 py-2 text-sm"
                  >
                    {playing ? "멈춤" : "재생"}
                  </button>
                  <button type="button" disabled={step === route.steps.length - 1} onClick={() => { setPlaying(false); setStep((s) => Math.min(route.steps.length - 1, s + 1)); }} className="flex-1 rounded-full bg-terra px-3 py-2 text-sm text-white disabled:opacity-40">
                    다음 Next →
                  </button>
                </div>
                <LinkRow title="더 읽기" en="Read more" links={route.links} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
