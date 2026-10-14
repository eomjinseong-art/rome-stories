import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { GENERALS_QUIZ } from "@/data/generals";
import { GENERALS_COUPANG } from "@/lib/generals-copy";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "장군 퀴즈",
  description: `로마의 유명한 장군 퀴즈 ${GENERALS_QUIZ.length}문제.`,
  path: "/generals/quiz",
});

export default function GeneralsQuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "장군", path: "/generals" }, { name: "퀴즈", path: "/generals/quiz" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/generals", label: "장군" }, { label: "퀴즈" }]} />
      <PageHead kicker="QUIZ" title="장군 퀴즈" lead="답을 생각한 뒤 ‘정답 보기’를 눌러 보세요." />
      <ol className="mt-8 space-y-4">
        {GENERALS_QUIZ.map((q, i) => (
          <li key={q.q} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <p className="font-serif text-base text-ink">
              {i + 1}. {q.q}
            </p>
            <ol className="mt-1 list-[upper-alpha] pl-6">
              {q.options.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ol>
            <details className="mt-2">
              <summary className="cursor-pointer text-terra">정답 보기</summary>
              <p className="mt-1">
                <b>
                  {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                </b>{" "}
                — {q.why}
              </p>
            </details>
          </li>
        ))}
      </ol>
      <RelatedLinks links={[{ href: "/generals", label: "장군 목록" }, { href: "/wars", label: "전쟁" }]} />
      <CoupangCard copy={GENERALS_COUPANG} />
    </div>
  );
}
