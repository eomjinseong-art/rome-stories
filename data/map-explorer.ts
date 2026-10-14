import { focusHref } from "@/data/family-tree";

export type MapEra = "republic" | "empire" | "late";
export type MapLink = { href: string; label: string };
export type MapEvent = { era: MapEra; year: string; ko: string; en: string };
export type MapStory = { ko: string; en: string };
export type MapPin = {
  id: string;
  ko: string;
  en: string;
  lon: number;
  lat: number;
  /** label placement */
  lx?: number;
  ly?: number;
  anchor?: "start" | "middle" | "end";
  summary: { ko: string; en: string };
  events: MapEvent[];
  people: MapLink[];
  wars: MapLink[];
  films: MapLink[];
  stories: MapStory[];
  more?: MapLink[];
};
export type RouteStep = { lon: number; lat: number; place: string; year: string; ko: string; en: string };
export type MapRoute = { id: string; era: MapEra; ko: string; en: string; color: string; note?: string; steps: RouteStep[]; links: MapLink[] };

export const MAP_ERAS: { id: MapEra; ko: string; en: string; range: string }[] = [
  { id: "republic", ko: "왕정·공화정", en: "Kingdom & Republic", range: "전 753–전 27" },
  { id: "empire", ko: "제정", en: "Empire", range: "전 27–서기 284" },
  { id: "late", ko: "후기", en: "Late Empire & after", range: "284–568" },
];

const g = (slug: string, label: string): MapLink => ({ href: `/generals/${slug}`, label: `장군 · ${label}` });
const r = (slug: string, label: string): MapLink => ({ href: `/rulers/${slug}`, label: `통치자 · ${label}` });
const f = (id: string, label: string): MapLink => ({ href: focusHref(id), label: `가계도 · ${label}` });
const w = (slug: string, label: string): MapLink => ({ href: `/wars/${slug}`, label });
const m = (slug: string, label: string): MapLink => ({ href: `/movies#${slug}`, label });

