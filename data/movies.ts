import type { Movie, MovieTopic } from "@/data/types";

export const movies: readonly Movie[] = [
  {
    slug: "gladiator",
    titleKo: "글래디에이터",
    titleOriginal: "Gladiator",
    year: "2000",
    kind: "영화",
    why: "검투 경기와 황제·군대의 분위기를 한 번에 보여 줘서, 제정 로마를 처음 상상할 때 많이 찾는 영화입니다.",
    fiction: "주인공 막시무스는 실존 인물이 아닙니다. 마르쿠스 아우렐리우스는 영화처럼 아들에게 살해당한 것이 아니라 180년 전선 근처에서 병으로 죽었습니다. 코모두스가 검투를 좋아했다는 고대 기록은 있지만, 줄거리의 복수와 권력 다툼은 창작입니다.",
    topics: ["rulers", "army"],
    links: [
      { href: "/rulers/marcus-aurelius", label: "마르쿠스 아우렐리우스" },
      { href: "/army", label: "군인" },
    ],
  },
  {
    slug: "gladiator-ii",
    titleKo: "글래디에이터 Ⅱ",
    titleOriginal: "Gladiator II",
    year: "2024",
    kind: "영화",
    why: "콜로세움과 쌍둥이 황제 시대의 소란한 로마를 크게 보여 줍니다. 전편의 세계를 이어서 보고 싶을 때 고릅니다.",
    fiction: "카라칼라와 게타가 함께 황제였던 짧은 시기(211년 무렵)를 빌리지만, 인물과 사건은 대부분 창작입니다. 해전을 경기장에 재현하는 장면도 고대에 비슷한 구경거리가 있었다는 기록과, 영화의 스펙터클을 구분해야 합니다.",
    topics: ["rulers"],
    links: [{ href: "/rulers", label: "왕·황제" }],
  },
  {
    slug: "spartacus",
    titleKo: "스파르타쿠스",
    titleOriginal: "Spartacus",
    year: "1960",
    kind: "영화",
    why: "검투사 출신 노예들이 로마 군단과 맞선 전쟁(기원전 73–71년)이 어떤 이야기인지 감을 잡아 줍니다.",
    fiction: "스파르타쿠스가 트라키아 출신 검투사였다는 큰 줄기는 플루타르코스와 아피아누스에 나옵니다. 다만 그의 정치 강령, 개인적 인연, 최후의 말은 영화가 채운 부분입니다. 시신은 확인되지 않았고, 포로들이 길가에서 처형되었다는 기록과 영화의 결말을 똑같이 보면 안 됩니다.",
    topics: ["wars", "army"],
    links: [
      { href: "/wars", label: "전쟁" },
      { href: "/army", label: "군인" },
    ],
  },
  {
    slug: "cleopatra-1963",
    titleKo: "클레오파트라",
    titleOriginal: "Cleopatra",
    year: "1963",
    kind: "영화",
    why: "카이사르, 안토니우스, 이집트, 악티움으로 이어지는 큰 그림을 화려한 화면으로 따라갈 수 있습니다.",
    fiction: "정치보다 연애가 앞에 놓입니다. 입성 장면의 규모나 대사는 고대 기록을 그대로 재연한 것이 아닙니다. 클레오파트라의 죽음도 영화가 고른 한 가지 버전일 뿐입니다. 역사 쪽 정리는 이 사이트의 클레오파트라 글을 보세요.",
    topics: ["cleopatra", "wars"],
    links: [
      { href: "/cleopatra", label: "클레오파트라와 로마" },
      { href: "/wars/actium", label: "악티움" },
      { href: "/rulers/augustus", label: "아우구스투스" },
    ],
  },
  {
    slug: "ben-hur",
    titleKo: "벤허",
    titleOriginal: "Ben-Hur",
    year: "1959",
    kind: "영화",
    why: "전차 경기, 갤리선, 로마가 속주를 대하는 태도를 크게 상상하게 해 줍니다. 루 월리스의 소설을 바탕으로 합니다.",
    fiction: "유다 벤허는 실존 인물이 아닙니다. 바다 전투와 전차 경주는 극의 장치입니다. 티베리우스 시대 유대 지역과 로마 권력의 분위기를 보되, 사건 자체는 역사로 외우지 않는 편이 좋습니다. 2016년 리메이크보다 1959년 작품이 널리 알려진 제목입니다.",
    topics: ["daily", "wars"],
    links: [
      { href: "/daily", label: "일상" },
      { href: "/rulers/tiberius", label: "티베리우스" },
    ],
  },
  {
    slug: "quo-vadis",
    titleKo: "쿼 바디스",
    titleOriginal: "Quo Vadis",
    year: "1951",
    kind: "영화",
    why: "네로 시대의 대화재와 그리스도교 박해 이야기를 영화로 만날 때 자주 거론되는 작품입니다. 시엔키에비치의 소설이 원작입니다.",
    fiction: "타키투스는 64년 대화재와, 네로가 그리스도교인에게 책임을 돌렸다는 기록을 남겼습니다. 영화의 연애와 음모는 소설의 창작입니다. 네로가 바이올린을 켰다는 이미지는 맞지 않습니다. 당시 그 악기는 없었고, 고대 소문은 리라(작은 현악기) 쪽입니다. 베드로가 로마로 돌아섰다는 ‘쿼 바디스’ 일화는 타키투스의 역사가 아니라 후대 그리스도교 전승입니다.",
    topics: ["rulers", "daily"],
    links: [
      { href: "/rulers/nero", label: "네로" },
      { href: "/daily", label: "일상" },
    ],
  },
  {
    slug: "rome-hbo",
    titleKo: "로마",
    titleOriginal: "Rome",
    year: "2005–2007",
    kind: "시리즈",
    why: "카이사르부터 아우구스투스 직전까지, 공화정 말의 정치와 거리의 생활을 시리즈로 보여 줍니다. HBO와 BBC가 만들었습니다.",
    fiction: "병사 보레누스와 풀로는 카이사르의 갈리아 전쟁기에 이름이 한 번 나오지만, 드라마 속 그들의 삶은 창작입니다. 원로원 정치의 결은 참고가 되어도, 누가 누구와 밀담했는지는 극본입니다. 왕정 시대나 포에니 전쟁은 다루지 않습니다.",
    topics: ["origins", "rulers", "cleopatra", "wars"],
    links: [
      { href: "/wars/gallic-war", label: "갈리아 전쟁" },
      { href: "/wars/caesar-civil-war", label: "카이사르의 내전" },
      { href: "/cleopatra", label: "클레오파트라" },
      { href: "/rulers/augustus", label: "아우구스투스" },
    ],
  },
  {
    slug: "i-claudius",
    titleKo: "나, 클라우디우스",
    titleOriginal: "I, Claudius",
    year: "1976",
    kind: "시리즈",
    why: "아우구스투스 집안이 어떻게 황제 자리를 물려받았는지, BBC 드라마로 따라갈 때 자주 언급됩니다. 로버트 그레이브스의 소설이 바탕입니다.",
    fiction: "수에토니우스와 타키투스의 가십에 기대어 궁정 암투를 매우 세게 그립니다. 독살과 음모의 상당수는 고대에도 소문이었고, 드라마는 그 소문을 사실처럼 이어 붙입니다. 클라우디우스의 영국 원정 같은 큰 사건은 본문 역사 글과 맞춰 보세요.",
    topics: ["rulers"],
    links: [
      { href: "/rulers/augustus", label: "아우구스투스" },
      { href: "/rulers/tiberius", label: "티베리우스" },
      { href: "/rulers/claudius", label: "클라우디우스" },
      { href: "/rulers/nero", label: "네로" },
    ],
  },
  {
    slug: "fall-of-the-roman-empire",
    titleKo: "로마제국의 멸망",
    titleOriginal: "The Fall of the Roman Empire",
    year: "1964",
    kind: "영화",
    why: "마르쿠스 아우렐리우스와 코모두스 시대를 다룬 큰 사극입니다. 뒤의 글래디에이터가 분위기와 설정을 일부 빌려 온 작품으로도 알려져 있습니다.",
    fiction: "제목과 달리 서로마가 끝난 476년을 다루지 않습니다. 황제의 죽음, 변경 부족과의 정치, 주인공의 역할은 극화되어 있습니다. 제국이 하루아침에 망했다는 인상은 역사와 다릅니다.",
    topics: ["rulers"],
    links: [
      { href: "/rulers/marcus-aurelius", label: "마르쿠스 아우렐리우스" },
      { href: "/origins", label: "시대 구분" },
    ],
  },
  {
    slug: "pompeii-2014",
    titleKo: "폼페이: 최후의 날",
    titleOriginal: "Pompeii",
    year: "2014",
    kind: "영화",
    why: "서기 79년 베수비오 화산이 폼페이를 덮은 사건 자체를 떠올리게 합니다. 도시 생활의 배경을 크게 보고 싶을 때 거론됩니다.",
    fiction: "화산 폭발은 사실입니다. 소 플리니우스가 목격담을 편지에 남겼습니다. 폭발이 8월인지 가을인지는 최근 연구가 다시 따집니다. 검투사와 영주의 딸이 사랑에 빠진다는 줄거리는 창작이고, 폼페이는 수도 로마가 아니라 캄파니아의 도시입니다.",
    topics: ["daily"],
    links: [{ href: "/daily", label: "일상" }],
  },
  {
    slug: "last-legion",
    titleKo: "라스트 리전",
    titleOriginal: "The Last Legion",
    year: "2007",
    kind: "영화",
    why: "서로마의 마지막 황제 로물루스 아우구스툴루스라는 이름을 영화에서 들어 봤다면, 그 인상이 어디서 왔는지 확인할 때 씁니다.",
    fiction: "역사와 거리가 멉니다. 476년 폐위된 소년 황제를 브리튼과 아서 왕 전설에 연결한 모험물입니다. 마지막 군단이 칼을 들고 영국으로 가 새 나라를 세웠다는 줄거리는 사료가 아닙니다. 서로마의 끝은 이 사이트의 시대 글을 기준으로 보세요.",
    topics: ["origins", "rulers"],
    links: [{ href: "/origins", label: "로마의 탄생·시대" }],
  },
];

const bySlug = new Map(movies.map((movie) => [movie.slug, movie]));

export function moviesByTopic(topic: MovieTopic) {
  return movies.filter((movie) => movie.topics.includes(topic));
}

export function moviesBySlugs(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const movie = bySlug.get(slug);
    return movie ? [movie] : [];
  });
}
