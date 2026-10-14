import { focusHref } from "@/data/family-tree";
import type { MapEra, MapLink, MapStory } from "@/data/map-explorer";

export type CityEvent = { era: MapEra; year: string; ko: string; en: string };
export type CityPin = {
  id: string;
  ko: string;
  en: string;
  lat: number;
  lon: number;
  lx?: number;
  ly?: number;
  anchor?: "start" | "middle" | "end";
  builder: { ko: string; en: string };
  photoNote?: string;
  events: CityEvent[];
  people: MapLink[];
  wars: MapLink[];
  films: MapLink[];
  then: { ko: string; en: string };
  now: { ko: string; en: string };
  stories: MapStory[];
};
export type CityStep = { pin: string; time: string; ko: string; en: string };
export type CityRoute = { id: string; era: MapEra; ko: string; en: string; color: string; steps: CityStep[] };

const g = (slug: string, label: string): MapLink => ({ href: `/generals/${slug}`, label: `장군 · ${label}` });
const r = (slug: string, label: string): MapLink => ({ href: `/rulers/${slug}`, label: `통치자 · ${label}` });
const f = (id: string, label: string): MapLink => ({ href: focusHref(id), label: `가계도 · ${label}` });
const w = (slug: string, label: string): MapLink => ({ href: `/wars/${slug}`, label });
const m = (slug: string, label: string): MapLink => ({ href: `/movies#${slug}`, label });

