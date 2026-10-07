import type { Cite } from "@/data/types";

export function SourceList({ sources, title = "출처" }: { sources: Cite[]; title?: string }) {
  if (!sources.length) return null;
  return (
    <section className="mt-6 rounded-md border border-line bg-stone/50 p-4">
      <h2 className="font-serif text-base text-ink">{title}</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
        {sources.map((source, index) => (
          <li key={`${source.work}-${index}`}>
            <span className="text-ink">{source.work}</span>
            {source.ref ? <span> · {source.ref}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
