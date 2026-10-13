import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EPISODES, SEASONS, episodePath, seasonPath } from "@/data/roman-empire";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return SEASONS.map((s) => ({ season: `s${s.season}` }));
}
const find = (p: string) => SEASONS.find((s) => `s${s.season}` === p);

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }) {
  const s = find((await params).season);
  if (!s) return {};
  return pageMetadata({
    title: `로마 제국 시즌 ${s.season} ${s.koNetflix} 회차별 줄거리`,
    description: `넷플릭스 로마 제국 시즌 ${s.season} '${s.koNetflix}'(${s.en}, ${s.year}) 회차별 줄거리와 결말, 그 뒤의 실제 역사. ${s.lead}`,
    path: seasonPath(s.season),
  });
}

export default async function SeasonPage({ params }: { params: Promise<{ season: string }> }) {
  const s = find((await params).season);
  if (!s) notFound();
  const eps = EPISODES.filter((e) => e.season === s.season);
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "로마 제국 (드라마)", path: "/roman-empire" },
            { name: `시즌 ${s.season}`, path: seasonPath(s.season) },
          ]),
          itemListLd(`로마 제국 시즌 ${s.season}`, seasonPath(s.season), eps.map((e) => ({ name: `${e.ep}화 ${e.ko}`, path: episodePath(e) }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/roman-empire", label: "로마 제국 (드라마)" }, { label: `시즌 ${s.season}` }]} />
      <PageHead kicker={`SEASON ${s.season} · ${s.en.toUpperCase()} · ${s.year}`} title={s.koNetflix} lead={`${eps.length}화. ${s.lead} 결말까지 적습니다.`} />

      <section className="mt-8" aria-labelledby="eps">
        <h2 id="eps" className="font-serif text-2xl text-ink">회차</h2>
        <ol className="mt-3 space-y-3">
          {eps.map((e) => (
            <li key={e.ep} className="rounded-lg border border-line bg-card p-4">
              <Link href={episodePath(e)} className="group block">
                <p className="text-xs text-muted">
                  {e.ep}화 · 전체 {e.overall}화 · {e.year}
                </p>
                <p className="font-serif text-lg text-ink group-hover:text-terra">{e.ko}</p>
                <p className="text-xs text-muted" lang="en">{e.en}</p>
                <p className="mt-2 text-sm leading-7">{e.ending}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <CoupangCard />
      <section className="mt-10" aria-labelledby="after">
        <h2 id="after" className="font-serif text-2xl text-ink">그 뒤 실제로는</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
          {s.after.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <RelatedLinks
        links={[
          ...s.links,
          ...SEASONS.filter((x) => x.season !== s.season).map((x) => ({ href: seasonPath(x.season), label: `시즌 ${x.season}` })),
          { href: "/roman-empire", label: "전체 가이드" },
        ]}
      />
    </div>
  );
}
