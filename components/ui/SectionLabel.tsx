import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm tracking-[0.16em] text-[#83786c]">{children}</p>;
}