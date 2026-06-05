import { SectionLabel } from "@/components/ui/SectionLabel";

const PROCESS_ITEMS = [
  {
    number: "01",
    title: "Understand",
    text: "Every project begins with a conversation. We take time to understand the property, how the space is used, and what matters most to the people who live, work, or gather there.",
  },
  {
    number: "02",
    title: "Identify",
    text: "We evaluate opportunities, challenges, and areas where lighting can improve functionality, comfort, safety, atmosphere, or the overall experience of a space.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Before installation begins, we develop a clear lighting plan that aligns goals, expectations, budget, and long-term performance.",
  },
  {
    number: "04",
    title: "Install",
    text: "With a plan in place, we execute the work professionally, focusing on craftsmanship, communication, and attention to detail throughout the installation process.",
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

          <h2 className="mt-3 text-2xl font-light leading-tight tracking-[-0.03em] text-[#24221f] md:text-3xl">
            Better lighting starts with understanding the people, property, and goals behind every project.
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