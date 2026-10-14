import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { CoupangCard } from "@/components/CoupangCard";
import { RegionExplorer } from "@/components/RegionExplorer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { MAP_ERAS, MAP_PINS, MAP_ROUTES, MAP_STORY_NOTE } from "@/data/map-explorer";
import { regions } from "@/data/places";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "지도·지역",
  description: "핀 22개와 한니발·카이사르·스파르타쿠스·알라리크·벨리사리우스 원정 경로를 따라가는 이탈리아 지역 탐험 지도. 이탈리아의 로마에서 시칠리아, 카르타고, 그리스, 이집트, 갈리아와 변경까지. 로마가 손을 뻗친 지역을 카드로 정리합니다.",
  path: "/map",
});

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "지도·지역", path: "/map" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "지도·지역" }]} />
      <PageHead
        kicker="PLACES"
        title="지도·지역"
        lead="로마는 수도의 이름이면서 나라의 이름이었습니다. 아래 카드는 서쪽 바다에서 동쪽 왕국, 그리고 강가의 변경으로 나가는 순서입니다. 정확한 경계선은 세기마다 움직였습니다."
      />
      <RegionExplorer pins={MAP_PINS} routes={MAP_ROUTES} eras={MAP_ERAS} storyNote={MAP_STORY_NOTE} />
      <CoupangCard copy={{ icon: "🗺️", ko: "모든 길은 로마로 통하지만, 로켓배송은 우리 집 문 앞으로 통해요", en: "All roads lead to Rome. This one leads to your door." }} />
      <h2 className="mt-12 font-serif text-2xl text-ink">
        지중해 지역 카드 <span className="text-sm tracking-wider text-muted">Beyond Italy</span>
      </h2>
      <div className="mt-6 space-y-12">
        {regions.map((region) => (
          <section key={region.id} id={region.id} className="scroll-mt-40">
            <p className="text-[11px] tracking-[0.16em] text-terra">{region.en}</p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{region.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{region.lead}</p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {region.places.map((place) => (
                <GuideBlock key={place.id} id={place.id} en={place.en} title={place.title} summary={place.summary} points={place.points} more={place.more}>
                  {place.links ? <RelatedLinks links={place.links} /> : null}
                </GuideBlock>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
