"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Warm Exterior Atmosphere",
    category: "Residential Landscape Lighting",
    image: "/images/portfolio/port-1.jpg",
    description:
      "A layered exterior lighting approach designed to create warmth, depth, and a calm evening atmosphere around the property.",
  },
  {
    title: "Architectural Outdoor Living",
    category: "Patio / Outdoor Living",
    image: "/images/portfolio/port-2.jpg",
    description:
      "Subtle lighting planned around gathering areas, pathways, and architectural details to support both function and mood.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090A] text-white">
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,149,82,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_32%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-white/60 transition hover:text-white sm:mb-10"
          >
            ← Back to Home
          </Link>

          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#C29552] sm:text-sm sm:tracking-[0.35em]">
              Portfolio
            </p>

            <h1 className="max-w-3xl text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Lighting environments shaped with intention.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              A small collection of project imagery showing the atmosphere,
              restraint, and architectural warmth behind the Okanagan Lighting
              approach.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] sm:rounded-[2rem]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={`${project.title} project image`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#C29552] sm:text-xs sm:tracking-[0.28em]">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-light">{project.title}</h2>

                <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:rounded-[2rem] sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-[#C29552] sm:text-sm sm:tracking-[0.3em]">
              Start Planning
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-light leading-tight sm:text-4xl">
              Have a property that needs thoughtful lighting?
            </h2>
          </div>

          <Link
            href="/consultation"
            className="inline-flex w-full justify-center rounded-full bg-[#C29552] px-7 py-4 text-sm font-medium text-black transition hover:bg-[#d8ae6b] sm:w-auto"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
