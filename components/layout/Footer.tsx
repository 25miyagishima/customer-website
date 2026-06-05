import Link from "next/link";
import { footerLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="bg-[#161412] px-5 py-14 text-white md:px-8 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="max-w-2xl text-[18px] font-light leading-8 text-white/56 md:text-[19px]">
          Thoughtfully planned. Professionally installed.
        </p>

        <nav className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] uppercase tracking-[0.12em] text-white/34">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:text-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/28">
          Serving communities throughout the Okanagan.
        </p>

        <p className="mt-7 text-xs uppercase tracking-[0.16em] text-white/18">
          Okanagan Lighting
        </p>
      </div>
    </footer>
  );
}