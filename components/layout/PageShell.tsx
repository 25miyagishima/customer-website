import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#f5f1ea] text-[#2b2926]"
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
}