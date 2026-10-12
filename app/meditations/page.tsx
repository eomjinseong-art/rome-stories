import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MED_LINKS, MedNav } from "@/components/MedNav";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { MED_BOOKS } from "@/data/meditations";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "명상록 — 마르쿠스 아우렐리우스 12권 가이드",
  description: "마르쿠스 아우렐리우스 『명상록』(Meditations) 12권을 권별로. 쉬운 요약, 핵심 문장(조지 롱 영역 원문과 함께), 오늘의 삶에 쓰는 법, 스토아 기초와 퀴즈.",
  path: "/meditations",
});

export default function MeditationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "명상록", path: "/meditations" },
          ]),
          itemListLd("명상록 12권", "/meditations", MED_BOOKS.map((b) => ({ name: `${b.n}권 ${b.title}`, path: `/meditations/book-${b.n}` }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "명상록" }]} />
      <PageHead
        kicker="MEDITATIONS · MARCUS AURELIUS"
        title="명상록"
        lead="로마 황제 마르쿠스 아우렐리우스(재위 161–180)가 자기 자신에게 쓴 메모입니다. 그리스어로 썼고, 남에게 보여 줄 책이 아니었습니다. 대부분 170년대 도나우 강 전쟁 중에 쓴 것으로 봅니다."
      />
      <MedNav />

      <section className="mt-8 rounded-lg border border-line bg-card p-4 text-sm leading-7">
        <p><b>원래 제목:</b> 그리스어 ‘타 에이스 헤아우톤’(자기 자신에게)으로 전합니다. 이 제목을 본인이 붙였는지는 확실하지 않습니다.</p>
        <p className="mt-2"><b>쓴 곳:</b> 1권 끝에 ‘콰디족 땅, 그라누아 강가에서’, 2권 끝에 ‘카르눈툼에서’라는 줄이 있습니다. 옛 판본은 이 두 줄을 각각 2권과 3권의 머리에 둡니다. 다른 권에는 장소가 없습니다.</p>
        <p className="mt-2"><b>인용 원문:</b> 영어는 조지 롱(George Long)의 1862년 번역(퍼블릭 도메인, 프로젝트 구텐베르크)에서 그대로 옮겼고, 한국어는 이 사이트가 옮겼습니다. 번호는 권.절입니다.</p>
      </section>

      <section className="mt-10" aria-labelledby="books">
        <h2 id="books" className="font-serif text-2xl text-ink">12권</h2>
        <ol className="mt-3 grid gap-3 sm:grid-cols-2">
          {MED_BOOKS.map((b) => (
            <li key={b.n} className="rounded-lg border border-line bg-card p-4">
              <Link href={`/meditations/book-${b.n}`} className="group block">
                <p className="text-xs text-muted">{b.n}권 · <span lang="en">{b.en}</span></p>
                <p className="font-serif text-lg text-ink group-hover:text-terra">{b.title}</p>
                <p className="mt-1 text-sm leading-6">“{b.passages[0].ko}” <span className="text-xs text-muted">({b.passages[0].ref})</span></p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <RelatedLinks links={MED_LINKS} />
    </div>
  );
}
