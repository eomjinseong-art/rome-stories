import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MED_LINKS, MedNav } from "@/components/MedNav";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TEACHERS } from "@/data/meditations";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "마르쿠스 아우렐리우스의 스승들",
  description: "명상록 1권에 나오는 스승과 영향을 준 사람들. 에픽테토스, 루스티쿠스, 아폴로니오스, 섹스투스, 프론토, 막시무스, 안토니누스 피우스.",
  path: "/meditations/teachers",
});

export default function TeachersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "명상록", path: "/meditations" }, { name: "스승들", path: "/meditations/teachers" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/meditations", label: "명상록" }, { label: "스승들" }]} />
      <PageHead kicker="WHO INFLUENCED HIM" title="그에게 영향을 준 사람들" lead="명상록 1권은 ‘누구에게서 무엇을 배웠다’는 목록입니다. 번호는 1권의 절입니다." />
      <MedNav />
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {TEACHERS.map((t) => (
          <li key={t.en} className="rounded-lg border border-line bg-card p-4 text-sm leading-6">
            <p className="font-serif text-lg text-ink">{t.name}</p>
            <p className="text-xs text-muted" lang="en">{t.en} · 명상록 {t.ref}</p>
            <p className="mt-1">{t.note}</p>
            {t.href ? (
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-terra hover:underline">철학이야기에서 보기</a>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-7">
        1권 전체는 <Link href="/meditations/book-1" className="text-terra hover:underline">1권 가이드</Link>에서 볼 수 있습니다.
      </p>
      <RelatedLinks links={MED_LINKS} />
    </div>
  );
}
