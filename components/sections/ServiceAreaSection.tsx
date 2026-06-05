import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { regions } from "@/data/regions";

const cityRoutes: Record<string, string> = {
  Penticton: "/penticton-lighting",
  Summerland: "/summerland-lighting",
  Kelowna: "/kelowna-lighting",
  Naramata: "/naramata-lighting",
  Peachland: "/peachland-lighting",
  Osoyoos: "/osoyoos-lighting",
};

export function ServiceAreaSection() {
  return (
    <section id="areas" className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Proudly serving</SectionLabel>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f] md:text-5xl">
              Rooted in Summerland. Serving the Okanagan.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625b52]">
              Proudly based in Summerland, we serve homeowners, businesses, and
              hospitality spaces throughout the Okanagan.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-[#625b52]">
              Every project is an opportunity to build relationships, improve
              our craft, and contribute to the communities we call home.
            </p>
          </div>

          <div className="mt-2 grid max-w-2xl gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => {
              const href = cityRoutes[region];

              if (!href) {
                return (
                  <div
                    key={region}
                    className="rounded-full border border-[#ded4c8] px-9 py-5 text-center text-[15px] text-[#4f4942]"
                  >
                    {region}
                  </div>
                );
              }

              return (
                <Link
                  key={region}
                  href={href}
                  className="rounded-full border border-[#ded4c8] px-9 py-5 text-center text-[15px] text-[#4f4942] transition-colors duration-300 hover:bg-[#eee8df]"
                >
                  {region}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}