export const MAP_PINS: MapPin[] = [
  {
    id: "rome", ko: "로마", en: "Rome", lon: 12.48, lat: 41.9, lx: -12, ly: 4, anchor: "end",
    summary: { ko: "티베르강가의 도시국가에서 제국의 수도가 된 곳입니다.", en: "From a Tiber town to the capital of an empire." },
    events: [
      { era: "republic", year: "전 509", ko: "마지막 왕 타르퀴니우스를 쫓아내고 공화정이 시작됐다고 전합니다.", en: "Traditional start of the Republic." },
      { era: "republic", year: "전 390(또는 387)", ko: "알리아 강에서 진 뒤 갈리아인에게 도시를 약탈당합니다.", en: "Sack of Rome by the Gauls." },
      { era: "republic", year: "전 44", ko: "3월 15일 카이사르가 원로원 회의 중 암살됩니다.", en: "Caesar assassinated on the Ides of March." },
      { era: "empire", year: "서기 64", ko: "네로 때 대화재가 도시를 휩씁니다.", en: "The Great Fire under Nero." },
      { era: "empire", year: "서기 80", ko: "티투스가 콜로세움(플라비우스 원형경기장)을 봉헌합니다.", en: "Titus inaugurates the Colosseum." },
      { era: "late", year: "410", ko: "알라리크의 서고트족이 로마를 약탈합니다(8월 24일).", en: "Alaric's Visigoths sack Rome." },
      { era: "late", year: "455", ko: "반달족이 다시 로마를 약탈합니다.", en: "The Vandals sack Rome." },
      { era: "late", year: "536–538", ko: "벨리사리우스가 로마에 들어가고, 고트 왕 비티게스의 포위를 1년 넘게 버팁니다.", en: "Belisarius holds Rome against the Gothic siege." },
    ],
    people: [r("romulus", "로물루스"), r("tarquinius-superbus", "타르퀴니우스"), g("caesar", "카이사르"), r("nero", "네로"), g("vespasian-titus", "베스파시아누스·티투스"), g("belisarius", "벨리사리우스"), f("caesar", "카이사르")],
    wars: [w("veii-and-gallic-sack", "베이이와 갈리아의 로마 약탈"), w("stilicho-goths", "스틸리코와 고트족"), w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [m("gladiator", "글래디에이터"), m("quo-vadis", "쿠오 바디스"), m("julius-caesar-1953", "줄리어스 시저(1953)"), m("fall-of-the-roman-empire", "로마제국의 멸망")],
    more: [{ href: "/city", label: "로마 시내 탐험: 건물 27곳" }, { href: "/city#colosseum", label: "콜로세움" }, { href: "/city#pompey", label: "카이사르가 쓰러진 곳" }],
    stories: [
      { ko: "기원전 753년 4월 21일 로물루스가 도시를 세웠다는 날짜는 후대의 계산입니다.", en: "The 753 BC founding date is a later reckoning." },
      { ko: "갈리아인이 밤에 카피톨리움을 오를 때 유노 신전의 거위가 울어 막았다는 이야기(리비우스).", en: "Juno's sacred geese saved the Capitol (Livy)." },
      { ko: "네로가 불타는 로마를 보며 노래했다는 이야기는 수에토니우스·디오의 소문이고, 타키투스는 소문이라고 적습니다.", en: "Nero 'fiddling' is a rumour even in the sources." },
    ],
  },
  {
    id: "ostia", ko: "오스티아", en: "Ostia", lon: 12.29, lat: 41.75, lx: -10, ly: 14, anchor: "end",
    summary: { ko: "티베르강 하구의 항구 도시, 로마의 곡물 관문입니다.", en: "Rome's harbour and grain gateway at the Tiber mouth." },
    events: [
      { era: "republic", year: "전 4세기", ko: "고고학으로 확인되는 가장 이른 요새(카스트룸)가 세워집니다.", en: "Earliest archaeological fort (castrum)." },
      { era: "empire", year: "서기 42–64", ko: "클라우디우스가 북쪽에 새 항구 포르투스를 짓기 시작하고 네로 때 완공됩니다.", en: "Claudius begins the new harbour, Portus." },
      { era: "empire", year: "서기 2세기 초", ko: "트라야누스가 육각형 내항을 더합니다.", en: "Trajan adds the hexagonal basin." },
    ],
    people: [r("ancus-marcius", "안쿠스 마르키우스"), r("claudius", "클라우디우스"), r("trajan", "트라야누스"), f("claudius", "클라우디우스")],
    wars: [],
    films: [],
    stories: [{ ko: "왕 안쿠스 마르키우스가 오스티아를 세웠다는 전승은 고고학 연대(기원전 4세기)보다 훨씬 이릅니다.", en: "The tradition that King Ancus founded Ostia predates the archaeology." }],
  },
  {
    id: "veii", ko: "베이이", en: "Veii", lon: 12.4, lat: 42.05, lx: 0, ly: -12, anchor: "middle",
    summary: { ko: "로마 바로 북쪽의 에트루리아 도시, 로마 최초의 큰 정복입니다.", en: "Etruscan neighbour; Rome's first great conquest." },
    events: [{ era: "republic", year: "전 396", ko: "카밀루스가 긴 포위 끝에 베이이를 함락합니다.", en: "Camillus captures Veii." }],
    people: [g("camillus", "카밀루스")],
    wars: [w("veii-and-gallic-sack", "베이이와 갈리아의 로마 약탈")],
    films: [],
    stories: [{ ko: "포위가 10년 걸렸다는 숫자는 트로이 전쟁을 닮은 전승입니다. 땅굴로 신전 아래까지 들어갔다는 이야기도 리비우스의 전승입니다.", en: "The 'ten-year siege' and the tunnel echo Troy." }],
  },
  {
    id: "capri", ko: "카프리", en: "Capri", lon: 14.24, lat: 40.55, lx: 4, ly: 16, anchor: "middle",
    summary: { ko: "티베리우스 황제가 말년을 보낸 은거지입니다. 유배 섬이 아닙니다.", en: "Tiberius's retreat in his last decade — not an exile island." },
    events: [
      { era: "republic", year: "전 29", ko: "옥타비아누스가 이스키아를 나폴리에 주고 카프리를 받습니다(수에토니우스).", en: "Octavian swaps Ischia for Capri." },
      { era: "empire", year: "서기 26/27–37", ko: "티베리우스가 로마를 떠나 카프리에 머물며 편지로 다스립니다. 빌라 요비스 유적이 남아 있습니다.", en: "Tiberius rules by letter from Capri (Villa Jovis)." },
      { era: "empire", year: "서기 31", ko: "카프리에서 보낸 편지로 근위대장 세야누스가 실각합니다.", en: "A letter from Capri brings down Sejanus." },
    ],
    people: [r("tiberius", "티베리우스"), r("augustus", "아우구스투스"), f("tiberius", "티베리우스")],
    wars: [],
    films: [m("i-claudius", "나는 클라우디우스")],
    stories: [
      { ko: "수에토니우스가 적은 카프리의 방탕과 잔혹 이야기는 적대적인 소문이 섞였다고 봅니다.", en: "Suetonius's lurid Capri tales are hostile gossip." },
      { ko: "‘티베리우스의 절벽(살토 디 티베리오)’에서 사람을 던졌다는 이야기도 확인되지 않습니다.", en: "The 'Tiberius's Leap' story is unverified." },
    ],
  },
  {
    id: "pandateria", ko: "판다테리아(벤토테네)", en: "Pandateria / Ventotene", lon: 13.43, lat: 40.8, lx: -10, ly: 4, anchor: "end",
    summary: { ko: "황실 여성들이 유배된 작은 섬입니다.", en: "The tiny island of imperial women's exile." },
    events: [
      { era: "empire", year: "전 2", ko: "아우구스투스가 딸 대 율리아를 이곳으로 유배합니다. 몇 해 뒤 레기움으로 옮겨집니다.", en: "Augustus exiles his daughter Julia here." },
      { era: "empire", year: "서기 29–33", ko: "게르마니쿠스의 아내 대 아그리피나가 티베리우스에게 유배되어 이곳에서 굶어 죽습니다.", en: "Agrippina the Elder exiled; dies here in 33." },
      { era: "empire", year: "서기 62", ko: "네로의 아내 클라우디아 옥타비아가 이혼·유배된 뒤 이곳에서 살해됩니다.", en: "Nero's wife Octavia exiled and killed here." },
    ],
    people: [r("augustus", "아우구스투스"), r("tiberius", "티베리우스"), r("nero", "네로"), f("julia-elder", "대 율리아"), f("agrippina-elder", "대 아그리피나"), g("germanicus", "게르마니쿠스")],
    wars: [],
    films: [m("i-claudius", "나는 클라우디우스")],
    stories: [{ ko: "대 아그리피나가 스스로 굶었는지, 굶김을 당했는지는 고대 기록에서도 갈립니다.", en: "Whether Agrippina starved herself or was starved is disputed." }],
  },
  {
    id: "misenum", ko: "나폴리·미세눔", en: "Naples / Misenum", lon: 14.08, lat: 40.78, lx: -8, ly: -8, anchor: "end",
    summary: { ko: "그리스 도시 네아폴리스와, 제국 서쪽 함대의 기지 미세눔입니다.", en: "Greek Neapolis and the western fleet base." },
    events: [
      { era: "republic", year: "전 39", ko: "옥타비아누스·안토니우스가 섹스투스 폼페이우스와 미세눔 협정을 맺습니다.", en: "Pact of Misenum with Sextus Pompey." },
      { era: "empire", year: "아우구스투스 때", ko: "아그리파가 정비한 함대가 미세눔에 자리잡아 서지중해 함대 본부가 됩니다.", en: "Misenum becomes the main fleet base." },
      { era: "empire", year: "서기 37", ko: "티베리우스가 미세눔의 별장에서 죽습니다.", en: "Tiberius dies at Misenum." },
      { era: "empire", year: "서기 79", ko: "함대 사령관 대 플리니우스가 구조에 나섰다가 스타비아이에서 죽습니다.", en: "Admiral Pliny the Elder dies in the eruption." },
      { era: "late", year: "476", ko: "폐위된 로물루스 아우구스툴루스가 나폴리 근처 루쿨루스 별장으로 보내집니다.", en: "Romulus Augustulus retired near Naples." },
      { era: "late", year: "536", ko: "벨리사리우스가 수도관으로 병사를 들여보내 나폴리를 함락합니다.", en: "Belisarius takes Naples through an aqueduct." },
    ],
    people: [g("agrippa", "아그리파"), r("tiberius", "티베리우스"), g("belisarius", "벨리사리우스"), f("agrippa", "아그리파")],
    wars: [w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    stories: [{ ko: "숨이 돌아온 티베리우스를 근위대장 마크로가 질식시켰다는 이야기는 타키투스가 전하는 소문입니다.", en: "That Macro smothered Tiberius is a rumour in Tacitus." }],
  },
  {
    id: "pompeii", ko: "폼페이·베수비오", en: "Pompeii / Vesuvius", lon: 14.49, lat: 40.75, lx: 10, ly: 4, anchor: "start",
    summary: { ko: "서기 79년 화산재에 묻힌 도시입니다.", en: "The town buried by Vesuvius in AD 79." },
    events: [
      { era: "republic", year: "전 89–80", ko: "동맹시 전쟁 때 술라에게 포위되고, 뒤에 로마 식민시가 됩니다.", en: "Besieged by Sulla; becomes a Roman colony." },
      { era: "republic", year: "전 73", ko: "스파르타쿠스 무리가 베수비오산에 진을 칩니다.", en: "Spartacus camps on Vesuvius." },
      { era: "empire", year: "서기 62/63", ko: "큰 지진이 도시를 흔듭니다.", en: "A major earthquake." },
      { era: "empire", year: "서기 79", ko: "티투스 황제 때 베수비오가 분화해 폼페이와 헤르쿨라네움이 묻힙니다.", en: "Eruption buries Pompeii and Herculaneum." },
    ],
    people: [g("vespasian-titus", "베스파시아누스·티투스"), g("sulla", "술라")],
    wars: [w("social-and-sullan-wars", "동맹시 전쟁과 술라의 내전")],
    films: [m("pompeii-2014", "폼페이: 최후의 날")],
    stories: [{ ko: "분화일은 소 플리니우스 사본대로 8월 24일로 알려졌지만, 2018년 발견된 낙서 등으로 10월설이 힘을 얻었습니다.", en: "August 24 vs. an October date is still debated." }],
  },
  {
    id: "capua", ko: "카푸아", en: "Capua", lon: 14.25, lat: 41.08, lx: 10, ly: -6, anchor: "start",
    summary: { ko: "캄파니아의 부유한 도시, 검투사 양성소가 있던 곳입니다.", en: "Rich Campanian city with gladiator schools." },
    events: [
      { era: "republic", year: "전 312", ko: "아피아 가도가 로마에서 카푸아까지 놓입니다.", en: "The Via Appia reaches Capua." },
      { era: "republic", year: "전 216–211", ko: "칸나이 뒤 한니발 편에 섰다가 로마에 다시 함락됩니다.", en: "Defects to Hannibal; retaken in 211." },
      { era: "republic", year: "전 73", ko: "스파르타쿠스와 검투사 70여 명이 양성소를 탈출합니다.", en: "Spartacus breaks out of a gladiator school." },
    ],
    people: [g("fabius-maximus", "파비우스"), g("crassus", "크라수스")],
    wars: [w("second-punic-war", "2차 포에니 전쟁")],
    films: [m("spartacus", "스파르타쿠스")],
    stories: [{ ko: "한니발 군대가 카푸아의 사치로 물렀다는 말은 리비우스의 교훈담에 가깝습니다.", en: "'Capuan luxury softened Hannibal' is Livy's moralising." }],
  },
  {
    id: "cannae", ko: "칸나이", en: "Cannae", lon: 16.13, lat: 41.3, lx: 10, ly: 4, anchor: "start",
    summary: { ko: "한니발이 로마군을 포위해 섬멸한 곳입니다.", en: "Hannibal's double envelopment." },
    events: [{ era: "republic", year: "전 216", ko: "8월 2일 한니발이 더 큰 로마군을 양쪽에서 감싸 무너뜨립니다. 집정관 파울루스가 전사합니다.", en: "Hannibal encircles a larger Roman army; consul Paullus killed." }],
    people: [g("scipio-africanus", "스키피오"), g("fabius-maximus", "파비우스")],
    wars: [w("second-punic-war", "2차 포에니 전쟁")],
    films: [m("hannibal-2006", "한니발"), m("scipione-1937", "스키피오네 아프리카노")],
    stories: [
      { ko: "로마 쪽 전사자는 5만~7만 명으로 전해지지만 기록마다 숫자가 다릅니다.", en: "Roman dead 50,000–70,000; figures vary." },
      { ko: "한니발이 죽은 로마 기사들의 금반지를 한 말이나 카르타고로 보냈다는 이야기(리비우스).", en: "The bushel of gold rings sent to Carthage (Livy)." },
    ],
  },
  {
    id: "trasimene", ko: "트라시메누스 호수", en: "Lake Trasimene", lon: 12.1, lat: 43.18, lx: -10, ly: 4, anchor: "end",
    summary: { ko: "호숫가 매복으로 로마군이 무너진 곳입니다.", en: "The lakeside ambush." },
    events: [{ era: "republic", year: "전 217", ko: "6월 한니발이 호수와 언덕 사이 좁은 길에서 매복해 집정관 플라미니우스와 군대를 무찌릅니다.", en: "Hannibal ambushes consul Flaminius by the lake." }],
    people: [g("fabius-maximus", "파비우스(패전 뒤 독재관)")],
    wars: [w("second-punic-war", "2차 포에니 전쟁")],
    films: [m("hannibal-2006", "한니발")],
    stories: [{ ko: "전투가 너무 치열해 그 시각의 지진을 아무도 느끼지 못했다는 이야기(리비우스).", en: "No one noticed an earthquake mid-battle (Livy)." }],
  },
  {
    id: "trebia", ko: "트레비아 강", en: "River Trebia", lon: 9.6, lat: 45.0, lx: 0, ly: 18, anchor: "middle",
    summary: { ko: "알프스를 넘은 한니발의 첫 큰 승리입니다.", en: "Hannibal's first great victory in Italy." },
    events: [{ era: "republic", year: "전 218", ko: "12월, 얼음물을 건너온 셈프로니우스의 군대를 매복으로 무찌릅니다.", en: "December: Sempronius lured across the icy river and beaten." }],
    people: [g("scipio-africanus", "스키피오")],
    wars: [w("second-punic-war", "2차 포에니 전쟁")],
    films: [m("hannibal-2006", "한니발")],
    stories: [],
  },
  {
    id: "alps", ko: "알프스 고개", en: "Alpine passes", lon: 7.0, lat: 45.2, lx: 0, ly: -12, anchor: "middle",
    summary: { ko: "이탈리아로 들어오는 북쪽 문입니다.", en: "Italy's northern gateway." },
    events: [
      { era: "republic", year: "전 218", ko: "한니발이 늦가을 코끼리와 함께 알프스를 넘어 포강 유역으로 내려옵니다.", en: "Hannibal crosses with his elephants." },
      { era: "late", year: "401", ko: "알라리크가 동쪽 율리아 알프스를 넘어 이탈리아로 들어옵니다.", en: "Alaric enters Italy over the Julian Alps." },
      { era: "late", year: "568", ko: "랑고바르드족이 동쪽 고개로 내려와 북이탈리아를 차지하기 시작합니다.", en: "The Lombards invade." },
    ],
    people: [],
    wars: [w("second-punic-war", "2차 포에니 전쟁"), w("stilicho-goths", "스틸리코와 고트족")],
    films: [m("hannibal-2006", "한니발")],
    stories: [
      { ko: "한니발이 넘은 고개(몽 스니, 클라피에, 트라베르세트 등)는 아직 정해지지 않았습니다.", en: "Which pass Hannibal used is still debated." },
      { ko: "바위를 불로 달군 뒤 식초를 부어 깨뜨렸다는 이야기(리비우스).", en: "Splitting rocks with fire and vinegar (Livy)." },
    ],
  },
  {
    id: "rubicon", ko: "루비콘 강", en: "Rubicon", lon: 12.4, lat: 44.1, lx: -10, ly: 4, anchor: "end",
    summary: { ko: "갈리아 속주와 이탈리아의 경계였던 작은 강입니다.", en: "The little border river of Italy." },
    events: [{ era: "republic", year: "전 49", ko: "1월, 카이사르가 군대를 이끌고 건너며 내전이 시작됩니다.", en: "January: Caesar crosses with an army; civil war begins." }],
    people: [g("caesar", "카이사르"), g("pompey", "폼페이우스"), f("caesar", "카이사르")],
    wars: [w("caesar-civil-war", "카이사르의 내전")],
    films: [m("rome-hbo", "롬(HBO)"), m("julius-caesar-1953", "줄리어스 시저(1953)")],
    stories: [
      { ko: "‘주사위는 던져졌다’는 수에토니우스의 라틴어 버전이고, 플루타르코스는 그리스어 격언으로 적습니다.", en: "'Alea iacta est' — wording differs by source." },
      { ko: "오늘날 어느 강이 루비콘인지는 1930년대에 피우미치노 강으로 정했지만 논란이 남았습니다.", en: "Which modern stream is the Rubicon is disputed." },
    ],
  },
  {
    id: "ravenna", ko: "라벤나", en: "Ravenna", lon: 12.2, lat: 44.42, lx: -10, ly: -4, anchor: "end",
    summary: { ko: "늪으로 둘러싸인 항구, 서로마 마지막 수도입니다.", en: "Marsh-guarded port; last western capital." },
    events: [
      { era: "republic", year: "전 49", ko: "카이사르가 루비콘을 건너기 직전 라벤나에 머뭅니다.", en: "Caesar waits here before the Rubicon." },
      { era: "empire", year: "아우구스투스 때", ko: "아드리아해 함대 기지(클라시스)가 세워집니다.", en: "Adriatic fleet base founded." },
      { era: "late", year: "402", ko: "호노리우스가 궁정을 밀라노에서 라벤나로 옮깁니다.", en: "Honorius moves the court here." },
      { era: "late", year: "476", ko: "오도아케르가 라벤나에서 로물루스 아우구스툴루스를 폐위합니다.", en: "Odoacer deposes the last western emperor." },
      { era: "late", year: "540", ko: "벨리사리우스가 동고트의 라벤나에 들어갑니다.", en: "Belisarius enters Ravenna." },
    ],
    people: [g("caesar", "카이사르"), g("stilicho", "스틸리코"), g("belisarius", "벨리사리우스")],
    wars: [w("stilicho-goths", "스틸리코와 고트족"), w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [m("last-legion", "라스트 레기온(허구)")],
    stories: [{ ko: "‘로마가 망했다’는 소식에 호노리우스가 같은 이름의 닭을 걱정했다는 일화(프로코피우스).", en: "Honorius and his chicken named 'Roma' (Procopius)." }],
  },
  {
    id: "milan", ko: "밀라노(메디올라눔)", en: "Milan (Mediolanum)", lon: 9.19, lat: 45.46, lx: 0, ly: -12, anchor: "middle",
    summary: { ko: "후기 제국의 서쪽 황제 거처입니다.", en: "Imperial residence of the late empire." },
    events: [
      { era: "republic", year: "전 222", ko: "로마가 인수브레스족의 중심지 메디올라눔을 점령합니다.", en: "Rome takes the Insubrian centre." },
      { era: "late", year: "286 무렵", ko: "막시미아누스가 서쪽 황제의 거처로 삼습니다.", en: "Maximian makes it his seat." },
      { era: "late", year: "313", ko: "콘스탄티누스와 리키니우스가 밀라노에서 그리스도교 관용에 합의합니다(밀라노 칙령).", en: "The 'Edict of Milan'." },
    ],
    people: [r("diocletian", "디오클레티아누스"), r("constantine", "콘스탄티누스"), f("constantine", "콘스탄티누스")],
    wars: [],
    films: [],
    stories: [{ ko: "‘밀라노 칙령’은 하나의 칙령 문서가 아니라 리키니우스가 낸 서신으로 남은 합의라는 견해가 많습니다.", en: "The 'Edict' survives as Licinius's letter, not a single edict." }],
  },
  {
    id: "syracuse", ko: "시칠리아·시라쿠사", en: "Sicily / Syracuse", lon: 15.29, lat: 37.07, lx: 10, ly: 4, anchor: "start",
    summary: { ko: "로마의 첫 해외 속주 시칠리아의 그리스 대도시입니다.", en: "Greek metropolis of Rome's first province." },
    events: [
      { era: "republic", year: "전 264–241", ko: "1차 포에니 전쟁이 시칠리아에서 벌어지고, 섬은 로마의 첫 속주가 됩니다.", en: "First Punic War; Sicily becomes the first province." },
      { era: "republic", year: "전 213–212", ko: "마르켈루스가 시라쿠사를 포위해 함락하고, 아르키메데스가 죽습니다.", en: "Marcellus takes Syracuse; Archimedes dies." },
      { era: "late", year: "535", ko: "벨리사리우스가 시칠리아를 먼저 되찾습니다.", en: "Belisarius retakes Sicily." },
    ],
    people: [g("belisarius", "벨리사리우스")],
    wars: [w("first-punic-war", "1차 포에니 전쟁"), w("second-punic-war", "2차 포에니 전쟁"), w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    stories: [
      { ko: "아르키메데스가 거울로 로마 배를 불태웠다는 이야기는 후대 기록입니다.", en: "The burning mirrors are a later legend." },
      { ko: "‘내 원을 밟지 마라’는 마지막 말도 전승입니다.", en: "'Do not disturb my circles' is tradition." },
    ],
  },
  {
    id: "tarentum", ko: "타렌툼(타란토)", en: "Tarentum", lon: 17.24, lat: 40.47, lx: 0, ly: -12, anchor: "middle",
    summary: { ko: "남이탈리아 최대의 그리스 도시입니다.", en: "The great Greek city of the south." },
    events: [
      { era: "republic", year: "전 280–272", ko: "타렌툼이 에페이로스 왕 피로스를 불러 로마와 싸우지만 결국 항복합니다.", en: "Tarentum calls in Pyrrhus; surrenders in 272." },
      { era: "republic", year: "전 212–209", ko: "한니발이 도시를 차지하고, 파비우스가 되찾습니다.", en: "Hannibal takes it; Fabius retakes it." },
      { era: "republic", year: "전 37", ko: "옥타비아누스와 안토니우스가 타렌툼 협정으로 삼두정치를 연장합니다.", en: "Treaty of Tarentum renews the Triumvirate." },
    ],
    people: [g("fabius-maximus", "파비우스"), g("mark-antony", "안토니우스"), r("augustus", "아우구스투스")],
    wars: [w("pyrrhic-war", "피로스 전쟁"), w("second-punic-war", "2차 포에니 전쟁")],
    films: [],
    stories: [{ ko: "타렌툼 사람들이 로마 사절의 토가를 더럽혀 전쟁이 났다는 이야기(디오니시오스·디오).", en: "The soiled toga of the Roman envoy." }],
  },
  {
    id: "brundisium", ko: "브룬디시움(브린디시)", en: "Brundisium", lon: 17.94, lat: 40.63, lx: 0, ly: -12, anchor: "middle",
    summary: { ko: "아피아 가도의 끝, 그리스로 건너가는 항구입니다.", en: "End of the Via Appia, port for Greece." },
    events: [
      { era: "republic", year: "전 49", ko: "3월 폼페이우스가 카이사르를 피해 이곳에서 그리스로 건너갑니다.", en: "Pompey escapes Caesar by sea." },
      { era: "republic", year: "전 40", ko: "브룬디시움 협정, 안토니우스가 옥타비아와 결혼합니다.", en: "Pact of Brundisium; Antony weds Octavia." },
      { era: "republic", year: "전 19", ko: "시인 베르길리우스가 그리스에서 돌아와 이곳에서 죽습니다.", en: "Virgil dies here." },
    ],
    people: [g("pompey", "폼페이우스"), g("caesar", "카이사르"), g("mark-antony", "안토니우스"), f("octavia", "옥타비아"), f("antony", "안토니우스")],
    wars: [w("caesar-civil-war", "카이사르의 내전")],
    films: [],
    stories: [],
  },
  {
    id: "actium", ko: "악티움(그리스)", en: "Actium (Greece)", lon: 20.74, lat: 38.95, lx: 0, ly: 18, anchor: "middle",
    summary: { ko: "이탈리아 밖, 그리스 서해안의 해전 장소입니다.", en: "Outside Italy: the sea battle off western Greece." },
    events: [{ era: "republic", year: "전 31", ko: "9월 2일 아그리파가 이끈 옥타비아누스 함대가 안토니우스·클레오파트라를 이깁니다.", en: "Agrippa's fleet defeats Antony and Cleopatra." }],
    people: [g("agrippa", "아그리파"), g("mark-antony", "안토니우스"), r("augustus", "아우구스투스"), f("cleopatra", "클레오파트라")],
    wars: [w("actium", "악티움 해전")],
    films: [m("cleopatra-1963", "클레오파트라(1963)"), m("rome-hbo", "롬(HBO)")],
    stories: [{ ko: "클레오파트라가 먼저 달아나고 안토니우스가 따라갔다는 장면은 승자 쪽 기록이고, 미리 계획한 탈출이라는 해석도 있습니다.", en: "Cleopatra's 'flight' may have been a planned breakout." }],
  },
  {
    id: "pollentia", ko: "폴렌티아", en: "Pollentia", lon: 7.9, lat: 44.68, lx: 0, ly: 18, anchor: "middle",
    summary: { ko: "스틸리코가 알라리크를 막은 곳입니다.", en: "Where Stilicho checked Alaric." },
    events: [{ era: "late", year: "402", ko: "부활절 무렵 스틸리코가 알라리크의 고트군을 쳐서 물러나게 합니다.", en: "Stilicho beats Alaric around Easter." }],
    people: [g("stilicho", "스틸리코")],
    wars: [w("stilicho-goths", "스틸리코와 고트족")],
    films: [],
    stories: [],
  },
  {
    id: "vercellae", ko: "베르켈라이", en: "Vercellae", lon: 8.42, lat: 45.32, lx: -8, ly: -8, anchor: "end",
    summary: { ko: "마리우스가 킴브리족을 무찌른 북이탈리아의 평원입니다.", en: "Marius destroys the Cimbri." },
    events: [{ era: "republic", year: "전 101", ko: "마리우스와 카툴루스가 킴브리족을 섬멸합니다.", en: "Marius and Catulus annihilate the Cimbri." }],
    people: [g("marius", "마리우스"), g("sulla", "술라")],
    wars: [w("cimbrian-war", "킴브리 전쟁")],
    films: [],
    stories: [{ ko: "전장 ‘라우디우스 평원’이 정확히 어디인지는 확실하지 않습니다.", en: "The exact site (Raudine Plain) is uncertain." }],
  },
  {
    id: "corfinium", ko: "코르피니움", en: "Corfinium", lon: 13.84, lat: 42.12, lx: 10, ly: 4, anchor: "start",
    summary: { ko: "동맹시들이 ‘이탈리아’라고 이름 붙인 반란 수도입니다.", en: "The rebels' capital, renamed 'Italia'." },
    events: [
      { era: "republic", year: "전 91–90", ko: "동맹시 전쟁 때 반란 동맹의 수도가 되어 ‘이탈리아’로 불립니다.", en: "Capital of the Italian allies, called Italia." },
      { era: "republic", year: "전 49", ko: "카이사르가 포위해 항복을 받고 적장 도미티우스를 풀어 줍니다.", en: "Caesar's clemency at Corfinium." },
    ],
    people: [g("marius", "마리우스"), g("sulla", "술라"), g("caesar", "카이사르")],
    wars: [w("social-and-sullan-wars", "동맹시 전쟁과 술라의 내전"), w("caesar-civil-war", "카이사르의 내전")],
    films: [],
    stories: [],
  },
];

export const MAP_ROUTES: MapRoute[] = [
  {
    id: "hannibal", era: "republic", ko: "한니발의 이탈리아 원정", en: "Hannibal's march", color: "#a34732",
    links: [w("second-punic-war", "2차 포에니 전쟁"), g("scipio-africanus", "스키피오"), g("fabius-maximus", "파비우스")],
    steps: [
      { lon: 6.1, lat: 44.9, place: "론강 너머", year: "전 218 가을", ko: "히스파니아에서 피레네와 론강을 건너 알프스 앞에 섭니다.", en: "From Spain across the Pyrenees and Rhône." },
      { lon: 7.0, lat: 45.2, place: "알프스", year: "전 218", ko: "눈 내린 고개를 넘어 포강 유역으로 내려옵니다. 병력을 많이 잃습니다.", en: "Over the Alps with heavy losses." },
      { lon: 8.9, lat: 45.2, place: "티키누스", year: "전 218", ko: "기병전에서 이기고, 집정관 스키피오(아버지)가 다칩니다.", en: "Cavalry win at the Ticinus." },
      { lon: 9.6, lat: 45.0, place: "트레비아", year: "전 218 12월", ko: "얼음물을 건너온 로마군을 매복으로 무찌릅니다.", en: "Ambush victory at the Trebia." },
      { lon: 11.0, lat: 43.8, place: "아르노 늪지", year: "전 217 봄", ko: "아펜니노를 넘어 늪을 지나고, 한니발은 한쪽 눈을 잃습니다.", en: "Through the Arno marshes; Hannibal loses an eye." },
      { lon: 12.1, lat: 43.18, place: "트라시메누스", year: "전 217 6월", ko: "호숫가 매복으로 플라미니우스의 군대를 무찌릅니다.", en: "Ambush at Lake Trasimene." },
      { lon: 16.13, lat: 41.3, place: "칸나이", year: "전 216 8월", ko: "양쪽에서 감싸는 포위로 로마군을 섬멸합니다.", en: "Encirclement at Cannae." },
    ],
  },
  {
    id: "caesar", era: "republic", ko: "카이사르, 루비콘에서 로마로", en: "Caesar: Rubicon to Rome", color: "#6d4c8a",
    links: [w("caesar-civil-war", "카이사르의 내전"), g("caesar", "카이사르"), g("pompey", "폼페이우스")],
    steps: [
      { lon: 12.2, lat: 44.42, place: "라벤나", year: "전 49 1월", ko: "갈리아 총독 카이사르가 한 개 군단과 함께 기다립니다.", en: "Caesar waits at Ravenna with one legion." },
      { lon: 12.4, lat: 44.1, place: "루비콘", year: "전 49 1월", ko: "군대를 이끌고 경계를 건넙니다. 법을 어긴 내전의 시작입니다.", en: "Crosses the border river: civil war." },
      { lon: 12.57, lat: 44.06, place: "아리미눔", year: "전 49 1월", ko: "리미니를 차지하고 아드리아해 해안을 따라 내려갑니다.", en: "Takes Ariminum." },
      { lon: 13.84, lat: 42.12, place: "코르피니움", year: "전 49 2월", ko: "항복한 도미티우스를 풀어 주는 ‘관용’을 보입니다.", en: "Clemency at Corfinium." },
      { lon: 17.94, lat: 40.63, place: "브룬디시움", year: "전 49 3월", ko: "폼페이우스가 바다로 그리스에 빠져나갑니다.", en: "Pompey escapes to Greece." },
      { lon: 12.48, lat: 41.9, place: "로마", year: "전 49 4월", ko: "로마에 들어가 국고를 손에 넣습니다.", en: "Enters Rome and seizes the treasury." },
    ],
  },
  {
    id: "spartacus", era: "republic", ko: "스파르타쿠스의 반란", en: "Spartacus's revolt", color: "#2f4a3c",
    links: [g("crassus", "크라수스"), g("pompey", "폼페이우스"), m("spartacus", "영화 스파르타쿠스")],
    steps: [
      { lon: 14.25, lat: 41.08, place: "카푸아", year: "전 73", ko: "검투사 70여 명이 양성소를 탈출합니다.", en: "Gladiators break out at Capua." },
      { lon: 14.43, lat: 40.82, place: "베수비오", year: "전 73", ko: "산 위 진지를 포위한 로마군을 뒤쪽 절벽으로 내려가 기습합니다.", en: "Surprise from Vesuvius." },
      { lon: 10.93, lat: 44.65, place: "무티나", year: "전 72", ko: "북쪽까지 올라가 총독 카시우스를 이기지만 알프스를 넘지 않고 돌아섭니다.", en: "North to Mutina, then turns back." },
      { lon: 16.0, lat: 38.7, place: "브루티움", year: "전 72–71 겨울", ko: "시칠리아로 건너려다 실패하고, 크라수스의 방어선에 갇힙니다.", en: "Trapped by Crassus's line in Bruttium." },
      { lon: 15.2, lat: 40.55, place: "실라루스 강", year: "전 71", ko: "마지막 전투에서 스파르타쿠스가 전사합니다.", en: "Spartacus killed in the final battle." },
      { lon: 13.3, lat: 41.45, place: "아피아 가도", year: "전 71", ko: "포로 약 6천 명이 카푸아–로마 길가에 십자가형을 당합니다.", en: "About 6,000 crucified along the Via Appia." },
    ],
  },
  {
    id: "social", era: "republic", ko: "동맹시 전쟁", en: "The Social War", color: "#8a5a24",
    note: "한 군대의 행군이 아니라, 전쟁의 주요 무대를 시간 순으로 잇습니다. A sequence of theatres, not one army's march.",
    links: [w("social-and-sullan-wars", "동맹시 전쟁과 술라의 내전"), g("marius", "마리우스"), g("sulla", "술라")],
    steps: [
      { lon: 13.58, lat: 42.85, place: "아스쿨룸", year: "전 91", ko: "시민권을 거부당한 동맹시가 로마인을 죽이며 봉기합니다.", en: "Revolt flares at Asculum." },
      { lon: 13.84, lat: 42.12, place: "코르피니움", year: "전 91–90", ko: "반란 동맹이 수도로 삼고 ‘이탈리아’라 부릅니다.", en: "Corfinium becomes 'Italia'." },
      { lon: 13.55, lat: 41.98, place: "마르시 땅", year: "전 90", ko: "마리우스가 북쪽 전선에서 마르시족과 싸웁니다.", en: "Marius fights the Marsi." },
      { lon: 12.48, lat: 41.9, place: "로마", year: "전 90", ko: "율리우스 법으로 충성한 동맹에게 시민권을 줍니다.", en: "Lex Julia grants citizenship." },
      { lon: 13.58, lat: 42.85, place: "아스쿨룸", year: "전 89", ko: "폼페이우스 스트라보(폼페이우스의 아버지)가 아스쿨룸을 함락합니다.", en: "Pompeius Strabo takes Asculum." },
      { lon: 14.49, lat: 40.75, place: "폼페이·놀라", year: "전 89", ko: "술라가 캄파니아에서 반란 도시들을 포위합니다.", en: "Sulla besieges Campanian rebels." },
    ],
  },
  {
    id: "alaric", era: "late", ko: "알라리크와 로마 약탈(410)", en: "Alaric and the sack of 410", color: "#1f3b57",
    links: [w("stilicho-goths", "스틸리코와 고트족"), g("stilicho", "스틸리코")],
    steps: [
      { lon: 13.6, lat: 46.0, place: "율리아 알프스", year: "401", ko: "서고트 왕 알라리크가 동쪽에서 이탈리아로 들어옵니다.", en: "Alaric enters Italy from the east." },
      { lon: 7.9, lat: 44.68, place: "폴렌티아", year: "402", ko: "스틸리코에게 막힙니다.", en: "Checked by Stilicho at Pollentia." },
      { lon: 11.0, lat: 45.44, place: "베로나", year: "402/403", ko: "다시 지고 이탈리아 밖으로 물러납니다.", en: "Beaten again at Verona; withdraws." },
      { lon: 12.48, lat: 41.9, place: "로마 포위", year: "408–409", ko: "스틸리코가 처형된 뒤 돌아와 로마를 포위하고 몸값을 받습니다.", en: "After Stilicho's execution, besieges Rome." },
      { lon: 12.2, lat: 44.42, place: "라벤나", year: "409–410", ko: "호노리우스와의 협상이 깨집니다.", en: "Talks with Honorius collapse." },
      { lon: 12.48, lat: 41.9, place: "로마", year: "410년 8월 24일", ko: "사흘 동안 로마를 약탈합니다.", en: "Three-day sack of Rome." },
      { lon: 16.25, lat: 39.3, place: "코센티아", year: "410", ko: "남쪽으로 내려가다 알라리크가 병으로 죽습니다.", en: "Alaric dies in the south." },
    ],
  },
  {
    id: "gothic", era: "late", ko: "벨리사리우스의 고트 전쟁", en: "Belisarius's Gothic War", color: "#7a3454",
    links: [w("justinian-reconquest", "유스티니아누스의 재정복"), g("belisarius", "벨리사리우스")],
    steps: [
      { lon: 15.29, lat: 37.07, place: "시칠리아", year: "535", ko: "시칠리아를 거의 싸우지 않고 되찾습니다.", en: "Sicily retaken." },
      { lon: 15.65, lat: 38.1, place: "레기움", year: "536", ko: "해협을 건너 이탈리아 본토에 오릅니다.", en: "Crosses to the mainland." },
      { lon: 14.25, lat: 40.85, place: "나폴리", year: "536", ko: "수도관을 통해 성 안에 들어가 함락합니다.", en: "Naples taken via an aqueduct." },
      { lon: 12.48, lat: 41.9, place: "로마", year: "536–538", ko: "12월 로마에 들어가고, 비티게스의 포위를 1년 넘게 버팁니다.", en: "Holds Rome against Vitiges." },
      { lon: 12.2, lat: 44.42, place: "라벤나", year: "540", ko: "동고트 수도 라벤나에 들어갑니다. 곧 본국으로 소환됩니다.", en: "Enters Ravenna, then recalled." },
      { lon: 12.6, lat: 43.4, place: "타기나이", year: "552", ko: "환관 장군 나르세스가 토틸라를 이기며 전쟁이 사실상 끝납니다.", en: "Narses defeats Totila at Taginae." },
    ],
  },
];

export const MAP_STORY_NOTE =
  "‘전해지는 이야기’는 고대 작가가 전하지만 확인되지 않거나, 학자 사이에 논란이 있는 내용입니다.";
