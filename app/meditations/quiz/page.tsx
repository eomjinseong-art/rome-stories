import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MED_LINKS, MedNav } from "@/components/MedNav";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { QUIZ } from "@/data/meditations";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "명상록 퀴즈",
  description: "마르쿠스 아우렐리우스 『명상록』과 스토아 철학 퀴즈 8문제.",
  path: "/meditations/quiz",
});

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "명상록", path: "/meditations" }, { name: "퀴즈", path: "/meditations/quiz" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/meditations", label: "명상록" }, { label: "퀴즈" }]} />
      <PageHead kicker="QUIZ" title="명상록 퀴즈" lead="답을 생각한 뒤 ‘정답 보기’를 눌러 보세요." />
      <MedNav />
      <ol className="mt-8 space-y-4">
        {QUIZ.map((q, i) => (
          <li key={q.q} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <p className="font-serif text-base text-ink">{i + 1}. {q.q}</p>
            <ol className="mt-1 list-[upper-alpha] pl-6">
              {q.options.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ol>
            <details className="mt-2">
              <summary className="cursor-pointer text-terra">정답 보기</summary>
              <p className="mt-1">
                <b>{String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}</b> — {q.why}
              </p>
            </details>
          </li>
        ))}
      </ol>
      <RelatedLinks links={MED_LINKS} />
    </div>
  );
}
