import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { Pager } from "@/components/Pager";
import { RelatedLinks } from "@/components/RelatedLinks";
import { cityLinksFor } from "@/data/city-explorer";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { focusHref } from "@/data/family-tree";
import { generalBySlug, generals } from "@/data/generals";
import { rulerBySlug } from "@/data/rulers";
import { warBySlug } from "@/data/wars";
import { GENERALS_COUPANG } from "@/lib/generals-copy";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return generals.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = generalBySlug(slug);
  if (!g) return {};
  return pageMetadata({ title: `${g.nameKo} (${g.nameEn})`, description: `${g.nameKo}(${g.years}). ${g.ko}`, path: `/generals/${g.slug}`, type: "article" });
}

export default async function GeneralPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = generalBySlug(slug);
  if (!g) notFound();
  const i = generals.findIndex((x) => x.slug === g.slug);
  const prev = generals[i - 1];
  const next = generals[i + 1];
  const path = `/generals/${g.slug}`;
  const ruler = g.ruler ? rulerBySlug(g.ruler) : undefined;
  const family = [
    ...(g.treeId ? [{ href: focusHref(g.treeId), label: "가족관계도에서 보기" }] : []),
    ...(ruler ? [{ href: `/rulers/${ruler.slug}`, label: `왕·황제: ${ruler.nameKo}` }] : []),
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "장군", path: "/generals" },
            { name: g.nameKo, path },
          ]),
          articleLd({ headline: g.nameKo, description: g.ko, path, about: [g.nameEn] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/generals", label: "장군" }, { label: g.nameKo }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-terra">{g.nameEn.toUpperCase()}</p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{g.nameKo}</h1>
        <p className="mt-2 text-sm text-muted">
          {g.latin} · {g.years} · {g.era}
        </p>
      </header>
      <p className="mt-4 text-base leading-8">{g.ko}</p>
      <p lang="en" className="mt-2 text-sm italic leading-7 text-muted">
        {g.en}
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">주요 전쟁·전투</h2>
        <ul className="mt-3 space-y-2">
          {g.battles.map((b) => {
            const war = warBySlug(b);
            if (!war) return null;
            return (
              <li key={b} className="rounded-lg border border-line bg-card p-3 text-sm">
                <Link href={`/wars/${war.slug}`} className="font-serif text-base text-ink hover:text-terra">
                  {war.title}
                </Link>
                <span className="ml-2 text-xs text-muted">{war.years}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
          <h2 className="font-serif text-lg text-ink">맞수</h2>
          <p className="mt-1">{g.rivals.join(" · ")}</p>
        </div>
        <div className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
          <h2 className="font-serif text-lg text-ink">동료·후원자</h2>
          <p className="mt-1">{g.allies.join(" · ")}</p>
        </div>
      </section>

      {g.tales.length ? (
        <section className="mt-8 rounded-lg border border-dashed border-line p-4 text-sm leading-7">
          <h2 className="font-serif text-lg text-ink">
            전해지는 이야기 <span className="text-xs font-normal text-muted">(사실인지 확인하기 어렵습니다)</span>
          </h2>
          <ul className="mt-2 list-disc pl-5">
            {g.tales.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {family.length ? <RelatedLinks title="가족·황제" links={family} /> : null}
      {cityLinksFor("generals", g.slug).length ? <RelatedLinks title="로마 시내에서 보기" links={cityLinksFor("generals", g.slug)} /> : null}
      <RelatedLinks title="자매 사이트에서 이어 보기" links={g.external} />
      {g.movieSlugs.length ? (
        <RelatedMovies slugs={g.movieSlugs} />
      ) : (
        <p className="mt-8 text-sm leading-7 text-muted">
          이 장군을 중심에 둔 유명한 극영화는 드뭅니다. 로마를 배경으로 한 작품은{" "}
          <Link href="/movies" className="text-laurel underline underline-offset-4 hover:text-terra">
            영화 목록
          </Link>
          에 모아 두었습니다.
        </p>
      )}
      <SourceList sources={g.sources} />
      <Pager
        prev={prev ? { href: `/generals/${prev.slug}`, label: prev.nameKo } : undefined}
        next={next ? { href: `/generals/${next.slug}`, label: next.nameKo } : undefined}
      />
      <CoupangCard copy={GENERALS_COUPANG} />
    </article>
  );
}
