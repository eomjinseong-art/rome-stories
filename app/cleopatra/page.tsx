import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { cleoSections, cleoSources } from "@/data/cleopatra";
import { focusHref } from "@/data/family-tree";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "클레오파트라와 로마",
  description: "클레오파트라 7세와 카이사르, 안토니우스, 이집트의 곡물, 악티움 해전. 연애담 앞에 있는 정치를 짧게 정리합니다.",
  path: "/cleopatra",
  type: "article",
});

export default function CleopatraPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "클레오파트라와 로마", path: "/cleopatra" },
          ]),
          articleLd({
            headline: "클레오파트라와 로마",
            description: "이집트 왕조의 마지막 통치자와 로마 내전의 관계. 카이사르, 안토니우스, 악티움.",
            path: "/cleopatra",
            about: ["Cleopatra VII", "Julius Caesar", "Mark Antony", "Actium"],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "클레오파트라와 로마" }]} />
      <PageHead
        kicker="CLEOPATRA"
        title="클레오파트라와 로마"
        lead="영화가 먼저 보여주는 것은 배와 연회입니다. 로마 사람이 겁낸 것은 이집트의 곡물과, 로마 장군이 동방의 왕이 되는 일이었습니다."
      />
      <div className="mt-8 space-y-4">
        {cleoSections.map((section) => (
          <GuideBlock
            key={section.id}
            id={section.id}
            en={section.en}
            title={section.title}
            summary={section.summary}
            points={section.points}
            more={section.more}
            kind={section.kind}
          />
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        카이사르, 카이사리온, 안토니우스, 옥타비아와의 관계는{" "}
        <Link href={focusHref("cleopatra")} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
          가족관계도
        </Link>
        에서 이어서 볼 수 있습니다.
      </p>
      <RelatedMovies topic="cleopatra" />
      <SourceList sources={cleoSources} />
    </article>
  );
}
