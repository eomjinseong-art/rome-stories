import type { LinkItem } from "@/data/types";

const MYTH = "https://nadoo-myth.vercel.app";

export type GodPair = {
  slug: string;
  roman: string;
  romanLatin: string;
  greek: string;
  en: string;
  summary: string;
  note: string;
  compare: string;
  greekGod?: string;
};

export type RomanOnly = {
  slug: string;
  roman: string;
  romanLatin: string;
  en: string;
  summary: string;
  href: string;
};

export const mythIntro = {
  en: "RITUAL FIRST",
  title: "로마 종교는 이야기보다 절차였습니다",
  summary:
    "로마의 오래된 종교는 ‘이 신에게 어떤 모험이 있었나’보다 ‘어떤 말에, 어떤 제물을, 어떤 날에 바치나’가 중요했습니다. 그리스식 신화는 남이탈리아와 그리스 세계와 닿으면서 점점 덧입혀졌습니다.",
  points: [
    "유피테르와 제우스는 이름을 빌린 관계가 아니라, 더 오래된 ‘하늘 아버지’에서 갈라진 친척에 가깝습니다.",
    "로마에만 있거나 로마에서 훨씬 중요한 신도 있습니다. 야누스, 라레스, 베스타 여사제가 대표입니다.",
    "베르길리우스 『아이네이스』는 아우구스투스 시대의 서사시입니다. 건국 역사 기록이 아닙니다.",
  ] as const,
  more: [
    `짝마다의 신전·축제·차이 설명은 [나두신화의 그리스 vs 로마](${MYTH}/greece-vs-rome)에 출처 유형과 함께 정리되어 있습니다. 여기서는 역사 글을 읽다 만나는 이름만 짧게 잇습니다.`,
    `트로이에서 이탈리아로 왔다는 아이네이아스 이야기는 [나두신화의 아이네이스](${MYTH}/stories/aeneid)를 보세요. 로물루스 전설과의 연대 차이를 메우려고 알바 롱가 왕 목록이 생겼다는 설명이 많습니다.`,
  ],
};

