import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { More } from "@/components/More";
import { PageHead } from "@/components/PageHead";
import { SchematicMap } from "@/components/SchematicMap";
import { places } from "@/data/places";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "지도·지역",
  description:
    "이탈리아에서 지중해로. 로마, 라티움, 시칠리아, 카르타고, 그리스, 갈리아, 이집트 등 핵심 지역을 카드와 약도로 연결합니다.",
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
        kicker="Places"
        title="지도·지역"
        lead="로마는 이탈리아 한가운데의 작은 도시에서 시작해 지중해를 감쌌습니다. 속주는 한 해에 생기지 않았습니다. 아래 약도는 위치 관계만 보여주고, 이야기는 카드에서 전쟁과 사람으로 이어집니다."
      />
      <SchematicMap />

      <section className="mt-8 max-w-3xl text-sm leading-7 text-muted">
        <p>
          시칠리아는 기원전 241년 이후 첫 속주에 가깝고, 아프리카는 146년, 이집트는 30년, 브리타니아는 기원후 43년에
          시작됩니다. 시리아와 소아시아도 기원전 1세기에 로마 속주가 되지만, 이 페이지는 다른 메뉴와 연결되는 지역만
          골랐습니다.
        </p>
      </section>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {places.map((place) => (
          <article key={place.slug} id={place.slug} className="scroll-mt-24 rounded-lg border border-line bg-card p-5">
            <p className="text-xs tracking-[0.14em] text-bronze" lang="en">
              {place.en}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{place.ko}</h2>
            <p className="mt-1 text-xs text-muted" lang="la">
              {place.latin}
            </p>
            <p className="mt-3 text-sm leading-7 text-ink">{place.summary}</p>
            <KeyPoints items={place.points} level={3} />
            <More paragraphs={place.more} />
            <ul className="mt-4 flex flex-wrap gap-2">
              {place.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-line px-3 py-1 text-sm hover:border-terra hover:text-terra"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-block rounded-full border border-line px-3 py-1 text-sm hover:border-terra hover:text-terra"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
