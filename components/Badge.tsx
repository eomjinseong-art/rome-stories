import type { ReactNode } from "react";

const TONE = {
  stone: "border-line bg-stone text-muted",
  terra: "border-terra/30 bg-terra/10 text-terra",
  bronze: "border-bronze/30 bg-bronze/10 text-bronze",
} as const;

export function Badge({ children, tone = "stone" }: { children: ReactNode; tone?: keyof typeof TONE }) {
  return (
    <span className={`inline-block rounded-full border px-2 py-0.5 text-[11px] tracking-wide ${TONE[tone]}`}>
      {children}
    </span>
  );
}
