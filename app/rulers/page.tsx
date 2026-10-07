import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { CERTAINTY_LABEL, KIND_LABEL, rulers, rulersByKind } from "@/data/rulers";
import type { Certainty, RulerKind } from "@/data/types";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "왕·황제",
  description:
    "로마의 일곱 왕과 율리우스 카이사르, 아우구스투스부터 콘스탄티누스까지. 전설과 역사를 구분한 한 줄 요약.",
  path: "/rulers",
});

const GROUPS: { kind: RulerKind; note: string }[] = [
  {
    kind: "king",
    note: "앞의 네 왕은 전설에 가깝고, 뒤의 세 왕은 에트루리아 영향이 섞인 전통 기록입니다. 해는 학자마다 한두 해 차이가 있습니다.",
  },
  {
    kind: "dictator",
    note: "카이사르는 황제가 아닙니다. 공화정의 장군이자 종신 독재관이고, 클레오파트라·내전 이야기의 축입니다.",
  },
  {
    kind: "emperor",
    note: "여기 없는 황제도 많습니다. 티투스, 도미티아누스, 네르바, 콤모두스, 카라칼라는 앞뒤 전기에서 짧게 닿습니다.",
  },
];

const TONE: Record<Certainty, "terra" | "bronze" | "stone"> = {
  legend: "terra",
  traditional: "bronze",
  historical: "stone",
};

export default function RulersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕·황제", path: "/rulers" },
          ]),
          itemListLd(
            "로마의 왕과 황제",
            "/rulers",
            rulers.map((ruler) => ({ name: ruler.ko, path: `/rulers/${ruler.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "왕·황제" }]} />
      <PageHead
        kicker="Rulers"
        title="왕·황제"
        lead="일곱 왕, 공화정을 끝낸 카이사르, 그리고 체제를 이해하는 데 필요한 황제들입니다. 한 줄로 먼저 읽고, 이름에서 핵심 세 가지와 ‘조금만 더’로 들어가세요."
      />

      {GROUPS.map((group) => (
        <section key={group.kind} className="mt-10">
          <h2 className="font-serif text-2xl text-ink">{KIND_LABEL[group.kind]}</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-muted">{group.note}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {rulersByKind(group.kind).map((ruler) => (
              <Link key={ruler.slug} href={`/rulers/${ruler.slug}`} className="rounded-lg border border-line bg-card p-4 hover:border-terra">
                <div className="flex flex-wrap gap-2">
                  <Badge tone={TONE[ruler.certainty]}>{CERTAINTY_LABEL[ruler.certainty]}</Badge>
                  <Badge>{ruler.role}</Badge>
                </div>
                <h3 className="mt-2 font-serif text-xl text-ink">{ruler.ko}</h3>
                <p className="text-xs text-bronze" lang="en">
                  {ruler.en}
                </p>
                <p className="mt-1 text-xs text-muted">{ruler.years}</p>
                <p className="mt-2 text-sm leading-6 text-ink">{ruler.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">
        이집트의 클레오파트라는 로마의 통치자가 아닙니다.{" "}
        <Link href="/cleopatra" className="text-terra underline decoration-terra/30 underline-offset-4">
          클레오파트라와 로마
        </Link>
        에서 카이사르, 안토니우스, 아우구스투스와 함께 읽습니다.
      </p>
    </div>
  );
}
