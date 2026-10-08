/**
 * 가족관계도 (Family Tree).
 *
 * 가문마다 트리를 나눕니다. 선은 네 가지입니다.
 * - parent: 혈연의 부모 → 자식 (금색 실선)
 * - adoption: 입양 (금색 점선과 «입양» 표시). 로마에서는 어른의 입양, 유언 입양이 흔합니다.
 * - spouse: 배우자·연인 (장미색)
 * - variant-parent: 전승이 갈리거나 근거가 약한 부모 (보라색 점선)
 *
 * 재위 연도는 황제 칸에만 «재위»를 붙입니다. 나머지는 살았던 때이거나 직함입니다.
 * 인물을 더할 때는 같은 가로줄의 col 간격을 1.2 이상으로 두고, 세대 간격은 210 전후로 둡니다.
 */

import type { LinkItem, Source } from "@/data/types";
import { rulerBySlug } from "@/data/rulers";
import { ALLOWED_SISTER_ORIGINS, MYTH_URL } from "@/lib/site";

export type LinkKind = "parent" | "adoption" | "spouse" | "variant-parent";

export type TreeSeed = {
  id: string;
  ko: string;
  en: string;
  latin?: string;
  band: string;
  /** Horizontal slot. Same-row gap should stay ≥ 1.2. */
  col: number;
  y: number;
  /** Reign for an emperor, otherwise a short life or role line. */
  years?: string;
  /** Short disambiguator shown on the card, such as 누이 or 알바의 왕. */
  tag?: string;
  /** Dashed border. Gods, and spouses whose children are not on this chart. */
  guestTag?: string;
  href?: string;
  hrefLabel?: string;
  /** Extra pages on sister sites. Rendered as “다른 사이트에서 더 보기”. */
  also?: readonly LinkItem[];
  summary: string;
  note?: string;
  /** Shown when this chart draws no biological parent. */
  parentNote?: string;
  badge?: boolean;
  aliases?: string[];
};

export type TreeLink = { from: string; to: string; kind: LinkKind };

export type BandMeta = {
  id: string;
  ko: string;
  en: string;
  hint: string;
  color: string;
  soft: string;
};

export type NoteItem = { title: string; body: string };
export type DisputeItem = { id: string; title: string; main: string; other: string };

type TreeDef = {
  id: string;
  ko: string;
  en: string;
  lead: string;
  bands: BandMeta[];
  seeds: TreeSeed[];
  links: TreeLink[];
  disputes: DisputeItem[];
  notes: NoteItem[];
  sources: Source[];
  must: [LinkKind, string, string][];
};

const COL = 176;
const NODE_W = 156;
const NODE_H = 118;
const PAD = 28;

const MYTH_TREE = `${MYTH_URL}/family-tree`;

function rel(): {
  links: TreeLink[];
  parent: (from: string, to: string) => void;
  parents: (child: string, ...from: string[]) => void;
  adopt: (from: string, to: string) => void;
  spouse: (a: string, b: string) => void;
  variant: (from: string, to: string) => void;
} {
  const links: TreeLink[] = [];
  return {
    links,
    parent: (from, to) => links.push({ from, to, kind: "parent" }),
    parents: (child, ...from) => from.forEach((id) => links.push({ from: id, to: child, kind: "parent" })),
    adopt: (from, to) => links.push({ from, to, kind: "adoption" }),
    spouse: (a, b) => links.push({ from: a, to: b, kind: "spouse" }),
    variant: (from, to) => links.push({ from, to, kind: "variant-parent" }),
  };
}

const legendLinks = rel();
{
  const { parent, parents, spouse, variant } = legendLinks;
  spouse("aeneas", "creusa");
  spouse("aeneas", "lavinia");
  parent("aeneas", "ascanius");
  variant("creusa", "ascanius");
  variant("lavinia", "ascanius");
  parent("ascanius", "silvius");
  variant("aeneas", "silvius");
  variant("lavinia", "silvius");
  parent("silvius", "aeneas-silvius");
  parent("aeneas-silvius", "latinus-silvius");
  parent("latinus-silvius", "alba-king");
  parent("alba-king", "atys");
  parent("atys", "capys");
  parent("capys", "capetus");
  parent("capetus", "tiberinus");
  parent("tiberinus", "agrippa-alba");
  parent("agrippa-alba", "romulus-silvius");
  parent("romulus-silvius", "aventinus");
  parent("aventinus", "proca");
  parents("numitor", "proca");
  parents("amulius", "proca");
  parent("numitor", "rhea");
  parent("rhea", "romulus");
  parent("rhea", "remus");
  variant("mars", "romulus");
  variant("mars", "remus");
}

const julioLinks = rel();
{
  const { parent, parents, adopt, spouse } = julioLinks;
  spouse("julia-sister", "atius");
  spouse("caesar", "cleopatra");
  spouse("julia-daughter", "pompey");
  spouse("augustus", "scribonia");
  spouse("augustus", "livia");
  spouse("livia", "tcn");
  spouse("octavia", "antony");
  spouse("antony", "cleopatra");
  spouse("julia-elder", "agrippa");
  spouse("julia-elder", "tiberius");
  spouse("drusus", "antonia-minor");
  spouse("antonia-major", "ldom");
  spouse("germanicus", "agrippina-elder");
  spouse("claudius", "messalina");
  spouse("claudius", "agrippina-younger");
  spouse("gnaeus", "agrippina-younger");

  parents("atia", "julia-sister", "atius");
  parents("augustus", "atia", "octavius");
  parents("octavia", "atia", "octavius");
  parent("caesar", "julia-daughter");
  parent("cleopatra", "caesarion");
  parent("caesar", "caesarion");
  parents("julia-elder", "augustus", "scribonia");
  parents("tiberius", "livia", "tcn");
  parents("drusus", "livia", "tcn");
  parents("antonia-minor", "octavia", "antony");
  parents("antonia-major", "octavia", "antony");
  parents("gnaeus", "antonia-major", "ldom");
  parents("gaius-caesar", "julia-elder", "agrippa");
  parents("lucius-caesar", "julia-elder", "agrippa");
  parents("agrippina-elder", "julia-elder", "agrippa");
  parents("germanicus", "drusus", "antonia-minor");
  parents("claudius", "drusus", "antonia-minor");
  parents("caligula", "germanicus", "agrippina-elder");
  parents("agrippina-younger", "germanicus", "agrippina-elder");
  parents("britannicus", "claudius", "messalina");
  parents("nero", "agrippina-younger", "gnaeus");

  adopt("caesar", "augustus");
  adopt("augustus", "tiberius");
  adopt("augustus", "gaius-caesar");
  adopt("augustus", "lucius-caesar");
  adopt("tiberius", "germanicus");
  adopt("claudius", "nero");
}

const flavianLinks = rel();
{
  const { parents, spouse } = flavianLinks;
  spouse("vespasian", "domitilla");
  parents("titus", "vespasian", "domitilla");
  parents("domitian", "vespasian", "domitilla");
}

const antonineLinks = rel();
{
  const { parent, parents, adopt, spouse } = antonineLinks;
  spouse("trajan", "plotina");
  spouse("hadrian", "sabina");
  spouse("antoninus", "faustina-elder");
  spouse("marcus", "faustina-younger");
  spouse("verus", "lucilla");
  adopt("nerva", "trajan");
  adopt("trajan", "hadrian");
  adopt("hadrian", "aelius");
  adopt("hadrian", "antoninus");
  parent("aelius", "verus");
  parents("faustina-younger", "antoninus", "faustina-elder");
  adopt("antoninus", "marcus");
  adopt("antoninus", "verus");
  parents("commodus", "marcus", "faustina-younger");
  parents("lucilla", "marcus", "faustina-younger");
}

const constantineLinks = rel();
{
  const { parents, spouse } = constantineLinks;
  spouse("constantius", "helena");
  spouse("constantius", "theodora");
  parents("constantine", "constantius", "helena");
  spouse("constantine", "minervina");
  spouse("constantine", "fausta");
  parents("crispus", "constantine", "minervina");
  parents("constantine-ii", "constantine", "fausta");
  parents("constantius-ii", "constantine", "fausta");
  parents("constans", "constantine", "fausta");
}

