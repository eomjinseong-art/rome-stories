import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { armySources, armyTopics } from "@/data/army";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "군인",
  description: "로마 군단의 편제, 방패와 투창과 갑옷, 하룻밤 진영. 영화 속 똑같은 갑옷이 천 년 내내 입혀진 것은 아닙니다.",
  path: "/army",
});

export default function ArmyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "군인", path: "/army" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "군인" }]} />
      <PageHead
        kicker="THE ARMY"
        title="군인"
        lead="로마의 확장은 군단이 만들었습니다. 다만 군단의 모습도, 갑옷도, 복무의 성격도 왕정과 제정 후기가 다릅니다. 아래는 공화정 중기부터 제정 초를 중심으로 한 설명입니다."
      />
      <div className="mt-8 space-y-4">
        {armyTopics.map((topic) => (
          <GuideBlock key={topic.id} id={topic.id} en={topic.en} title={topic.title} summary={topic.summary} points={topic.points} more={topic.more} kind="history" />
        ))}
      </div>
      <RelatedMovies topic="army" />
      <SourceList sources={armySources} />
    </article>
  );
}
