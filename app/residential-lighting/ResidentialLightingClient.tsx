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

const residentialAreas = [
  {
    title: "Indoor Living Spaces",
    text: "Lighting designed to feel natural through daily routines, quiet evenings, and the way a home is lived in over time.",
  },
  {
    title: "Outdoor Living & Patios",
    text: "Warm layered lighting for patios, decks, seating areas, and outdoor spaces that carry naturally into the evening.",
  },
  {
    title: "Entry & Pathway Lighting",
    text: "Thoughtful lighting layouts that guide movement between entries, pathways, landscapes, and exterior areas without overpowering the property.",
  },
  {
    title: "Landscape Atmosphere",
    text: "Subtle lighting that supports the atmosphere, comfort, and natural character of the home.",
  },
];

const processNotes = [
  "Understand how the home, property, and outdoor spaces are used throughout the day and into the evening.",
  "Identify living areas, pathways, focal points, gathering spaces, and areas where comfort matters most.",
  "Plan a lighting layout that complements the property and supports the way the space is lived in over time.",
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
  return <p className="text-sm tracking-[0.16em] text-[#83786c]">{children}</p>;
}

function ResidentialPanel() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#1a120d] shadow-[0_30px_90px_rgba(24,18,12,0.16)]">
      <Image
        src="/images/hero/hero.jpg"
        alt="Warm residential lighting for an Okanagan home environment"
        fill
        sizes="(min-width: 1024px) 56vw, 100vw"
        className="scale-105 object-cover opacity-70 blur-[1px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/58 via-[#1b140f]/30 to-[#2b1d12]/58" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,102,0.12),transparent_55%)]" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
        <p className="text-sm tracking-[0.18em] text-[#d8b679]">
          Residential atmosphere
        </p>

        <p className="mt-4 max-w-md text-2xl font-light leading-snug text-white">
          Lighting should feel natural to the way a home is lived in from
          morning to night.
        </p>
      </div>
    </div>
  );
}

export default function ResidentialLightingClient() {
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
                Okanagan · Residential Lighting
              </p>

              <h1 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-7xl">
                Lighting designed around the way a home is lived in.
              </h1>

              <p className="mt-6 text-base leading-7 text-[#625b52] sm:text-lg sm:leading-8">
                Thoughtfully planned indoor and outdoor lighting for residential
                properties, patios, landscapes, gathering spaces, and home
                environments throughout the Okanagan.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ButtonLink href="/consultation" showArrow>
                  Consultation
                </ButtonLink>

                <ButtonLink href="#residential" variant="outline">
                  Explore Page
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <ResidentialPanel />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Designed around how home environments feel throughout the day and
            into the evening.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#625b52]">
            <p>
              Residential lighting should support the atmosphere of a home
              without overpowering the architecture, landscape, or the natural
              rhythm of the space.
            </p>

            <p>
              From interior living spaces, kitchens, and outdoor patios to
              pathways, landscapes, and gathering spaces, the goal is to create
              lighting that feels warm, balanced, and natural to your home.
            </p>
          </div>
        </div>
      </section>

      <section id="residential" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel>Residential Environments</SectionLabel>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
              Lighting for homes, indoors and out.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {residentialAreas.map((item) => (
              <article
                key={item.title}
                className="border-t border-[#ded4c8] pt-7"
              >
                <h3 className="text-2xl font-light text-[#24221f]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#625b52]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ebe4d8] px-5 py-24 text-[#2b2926] md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm tracking-[0.16em] text-[#C29552]">
              Planning Approach
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
              A thoughtful lighting plan for a home that feels comfortable over
              time.
            </h2>
          </div>

          <div className="space-y-8">
            {processNotes.map((item, index) => (
              <article
                key={item}
                className="grid gap-4 border-b border-[#d8d0c5] pb-7 md:grid-cols-[64px_1fr]"
              >
                <span className="text-sm text-[#C29552]">0{index + 1}</span>

                <p className="max-w-2xl text-xl font-light leading-8 text-[#625b52]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1ebe3] px-5 py-20 text-[#2b2926] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm tracking-[0.16em] text-[#C29552]">
              Serving the Okanagan
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f] md:text-5xl">
              Residential lighting designed around the way people live at home.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#625b52]">
              Thoughtfully planned indoor and outdoor lighting for residential
              properties, patios, landscapes, pathways, and gathering spaces
              throughout Penticton, Summerland, Peachland, Kelowna, West
              Kelowna, Naramata, and Osoyoos.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#101112] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] md:p-10">
            <p className="text-sm tracking-[0.16em] text-[#C29552]">
              Next step
            </p>

            <h3 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white md:text-4xl">
              Begin with the home, the feeling, and how each space is used.
            </h3>

            <p className="mt-5 leading-7 text-white/62">
              Share a few details about the property or home environment you are
              planning. We’ll review the details together and begin shaping a
              lighting plan around the way the space is lived in.
            </p>

            <div className="mt-8">
              <ButtonLink href="/consultation" variant="gold" showArrow>
                Request a Consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}