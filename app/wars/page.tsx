import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { wars } from "@/data/wars";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "전쟁",
  description:
    "피로스 전쟁, 포에니 전쟁, 마케도니아·그리스 전쟁, 갈리아 전쟁, 카이사르의 내전, 악티움, 게르만족과의 싸움. 원인, 누구, 결과.",
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
            wars.map((war) => ({ name: war.ko, path: `/wars/${war.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "전쟁" }]} />
      <PageHead
        kicker="Wars"
        title="전쟁"
        lead="로마가 이탈리아를 넘어 지중해를 감싼 싸움, 그리고 로마인끼리의 내전입니다. 각 카드는 원인, 누구, 결과 세 칸으로 시작합니다. 그리스·마케도니아 전쟁은 따로 표시합니다."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {wars.map((war) => (
          <Link key={war.slug} href={`/wars/${war.slug}`} className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-xs tracking-[0.14em] text-bronze" lang="en">
              {war.en}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{war.ko}</h2>
            <p className="mt-1 text-xs text-terra">{war.years}</p>
            <p className="mt-3 text-sm leading-7 text-ink">{war.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
