import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { dailyLead, dailySources, dailyTopics } from "@/data/daily";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "일상",
  description: "로마 사람의 밥, 집, 목욕탕, 포룸, 시민과 노예. 영화의 연회가 아니라 도시와 농촌의 보통 하루에 가깝게 적습니다.",
  path: "/daily",
});

export default function DailyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "일상", path: "/daily" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "일상" }]} />
      <PageHead kicker="DAILY LIFE" title="일상" lead={dailyLead} />
      <div className="mt-8 space-y-4">
        {dailyTopics.map((topic) => (
          <GuideBlock key={topic.id} id={topic.id} en={topic.en} title={topic.title} summary={topic.summary} points={topic.points} more={topic.more} kind="history" />
        ))}
      </div>
      <RelatedMovies topic="daily" />
      <SourceList sources={dailySources} />
    </article>
  );
}