const DEFS: TreeDef[] = [
  {
    id: "legend",
    ko: "전설",
    en: "Legend",
    lead: "아이네이아스부터 로물루스·레무스까지는 로마가 들려준 기원 이야기입니다. 연대를 메우려고 만든 알바 롱가 왕 목록이지, 확인된 왕조 기록이 아닙니다. 신들의 가계는 나두신화에 있습니다.",
    bands: [
      { id: "latium", ko: "라티움", en: "Latium", hint: "아이네이아스가 트로이에서 이탈리아로 왔다는 전승의 출발입니다. 부모인 안키세스와 베누스는 나두신화에 있습니다.", color: "#3e4d7a", soft: "#e7edf7" },
      { id: "alba", ko: "알바 롱가", en: "Alba Longa", hint: "리비우스 1권 3장의 왕 이름 순서입니다. 트로이 함락과 기원전 753년 사이를 채우려고 후대에 정리한 목록입니다.", color: "#8a5a24", soft: "#fbf3e6" },
      { id: "twins", ko: "쌍둥이", en: "The Twins", hint: "누미토르의 딸 레아 실비아가 어머니입니다. 마르스를 아버지로 부른 것은 전승이고, 리비우스는 아버지가 불확실하다고 적습니다.", color: "#7a3454", soft: "#f8eef2" },
    ],
    seeds: [
      { id: "creusa", ko: "크레우사", en: "Creusa", latin: "Creusa", band: "latium", col: 0, y: 70, guestTag: "배우자", summary: "트로이의 공주이고 아이네이아스의 첫 아내로 전합니다. 아스카니우스의 어머니인지는 이야기가 갈립니다.", aliases: ["creusa", "크레우사"] },
      { id: "aeneas", ko: "아이네이아스", en: "Aeneas", latin: "Aeneas", band: "latium", col: 1.2, y: 70, href: `${MYTH_TREE}?focus=aineias`, hrefLabel: "신화", also: [{ href: `${MYTH_URL}/gods/aineias`, label: "나두신화에서 아이네이아스 보기" }, { href: "https://iliad-stories.vercel.app", label: "일리아스 속 아이네이아스" }], summary: "트로이 영웅입니다. 로마 기원 신화는 그가 이탈리아에 와서 라비니아와 결혼했다고 이어 갑니다.", parentNote: "부모 안키세스와 베누스(아프로디테)는 이 그림 밖에 있습니다. 나두신화 가족관계도에서 이어 보면 됩니다.", aliases: ["aeneas", "아이네이아스", "아이네아스", "에네아스"] },
      { id: "lavinia", ko: "라비니아", en: "Lavinia", latin: "Lavinia", band: "latium", col: 2.4, y: 70, guestTag: "배우자", summary: "라티움 왕 라티누스의 딸로 전합니다. 아이네이아스의 이탈리아 쪽 아내이고, 도시 라비니움의 이름과 연결됩니다.", aliases: ["lavinia", "라비니아"] },

      { id: "ascanius", ko: "아스카니우스", en: "Ascanius", latin: "Ascanius / Iulus", band: "alba", col: 1.2, y: 280, badge: true, summary: "아이네이아스의 아들로 알바 롱가를 세웠다고 전합니다. 율리우스 가문은 이울루스라는 이름을 자기 조상으로 내세웠습니다.", note: "리비우스는 이 사람과, 크레우사에게서 난 손위의 이울루스가 같은 사람인지 정하지 않습니다. 어머니도 크레우사인지 라비니아인지 열어 둡니다.", aliases: ["ascanius", "iulus", "iulius", "아스카니우스", "이울루스", "율루스"] },
      { id: "silvius", ko: "실비우스", en: "Silvius", latin: "Silvius", band: "alba", col: 0, y: 490, badge: true, summary: "리비우스의 본문에서는 아스카니우스의 아들이고, 숲에서 태어났다고 하여 실비우스라 불립니다.", note: "다른 전승은 그를 아이네이아스와 라비니아의 아들로 둡니다. 디오니시오스 1권 70장이 그 갈림을 적습니다.", aliases: ["silvius", "실비우스"] },
      { id: "aeneas-silvius", ko: "아이네이아스 실비우스", en: "Aeneas Silvius", latin: "Aeneas Silvius", band: "alba", col: 1.2, y: 490, summary: "리비우스 목록에서 실비우스의 아들인 알바의 왕입니다.", aliases: ["aeneas silvius", "아이네이아스 실비우스"] },
      { id: "latinus-silvius", ko: "라티누스 실비우스", en: "Latinus Silvius", latin: "Latinus Silvius", band: "alba", col: 2.4, y: 490, summary: "알바의 왕으로 전합니다. 옛 라틴 식민을 세웠다는 이야기가 이 이름에 붙습니다.", aliases: ["latinus silvius", "라티누스 실비우스"] },
      { id: "alba-king", ko: "알바", en: "Alba", latin: "Alba", band: "alba", col: 3.6, y: 490, tag: "왕", summary: "리비우스가 라티누스 실비우스 다음에 적는 알바의 왕 이름입니다. 도시 알바 롱가와 이름이 같습니다.", aliases: ["alba", "알바"] },
      { id: "atys", ko: "아티스", en: "Atys", latin: "Atys", band: "alba", col: 0, y: 700, summary: "리비우스 목록의 알바 왕입니다.", aliases: ["atys", "aty", "아티스"] },
      { id: "capys", ko: "카피스", en: "Capys", latin: "Capys", band: "alba", col: 1.2, y: 700, summary: "리비우스 목록의 알바 왕입니다.", aliases: ["capys", "카피스"] },
      { id: "capetus", ko: "카페투스", en: "Capetus", latin: "Capetus", band: "alba", col: 2.4, y: 700, summary: "리비우스 목록의 알바 왕입니다.", aliases: ["capetus", "카페투스"] },
      { id: "tiberinus", ko: "티베리누스", en: "Tiberinus", latin: "Tiberinus", band: "alba", col: 3.6, y: 700, summary: "알불라 강을 건너다 빠져 죽었고, 그 강이 뒤의 티베르라는 이름을 받았다고 전합니다.", aliases: ["tiberinus", "티베리누스"] },
      { id: "agrippa-alba", ko: "아그리파", en: "Agrippa", latin: "Agrippa", band: "alba", col: 0, y: 910, tag: "알바의 왕", summary: "알바 롱가의 왕 이름입니다. 아우구스투스 시대의 장군 마르쿠스 아그리파와는 다른 사람입니다.", aliases: ["agrippa alba", "알바 아그리파"] },
      { id: "romulus-silvius", ko: "로물루스 실비우스", en: "Romulus Silvius", latin: "Romulus Silvius", band: "alba", col: 1.2, y: 910, tag: "알바의 왕", summary: "알바의 왕으로, 벼락을 맞고 죽었다는 전승이 있습니다. 로마를 세웠다는 로물루스와는 다른 이름입니다.", aliases: ["romulus silvius", "로물루스 실비우스"] },
      { id: "aventinus", ko: "아벤티누스", en: "Aventinus", latin: "Aventinus", band: "alba", col: 2.4, y: 910, summary: "알바의 왕으로 전합니다. 로마의 아벤티누스 언덕 이름이 그에게서 왔다고 이야기합니다.", aliases: ["aventinus", "아벤티누스"] },
      { id: "proca", ko: "프로카", en: "Proca", latin: "Proca", band: "alba", col: 3.6, y: 910, summary: "리비우스 목록에서 누미토르와 아물리우스의 아버지인 알바의 왕입니다.", aliases: ["proca", "procas", "프로카"] },

      { id: "numitor", ko: "누미토르", en: "Numitor", latin: "Numitor", band: "twins", col: 2.4, y: 1160, summary: "프로카의 맏아들로 전합니다. 동생 아물리우스에게 왕위를 빼앗겼다가, 손자 로물루스 대에 되찾는 이야기입니다.", aliases: ["numitor", "누미토르"] },
      { id: "amulius", ko: "아물리우스", en: "Amulius", latin: "Amulius", band: "twins", col: 3.6, y: 1160, summary: "누미토르를 밀어내고 알바를 차지했다고 전합니다. 조카 레아 실비아를 베스타 여사제로 만들어 자녀가 없게 하려 했습니다.", aliases: ["amulius", "아물리우스"] },
      { id: "mars", ko: "마르스", en: "Mars", latin: "Mars", band: "twins", col: 0.6, y: 1370, guestTag: "신", href: `${MYTH_TREE}?focus=ares`, hrefLabel: "신화", summary: "전쟁의 신입니다. 레아 실비아가 쌍둥이의 아버지로 부른 이름이지, 확인된 사람이 아닙니다.", note: "리비우스 1권 4장은 아버지가 불확실하다고 적고, 그녀가 마르스라고 불렀다고 전합니다.", aliases: ["mars", "ares", "마르스", "아레스"] },
      { id: "rhea", ko: "레아 실비아", en: "Rhea Silvia", latin: "Rhea Silvia", band: "twins", col: 2.2, y: 1370, badge: true, summary: "누미토르의 딸이고 베스타 여사제로 전합니다. 로물루스와 레무스의 어머니입니다. 일리아라는 이름도 있습니다.", note: "아버지로 마르스를 드는 것은 전승입니다. 리비우스는 그 점을 사실로 못 박지 않습니다.", aliases: ["rhea silvia", "rea silvia", "ilia", "레아 실비아", "레아실비아", "일리아"] },
      { id: "remus", ko: "레무스", en: "Remus", latin: "Remus", band: "twins", col: 1.4, y: 1580, badge: true, summary: "로물루스의 쌍둥이 형제로 전합니다. 로마 건국 이야기에서 죽고, 도시를 다스린 왕은 로물루스 쪽입니다.", aliases: ["remus", "레무스"] },
      { id: "romulus", ko: "로물루스", en: "Romulus", latin: "Romulus", band: "twins", col: 2.8, y: 1580, years: "전통 연대 기원전 753–716", href: "/rulers/romulus", badge: true, summary: "로마가 건국 왕으로 기억한 이름입니다. 전통 연대 기원전 753년은 후대의 계산이지, 당시의 출생 기록이 아닙니다.", note: "어머니 레아 실비아는 전승의 인물이고, 아버지 마르스는 신이 아버지라는 이야기입니다.", aliases: ["romulus", "로물루스"] },
    ],
    links: legendLinks.links,
    disputes: [
      {
        id: "ascanius-mother",
        title: "아스카니우스와 이울루스",
        main: "리비우스 『로마사』 1권 3장. 알바 롱가를 세운 아스카니우스는 아이네이아스의 아들입니다. 어머니가 누구인지는 리비우스가 정하지 않습니다.",
        other: "율리우스 가문이 조상으로 부른 이울루스를, 트로이에 있을 때 크레우사에게서 난 손위 아들로 보는 이야기도 있습니다. 리비우스는 그 사람이 아스카니우스와 같은지 논하지 않겠다고 적습니다.",
      },
      {
        id: "silvius-father",
        title: "실비우스의 아버지",
        main: "리비우스 1권 3장. 실비우스는 아스카니우스의 아들이고, 숲에서 태어났다는 말로 이름을 설명합니다.",
        other: "할리카르나소스의 디오니시오스 『로마 고대사』 1권 70장은, 실비우스를 아이네이아스와 라비니아의 아들로 두는 전승을 함께 전합니다.",
      },
      {
        id: "mars-father",
        title: "쌍둥이의 아버지",
        main: "어머니 레아 실비아까지는 리비우스의 줄기가 같습니다. 그녀는 누미토르의 딸입니다.",
        other: "리비우스 1권 4장. 그녀는 마르스를 아버지로 불렀습니다. 리비우스는 아버지가 불확실하고, 신이 더 체면이 서는 이름이었을 수 있다고 거리를 둡니다.",
      },
    ],
    notes: [
      { title: "이 탭 전체가 전승입니다", body: "금색 실선은 리비우스 1권의 대표 줄기고, 보라색 점선은 그 책이나 디오니시오스가 같이 적어 둔 다른 이야기입니다. 왕 한 사람 한 사람이 실존했다는 표시가 아닙니다." },
      { title: "알바의 아그리파", body: "이 줄의 아그리파는 알바 롱가 왕 목록의 이름입니다. 아우구스투스의 동료 마르쿠스 빕사니우스 아그리파와는 수백 년 떨어진 다른 자리입니다." },
      { title: "신들의 가계", body: "베누스, 마르스, 아이네이아스의 부모는 나두신화 가족관계도에 그려져 있습니다. 칸의 «신화»가 그쪽으로 갑니다." },
    ],
    sources: [
      { work: "리비우스 『로마사』", ref: "1권 1–4장. 알바 왕 목록과 쌍둥이" },
      { work: "할리카르나소스의 디오니시오스 『로마 고대사』", ref: "1권 70장 전후. 실비우스의 다른 전승" },
      { work: "베르길리우스 『아이네이스』", ref: "서사시입니다. 건국 연대기가 아닙니다" },
    ],
    must: [
      ["parent", "aeneas", "ascanius"],
      ["parent", "ascanius", "silvius"],
      ["parent", "numitor", "rhea"],
      ["parent", "rhea", "romulus"],
      ["parent", "rhea", "remus"],
      ["variant-parent", "mars", "romulus"],
      ["variant-parent", "mars", "remus"],
      ["variant-parent", "creusa", "ascanius"],
      ["variant-parent", "lavinia", "silvius"],
    ],
  },
  {
    id: "julio",
    ko: "율리우스-클라우디우스",
    en: "Julio-Claudian",
    lead: "제정 첫 황제들의 집안입니다. 혈연만으로 이어지지 않습니다. 카이사르가 옥타비아누스를, 아우구스투스가 티베리우스를, 클라우디우스가 네로를 입양했습니다. 안토니우스와 옥타비아의 두 딸은 칼리굴라, 클라우디우스, 네로의 조상입니다.",
    bands: [
      { id: "jul-caesar", ko: "카이사르", en: "Caesar", hint: "카이사르와 그의 누이, 그리고 클레오파트라입니다. 카이사르는 황제가 아니라 공화정의 독재관이었습니다.", color: "#3e4d7a", soft: "#e7edf7" },
      { id: "jul-next", ko: "그 자녀", en: "Their children", hint: "누이의 딸 아티아가 아우구스투스의 친모입니다. 카이사르의 딸 율리아는 폼페이우스와 결혼했고, 카이사리온은 클레오파트라의 아들입니다.", color: "#6e4c7a", soft: "#f3eaf6" },
      { id: "jul-augustus", ko: "아우구스투스", en: "Augustus", hint: "옥타비아누스는 아티아의 아들이고, 카이사르의 유언으로 양자가 됩니다. 리비아는 아내이지 대 율리아의 어머니가 아닙니다. 친모는 스크리보니아입니다.", color: "#8a5a24", soft: "#fbf3e6" },
      { id: "jul-children", ko: "자녀와 형제", en: "Children", hint: "티베리우스와 드루수스는 리비아와 클라우디우스 네로의 아들입니다. 소 안토니아는 안토니우스와 옥타비아의 딸이고, 드루수스의 아내입니다.", color: "#2f4a3c", soft: "#e7f0ea" },
      { id: "jul-grand", ko: "손자녀", en: "Grandchildren", hint: "대 아그리피나와 게르마니쿠스가 결혼합니다. 클라우디우스는 게르마니쿠스의 동생입니다. 그나이우스는 대 안토니아의 아들이고 네로의 친부입니다.", color: "#7a3454", soft: "#f8eef2" },
      { id: "jul-court", ko: "궁정", en: "The court", hint: "칼리굴라와 소 아그리피나는 게르마니쿠스의 자녀입니다. 브리타니쿠스는 클라우디우스와 메살리나의 아들입니다.", color: "#1f3b57", soft: "#e6eef5" },
      { id: "jul-nero", ko: "네로", en: "Nero", hint: "네로의 친부모는 소 아그리피나와 그나이우스 도미티우스입니다. 황위는 클라우디우스의 입양으로 이어집니다.", color: "#6a3a2a", soft: "#f8ece6" },
    ],
    seeds: [
      { id: "julia-sister", ko: "율리아", en: "Julia", latin: "Julia Minor", band: "jul-caesar", col: 0, y: 72, tag: "누이", years: "기원전 101–51년경", summary: "독재관 카이사르의 누이입니다. 마르쿠스 아티우스 발부스와 결혼했고, 딸이 아티아입니다. 아우구스투스는 이 혈통의 외증손입니다.", aliases: ["julia minor", "julia sister", "율리아 누이", "카이사르의 누이"] },
      { id: "atius", ko: "아티우스", en: "Atius Balbus", latin: "Marcus Atius Balbus", band: "jul-caesar", col: 1.2, y: 72, tag: "아티아의 아버지", summary: "카이사르의 누이 율리아의 남편입니다. 아우구스투스의 외할아버지입니다.", aliases: ["atius", "marcus atius balbus", "아티우스", "아티우스 발부스"] },
      { id: "caesar", ko: "카이사르", en: "Julius Caesar", latin: "Gaius Julius Caesar", band: "jul-caesar", col: 4.2, y: 72, years: "기원전 100–44", summary: "공화정의 독재관입니다. 황제가 된 사람은 그의 양자 아우구스투스입니다. 딸 율리아는 코르넬리아에게서 났고, 유언의 상속자는 옥타비아누스였습니다.", note: "클레오파트라와의 사이는 로마법의 결혼이 아닙니다. 카이사리온은 고대 기록이 그의 아들로 적고, 오늘날의 연구도 대체로 그렇게 봅니다. 유언에는 그 이름이 없습니다.", aliases: ["julius caesar", "caesar", "gaius julius caesar", "카이사르", "율리우스 카이사르", "시저"] },
      { id: "cleopatra", ko: "클레오파트라", en: "Cleopatra", latin: "Cleopatra VII", band: "jul-caesar", col: 5.4, y: 72, years: "통치 기원전 51–30", href: "/cleopatra", summary: "이집트 프톨레마이오스 왕조의 마지막 통치자입니다. 카이사르와의 사이에서 카이사리온이 태어났다고 전하고, 뒤에는 안토니우스와 자녀를 둡니다.", note: "안토니우스와의 자녀 알렉산드로스 헬리오스, 클레오파트라 셀레네, 프톨레마이오스 필라델포스는 이 그림에 없습니다. 셀레네만 나중에 행적이 비교적 분명합니다.", aliases: ["cleopatra", "cleopatra vii", "클레오파트라"] },

      { id: "atia", ko: "아티아", en: "Atia", latin: "Atia Balba Caesonia", band: "jul-next", col: 0, y: 282, years: "기원전 43년 죽음", summary: "카이사르의 조카이고, 가이우스 옥타비우스와 결혼해 아우구스투스와 옥타비아를 낳았습니다.", aliases: ["atia", "atia balba", "아티아"] },
      { id: "octavius", ko: "옥타비우스", en: "C. Octavius", latin: "Gaius Octavius", band: "jul-next", col: 1.2, y: 282, tag: "친부", summary: "아우구스투스의 친아버지입니다. 아들이 어렸을 때 죽었습니다. 뒤에 황제가 된 옥타비아누스와는 다른 사람입니다.", aliases: ["gaius octavius", "octavius", "옥타비우스"] },
      { id: "julia-daughter", ko: "율리아", en: "Julia", latin: "Julia", band: "jul-next", col: 4.2, y: 282, tag: "카이사르의 딸", years: "기원전 76–54년경", summary: "카이사르와 코르넬리아의 딸입니다. 기원전 59년 폼페이우스와 결혼했고, 기원전 54년 출산 중에 죽었습니다. 살아남은 자녀는 없습니다.", aliases: ["julia daughter", "julia caesaris", "카이사르의 딸", "율리아 딸"] },
      { id: "pompey", ko: "폼페이우스", en: "Pompey", latin: "Gnaeus Pompeius Magnus", band: "jul-next", col: 5.4, y: 282, years: "기원전 106–48", guestTag: "배우자", summary: "카이사르의 딸 율리아의 남편입니다. 율리아가 죽은 뒤 카이사르와 결별하고, 내전에서 패합니다.", aliases: ["pompey", "pompeius", "폼페이우스", "폼페이"] },
      { id: "caesarion", ko: "카이사리온", en: "Caesarion", latin: "Ptolemy XV Caesar", band: "jul-next", col: 6.8, y: 282, years: "기원전 47–30", summary: "클레오파트라의 아들이고, 고대 기록은 카이사르의 아들로 적습니다. 카이사르의 유언은 그를 상속자로 적지 않았습니다. 기원전 30년에 죽임을 당합니다.", aliases: ["caesarion", "ptolemy xv", "카이사리온", "프톨레마이오스 15세"] },

      { id: "scribonia", ko: "스크리보니아", en: "Scribonia", latin: "Scribonia", band: "jul-augustus", col: 0, y: 492, tag: "대 율리아의 어머니", summary: "아우구스투스의 아내이고 대 율리아의 친어머니입니다. 리비아가 그 딸의 어머니가 아닙니다. 딸이 태어난 해에 이혼당합니다.", aliases: ["scribonia", "스크리보니아"] },
      { id: "augustus", ko: "아우구스투스", en: "Augustus", latin: "Gaius Octavius, later Augustus", band: "jul-augustus", col: 1.2, y: 492, years: "재위 기원전 27–서기 14", href: "/rulers/augustus", summary: "친부모는 가이우스 옥타비우스와 아티아입니다. 기원전 44년 카이사르의 유언으로 양자가 되어 옥타비아누스라 불렸고, 기원전 27년 아우구스투스라는 호칭을 받습니다.", note: "친자는 스크리보니아에게서 난 대 율리아뿐입니다. 리비아와의 사이에는 자녀가 없습니다. 가이우스와 루키우스를 입양했다가 둘 다 일찍 죽었고, 서기 4년 티베리우스를 입양합니다. 아그리파 포스투무스도 그때 양자였으나 나중에 추방됩니다. 포스투무스는 이 그림에 없습니다.", aliases: ["augustus", "octavian", "octavianus", "아우구스투스", "옥타비아누스", "옥타비안"] },
      { id: "livia", ko: "리비아", en: "Livia", latin: "Livia Drusilla, later Julia Augusta", band: "jul-augustus", col: 2.4, y: 492, years: "기원전 58–서기 29", summary: "아우구스투스의 아내입니다. 첫 남편 티베리우스 클라우디우스 네로와의 사이에 티베리우스와 드루수스가 있습니다. 아우구스투스와의 친자는 없습니다.", aliases: ["livia", "julia augusta", "리비아", "리비아 드루실라"] },
      { id: "tcn", ko: "클라우디우스 네로", en: "Ti. Nero", latin: "Tiberius Claudius Nero", band: "jul-augustus", col: 3.6, y: 492, tag: "친부", years: "기원전 33년 죽음", summary: "황제 네로가 아닙니다. 리비아의 첫 남편이고, 황제 티베리우스와 드루수스의 친아버지입니다.", aliases: ["tiberius claudius nero", "claudius nero", "클라우디우스 네로"] },
      { id: "octavia", ko: "옥타비아", en: "Octavia", latin: "Octavia Minor", band: "jul-augustus", col: 5.4, y: 492, years: "기원전 69–11", summary: "아우구스투스의 친누이입니다. 첫 남편 마르켈루스 뒤에 안토니우스와 결혼했고, 그 사이에서 대 안토니아와 소 안토니아를 낳습니다.", note: "친아버지 옥타비우스의 전처에게서 난 배다른 언니(대 옥타비아)는 이 그림에 없습니다. 안토니우스와의 결혼은 기원전 40년이고, 이혼은 32년입니다.", aliases: ["octavia", "octavia minor", "옥타비아"] },
      { id: "antony", ko: "안토니우스", en: "Mark Antony", latin: "Marcus Antonius", band: "jul-augustus", col: 6.6, y: 492, years: "기원전 83–30", summary: "옥타비아의 남편이고, 클레오파트라와는 로마가 결혼으로 인정하지 않은 관계였습니다. 두 딸 안토니아가 뒤의 황제들의 조상입니다.", note: "클레오파트라와의 세 자녀는 이 그림에 없습니다. 칼리굴라·클라우디우스·네로로 가는 피는 옥타비아와의 두 딸 쪽입니다.", aliases: ["mark antony", "antony", "antonius", "marcus antonius", "안토니우스", "안토니", "마크 안토니"] },

      { id: "julia-elder", ko: "대 율리아", en: "Julia the Elder", latin: "Julia", band: "jul-children", col: 0.4, y: 702, years: "기원전 39–서기 14", summary: "아우구스투스와 스크리보니아의 딸이고, 아우구스투스의 유일한 친자입니다. 마르켈루스, 아그리파, 티베리우스와 차례로 결혼합니다.", note: "아그리파와의 자녀 가운데 소 율리아와 아그리파 포스투무스는 이 그림에 없습니다. 소 율리아도 나중에 추방됩니다.", aliases: ["julia the elder", "julia maior", "대 율리아", "대율리아"] },
      { id: "agrippa", ko: "아그리파", en: "Agrippa", latin: "Marcus Vipsanius Agrippa", band: "jul-children", col: 1.6, y: 702, years: "기원전 63–12", summary: "아우구스투스의 동료 장군이고 대 율리아의 남편입니다. 가이우스, 루키우스, 대 아그리피나의 아버지입니다. 알바 왕 목록의 아그리파와는 다른 사람입니다.", aliases: ["marcus agrippa", "vipsanius agrippa", "agrippa", "마르쿠스 아그리파", "빕사니우스"] },
      { id: "tiberius", ko: "티베리우스", en: "Tiberius", latin: "Tiberius Julius Caesar Augustus", band: "jul-children", col: 2.8, y: 702, years: "재위 서기 14–37", href: "/rulers/tiberius", summary: "리비아와 클라우디우스 네로의 아들이고, 서기 4년 아우구스투스의 양자가 되어 14년에 황제가 됩니다. 대 율리아와 결혼했지만 그 사이 자녀는 없습니다.", note: "빕사니아에게서 난 아들 드루수스(소 드루수스)는 이 그림에 없습니다. 서기 23년에 죽었고, 그 뒤 후계는 게르마니쿠스 쪽으로 기울어집니다. 티베리우스는 서기 4년 게르마니쿠스를 입양합니다.", aliases: ["tiberius", "티베리우스"] },
      { id: "drusus", ko: "드루수스", en: "Drusus", latin: "Nero Claudius Drusus", band: "jul-children", col: 4.0, y: 702, tag: "티베리우스의 동생", years: "기원전 38–9", summary: "리비아와 클라우디우스 네로의 아들이고, 소 안토니아의 남편입니다. 게르마니쿠스와 클라우디우스의 친아버지입니다.", note: "리비아가 아우구스투스와 결혼한 지 석 달 뒤에 태어났다는 소문이 수에토니우스에 있습니다. 법적 아버지는 클라우디우스 네로이고, 이 그림도 그렇게 잇습니다.", aliases: ["drusus", "drusus the elder", "nero claudius drusus", "드루수스"] },
      { id: "antonia-minor", ko: "소 안토니아", en: "Antonia the Younger", latin: "Antonia Minor", band: "jul-children", col: 5.2, y: 702, years: "기원전 36–서기 37", summary: "안토니우스와 옥타비아의 딸입니다. 드루수스와 결혼해 게르마니쿠스, 리빌라, 클라우디우스를 낳습니다. 리빌라는 이 그림에 없습니다.", aliases: ["antonia minor", "antonia the younger", "소 안토니아", "소안토니아"] },
      { id: "antonia-major", ko: "대 안토니아", en: "Antonia the Elder", latin: "Antonia Major", band: "jul-children", col: 6.4, y: 702, years: "기원전 39년 출생", summary: "안토니우스와 옥타비아의 딸이고, 소 안토니아의 언니입니다. 루키우스 도미티우스와 그나이우스의 어머니 쪽 조상으로, 네로의 친할머니입니다.", aliases: ["antonia major", "antonia the elder", "대 안토니아", "대안토니아"] },
      { id: "ldom", ko: "도미티우스", en: "L. Domitius", latin: "Lucius Domitius Ahenobarbus", band: "jul-children", col: 7.6, y: 702, tag: "조부", summary: "대 안토니아의 남편입니다. 기원전 16년 집정관. 아들 그나이우스가 네로의 친아버지입니다.", aliases: ["lucius domitius", "l. domitius ahenobarbus", "루키우스 도미티우스"] },

      { id: "gaius-caesar", ko: "가이우스 카이사르", en: "Gaius Caesar", latin: "Gaius Caesar", band: "jul-grand", col: 0, y: 912, years: "기원전 20–서기 4", summary: "대 율리아와 아그리파의 아들이고, 아우구스투스의 양자입니다. 후계자로 키워지다가 서기 4년 동방에서 죽습니다.", aliases: ["gaius caesar", "가이우스 카이사르"] },
      { id: "lucius-caesar", ko: "루키우스 카이사르", en: "Lucius Caesar", latin: "Lucius Caesar", band: "jul-grand", col: 1.2, y: 912, years: "기원전 17–서기 2", summary: "대 율리아와 아그리파의 아들이고, 아우구스투스의 양자입니다. 서기 2년 죽습니다. 이 두 형제가 죽은 뒤 티베리우스 입양이 확정됩니다.", aliases: ["lucius caesar", "루키우스 카이사르"] },
      { id: "agrippina-elder", ko: "대 아그리피나", en: "Agrippina the Elder", latin: "Agrippina Maior", band: "jul-grand", col: 2.4, y: 912, years: "기원전 14–서기 33", summary: "대 율리아와 아그리파의 딸이고 게르마니쿠스의 아내입니다. 칼리굴라와 소 아그리피나의 어머니입니다. 티베리우스 말년에 추방되어 서기 33년 죽습니다.", note: "이들 부부의 다른 자녀(네로 카이사르, 드루수스 카이사르, 드루실라, 리빌라)는 이 그림에 없습니다. 여기의 네로 카이사르는 황제 네로가 아닙니다.", aliases: ["agrippina the elder", "agrippina maior", "vipsania agrippina", "대 아그리피나", "대아그리피나"] },
      { id: "germanicus", ko: "게르마니쿠스", en: "Germanicus", latin: "Germanicus Julius Caesar", band: "jul-grand", col: 3.8, y: 912, years: "기원전 15–서기 19", summary: "드루수스와 소 안토니아의 아들입니다. 서기 4년 삼촌 티베리우스의 양자가 됩니다. 대 아그리피나와 칼리굴라, 소 아그리피나를 두었고 서기 19년 안티오키아에서 죽습니다.", aliases: ["germanicus", "게르마니쿠스"] },
      { id: "claudius", ko: "클라우디우스", en: "Claudius", latin: "Tiberius Claudius Caesar Augustus", band: "jul-grand", col: 5.2, y: 912, years: "재위 서기 41–54", href: "/rulers/claudius", summary: "드루수스와 소 안토니아의 아들이고 게르마니쿠스의 동생입니다. 칼리굴라가 죽은 뒤 황제가 됩니다. 메살리나와의 아들이 브리타니쿠스이고, 조카 소 아그리피나와 결혼해 그 아들 네로를 입양합니다.", aliases: ["claudius", "클라우디우스"] },
      { id: "messalina", ko: "메살리나", en: "Messalina", latin: "Valeria Messalina", band: "jul-grand", col: 6.4, y: 912, years: "서기 48년 죽음", summary: "클라우디우스의 아내이고 브리타니쿠스의 어머니입니다. 서기 48년 처형됩니다. 네로의 친어머니는 아닙니다.", note: "메살리나의 친어머니 도미티아 레피다는 대 안토니아의 딸로 전하므로, 브리타니쿠스도 안토니우스·옥타비아 혈통에 닿습니다. 레피다는 이 그림에 없습니다.", aliases: ["messalina", "valeria messalina", "메살리나"] },
      { id: "gnaeus", ko: "그나이우스", en: "Cn. Domitius", latin: "Gnaeus Domitius Ahenobarbus", band: "jul-grand", col: 7.6, y: 912, tag: "네로의 친부", years: "서기 40년 무렵 죽음", summary: "대 안토니아와 루키우스 도미티우스의 아들입니다. 소 아그리피나와 결혼해 네로를 낳습니다. 서기 32년 집정관이었고, 네로가 입양되기 전에 죽었습니다.", aliases: ["gnaeus domitius", "cn. domitius ahenobarbus", "ahenobarbus", "그나이우스", "아헤노바르부스"] },

      { id: "caligula", ko: "칼리굴라", en: "Caligula", latin: "Gaius Julius Caesar Germanicus", band: "jul-court", col: 2.6, y: 1122, years: "재위 서기 37–41", summary: "게르마니쿠스와 대 아그리피나의 아들입니다. 본이름은 가이우스이고, 칼리굴라는 진영에서 붙은 별명입니다. 서기 37–41년 황제였고 근위대에게 살해당합니다.", parentNote: "티베리우스가 그를 따로 입양한 것은 아닙니다. 아버지 게르마니쿠스가 티베리우스의 양자였습니다.", aliases: ["caligula", "gaius caesar", "칼리굴라", "가이우스"] },
      { id: "agrippina-younger", ko: "소 아그리피나", en: "Agrippina the Younger", latin: "Agrippina Minor", band: "jul-court", col: 4.2, y: 1122, years: "서기 15–59", summary: "게르마니쿠스와 대 아그리피나의 딸이고 칼리굴라의 누이입니다. 그나이우스와의 아들이 네로입니다. 서기 49년 숙부 클라우디우스와 결혼하고, 50년 네로가 클라우디우스의 양자가 됩니다.", aliases: ["agrippina the younger", "agrippina minor", "소 아그리피나", "소아그리피나"] },
      { id: "britannicus", ko: "브리타니쿠스", en: "Britannicus", latin: "Tiberius Claudius Britannicus", band: "jul-court", col: 5.8, y: 1122, years: "서기 41–55", summary: "클라우디우스와 메살리나의 아들입니다. 아버지가 네로를 입양하면서 밀려났고, 네로 즉위 이듬해에 죽습니다.", aliases: ["britannicus", "브리타니쿠스"] },

      { id: "nero", ko: "네로", en: "Nero", latin: "Lucius Domitius Ahenobarbus, later Nero", band: "jul-nero", col: 5.0, y: 1332, years: "재위 서기 54–68", href: "/rulers/nero", summary: "친부모는 소 아그리피나와 그나이우스 도미티우스입니다. 서기 50년 클라우디우스의 양자가 되어 54년에 황제가 됩니다. 친가와 외가 모두 안토니우스와 옥타비아에게 닿습니다.", note: "친할머니가 대 안토니아, 외증조모가 소 안토니아입니다. 두 사람 다 안토니우스와 옥타비아의 딸입니다.", aliases: ["nero", "네로", "lucius domitius ahenobarbus"] },
    ],
    links: julioLinks.links,
    disputes: [
      {
        id: "caesarion-father",
        title: "카이사리온의 아버지",
        main: "클레오파트라가 어머니인 것은 분명합니다. 플루타르코스와 카시우스 디오를 포함한 고대 기록은 카이사르를 아버지로 적고, 오늘날의 연구도 대체로 그 선을 따릅니다. 이 그림의 금색 실선이 그 대표 설명입니다.",
        other: "카이사르의 유언은 옥타비아누스를 상속자로 적고 카이사리온을 적지 않습니다. 출생 문서도 없습니다. 수에토니우스는 이 부자 관계를 그리스 쪽 기록에 기대어 전합니다. 법적 상속과 혈연 주장을 같은 문서로 보면 안 됩니다.",
      },
      {
        id: "drusus-rumor",
        title: "드루수스의 친아버지",
        main: "티베리우스 클라우디우스 네로와 리비아의 아들입니다. 아우구스투스도 공개적으로 네로의 아들이라고 말했습니다. 이 그림의 실선이 그 법적 혈연입니다.",
        other: "수에토니우스 『클라우디우스』 1장은, 리비아가 아우구스투스와 결혼한 지 석 달 뒤에 태어났다는 소문을 적습니다. 소문이라 실선으로 잇지 않았습니다.",
      },
    ],
    notes: [
      { title: "입양은 로마의 상속이었습니다", body: "여기의 입양은 어린아이를 거두는 현대의 입양과 다릅니다. 어른을 양자로 들이고, 유언으로 들이기도 했습니다. 카이사르의 옥타비아누스 입양은 유언이었습니다. 게르마니쿠스는 티베리우스가 아우구스투스의 양자가 되던 서기 4년, 티베리우스의 양자가 됩니다." },
      { title: "같은 이름", body: "율리아가 셋입니다. 카이사르의 누이, 카이사르의 딸, 아우구스투스의 딸(대 율리아)입니다. 대 아그리피나는 아우구스투스의 외손녀이고, 소 아그리피나는 그 딸이자 네로의 어머니입니다. 클라우디우스 네로는 황제 네로가 아닙니다." },
      { title: "그림에 없는 사람", body: "마르켈루스, 소 율리아, 아그리파 포스투무스, 티베리우스의 친자 드루수스, 리빌라, 칼리굴라의 다른 형제자매, 안토니우스와 클레오파트라의 세 자녀는 요약에만 두었습니다. 황위로 가는 선이 아니거나, 넣으면 칸이 겹칩니다." },
      { title: "안토니우스와 옥타비아", body: "대 안토니아는 그나이우스의 어머니라 네로의 친할머니입니다. 소 안토니아는 게르마니쿠스와 클라우디우스의 어머니라, 칼리굴라·소 아그리피나·클라우디우스의 조상입니다. 네로는 어머니 쪽으로도 소 안토니아의 후손입니다." },
    ],
    sources: [
      { work: "수에토니우스 『황제전』", ref: "카이사르 83장(유언), 아우구스투스 4·7–8·62–65장, 티베리우스, 칼리굴라, 클라우디우스 1장, 네로" },
      { work: "타키투스 『연대기』", ref: "1권의 입양과 가계, 12권의 클라우디우스와 아그리피나" },
      { work: "플루타르코스 『영웅전』", ref: "카이사르, 안토니우스. 카이사리온과 옥타비아" },
      { work: "카시우스 디오 『로마사』", ref: "삼두·악티움 전후의 혼인과 입양" },
    ],
    must: [
      ["parent", "julia-sister", "atia"],
      ["parent", "atia", "augustus"],
      ["parent", "octavius", "augustus"],
      ["adoption", "caesar", "augustus"],
      ["parent", "caesar", "julia-daughter"],
      ["parent", "cleopatra", "caesarion"],
      ["parent", "caesar", "caesarion"],
      ["parent", "scribonia", "julia-elder"],
      ["parent", "livia", "tiberius"],
      ["parent", "tcn", "tiberius"],
      ["parent", "livia", "drusus"],
      ["adoption", "augustus", "tiberius"],
      ["parent", "octavia", "antonia-minor"],
      ["parent", "antony", "antonia-minor"],
      ["parent", "octavia", "antonia-major"],
      ["parent", "antony", "antonia-major"],
      ["parent", "antonia-major", "gnaeus"],
      ["parent", "agrippa", "agrippina-elder"],
      ["parent", "julia-elder", "agrippina-elder"],
      ["adoption", "augustus", "gaius-caesar"],
      ["adoption", "augustus", "lucius-caesar"],
      ["parent", "drusus", "germanicus"],
      ["parent", "antonia-minor", "germanicus"],
      ["parent", "drusus", "claudius"],
      ["adoption", "tiberius", "germanicus"],
      ["parent", "germanicus", "caligula"],
      ["parent", "agrippina-elder", "caligula"],
      ["parent", "germanicus", "agrippina-younger"],
      ["parent", "messalina", "britannicus"],
      ["parent", "agrippina-younger", "nero"],
      ["parent", "gnaeus", "nero"],
      ["adoption", "claudius", "nero"],
      ["spouse", "augustus", "livia"],
      ["spouse", "claudius", "agrippina-younger"],
      ["spouse", "antony", "octavia"],
      ["spouse", "antony", "cleopatra"],
    ],
  },
  {
    id: "flavian",
    ko: "플라비우스",
    en: "Flavian",
    lead: "네로 다음 내전을 이긴 베스파시아누스와 두 아들입니다. 티투스는 도미티아누스의 아버지가 아닙니다. 형과 동생이고, 어머니는 플라비아 도미틸라입니다.",
    bands: [
      { id: "flav-parents", ko: "부모", en: "Parents", hint: "베스파시아누스는 이탈리아 지방 가문 출신입니다. 아내 도미틸라는 그가 황제가 되기 전에 죽었습니다.", color: "#8a5a24", soft: "#fbf3e6" },
      { id: "flav-sons", ko: "아들", en: "Sons", hint: "티투스가 먼저 황제가 되고, 자식 없이 죽은 뒤 동생 도미티아누스가 뒤를 이었습니다. 입양이 아닙니다.", color: "#2f4a3c", soft: "#e7f0ea" },
    ],
    seeds: [
      { id: "domitilla", ko: "도미틸라", en: "Domitilla", latin: "Flavia Domitilla", band: "flav-parents", col: 0, y: 72, tag: "어머니", summary: "베스파시아누스의 아내이고 티투스, 도미티아누스, 딸 도미틸라의 어머니입니다. 남편이 황제가 되기 전에 죽었습니다. 딸은 이 그림에 없습니다.", aliases: ["domitilla", "flavia domitilla", "도미틸라"] },
      { id: "vespasian", ko: "베스파시아누스", en: "Vespasian", latin: "Titus Flavius Vespasianus", band: "flav-parents", col: 1.2, y: 72, years: "재위 서기 69–79", href: "/rulers/vespasian", summary: "서기 69년, 갈바·오토·비텔리우스에 이어 황제가 되며 플라비우스 왕조를 엽니다. 두 아들에게 자리를 물려 줍니다.", aliases: ["vespasian", "vespasianus", "베스파시아누스"] },
      { id: "titus", ko: "티투스", en: "Titus", latin: "Titus Flavius Vespasianus", band: "flav-sons", col: 0.4, y: 282, years: "재위 서기 79–81", summary: "베스파시아누스의 맏아들입니다. 70년 예루살렘 함락을 지휘했고, 79년 황제가 됩니다. 재위 중에 베수비오가 분화합니다. 아들 없이 81년 병으로 죽습니다.", aliases: ["titus", "티투스"] },
      { id: "domitian", ko: "도미티아누스", en: "Domitian", latin: "Titus Flavius Domitianus", band: "flav-sons", col: 1.8, y: 282, years: "재위 서기 81–96", summary: "베스파시아누스의 작은아들이고 티투스의 동생입니다. 81–96년 황제였고 궁정에서 암살됩니다. 뒤를 이을 아들이 없어 왕조가 끝나고, 네르바가 원로원에서 추대됩니다.", aliases: ["domitian", "domitianus", "도미티아누스"] },
    ],
    links: flavianLinks.links,
    disputes: [],
    notes: [
      { title: "형과 동생", body: "도미티아누스를 티투스의 아들로 기억하기 쉽습니다. 둘 다 베스파시아누스와 도미틸라의 아들입니다. 티투스가 먼저 2년 남짓 다스렸습니다." },
    ],
    sources: [
      { work: "수에토니우스 『황제전』", ref: "베스파시아누스, 티투스, 도미티아누스" },
      { work: "타키투스 『역사』", ref: "69년의 내전과 베스파시아누스 추대" },
    ],
    must: [
      ["parent", "vespasian", "titus"],
      ["parent", "domitilla", "titus"],
      ["parent", "vespasian", "domitian"],
      ["parent", "domitilla", "domitian"],
      ["spouse", "vespasian", "domitilla"],
    ],
  },
  {
    id: "antonine",
    ko: "네르바-안토니누스",
    en: "Nerva–Antonine",
    lead: "2세기의 황위는 대부분 입양으로 넘어갔습니다. 네르바, 트라야누스, 하드리아누스, 안토니누스 피우스, 마르쿠스 아우렐리우스, 루키우스 베루스가 그 줄입니다. 코모두스는 마르쿠스의 친자라서 이 입양 연쇄가 끊깁니다.",
    bands: [
      { id: "ant-nerva", ko: "네르바", en: "Nerva", hint: "도미티아누스와 피가 닿지 않습니다. 친자녀가 없었고, 군단에 밀려 트라야누스를 입양합니다.", color: "#3e4d7a", soft: "#e7edf7" },
      { id: "ant-trajan", ko: "트라야누스", en: "Trajan", hint: "친부는 원로원 의원 마르쿠스 울피우스 트라야누스입니다. 황위는 네르바의 입양입니다. 플로티나와의 자녀는 없습니다.", color: "#8a5a24", soft: "#fbf3e6" },
      { id: "ant-hadrian", ko: "하드리아누스", en: "Hadrian", hint: "트라야누스 가문과 친척이지만 아들은 아닙니다. 사비나와의 자녀는 없고, 후계를 입양으로 정합니다.", color: "#1f3b57", soft: "#e6eef5" },
      { id: "ant-pius", ko: "안토니누스", en: "Antoninus", hint: "하드리아누스는 먼저 루키우스 아일리우스를 후계로 들였다가, 그가 죽자 안토니누스 피우스를 입양합니다. 조건은 마르쿠스와 베루스를 다시 입양하는 것이었습니다.", color: "#6e4c7a", soft: "#f3eaf6" },
      { id: "ant-marcus", ko: "마르쿠스와 베루스", en: "Marcus and Verus", hint: "둘 다 안토니누스 피우스의 양자입니다. 베루스의 친부는 아일리우스입니다. 마르쿠스는 피우스의 딸 소 파우스티나와 결혼합니다.", color: "#2f4a3c", soft: "#e7f0ea" },
      { id: "ant-commodus", ko: "코모두스", en: "Commodus", hint: "마르쿠스와 소 파우스티나의 친자입니다. 177년 공동 황제, 180년부터 단독입니다. 입양으로 고르지 않았습니다.", color: "#7a3454", soft: "#f8eef2" },
    ],
    seeds: [
      { id: "nerva", ko: "네르바", en: "Nerva", latin: "Marcus Cocceius Nerva", band: "ant-nerva", col: 2.4, y: 72, years: "재위 서기 96–98", parentNote: "도미티아누스의 친척이 아닙니다. 친부모는 이 그림에 없습니다.", summary: "서기 96년 도미티아누스 암살 뒤 원로원이 추대한 황제입니다. 친자녀가 없었고, 97년 말 트라야누스를 입양한 뒤 98년 1월 죽습니다.", aliases: ["nerva", "네르바"] },
      { id: "trajan", ko: "트라야누스", en: "Trajan", latin: "Marcus Ulpius Traianus", band: "ant-trajan", col: 2.4, y: 282, years: "재위 서기 98–117", href: "/rulers/trajan", parentNote: "친부는 마르쿠스 울피우스 트라야누스(원로원 의원)이고, 이 그림에는 없습니다.", summary: "히스파니아 이탈리카 출신입니다. 네르바의 양자로 황제가 됩니다. 아내 폼페이아 플로티나와 자녀가 없어, 하드리아누스가 입양으로 뒤를 잇습니다.", note: "하드리아누스 입양이 트라야누스 생전에 이루어졌는지, 죽은 뒤 플로티나 쪽에서 발표됐는지는 고대부터 말이 있습니다. 승계의 형식은 입양입니다.", aliases: ["trajan", "traianus", "트라야누스"] },
      { id: "plotina", ko: "플로티나", en: "Plotina", latin: "Pompeia Plotina", band: "ant-trajan", col: 3.6, y: 282, guestTag: "배우자", summary: "트라야누스의 아내입니다. 자녀가 없습니다. 하드리아누스 승계를 도왔다는 고대의 이야기가 있습니다.", aliases: ["plotina", "pompeia plotina", "플로티나"] },
      { id: "hadrian", ko: "하드리아누스", en: "Hadrian", latin: "Publius Aelius Hadrianus", band: "ant-hadrian", col: 2.4, y: 492, years: "재위 서기 117–138", href: "/rulers/hadrian", parentNote: "친부는 푸블리우스 아일리우스 하드리아누스 아페르입니다. 트라야누스의 사촌 쪽 친척이지, 아들은 아닙니다.", summary: "트라야누스의 양자로 황제가 됩니다. 비비아 사비나와 자녀가 없습니다. 136년 루키우스 아일리우스를, 138년 안토니누스 피우스를 입양합니다.", aliases: ["hadrian", "hadrianus", "하드리아누스"] },
      { id: "sabina", ko: "사비나", en: "Sabina", latin: "Vibia Sabina", band: "ant-hadrian", col: 3.6, y: 492, guestTag: "배우자", summary: "하드리아누스의 아내입니다. 자녀가 없습니다. 트라야누스의 누이 마르키아나 쪽 후손으로, 혈연의 조카뻘이지만 승계의 권리는 입양에 있었습니다.", aliases: ["sabina", "vibia sabina", "사비나"] },
      { id: "aelius", ko: "루키우스 아일리우스", en: "L. Aelius", latin: "Lucius Aelius Caesar", band: "ant-pius", col: 0.6, y: 702, years: "카이사르 136–138", summary: "하드리아누스가 136년 입양한 후계자입니다. 황제가 되기 전인 138년 1월 1일 죽습니다. 아들 루키우스 베루스는 나중에 안토니누스 피우스가 입양합니다.", aliases: ["lucius aelius", "aelius caesar", "ceionius", "아일리우스", "루키우스 아일리우스"] },
      { id: "antoninus", ko: "안토니누스 피우스", en: "Antoninus Pius", latin: "Titus Aurelius Fulvus Boionius Arrius Antoninus", band: "ant-pius", col: 2.4, y: 702, years: "재위 서기 138–161", parentNote: "친부는 티투스 아우렐리우스 풀부스이고, 이 그림에는 없습니다.", summary: "138년 2월 하드리아누스의 양자가 되며, 마르쿠스 아우렐리우스와 루키우스 베루스를 입양하라는 조건을 받습니다. 161년까지 다스립니다.", note: "대 파우스티나와의 아들들은 어릴 때 죽었습니다. 황위를 이은 친자는 없고, 딸 소 파우스티나가 마르쿠스의 아내가 됩니다.", aliases: ["antoninus pius", "antoninus", "안토니누스", "안토니누스 피우스", "피우스"] },
      { id: "faustina-elder", ko: "대 파우스티나", en: "Faustina the Elder", latin: "Annia Galeria Faustina", band: "ant-pius", col: 3.6, y: 702, years: "서기 140년 죽음", summary: "안토니누스 피우스의 아내이고 소 파우스티나의 어머니입니다. 서기 140년에 죽습니다.", aliases: ["faustina the elder", "faustina maior", "대 파우스티나"] },
      { id: "verus", ko: "루키우스 베루스", en: "Lucius Verus", latin: "Lucius Aurelius Verus", band: "ant-marcus", col: 0.6, y: 912, years: "재위 서기 161–169", parentNote: "어머니는 아비디아로 전하며, 이 그림에는 없습니다.", summary: "루키우스 아일리우스의 친아들이고, 안토니누스 피우스의 양자입니다. 161년 마르쿠스와 공동 황제가 되었다가 169년 죽습니다. 마르쿠스의 딸 루킬라와 결혼합니다.", aliases: ["lucius verus", "verus", "루키우스 베루스", "베루스"] },
      { id: "marcus", ko: "마르쿠스 아우렐리우스", en: "Marcus Aurelius", latin: "Marcus Annius Verus, later Marcus Aurelius", band: "ant-marcus", col: 2.4, y: 912, years: "재위 서기 161–180", href: "/rulers/marcus-aurelius", parentNote: "친부는 마르쿠스 안니우스 베루스, 친모는 도미티아 루킬라입니다. 둘 다 이 그림에는 없습니다.", summary: "안토니누스 피우스의 양자이고, 피우스의 딸 소 파우스티나의 남편입니다. 161–169년 루키우스 베루스와 공동으로 다스렸습니다. 아들 코모두스에게 자리를 물려 입양 전통이 끊깁니다.", aliases: ["marcus aurelius", "marcus", "마르쿠스", "마르쿠스 아우렐리우스"] },
      { id: "faustina-younger", ko: "소 파우스티나", en: "Faustina the Younger", latin: "Annia Galeria Faustina Minor", band: "ant-marcus", col: 3.6, y: 912, years: "서기 175년 죽음", summary: "안토니누스 피우스와 대 파우스티나의 딸이고, 마르쿠스 아우렐리우스의 아내입니다. 코모두스와 루킬라의 어머니입니다.", aliases: ["faustina the younger", "faustina minor", "소 파우스티나"] },
      { id: "lucilla", ko: "루킬라", en: "Lucilla", latin: "Annia Aurelia Galeria Lucilla", band: "ant-marcus", col: 4.8, y: 912, years: "서기 182년 무렵 죽음", summary: "마르쿠스와 소 파우스티나의 딸이고, 루키우스 베루스의 아내입니다. 베루스가 죽은 뒤 재혼했고, 코모두스 시절 음모에 연루되어 죽습니다.", aliases: ["lucilla", "루킬라"] },
      { id: "commodus", ko: "코모두스", en: "Commodus", latin: "Lucius Aurelius Commodus", band: "ant-commodus", col: 3.0, y: 1122, years: "재위 서기 177–192", summary: "마르쿠스 아우렐리우스와 소 파우스티나의 친자입니다. 177년 공동 황제, 180년부터 단독으로 192년까지 다스리다 암살됩니다. 영화 글래디에이터의 부자 살해 장면은 사실이 아닙니다.", note: "이 사이트의 마르쿠스 글은 단독 재위를 180–192년으로 적습니다. 공동 황제가 된 해는 177년입니다.", aliases: ["commodus", "코모두스"] },
    ],
    links: antonineLinks.links,
    disputes: [
      {
        id: "hadrian-adoption",
        title: "하드리아누스 입양의 시점",
        main: "트라야누스에게 친자가 없었고, 하드리아누스가 다음 황제가 된 형식은 입양입니다. 이 그림의 입양 선이 그 승계입니다.",
        other: "카시우스 디오와 후대의 『히스토리아 아우구스타』는 발표 시점을 의심합니다. 트라야누스가 죽은 뒤 플로티나가 관여했다는 소문입니다. 소문의 세부를 사실로 쓰지는 않고, 입양이라는 형식만 선으로 남깁니다. 『히스토리아 아우구스타』의 가십은 근거로 쓰지 않습니다.",
      },
    ],
    notes: [
      { title: "오현제는 당시의 공식 이름이 아닙니다", body: "네르바부터 마르쿠스까지를 좋은 황제 다섯으로 묶는 말은 후대의 별명입니다. 이 그림은 그 평가 대신, 자리가 입양으로 넘어갔다는 사실만 보여 줍니다." },
      { title: "친부모를 칸에 넣지 않은 이유", body: "트라야누스, 하드리아누스, 안토니누스, 마르쿠스의 친부모는 황제가 아닙니다. 넣으면 입양 줄이 혈연처럼 보이기 쉬워, 칸을 누르렀을 때의 설명에만 적었습니다." },
    ],
    sources: [
      { work: "카시우스 디오 『로마사』", ref: "네르바의 트라야누스 입양, 하드리아누스의 후계. 이 부분은 요약으로 전합니다" },
      { work: "소 플리니우스 『편지』 10권", ref: "트라야누스와의 행정 서신. 가계 문헌은 아닙니다" },
      { work: "마르쿠스 아우렐리우스 『명상록』", ref: "1권에 양아버지 안토니누스와 친족을 짧게 적습니다" },
    ],
    must: [
      ["adoption", "nerva", "trajan"],
      ["adoption", "trajan", "hadrian"],
      ["adoption", "hadrian", "aelius"],
      ["adoption", "hadrian", "antoninus"],
      ["parent", "aelius", "verus"],
      ["adoption", "antoninus", "marcus"],
      ["adoption", "antoninus", "verus"],
      ["parent", "antoninus", "faustina-younger"],
      ["parent", "faustina-elder", "faustina-younger"],
      ["parent", "marcus", "commodus"],
      ["parent", "faustina-younger", "commodus"],
      ["spouse", "marcus", "faustina-younger"],
      ["spouse", "verus", "lucilla"],
    ],
  },
  {
    id: "constantine",
    ko: "콘스탄티누스",
    en: "Constantine",
    lead: "콘스탄티우스 클로루스와 헬레나의 아들 콘스탄티누스, 그리고 그의 아들들입니다. 테오도라에게서 난 배다른 형제와, 그 형의 아들 율리아누스는 이 그림에 없습니다. 율리아누스는 콘스탄티누스의 아들이 아닙니다.",
    bands: [
      { id: "con-parents", ko: "부모", en: "Parents", hint: "콘스탄티우스 클로루스는 디오클레티아누스 체제에서 카이사르였다가 305년 정제가 됩니다. 디오클레티아누스의 아들은 아닙니다.", color: "#3e4d7a", soft: "#e7edf7" },
      { id: "con-constantine", ko: "콘스탄티누스", en: "Constantine", hint: "친모는 헬레나입니다. 미네르비나에게서 크리스푸스가, 파우스타에게서 뒤에 정제가 된 세 아들이 납니다.", color: "#8a5a24", soft: "#fbf3e6" },
      { id: "con-sons", ko: "아들", en: "Sons", hint: "337년 콘스탄티누스가 죽은 뒤 세 아들이 제국을 나누어 가집니다. 크리스푸스는 326년에 이미 죽었고 황제가 되지 못했습니다.", color: "#2f4a3c", soft: "#e7f0ea" },
    ],
    seeds: [
      { id: "helena", ko: "헬레나", en: "Helena", latin: "Flavia Julia Helena", band: "con-parents", col: 0, y: 72, years: "서기 330년 무렵 죽음", summary: "콘스탄티누스의 어머니입니다. 콘스탄티우스가 테오도라와 결혼하면서 곁에서 물러났다가, 아들 대에 아우구스타가 됩니다. 법적 아내였는지 첩이었는지는 고대 기록이 갈립니다.", aliases: ["helena", "helen", "헬레나"] },
      { id: "constantius", ko: "콘스탄티우스 클로루스", en: "Constantius Chlorus", latin: "Flavius Valerius Constantius", band: "con-parents", col: 1.2, y: 72, years: "정제 서기 305–306", summary: "293–305년 카이사르(부제), 305–306년 정제입니다. 306년 요크에서 죽자 병사들이 아들 콘스탄티누스를 추대합니다. 헬레나에게서 콘스탄티누스가, 테오도라에게서 다른 자녀가 있습니다.", aliases: ["constantius chlorus", "constantius i", "콘스탄티우스", "콘스탄티우스 클로루스", "클로루스"] },
      { id: "theodora", ko: "테오도라", en: "Theodora", latin: "Flavia Maximiana Theodora", band: "con-parents", col: 2.4, y: 72, guestTag: "둘째 아내", summary: "막시미아누스의 의붓딸이고 콘스탄티우스의 둘째 아내입니다. 그 자녀(율리우스 콘스탄티우스 등)는 이 그림에 없습니다. 율리아누스 황제는 그 아들이지, 콘스탄티누스의 아들이 아닙니다.", aliases: ["theodora", "테오도라"] },
      { id: "minervina", ko: "미네르비나", en: "Minervina", latin: "Minervina", band: "con-constantine", col: 0, y: 282, summary: "콘스탄티누스의 첫 배우자이고 크리스푸스의 어머니입니다. 법적 아내였는지 첩이었는지는 기록이 갈립니다. 파우스타와의 결혼(307년) 이전의 사람입니다.", aliases: ["minervina", "미네르비나"] },
      { id: "constantine", ko: "콘스탄티누스", en: "Constantine", latin: "Flavius Valerius Constantinus", band: "con-constantine", col: 1.2, y: 282, years: "재위 서기 306–337", href: "/rulers/constantine", summary: "콘스탄티우스 클로루스와 헬레나의 아들입니다. 306년 요크에서 추대되어 337년까지 다스립니다. 324년 이후에는 제국을 한 사람이 맡습니다.", note: "326년 아들 크리스푸스와 아내 파우스타가 죽었습니다. 고대 기록이 죽음을 전하지만 동기는 확실하지 않습니다. 337년 그가 죽은 뒤 군대가 배다른 친척 여러 명을 죽였고, 아들 셋이 제국을 나누어 가졌습니다.", aliases: ["constantine", "constantine i", "콘스탄티누스", "콘스탄티누스 1세"] },
      { id: "fausta", ko: "파우스타", en: "Fausta", latin: "Flavia Maxima Fausta", band: "con-constantine", col: 2.4, y: 282, years: "서기 326년 죽음", summary: "막시미아누스의 딸이고 콘스탄티누스의 아내입니다. 307년 결혼. 콘스탄티누스 2세, 콘스탄티우스 2세, 콘스탄스의 어머니입니다. 326년에 죽습니다.", aliases: ["fausta", "파우스타"] },
      { id: "crispus", ko: "크리스푸스", en: "Crispus", latin: "Flavius Julius Crispus", band: "con-sons", col: 0, y: 492, years: "카이사르 317–326", summary: "콘스탄티누스와 미네르비나의 아들입니다. 317년 카이사르가 되었으나 326년 죽임을 당합니다. 정제(아우구스투스)까지 오르지 못했습니다.", aliases: ["crispus", "크리스푸스"] },
      { id: "constantine-ii", ko: "콘스탄티누스 2세", en: "Constantine II", latin: "Flavius Claudius Constantinus", band: "con-sons", col: 1.6, y: 492, years: "재위 서기 337–340", summary: "콘스탄티누스와 파우스타의 아들입니다. 317년 카이사르, 337년 정제. 340년 동생 콘스탄스와 싸우다 아퀼레이아 근처에서 죽습니다.", aliases: ["constantine ii", "constantine 2", "콘스탄티누스 2세"] },
      { id: "constantius-ii", ko: "콘스탄티우스 2세", en: "Constantius II", latin: "Flavius Julius Constantius", band: "con-sons", col: 2.8, y: 492, years: "재위 서기 337–361", summary: "콘스탄티누스와 파우스타의 아들입니다. 324년 카이사르, 337년 정제. 361년까지 다스렸고, 뒤를 배다른 사촌 율리아누스에게 넘깁니다.", aliases: ["constantius ii", "constantius 2", "콘스탄티우스 2세"] },
      { id: "constans", ko: "콘스탄스", en: "Constans", latin: "Flavius Julius Constans", band: "con-sons", col: 4.0, y: 492, years: "재위 서기 337–350", summary: "콘스탄티누스와 파우스타의 아들입니다. 333년 카이사르, 337년 정제. 350년 마그넨티우스의 찬탈 속에 죽습니다.", aliases: ["constans", "콘스탄스"] },
    ],
    links: constantineLinks.links,
    disputes: [
      {
        id: "helena-status",
        title: "헬레나와 미네르비나의 지위",
        main: "콘스탄티누스의 친모가 헬레나이고, 크리스푸스의 친모가 미네르비나라는 점은 가계의 뼈대입니다. 이 그림은 그 부모 자식만 실선으로 잇습니다.",
        other: "두 사람이 법적 아내였는지 첩이었는지는 고대 기록이 갈립니다. 적대적인 후대 글은 헬레나의 출신을 낮춰 부릅니다. 결혼의 법적 이름과 어머니의 사실 여부를 한 문장으로 확정하지 않습니다.",
      },
    ],
    notes: [
      { title: "율리아누스는 아들이 아닙니다", body: "배교제라 불리는 율리아누스는 콘스탄티누스의 배다른 동생 율리우스 콘스탄티우스의 아들입니다. 콘스탄티우스 2세가 후계로 지목합니다. 이 그림의 아들 칸에 넣지 않았습니다." },
      { title: "337년", body: "콘스탄티누스가 죽은 뒤 군대가 테오도라 쪽 남자 친척 다수를 죽였습니다. 살아남은 아들 셋이 서쪽·가운데·동쪽을 나누어 가집니다. 콘스탄티누스 2세는 340년, 콘스탄스는 350년, 콘스탄티우스 2세는 361년에 죽음으로 그 분할이 끝납니다." },
    ],
    sources: [
      { work: "에우세비우스 『콘스탄티누스의 생애』", ref: "헬레나, 아들들의 승계. 황제에게 우호적인 글입니다" },
      { work: "락탄티우스 『박해자의 최후』", ref: "디오클레티아누스 체제와 콘스탄티우스·콘스탄티누스" },
      { work: "아우렐리우스 빅토르, 에우트로피우스 등의 4세기 약사", ref: "아들 셋의 분할과 사망 연대" },
    ],
    must: [
      ["parent", "constantius", "constantine"],
      ["parent", "helena", "constantine"],
      ["parent", "minervina", "crispus"],
      ["parent", "fausta", "constantine-ii"],
      ["parent", "fausta", "constantius-ii"],
      ["parent", "fausta", "constans"],
      ["parent", "constantine", "crispus"],
      ["spouse", "constantius", "helena"],
      ["spouse", "constantine", "fausta"],
    ],
  },
];

