import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { BRAND_LINE, NAV, NADOO_MYTH_URL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-stone/70">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs tracking-wide text-bronze">{BRAND_LINE}</p>
        <div className="mt-4 max-w-3xl space-y-2">
          <p>
            로마이야기의 글은 리비우스, 폴리비오스, 플루타르코스, 타키투스, 카이사르의 전쟁기 같은 고전을 우리말로 다시
            풀어 쓴 것입니다. 현대 번역서의 문장을 옮기지 않았고, 고대 작가가 하지 않은 말을 인용문처럼 만들지 않습니다.
            전설과 후대 기록, 여러 사료가 겹치는 사건은 따로 표시합니다.
          </p>
          <p>연도는 대략입니다. 왕정 초기의 해는 로마인이 나중에 계산한 전통 연대입니다.</p>
        </div>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <Link href="/" className="underline decoration-line underline-offset-4 hover:text-terra">
            홈
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-terra">
              {item.label}
            </Link>
          ))}
          <a
            href={NADOO_MYTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-terra"
          >
            나두신화
          </a>
        </nav>
      </div>
    </footer>
  );
}
