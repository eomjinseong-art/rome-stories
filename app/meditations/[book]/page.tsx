import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MED_LINKS, MedNav } from "@/components/MedNav";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { MED_BOOKS } from "@/data/meditations";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return MED_BOOKS.map((b) => ({ book: `book-${b.n}` }));
}
const find = (p: string) => MED_BOOKS.find((b) => `book-${b.n}` === p);

export async function generateMetadata({ params }: { params: Promise<{ book: string }> }) {
  const b = find((await params).book);
  if (!b) return {};
  return pageMetadata({
    title: `명상록 ${b.n}권 ${b.title}`,
    description: `마르쿠스 아우렐리우스 『명상록』 ${b.n}권(${b.en}). ${b.summary}`,
    path: `/meditations/book-${b.n}`,
    type: "article",
  });
}

export default async function BookPage({ params }: { params: Promise<{ book: string }> }) {
  const b = find((await params).book);
  if (!b) notFound();
  const prev = MED_BOOKS.find((x) => x.n === b.n - 1);
  const next = MED_BOOKS.find((x) => x.n === b.n + 1);
  const path = `/meditations/book-${b.n}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "명상록", path: "/meditations" },
            { name: `${b.n}권`, path },
          ]),
          articleLd({ headline: `명상록 ${b.n}권 ${b.title}`, description: b.summary, path, about: [`Meditations Book ${b.n}`, "Marcus Aurelius"] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/meditations", label: "명상록" }, { label: `${b.n}권` }]} />
      <PageHead kicker={`BOOK ${b.n} · ${b.en.toUpperCase()}`} title={`${b.n}권. ${b.title}`} lead={b.summary} />
      <MedNav />

      <section className="mt-8" aria-labelledby="themes">
        <h2 id="themes" className="font-serif text-2xl text-ink">핵심 주제</h2>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {b.themes.map((t) => (
            <li key={t} className="rounded-full bg-card px-3 py-1 border border-line">{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="passages">
        <h2 id="passages" className="font-serif text-2xl text-ink">핵심 문장</h2>
        <ul className="mt-3 space-y-4">
          {b.passages.map((p) => (
            <li key={p.ref + p.en} className="rounded-lg border-l-4 border-terra bg-card p-4">
              <p className="text-base leading-8 text-ink">{p.ko}</p>
              <p className="mt-2 text-sm leading-6 text-muted" lang="en">“{p.en}”</p>
              <p className="mt-1 text-xs text-muted">명상록 {p.ref} · George Long 영역</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="today">
        <h2 id="today" className="font-serif text-2xl text-ink">오늘의 삶에서</h2>
        <p className="mt-3 text-sm leading-7">{b.today}</p>
      </section>

      <section className="mt-10" aria-labelledby="context">
        <h2 id="context" className="font-serif text-2xl text-ink">배경</h2>
        <p className="mt-3 text-sm leading-7">{b.context}</p>
      </section>

      <nav aria-label="이전 다음 권" className="mt-10 flex justify-between gap-3 text-sm">
        {prev ? (
          <Link href={`/meditations/book-${prev.n}`} className="rounded-full border border-line px-3 py-1.5 hover:border-terra hover:text-terra">← {prev.n}권 {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/meditations/book-${next.n}`} className="rounded-full border border-line px-3 py-1.5 hover:border-terra hover:text-terra">{next.n}권 {next.title} →</Link>
        ) : null}
      </nav>
      <RelatedLinks links={MED_LINKS} />
      <CoupangCard />
    </article>
  );
}