export type LayoutNode = TreeSeed & {
  x: number;
  y: number;
  w: number;
  h: number;
  sub: string;
  href?: string;
  keys: string[];
};

export type LayoutEdge = {
  id: string;
  d: string;
  d2?: string;
  kind: LinkKind;
  from: string;
  to: string;
  local: boolean;
  quiet: boolean;
  mark?: { x: number; y: number };
};

export type LayoutBand = BandMeta & {
  top: number;
  height: number;
  nodeIds: string[];
};

export type LaidTree = {
  id: string;
  ko: string;
  en: string;
  lead: string;
  disputes: DisputeItem[];
  notes: NoteItem[];
  sources: Source[];
  links: TreeLink[];
  width: number;
  height: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  bands: LayoutBand[];
  byId: Map<string, LayoutNode>;
};

type Box = { id: string; x: number; y: number; w: number; h: number; cx: number; cy: number };

function subLine(seed: TreeSeed) {
  return [seed.tag, seed.guestTag, seed.en].filter(Boolean).join(" · ");
}

function placeNodes(def: TreeDef) {
  const cols = def.seeds.map((seed) => seed.col);
  const min = Math.min(...cols);
  const max = Math.max(...cols);
  const width = (max - min) * COL + NODE_W + PAD * 2;
  const nodes: LayoutNode[] = def.seeds.map((seed) => {
    const keys = [seed.ko, seed.en, seed.latin, seed.id, seed.tag, ...(seed.aliases ?? [])].filter((key): key is string => Boolean(key));
    return {
      ...seed,
      x: PAD + (seed.col - min) * COL,
      w: NODE_W,
      h: NODE_H,
      sub: subLine(seed),
      keys,
    };
  });
  const height = Math.max(...nodes.map((node) => node.y + node.h)) + 36;
  return { nodes, width, height };
}

