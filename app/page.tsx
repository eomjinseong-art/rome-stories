import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SisterSites } from "@/components/SisterSites";
import { eras } from "@/data/eras";
import { emperors, kings } from "@/data/rulers";
import { wars } from "@/data/wars";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, HOME_SECTIONS, MYTH_NAME, MYTH_URL, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const PATH = [
  { href: "/origins", label: "왕정·공화정·제정이 어떻게 다른지" },
  { href: "/map", label: "이탈리아에서 지중해로 넓어진 지도" },
  { href: "/wars/second-punic-war", label: "한니발이 알프스를 넘은 이유" },
  { href: "/wars/caesar-civil-war", label: "카이사르가 루비콘을 건넌 뒤" },
  { href: "/cleopatra", label: "클레오파트라는 왜 로마 정치의 한복판에 있나" },
  { href: "/rulers/augustus", label: "아우구스투스가 ‘황제’가 된 방식" },
  { href: "/daily", label: "영화 연회가 아닌 평범한 하루" },
  { href: "/myth-links#zeus-jupiter", label: "유피테르와 제우스를 나두신화와 연결" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-terra">ROME STORIES</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">로마이야기</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted">
          전설은 전설이라고 적습니다. 왕 {kings.length}명과 고른 황제 {emperors.length}명, 큰 전쟁 {wars.length}개를 짧은 글로 정리했습니다.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/origins" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
            시대부터 보기
          </Link>
          <a href={MYTH_URL} className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra" target="_blank" rel="noopener noreferrer">
            {MYTH_NAME}에서 신화 읽기
          </a>
        </div>
      </section>

      <div className="dentil opacity-50" aria-hidden />

      <section className="mt-10" aria-labelledby="era-heading">
        <h2 id="era-heading" className="font-serif text-2xl text-ink">
          세 시대
        </h2>
        <p className="mt-1 text-sm text-muted">로마를 한 덩어리로 외우면 어렵습니다. 먼저 이 세 칸만 나누세요.</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {eras.map((era) => (
            <Link key={era.id} href={`/origins#${era.id}`} className="rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="text-[11px] tracking-[0.16em] text-terra">{era.en}</p>
              <h3 className="mt-1 font-serif text-2xl text-ink">{era.title}</h3>
              <p className="mt-1 text-xs text-muted">{era.years}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{era.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="font-serif text-2xl text-ink">
          모든 길
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {HOME_SECTIONS.map((section, index) => (
            <Link key={section.href} href={section.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-terra hover:shadow-sm">
              <p className="font-serif text-xs text-terra">
                {String(index + 1).padStart(2, "0")} · {section.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-terra">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">처음 읽는 순서</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {PATH.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
                  {index + 1}. {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <SisterSites variant="home" />
      </section>
    </div>
  );
}