export const CITY_PINS: CityPin[] = [
  {
    id: "colosseum", ko: "콜로세움", en: "Colosseum (Flavian Amphitheatre)", lat: 41.8902, lon: 12.4922, lx: 10, ly: 14,
    builder: { ko: "베스파시아누스가 70년대 초 시작, 티투스가 서기 80년 봉헌, 도미티아누스가 마무리", en: "Begun by Vespasian c. 70–72, opened by Titus in 80" },
    events: [
      { era: "empire", year: "서기 80", ko: "티투스가 100일 동안의 개막 경기를 엽니다.", en: "Titus opens it with 100 days of games." },
      { era: "empire", year: "1–3세기", ko: "검투사 경기와 맹수 사냥, 처형이 열립니다. 관중은 약 5만 명으로 봅니다.", en: "Gladiators, beast hunts and executions for c. 50,000." },
      { era: "late", year: "523", ko: "기록에 남은 마지막 맹수 사냥이 열립니다.", en: "Last recorded animal hunt." },
    ],
    people: [r("vespasian", "베스파시아누스"), g("vespasian-titus", "베스파시아누스·티투스"), f("titus", "티투스"), r("nero", "네로")],
    wars: [w("jewish-war", "유대 전쟁(재구성된 비문: 전리품으로 건설)")],
    films: [m("gladiator", "글래디에이터"), m("gladiator-ii", "글래디에이터 II"), m("roman-empire-2016", "로마 제국(다큐드라마)")],
    then: { ko: "네로의 황금 궁전 인공 호수를 메운 자리에 세운 대리석 원형경기장이었습니다.", en: "Built over the lake of Nero's Golden House." },
    now: { ko: "지진과 석재 채취로 남쪽 바깥벽이 사라졌고, 로마에서 가장 많이 찾는 유적입니다.", en: "Half the outer ring lost to quakes and quarrying." },
    stories: [
      { ko: "‘콜로세움’이라는 이름은 옆에 있던 네로의 거대 동상(콜로수스)에서 왔다고 봅니다. 당시 이름은 플라비우스 원형경기장입니다.", en: "The name probably comes from Nero's nearby Colossus." },
      { ko: "수도사 텔레마코스가 경기장에 뛰어들어 죽은 뒤 검투사 경기가 끝났다는 이야기(테오도레토스).", en: "Telemachus's martyrdom ending the games (Theodoret)." },
      { ko: "경기장에서 그리스도인이 많이 처형됐다는 이야기는 이곳에 대해서는 증거가 약합니다.", en: "Christian martyrdoms here are poorly attested." },
    ],
  },
  {
    id: "forum", ko: "포룸 로마눔", en: "Forum Romanum (Curia, Rostra, Temple of Caesar)", lat: 41.8924, lon: 12.4855, lx: 8, ly: 14,
    builder: { ko: "기원전 7–6세기 습지를 메워 광장으로. 쿠리아 율리아는 카이사르 착공·아우구스투스 완공(전 29), 지금 건물은 디오클레티아누스 재건", en: "Drained c. 600 BC; Curia Julia by Caesar and Augustus (29 BC), rebuilt by Diocletian" },
    events: [
      { era: "republic", year: "전 43", ko: "안토니우스의 명으로 죽은 키케로의 머리와 손이 연단(로스트라)에 걸립니다.", en: "Cicero's head and hands nailed to the Rostra." },
      { era: "republic", year: "전 44년 3월 20일", ko: "카이사르의 장례식, 시신이 포룸에서 불태워집니다.", en: "Caesar's body is burned in the Forum." },
      { era: "empire", year: "전 29", ko: "화장 자리에 신격 율리우스 신전이 봉헌되고, 새 원로원 회의장 쿠리아 율리아가 문을 엽니다.", en: "Temple of Divus Julius and Curia Julia dedicated." },
      { era: "late", year: "608", ko: "비잔티움 황제 포카스를 기리는 기둥이 마지막 기념물로 섭니다.", en: "Column of Phocas, the last monument." },
    ],
    people: [g("caesar", "카이사르"), g("mark-antony", "안토니우스"), r("augustus", "아우구스투스"), r("diocletian", "디오클레티아누스"), f("caesar", "카이사르"), f("augustus", "아우구스투스")],
    wars: [w("caesar-civil-war", "카이사르의 내전"), w("philippi", "필리피 전투")],
    films: [m("rome-hbo", "롬(HBO)"), m("julius-caesar-1953", "줄리어스 시저(1953)"), m("fall-of-the-roman-empire", "로마제국의 멸망")],
    then: { ko: "선거·재판·연설·장사가 한데 섞인 도시의 중심 광장이었습니다.", en: "Rome's civic centre: courts, speeches, shops." },
    now: { ko: "중세에 흙에 묻혀 ‘소 들판(Campo Vaccino)’이 됐고, 18–19세기부터 발굴됐습니다.", en: "Buried as a cow pasture, excavated since the 1800s." },
    stories: [{ ko: "안토니우스의 장례 연설 ‘친구들이여, 로마인이여’는 셰익스피어의 문장입니다. 실제 연설 내용은 고대 작가마다 다르게 전합니다.", en: "'Friends, Romans, countrymen' is Shakespeare." }],
  },
  {
    id: "palatine", ko: "팔라티누스 언덕", en: "Palatine Hill", lat: 41.8892, lon: 12.4873, lx: -10, ly: 18, anchor: "end",
    builder: { ko: "기원전 8세기 움집부터. 황궁(도무스 플라비아·아우구스타나)은 도미티아누스가 서기 92년 완성", en: "Iron Age huts; imperial palace finished by Domitian in 92" },
    events: [
      { era: "republic", year: "전 8세기", ko: "움집 마을의 기둥 구멍이 발굴됐습니다.", en: "Post-holes of an Iron Age village." },
      { era: "empire", year: "전 1세기 말", ko: "아우구스투스가 수수한 집에 살며 아폴로 신전을 옆에 세웁니다.", en: "Augustus lives here beside his Apollo temple." },
      { era: "empire", year: "서기 92", ko: "도미티아누스의 거대한 궁전이 완성되어 이후 황제들의 거처가 됩니다.", en: "Domitian's palace completed." },
    ],
    people: [r("romulus", "로물루스"), r("augustus", "아우구스투스"), f("livia", "리비아"), r("tiberius", "티베리우스")],
    wars: [],
    films: [m("i-claudius", "나는 클라우디우스")],
    then: { ko: "부자와 황제의 언덕. ‘팔라티움’이 영어 palace의 어원입니다.", en: "'Palatium' gave us the word palace." },
    now: { ko: "벽돌 궁전 폐허와 16세기 파르네세 정원이 남은 고고학 공원입니다.", en: "Brick palace ruins and Renaissance gardens." },
    stories: [{ ko: "로물루스가 이 언덕에 도시를 세웠고 ‘로물루스의 오두막’이 있었다는 이야기는 건국 전설입니다.", en: "Romulus's hut is founding legend." }],
  },
  {
    id: "capitoline", ko: "카피톨리누스·유피테르 신전", en: "Capitoline / Temple of Jupiter", lat: 41.8932, lon: 12.4826, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "타르퀴니우스 왕가가 짓기 시작, 전통 연대 기원전 509년 봉헌. 여러 번 불탄 뒤 도미티아누스가 재건", en: "Begun by the Tarquins, dedicated 509 BC (trad.)" },
    events: [
      { era: "republic", year: "전 509", ko: "최고신 유피테르·유노·미네르바의 신전이 봉헌됐다고 전합니다.", en: "Temple of Jupiter dedicated (traditional)." },
      { era: "republic", year: "전 83", ko: "신전이 불탑니다. 개선장군 행렬은 늘 이곳에서 끝났습니다.", en: "Temple burns; triumphs end here." },
      { era: "empire", year: "서기 69", ko: "네 황제의 해 내전 중 다시 불탑니다.", en: "Burned again in the civil war of 69." },
    ],
    people: [r("tarquinius-superbus", "타르퀴니우스"), g("camillus", "카밀루스"), g("sulla", "술라")],
    wars: [w("veii-and-gallic-sack", "베이이와 갈리아의 로마 약탈")],
    films: [],
    then: { ko: "로마 국가 종교의 중심, 개선 행렬의 종착지였습니다.", en: "Heart of state religion, end of every triumph." },
    now: { ko: "미켈란젤로가 설계한 캄피돌리오 광장과 카피톨리니 박물관. 신전 기초 일부가 박물관 안에 보입니다.", en: "Michelangelo's piazza; temple foundations in the museum." },
    stories: [
      { ko: "기원전 390년 유노의 거위가 울어 밤에 오르던 갈리아인을 막았다는 이야기(리비우스).", en: "The sacred geese (Livy)." },
      { ko: "반역자를 떨어뜨렸다는 타르페이아 바위 이름의 유래 이야기도 전설입니다.", en: "The Tarpeian Rock tale is legend." },
    ],
  },
  {
    id: "circus", ko: "키르쿠스 막시무스", en: "Circus Maximus", lat: 41.8861, lon: 12.4851, lx: 0, ly: 20, anchor: "middle",
    builder: { ko: "왕 타르퀴니우스 프리스쿠스 때 시작했다고 전함. 카이사르와 트라야누스가 크게 증축", en: "Traditionally King Tarquinius Priscus; enlarged by Caesar and Trajan" },
    events: [
      { era: "republic", year: "전 46", ko: "카이사르가 경기장을 크게 넓힙니다.", en: "Caesar enlarges the track." },
      { era: "empire", year: "서기 64", ko: "대화재가 키르쿠스 둘레의 가게에서 시작됐다고 타키투스가 적습니다.", en: "The Great Fire starts in its shops (Tacitus)." },
      { era: "late", year: "549", ko: "고트 왕 토틸라가 연 경주가 기록상 마지막입니다.", en: "Last recorded races, under Totila." },
    ],
    people: [r("tarquinius-priscus", "타르퀴니우스 프리스쿠스"), g("caesar", "카이사르"), r("trajan", "트라야누스"), r("nero", "네로")],
    wars: [w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    then: { ko: "전차 경주장. 관중 약 15만 명으로 추정합니다.", en: "Chariot track for perhaps 150,000." },
    now: { ko: "길쭉한 풀밭 공원으로, 콘서트와 집회가 열립니다.", en: "A long grassy park used for concerts." },
    stories: [{ ko: "대 플리니우스는 25만 명이 앉았다고 적었지만 과장으로 봅니다.", en: "Pliny's 250,000 seats is likely exaggerated." }],
  },
  {
    id: "pompey", ko: "폼페이우스 극장·쿠리아", en: "Theatre & Curia of Pompey", lat: 41.8955, lon: 12.4765, lx: -10, ly: 4, anchor: "end",
    photoNote: "사진은 쿠리아 터가 있는 라르고 디 토레 아르젠티나 유적입니다.",
    builder: { ko: "폼페이우스, 기원전 55년 봉헌. 로마 최초의 상설 석조 극장", en: "Pompey, 55 BC — Rome's first permanent stone theatre" },
    events: [
      { era: "republic", year: "전 55", ko: "극장과 정원 회랑, 원로원 회의장(쿠리아)이 한 단지로 지어집니다.", en: "Theatre, portico and curia built as one complex." },
      { era: "republic", year: "전 44년 3월 15일", ko: "원로원 회의 중 카이사르가 폼페이우스 조각상 아래에서 찔려 죽습니다. 수에토니우스는 상처 23곳이라 적습니다.", en: "Caesar stabbed at the foot of Pompey's statue." },
    ],
    people: [g("pompey", "폼페이우스"), g("caesar", "카이사르"), f("pompey", "폼페이우스"), f("caesar", "카이사르")],
    wars: [w("caesar-civil-war", "카이사르의 내전")],
    films: [m("rome-hbo", "롬(HBO)"), m("julius-caesar-1953", "줄리어스 시저(1953)")],
    then: { ko: "극장 위쪽에 베누스 신전을 얹어 ‘신전의 계단’이라는 명분을 세웠습니다.", en: "A temple on top justified a permanent theatre." },
    now: { ko: "극장의 반원 모양이 골목(그로타 핀타 거리) 곡선에 남았고, 쿠리아 뒷벽은 라르고 아르젠티나에서 보입니다. 고양이 보호소로도 유명합니다.", en: "Its curve survives in street lines; curia wall at Largo Argentina." },
    stories: [
      { ko: "‘브루투스 너마저’는 셰익스피어의 라틴어 대사이고, 수에토니우스는 그리스어 ‘너도냐, 아들아’를 소문으로 적었습니다.", en: "'Et tu, Brute' is Shakespeare." },
      { ko: "점술가가 ‘3월 15일을 조심하라’고 경고했다는 이야기(수에토니우스·플루타르코스).", en: "'Beware the Ides of March'." },
    ],
  },
  {
    id: "campus", ko: "캄푸스 마르티우스·도미티아누스 경기장", en: "Campus Martius / Stadium of Domitian", lat: 41.8992, lon: 12.4731, lx: -10, ly: 4, anchor: "end",
    photoNote: "사진의 나보나 광장은 도미티아누스 경기장의 모양을 그대로 따릅니다.",
    builder: { ko: "‘마르스의 들판’은 성벽 밖 공터. 경기장은 도미티아누스, 서기 86년 무렵", en: "Field of Mars; stadium by Domitian c. 86" },
    events: [
      { era: "republic", year: "공화정", ko: "켄투리아 민회가 모여 집정관을 뽑고, 군대가 훈련한 들판입니다.", en: "Assemblies voted and soldiers drilled here." },
      { era: "empire", year: "전 1세기 말", ko: "아그리파와 아우구스투스가 판테온·목욕장·사이프타 율리아 등으로 채웁니다.", en: "Agrippa and Augustus fill it with monuments." },
      { era: "empire", year: "서기 86 무렵", ko: "도미티아누스가 그리스식 육상 경기장을 짓습니다.", en: "Domitian builds a Greek-style stadium." },
    ],
    people: [g("agrippa", "아그리파"), r("augustus", "아우구스투스"), f("agrippa", "아그리파")],
    wars: [],
    films: [],
    then: { ko: "성벽 밖이라 군대가 모일 수 있었던 넓은 들판이었습니다.", en: "Open ground outside the sacred boundary." },
    now: { ko: "중세·르네상스 로마의 중심가가 되었습니다. 나보나 광장의 타원이 경기장 트랙입니다.", en: "Old-town Rome; Piazza Navona keeps the stadium shape." },
    stories: [{ ko: "로물루스가 이 들판에서 폭풍 속에 사라져 신이 됐다는 이야기(리비우스).", en: "Romulus vanished here in a storm (Livy)." }],
  },
  {
    id: "pantheon", ko: "판테온", en: "Pantheon", lat: 41.8986, lon: 12.4769, lx: 10, ly: -6,
    builder: { ko: "아그리파가 기원전 27–25년 처음 지음. 지금 건물은 하드리아누스 때(113–125년 무렵) 재건", en: "Agrippa's original 27–25 BC; rebuilt under Hadrian c. 113–125" },
    events: [
      { era: "republic", year: "전 27–25", ko: "아그리파가 첫 판테온을 짓습니다(정면의 M·AGRIPPA 비문).", en: "Agrippa's first Pantheon." },
      { era: "empire", year: "125 무렵", ko: "지름 43m의 콘크리트 돔을 가진 지금 건물이 완성됩니다.", en: "The 43 m concrete dome completed." },
      { era: "late", year: "609", ko: "교황 보니파키우스 4세가 성당으로 봉헌해 보존됩니다.", en: "Consecrated as a church — and so preserved." },
    ],
    people: [g("agrippa", "아그리파"), r("hadrian", "하드리아누스"), f("hadrian", "하드리아누스")],
    wars: [],
    films: [],
    then: { ko: "여러 신을 모신 신전, 돔 꼭대기의 둥근 구멍(오쿨루스)이 유일한 창입니다.", en: "A temple lit only by the oculus." },
    now: { ko: "지금도 쓰이는 성당이고, 철근 없는 콘크리트 돔으로는 여전히 세계 최대입니다.", en: "Still the largest unreinforced concrete dome." },
    stories: [{ ko: "하드리아누스가 직접 설계했다는 말은 확인되지 않습니다. 착공이 트라야누스 때라는 벽돌 도장 연구도 있습니다.", en: "Hadrian as architect is unproven." }],
  },
  {
    id: "mausaug", ko: "아우구스투스 영묘", en: "Mausoleum of Augustus", lat: 41.906, lon: 12.4763, lx: 10, ly: -4,
    builder: { ko: "옥타비아누스, 기원전 28년 착공", en: "Octavian, begun 28 BC" },
    events: [
      { era: "republic", year: "전 28", ko: "악티움 승리 직후 가문의 무덤으로 짓기 시작합니다.", en: "Begun right after Actium." },
      { era: "empire", year: "전 23", ko: "조카 마르켈루스가 처음 묻힙니다. 뒤에 아그리파, 옥타비아가 묻힙니다.", en: "Marcellus first interred; later Agrippa, Octavia." },
      { era: "empire", year: "서기 14", ko: "아우구스투스의 유골이 안치됩니다. 리비아, 티베리우스, 클라우디우스도 이어집니다.", en: "Augustus's ashes placed here." },
    ],
    people: [r("augustus", "아우구스투스"), f("augustus", "아우구스투스"), f("octavia", "옥타비아"), f("agrippa", "아그리파"), r("tiberius", "티베리우스")],
    wars: [w("actium", "악티움 해전")],
    films: [],
    then: { ko: "지름 약 90m의 흙과 돌 원통 위에 나무를 심은 거대한 무덤이었습니다.", en: "A 90 m drum planted with trees." },
    now: { ko: "요새·정원·공연장을 거쳐, 오랜 복원 끝에 2021년 다시 개방됐습니다.", en: "Reopened in 2021 after restoration." },
    stories: [],
  },
  {
    id: "arapacis", ko: "아라 파키스", en: "Ara Pacis (Altar of Peace)", lat: 41.9061, lon: 12.4752, lx: -8, ly: 16, anchor: "end",
    builder: { ko: "원로원이 아우구스투스를 위해, 기원전 13년 서원·9년 봉헌", en: "Voted 13 BC, dedicated 9 BC" },
    events: [
      { era: "empire", year: "전 9", ko: "1월 30일, 아우구스투스의 히스파니아·갈리아 귀환을 기념해 봉헌합니다.", en: "Dedicated 30 January 9 BC." },
    ],
    people: [r("augustus", "아우구스투스"), f("livia", "리비아"), f("agrippa", "아그리파"), f("julia-elder", "대 율리아")],
    wars: [],
    films: [],
    then: { ko: "캄푸스 마르티우스 북쪽 플라미니아 가도 옆에 있던 채색 제단이었습니다.", en: "A painted altar beside the Via Flaminia." },
    now: { ko: "조각을 모아 1938년 재조립했고, 2006년 리처드 마이어의 유리 박물관에 들어갔습니다.", en: "Reassembled 1938; Meier museum 2006." },
    stories: [{ ko: "행렬 부조 속 인물 중 누가 리비아·율리아·아그리파인지는 학자마다 다르게 봅니다.", en: "Who's who in the procession is debated." }],
  },
  {
    id: "santangelo", ko: "하드리아누스 영묘(산탄젤로 성)", en: "Mausoleum of Hadrian / Castel Sant'Angelo", lat: 41.9031, lon: 12.4663, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "하드리아누스 착공, 안토니누스 피우스가 139년 무렵 완공", en: "Hadrian; completed by Antoninus Pius c. 139" },
    events: [
      { era: "empire", year: "139 무렵", ko: "하드리아누스의 유골이 안치되고, 이후 3세기 초까지 황제들이 묻힙니다.", en: "Hadrian interred; later emperors too." },
      { era: "late", year: "537", ko: "고트군 포위 때 수비병들이 꼭대기 조각상을 부숴 던졌다고 프로코피우스가 적습니다.", en: "Defenders hurl statues at the Goths (Procopius)." },
    ],
    people: [r("hadrian", "하드리아누스"), f("hadrian", "하드리아누스"), r("marcus-aurelius", "마르쿠스 아우렐리우스"), g("belisarius", "벨리사리우스")],
    wars: [w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    then: { ko: "흰 대리석을 입힌 원통형 영묘, 다리(아일리우스 교) 끝의 무덤이었습니다.", en: "A marble-clad drum at the end of its bridge." },
    now: { ko: "중세 교황의 요새와 감옥을 거쳐 국립 박물관이 됐습니다.", en: "Papal fortress, now a museum." },
    stories: [{ ko: "590년 흑사병 때 교황 그레고리우스가 꼭대기에서 칼을 거두는 천사를 보았다는 이야기에서 ‘천사의 성’ 이름이 나왔습니다.", en: "Gregory's vision of the angel — the name's legend." }],
  },
  {
    id: "trajan", ko: "트라야누스 포룸·시장·기둥", en: "Trajan's Forum, Markets & Column", lat: 41.8958, lon: 12.4843, lx: 10, ly: -6,
    builder: { ko: "트라야누스, 건축가 다마스쿠스의 아폴로도로스. 포룸 112년·기둥 113년 봉헌", en: "Trajan & Apollodorus of Damascus, 112–113" },
    events: [
      { era: "empire", year: "112–113", ko: "다키아 전쟁 전리품으로 마지막이자 가장 큰 황제 포룸과 시장을 짓습니다.", en: "Largest imperial forum, paid by Dacian spoils." },
      { era: "empire", year: "113", ko: "높이 약 30m 기둥의 나선 부조가 다키아 원정을 그립니다. 받침에 트라야누스의 유골이 놓입니다.", en: "The spiral column; Trajan's ashes in its base." },
    ],
    people: [r("trajan", "트라야누스"), g("trajan", "트라야누스"), f("trajan", "트라야누스")],
    wars: [w("dacian-wars", "다키아 전쟁")],
    films: [],
    then: { ko: "도서관 두 곳과 거대한 바실리카, 언덕을 깎아 만든 반원형 시장이 있었습니다.", en: "Libraries, basilica and terraced markets." },
    now: { ko: "기둥은 거의 온전하고, 1587년부터 꼭대기에 성 베드로 상이 서 있습니다. 시장은 박물관입니다.", en: "St Peter has topped the column since 1587." },
    stories: [],
  },
  {
    id: "mamertine", ko: "마메르티누스 감옥(툴리아눔)", en: "Mamertine Prison (Tullianum)", lat: 41.8934, lon: 12.4844, lx: 8, ly: 16,
    builder: { ko: "아주 이른 시기의 지하 저수조·감방. 왕 안쿠스 마르키우스가 지었다고 리비우스가 전함", en: "Archaic underground cell; Livy credits King Ancus" },
    events: [
      { era: "republic", year: "전 104", ko: "누미디아 왕 유구르타가 이곳에서 죽습니다.", en: "King Jugurtha dies here." },
      { era: "republic", year: "전 63", ko: "카틸리나 음모자들이 키케로의 결정으로 교살됩니다.", en: "Catiline's conspirators strangled." },
      { era: "republic", year: "전 46", ko: "카이사르의 개선식 뒤 베르킨게토릭스가 처형됩니다.", en: "Vercingetorix executed after Caesar's triumph." },
    ],
    people: [r("ancus-marcius", "안쿠스 마르키우스"), g("marius", "마리우스"), g("caesar", "카이사르")],
    wars: [w("gallic-war", "갈리아 전쟁")],
    films: [],
    then: { ko: "형을 기다리는 곳이지, 오래 가두는 감옥이 아니었습니다.", en: "A holding cell before execution." },
    now: { ko: "그 위에 성당(산 주세페 데이 팔레냐미)이 있고 지하를 관람할 수 있습니다. ‘마메르티누스’는 중세 이름입니다.", en: "Under a church; the name is medieval." },
    stories: [{ ko: "베드로와 바울이 이곳에 갇혔고 베드로가 샘을 솟게 해 간수를 세례했다는 이야기는 후대 전승입니다.", en: "Peter and Paul's imprisonment is later tradition." }],
  },
  {
    id: "titus", ko: "티투스 개선문", en: "Arch of Titus", lat: 41.8907, lon: 12.4886, lx: 10, ly: 4,
    builder: { ko: "도미티아누스, 81년 형 티투스가 죽고 신격화된 뒤", en: "Domitian, after Titus's death in 81" },
    events: [{ era: "empire", year: "81 이후", ko: "70년 예루살렘 함락과 성전 전리품(메노라) 행렬을 부조로 새깁니다.", en: "Reliefs of the spoils of Jerusalem (70)." }],
    people: [g("vespasian-titus", "베스파시아누스·티투스"), f("titus", "티투스"), r("vespasian", "베스파시아누스")],
    wars: [w("jewish-war", "유대 전쟁")],
    films: [],
    then: { ko: "포룸으로 들어가는 성스러운 길(비아 사크라) 위의 기념문이었습니다.", en: "Over the Via Sacra into the Forum." },
    now: { ko: "중세 요새에 끼어 살아남았고, 1821년 발라디에가 복원했습니다(새 부분은 트래버틴).", en: "Restored by Valadier in 1821." },
    stories: [],
  },
  {
    id: "maxentius", ko: "막센티우스 바실리카", en: "Basilica of Maxentius", lat: 41.8919, lon: 12.4880, lx: 8, ly: -8,
    builder: { ko: "막센티우스 308년 착공, 312년 이후 콘스탄티누스 완공", en: "Begun by Maxentius 308, finished by Constantine" },
    events: [{ era: "late", year: "308–312 이후", ko: "재판과 업무를 보던 거대한 홀. 서쪽 끝에 콘스탄티누스 거상이 앉아 있었습니다.", en: "Vast hall with a colossal Constantine." }],
    people: [r("constantine", "콘스탄티누스"), f("constantine", "콘스탄티누스")],
    wars: [],
    films: [],
    then: { ko: "고대 로마에서 가장 큰 아치형 천장 건물이었습니다.", en: "The largest vaulted hall in ancient Rome." },
    now: { ko: "북쪽 통로의 아치 셋만 남았고, 거상의 머리와 손은 카피톨리니 박물관에 있습니다.", en: "Three vaults stand; colossus fragments in the Capitoline Museums." },
    stories: [],
  },
  {
    id: "constantine", ko: "콘스탄티누스 개선문", en: "Arch of Constantine", lat: 41.8898, lon: 12.4906, lx: -8, ly: 16, anchor: "end",
    builder: { ko: "원로원이 315년 봉헌", en: "Dedicated by the Senate in 315" },
    events: [{ era: "late", year: "315", ko: "밀비우스 다리에서 막센티우스를 이긴 일을 기념합니다. 트라야누스·하드리아누스·마르쿠스 아우렐리우스 시대 부조를 떼어 다시 썼습니다.", en: "Celebrates 312; reuses earlier imperial reliefs." }],
    people: [r("constantine", "콘스탄티누스"), r("trajan", "트라야누스"), r("hadrian", "하드리아누스"), r("marcus-aurelius", "마르쿠스 아우렐리우스")],
    wars: [],
    films: [],
    then: { ko: "개선 행렬 길목, 콜로세움 옆에 섰습니다.", en: "On the triumphal route by the Colosseum." },
    now: { ko: "로마의 개선문 가운데 가장 크고 거의 온전합니다.", en: "The largest surviving arch in Rome." },
    stories: [{ ko: "비문의 ‘신의 영감으로(instinctu divinitatis)’가 그리스도교 신을 뜻하는지는 일부러 모호하게 썼다고 봅니다.", en: "'By divine inspiration' is deliberately vague." }],
  },
  {
    id: "domus", ko: "도무스 아우레아(황금 궁전)", en: "Domus Aurea", lat: 41.8915, lon: 12.4955, lx: 10, ly: 4,
    builder: { ko: "네로, 64년 대화재 뒤. 건축가 세베루스와 켈레르", en: "Nero after the fire of 64" },
    events: [
      { era: "empire", year: "64–68", ko: "불탄 도심에 정원·호수·팔각 방을 갖춘 궁전을 짓습니다.", en: "Palace with lake and octagonal hall." },
      { era: "empire", year: "104–109", ko: "트라야누스 목욕장이 위에 지어지며 땅속에 묻힙니다.", en: "Buried under Trajan's Baths." },
    ],
    people: [r("nero", "네로"), f("nero", "네로"), r("vespasian", "베스파시아누스")],
    wars: [],
    films: [m("quo-vadis", "쿠오 바디스")],
    then: { ko: "도시 한가운데 시골 풍경을 들인 사치의 상징이었습니다.", en: "Countryside inside the city." },
    now: { ko: "1480년 무렵 다시 발견되어 라파엘로 등 화가들이 벽화를 보러 내려갔습니다(‘그로테스크’의 어원). 공사 중 일부 공개합니다.", en: "Rediscovered c. 1480; origin of 'grotesque'." },
    stories: [
      { ko: "‘이제야 사람답게 살겠다’고 했다는 말은 수에토니우스가 전합니다.", en: "'At last I can live like a human being' (Suetonius)." },
      { ko: "밤낮 하늘처럼 돌아가는 식당이 있었다는 이야기(수에토니우스). 2009년 그 흔적이라는 구조가 발표됐지만 논란이 있습니다.", en: "The rotating dining room — debated." },
    ],
  },
  {
    id: "caracalla", ko: "카라칼라 목욕장", en: "Baths of Caracalla", lat: 41.879, lon: 12.4925, lx: 10, ly: 4,
    builder: { ko: "카라칼라, 212–216년", en: "Caracalla, 212–216" },
    events: [
      { era: "empire", year: "216", ko: "냉탕·온탕·운동장·도서관을 갖춘 공중목욕장이 문을 엽니다.", en: "Opens with pools, gyms and libraries." },
      { era: "late", year: "537", ko: "고트군이 수도관을 끊어 쓰지 못하게 됩니다.", en: "Goths cut the aqueducts." },
    ],
    people: [],
    wars: [w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    then: { ko: "한 번에 천 명이 훨씬 넘게 씻었다고 봅니다. 입장료는 아주 쌌습니다.", en: "Over a thousand bathers at once, nearly free." },
    now: { ko: "거대한 벽돌 벽이 남았고, 여름에는 오페라 무대가 됩니다.", en: "Summer opera stage." },
    stories: [],
  },
  {
    id: "diocletian", ko: "디오클레티아누스 목욕장", en: "Baths of Diocletian", lat: 41.903, lon: 12.4977, lx: 10, ly: 4,
    photoNote: "17세기 동판화로 본 폐허입니다(그때 모습).",
    builder: { ko: "막시미아누스가 디오클레티아누스 이름으로, 298–306년", en: "Built 298–306 in Diocletian's name" },
    events: [{ era: "late", year: "306", ko: "로마 최대의 목욕장이 완성됩니다.", en: "Rome's largest baths completed." }],
    people: [r("diocletian", "디오클레티아누스")],
    wars: [],
    films: [],
    then: { ko: "수천 명이 동시에 쓸 수 있는 거대한 단지였습니다.", en: "A complex for thousands." },
    now: { ko: "1560년대 미켈란젤로가 큰 홀을 산타 마리아 델리 안젤리 성당으로 바꿨고, 나머지는 국립 로마 박물관입니다.", en: "Michelangelo's church; National Roman Museum." },
    stories: [],
  },
  {
    id: "marcellus", ko: "마르켈루스 극장", en: "Theatre of Marcellus", lat: 41.8918, lon: 12.4799, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "카이사르가 계획, 아우구스투스가 기원전 13–11년 완공", en: "Planned by Caesar, finished by Augustus 13–11 BC" },
    events: [{ era: "empire", year: "전 13–11", ko: "아우구스투스가 죽은 조카이자 사위 마르켈루스(옥타비아의 아들)의 이름을 붙입니다.", en: "Named for Marcellus, Octavia's son." }],
    people: [r("augustus", "아우구스투스"), f("octavia", "옥타비아"), g("caesar", "카이사르")],
    wars: [],
    films: [],
    then: { ko: "1만 명 이상이 들어가는 극장이었습니다.", en: "Seated over 10,000." },
    now: { ko: "중세 요새, 르네상스 저택을 거쳐 지금도 위층에 아파트가 있습니다.", en: "Upper floors are still apartments." },
    stories: [],
  },
  {
    id: "island", ko: "티베르섬", en: "Tiber Island", lat: 41.8906, lon: 12.4775, lx: -10, ly: 16, anchor: "end",
    builder: { ko: "아이스쿨라피우스 신전 기원전 291년, 파브리키우스 다리 기원전 62년", en: "Temple 291 BC; Pons Fabricius 62 BC" },
    events: [
      { era: "republic", year: "전 291", ko: "역병 뒤 치유의 신 아이스쿨라피우스 신전을 세웁니다.", en: "Temple of Asclepius after a plague." },
      { era: "republic", year: "전 62", ko: "파브리키우스 다리가 놓입니다. 원래 모습 그대로 쓰는 로마 최고(最古)의 다리입니다.", en: "Pons Fabricius, still in use." },
    ],
    people: [],
    wars: [],
    films: [],
    then: { ko: "섬 끝을 배의 뱃머리처럼 돌로 감쌌습니다.", en: "Its tip was faced like a ship's prow." },
    now: { ko: "16세기부터 이어진 병원(파테베네프라텔리)이 지금도 있습니다. 치유의 섬 전통입니다.", en: "Still home to a hospital." },
    stories: [
      { ko: "에피다우로스에서 데려온 뱀이 배에서 섬으로 헤엄쳐 가 자리를 골랐다는 이야기.", en: "The sacred snake chose the island." },
      { ko: "쫓겨난 타르퀴니우스의 곡식을 강에 버려 섬이 생겼다는 이야기(리비우스).", en: "Formed from the Tarquins' grain (Livy)." },
    ],
  },
  {
    id: "aventine", ko: "아벤티누스 언덕", en: "Aventine Hill", lat: 41.8838, lon: 12.4793, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "평민의 언덕. 산타 사비나 성당 422–432년", en: "The plebeian hill; Santa Sabina 422–432" },
    events: [
      { era: "republic", year: "공화정 초", ko: "평민들이 이 언덕으로 물러나 권리를 요구했다는 전승이 있습니다.", en: "Plebeian secessions (tradition)." },
      { era: "late", year: "410", ko: "알라리크 군대가 언덕 위 부자 저택들을 약탈합니다.", en: "Alaric's men plunder its mansions." },
      { era: "late", year: "422–432", ko: "산타 사비나 성당이 지어집니다.", en: "Santa Sabina built." },
    ],
    people: [r("servius-tullius", "세르비우스 툴리우스"), g("stilicho", "스틸리코")],
    wars: [w("stilicho-goths", "스틸리코와 고트족")],
    films: [],
    then: { ko: "외국 신전과 평민의 동네, 제정기에는 부자 저택가였습니다.", en: "Plebeians, then villas of the rich." },
    now: { ko: "조용한 주택가. 몰타 기사단 정문 열쇠 구멍으로 성 베드로 돔이 보입니다.", en: "Quiet; the famous keyhole view." },
    stories: [{ ko: "레무스가 아벤티누스에서 새 점을 쳤다는 이야기는 건국 전설입니다.", en: "Remus took the auspices here — legend." }],
  },
  {
    id: "appia", ko: "아피아 가도 시작(포르타 아피아)", en: "Start of the Via Appia", lat: 41.8735, lon: 12.5016, lx: -10, ly: -6, anchor: "end",
    photoNote: "사진은 아우렐리아누스 성벽의 포르타 아피아(지금 산 세바스티아노 문)입니다. 가도 원래 출발점은 세르비우스 성벽의 카페나 문입니다.",
    builder: { ko: "감찰관 아피우스 클라우디우스, 기원전 312년. 성문은 호노리우스가 5세기 초 증축", en: "Appius Claudius, 312 BC; gate rebuilt by Honorius" },
    events: [
      { era: "republic", year: "전 312", ko: "로마에서 카푸아까지 첫 큰 포장도로가 놓입니다.", en: "First great road, Rome to Capua." },
      { era: "republic", year: "전 71", ko: "스파르타쿠스 반란 포로 약 6천 명이 이 길가에 십자가형을 당합니다.", en: "6,000 crucified along it." },
      { era: "late", year: "401–403", ko: "호노리우스가 성문을 높이고 탑을 보강합니다.", en: "Honorius strengthens the gate." },
    ],
    people: [g("crassus", "크라수스")],
    wars: [],
    films: [m("spartacus", "스파르타쿠스"), m("quo-vadis", "쿠오 바디스")],
    then: { ko: "길 양옆에 무덤이 줄지어 섰습니다. 도시 안에는 묻을 수 없었기 때문입니다.", en: "Lined with tombs — no burials inside the city." },
    now: { ko: "성문 안은 성벽 박물관이고, 밖은 고대 도로 공원(아피아 안티카)입니다.", en: "Walls museum; Appia Antica park." },
    stories: [{ ko: "로마를 떠나던 베드로가 이 길에서 예수를 만나 ‘쿠오 바디스(어디로 가십니까)’라고 물었다는 이야기는 외경 전승입니다.", en: "'Quo vadis' is apocryphal tradition." }],
  },
  {
    id: "stpeter", ko: "옛 성 베드로 성당·바티칸 경기장", en: "Old St Peter's / Vatican Circus", lat: 41.9022, lon: 12.4568, lx: 0, ly: 22, anchor: "middle",
    photoNote: "사진의 오벨리스크는 칼리굴라가 경기장에 세운 것을 1586년 지금 자리로 옮긴 것입니다.",
    builder: { ko: "경기장은 칼리굴라·네로, 성당은 콘스탄티누스가 320년대 무렵 착공", en: "Circus of Caligula & Nero; basilica by Constantine c. 320s" },
    events: [
      { era: "empire", year: "37 무렵", ko: "칼리굴라가 이집트 오벨리스크를 가져와 경기장 가운데 세웁니다.", en: "Caligula brings the obelisk." },
      { era: "empire", year: "64", ko: "대화재 뒤 네로가 그리스도인을 처형합니다. 타키투스는 네로의 정원에서라고 적습니다.", en: "Nero's persecution after the fire (Tacitus)." },
      { era: "late", year: "320년대", ko: "콘스탄티누스가 베드로의 무덤으로 여긴 자리에 큰 성당을 짓습니다.", en: "Constantine's basilica over Peter's shrine." },
    ],
    people: [r("nero", "네로"), r("constantine", "콘스탄티누스"), f("constantine", "콘스탄티누스")],
    wars: [],
    films: [m("quo-vadis", "쿠오 바디스")],
    then: { ko: "도시 밖 언덕 아래의 경기장과 무덤 거리였습니다.", en: "A circus and cemetery outside the city." },
    now: { ko: "옛 성당은 1506년부터 헐리고 지금 성 베드로 대성당이 섰습니다.", en: "Replaced from 1506 by today's basilica." },
    stories: [
      { ko: "베드로가 거꾸로 십자가에 매달렸다는 이야기는 2세기 말 이후의 전승입니다.", en: "Peter crucified upside down — tradition." },
      { ko: "제단 아래 발굴된 무덤이 베드로의 것이라는 주장은 학계에서 확정되지 않았습니다.", en: "Peter's tomb identification is unconfirmed." },
    ],
  },
  {
    id: "lateran", ko: "라테라노 대성당", en: "Lateran Basilica", lat: 41.8859, lon: 12.5057, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "콘스탄티누스, 312년 이후", en: "Constantine, after 312" },
    events: [{ era: "late", year: "312–324 무렵", ko: "막센티우스 기병대 병영을 헐고 로마 주교의 성당을 짓습니다.", en: "Built over Maxentius's horse-guard barracks." }],
    people: [r("constantine", "콘스탄티누스"), f("helena", "헬레나")],
    wars: [],
    films: [],
    then: { ko: "로마의 첫 대성당이자 중세 교황의 거처였습니다.", en: "Rome's cathedral and papal residence." },
    now: { ko: "지금도 로마 교구의 주교좌 성당입니다. 정면은 18세기 것입니다.", en: "Still the cathedral of Rome." },
    stories: [],
  },
  {
    id: "aurelian", ko: "아우렐리아누스 성벽", en: "Aurelian Walls", lat: 41.9093, lon: 12.5016, lx: -10, ly: 4, anchor: "end",
    builder: { ko: "아우렐리아누스 271–275년 착공, 프로부스 완공, 호노리우스가 401–403년 두 배로 높임", en: "Aurelian 271–275; raised by Honorius" },
    events: [
      { era: "empire", year: "271", ko: "게르만족 침입 뒤 약 19km 성벽을 쌓기 시작합니다.", en: "19 km of walls begun." },
      { era: "late", year: "410", ko: "8월 24일 알라리크의 고트군이 살라리아 문으로 들어옵니다.", en: "Alaric enters by the Porta Salaria." },
      { era: "late", year: "537–538", ko: "벨리사리우스가 이 성벽으로 1년 넘게 고트군을 막습니다.", en: "Belisarius holds the walls." },
    ],
    people: [g("stilicho", "스틸리코"), g("belisarius", "벨리사리우스")],
    wars: [w("stilicho-goths", "스틸리코와 고트족"), w("justinian-reconquest", "유스티니아누스의 재정복")],
    films: [],
    then: { ko: "수백 년 만에 로마가 다시 성벽을 두른 일은 제국의 위기를 보여 줍니다.", en: "A walled Rome again: a sign of crisis." },
    now: { ko: "대부분 남아 있고, 1870년 이탈리아군이 포르타 피아 옆을 뚫고 들어와 통일을 마칩니다.", en: "Mostly intact; breached at Porta Pia in 1870." },
    stories: [{ ko: "알라리크에게 성문을 열어 준 것이 귀족 부인 프로바의 노예들이었다는 등 여러 소문(프로코피우스).", en: "Who opened the gate in 410 — rumours (Procopius)." }],
  },
  {
    id: "milvian", ko: "밀비우스 다리(북쪽 약 3km)", en: "Milvian Bridge (≈3 km north)", lat: 41.9118, lon: 12.4705, lx: 10, ly: 4,
    photoNote: "지도에서는 북쪽 끝에 표시했습니다. 실제는 더 북쪽입니다.",
    builder: { ko: "마르쿠스 아이밀리우스 스카우루스가 기원전 109년 돌다리로", en: "Stone bridge of 109 BC" },
    events: [
      { era: "republic", year: "전 109", ko: "플라미니아 가도가 티베르강을 건너는 돌다리가 놓입니다.", en: "Stone bridge on the Via Flaminia." },
      { era: "late", year: "312", ko: "10월 28일 콘스탄티누스가 막센티우스를 이기고, 막센티우스는 강에 빠져 죽습니다.", en: "Constantine defeats Maxentius, who drowns." },
    ],
    people: [r("constantine", "콘스탄티누스"), f("constantine", "콘스탄티누스")],
    wars: [],
    films: [],
    then: { ko: "북쪽에서 로마로 들어오는 관문이었습니다.", en: "The northern gateway to Rome." },
    now: { ko: "여러 번 고쳐 지은 다리가 보행자 다리로 쓰입니다.", en: "Rebuilt; now a footbridge." },
    stories: [{ ko: "전투 전 하늘의 십자가(에우세비오스) 또는 꿈속 표지(락탄티우스)를 보았다는 이야기는 기록마다 다릅니다.", en: "The vision of the cross differs by source." }],
  },
];