export const pairs: readonly GodPair[] = [
  {
    slug: "zeus-jupiter",
    roman: "유피테르",
    romanLatin: "Iuppiter",
    greek: "제우스",
    en: "JUPITER",
    summary: "맹세와 나라와 승리를 보증하는 최고신입니다. 카피톨리누스 언덕 신전에서 유노, 미네르바와 함께 모셔졌습니다.",
    note: "그리스 제우스처럼 연애담의 주인공은 아니었습니다. 개선식은 이 신전에서 끝났습니다.",
    compare: `${MYTH}/greece-vs-rome/zeus-jupiter`,
    greekGod: `${MYTH}/gods/zeus`,
  },
  {
    slug: "hera-juno",
    roman: "유노",
    romanLatin: "Iuno",
    greek: "헤라",
    en: "JUNO",
    summary: "여성과 결혼, 그리고 도시 수호와 연결된 여신입니다. 로마에서는 나라의 경고를 전하는 역할도 했습니다.",
    note: "질투하는 왕비 이야기만으로 로마의 유노를 설명하면 신전 쪽 역할이 빠집니다.",
    compare: `${MYTH}/greece-vs-rome/hera-juno`,
    greekGod: `${MYTH}/gods/hera`,
  },
  {
    slug: "athena-minerva",
    roman: "미네르바",
    romanLatin: "Minerva",
    greek: "아테나",
    en: "MINERVA",
    summary: "기술과 전략의 여신으로 카피톨리누스 3신에 포함됩니다. 수공예 조합과도 연결됩니다.",
    note: "아테네의 도시 여신 아테나와 이름이 연결되지만, 로마에서의 자리는 그 복사판이 아닙니다.",
    compare: `${MYTH}/greece-vs-rome/athena-minerva`,
    greekGod: `${MYTH}/gods/athena`,
  },
  {
    slug: "ares-mars",
    roman: "마르스",
    romanLatin: "Mars",
    greek: "아레스",
    en: "MARS",
    summary: "전쟁과 농토를 지키는 신으로, 그리스의 아레스보다 로마에서 훨씬 중요했습니다. 로물루스의 아버지로 여겨졌습니다.",
    note: "3월(March)의 이름이 여기서 옵니다. 농사 철이 시작되는 달의 신이기도 했습니다.",
    compare: `${MYTH}/greece-vs-rome/ares-mars`,
    greekGod: `${MYTH}/gods/ares`,
  },
  {
    slug: "aphrodite-venus",
    roman: "베누스",
    romanLatin: "Venus",
    greek: "아프로디테",
    en: "VENUS",
    summary: "아이네이아스의 어머니로, 로마 가문의 조상 여신이 됩니다. 카이사르와 아우구스투스 가문이 이 계보를 강조했습니다.",
    note: "사랑의 여신이라는 그리스식 이야기와, 로마 국가의 기원 이야기가 한 이름에 겹칩니다.",
    compare: `${MYTH}/greece-vs-rome/aphrodite-venus`,
    greekGod: `${MYTH}/gods/aphrodite`,
  },
  {
    slug: "hermes-mercury",
    roman: "메르쿠리우스",
    romanLatin: "Mercurius",
    greek: "헤르메스",
    en: "MERCURY",
    summary: "무역과 여행, 전령의 신입니다. 상인 조합이 그를 모셨습니다.",
    note: "영어 merchant, commerce와 어원이 닿아 있다는 설명이 흔하지만, 그 단어 공부는 신화 사전의 영역입니다.",
    compare: `${MYTH}/greece-vs-rome/hermes-mercury`,
    greekGod: `${MYTH}/gods/hermes`,
  },
  {
    slug: "poseidon-neptune",
    roman: "넵투누스",
    romanLatin: "Neptunus",
    greek: "포세이돈",
    en: "NEPTUNE",
    summary: "물의 신입니다. 로마가 바다 전쟁에 뛰어들면서 그리스의 바다 신 이미지가 더 입혀집니다.",
    note: "처음부터 포세이돈과 똑같은 모험을 가진 신은 아니었습니다.",
    compare: `${MYTH}/greece-vs-rome/poseidon-neptune`,
    greekGod: `${MYTH}/gods/poseidon`,
  },
  {
    slug: "artemis-diana",
    roman: "디아나",
    romanLatin: "Diana",
    greek: "아르테미스",
    en: "DIANA",
    summary: "사냥과 달, 그리고 여성과 연결된 여신입니다. 아벤티누스 언덕과 네미 호수의 성소가 유명합니다.",
    note: "그리스의 아르테미스 이야기가 후에 많이 겹칩니다.",
    compare: `${MYTH}/greece-vs-rome/artemis-diana`,
    greekGod: `${MYTH}/gods/artemis`,
  },
  {
    slug: "apollo",
    roman: "아폴로",
    romanLatin: "Apollo",
    greek: "아폴론",
    en: "APOLLO",
    summary: "예언과 질병, 음악의 신으로 이름까지 거의 그대로 들어옵니다. 아우구스투스가 팔라티누스에 신전을 바쳤습니다.",
    note: "로마가 그리스 신을 그대로 받아들인 드문 경우에 가깝습니다.",
    compare: `${MYTH}/greece-vs-rome/apollo`,
    greekGod: `${MYTH}/gods/apollo`,
  },
  {
    slug: "hephaistos-vulcan",
    roman: "불카누스",
    romanLatin: "Volcanus",
    greek: "헤파이스토스",
    en: "VULCAN",
    summary: "불의 신입니다. 도시 화재를 막는 제사와 연결됩니다. 화산(volcano)이라는 말이 여기서 왔습니다.",
    note: "대장간 신의 그리스 모험과, 로마의 화재 방지 의례는 강조점이 다릅니다.",
    compare: `${MYTH}/greece-vs-rome/hephaistos-vulcan`,
    greekGod: `${MYTH}/gods/hephaistos`,
  },
  {
    slug: "hestia-vesta",
    roman: "베스타",
    romanLatin: "Vesta",
    greek: "헤스티아",
    en: "VESTA",
    summary: "집과 나라의 화덕을 맡는 여신입니다. 베스타 여사제(베스탈레스)가 포룸의 불을 지켰습니다.",
    note: "여사제 제도는 그리스 헤스티아 신화보다 로마 국가 의례에서 훨씬 구체적입니다.",
    compare: `${MYTH}/greece-vs-rome/hestia-vesta`,
    greekGod: `${MYTH}/gods/hestia`,
  },
  {
    slug: "dionysos-bacchus",
    roman: "바쿠스",
    romanLatin: "Bacchus",
    greek: "디오니소스",
    en: "BACCHUS",
    summary: "포도주와 황홀경의 신입니다. 기원전 186년 원로원은 바카날리아 제의를 강하게 단속했습니다.",
    note: "안토니우스는 동방에서 자신을 디오니소스에 가깝게 내세웠습니다. 옥타비아누스 쪽 선전은 이를 동방의 사치로 공격했습니다.",
    compare: `${MYTH}/greece-vs-rome/dionysos-bacchus`,
    greekGod: `${MYTH}/gods/dionysos`,
  },
  {
    slug: "herakles-hercules",
    roman: "헤르쿨레스",
    romanLatin: "Hercules",
    greek: "헤라클레스",
    en: "HERCULES",
    summary: "영웅에서 신이 된 인물로, 소 시장 광장(포룸 보아리움)의 오래된 제단과 연결됩니다. 상인의 수호자로도 모셔졌습니다.",
    note: "열두 과업 이야기는 그리스 쪽입니다. 로마는 그 힘의 이미지를 국가 의례에 붙였습니다.",
    compare: `${MYTH}/greece-vs-rome/herakles-hercules`,
    greekGod: `${MYTH}/gods/herakles`,
  },
];

