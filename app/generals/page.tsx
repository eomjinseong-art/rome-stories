import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ERAS, generals } from "@/data/generals";
import { warBySlug } from "@/data/wars";
import { GENERALS_COUPANG } from "@/lib/generals-copy";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "유명한 장군",
  description: `킨키나투스부터 벨리사리우스까지 로마의 장군 ${generals.length}명. 쉬운 한국어 소개, 주요 전투, 맞수와 동료, 관련 영화.`,
  path: "/generals",
});

export default function GeneralsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "장군", path: "/generals" },
          ]),
          itemListLd("로마의 유명한 장군", "/generals", generals.map((g) => ({ name: g.nameKo, path: `/generals/${g.slug}` }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "장군" }]} />
      <PageHead
        kicker="GENERALS"
        title="유명한 장군"
        lead={`로마의 역사를 바꾼 장군 ${generals.length}명을 시대순으로 모았습니다. 이긴 사람만이 아니라 크게 진 사람(바루스)도 넣었습니다. 확인하기 어려운 일화는 ‘전해지는 이야기’로 따로 표시합니다. 인물 그림은 넣지 않았습니다.`}
      />
      <p className="mt-4 text-sm">
        <Link href="/generals/quiz" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
          장군 퀴즈 풀기 →
        </Link>
      </p>
      {ERAS.map((era) => {
        const list = generals.filter((g) => g.era === era);
        if (!list.length) return null;
        return (
          <section key={era} className="mt-10">
            <h2 className="font-serif text-2xl text-ink">{era}</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {list.map((g) => (
                <li key={g.slug} className="rounded-lg border border-line bg-card p-5">
                  <p className="text-[11px] tracking-[0.16em] text-terra">{g.nameEn.toUpperCase()}</p>
                  <h3 className="mt-1 font-serif text-xl text-ink">
                    <Link href={`/generals/${g.slug}`} className="hover:text-terra">
                      {g.nameKo}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-muted">{g.years}</p>
                  <p className="mt-2 text-sm leading-6">{g.ko}</p>
                  <p className="mt-2 text-xs text-muted">
                    전투: {g.battles.map((b) => warBySlug(b)?.title ?? b).join(" · ")}
                  </p>
                  <Link href={`/generals/${g.slug}`} className="mt-3 inline-block text-sm text-terra">
                    자세히 →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-muted">
        영화 「글래디에이터」의 막시무스는 지어낸 장군입니다. 실제 장군이 나오는 작품은 각 장군 페이지와{" "}
        <Link href="/movies" className="text-laurel underline underline-offset-4">
          영화 목록
        </Link>
        에 있습니다.
      </p>
      <div className="mx-auto max-w-3xl">
        <RelatedLinks
          links={[
            { href: "/wars", label: "전쟁" },
            { href: "/army", label: "군인" },
            { href: "/rulers", label: "왕·황제" },
            { href: "/family-tree", label: "가족관계도" },
            { href: "https://germanic-stories.vercel.app/people", label: "게르만이야기의 인물" },
            { href: "https://nadoo-timeline.vercel.app", label: "나두연표" },
          ]}
        />
      </div>
      <CoupangCard copy={GENERALS_COUPANG} />
    </div>
  );
}
