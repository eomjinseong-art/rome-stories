import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { GOD_PAIRS, godHref, NADOO, pairHref, ROMAN_ONLY, romanHref, STORY_LINKS } from "@/data/myths";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "신과 전설 연결",
  description:
    "유피테르와 제우스, 마르스와 아레스처럼 로마 신과 그리스 신을 짝짓고 나두신화의 비교 글과 신 페이지로 연결합니다. 야누스처럼 로마 고유의 신도 따로 적습니다.",
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
        kicker="Gods and Legends"
        title="신과 전설 연결"
        lead="로마 신과 그리스 신은 이름표만 바꾼 관계가 아닙니다. 이탈리아에 있던 신에게 그리스 이야기가 나중에 겹친 경우가 많습니다. 긴 비교는 나두신화에 맡기고, 여기서는 짝과 한 줄, 그리고 들어가는 길만 적습니다."
      />

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href={`${NADOO}/greece-vs-rome`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-terra px-4 py-2 text-white">
          나두신화 · 그리스 vs 로마
        </a>
        <a
          href={`${NADOO}/greece-vs-rome/history`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra"
        >
          신이 합쳐진 과정
        </a>
        <a href={NADOO} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra">
          나두신화 홈
        </a>
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">짝이 있는 신</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {GOD_PAIRS.map((god) => (
            <article key={god.romanLa} className="rounded-lg border border-line bg-card p-4">
              <h3 className="font-serif text-xl text-ink">
                {god.romanKo} <span className="text-sm text-muted" lang="la">{god.romanLa}</span>
              </h3>
              <p className="mt-1 text-sm text-bronze">
                그리스 짝 · {god.greekKo} <span lang="en">({god.greekLa})</span>
              </p>
              <p className="mt-2 text-sm leading-7 text-ink">{god.note}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                {god.pairSlug ? (
                  <a href={pairHref(god.pairSlug)} target="_blank" rel="noopener noreferrer" className="text-terra underline decoration-terra/30 underline-offset-4">
                    비교 글
                  </a>
                ) : null}
                {god.godSlug ? (
                  <a href={godHref(god.godSlug)} target="_blank" rel="noopener noreferrer" className="text-terra underline decoration-terra/30 underline-offset-4">
                    {god.greekKo} 페이지
                  </a>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">로마에서 더 도드라진 신과 제도</h2>
        <p className="mt-1 max-w-3xl text-sm leading-6 text-muted">
          그리스 신전에 대응 이름을 억지로 붙이지 않았습니다. 나두신화의 로마 고유 신 페이지가 있는 것만 연결합니다.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {ROMAN_ONLY.map((god) => (
            <article key={god.romanLa} className="rounded-lg border border-line bg-card p-4">
              <h3 className="font-serif text-xl text-ink">
                {god.romanKo} <span className="text-sm text-muted" lang="la">{god.romanLa}</span>
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink">{god.note}</p>
              {god.romanSlug ? (
                <a
                  href={romanHref(god.romanSlug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-terra underline decoration-terra/30 underline-offset-4"
                >
                  나두신화에서 보기
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">기원 설화의 사람</h2>
        <div className="mt-4 grid gap-3">
          {STORY_LINKS.map((story) => (
            <article key={story.la} className="rounded-lg border border-line bg-card p-4">
              <h3 className="font-serif text-xl text-ink">
                {story.ko} <span className="text-sm text-muted" lang="la">{story.la}</span>
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink">{story.note}</p>
              <a href={story.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-terra underline decoration-terra/30 underline-offset-4">
                {story.label}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">
          로물루스 설화 자체는 <Link href="/origins" className="text-terra underline decoration-terra/30 underline-offset-4">로마의 탄생</Link>과{" "}
          <Link href="/rulers/romulus" className="text-terra underline decoration-terra/30 underline-offset-4">로물루스</Link>에 있습니다. 후대에
          그를 퀴리누스와 같다고 본 전통과, 처음부터 같은 신인 것은 다릅니다.
        </p>
      </section>
    </div>
  );
}
