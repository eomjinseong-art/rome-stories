import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs tracking-[0.2em] text-terra">404</p>
      <h1 className="mt-2 font-serif text-3xl text-ink">이 길은 로마로 통하지 않습니다</h1>
      <p className="mt-3 text-sm leading-7 text-muted">주소가 없거나 옮겨졌습니다. 포룸으로 돌아가 다른 길을 고르세요.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="text-terra underline">
          홈
        </Link>
        <Link href="/rulers" className="text-terra underline">
          왕·황제
        </Link>
        <Link href="/wars" className="text-terra underline">
          전쟁
        </Link>
      </div>
    </div>
  );
}
