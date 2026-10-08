export const SITE_NAME = "로마이야기";
export const SITE_NAME_EN = "Rome Stories";
export const SITE_TAGLINE = "어려운 로마 역사를, 짧은 한국어로";
export const SITE_SUB =
  "왕정·공화정·제정, 전쟁과 황제, 평범한 사람의 하루를 전설과 역사를 구분해 적습니다. 어려운 말에는 쉬운 풀이를 붙입니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rome-stories.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const SISTER_SITES = [
  { href: "https://nadoo-myth.vercel.app", label: "나두신화", en: "Myth" },
  { href: "https://iliad-stories.vercel.app", label: "일리아스이야기", en: "Iliad" },
  { href: "https://greece-stories.vercel.app", label: "그리스이야기", en: "Greece" },
  { href: "https://egypt-stories.vercel.app", label: "이집트이야기", en: "Egypt" },
  { href: "https://persia-stories.vercel.app", label: "페르시아이야기", en: "Persia" },
  { href: "https://the-chosen-korean.vercel.app", label: "더 초즌 · 성경", en: "The Chosen · Bible" },
  { href: "https://philosophy-stories.vercel.app", label: "철학이야기", en: "Philosophy" },
  { href: "https://korea-stories.vercel.app", label: "대한민국이야기", en: "Korea" },
  { href: "https://nadoo-timeline.vercel.app", label: "나두연표", en: "Timeline" },
  { href: "https://tinalinkeom.vercel.app", label: "나두 허브", en: "Nadoo Hub" },
] as const;

const myth = SISTER_SITES[0];
export const MYTH_URL = myth.href;
export const MYTH_NAME = myth.label;

/** Sister origins a build-time link check may name. Do not fetch them: 일리아스이야기는 병행 배포 중이라 404여도 빌드가 실패하면 안 됩니다. */
export const ALLOWED_SISTER_ORIGINS = SISTER_SITES.map((site) => new URL(site.href).origin);

export const OTHER_FAMILY_TREES = [
  { href: "https://greece-stories.vercel.app/family-tree", label: "그리스이야기 가족관계도", en: "Greece" },
  { href: "https://egypt-stories.vercel.app/family-tree", label: "이집트이야기 가족관계도", en: "Egypt" },
  { href: "https://persia-stories.vercel.app/family-tree", label: "페르시아이야기 가족관계도", en: "Persia" },
  { href: "https://korea-stories.vercel.app/family-tree", label: "대한민국이야기 가족관계도", en: "Korea" },
  { href: "https://nadoo-myth.vercel.app/family-tree", label: "나두신화 가족관계도", en: "Myth" },
  { href: "https://the-chosen-korean.vercel.app/family-tree", label: "더 초즌 · 성경 가족관계도", en: "The Chosen · Bible" },
] as const;

export const OTHER_FILM_PAGES = [
  { href: "https://greece-stories.vercel.app/movies", label: "그리스이야기 영화", en: "Greece" },
  { href: "https://egypt-stories.vercel.app/movies", label: "이집트이야기 영화", en: "Egypt" },
  { href: "https://persia-stories.vercel.app/movies", label: "페르시아이야기 영화", en: "Persia" },
  { href: "https://korea-stories.vercel.app/films", label: "대한민국이야기 영화", en: "Korea" },
  { href: "https://philosophy-stories.vercel.app/films", label: "철학이야기 영화", en: "Philosophy" },
  { href: "https://nadoo-myth.vercel.app/in-media", label: "나두신화에서 영화 보기", en: "Myth" },
  { href: "https://the-chosen-korean.vercel.app/together", label: "더 초즌에서 함께 보기", en: "The Chosen · Bible" },
] as const;

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const NAV = [
  { href: "/origins", label: "탄생·시대" },
  { href: "/map", label: "지도·지역" },
  { href: "/rulers", label: "왕·황제" },
  { href: "/family-tree", label: "가족관계도" },
  { href: "/cleopatra", label: "클레오파트라" },
  { href: "/wars", label: "전쟁" },
  { href: "/daily", label: "일상" },
  { href: "/army", label: "군인" },
  { href: "/myth-links", label: "신과 전설" },
  { href: "/movies", label: "영화" },
  { href: "/sources", label: "출처" },
] as const;

export const HOME_SECTIONS = [
  {
    href: "/origins",
    en: "Origins",
    title: "로마의 탄생·시대",
    desc: "늑대와 쌍둥이는 전설입니다. 왕정에서 공화정, 제정으로 넘어가는 큰 시간표를 먼저 잡습니다.",
  },
  {
    href: "/map",
    en: "Places",
    title: "지도·지역",
    desc: "이탈리아의 작은 도시가 지중해 연안과 유럽의 변경까지 손을 뻗친 길을 지역 카드로 봅니다.",
  },
  {
    href: "/rulers",
    en: "Rulers",
    title: "왕·황제",
    desc: "전승 속 왕 일곱 사람과, 제정을 이해하는 데 필요한 황제 열 사람. 전체 명단은 아닙니다.",
  },
  {
    href: "/family-tree",
    en: "Family Tree",
    title: "가족관계도",
    desc: "전설의 왕가와 황제 가문. 혈연은 금색 실선, 로마에서 흔했던 입양은 금색 점선으로 나눕니다.",
  },
  {
    href: "/cleopatra",
    en: "Cleopatra",
    title: "클레오파트라와 로마",
    desc: "사랑 이야기 이전에, 이집트의 곡물과 로마 장군들의 권력 다툼이 있었습니다.",
  },
  {
    href: "/wars",
    en: "Wars",
    title: "전쟁",
    desc: "왜 싸웠는지, 누가 싸웠는지, 끝나서 무엇이 바뀌었는지를 전쟁마다 세 칸으로 적습니다.",
  },
  {
    href: "/daily",
    en: "Daily Life",
    title: "일상",
    desc: "밥, 집, 목욕, 포룸, 사람의 자리. 영화의 연회가 아니라 대부분 사람의 하루에 가깝게.",
  },
  {
    href: "/army",
    en: "Army",
    title: "군인",
    desc: "군단이 무엇인지, 무엇을 들고 다녔는지, 하룻밤 진영을 어떻게 쳤는지.",
  },
  {
    href: "/myth-links",
    en: "Gods",
    title: "신과 전설 연결",
    desc: "로마 신과 그리스 신을 짝짓고, 이야기 자체는 나두신화로 넘어가 읽습니다.",
  },
  {
    href: "/movies",
    en: "Films",
    title: "관련 영화",
    desc: "글래디에이터, 클레오파트라, 벤허처럼 로마를 배경으로 한 작품. 어디가 창작인지도 함께.",
  },
  {
    href: "/sources",
    en: "Sources",
    title: "출처",
    desc: "리비우스, 폴리비오스, 플루타르코스와 현대 연구서. 이 사이트가 문장을 지어내지 않는 기준.",
  },
] as const;
