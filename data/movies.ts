import type { Movie, MovieTopic } from "@/data/types";

export const movies: readonly Movie[] = [
  {
    slug: "gladiator",
    titleKo: "글래디에이터",
    titleOriginal: "Gladiator",
    year: "2000",
    kind: "영화",
    eraYear: 180,
    eraLabel: "서기 180년 · 마르쿠스 아우렐리우스·코모두스 시대",
    why: "검투 경기와 황제·군대의 분위기를 한 번에 보여 줘서, 제정 로마를 처음 상상할 때 많이 찾는 영화입니다.",
    fiction: "주인공 막시무스는 실존 인물이 아닙니다. 마르쿠스 아우렐리우스는 영화처럼 아들에게 살해당한 것이 아니라 180년 전선 근처에서 병으로 죽었습니다. 코모두스가 검투를 좋아했다는 고대 기록은 있지만, 줄거리의 복수와 권력 다툼은 창작입니다.",
    topics: ["rulers", "army"],
    links: [
      { href: "/rulers/marcus-aurelius", label: "마르쿠스 아우렐리우스" },
      { href: "/army", label: "군인" },
      { href: "https://philosophy-stories.vercel.app/films#films-marcus-aurelius", label: "철학이야기에서 마르쿠스 아우렐리우스 영화 보기" },
      { href: "https://germanic-stories.vercel.app/films#gladiator-2000", label: "게르만이야기에서 오프닝의 게르마니아 전선 보기" },
    ],
  },
  {
    slug: "gladiator-ii",
    titleKo: "글래디에이터 Ⅱ",
    titleOriginal: "Gladiator II",
    year: "2024",
    kind: "영화",
    eraYear: 211,
    eraLabel: "서기 211년 무렵 · 카라칼라·게타 공동 통치",
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
    eraYear: -73,
    eraLabel: "기원전 73–71년 · 공화정 말기",
    why: "검투사 출신 노예들이 로마 군단과 맞선 전쟁(기원전 73–71년)이 어떤 이야기인지 감을 잡아 줍니다.",
    fiction: "스파르타쿠스가 트라키아 출신 검투사였다는 큰 줄기는 플루타르코스와 아피아누스에 나옵니다. 다만 그의 정치 강령, 개인적 인연, 최후의 말은 영화가 채운 부분입니다. 시신은 확인되지 않았고, 포로들이 길가에서 처형되었다는 기록과 영화의 결말을 똑같이 보면 안 됩니다.",
    topics: ["wars", "army"],
    links: [
      { href: "/wars#spartacus", label: "스파르타쿠스 반란" },
      { href: "/army", label: "군인" },
    ],
  },
  {
    slug: "cleopatra-1963",
    titleKo: "클레오파트라",
    titleOriginal: "Cleopatra",
    year: "1963",
    kind: "영화",
    eraYear: -48,
    eraLabel: "기원전 48–30년 · 공화정 말기",
    why: "카이사르, 안토니우스, 이집트, 악티움으로 이어지는 큰 그림을 화려한 화면으로 따라갈 수 있습니다.",
    fiction: "정치보다 연애가 앞에 놓입니다. 입성 장면의 규모나 대사는 고대 기록을 그대로 재연한 것이 아닙니다. 클레오파트라의 죽음도 영화가 고른 한 가지 버전일 뿐입니다. 역사 쪽 정리는 이 사이트의 클레오파트라 글을 보세요.",
    topics: ["cleopatra", "wars"],
    links: [
      { href: "/cleopatra", label: "클레오파트라와 로마" },
      { href: "/wars/actium", label: "악티움" },
      { href: "/rulers/augustus", label: "아우구스투스" },
      { href: "https://egypt-stories.vercel.app/movies#cleopatra-1963", label: "이집트이야기에서 클레오파트라 영화 보기" },
    ],
  },
  {
    slug: "ben-hur",
    titleKo: "벤허",
    titleOriginal: "Ben-Hur",
    year: "1959",
    kind: "영화",
    eraYear: 26,
    eraLabel: "서기 26–33년 무렵 · 티베리우스 시대",
    why: "전차 경기, 갤리선, 로마가 속주를 대하는 태도를 크게 상상하게 해 줍니다. 루 월리스의 소설을 바탕으로 합니다.",
    fiction: "유다 벤허는 실존 인물이 아닙니다. 바다 전투와 전차 경주는 극의 장치입니다. 티베리우스 시대 유대 지역과 로마 권력의 분위기를 보되, 사건 자체는 역사로 외우지 않는 편이 좋습니다. 2016년 리메이크보다 1959년 작품이 널리 알려진 제목입니다.",
    topics: ["daily", "wars"],
    links: [
      { href: "/daily", label: "일상" },
      { href: "/rulers/tiberius", label: "티베리우스" },
      { href: "https://the-chosen-korean.vercel.app/characters/pilate", label: "더 초즌에서 빌라도 보기" },
    ],
  },
  {
    slug: "quo-vadis",
    titleKo: "쿼 바디스",
    titleOriginal: "Quo Vadis",
    year: "1951",
    kind: "영화",
    eraYear: 64,
    eraLabel: "서기 64년 · 네로 시대",
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
    eraYear: -52,
    eraLabel: "기원전 52–30년 · 공화정 말기",
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
    eraYear: -24,
    eraLabel: "기원전 24년–서기 54년 · 아우구스투스~클라우디우스",
    why: "아우구스투스 집안이 어떻게 황제 자리를 물려받았는지, BBC 드라마로 따라갈 때 자주 언급됩니다. 로버트 그레이브스의 소설이 바탕입니다.",
    fiction: "수에토니우스와 타키투스의 가십에 기대어 궁정 암투를 매우 세게 그립니다. 독살과 음모의 상당수는 고대에도 소문이었고, 드라마는 그 소문을 사실처럼 이어 붙입니다. 클라우디우스의 영국 원정 같은 큰 사건은 본문 역사 글과 맞춰 보세요.",
    topics: ["rulers"],
    links: [
      { href: "/rulers/augustus", label: "아우구스투스" },
      { href: "/rulers/tiberius", label: "티베리우스" },
      { href: "/rulers/claudius", label: "클라우디우스" },
      { href: "/rulers/nero", label: "네로" },
      { href: "https://germanic-stories.vercel.app/films#i-claudius-1976", label: "게르만이야기에서 게르마니쿠스 쪽으로 보기" },
    ],
  },
  {
    slug: "fall-of-the-roman-empire",
    titleKo: "로마제국의 멸망",
    titleOriginal: "The Fall of the Roman Empire",
    year: "1964",
    kind: "영화",
    eraYear: 180,
    eraLabel: "서기 180년 이후 · 마르쿠스 아우렐리우스·코모두스 시대",
    why: "마르쿠스 아우렐리우스와 코모두스 시대를 다룬 큰 사극입니다. 뒤의 글래디에이터가 분위기와 설정을 일부 빌려 온 작품으로도 알려져 있습니다.",
    fiction: "제목과 달리 서로마가 끝난 476년을 다루지 않습니다. 황제의 죽음, 변경 부족과의 정치, 주인공의 역할은 극화되어 있습니다. 제국이 하루아침에 망했다는 인상은 역사와 다릅니다.",
    topics: ["rulers"],
    links: [
      { href: "/rulers/marcus-aurelius", label: "마르쿠스 아우렐리우스" },
      { href: "/origins#empire", label: "제정 시대" },
      { href: "https://germanic-stories.vercel.app/chronicle/marcomannic-war", label: "게르만이야기에서 마르코만니 전쟁 보기" },
      { href: "https://germanic-stories.vercel.app/films#fall-of-the-roman-empire-1964", label: "게르만이야기의 로마제국의 멸망 해설" },
    ],
  },
  {
    slug: "roman-empire-2016",
    titleKo: "로마 제국: 피로 물든 왕좌",
    titleOriginal: "Roman Empire",
    year: "2016–2019",
    kind: "시리즈",
    eraYear: -71,
    eraLabel: "기원전 71년–서기 192년 · 시즌별(카이사르·칼리굴라·코모두스)",
    why: "넷플릭스 다큐드라마. 시즌마다 한 사람을 다룹니다. 콤모두스(6화), 율리우스 카이사르(5화), 칼리굴라(4화). 극과 역사학자 인터뷰가 섞여 있습니다.",
    fiction: "큰 줄기는 카시우스 디오, 수에토니우스, 타키투스를 따릅니다. 다만 칼리굴라와 누이들의 근친, 클라우디우스가 암살을 승인했다는 장면처럼 소문이나 극의 해석을 사실처럼 보여 주는 곳이 있습니다. 넷플릭스 한국 제목은 ‘로마 제국’입니다.",
    topics: ["rulers", "cleopatra"],
    links: [
      { href: "/roman-empire", label: "회차 가이드 (전체 스포일러)" },
      { href: "/roman-empire/s1", label: "시즌 1 콤모두스" },
      { href: "/roman-empire/s2", label: "시즌 2 카이사르" },
      { href: "/roman-empire/s3", label: "시즌 3 칼리굴라" },
      { href: "https://nadoo-timeline.vercel.app/movies#roman-empire-2016", label: "나두연표에서 보기" },
    ],
  },
  {
    slug: "pompeii-2014",
    titleKo: "폼페이: 최후의 날",
    titleOriginal: "Pompeii",
    year: "2014",
    kind: "영화",
    eraYear: 79,
    eraLabel: "서기 79년 · 베수비오 분화",
    why: "서기 79년 베수비오 화산이 폼페이를 덮은 사건 자체를 떠올리게 합니다. 도시 생활의 배경을 크게 보고 싶을 때 거론됩니다.",
    fiction: "화산 폭발은 사실입니다. 소 플리니우스가 목격담을 편지에 남겼습니다. 폭발이 8월인지 가을인지는 최근 연구가 다시 따집니다. 검투사와 영주의 딸이 사랑에 빠진다는 줄거리는 창작이고, 폼페이는 수도 로마가 아니라 캄파니아의 도시입니다.",
    topics: ["daily"],
    links: [
      { href: "/map#campania", label: "폼페이와 캄파니아" },
      { href: "/daily", label: "일상" },
    ],
  },
  {
    slug: "last-legion",
    titleKo: "라스트 리전",
    titleOriginal: "The Last Legion",
    year: "2007",
    kind: "영화",
    eraYear: 476,
    eraLabel: "서기 476년 · 서로마 멸망(허구 모험담)",
    why: "서로마의 마지막 황제 로물루스 아우구스툴루스라는 이름을 영화에서 들어 봤다면, 그 인상이 어디서 왔는지 확인할 때 씁니다.",
    fiction: "역사와 거리가 멉니다. 476년 폐위된 소년 황제를 브리튼과 아서 왕 전설에 연결한 모험물입니다. 마지막 군단이 칼을 들고 영국으로 가 새 나라를 세웠다는 줄거리는 사료가 아닙니다. 서로마의 끝은 이 사이트의 시대 글을 기준으로 보세요.",
    topics: ["origins", "rulers"],
    links: [
      { href: "/origins#empire", label: "제정의 끝" },
      { href: "https://germanic-stories.vercel.app/chronicle/odoacer-476", label: "게르만이야기에서 오도아케르와 476년 보기" },
      { href: "https://germanic-stories.vercel.app/films#the-last-legion-2007", label: "게르만이야기의 라스트 리전 해설" },
    ],
  },
  {
    slug: "julius-caesar-1953",
    titleKo: "줄리어스 시저",
    titleOriginal: "Julius Caesar",
    year: "1953",
    kind: "영화",
    eraYear: -44,
    eraLabel: "기원전 44–42년 · 공화정 말기",
    why: "셰익스피어 희곡을 옮긴 영화입니다. 카이사르 암살 뒤 안토니우스의 장례 연설과 필리피 전투까지 이어집니다.",
    fiction: "대사는 셰익스피어의 창작입니다. 플루타르코스를 바탕으로 했지만 연설문은 사료가 아닙니다.",
    topics: ["wars"],
    links: [
      { href: "/generals/mark-antony", label: "장군: 안토니우스" },
      { href: "/wars/philippi", label: "필리피 전투" },
    ],
  },
  {
    slug: "hannibal-2006",
    titleKo: "한니발: 로마 최악의 악몽",
    titleOriginal: "Hannibal – Rome's Worst Nightmare",
    year: "2006",
    kind: "영화",
    eraYear: -218,
    eraLabel: "기원전 218–202년 · 제2차 포에니 전쟁",
    why: "BBC가 만든 다큐드라마 TV 영화입니다. 한니발의 알프스 횡단과 칸나이, 파비우스와 스키피오가 함께 나옵니다.",
    fiction: "재연 장면의 대사와 인물 감정은 극화입니다. 병력 숫자 등은 폴리비오스와 리비우스를 따르되 차이가 있습니다.",
    topics: ["wars"],
    links: [
      { href: "/wars/second-punic-war", label: "제2차 포에니 전쟁" },
      { href: "/generals/scipio-africanus", label: "장군: 스키피오" },
    ],
  },
  {
    slug: "scipione-1937",
    titleKo: "스키피오 아프리카누스",
    titleOriginal: "Scipione l'africano",
    year: "1937",
    kind: "영화",
    eraYear: -216,
    eraLabel: "기원전 216–202년 · 제2차 포에니 전쟁",
    why: "자마 전투를 크게 재연한 이탈리아 영화입니다. 고대 전투 영화사의 옛 자료로 남아 있습니다.",
    fiction: "당시 이탈리아 정권의 선전 목적이 강하게 들어간 작품입니다. 역사 해설로 보기보다 시대의 기록으로 봅니다.",
    topics: ["wars"],
    links: [{ href: "/generals/scipio-africanus", label: "장군: 스키피오" }],
  },
  {
    slug: "barbarians-2020",
    titleKo: "바바리안",
    titleOriginal: "Barbarians",
    year: "2020–2022",
    kind: "시리즈",
    eraYear: 9,
    eraLabel: "서기 9년 · 아우구스투스 시대(토이토부르크)",
    why: "토이토부르크 숲 전투를 게르만 쪽에서 그린 넷플릭스 독일 시리즈입니다. 바루스와 아르미니우스가 나옵니다.",
    fiction: "아르미니우스와 투스넬다, 가상의 인물 폴크빈의 관계는 크게 각색되었습니다. 로마군 대사가 라틴어인 점은 볼거리입니다.",
    topics: ["wars", "army"],
    links: [
      { href: "/generals/varus", label: "장군: 바루스" },
      { href: "/wars/teutoburg", label: "토이토부르크 숲 전투" },
      { href: "https://germanic-stories.vercel.app/barbarians", label: "게르만이야기의 바바리안 회차 해설" },
      { href: "https://germanic-stories.vercel.app/films#barbarians-2020", label: "게르만이야기 영화 해설" },
    ],
  },
  {
    slug: "attila-2001",
    titleKo: "아틸라",
    titleOriginal: "Attila",
    year: "2001",
    kind: "시리즈",
    eraYear: 434,
    eraLabel: "서기 434–453년 · 서로마 말기(아틸라)",
    why: "아틸라와 아이티우스의 맞대결을 그린 미국 TV 미니시리즈입니다. 카탈라우눔 평원 전투가 클라이맥스입니다.",
    fiction: "두 사람의 개인적 인연과 연애 이야기는 대부분 창작입니다.",
    topics: ["wars"],
    links: [
      { href: "/generals/aetius", label: "장군: 아이티우스" },
      { href: "/wars/catalaunian-plains", label: "카탈라우눔 평원 전투" },
      { href: "https://germanic-stories.vercel.app/films#attila-2001", label: "게르만이야기 영화 해설" },
    ],
  },
];

