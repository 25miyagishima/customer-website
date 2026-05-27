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

const outdoorAreas = [
  {
    title: "Patios & Outdoor Living",
    text: "Warm layered lighting designed for gathering spaces, outdoor dining, relaxation, and evenings outside.",
  },
  {
    title: "Pathways & Landscape",
    text: "Subtle guidance lighting that supports movement through pathways, gardens, and exterior spaces without overpowering the property.",
  },
  {
    title: "Architectural Exterior",
    text: "Lighting that complements architecture, materials, textures, and the natural atmosphere of the home.",
  },
  {
    title: "Evening Atmosphere",
    text: "Outdoor lighting should feel calm, balanced, and natural to the environment throughout the evening.",
  },
];

const processNotes = [
  "Understand how outdoor spaces are used from sunset into the evening.",
  "Identify gathering areas, pathways, focal points, architecture, and landscape features that shape the environment.",
  "Develop a layered lighting plan that supports comfort, atmosphere, and movement throughout the property.",
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

function OutdoorPanel() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#1a120d] shadow-[0_30px_90px_rgba(24,18,12,0.16)]">
      <Image
        src="/images/hero/hero.jpg"
        alt="Outdoor lighting atmosphere overlooking the Okanagan"
        fill
        sizes="(min-width: 1024px) 56vw, 100vw"
        className="scale-105 object-cover opacity-70 blur-[1px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/58 via-[#1b140f]/30 to-[#2b1d12]/58" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,102,0.12),transparent_55%)]" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
        <p className="text-sm tracking-[0.18em] text-[#d8b679]">
          Outdoor atmosphere
        </p>

        <p className="mt-4 max-w-md text-2xl font-light leading-snug text-white">
          Outdoor lighting should feel natural to the environment from sunset
          into the evening.
        </p>
      </div>
    </div>
  );
}

export default function OutdoorLightingClient() {
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
                Okanagan · Outdoor Lighting
              </p>

              <h1 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-7xl">
                Outdoor lighting designed around atmosphere and evening living.
              </h1>

              <p className="mt-6 text-base leading-7 text-[#625b52] sm:text-lg sm:leading-8">
                Thoughtfully planned outdoor lighting for patios, pathways,
                landscapes, gathering spaces, and exterior environments
                throughout the Okanagan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ButtonLink href="/consultation" showArrow>
                  Consultation
                </ButtonLink>

                <ButtonLink href="#outdoor" variant="outline">
                  Explore Page
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <OutdoorPanel />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Designed around how outdoor environments feel into the evening.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#625b52]">
            <p>
              Outdoor lighting should support atmosphere, comfort, movement,
              and the natural character of the property without overpowering the
              environment.
            </p>

            <p>
              From patios and pathways to landscapes, gathering spaces, and
              architectural exteriors, lighting should feel warm, layered, and
              intentional throughout the evening.
            </p>
          </div>
        </div>
      </section>

      <section id="outdoor" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel>Outdoor Environments</SectionLabel>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
              Lighting for outdoor spaces and evening environments.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {outdoorAreas.map((item) => (
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