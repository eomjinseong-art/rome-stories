"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { VisitorCounter } from "@/components/VisitorCounter";
import { NAV, NADOO_MYTH_URL, SITE_NAME, SITE_NAME_EN } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${SITE_NAME} 홈`}>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full border border-terra bg-stone font-serif text-sm text-terra"
          >
            R
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-tight tracking-wide text-ink">{SITE_NAME}</span>
            <span className="mt-0.5 block text-[10px] leading-none tracking-[0.18em] text-bronze" lang="en">
              {SITE_NAME_EN}
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] xl:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} className={active ? "font-semibold text-terra" : "text-muted hover:text-ink"}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={NADOO_MYTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs text-bronze hover:text-terra sm:inline"
          >
            나두신화
          </a>
          <VisitorCounter />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-4 py-3 xl:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-ink hover:bg-terra/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={NADOO_MYTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-2 text-sm text-bronze"
              onClick={() => setOpen(false)}
            >
              나두신화
            </a>
          </nav>
        </div>
      ) : null}
      <div className="meander opacity-70" aria-hidden />
    </header>
  );
}
