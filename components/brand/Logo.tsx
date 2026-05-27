import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className="relative z-20 flex flex-col items-center leading-none transition-opacity duration-300 hover:opacity-90"
      aria-label="Okanagan Lighting home"
    >
      <div className="-mb-4 flex h-12 w-44 justify-center sm:h-14 sm:w-52 md:h-16 md:w-60 lg:h-20 lg:w-72">
        <svg
          viewBox="240 285 1220 190"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ridgeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5200" stopOpacity="0" />
              <stop offset="18%" stopColor="#D99313" />
              <stop offset="50%" stopColor="#FFF4C2" />
              <stop offset="82%" stopColor="#D99313" />
              <stop offset="100%" stopColor="#8A5200" stopOpacity="0" />
            </linearGradient>

            <filter id="ridgeGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
  d="M250 386 C360 350, 475 326, 565 318 C642 312, 690 330, 760 318 C820 308, 860 280, 920 282 C990 284, 1050 318, 1202 326 C1285 328, 1355 340, 1450 388"
  fill="none"
  stroke="url(#ridgeGold)"
  strokeWidth="5"
  strokeLinecap="round"
  strokeLinejoin="round"
  filter="url(#ridgeGlow)"
/>

<path
  d="M250 386 C360 350, 475 326, 565 318 C642 312, 690 330, 760 318 C820 308, 860 280, 920 282 C990 284, 1050 318, 1202 326 C1285 328, 1355 340, 1450 388"
  fill="none"
  stroke="#FFE8A3"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
        </svg>
      </div>

      <div
        className={[
          "-mt-3 font-serif text-[18px] tracking-[0.31em] sm:text-[20px] md:text-[23px] lg:text-[28px]",
          footer
            ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,.08)]"
            : "text-[#2b2926] drop-shadow-[0_0_10px_rgba(43,41,38,.08)]",
        ].join(" ")}
      >
        OKANAGAN
      </div>

      <div className="mt-[2px] text-center text-[11px] tracking-[0.42em] text-[#D99A18] sm:text-[12px] md:text-[13px] lg:text-[15px]">
        LIGHTING
      </div>
    </Link>
  );
}