function boxes(nodes: LayoutNode[]): Box[] {
  return nodes.map((node) => ({
    id: node.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    cx: node.x + node.w / 2,
    cy: node.y + node.h / 2,
  }));
}

function directedPath(from: Box, to: Box, kind: LinkKind): { d: string; mark: { x: number; y: number } } {
  const downward = from.cy <= to.cy;
  const x1 = from.cx;
  const y1 = downward ? from.y + from.h : from.y;
  const x2 = to.cx;
  const y2 = downward ? to.y : to.y + to.h;
  const sameRow = Math.abs(from.cy - to.cy) < 24;
  if (sameRow && kind === "variant-parent") {
    const left = Math.min(x1, x2);
    const right = Math.max(x1, x2);
    const y = Math.min(from.y, to.y);
    const mx = (left + right) / 2;
    const my = y - 26;
    return { d: `M ${left} ${y} Q ${mx} ${my}, ${right} ${y}`, mark: { x: mx, y: (y + my) / 2 } };
  }
  if (sameRow) {
    const yb = from.y + from.h;
    const drop = 14;
    const mx = (x1 + x2) / 2;
    return { d: `M ${x1} ${yb} Q ${mx} ${yb + drop}, ${x2} ${yb}`, mark: { x: mx, y: yb + drop } };
  }
  if (Math.abs(x1 - x2) < 6) return { d: `M ${x1} ${y1} V ${y2}`, mark: { x: x1, y: (y1 + y2) / 2 } };
  const mid = (y1 + y2) / 2;
  return {
    d: `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`,
    mark: { x: (x1 + x2) / 2, y: (y1 + y2) / 2 },
  };
}

