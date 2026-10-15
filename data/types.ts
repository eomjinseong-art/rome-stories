export type Source = { work: string; ref?: string };

export type Kind = "legend" | "history" | "mixed";

export type LinkItem = { href: string; label: string };

export type Guide = {
  en: string;
  title: string;
  summary: string;
  points: readonly [string, string, string];
  more: readonly string[];
};

export type MovieTopic = "origins" | "rulers" | "cleopatra" | "wars" | "army" | "daily";

export type Movie = {
  slug: string;
  titleKo: string;
  titleOriginal: string;
  year: string;
  kind: "영화" | "시리즈";
  /** 작품이 그리는 시대의 시작 연도(기원전은 음수). 목록 정렬에만 씁니다. */
  eraYear: number;
  /** 카드에 보이는 시대 표시. 예: "기원전 73–71년 · 공화정 말기" */
  eraLabel: string;
  why: string;
  fiction: string;
  topics: readonly MovieTopic[];
  links: readonly LinkItem[];
};

export type Ruler = Guide & {
  slug: string;
  role: "king" | "emperor";
  nameKo: string;
  nameEn: string;
  latin: string;
  years: string;
  kind: Kind;
  sources: readonly Source[];
  movieSlugs: readonly string[];
  related: readonly LinkItem[];
};

export type War = Guide & {
  slug: string;
  years: string;
  cause: string;
  who: string;
  result: string;
  sources: readonly Source[];
  movieSlugs: readonly string[];
  related: readonly LinkItem[];
};

export type Place = Guide & {
  id: string;
  links?: readonly LinkItem[];
};

export type Region = {
  id: string;
  en: string;
  title: string;
  lead: string;
  places: readonly Place[];
};
