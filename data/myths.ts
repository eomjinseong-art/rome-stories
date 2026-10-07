export const NADOO = "https://nadoo-myth.vercel.app";

export type GodLink = {
  romanKo: string;
  romanLa: string;
  greekKo: string;
  greekLa: string;
  note: string;
  pairSlug?: string;
  godSlug?: string;
  romanSlug?: string;
};

export function pairHref(slug: string) {
  return `${NADOO}/greece-vs-rome/${slug}`;
}

export function godHref(slug: string) {
  return `${NADOO}/gods/${slug}`;
}

export function romanHref(slug: string) {
  return `${NADOO}/greece-vs-rome/roman/${slug}`;
}

export const GOD_PAIRS: GodLink[] = [
  {
    romanKo: "유피테르",
    romanLa: "Iuppiter",
    greekKo: "제우스",
    greekLa: "Zeus",
    note: "로마 국가와 하늘의 최고신으로 모셨고, 그리스 제우스의 이야기가 나중에 많이 겹쳤습니다.",
    pairSlug: "zeus-jupiter",
    godSlug: "zeus",
  },
  {
    romanKo: "유노",
    romanLa: "Iuno",
    greekKo: "헤라",
    greekLa: "Hera",
    note: "결혼과 여성, 로마 국가의 보호로 이야기됩니다.",
    pairSlug: "hera-juno",
    godSlug: "hera",
  },
  {
    romanKo: "네프투누스",
    romanLa: "Neptunus",
    greekKo: "포세이돈",
    greekLa: "Poseidon",
    note: "물과 바다의 신. 그리스 신화가 덧씌워진 짝입니다.",
    pairSlug: "poseidon-neptune",
    godSlug: "poseidon",
  },
  {
    romanKo: "케레스",
    romanLa: "Ceres",
    greekKo: "데메테르",
    greekLa: "Demeter",
    note: "곡물의 여신. 도시의 빵 문제와도 가깝게 모셨습니다.",
    pairSlug: "demeter-ceres",
    godSlug: "demeter",
  },
  {
    romanKo: "미네르바",
    romanLa: "Minerva",
    greekKo: "아테나",
    greekLa: "Athena",
    note: "기술과 전략. 로마에서는 수공업과도 가깝게 모셨습니다.",
    pairSlug: "athena-minerva",
    godSlug: "athena",
  },
  {
    romanKo: "아폴로",
    romanLa: "Apollo",
    greekKo: "아폴론",
    greekLa: "Apollon",
    note: "이름과 신화의 상당 부분이 그리스에서 그대로 들어왔습니다. 예언, 역병, 치유와 연결됩니다.",
    pairSlug: "apollo",
    godSlug: "apollo",
  },
  {
    romanKo: "디아나",
    romanLa: "Diana",
    greekKo: "아르테미스",
    greekLa: "Artemis",
    note: "사냥과 달, 젊은 여성과 연결되는 여신입니다.",
    pairSlug: "artemis-diana",
    godSlug: "artemis",
  },
  {
    romanKo: "마르스",
    romanLa: "Mars",
    greekKo: "아레스",
    greekLa: "Ares",
    note: "로마에서는 전쟁뿐 아니라 농경과 국가의 신에 가까웠습니다. 그리스의 아레스보다 공적 위상이 컸습니다.",
    pairSlug: "ares-mars",
    godSlug: "ares",
  },
  {
    romanKo: "베누스",
    romanLa: "Venus",
    greekKo: "아프로디테",
    greekLa: "Aphrodite",
    note: "사랑과 미. 율리우스 가문은 이 여신을 조상 쪽으로 연결해 선전했습니다. 클레오파트라 선전에도 이 이미지가 겹칩니다.",
    pairSlug: "aphrodite-venus",
    godSlug: "aphrodite",
  },
  {
    romanKo: "불카누스",
    romanLa: "Vulcanus",
    greekKo: "헤파이스토스",
    greekLa: "Hephaistos",
    note: "불과 대장간의 신입니다.",
    pairSlug: "hephaistos-vulcan",
    godSlug: "hephaistos",
  },
  {
    romanKo: "메르쿠리우스",
    romanLa: "Mercurius",
    greekKo: "헤르메스",
    greekLa: "Hermes",
    note: "교역, 길, 전령. 장사하는 도시의 신에 가깝습니다.",
    pairSlug: "hermes-mercury",
    godSlug: "hermes",
  },
  {
    romanKo: "바쿠스",
    romanLa: "Bacchus",
    greekKo: "디오니소스",
    greekLa: "Dionysos",
    note: "포도주와 황홀. 로마에는 리베르라는 오래된 이름도 있습니다. 안토니우스를 이 신에 빗댄 의식이 전해집니다.",
    pairSlug: "dionysos-bacchus",
    godSlug: "dionysos",
  },
  {
    romanKo: "베스타",
    romanLa: "Vesta",
    greekKo: "헤스티아",
    greekLa: "Hestia",
    note: "화로의 불. 베스타 여사제 제도는 그리스 짝과 별개로 로마의 특징입니다.",
    pairSlug: "hestia-vesta",
    godSlug: "hestia",
  },
  {
    romanKo: "플루톤",
    romanLa: "Pluto",
    greekKo: "하데스",
    greekLa: "Hades",
    note: "저승의 신. 디스라는 다른 이름도 있고, 로마에서는 이름을 직접 부르기 조심하기도 했습니다.",
    pairSlug: "hades-pluto",
    godSlug: "hades",
  },
  {
    romanKo: "사투르누스",
    romanLa: "Saturnus",
    greekKo: "크로노스",
    greekLa: "Kronos",
    note: "농경과 옛 황금시대 이야기. 그리스의 크로노스와 나중에 겹쳤습니다. 토성의 이름도 여기서 옵니다.",
    pairSlug: "kronos-saturn",
    godSlug: "kronos",
  },
  {
    romanKo: "쿠피도",
    romanLa: "Cupido",
    greekKo: "에로스",
    greekLa: "Eros",
    note: "사랑의 아이 신으로 이야기됩니다.",
    pairSlug: "eros-cupid",
    godSlug: "eros",
  },
  {
    romanKo: "프로세르피나",
    romanLa: "Proserpina",
    greekKo: "페르세포네",
    greekLa: "Persephone",
    note: "곡물의 딸이 저승으로 끌려갔다는 이야기와 연결됩니다.",
    pairSlug: "persephone-proserpina",
    godSlug: "persephone",
  },
  {
    romanKo: "헤르쿨레스",
    romanLa: "Hercules",
    greekKo: "헤라클레스",
    greekLa: "Herakles",
    note: "그리스 영웅의 로마 이름. 포룸 근처에서도 오래 모셨고, 상인의 수호로도 인기 있었습니다.",
    pairSlug: "herakles-hercules",
    godSlug: "herakles",
  },
];

