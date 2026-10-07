import { RichText } from "@/components/RichText";

export function More({ paragraphs }: { paragraphs?: string[] }) {
  if (!paragraphs?.length) return null;
  return (
    <details className="group mt-6 rounded-md border border-line bg-card">
      <summary className="cursor-pointer list-none px-4 py-3 font-serif text-lg text-ink">
        조금만 더
        <span className="ml-2 text-sm text-muted group-open:hidden">펼치기</span>
        <span className="ml-2 hidden text-sm text-muted group-open:inline">접기</span>
      </summary>
      <div className="prose-rome border-t border-line px-4 py-4 text-sm text-ink">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
    </details>
  );
}
