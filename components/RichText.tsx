import Link from "next/link";
import type { ReactNode } from "react";
import { placeBySlug } from "@/data/places";
import { rulerBySlug } from "@/data/rulers";
import { warBySlug } from "@/data/wars";

const PAGES: Record<string, { href: string; label: string }> = {
  origins: { href: "/origins", label: "로마의 탄생·시대" },
  map: { href: "/map", label: "지도" },
  rulers: { href: "/rulers", label: "왕·황제" },
  cleopatra: { href: "/cleopatra", label: "클레오파트라와 로마" },
  wars: { href: "/wars", label: "전쟁" },
  daily: { href: "/daily", label: "일상" },
  army: { href: "/army", label: "군인" },
  "myth-links": { href: "/myth-links", label: "신과 전설" },
  sources: { href: "/sources", label: "출처" },
};

export function RichText({ text }: { text: string }) {
  const re = /\{(ruler|war|place|page):([a-z0-9-]+)\}/g;
  const out: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = re.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const kind = match[1];
    const slug = match[2];
    let href = "";
    let label = slug;

    if (kind === "ruler") {
      const ruler = rulerBySlug.get(slug);
      if (ruler) {
        href = `/rulers/${ruler.slug}`;
        label = ruler.ko;
      }
    } else if (kind === "war") {
      const war = warBySlug.get(slug);
      if (war) {
        href = `/wars/${war.slug}`;
        label = war.ko;
      }
    } else if (kind === "place") {
      const place = placeBySlug.get(slug);
      if (place) {
        href = `/map#${place.slug}`;
        label = place.ko;
      }
    } else {
      const page = PAGES[slug];
      if (page) {
        href = page.href;
        label = page.label;
      }
    }

    if (href) {
      out.push(
        <Link
          key={`${kind}-${slug}-${index}`}
          href={href}
          className="text-terra underline decoration-terra/30 underline-offset-4 hover:text-bronze"
        >
          {label}
        </Link>,
      );
    } else {
      out.push(match[0]);
    }

    last = match.index + match[0].length;
    index += 1;
  }

  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
