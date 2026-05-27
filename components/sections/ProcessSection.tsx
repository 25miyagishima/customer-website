import { SectionLabel } from "@/components/ui/SectionLabel";

const PROCESS_ITEMS = [
  {
    number: "01",
    title: "Walkthrough",
    text: "We walk the property together, listen carefully, and understand how you want the space to feel before moving into the planning stage.",
  },
  {
    number: "02",
    title: "Plan & Design",
    text: "Behind the scenes, each project is thoughtfully planned around the property, the surrounding environment, and the way the space will be experienced into the evening.",
  },
  {
    number: "03",
    title: "Installation",
    text: "With the planning complete, installation is handled carefully and efficiently with attention to the details that shape the final environment.",
  },
  {
    number: "04",
    title: "Refine",
    text: "We walk through the finished space together, making final refinements to ensure everything feels natural to the environment around it.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[#ebe4d8] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <SectionLabel>Process</SectionLabel>

          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Thoughtful planning from consultation to final refinement.
          </h2>
        </div>

        <div className="space-y-8">
          {PROCESS_ITEMS.map((item) => (
            <article
              key={item.number}
              className="grid gap-4 border-b border-[#d8d0c5] pb-7 md:grid-cols-[64px_1fr]"
            >
              <span className="text-sm text-[#83786c]">
                {item.number}
              </span>

              <div>
                <h3 className="text-2xl font-light text-[#24221f]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-[#625b52]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}