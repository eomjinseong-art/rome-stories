import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Topic } from "@/components/Topic";
import { DAILY_TOPICS } from "@/data/topics";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "일상",
  description:
    "로마의 밥, 집, 공중목욕탕, 포룸, 그리고 여성·남성·노예의 다른 법적 자리. 도시 로마와 폼페이 유적을 기준으로 쉽게 정리합니다.",
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
      <PageHead
        kicker="Daily Life"
        title="일상"
        lead="같은 로마인이라도 도시와 시골, 부자와 가난한 사람, 여성과 남성, 자유인과 노예는 다른 하루를 살았습니다. 아래는 기록이 많은 기원전 1세기부터 기원후 2세기까지의 도시, 특히 로마와 폼페이·오스티아를 기준으로 한 그림입니다."
      />
      {DAILY_TOPICS.map((block) => (
        <Topic key={block.id} block={block} />
      ))}
    </article>
  );
}
