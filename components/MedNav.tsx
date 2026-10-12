import Link from "next/link";

const ITEMS = [
  { href: "/meditations", label: "명상록" },
  { href: "/meditations/stoicism", label: "스토아 기초" },
  { href: "/meditations/teachers", label: "스승들" },
  { href: "/meditations/quiz", label: "퀴즈" },
];

export function MedNav() {
  return (
    <nav aria-label="명상록 메뉴" className="mt-4 flex flex-wrap gap-2 text-sm">
      {ITEMS.map((i) => (
        <Link key={i.href} href={i.href} className="rounded-full border border-line px-3 py-1 hover:border-terra hover:text-terra">
          {i.label}
        </Link>
      ))}
    </nav>
  );
}

export const MED_LINKS = [
  { href: "/rulers/marcus-aurelius", label: "황제 마르쿠스 아우렐리우스" },
  { href: "/roman-empire/s1", label: "드라마 로마 제국 시즌 1 (콤모두스)" },
  { href: "/movies#gladiator", label: "글래디에이터" },
  { href: "/movies#fall-of-the-roman-empire", label: "로마제국의 멸망" },
  { href: "https://philosophy-stories.vercel.app/people/marcus-aurelius", label: "철학이야기: 마르쿠스 아우렐리우스" },
  { href: "https://philosophy-stories.vercel.app/people/epictetus", label: "철학이야기: 에픽테토스" },
  { href: "https://philosophy-stories.vercel.app/people/seneca", label: "철학이야기: 세네카" },
  { href: "https://iliad-stories.vercel.app", label: "일리아스 이야기" },
  { href: "https://nadoo-timeline.vercel.app", label: "나두연표" },
];
