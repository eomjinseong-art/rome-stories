import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { mythIntro, mythLinks, pairs, romanOnly } from "@/data/myth";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MYTH_NAME, MYTH_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "신과 전설 연결",
  description: "유피테르와 제우스, 마르스와 아레스처럼 로마 신과 그리스 신을 짝짓고 나두신화의 비교 글로 연결합니다. 야누스처럼 로마 쪽 신도 따로 적습니다.",
  path: "/myth-links",
});

export default function MythLinksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "신과 전설 연결", path: "/myth-links" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "신과 전설 연결" }]} />
      <PageHead
        kicker="GODS"
        title="신과 전설 연결"
        lead="역사 글을 읽다 만나는 신의 이름입니다. 이야기 전문과 신전·축제의 차이는 자매 사이트 나두신화에 맡겨 두고, 여기서는 로마사와 닿는 한 줄만 적습니다."
      />

      <div className="mt-8 max-w-3xl">
        <GuideBlock en={mythIntro.en} title={mythIntro.title} summary={mythIntro.summary} points={mythIntro.points} more={mythIntro.more} kind="mixed" />
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">짝을 이루는 신</h2>
        <p className="mt-1 text-sm text-muted">로마 이름 · 라틴어 · 그리스 이름. 비교 글은 {MYTH_NAME}로 이어집니다.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {pairs.map((pair) => (
            <li key={pair.slug} id={pair.slug} className="scroll-mt-40 rounded-lg border border-line bg-card p-4">
              <p className="text-[11px] tracking-[0.16em] text-terra">{pair.en}</p>
              <h3 className="mt-1 font-serif text-xl text-ink">
                {pair.roman}
                <span className="ml-2 font-sans text-sm font-normal text-muted">{pair.romanLatin}</span>
              </h3>
              <p className="text-sm text-muted">그리스: {pair.greek}</p>
              <p className="mt-2 text-sm leading-6">{pair.summary}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{pair.note}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a href={pair.compare} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel="noopener noreferrer">
                  {MYTH_NAME} 비교
                </a>
                {pair.greekGod ? (
                  <a href={pair.greekGod} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel="noopener noreferrer">
                    {pair.greek} 이야기
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">로마 쪽에서 더 또렷한 이름</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {romanOnly.map((god) => (
            <li key={god.slug} id={god.slug} className="scroll-mt-40 rounded-lg border border-line bg-card p-4">
              <p className="text-[11px] tracking-[0.16em] text-terra">{god.en}</p>
              <h3 className="mt-1 font-serif text-xl text-ink">
                {god.roman}
                <span className="ml-2 font-sans text-sm font-normal text-muted">{god.romanLatin}</span>
              </h3>
              <p className="mt-2 text-sm leading-6">{god.summary}</p>
              <a href={god.href} className="mt-3 inline-block text-sm text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel="noopener noreferrer">
                {MYTH_NAME}에서 더 보기
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-8 flex flex-wrap gap-3 text-sm" aria-label="관련 글">
        {mythLinks.map((link) =>
          link.href.startsWith("/") ? (
            <Link key={link.href} href={link.href} className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-terra">
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={link.href} className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-terra" rel="noopener noreferrer">
              {link.label}
            </a>
          ),
        )}
        <a href={MYTH_URL} className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-terra" rel="noopener noreferrer">
          {MYTH_NAME} 홈
        </a>
      </nav>
    </div>
  );
}
