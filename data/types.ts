export type Cite = { work: string; ref?: string };

export type Certainty = "legend" | "traditional" | "historical";

export type RulerKind = "king" | "dictator" | "emperor";

export type TopicBlock = {
  id: string;
  kicker?: string;
  title: string;
  summary: string;
  points: string[];
  more?: string[];
  sources?: Cite[];
};

export type Ruler = {
  slug: string;
  ko: string;
  en: string;
  latin: string;
  years: string;
  role: string;
  kind: RulerKind;
  certainty: Certainty;
  summary: string;
  points: string[];
  more: string[];
  sources: Cite[];
};

export type War = {
  slug: string;
  ko: string;
  en: string;
  years: string;
  summary: string;
  cause: string;
  who: string;
  result: string;
  more: string[];
  related: { href: string; label: string }[];
  sources: Cite[];
};

export type Place = {
  slug: string;
  ko: string;
  latin: string;
  en: string;
  summary: string;
  points: string[];
  more?: string[];
  links: { href: string; label: string }[];
  x: number;
  y: number;
  labelSide?: "left" | "right";
  onMap?: boolean;
};
