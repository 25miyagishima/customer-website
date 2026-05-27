import { SectionLabel } from "@/components/ui/SectionLabel";
import { regions } from "@/data/regions";

export function ServiceAreaSection() {
  return (
    <section id="areas" className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Proudly serving</SectionLabel>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f] md:text-5xl">
              The Okanagan.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625b52]">
              Thoughtfully designed lighting for residential properties,
              outdoor living spaces, wineries, breweries, and hospitality
              settings throughout the Okanagan.
            </p>
          </div>

          <div className="mt-2 grid max-w-2xl gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div
                key={region}
                className="rounded-full border border-[#ded4c8] px-9 py-5 text-center text-[15px] text-[#4f4942] transition-colors duration-300 hover:bg-[#eee8df]"
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