function spousePath(a: Box, b: Box): { d: string; d2?: string } {
  const left = a.cx <= b.cx ? a : b;
  const right = a.cx <= b.cx ? b : a;
  const x1 = left.x + left.w;
  const x2 = right.x;
  const gap = x2 - x1;
  if (Math.abs(a.cy - b.cy) < 24 && gap < COL * 0.75) {
    const y = (left.cy + right.cy) / 2;
    return { d: `M ${x1} ${y - 2.5} H ${x2}`, d2: `M ${x1} ${y + 2.5} H ${x2}` };
  }
  if (Math.abs(a.cy - b.cy) < 24) {
    const y = left.y;
    const mid = (left.cx + right.cx) / 2;
    const lift = Math.min(34, 16 + Math.abs(right.cx - left.cx) * 0.04);
    return { d: `M ${left.cx} ${y} Q ${mid} ${y - lift}, ${right.cx} ${y}` };
  }
  const upper = a.cy <= b.cy ? a : b;
  const lower = a.cy <= b.cy ? b : a;
  const mid = (upper.y + upper.h + lower.y) / 2;
  const bow = upper.cx <= lower.cx ? 28 : -28;
  return { d: `M ${upper.cx} ${upper.y + upper.h} C ${upper.cx + bow} ${mid}, ${lower.cx + bow} ${mid}, ${lower.cx} ${lower.y}` };
}

