import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Related } from "@/components/Related";
import { Topic } from "@/components/Topic";
import { godHref, NADOO, pairHref } from "@/data/myths";
import { CLEOPATRA_TOPICS } from "@/data/topics";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "클레오파트라와 로마",
  description:
    "클레오파트라 7세는 이집트의 그리스계 여왕입니다. 카이사르, 안토니우스, 악티움, 그리고 이집트가 로마 속주가 된 과정을 전설과 기록을 구분해 적습니다.",
  path: "/cleopatra",
});

const MYTH_LINKS = [
  { href: pairHref("aphrodite-venus"), label: "나두신화 · 아프로디테 vs 베누스", external: true },
  { href: godHref("aphrodite"), label: "나두신화 · 아프로디테", external: true },
  { href: pairHref("dionysos-bacchus"), label: "나두신화 · 디오니소스 vs 바쿠스", external: true },
  { href: godHref("dionysos"), label: "나두신화 · 디오니소스", external: true },
  { href: godHref("aineias"), label: "나두신화 · 아이네아스", external: true },
  { href: `${NADOO}/greece-vs-rome`, label: "나두신화 · 그리스 vs 로마", external: true },
  { href: `${NADOO}/greece-vs-rome/history`, label: "나두신화 · 신이 합쳐진 과정", external: true },
  { href: "/myth-links", label: "이 사이트의 신화 연결" },
  { href: "/rulers/julius-caesar", label: "카이사르" },
  { href: "/rulers/augustus", label: "아우구스투스" },
  { href: "/wars/caesars-civil-war", label: "카이사르의 내전" },
  { href: "/wars/actium", label: "악티움" },
];

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
            description: "이집트 여왕 클레오파트라 7세와 카이사르, 안토니우스, 로마 정치.",
            path: "/cleopatra",
            about: ["클레오파트라", "율리우스 카이사르", "마르쿠스 안토니우스", "아우구스투스"],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "클레오파트라와 로마" }]} />
      <PageHead
        kicker="Cleopatra and Rome"
        title="클레오파트라와 로마"
        lead="영화의 연애 이야기 뒤에, 곡물과 왕위와 내전이 있습니다. 클레오파트라 7세는 로마인이 아니라 이집트의 그리스계 여왕입니다. 고대 작가가 전하는 것과, 오늘 확인할 수 없는 것을 구분합니다."
      />
      {CLEOPATRA_TOPICS.map((block) => (
        <Topic key={block.id} block={block} />
      ))}
      <Related title="신화와 이어 보기" links={MYTH_LINKS} />
    </article>
  );
}
