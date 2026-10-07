import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CauseGrid } from "@/components/CauseGrid";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { servileRevolt, wars } from "@/data/wars";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "전쟁",
  description: "피로스 전쟁부터 악티움까지, 로마를 키운 큰 전쟁을 원인·상대·결과로 정리합니다. 스파르타쿠스 반란은 영화와 닿는 곁가지로 붙였습니다.",
  path: "/wars",
});

export default function WarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "전쟁", path: "/wars" },
          ]),
          itemListLd(
            "로마의 주요 전쟁",
            "/wars",
            wars.map((war) => ({ name: war.title, path: `/wars/${war.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "전쟁" }]} />
      <PageHead
        kicker="WARS"
        title="전쟁"
        lead="로마의 영토는 연설보다 전쟁에서 늘었습니다. 각 카드는 왜 싸웠는지, 누구와 싸웠는지, 끝나서 무엇이 바뀌었는지만 먼저 보여 줍니다."
      />
      <ul className="mt-8 grid gap-4 lg:grid-cols-2">
        {wars.map((war) => (
          <li key={war.slug} className="rounded-lg border border-line bg-card p-5">
            <p className="text-[11px] tracking-[0.16em] text-terra">{war.en}</p>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              <Link href={`/wars/${war.slug}`} className="hover:text-terra">
                {war.title}
              </Link>
            </h2>
            <p className="mt-1 text-xs text-muted">{war.years}</p>
            <p className="mt-2 text-sm leading-6">{war.summary}</p>
            <CauseGrid cause={war.cause} who={war.who} result={war.result} />
            <Link href={`/wars/${war.slug}`} className="mt-3 inline-block text-sm text-terra">
              세 가지 포인트와 조금만 더 →
            </Link>
          </li>
        ))}
      </ul>

      <section className="mx-auto mt-12 max-w-3xl">
        <GuideBlock
          id="spartacus"
          en={servileRevolt.en}
          title={servileRevolt.title}
          summary={`${servileRevolt.years}. ${servileRevolt.summary}`}
          points={servileRevolt.points}
          more={servileRevolt.more}
          kind="history"
        >
          <CauseGrid cause={servileRevolt.cause} who={servileRevolt.who} result={servileRevolt.result} />
        </GuideBlock>
        <SourceList sources={servileRevolt.sources} />
      </section>
      <div className="mx-auto max-w-3xl">
        <RelatedMovies topic="wars" />
      </div>
    </div>
  );
}
