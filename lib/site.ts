export const SITE_NAME = "로마이야기";
export const SITE_NAME_EN = "Rome Stories";
export const SITE_TAGLINE = "어려운 로마 역사, 짧은 한국어로";
export const SITE_SUB =
  "전설과 역사를 구분하고, 한 줄 요약과 핵심 세 가지로 먼저 읽은 뒤, 더 알고 싶을 때만 ‘조금만 더’를 엽니다. 어려운 말에는 쉬운 풀이를 붙이고, 고전 출처를 짧게 적습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rome-stories.vercel.app";

export const NADOO_MYTH_URL = "https://nadoo-myth.vercel.app";
export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const NAV = [
  { href: "/origins", label: "시대" },
  { href: "/map", label: "지도" },
  { href: "/rulers", label: "왕·황제" },
  { href: "/cleopatra", label: "클레오파트라" },
  { href: "/wars", label: "전쟁" },
  { href: "/daily", label: "일상" },
  { href: "/army", label: "군인" },
  { href: "/myth-links", label: "신화" },
  { href: "/sources", label: "출처" },
] as const;

export const HOME_MENUS = [
  {
    href: "/origins",
    en: "Origins",
    title: "로마의 탄생·시대",
    desc: "늑대와 쌍둥이는 전설입니다. 왕정, 공화정, 제정을 세기 단위로 봅니다.",
  },
  {
    href: "/map",
    en: "Map",
    title: "지도·지역",
    desc: "이탈리아에서 지중해로. 도시와 속주 카드가 전쟁·인물로 이어집니다.",
  },
  {
    href: "/rulers",
    en: "Rulers",
    title: "왕·황제",
    desc: "일곱 왕과 꼭 알아야 할 황제. 한 줄 요약 다음에 핵심 세 가지.",
  },
  {
    href: "/cleopatra",
    en: "Cleopatra",
    title: "클레오파트라와 로마",
    desc: "이집트 여왕과 카이사르, 안토니우스, 옥타비아누스. 신화 쪽 고리도 있습니다.",
  },
  {
    href: "/wars",
    en: "Wars",
    title: "전쟁",
    desc: "포에니 전쟁, 그리스·마케도니아, 갈리아, 내전, 게르만족. 원인·누구·결과.",
  },
  {
    href: "/daily",
    en: "Daily Life",
    title: "일상",
    desc: "밥, 집, 목욕, 포룸, 그리고 여성·남성·노예의 다른 자리.",
  },
  {
    href: "/army",
    en: "Army",
    title: "군인",
    desc: "군단 편제, 장비, 진영, 시민권으로 가는 길. 영화 속 제복과 다른 점.",
  },
  {
    href: "/myth-links",
    en: "Gods",
    title: "신과 전설 연결",
    desc: "유피테르와 제우스처럼 짝을 짓고, 나두신화의 해당 글로 넘어갑니다.",
  },
  {
    href: "/sources",
    en: "Sources",
    title: "출처",
    desc: "리비우스, 폴리비오스, 플루타르코스와 현대 개설서. 무엇을 조심할지도.",
  },
] as const;
