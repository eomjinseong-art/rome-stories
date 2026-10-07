import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { NADOO_MYTH_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "출처",
  description:
    "로마이야기의 근거. 리비우스, 폴리비오스, 플루타르코스, 타키투스, 카이사르의 전쟁기와 현대 개설서. 전설과 전통 연대를 어떻게 구분하는지도 적습니다.",
  path: "/sources",
});

const ANCIENT = [
  ["폴리비오스 《역사》", "포에니 전쟁과 마케도니아 전쟁, 공화정 군제의 가장 가까운 서술. 로마에 우호적입니다."],
  ["리비우스 《로마사》", "창건부터 아우구스투스 직전까지의 큰 서사. 초기는 설화가 많고, 일부 권은 요약만 남았습니다."],
  ["디오니시오스 《로마 고대지》", "왕정과 초기 공화정. 리비우스와 비슷하게 후대 기록입니다."],
  ["플루타르코스 《영웅전》", "로물루스, 피로스, 카이사르, 안토니우스 등. 도덕적 비교 전기입니다."],
  ["카이사르 《갈리아 전쟁기》 《내전기》", "지휘관이 직접 쓴 기록이라 명분과 숫자가 유리하게 적혀 있습니다."],
  ["키케로", "공화정 말의 편지와 연설. 동시대 정치 문서입니다."],
  ["아우구스투스 《업적록》", "황제 자신의 홍보 목록입니다."],
  ["타키투스 《연대기》 《동시대사》", "티베리우스부터 플라비우스 왕조. 문장이 뛰어나고 황제에게 적대적인 곳이 많습니다."],
  ["수에토니우스 《황제전》", "일화와 스캔들이 많습니다. 정치의 줄기와 가십을 구분합니다."],
  ["카시우스 디오 《로마사》", "후대에 정리한 긴 통사. 3세기 사람입니다."],
  ["아피아누스", "내전, 포에니 전쟁 등 주제별 정리."],
  ["벨레이우스 파테르쿨루스", "토이토부르크를 비교적 가까이에서 적은 짧은 역사."],
  ["요세푸스 《유대 전쟁기》", "70년 예루살렘과 로마군의 모습. 베스파시아누스 쪽 사람입니다."],
  ["세네카 《서간》", "목욕탕 소음처럼 도시 생활의 감각."],
  ["가이우스 《법학제요》", "2세기 법률 교본. 노예와 가족의 법적 지위."],
  ["마르쿠스 아우렐리우스 《명상록》", "그리스어 개인 노트. 정책 연설이 아닙니다."],
  ["락탄티우스, 에우세비오스", "디오클레티아누스 박해와 콘스탄티누스. 기독교 측 기록입니다."],
  ["비문, 군 제대 증서, 유적", "시민권, 알리멘타, 방벽, 판테온, 폼페이·오스티아. 문헌이 빠뜨린 것을 메웁니다."],
];

const MODERN = [
  ["Mary Beard, SPQR (2015)", "로마사 전반을 쉬운 영어로 정리한 개설."],
  ["T. J. Cornell, The Beginnings of Rome (1995)", "왕정과 초기 공화정. 전설과 고고학을 나눕니다."],
  ["Mary T. Boatwright, Daniel J. Gargola, Richard J. A. Talbert, The Romans: From Village to Empire", "대학 개설서."],
  ["Greg Woolf, Rome: An Empire's Story (2012)", "제국이 어떻게 유지되었는지."],
  ["Adrian Goldsworthy, The Fall of Carthage (2000); Caesar (2006); The Complete Roman Army (2003)", "포에니 전쟁, 카이사르, 군대."],
  ["Duane W. Roller, Cleopatra: A Biography (2010)", "클레오파트라 전기."],
  ["Fikret Yegül, Baths and Bathing in Classical Antiquity (1992)", "공중목욕탕."],
  ["Susan Treggiari, Roman Marriage (1991)", "결혼과 여성의 법적 지위."],
  ["Sandra R. Joshel, Slavery in the Roman World (2010)", "노예제."],
];

export default function SourcesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "출처", path: "/sources" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <PageHead
        kicker="Sources"
        title="출처"
        lead="글은 고전을 우리말로 다시 풀어 쓴 것입니다. 현대 번역서의 문장을 옮기지 않았고, 고대 작가가 하지 않은 말을 따옴표로 만들지 않습니다. 각 페이지 아래의 출처는 그 글의 중심 근거입니다."
      />

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">표시의 뜻</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-ink">
          <li>
            <strong>전설</strong>: 기원과 도덕을 설명하는 이야기. 로물루스, 루크레티아의 세부 일화가 여기 가깝습니다.
          </li>
          <li>
            <strong>전통 기록</strong>: 후대 역사책이 전하는 줄거리. 왕정 후기는 여기에 둡니다.
          </li>
          <li>
            <strong>전통 연대</strong>: 바로 등이 나중에 계산한 해. 기원전 753년, 509년이 대표입니다. 왕들의 해는 책마다 한두 해 다릅니다.
          </li>
          <li>
            <strong>역사</strong>: 여러 기록이나 유적이 겹치는 사건. 그래도 숫자는 승자의 글에서 부풀려진 경우가 있습니다.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">고대 자료</h2>
        <ul className="mt-4 space-y-3">
          {ANCIENT.map(([title, note]) => (
            <li key={title} className="rounded-md border border-line bg-card px-4 py-3">
              <p className="font-serif text-ink">{title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-7 text-muted">
          《황제 열전》(히스토리아 아우구스타)은 후대 위작 문제가 있어 단독 근거로 쓰지 않았습니다. 베르길리우스 《아이네이스》는
          문학으로만 언급합니다.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">현대 개설</h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          해석이 갈리는 곳(성벽의 연대, 마리우스 시대의 군제, 밀라노 칙령의 문서 형태)은 이 연구들의 통설을 쉬운 말로 줄였습니다.
          책의 문장을 번역해 싣지는 않습니다.
        </p>
        <ul className="mt-4 space-y-3">
          {MODERN.map(([title, note]) => (
            <li key={title} className="rounded-md border border-line bg-card px-4 py-3">
              <p className="text-ink">{title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-md border border-line bg-stone/60 p-4 text-sm leading-7">
        <h2 className="font-serif text-base text-ink">신화 쪽</h2>
        <p className="mt-2">
          그리스 신과 로마 신의 긴 비교, 신전, 축제는{" "}
          <a href={NADOO_MYTH_URL} className="text-terra underline decoration-terra/30 underline-offset-4" target="_blank" rel="noopener noreferrer">
            나두신화
          </a>
          에 있습니다. 이 사이트는 그 주소만 연결합니다.
        </p>
      </section>
    </article>
  );
}