function edgePaths(nodes: LayoutNode[], links: TreeLink[]): LayoutEdge[] {
  const box = new Map(boxes(nodes).map((item) => [item.id, item]));
  return links.map((link) => {
    const from = box.get(link.from);
    const to = box.get(link.to);
    if (!from || !to) throw new Error(`가족관계도 선 오류: ${link.kind} ${link.from} → ${link.to}`);
    const path = link.kind === "spouse" ? spousePath(from, to) : directedPath(from, to, link.kind);
    const dx = Math.abs(from.cx - to.cx);
    const dy = Math.abs(from.cy - to.cy);
    const local = link.kind === "spouse" ? dx < COL * 1.6 && dy < NODE_H * 1.4 : dx < COL * 2.2 && dy < 280;
    const downward = from.cy <= to.cy;
    const child = downward ? to : from;
    const mark =
      link.kind === "adoption" && Math.abs(from.cy - to.cy) >= 24
        ? { x: child.cx, y: downward ? child.y - 14 : child.y + child.h + 14 }
        : "mark" in path
          ? path.mark
          : undefined;
    return {
      id: `${link.kind}-${link.from}-${link.to}`,
      d: path.d,
      d2: "d2" in path ? path.d2 : undefined,
      kind: link.kind,
      from: link.from,
      to: link.to,
      local,
      quiet: Math.hypot(dx, dy) > 640,
      mark,
    };
  });
}

