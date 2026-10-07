import Link from "next/link";

export function Related({
  title = "이어 보기",
  links,
}: {
  title?: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  if (!links.length) return null;
  return (
    <nav className="mt-8" aria-label={title}>
      <h2 className="font-serif text-lg text-ink">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-terra hover:text-terra"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-block rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-terra hover:text-terra"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
