import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ERAS } from "@/data/eras";
import { rulers } from "@/data/rulers";
import { wars } from "@/data/wars";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, HOME_MENUS, NADOO_MYTH_URL, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

export default function Home() {
  const featuredRulers = ["augustus", "julius-caesar", "trajan", "nero"]
    .map((slug) => rulers.find((ruler) => ruler.slug === slug))
    .filter((ruler) => ruler !== undefined);
  const featuredWars = wars.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-bronze" lang="en">
          ROME STORIES
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">로마이야기</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-bronze">{BRAND_LINE}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/origins" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-bronze">
            시대부터 보기
          </Link>
          <a
            href={NADOO_MYTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra"
          >
            나두신화 바로가기
          </a>
        </div>
      </section>

      <div className="meander opacity-60" aria-hidden />

      <section className="mt-10" aria-labelledby="eras-heading">
        <h2 id="eras-heading" className="font-serif text-2xl text-ink">
          네 덩어리로 보는 시대
        </h2>
        <p className="mt-1 text-sm text-muted">연도는 대략입니다. 왕정 초기는 전설이 많습니다.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {ERAS.map((era) => (
            <Link key={era.id} href={`/origins#${era.id}`} className="rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="text-xs tracking-[0.16em] text-bronze" lang="en">
                {era.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink">{era.ko}</h3>
              <p className="mt-1 text-xs text-terra">{era.years}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{era.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="font-serif text-2xl text-ink">
          메뉴
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_MENUS.map((menu, index) => (
            <Link key={menu.href} href={menu.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-terra hover:shadow-sm">
              <p className="font-serif text-xs text-terra">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-bronze" lang="en">
                {menu.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-terra">{menu.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{menu.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">먼저 읽을 전쟁</h2>
          <ul className="mt-4 space-y-3">
            {featuredWars.map((war) => (
              <li key={war.slug}>
                <Link href={`/wars/${war.slug}`} className="text-terra underline decoration-terra/30 underline-offset-4 hover:text-bronze">
                  {war.ko}
                </Link>
                <p className="text-sm leading-6 text-muted">{war.summary}</p>
              </li>
            ))}
          </ul>
          <Link href="/wars" className="mt-3 inline-block text-sm text-bronze">
            전쟁 전체 보기 →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-ink">먼저 만날 사람</h2>
          <ul className="mt-4 space-y-3">
            {featuredRulers.map((ruler) => (
              <li key={ruler.slug}>
                <Link href={`/rulers/${ruler.slug}`} className="text-terra underline decoration-terra/30 underline-offset-4 hover:text-bronze">
                  {ruler.ko}
                </Link>
                <span className="ml-2 text-xs text-muted" lang="en">
                  {ruler.en}
                </span>
                <p className="text-sm leading-6 text-muted">{ruler.summary}</p>
              </li>
            ))}
          </ul>
          <Link href="/rulers" className="mt-3 inline-block text-sm text-bronze">
            왕·황제 전체 보기 →
          </Link>
        </div>
      </section>

      <section className="mt-14 rounded-lg border border-line bg-card p-6">
        <p className="text-xs tracking-[0.18em] text-bronze" lang="en">
          NADOO MYTHOLOGY
        </p>
        <h2 className="mt-1 font-serif text-2xl text-ink">신화는 나두신화로</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          유피테르와 제우스, 베누스와 아프로디테처럼 이름이 갈라진 이유는 로마 정치사만으로 설명되지 않습니다. 짝 비교와 그리스
          신 이야기는 자매 사이트 나두신화에 있습니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href={NADOO_MYTH_URL} target="_blank" rel="noopener noreferrer" className="text-terra underline decoration-terra/30 underline-offset-4">
            나두신화 홈
          </a>
          <a
            href={`${NADOO_MYTH_URL}/greece-vs-rome`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terra underline decoration-terra/30 underline-offset-4"
          >
            그리스 vs 로마
          </a>
          <Link href="/myth-links" className="text-terra underline decoration-terra/30 underline-offset-4">
            이 사이트의 연결 목록
          </Link>
        </div>
      </section>
    </div>
  );
}