export const CITY_ROUTES: CityRoute[] = [
  {
    id: "caesar", era: "republic", ko: "카이사르의 마지막 날", en: "Caesar's last day (44 BC)", color: "#a34732",
    steps: [
      { pin: "forum", time: "3월 15일 아침", ko: "대제관 관저(도무스 푸블리카)에서 나섭니다. 아내 칼푸르니아가 말렸다고 전합니다.", en: "Leaves the pontiff's house on the Via Sacra." },
      { pin: "pompey", time: "회의 시작 무렵", ko: "포룸을 지나 캄푸스 마르티우스의 폼페이우스 쿠리아에 닿아, 원로원 의원들에게 찔려 쓰러집니다.", en: "Stabbed in Pompey's curia." },
      { pin: "capitoline", time: "그 직후", ko: "암살자들이 카피톨리누스 언덕으로 올라가 몸을 지킵니다.", en: "The assassins hold the Capitol." },
      { pin: "forum", time: "3월 20일", ko: "장례식에서 군중이 포룸에 장작더미를 쌓아 시신을 태웁니다. 그 자리에 뒤에 신전이 섭니다.", en: "Burned in the Forum; a temple follows." },
    ],
  },
  {
    id: "emperors", era: "empire", ko: "황제들의 로마", en: "Emperors' Rome", color: "#6d4c8a",
    steps: [
      { pin: "mausaug", time: "전 28", ko: "아우구스투스가 자기 영묘부터 짓습니다.", en: "Augustus builds his tomb." },
      { pin: "arapacis", time: "전 9", ko: "평화의 제단이 바로 옆에 섭니다.", en: "The Altar of Peace." },
      { pin: "pantheon", time: "125 무렵", ko: "하드리아누스의 돔이 완성됩니다.", en: "Hadrian's dome." },
      { pin: "trajan", time: "112–113", ko: "트라야누스 포룸과 기둥.", en: "Trajan's Forum and Column." },
      { pin: "palatine", time: "92", ko: "도미티아누스의 황궁.", en: "Domitian's palace." },
      { pin: "titus", time: "81 이후", ko: "예루살렘 전리품을 새긴 티투스 개선문.", en: "Arch of Titus." },
      { pin: "colosseum", time: "80", ko: "플라비우스 원형경기장.", en: "The Colosseum." },
      { pin: "caracalla", time: "216", ko: "카라칼라 목욕장으로 마무리합니다.", en: "Ending at the Baths of Caracalla." },
    ],
  },
  {
    id: "christian", era: "late", ko: "그리스도교·후기 로마", en: "Christian & late Rome", color: "#1f3b57",
    steps: [
      { pin: "stpeter", time: "64", ko: "네로의 박해. 베드로가 이곳에서 죽었다는 전승이 생깁니다.", en: "Nero's persecution." },
      { pin: "milvian", time: "312", ko: "콘스탄티누스가 밀비우스 다리에서 이깁니다.", en: "Victory at the Milvian Bridge." },
      { pin: "maxentius", time: "312 이후", ko: "패자 막센티우스의 바실리카를 콘스탄티누스가 완성합니다.", en: "Constantine finishes his rival's basilica." },
      { pin: "constantine", time: "315", ko: "원로원이 개선문을 바칩니다.", en: "The Arch of Constantine." },
      { pin: "lateran", time: "312–324", ko: "로마 주교를 위한 첫 대성당.", en: "The first cathedral." },
      { pin: "aurelian", time: "410", ko: "알라리크가 살라리아 문으로 들어옵니다.", en: "Alaric breaks in." },
      { pin: "santangelo", time: "537", ko: "벨리사리우스의 군대가 하드리아누스 영묘에서 고트군을 막습니다.", en: "Belisarius defends Hadrian's tomb." },
    ],
  },
];

/** 장군·통치자 상세 페이지에서 /city로 잇는 링크 */
export function cityLinksFor(kind: "generals" | "rulers", slug: string): MapLink[] {
  const href = `/${kind}/${slug}`;
  return CITY_PINS.filter((p) => p.people.some((l) => l.href === href)).map((p) => ({ href: `/city#${p.id}`, label: `로마 시내 · ${p.ko}` }));
}