const bySlug = new Map(movies.map((movie) => [movie.slug, movie]));
const order = new Map(movies.map((movie, index) => [movie.slug, index]));

/** 작품이 그리는 시대 순(개봉 연도 아님). 같은 해는 원래 데이터 순서를 지킵니다. */
export function byEra(a: Movie, b: Movie) {
  return a.eraYear - b.eraYear || (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0);
}

export function sortMoviesByEra(list: readonly Movie[]): Movie[] {
  return [...list].sort(byEra);
}

/** 시대 순으로 정렬된 전체 목록. 원본 movies 배열은 그대로 둡니다(추가만). */
export const moviesByEra: readonly Movie[] = sortMoviesByEra(movies);

export type MovieEraGroup = { id: string; ko: string; en: string; from: number };

/** 시대 묶음 제목. from 이상인 마지막 묶음에 들어갑니다. */
export const MOVIE_ERA_GROUPS: readonly MovieEraGroup[] = [
  { id: "kingdom", ko: "왕정과 건국 전설", en: "Kingdom & founding legends", from: -10000 },
  { id: "republic", ko: "공화정 · 포에니 전쟁", en: "Republic & Punic Wars", from: -509 },
  { id: "late-republic", ko: "공화정 말기", en: "Late Republic", from: -133 },
  { id: "early-empire", ko: "제정 초기 · 율리우스-클라우디우스 왕조", en: "Early Empire", from: -27 },
  { id: "high-empire", ko: "제정 전성기 · 플라비우스 왕조~코모두스", en: "High Empire", from: 68 },
  { id: "middle-empire", ko: "세베루스 왕조와 3세기", en: "Severans & 3rd century", from: 193 },
  { id: "late-empire", ko: "제정 후기 · 서로마의 끝", en: "Late Empire", from: 395 },
];

