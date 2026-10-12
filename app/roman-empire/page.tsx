import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EPISODES, SEASONS, episodePath, seasonPath } from "@/data/roman-empire";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "로마 제국: 피로 물든 왕좌 — 회차 가이드",
  description: "넷플릭스 다큐드라마 로마 제국(Roman Empire, 2016–2019) 3시즌 15화. 콤모두스, 율리우스 카이사르, 칼리굴라. 회차별 줄거리와 결말, 역사와 다른 점.",
  path: "/roman-empire",
});

export default function RomanEmpirePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "로마 제국 (드라마)", path: "/roman-empire" },
          ]),
          itemListLd("로마 제국 회차", "/roman-empire", EPISODES.map((e) => ({ name: `시즌 ${e.season} ${e.ep}화 ${e.ko}`, path: episodePath(e) }))),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "로마 제국 (드라마)" }]} />
      <PageHead
        kicker="ROMAN EMPIRE · 2016–2019"
        title="로마 제국: 피로 물든 왕좌"
        lead="넷플릭스의 다큐드라마입니다. 배우의 극과 역사학자의 인터뷰, 해설이 섞여 있습니다. 세 시즌이 각각 한 사람을 다룹니다. 이 가이드는 결말까지 모두 적습니다."
      />
      <div className="mt-4 rounded-lg border border-line bg-card p-4 text-sm leading-7">
        <p>
          <b>제목:</b> 넷플릭스 한국 페이지의 작품 제목은 ‘로마 제국’이고, 시즌 이름은 ‘콤모두스: 피의 지배’, ‘율리우스 카이사르: 로마의 정복자’, ‘칼리굴라: 미치광이 황제’입니다. ‘피로 물든 왕좌’는 이 가이드의 부제이고 넷플릭스 표기가 아닙니다.
        </p>
        <p className="mt-2">
          <b>보는 곳:</b> 2026년 10월 12일, 넷플릭스 한국 작품 페이지(3시즌 15화)가 열려 있었습니다. 서비스는 바뀔 수 있으니 보기 전에 확인하세요.
        </p>
      </div>

      {SEASONS.map((s) => (
        <section key={s.season} className="mt-10" aria-labelledby={`s${s.season}`}>
          <h2 id={`s${s.season}`} className="font-serif text-2xl text-ink">
            <Link href={seasonPath(s.season)} className="hover:text-terra">
              시즌 {s.season} · {s.koNetflix}
            </Link>
          </h2>
          <p className="text-xs text-muted" lang="en">
            {s.en} · {s.year} · {EPISODES.filter((e) => e.season === s.season).length}화
          </p>
          <p className="mt-2 text-sm leading-7">{s.lead}</p>
          <ol className="mt-2 space-y-1 text-sm">
            {EPISODES.filter((e) => e.season === s.season).map((e) => (
              <li key={e.overall}>
                <Link href={episodePath(e)} className="hover:text-terra">
                  {e.ep}화 {e.ko} <span className="text-xs text-muted">· {e.en}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <RelatedLinks
        links={[
          { href: "/movies#roman-empire-2016", label: "영화·드라마 목록에서" },
          { href: "/family-tree", label: "가족관계도" },
          { href: "/rulers", label: "왕·황제" },
          { href: "https://nadoo-timeline.vercel.app/movies#roman-empire-2016", label: "나두연표에서 보기" },
        ]}
      />
    </div>
  );
}
