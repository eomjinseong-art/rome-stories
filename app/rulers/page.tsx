import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KindBadge } from "@/components/KindBadge";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { emperors, kings } from "@/data/rulers";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "왕·황제",
  description: "전승 속 로마의 왕 일곱 사람과, 제정을 이해하는 데 필요한 황제 열 사람. 전체 황제 명단이 아니라 길을 잡는 목록입니다.",
  path: "/rulers",
});

function RulerList({ people }: { people: typeof kings }) {
  return (
    <ul className="mt-4 grid gap-3">
      {people.map((person) => (
        <li key={person.slug}>
          <Link href={`/rulers/${person.slug}`} className="block rounded-lg border border-line bg-card p-4 hover:border-terra">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[11px] tracking-[0.16em] text-terra">{person.nameEn}</p>
              <KindBadge kind={person.kind} />
            </div>
            <h3 className="mt-1 font-serif text-xl text-ink">{person.nameKo}</h3>
            <p className="mt-1 text-xs text-muted">
              {person.latin} · {person.years}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{person.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function RulersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕·황제", path: "/rulers" },
          ]),
          itemListLd(
            "로마의 왕과 주요 황제",
            "/rulers",
            [...kings, ...emperors].map((person) => ({ name: person.nameKo, path: `/rulers/${person.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "왕·황제" }]} />
      <PageHead
        kicker="RULERS"
        title="왕·황제"
        lead="왕 일곱 사람은 로마가 만든 전통 목록입니다. 황제는 너무 많아서, 체제가 바뀔 때 서 있던 열 사람만 골랐습니다. 칼리굴라나 코모두스처럼 여기 없는 이름도 본문에서 짧게 위치를 알려 줍니다."
      />
      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">왕 일곱 사람</h2>
        <p className="mt-1 text-sm text-muted">전통 연대 기원전 753–509년. 전기의 상당 부분은 전설입니다.</p>
        <RulerList people={kings} />
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">길을 잡는 황제 열 사람</h2>
        <p className="mt-1 text-sm text-muted">기원전 27년부터 4세기까지. 카이사르는 황제가 아니라서 전쟁과 클레오파트라 글에 있습니다.</p>
        <RulerList people={emperors} />
      </section>
      <RelatedMovies topic="rulers" />
    </div>
  );
}