export function movieEraGroup(movie: Movie): MovieEraGroup {
  let group = MOVIE_ERA_GROUPS[0];
  for (const g of MOVIE_ERA_GROUPS) if (movie.eraYear >= g.from) group = g;
  return group;
}

export function moviesGroupedByEra() {
  const groups: { group: MovieEraGroup; movies: Movie[] }[] = [];
  for (const movie of moviesByEra) {
    const group = movieEraGroup(movie);
    const last = groups[groups.length - 1];
    if (last && last.group.id === group.id) last.movies.push(movie);
    else groups.push({ group, movies: [movie] });
  }
  return groups;
}

export function moviesByTopic(topic: MovieTopic) {
  return moviesByEra.filter((movie) => movie.topics.includes(topic));
}

export function moviesBySlugs(slugs: readonly string[]) {
  return sortMoviesByEra(
    slugs.flatMap((slug) => {
      const movie = bySlug.get(slug);
      return movie ? [movie] : [];
    }),
  );
}

/** "/movies#slug" 링크 목록(지도·도시 탐험기)을 시대 순으로 정렬합니다. */
export function sortFilmLinksByEra<T extends { href: string }>(links: readonly T[]): T[] {
  const year = (href: string) => bySlug.get(href.split("#")[1] ?? "")?.eraYear ?? Number.MAX_SAFE_INTEGER;
  return links
    .map((link, index) => ({ link, index }))
    .sort((a, b) => year(a.link.href) - year(b.link.href) || a.index - b.index)
    .map(({ link }) => link);
}

export function withFilmsByEra<T extends { films: readonly { href: string }[] }>(pins: readonly T[]): T[] {
  return pins.map((pin) => ({ ...pin, films: sortFilmLinksByEra(pin.films) }));
}
