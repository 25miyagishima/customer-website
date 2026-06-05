"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { primaryNavItems } from "@/data/nav";

function NavigationLinks({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <>
      {primaryNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="transition hover:text-[#2b2926]"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e9e0d5]/70 bg-[#f7f3ed]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-9 text-sm text-[#6b645b] lg:flex"
          aria-label="Primary navigation"
        >
          <NavigationLinks />
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/consultation" className="px-5 py-2.5">
            Request a Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="shrink-0 rounded-full border border-[#ded4c8] p-2 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e9e0d5] bg-[#f7f3ed] px-5 py-5 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-4 text-[#4f4942]"
            aria-label="Mobile navigation"
          >
            <NavigationLinks onNavigate={() => setMenuOpen(false)} />

            <ButtonLink
              href="/consultation"
              variant="dark"
              className="mt-2 w-full"
            >
              Request a Consultation
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}