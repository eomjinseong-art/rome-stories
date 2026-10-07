import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Related } from "@/components/Related";
import { Topic } from "@/components/Topic";
import { ERAS } from "@/data/eras";
import { ORIGIN_TOPICS, TIMELINE_NOTES } from "@/data/topics";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { NADOO_MYTH_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "로마의 탄생·시대",
  description:
    "로물루스와 레무스는 전설입니다. 언덕 마을의 성장, 왕정·공화정·제정의 대략적인 연대를 쉬운 한국어로 구분합니다.",
  path: "/origins",
});

export default function OriginsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "로마의 탄생·시대", path: "/origins" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "로마의 탄생·시대" }]} />
      <PageHead
        kicker="Origins"
        title="로마의 탄생·시대"
        lead="늑대와 쌍둥이는 기원 설화입니다. 도시는 라티움의 언덕 마을에서 자랐고, 왕정·공화정·제정은 나중에 구분한 큰 덩어리입니다. 연도는 대략으로 읽으세요."
      />

      <aside className="mt-6 rounded-md border border-terra/30 bg-terra/5 p-4 text-sm leading-7 text-ink">
        <h2 className="font-serif text-base">전설과 역사를 나누는 법</h2>
        <p className="mt-2">
          <strong>전설</strong>은 후대 로마인이 기원을 설명하려고 만든 이야기입니다. <strong>전통 기록</strong>은 리비우스 같은
          역사책이 전하는 줄거리인데, 세부 일화는 설화일 수 있습니다. <strong>역사</strong>는 여러 기록이나 유적이 겹치는
          부분만 그렇게 부릅니다.
        </p>
      </aside>

      {ORIGIN_TOPICS.map((block) => (
        <Topic key={block.id} block={block} />
      ))}

      <section className="mt-12" aria-labelledby="era-heading">
        <p className="text-xs tracking-[0.18em] text-bronze" lang="en">
          Timeline
        </p>
        <h2 id="era-heading" className="mt-1 font-serif text-2xl text-ink">
          왕정, 공화정, 제정
        </h2>
        <p className="mt-3 text-base leading-8 text-ink">
          한 해에 체제가 바뀌었다기보다, 권력의 모양이 천천히 달라졌습니다. 아래 네 칸은 오늘 역사책이 나누는 이름입니다.
        </p>
        <ol className="mt-6 space-y-4 border-l-2 border-terra/40 pl-5">
          {ERAS.map((era) => (
            <li key={era.id} id={era.id} className="scroll-mt-24">
              <p className="text-xs tracking-[0.14em] text-bronze" lang="en">
                {era.en}
              </p>
              <h3 className="font-serif text-xl text-ink">{era.ko}</h3>
              <p className="text-xs text-terra">{era.years}</p>
              <p className="mt-1 text-sm leading-7 text-ink">{era.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <Topic block={TIMELINE_NOTES} />

      <section className="mt-10 rounded-md border border-line bg-card p-4 text-sm leading-7">
        <h2 className="font-serif text-base text-ink">아이네아스는 어디쯤인가</h2>
        <p className="mt-2 text-ink">
          트로이 전쟁 영웅을 로마의 먼 조상으로 삼는 이야기는 창건 설화와 짝을 이룹니다. 문학으로 읽을 페이지는 나두신화의
          아이네아스이고, 신 이름 짝은 이 사이트의 신화 연결에 모았습니다.
        </p>
        <p className="mt-2">
          <a
            href={`${NADOO_MYTH_URL}/gods/aineias`}
            className="text-terra underline decoration-terra/30 underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            나두신화 · 아이네아스
          </a>
        </p>
      </section>

      <Related
        links={[
          { href: "/rulers", label: "일곱 왕과 황제" },
          { href: "/map", label: "지도" },
          { href: "/wars", label: "전쟁" },
          { href: "/myth-links", label: "신과 전설" },
        ]}
      />
      <p className="mt-6 text-sm">
        <Link href="/sources" className="text-bronze underline decoration-terra/30 underline-offset-4">
          출처 보는 법
        </Link>
      </p>
    </article>
  );
}
