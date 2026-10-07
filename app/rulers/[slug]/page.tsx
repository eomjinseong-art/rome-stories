import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { KindBadge } from "@/components/KindBadge";
import { More } from "@/components/More";
import { Pager } from "@/components/Pager";
import { RelatedLinks } from "@/components/RelatedLinks";
import { RelatedMovies } from "@/components/RelatedMovies";
import { Rich } from "@/components/Rich";
import { SourceList } from "@/components/SourceList";
import { emperors, kings, rulerBySlug, rulers } from "@/data/rulers";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return rulers.map((ruler) => ({ slug: ruler.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruler = rulerBySlug(slug);
  if (!ruler) return {};
  return pageMetadata({
    title: `${ruler.nameKo} (${ruler.nameEn})`,
    description: `${ruler.nameKo}(${ruler.latin}, ${ruler.years}). ${ruler.summary}`,
    path: `/rulers/${ruler.slug}`,
    type: "article",
  });
}

export default async function RulerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruler = rulerBySlug(slug);
  if (!ruler) notFound();

  const list = ruler.role === "king" ? kings : emperors;
  const index = list.findIndex((item) => item.slug === ruler.slug);
  const prev = list[index - 1];
  const next = list[index + 1];
  const path = `/rulers/${ruler.slug}`;
  const section = ruler.role === "king" ? "왕" : "황제";

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕·황제", path: "/rulers" },
            { name: ruler.nameKo, path },
          ]),
          articleLd({
            headline: `${ruler.nameKo} (${ruler.nameEn})`,
            description: ruler.summary,
            path,
            about: [ruler.nameEn, ruler.latin],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/rulers", label: "왕·황제" }, { label: ruler.nameKo }]} />
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs tracking-[0.2em] text-terra">{ruler.en}</p>
          <KindBadge kind={ruler.kind} />
        </div>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{ruler.nameKo}</h1>
        <p className="mt-2 text-sm text-muted">
          {ruler.nameEn} · {ruler.latin} · {section} · {ruler.years}
        </p>
        <p className="mt-3 text-base leading-8 text-ink">
          <Rich text={ruler.summary} />
        </p>
      </header>
      <KeyPoints items={ruler.points} />
      <More>
        {ruler.more.map((paragraph) => (
          <p key={paragraph}>
            <Rich text={paragraph} />
          </p>
        ))}
      </More>
      <RelatedLinks links={ruler.related} />
      {ruler.movieSlugs.length ? (
        <RelatedMovies slugs={ruler.movieSlugs} />
      ) : (
        <p className="mt-8 text-sm leading-7 text-muted">
          {ruler.role === "king"
            ? "이 왕을 직접 다룬 유명한 극영화는 거의 없습니다. 왕정의 개인 이야기는 전설의 비중이 커서, 영화가 기대는 사료가 얇습니다."
            : "이 황제를 중심으로 한 유명한 극영화는 목록에서 빼 두었습니다. 시대가 다른 작품을 그의 전기처럼 보면 헷갈리기 쉽습니다."}{" "}
          <Link href="/movies" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
            영화 목록
          </Link>
          에서 어느 시대의 이야기인지 확인하세요.
        </p>
      )}
      <SourceList sources={ruler.sources} />
      <Pager
        prev={prev ? { href: `/rulers/${prev.slug}`, label: prev.nameKo } : undefined}
        next={next ? { href: `/rulers/${next.slug}`, label: next.nameKo } : undefined}
      />
    </article>
  );
}
