import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  Lightbulb,
  MapPin,
} from "lucide-react";

type PropertyType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type CityPageData = {
  city: string;
  province: string;

  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  intro: {
    title: string;
    paragraphs: readonly string[];
  };

  propertyTypes: readonly PropertyType[];

  services: readonly string[];

  context: {
    title: string;
    text: string;
  };

  faqs: readonly FAQ[];
};

export function CityPageTemplate({
  page,
}: {
  page: CityPageData;
}) {
  return (
    <main className="bg-[#f5f1ea] text-[#2b2926]">
      <section className="relative overflow-hidden border-b border-[#e5ddd2] px-5 py-24 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,113,108,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(214,177,104,0.06),transparent_28%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ddd3c8] bg-white/60 px-4 py-2 text-sm text-[#625b52] backdrop-blur">
            <MapPin className="h-4 w-4" />
            {page.city}, {page.province}
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7b746d]">
              {page.hero.eyebrow}
            </p>

            <h1 className="text-4xl font-light tracking-[-0.05em] text-[#24221f] md:text-6xl lg:text-7xl">
              {page.hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#625b52] md:text-xl">
              {page.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#24221f] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1a1816]"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-[#ded4c8] bg-white/40 px-5 py-3 text-sm font-medium text-[#4f4942] transition-colors duration-300 hover:bg-[#eee8df]"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b746d]">
              Approach
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f]">
              {page.intro.title}
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#625b52]">
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5ddd2] bg-[#eee8df] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b746d]">
              Property Types
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f]">
              Different properties call for different lighting approaches.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {page.propertyTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[#e3d9ce] bg-white/80 p-6"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3ede4] text-[#5d564e]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-medium text-[#24221f]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#625b52]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-5 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b746d]">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f]">
              Lighting services for {page.city} homes and hospitality spaces.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#625b52]">
              Practical lighting plans designed around how the
              property is used, installed with attention to detail
              and long-term reliability.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {page.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-2xl border border-[#e3d9ce] bg-white/80 px-4 py-4 text-[#4f4942]"
              >
                <Lightbulb className="h-4 w-4 text-[#625b52]" />

                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5ddd2] bg-[#eee8df] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b746d]">
              {page.city} Context
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f]">
              {page.context.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#625b52]">
              {page.context.text}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7b746d]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#24221f]">
              Common questions about lighting projects in {page.city}.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[2rem] border border-[#e3d9ce] bg-white/80 p-6"
              >
                <div className="mb-4 flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-[#625b52]" />

                  <h3 className="text-lg font-medium text-[#24221f]">
                    {faq.question}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#625b52]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consultation"
        className="px-5 pb-24 md:px-8"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#2b2926] bg-[#151412] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8c857d]">
              Consultation
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-white md:text-5xl">
              Start with a walkthrough and a conversation about the space.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#c4beb6]">
              Whether the project involves interior lighting,
              outdoor spaces, hospitality environments, or a full
              property plan, the first step is a practical walkthrough
              and conversation about how the space should feel and function.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5f1ea] px-5 py-3 text-sm font-medium text-[#24221f] transition-colors duration-300 hover:bg-white"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}