import { SectionLabel } from "@/components/ui/SectionLabel";

export function IntroSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Approach</SectionLabel>

          <h2 className="mt-4 max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Environments designed for the experiences we share.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#625b52]">
          <p>
            From residential properties and outdoor living spaces to wineries,
            breweries, and hospitality environments, lighting should support
            the atmosphere of a space without overpowering it.
          </p>

          <p>
            Every project is thoughtfully planned to feel natural to the
            environment around it, creating spaces that feel warm, balanced,
            and lived in.
          </p>
        </div>
      </div>
    </section>
  );
}