export const romanOnly: readonly RomanOnly[] = [
  {
    slug: "janus",
    roman: "야누스",
    romanLatin: "Ianus",
    en: "JANUS",
    summary: "문과 시작의 신. 두 얼굴을 한 것으로 유명하고, 1월(January)의 이름과 닿아 있습니다. 전쟁이 없으면 그의 신전 문을 닫았다는 전통이 있습니다.",
    href: `${MYTH}/greece-vs-rome/roman/janus`,
  },
  {
    slug: "lares",
    roman: "라레스",
    romanLatin: "Lares",
    en: "LARES",
    summary: "집과 골목을 지키는 작은 신들입니다. 부엌 신전(라라리움)에 모셨습니다. 그리스 올림포스 신화의 주인공이 아닙니다.",
    href: `${MYTH}/greece-vs-rome/roman/lares`,
  },
  {
    slug: "penates",
    roman: "페나테스",
    romanLatin: "Penates",
    en: "PENATES",
    summary: "식량 창고와 집안을 지키는 신들입니다. 아이네이아스가 트로이에서 가져왔다고 하는 것도 이 신들입니다.",
    href: `${MYTH}/greece-vs-rome/roman/penates`,
  },
  {
    slug: "quirinus",
    roman: "퀴리누스",
    romanLatin: "Quirinus",
    en: "QUIRINUS",
    summary: "로마 시민 공동체의 신으로, 죽은 로물루스가 이 신이 되었다는 전승이 있습니다. 유피테르·마르스와 함께 오래된 3신으로 꼽히기도 합니다.",
    href: `${MYTH}/greece-vs-rome/roman/quirinus`,
  },
];

export const mythLinks: readonly LinkItem[] = [
  { href: `${MYTH}/greece-vs-rome`, label: "나두신화 · 그리스 vs 로마" },
  { href: `${MYTH}/stories/aeneid`, label: "나두신화 · 아이네이스" },
  { href: "/origins", label: "로마의 탄생·시대" },
  { href: "/cleopatra", label: "클레오파트라와 이집트 정치" },
];