function buildBands(def: TreeDef, nodes: LayoutNode[]): LayoutBand[] {
  return def.bands.map((meta) => {
    const group = nodes.filter((node) => node.band === meta.id).sort((a, b) => a.y - b.y || a.x - b.x);
    if (!group.length) throw new Error(`빈 세대: ${def.id} ${meta.id}`);
    const top = Math.min(...group.map((node) => node.y)) - 52;
    const bottom = Math.max(...group.map((node) => node.y + node.h)) + 18;
    return { ...meta, top, height: bottom - top, nodeIds: group.map((node) => node.id) };
  });
}

function assertLayout(def: TreeDef, nodes: LayoutNode[], bands: LayoutBand[]) {
  const ids = new Set<string>();
  for (const node of nodes) {
    if (ids.has(node.id)) throw new Error(`가족관계도 id 중복: ${def.id} ${node.id}`);
    ids.add(node.id);
    if (!def.bands.some((band) => band.id === node.band)) throw new Error(`없는 세대: ${def.id} ${node.id}`);
  }
  for (const link of def.links) {
    if (!ids.has(link.from) || !ids.has(link.to)) throw new Error(`가족관계도 선 오류: ${def.id} ${link.kind} ${link.from} → ${link.to}`);
  }
  const seen = new Set<string>();
  for (const link of def.links) {
    const key = `${link.kind}:${link.from}:${link.to}`;
    if (seen.has(key)) throw new Error(`중복 선: ${def.id} ${key}`);
    seen.add(key);
  }
  for (const [kind, from, to] of def.must) {
    const found = def.links.some((link) => {
      if (link.kind !== kind) return false;
      if (link.from === from && link.to === to) return true;
      return kind === "spouse" && link.from === to && link.to === from;
    });
    if (!found) throw new Error(`${def.id}에 없는 관계: ${kind} ${from} → ${to}`);
  }
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (overlapX > 2 && overlapY > 2) throw new Error(`가족관계도 칸이 겹칩니다: ${def.id} ${a.id} · ${b.id}`);
    }
  }
  for (let i = 1; i < bands.length; i += 1) {
    const gap = bands[i].top - (bands[i - 1].top + bands[i - 1].height);
    if (gap < 12) throw new Error(`세대 간격이 좁습니다: ${def.id} ${bands[i - 1].id} → ${bands[i].id} (${gap})`);
  }
}

