import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MED_LINKS, MedNav } from "@/components/MedNav";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { STOIC_BASICS } from "@/data/meditations";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "스토아 철학 기초",
  description: "명상록을 읽기 전에 알아 둘 스토아 철학 여섯 가지. 내 힘 안의 것과 밖의 것, 덕, 판단과 감정, 자연에 따라 살기, 죽음 기억하기.",
  path: "/meditations/stoicism",
});

export default function StoicismPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "명상록", path: "/meditations" }, { name: "스토아 기초", path: "/meditations/stoicism" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/meditations", label: "명상록" }, { label: "스토아 기초" }]} />
      <PageHead kicker="STOICISM BASICS" title="스토아 철학 기초" lead="명상록은 스토아 철학을 몸에 익히려는 연습 노트입니다. 여섯 가지만 알면 훨씬 쉽게 읽힙니다." />
      <MedNav />
      <ol className="mt-8 space-y-3">
        {STOIC_BASICS.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-line bg-card p-4">
            <p className="font-serif text-lg text-ink">{i + 1}. {s.title}</p>
            <p className="mt-1 text-sm leading-7">{s.body}</p>
          </li>
        ))}
      </ol>
      <RelatedLinks links={MED_LINKS} />
    </div>
  );
}
