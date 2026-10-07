import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { More } from "@/components/More";
import { Related } from "@/components/Related";
import { RichText } from "@/components/RichText";
import { SourceList } from "@/components/SourceList";
import { warBySlug, wars } from "@/data/wars";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return wars.map((war) => ({ slug: war.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const war = warBySlug.get(slug);
  if (!war) return {};
  return pageMetadata({
    title: `${war.ko} (${war.en})`,
    description: `${war.ko} — ${war.summary}`,
    path: `/wars/${war.slug}`,
    type: "article",
  });
}

const FACTS = [
  ["원인", "cause"],
  ["누구", "who"],
  ["결과", "result"],
] as const;

export default async function WarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const war = warBySlug.get(slug);
  if (!war) notFound();
  const path = `/wars/${war.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "전쟁", path: "/wars" },
            { name: war.ko, path },
          ]),
          articleLd({
            headline: `${war.ko} (${war.en})`,
            description: war.summary,
            path,
            about: [war.ko, war.en],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/wars", label: "전쟁" }, { label: war.ko }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.18em] text-bronze" lang="en">
          {war.en}
        </p>
        <h1 className="mt-1 font-serif text-4xl text-ink">{war.ko}</h1>
        <p className="mt-2 text-sm text-terra">{war.years}</p>
        <p className="mt-4 text-base leading-8 text-ink">
          <RichText text={war.summary} />
        </p>
      </header>

      <h2 className="mt-6 text-sm font-semibold text-bronze">핵심 세 가지</h2>
      <dl className="mt-3 grid gap-3 sm:grid-cols-3">
        {FACTS.map(([label, key]) => (
          <div key={key} className="rounded-md border border-line bg-card p-4">
            <dt className="text-xs font-semibold text-terra">{label}</dt>
            <dd className="mt-2 text-sm leading-7 text-ink">
              <RichText text={war[key]} />
            </dd>
          </div>
        ))}
      </dl>

      <More paragraphs={war.more} />
      <Related
        links={war.related.map((link) => ({
          ...link,
          external: link.href.startsWith("http"),
        }))}
      />
      <SourceList sources={war.sources} />
      <p className="mt-6 text-sm">
        <Link href="/wars" className="text-bronze underline decoration-terra/30 underline-offset-4">
          전쟁 목록
        </Link>
      </p>
    </article>
  );
}
