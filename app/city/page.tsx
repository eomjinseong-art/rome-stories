import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityExplorer } from "@/components/CityExplorer";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { withFilmsByEra } from "@/data/movies";
import { PageHead } from "@/components/PageHead";
import { CITY_PINS, CITY_ROUTES } from "@/data/city-explorer";
import { CITY_IMAGES } from "@/data/city-images";
import { MAP_ERAS, MAP_STORY_NOTE } from "@/data/map-explorer";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "로마 시내 탐험",
  description: "콜로세움, 포룸, 판테온, 폼페이우스 극장까지 고대 로마 시내 건물 27곳을 지도와 사진으로. 카이사르의 마지막 날, 황제들의 로마, 그리스도교 로마 산책 경로.",
  path: "/city",
});

export default function CityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "로마 시내 탐험", path: "/city" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/map", label: "지도·지역" }, { label: "로마 시내 탐험" }]} />
      <PageHead
        kicker="CITY OF ROME"
        title="로마 시내 탐험"
        lead="일곱 언덕과 티베르강, 두 겹의 성벽 사이에 선 건물 27곳입니다. 핀을 누르면 사진과 지은 사람, 그곳에서 있었던 일, 그때와 지금이 열립니다. Explore 27 buildings of ancient Rome."
      />
      <CityExplorer pins={withFilmsByEra(CITY_PINS)} routes={CITY_ROUTES} images={CITY_IMAGES} eras={MAP_ERAS} storyNote={MAP_STORY_NOTE} />
      <CoupangCard copy={{ icon: "🏟️", ko: "로마는 하루아침에 지어지지 않았지만, 주문은 하루 만에 와요", en: "Rome wasn't built in a day. Your order might be." }} />
      <section className="mt-10" aria-labelledby="city-list">
        <h2 id="city-list" className="font-serif text-2xl text-ink">건물 목록 <span className="text-sm text-muted">All buildings</span></h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_PINS.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="block rounded-md border border-line bg-card px-3 py-2 text-sm hover:border-terra">
                <span className="text-ink">{p.ko}</span>
                <span className="block text-[11px] text-muted">{p.en} · {p.builder.en}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          이탈리아 전체 지도는 <Link href="/map" className="text-laurel underline">지역 탐험 지도</Link>에 있습니다. 사진은 모두 Wikimedia Commons의 퍼블릭 도메인·CC 라이선스 사진이며, 각 카드에 작가와 라이선스를 적었습니다.
        </p>
      </section>
    </div>
  );
}
