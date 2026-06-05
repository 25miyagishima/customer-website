import { SectionLabel } from "@/components/ui/SectionLabel";

export function IntroSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Approach</SectionLabel>

          <h2 className="mt-4 max-w-md text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Built on planning, communication, and craftsmanship.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#625b52]">
          <p>
            We believe better projects start with clear conversations and
            thoughtful preparation.
          </p>

          <p>
            By understanding how a property is used and what matters most to the
            people who live, work, or gather there, we can develop lighting
            solutions that feel intentional from the beginning.
          </p>

          <p>
            From consultation through installation, our goal is to create a
            professional experience that is organized, transparent, and focused
            on long-term results.
          </p>
        </div>
      </div>
    </section>
  );
}