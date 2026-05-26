"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type ServiceItem = {
  title: string;
  text: string;
};

type ProcessItem = {
  number: string;
  title: string;
  text: string;
};

type AtmosphereVariant = "hero" | "interior";

type ButtonVariant = "dark" | "gold" | "outline" | "outlineDark";

const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Service Area", href: "#areas" },
  { label: "Consultation", href: "/consultation" },
];

const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Interior Lighting",
    text: "Designed to feel natural to the space throughout the day and into the evening.",
  },
  {
    title: "Outdoor Lighting",
    text: "Designed to complement the landscape and the way outdoor spaces are experienced into the evening.",
  },
  {
    title: "Planning & Installation",
    text: "Thoughtful planning and organized installation from consultation through completion.",
  },
];

const PROCESS_ITEMS: ProcessItem[] = [
  {
    number: "01",
    title: "Walkthrough",
    text: "We walk the property together, listen carefully, and understand how you want the space to feel before moving into the planning stage.",
  },
  {
    number: "02",
    title: "Plan & Design",
    text: "Behind the scenes, each project is thoughtfully planned around the space, the surrounding environment, and how it is meant to feel.",
  },
  {
    number: "03",
    title: "Installation",
    text: "With the planning complete, installation is handled carefully and efficiently with attention to the details that shape the final environment.",
  },
  {
    number: "04",
    title: "Refine",
    text: "We walk through the finished space together, making final refinements to ensure everything feels natural to the environment around it.",
  },
];

const REGIONS = [
  "Penticton",
  "Summerland",
  "Peachland",
  "Kelowna",
  "Naramata",
  "Osoyoos",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const atmosphereImages: Record<AtmosphereVariant, string> = {
  hero: "/images/hero/hero.jpg",
  interior: "/images/hero/hero.jpg",
};

const portfolioImages = {
  primary: "/images/portfolio/port-1.jpg",
  secondary: "/images/portfolio/port-2.jpg",
};

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

function ButtonLink({
  href,
  children,
  variant = "dark",
  showArrow = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition focus:outline-none focus-visible:ring-4 ${buttonClasses[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="ml-2" size={17} aria-hidden="true" />
      )}
    </a>
  );
}

function Logo() {
  return (
    <a
      href="#top"
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
            d="M250 386
               C360 350, 475 326, 565 318
               C642 312, 690 330, 760 318
               C820 308, 860 280, 920 282
               C990 284, 1050 318, 1202 326
               C1285 328, 1355 340, 1450 388"
            fill="none"
            stroke="url(#ridgeGold)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ridgeGlow)"
          />

          <path
            d="M250 386
               C360 350, 475 326, 565 318
               C642 312, 690 330, 760 318
               C820 308, 860 280, 920 282
               C990 284, 1050 318, 1202 326
               C1285 328, 1355 340, 1450 388"
            fill="none"
            stroke="#FFE8A3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="-mt-3 font-serif text-[18px] tracking-[0.31em] text-[#2b2926] drop-shadow-[0_0_10px_rgba(43,41,38,.08)] sm:text-[20px] md:text-[23px] lg:text-[28px]">
        OKANAGAN
      </div>

      <div className="mt-[2px] text-center text-[11px] tracking-[0.42em] text-[#D99A18] sm:text-[12px] md:text-[13px] lg:text-[15px]">
        LIGHTING
      </div>
    </a>
  );
}

function AtmosphereImage({ variant = "hero" }: { variant?: AtmosphereVariant }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1a120d]">
      <Image
        src={atmosphereImages[variant]}
        alt="Warm Okanagan exterior lighting atmosphere"
        fill
        priority={variant === "hero"}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="scale-105 object-cover opacity-70 blur-[1px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-[#1b140f]/35 to-[#2b1d12]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,102,0.10),transparent_55%)]" />
    </div>
  );
}


function PortfolioImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1a120d]">
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="transition hover:text-[#2b2926]"
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm tracking-[0.16em] text-[#83786c]">{children}</p>;
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
            Consultation
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

function HeroSection() {
  return (
    <section className="px-5 pb-20 pt-32 sm:pt-36 md:px-8 md:pb-36 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-12 md:gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-[0.18em] text-[#8a7f73]">
            Okanagan · Indoor & Outdoor Lighting
          </p>

          <h1 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-7xl">
            Lighting design for Okanagan living.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#625b52] sm:text-lg sm:leading-8">
            Thoughtful indoor and outdoor lighting designed around atmosphere,
            comfort, and everyday living.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/consultation" showArrow>
              Consultation
            </ButtonLink>
            <ButtonLink href="#work" variant="outline">
              View Work
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] bg-[#cfc3b1] shadow-[0_30px_90px_rgba(24,18,12,0.16)] sm:rounded-[2.8rem] md:rounded-[3.4rem]"
        >
          <div className="aspect-[5/4]">
            <AtmosphereImage variant="hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
          Environments designed for the experiences we share.
        </h2>

        <div className="space-y-6 text-lg leading-8 text-[#625b52]">
          <p>
            Lighting should complement the atmosphere of a space without
            overpowering it.
          </p>
          <p>
            Every project is thoughtfully planned to feel natural to the
            environment around it, creating spaces that feel warm, balanced, and
            lived in.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Indoor and outdoor lighting, thoughtfully planned.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {SERVICE_ITEMS.map((item) => (
            <article key={item.title} className="border-t border-[#ded4c8] pt-7">
              <h3 className="text-2xl font-light text-[#24221f]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[#625b52]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="work" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Recent lighting environments.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625b52]">
            A growing collection of interiors, landscapes, patios, gathering
            spaces, and environments shaped through light.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] bg-[#d8c9b5] shadow-[0_24px_70px_rgba(24,18,12,0.08)]">
            <div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
              <PortfolioImage
                src={portfolioImages.primary}
                alt="Completed Okanagan lighting project"
              />
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] bg-[#cab9a1] shadow-[0_24px_70px_rgba(24,18,12,0.08)]">
              <div className="aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]">
                <PortfolioImage
                  src={portfolioImages.secondary}
                  alt="Architectural outdoor lighting project"
                />
              </div>
            </article>

            <div className="rounded-[2rem] border border-[#ddd3c6] bg-[#f1ebe3] p-8 md:p-10">
              <p className="text-sm tracking-[0.16em] text-[#83786c]">
                More environments coming soon
              </p>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#625b52]">
                The portfolio will continue to grow as new residential,
                hospitality, and outdoor lighting projects are completed across
                the Okanagan.
              </p>
              <ButtonLink
                href="/consultation"
                variant="outline"
                className="mt-7"
                showArrow
              >
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#ebe4d8] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Clear planning from consultation to installation.
          </h2>
        </div>

        <div className="space-y-8">
          {PROCESS_ITEMS.map((item) => (
            <article
              key={item.number}
              className="grid gap-4 border-b border-[#d8d0c5] pb-7 md:grid-cols-[64px_1fr]"
            >
              <span className="text-sm text-[#83786c]">{item.number}</span>
              <div>
                <h3 className="text-2xl font-light text-[#24221f]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-[#625b52]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section id="areas" className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <SectionLabel>Proudly serving</SectionLabel>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f] md:text-5xl">
              The Okanagan.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <div
                key={region}
                className="rounded-full border border-[#ded4c8] px-5 py-4 text-center text-[#4f4942]"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-36 pt-24 md:px-8 md:pb-40">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2b2926] px-7 py-14 text-center text-white shadow-[0_30px_90px_rgba(43,41,38,0.18)] md:rounded-[3rem] md:px-12 md:py-20">
        <p className="text-sm tracking-[0.16em] text-[#c6a66d]">Consultation</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-5xl font-light tracking-[-0.05em] md:text-6xl">
          Request a consultation.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
          Thoughtfully planned and professionally installed lighting environments
          built on years of hands-on electrical experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/consultation" variant="gold">
            Consultation
          </ButtonLink>
          <ButtonLink href="#services" variant="outlineDark">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e4ddd3] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-[#7a7166] md:flex-row">
        <p>© Okanagan Lighting</p>
        <p>Indoor lighting · Outdoor lighting · Lighting environments · Okanagan</p>
      </div>
    </footer>
  );
}

export default function OkanaganLightingWebsite() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#f5f1ea] text-[#2b2926]">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <ServiceAreaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
