import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SourceList } from "@/components/SourceList";
import { eras } from "@/data/eras";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MYTH_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "로마의 탄생·시대",
  description: "로물루스 전설과 고고학이 말하는 마을의 시작을 구분하고, 왕정·공화정·제정의 시간표를 짧게 정리합니다.",
  path: "/origins",
});

const legend = {
  en: "THE LEGEND",
  title: "늑대와 쌍둥이",
  summary: "로마인들은 목동 로물루스와 레무스가 기원전 753년에 도시를 세웠다고 가르쳤습니다. 이 줄거리는 도시의 공식 기원 신화입니다.",
  points: [
    "어머니 레아 실비아는 베스타 여사제였고, 아버지는 신 마르스라고 전합니다.",
    "바구니에 실려 티베르강에 버려진 쌍둥이를 늑대가 먹였다는 이야기와, 목동의 아내가 키웠다는 이야기가 같은 책 안에 있습니다.",
    "사비니 여인 납치와 형제의 죽음은 ‘여러 사람이 어떻게 한 시민이 되었나’를 설명하는 전설입니다.",
  ] as const,
  more: [
    "리비우스 『로마사』 1권과 플루타르코스의 로물루스 전기가 표준 버전입니다. 둘 다 건국보다 700년 가까이 뒤의 글입니다.",
    "753년이라는 숫자는 기원전 1세기 학자 바로의 계산입니다. 당대의 호적부가 아닙니다.",
    `트로이 영웅 아이네이아스에서 로물루스까지 이어지는 족보는 연대 구멍을 메우려고 만든 목록으로 보는 학자가 많습니다. 서사시 줄기는 [나두신화의 아이네이스](${MYTH_URL}/stories/aeneid)에 있습니다. 왕 개인의 전설은 [로물루스](/rulers/romulus)에서 이어집니다.`,
  ],
};

const history = {
  en: "THE HISTORY",
  title: "마을은 실제로 있었습니다",
  summary: "전설을 걷어내도, 기원전 8–6세기의 로마는 티베르강 언덕의 마을에서 도시로 커지고 있었습니다. 왕이라는 자리도 순전한 허구로 보기는 어렵습니다.",
  points: [
    "팔라티누스 언덕에서 기원전 8세기 무렵의 움집 흔적이 나옵니다. 그 집의 주인이 로물루스인지는 알 수 없습니다.",
    "포룸 골짜기는 묘지였다가 기원전 7–6세기 무렵 공공 공간이 됩니다.",
    "포룸의 검은 돌 아래 비문에는 왕(rex)을 뜻하는 말이 나옵니다. 왕정이 있었다는 쪽의 단서지, 일곱 왕 전기의 증명서는 아닙니다.",
  ] as const,
  more: [
    "에트루리아 문화의 영향은 기원전 6세기 로마에서 진지하게 다뤄집니다. 카피톨리누스 신전의 큰 기단은 왕정 말의 도시가 작은 마을만은 아니었다는 증거입니다.",
    "공화정이 기원전 509년에 정확히 시작됐는지는 전통의 날짜입니다. 기원전 500년 전후에 왕이 없어지고, 카르타고와 조약을 맺을 정도의 도시가 되었다는 그림이 더 안전합니다. 폴리비오스가 전하는 첫 조약이 그 단서입니다.",
    "일곱 왕의 개인 일화는 [왕·황제](/rulers)에 나눠 두었습니다. 모두 ‘전설과 역사가 섞임’ 또는 ‘전설’로 표시했습니다.",
  ],
};

const sources = [
  { work: "리비우스 『로마사』", ref: "1–2권" },
  { work: "플루타르코스 『영웅전』", ref: "로물루스" },
  { work: "폴리비오스 『역사』", ref: "3권 22장, 카르타고 조약" },
  { work: "할리카르나소스의 디오니시오스 『로마 고대사』", ref: "왕정 서술" },
  { work: "팀 코넬, The Beginnings of Rome (1995)", ref: "초기 로마를 전설과 고고학으로 나누는 현대 연구서" },
  { work: "메리 비어드, SPQR (2015)", ref: "일반 독자를 위한 로마사 개설" },
];

export default function OriginsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "로마의 탄생·시대", path: "/origins" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "로마의 탄생·시대" }]} />
      <PageHead
        kicker="ORIGINS"
        title="로마의 탄생·시대"
        lead="로마가 어려운 이유는 신화, 왕, 공화국, 황제, 중세까지 한 단어로 불리기 때문입니다. 먼저 전설과 마을을 나누고, 그다음 세 시대만 잡으면 됩니다."
      />
      <div className="mt-8 space-y-4">
        <GuideBlock {...legend} kind="legend" />
        <GuideBlock {...history} kind="history" />
        {eras.map((era) => (
          <GuideBlock key={era.id} id={era.id} en={era.en} title={era.title} summary={`${era.years}. ${era.summary}`} points={era.points} more={era.more} kind={era.kind} />
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">
        지역이 어디인지 같이 보려면 <Link href="/map" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">지도·지역</Link>
        으로, 사람 이름은 <Link href="/rulers" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">왕·황제</Link>로 가면 됩니다.
      </p>
      <RelatedMovies topic="origins" />
      <SourceList sources={sources} />
    </article>
  );
}