function layoutTree(def: TreeDef): LaidTree {
  const placed = placeNodes(def);
  const bands = buildBands(def, placed.nodes);
  assertLayout(def, placed.nodes, bands);
  return {
    id: def.id,
    ko: def.ko,
    en: def.en,
    lead: def.lead,
    disputes: def.disputes,
    notes: def.notes,
    sources: def.sources,
    links: def.links,
    width: placed.width,
    height: placed.height,
    nodes: placed.nodes,
    edges: edgePaths(placed.nodes, def.links),
    bands,
    byId: new Map(placed.nodes.map((node) => [node.id, node])),
  };
}

export const TREES: LaidTree[] = DEFS.map(layoutTree);

const treeById = new Map(TREES.map((tree) => [tree.id, tree]));
const nodeOwner = new Map<string, LaidTree>();
for (const tree of TREES) {
  for (const node of tree.nodes) {
    if (nodeOwner.has(node.id)) throw new Error(`가문 사이 id 중복: ${node.id}`);
    nodeOwner.set(node.id, tree);
  }
}

const allowedSisterOrigins = new Set(ALLOWED_SISTER_ORIGINS);

for (const tree of TREES) {
  for (const node of tree.nodes) {
    for (const link of node.also ?? []) {
      let origin = "";
      try {
        origin = new URL(link.href).origin;
      } catch {
        throw new Error(`가족관계도 바깥 링크 주소가 잘못되었습니다: ${link.href}`);
      }
      if (!allowedSisterOrigins.has(origin)) throw new Error(`가족관계도 바깥 링크가 자매 사이트가 아닙니다: ${link.href}`);
    }
    if (!node.href || node.href.startsWith("http")) continue;
    if (node.href.startsWith("/rulers/")) {
      const slug = node.href.slice("/rulers/".length).split(/[?#]/)[0];
      if (!rulerBySlug(slug)) throw new Error(`가족관계도 링크에 해당하는 인물 페이지가 없습니다: ${node.href}`);
      continue;
    }
    if (node.href === "/cleopatra" || node.href.startsWith("/myth-links")) continue;
    throw new Error(`확인하지 않은 가족관계도 링크: ${node.href}`);
  }
}

export const DEFAULT_TREE_ID = "julio";

export function treeByFocus(id: string) {
  return nodeOwner.get(id);
}

export type RelationPerson = { id: string; ko: string; en: string; href?: string };

function personRef(tree: LaidTree, id: string): RelationPerson {
  const node = tree.byId.get(id);
  if (!node) throw new Error(id);
  return { id: node.id, ko: node.ko, en: node.en, href: node.href };
}

function byX(tree: LaidTree) {
  return (a: RelationPerson, b: RelationPerson) => (tree.byId.get(a.id)?.x ?? 0) - (tree.byId.get(b.id)?.x ?? 0);
}

export function relationsOf(tree: LaidTree, id: string) {
  const order = byX(tree);
  const pick = (kind: LinkKind, direction: "from" | "to") =>
    tree.links
      .filter((link) => link.kind === kind && (direction === "to" ? link.to === id : link.from === id))
      .map((link) => personRef(tree, direction === "to" ? link.from : link.to))
      .sort(order);
  const parents = pick("parent", "to");
  const adoptiveParents = pick("adoption", "to");
  const variantParents = pick("variant-parent", "to");
  const children = pick("parent", "from");
  const adopted = pick("adoption", "from");
  const variantChildren = pick("variant-parent", "from");
  const spouses = tree.links
    .filter((link) => link.kind === "spouse" && (link.from === id || link.to === id))
    .map((link) => personRef(tree, link.from === id ? link.to : link.from))
    .sort(order);
  const parentIds = new Set(parents.map((person) => person.id));
  const siblingIds = new Set<string>();
  for (const link of tree.links) {
    if (link.kind !== "parent" || !parentIds.has(link.from) || link.to === id) continue;
    siblingIds.add(link.to);
  }
  const siblings = [...siblingIds].map((siblingId) => personRef(tree, siblingId)).sort(order);
  const adoptiveParentIds = new Set(adoptiveParents.map((person) => person.id));
  const coAdoptedIds = new Set<string>();
  for (const link of tree.links) {
    if (link.kind !== "adoption" || !adoptiveParentIds.has(link.from) || link.to === id) continue;
    coAdoptedIds.add(link.to);
  }
  const coAdopted = [...coAdoptedIds].map((personId) => personRef(tree, personId)).sort(order);
  return { parents, adoptiveParents, variantParents, spouses, children, adopted, variantChildren, siblings, coAdopted };
}

function norm(value: string) {
  return value.toLowerCase().replace(/[\s·.'’\-()/_]/g, "");
}

export type SearchHit = LayoutNode & { treeId: string; treeKo: string };

export function searchNodes(query: string): SearchHit[] {
  const q = norm(query);
  if (!q) return [];
  const hits: { node: SearchHit; exact: boolean; prefix: boolean }[] = [];
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      const keys = node.keys.map(norm);
      const exact = keys.some((key) => key === q);
      const prefix = keys.some((key) => key.startsWith(q));
      const hit = exact || prefix || keys.some((key) => key.includes(q));
      if (!hit) continue;
      hits.push({ node: { ...node, treeId: tree.id, treeKo: tree.ko }, exact, prefix });
    }
  }
  return hits
    .sort((a, b) => Number(b.exact) - Number(a.exact) || Number(b.prefix) - Number(a.prefix) || a.node.ko.localeCompare(b.node.ko, "ko"))
    .map((item) => item.node);
}

export function exactNodeId(query: string) {
  const q = norm(query);
  if (!q) return null;
  const ids = new Set<string>();
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      if (node.keys.some((key) => norm(key) === q)) ids.add(node.id);
    }
  }
  if (ids.size !== 1) return null;
  return [...ids][0];
}

export function focusHref(id: string) {
  const tree = nodeOwner.get(id);
  if (!tree) return "/family-tree";
  return `/family-tree?tree=${tree.id}&focus=${id}`;
}

const RULER_FOCUS: Record<string, string> = {
  romulus: "romulus",
  augustus: "augustus",
  tiberius: "tiberius",
  claudius: "claudius",
  nero: "nero",
  vespasian: "vespasian",
  trajan: "trajan",
  hadrian: "hadrian",
  "marcus-aurelius": "marcus",
  constantine: "constantine",
};

export function rulerTreeHref(slug: string) {
  const id = RULER_FOCUS[slug];
  return id ? focusHref(id) : null;
}

export function getTree(id: string) {
  return treeById.get(id);
}
