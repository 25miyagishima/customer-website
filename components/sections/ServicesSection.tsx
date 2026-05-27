import { SectionLabel } from "@/components/ui/SectionLabel";

const SERVICE_ITEMS = [
  {
    title: "Interior Lighting",
    text: "Designed to feel natural to the space throughout the day and into the evening.",
  },
  {
    title: "Outdoor Lighting",
    text: "Designed to complement landscapes and the way outdoor environments are experienced into the evening.",
  },
  {
    title: "Planning & Installation",
    text: "Thoughtful planning, organized installation, and lighting systems designed around long-term functionality and comfort.",
  },
];

export function ServicesSection() {
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
  );
}