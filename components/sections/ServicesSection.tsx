import { SectionLabel } from "@/components/ui/SectionLabel";

const SERVICE_ITEMS = [
  {
    title: "Homes",
    text: "Lighting designed around daily living, comfort, and the way a property is experienced both inside and out.",
  },
  {
    title: "Outdoor Living",
    text: "Patios, pathways, gathering spaces, and landscapes that remain inviting, functional, and enjoyable long after the sun goes down.",
  },
  {
    title: "Hospitality Environments",
    text: "Lighting that helps create memorable guest experiences while supporting the character and purpose of the space.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Services</SectionLabel>

          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Where thoughtful lighting makes a difference.
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