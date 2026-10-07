import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-ink">이 길은 로마로 통하지 않아요</h1>
      <p className="mt-3 text-sm leading-7 text-muted">주소를 다시 확인하거나, 아래 목록에서 고르세요.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="text-terra underline">
          홈
        </Link>
        <Link href="/origins" className="text-terra underline">
          시대
        </Link>
        <Link href="/wars" className="text-terra underline">
          전쟁
        </Link>
        <Link href="/rulers" className="text-terra underline">
          왕·황제
        </Link>
      </div>
    </div>
  );
}
