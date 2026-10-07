import { KeyPoints } from "@/components/KeyPoints";
import { More } from "@/components/More";
import { RichText } from "@/components/RichText";
import { SourceList } from "@/components/SourceList";
import type { TopicBlock } from "@/data/types";

export function Topic({ block }: { block: TopicBlock }) {
  return (
    <section id={block.id} className="mt-12 scroll-mt-24">
      {block.kicker ? (
        <p className="text-xs tracking-[0.18em] text-bronze" lang="en">
          {block.kicker}
        </p>
      ) : null}
      <h2 className="mt-1 font-serif text-2xl text-ink">{block.title}</h2>
      <p className="mt-3 text-base leading-8 text-ink">
        <RichText text={block.summary} />
      </p>
      <KeyPoints items={block.points} level={3} />
      <More paragraphs={block.more} />
      {block.sources ? <SourceList sources={block.sources} /> : null}
    </section>
  );
}
