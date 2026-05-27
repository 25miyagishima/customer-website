"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const hospitalityAreas = [
  {
    title: "Tasting Rooms",
    text: "Warm, layered lighting that supports atmosphere, conversation, comfort, and the overall guest experience.",
  },
  {
    title: "Outdoor Patios",
    text: "Lighting designed for evening hospitality environments, outdoor gatherings, and seamless transitions into night.",
  },
  {
    title: "Pathways & Entry",
    text: "Subtle guidance lighting that supports movement through hospitality spaces without overpowering the property.",
  },
  {
    title: "Architectural Atmosphere",
    text: "Lighting that complements materials, landscape, architecture, and the feeling of the environment itself.",
  },
];

const processNotes = [
  "Understand how guests move through the property and how the hospitality environment changes from day into evening.",
  "Identify gathering areas, pathways, focal points, outdoor spaces, and areas where atmosphere matters most.",
  "Develop a lighting plan that supports the guest experience while complementing the architecture and landscape.",
];

function ButtonLink({
  href,
  children,
  showArrow = false,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  variant?: "dark" | "outline" | "gold";
}) {
  const classes = {
    dark: "bg-[#2b2926] text-white hover:bg-black focus-visible:ring-[#2b2926]/30",
    outline:
      "border border-[#d8d0c5] bg-transparent text-[#2b2926] hover:bg-[#eee8df] focus-visible:ring-[#2b2926]/20",
    gold: "bg-[#c6a66d] text-[#2b2926] hover:bg-[#d6b77f] focus-visible:ring-[#c6a66d]/40",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition focus:outline-none focus-visible:ring-4 ${classes[variant]}`}
    >
      {children}

      {showArrow && (
        <ArrowRight className="ml-2" size={17} aria-hidden="true" />
      )}
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm tracking-[0.16em] text-[#83786c]">
      {children}
    </p>
  );
}

function HospitalityPanel() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#1a120d] shadow-[0_30px_90px_rgba(24,18,12,0.16)]">
      <Image
        src="/images/hero/hero.jpg"
        alt="Warm winery and brewery hospitality lighting environment"
        fill
        sizes="(min-width: 1024px) 56vw, 100vw"
        className="scale-105 object-cover opacity-70 blur-[1px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/58 via-[#1b140f]/30 to-[#2b1d12]/58" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,102,0.12),transparent_55%)]" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
        <p className="text-sm tracking-[0.18em] text-[#d8b679]">
          Hospitality atmosphere
        </p>

        <p className="mt-4 max-w-md text-2xl font-light leading-snug text-white">
          Hospitality lighting should feel natural to the atmosphere guests
          experience throughout the evening.
        </p>
      </div>
    </div>
  );
}

export default function WineryBreweryLightingClient() {
  return (
    <PageShell>
      <section className="px-5 pb-20 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-12 inline-block text-sm text-[#7a7166] transition hover:text-[#2b2926]"
          >
            ← Back to Home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="text-sm tracking-[0.18em] text-[#8a7f73]">
                Okanagan · Winery & Brewery Lighting
              </p>

              <h1 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-7xl">
                Hospitality lighting designed around atmosphere and guest
                experience.
              </h1>

              <p className="mt-6 text-base leading-7 text-[#625b52] sm:text-lg sm:leading-8">
                Thoughtfully planned lighting for wineries, breweries, patios,
                tasting rooms, hospitality spaces, and evening environments
                throughout the Okanagan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ButtonLink href="/consultation" showArrow>
                  Consultation
                </ButtonLink>

                <ButtonLink href="#hospitality" variant="outline">
                  Explore Page
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <HospitalityPanel />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Designed around the way hospitality environments feel into the
            evening.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#625b52]">
            <p>
              Winery and brewery lighting should support atmosphere, comfort,
              movement, conversation, and the overall guest experience without
              overpowering the environment.
            </p>

            <p>
              From tasting rooms and patios to pathways, gathering spaces, and
              outdoor hospitality environments, lighting should feel layered,
              natural, and intentional.
            </p>
          </div>
        </div>
      </section>

      <section id="hospitality" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel>Hospitality Environments</SectionLabel>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
              Lighting for hospitality spaces, indoors and out.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {hospitalityAreas.map((item) => (
              <article
                key={item.title}
                className="border-t border-[#ded4c8] pt-7"
              >
                <h3 className="text-2xl font-light text-[#24221f]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#625b52]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}