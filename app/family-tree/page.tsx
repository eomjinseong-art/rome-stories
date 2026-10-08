import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Elsewhere } from "@/components/Elsewhere";
import { FamilyTreeView } from "@/components/FamilyTreeView";
import { SisterStrip } from "@/components/SisterSites";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SourceList } from "@/components/SourceList";
import { TREES, focusHref, relationsOf } from "@/data/family-tree";
import type { RelationPerson } from "@/data/family-tree";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MYTH_NAME, MYTH_URL, OTHER_FAMILY_TREES } from "@/lib/site";

const description =
  "로마 가족관계도. 아이네이아스에서 로물루스까지는 전승이고, 율리우스-클라우디우스 왕조는 혈연과 입양을 구분해 그립니다. 플라비우스, 네르바-안토니누스, 콘스탄티누스 가문도 세대로 나눕니다.";

export const metadata = pageMetadata({
  title: "가족관계도",
  description,
  path: "/family-tree",
});

const linked = TREES.flatMap((tree) => tree.nodes.filter((node) => node.href && node.href.startsWith("/")));

export default function FamilyTreePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "가족관계도", path: "/family-tree" },
          ]),
          itemListLd(
            "로마 가족관계도에 글이 있는 사람",
            "/family-tree",
            linked.map((node) => ({ name: `${node.ko} (${node.en})`, path: node.href! })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "가족관계도" }]} />
      <PageHead
        kicker="FAMILY TREE"
        title="가족관계도"
        lead="누가 누구의 자녀인지, 누가 입양으로 황제가 됐는지를 가문마다 나눈 그림입니다. 금색 실선은 혈연, 금색 점선은 입양, 장미색은 배우자, 보라색 점선은 전승이 갈리는 부모입니다. 칸을 누르면 부모·배우자·자녀·형제가 밝아집니다."
      />
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        신들의 가계는 이 사이트 밖입니다.{" "}
        <a href={`${MYTH_URL}/family-tree`} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel="noopener noreferrer">
          {MYTH_NAME} 가족관계도
        </a>
        에서 마르스와 베누스를 이어서 볼 수 있습니다. 전설 탭의 알바 롱가 왕 목록은 연대를 메운 전승입니다.
      </p>
      <SisterStrip title="다른 가족관계도" en="Other family trees" links={OTHER_FAMILY_TREES} />
      <FamilyTreeView />

      {TREES.map((tree) => (
        <section key={tree.id} className="mt-12" aria-labelledby={`prose-${tree.id}`}>
          <h2 id={`prose-${tree.id}`} className="font-serif text-2xl text-ink">
            {tree.ko} <span className="text-sm font-sans tracking-wide text-muted">{tree.en}</span>
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{tree.lead}</p>
          {tree.bands.map((band) => (
            <section key={band.id} className="mt-8">
              <h3 className="font-serif text-xl" style={{ color: band.color }}>
                {band.ko} <span className="text-sm font-sans tracking-wide text-muted">{band.en}</span>
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted">{band.hint}</p>
              <ul className="mt-3 space-y-4">
                {band.nodeIds.map((id) => {
                  const node = tree.byId.get(id)!;
                  const rel = relationsOf(tree, id);
                  return (
                    <li key={id} className="border-b border-line/80 pb-3 text-sm leading-7">
                      <a href={focusHref(node.id)} className="font-serif text-base text-ink hover:text-terra">
                        {node.ko}
                      </a>
                      <span className="text-muted"> / {node.en}</span>
                      {node.years ? <span className="ml-2 text-terra">{node.years}</span> : null}
                      {node.href ? (
                        node.href.startsWith("http") ? (
                          <a href={node.href} className="ml-2 text-laurel" target="_blank" rel="noopener noreferrer">
                            {node.hrefLabel ?? "링크"}
                          </a>
                        ) : (
                          <Link href={node.href} className="ml-2 text-laurel">
                            {node.hrefLabel ?? "이 사이트의 글"}
                          </Link>
                        )
                      ) : null}
                      <span className="mt-0.5 block text-ink">{node.summary}</span>
                      {node.note ? <span className="mt-0.5 block text-xs leading-5 text-dusk">다른 이야기: {node.note}</span> : null}
                      {node.parentNote ? <span className="mt-0.5 block text-xs leading-5 text-muted">{node.parentNote}</span> : null}
                      <Elsewhere links={node.also} />
                      <span className="mt-1 block text-xs leading-5 text-muted">
                        <Kin label="부모" people={rel.parents} />
                        <Kin label="입양한 부모" people={rel.adoptiveParents} />
                        <Kin label="다른 전승의 부모" people={rel.variantParents} />
                        <Kin label="배우자·연인" people={rel.spouses} />
                        <Kin label="자녀" people={rel.children} />
                        <Kin label="입양한 자녀" people={rel.adopted} />
                        <Kin label="다른 전승의 자녀" people={rel.variantChildren} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
          {tree.disputes.length ? (
            <div className="mt-8">
              <h3 className="font-serif text-xl text-ink">갈리는 이야기</h3>
              <ul className="mt-3 space-y-3">
                {tree.disputes.map((item) => (
                  <li key={item.id} className="rounded-md border border-line bg-card p-4 text-sm leading-7">
                    <h4 className="font-serif text-lg text-ink">{item.title}</h4>
                    <p className="mt-1">
                      <span className="text-terra">대표로 이은 선. </span>
                      {item.main}
                    </p>
                    <p className="mt-1">
                      <span className="text-dusk">같이 적어 둔 이야기. </span>
                      {item.other}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {tree.notes.length ? (
            <ul className="mt-6 space-y-2 text-sm leading-7 text-muted">
              {tree.notes.map((note) => (
                <li key={note.title}>
                  <span className="text-ink">{note.title}. </span>
                  {note.body}
                </li>
              ))}
            </ul>
          ) : null}
          <SourceList sources={tree.sources} />
        </section>
      ))}
    </div>
  );
}

function Kin({ label, people }: { label: string; people: RelationPerson[] }) {
  if (!people.length) return null;
  return (
    <span className="mr-3 inline">
      {label}{" "}
      {people.map((person, index) => (
        <span key={person.id}>
          {index > 0 ? ", " : null}
          <a href={focusHref(person.id)} className="text-laurel underline decoration-line underline-offset-2 hover:text-terra">
            {person.ko}
          </a>
        </span>
      ))}
    </span>
  );
}
