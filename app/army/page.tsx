import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Topic } from "@/components/Topic";
import { ARMY_TOPICS } from "@/data/topics";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "군인",
  description:
    "로마 군단의 편제, 투창과 갑옷, 진영, 보조군이 시민권을 받던 길. 공화정과 제정을 구분하고 영화 속 제복과 다른 점을 적습니다.",
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
        kicker="The Army"
        title="군인"
        lead="로마군은 왕정, 공화정, 제정이 서로 다릅니다. 여기서는 사람들이 흔히 떠올리는 기원전 1세기부터 기원후 2세기까지의 군단을 중심으로 적고, 그 전과 다른 점은 따로 표시합니다."
      />
      {ARMY_TOPICS.map((block) => (
        <Topic key={block.id} block={block} />
      ))}
    </article>
  );
}
