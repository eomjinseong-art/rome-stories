import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { More } from "@/components/More";
import { RichText } from "@/components/RichText";
import { SourceList } from "@/components/SourceList";
import { CERTAINTY_LABEL, KIND_LABEL, rulerBySlug, rulers } from "@/data/rulers";
import type { Certainty } from "@/data/types";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return rulers.map((ruler) => ({ slug: ruler.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruler = rulerBySlug.get(slug);
  if (!ruler) return {};
  return pageMetadata({
    title: `${ruler.ko} (${ruler.en})`,
    description: `${ruler.ko} — ${ruler.summary}`,
    path: `/rulers/${ruler.slug}`,
    type: "article",
  });
}

const TONE: Record<Certainty, "terra" | "bronze" | "stone"> = {
  legend: "terra",
  traditional: "bronze",
  historical: "stone",
};

export default async function RulerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruler = rulerBySlug.get(slug);
  if (!ruler) notFound();
  const path = `/rulers/${ruler.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕·황제", path: "/rulers" },
            { name: ruler.ko, path },
          ]),
          articleLd({
            headline: `${ruler.ko} (${ruler.en})`,
            description: ruler.summary,
            path,
            about: [ruler.ko, ruler.en, ruler.latin],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/rulers", label: "왕·황제" }, { label: ruler.ko }]} />
      <header className="mt-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone={TONE[ruler.certainty]}>{CERTAINTY_LABEL[ruler.certainty]}</Badge>
          <Badge>{KIND_LABEL[ruler.kind]}</Badge>
        </div>
        <h1 className="mt-3 font-serif text-4xl text-ink">{ruler.ko}</h1>
        <p className="mt-2 text-sm text-bronze" lang="en">
          {ruler.en}
        </p>
        <p className="mt-1 text-sm text-muted">
          <span lang="la">{ruler.latin}</span> · {ruler.years}
        </p>
        <p className="mt-1 text-sm text-muted">{ruler.role}</p>
        <p className="mt-4 text-base leading-8 text-ink">
          <RichText text={ruler.summary} />
        </p>
      </header>
      <KeyPoints items={ruler.points} />
      <More paragraphs={ruler.more} />
      <SourceList sources={ruler.sources} />
      <p className="mt-6 text-sm">
        <Link href="/rulers" className="text-bronze underline decoration-terra/30 underline-offset-4">
          왕·황제 목록
        </Link>
      </p>
    </article>
  );
}