export const ROMAN_ONLY: GodLink[] = [
  {
    romanKo: "야누스",
    romanLa: "Ianus",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "문과 시작의 신. 두 얼굴로 자주 그려지며, 로마의 고유한 숭배에 가깝습니다.",
    romanSlug: "janus",
  },
  {
    romanKo: "퀴리누스",
    romanLa: "Quirinus",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "로마 시민 공동체의 오래된 신. 후대에 로물루스와 같다고 보는 이야기가 생겼습니다. 처음부터 같은 존재는 아닙니다.",
    romanSlug: "quirinus",
  },
  {
    romanKo: "라레스",
    romanLa: "Lares",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "집과 길거리의 수호 정령. 집안 제사의 중심에 가깝습니다.",
    romanSlug: "lares",
  },
  {
    romanKo: "페나테스",
    romanLa: "Penates",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "식량 창고와 집안의 신. 국가의 페나테스 이야기도 따로 있습니다.",
    romanSlug: "penates",
  },
  {
    romanKo: "베스타 여사제",
    romanLa: "Virgines Vestales",
    greekKo: "베스타(헤스티아)의 사제",
    greekLa: "—",
    note: "신이 아니라, 국가의 불을 지키는 사제단입니다. 결혼하지 않는 예외적인 공적 역할이었습니다.",
    romanSlug: "vestales",
  },
  {
    romanKo: "벨로나",
    romanLa: "Bellona",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "전쟁의 여신. 마르스와 가깝지만 숭배는 별개입니다.",
    romanSlug: "bellona",
  },
  {
    romanKo: "포르투나",
    romanLa: "Fortuna",
    greekKo: "튀케와 비슷하게 말하기도 함",
    greekLa: "Tyche",
    note: "운과 행운. 도시와 황제의 운명과도 연결해 모셨습니다.",
    romanSlug: "fortuna",
  },
  {
    romanKo: "테르미누스",
    romanLa: "Terminus",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "경계돌의 신. 밭의 경계를 함부로 옮기지 못하게 하는 종교였습니다.",
    romanSlug: "terminus",
  },
  {
    romanKo: "플로라",
    romanLa: "Flora",
    greekKo: "뚜렷한 그리스 짝이 없음",
    greekLa: "—",
    note: "꽃과 봄. 축제 플로랄리아로 남아 있습니다.",
    romanSlug: "flora",
  },
];

export const STORY_LINKS = [
  {
    ko: "아이네아스",
    la: "Aeneas",
    note: "트로이 영웅으로, 로마 기원 설화의 먼 조상으로 이야기됩니다. 역사 인물이 아닙니다. 베르길리우스 《아이네이스》는 아우구스투스 시대의 서사시이고, 조상 이야기 자체는 그보다 이릅니다.",
    href: godHref("aineias"),
    label: "나두신화 · 아이네아스",
  },
];
