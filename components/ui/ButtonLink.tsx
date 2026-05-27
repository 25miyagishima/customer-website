import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "dark" | "gold" | "outline" | "outlineDark";

const buttonClasses: Record<ButtonVariant, string> = {
  dark:
    "bg-[#2b2926] text-white hover:bg-black focus-visible:ring-[#2b2926]/30",
  gold:
    "bg-[#c6a66d] text-[#2b2926] hover:bg-[#d6b77f] focus-visible:ring-[#c6a66d]/40",
  outline:
    "border border-[#d8d0c5] bg-transparent text-[#2b2926] hover:bg-[#eee8df] focus-visible:ring-[#2b2926]/20",
  outlineDark:
    "border border-white/25 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/30",
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  showArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition focus:outline-none focus-visible:ring-4 ${buttonClasses[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="ml-2" size={17} aria-hidden="true" />
      )}
    </Link>
  );
}