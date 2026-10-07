import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHead } from "@/components/PageHead";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "출처",
  description: "로마이야기가 근거로 삼은 리비우스, 폴리비오스, 플루타르코스, 타키투스, 수에토니우스와 현대 개설서, 그리고 전설과 역사를 나누는 기준.",
  path: "/sources",
});

const ANCIENT = [
  ["폴리비오스", "『역사』", "기원전 2세기. 포에니 전쟁과 로마의 정치·군단을 그리스 사람이 분석했습니다. 1권, 3권, 6권이 이 사이트에서 자주 나옵니다."],
  ["리비우스", "『로마사』(건국 이래)", "아우구스투스 시대. 왕정과 공화정 초, 한니발 전쟁을 길게 적습니다. 애국적인 문체이고 왕정 부분은 전승에 가깝습니다."],
  ["할리카르나소스의 디오니시오스", "『로마 고대사』", "아우구스투스 시대에 그리스어로 쓴 초기 로마. 리비우스보다 길고, 마찬가지로 후대 서술입니다."],
  ["플루타르코스", "『영웅전』", "1–2세기. 로물루스, 누마, 피로스, 카이사르, 안토니우스 등을 짝전기로 씁니다. 도덕적 일화를 좋아합니다."],
  ["카이사르", "『갈리아 전쟁기』, 『내전기』", "당사자의 전쟁 기록입니다. 갈리아의 피해와 자신의 판단은 승자 쪽으로 기울어 있습니다."],
  ["살루스티우스", "『카틸리나 전쟁』, 『유구르타 전쟁』", "공화정 말의 정치 위기를 다룹니다. 이 사이트의 본편에서는 배경으로만 닿습니다."],
  ["아우구스투스", "『업적록』(Res Gestae)", "본인이 남긴 업적 목록입니다. 자랑이지 중립 보고서는 아닙니다."],
  ["벨레이우스 파테르쿨루스", "짧은 『로마사』", "티베리우스 시대, 아우구스투스 집안 쪽에 기울어 있습니다."],
  ["타키투스", "『연대기』, 『역사』", "1–2세기. 티베리우스부터 네로, 그리고 69년의 내전. 문장이 뛰어나고 제정에 비판적입니다."],
  ["수에토니우스", "『황제전』", "카이사르부터 도미티아누스까지 일화 모음. 소문과 사실이 섞입니다."],
  ["아피아누스", "『내전기』, 『포에니 전쟁』", "2세기. 내전과 카르타고 공성을 주제별로 정리합니다."],
  ["카시우스 디오", "『로마사』", "3세기 초. 제정 전기의 중요한 뼈대인데, 많은 부분이 후대 요약으로만 남았습니다."],
  ["요세푸스", "『유대 전쟁사』", "70년 예루살렘 전쟁을 유대인 지휘관 출신이 로마 쪽으로 돌아선 뒤 썼습니다."],
  ["소 플리니우스", "『편지』", "베수비오 폭발 목격담과, 트라야누스에게 보낸 그리스도교인 처리 문의."],
  ["프론티누스", "『수도교에 관하여』", "도시로 들어오는 물."],
  ["카토", "『농업론』", "기원전 2세기 이탈리아 농가의 노동과 음식."],
  ["베르길리우스", "『아이네이스』", "역사 기록이 아니라 아우구스투스 시대의 서사시입니다. 기원 신화로만 다룹니다."],
  ["락탄티우스, 에우세비우스", "박해와 콘스탄티누스에 관한 그리스도교 측 글", "312년 이후 황제에게 우호적입니다. 징조 이야기는 서로 조금씩 다릅니다."],
];

