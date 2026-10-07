import { RichText } from "@/components/RichText";

export function KeyPoints({
  items,
  title = "핵심 세 가지",
  level = 2,
}: {
  items: string[];
  title?: string;
  level?: 2 | 3;
}) {
  const Heading = level === 3 ? "h3" : "h2";
  return (
    <div className="mt-5">
      <Heading className="text-sm font-semibold text-bronze">{title}</Heading>
      <ol className="mt-2 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-sm leading-7 text-ink">
            <span className="mt-0.5 font-serif text-terra">{index + 1}</span>
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