const THINGS = [
  ["라피스 니게르", "포룸의 검은 돌 아래 옛 비문. 왕(rex)이라는 말이 나옵니다."],
  ["카피톨리누스 신전 기단", "기원전 6세기 말의 큰 신전 흔적."],
  ["리옹 청동판", "클라우디우스 황제의 연설. 갈리아 귀족과 마스타르나 언급."],
  ["트라야누스 원기둥", "다키아 전쟁의 선전용 그림이기도 한 부조."],
  ["하드리아누스 성벽, 판테온, 스플리트 궁전", "건축으로 남은 제정."],
  ["폼페이·오스티아, 빈디란다 목간", "일상과 병사의 편지."],
  ["물가 칙령 비문", "301년 디오클레티아누스의 가격 통제."],
];

const MODERN = [
  ["메리 비어드", "SPQR: A History of Ancient Rome (2015)", "일반 독자를 위한 개설. 이 사이트의 문장을 그 책에서 옮기지는 않았습니다."],
  ["팀 코넬", "The Beginnings of Rome (1995)", "왕정과 초기 공화정을 전승과 고고학으로 나누는 연구서."],
  ["그레그 울프", "Rome: An Empire's Story", "제국이 어떻게 유지되었는지에 대한 현대 개설."],
  ["크리스토퍼 켈리", "The Roman Empire: A Very Short Introduction", "제정 전체를 아주 짧게 잡는 입문."],
  ["메리 T. 보트라이트, 대니얼 J. 가골라, 리처드 J. A. 탤버트", "The Romans: From Village to Empire", "대학 개설 교과서로 널리 쓰입니다."],
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <PageHead
        kicker="SOURCES"
        title="출처"
        lead="로마 역사는 승자가 나중에 쓴 글이 많습니다. 로마이야기는 가능한 한 고대 기록의 이름과 위치를 밝히고, 그 기록이 언제 누구 편에서 쓰였는지를 같이 적습니다."
      />

      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">적는 기준</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
          <li>전설, 역사, 둘이 섞인 글을 배지로 나눕니다. 왕정 전기는 대부분 섞인 글입니다.</li>
          <li>고대 인물의 말풍선을 지어내지 않습니다. ‘누가 그렇게 전한다’까지만 적습니다.</li>
          <li>유명한 라틴어 표어는 후대에 짧아진 경우가 있어, 현장의 육성인 것처럼 인용하지 않습니다.</li>
          <li>현대 연구서의 문장을 번역해 붙이지 않습니다. 책 이름만 입문 안내로 둡니다.</li>
          <li>『히스토리아 아우구스타』처럼 후대 위작 논란이 큰 황제 전기는 가십의 근거로 쓰지 않습니다.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">고대 글</h2>
        <ul className="mt-3 space-y-3 text-sm leading-7">
          {ANCIENT.map(([author, work, note]) => (
            <li key={author}>
              <strong className="text-ink">{author}</strong> {work} — <span className="text-muted">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">물건과 자리</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {THINGS.map(([name, note]) => (
            <li key={name}>
              <strong className="text-ink">{name}</strong> — <span className="text-muted">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-ink">현대 입문서</h2>
        <ul className="mt-3 space-y-3 text-sm leading-7">
          {MODERN.map(([author, work, note]) => (
            <li key={author}>
              <strong className="text-ink">{author}</strong> {work} — <span className="text-muted">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 text-sm leading-7 text-muted">
        <h2 className="font-serif text-base text-ink">표기</h2>
        <p className="mt-2">
          인명은 한국어에서 널리 쓰는 라틴어 음을 기준으로 했습니다. 카이사르는 영어식 ‘시저’보다 카이사르를 본이름으로 두고, 처음 나올 때 영어 철자를 짧게 붙입니다. 장군 폼페이우스(Pompey)와 도시 폼페이(Pompeii)는 다른 이름입니다.
        </p>
        <p className="mt-2">연도는 전통적인 교과서 연대를 쓰되, 왕정의 연대와 기원전 753년처럼 후대 계산인 경우에는 그 사실을 적습니다. 오류가 있으면 고대 기록과 맞춰 고치면 됩니다.</p>
      </section>
    </div>
  );
}
