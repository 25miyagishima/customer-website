import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

const portfolioImages = {
  primary: "/images/portfolio/port-1.jpg",
  secondary: "/images/portfolio/port-2.jpg",
};

function PortfolioImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1a120d]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="work" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Portfolio</SectionLabel>

          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#24221f] md:text-5xl">
            Recent lighting environments.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625b52]">
            A growing collection of residential properties, landscapes, patios,
            gathering spaces, wineries, breweries, and hospitality environments
            shaped through light.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] bg-[#d8c9b5] shadow-[0_24px_70px_rgba(24,18,12,0.08)]">
            <div className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
              <PortfolioImage
                src={portfolioImages.primary}
                alt="Completed Okanagan lighting project"
              />
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] bg-[#cab9a1] shadow-[0_24px_70px_rgba(24,18,12,0.08)]">
              <div className="aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]">
                <PortfolioImage
                  src={portfolioImages.secondary}
                  alt="Architectural outdoor lighting project"
                />
              </div>
            </article>

            <div className="rounded-[2rem] border border-[#ddd3c6] bg-[#f1ebe3] p-8 md:p-10">
              <p className="text-sm tracking-[0.16em] text-[#83786c]">
                More environments coming soon
              </p>

              <p className="mt-5 max-w-md text-lg leading-8 text-[#625b52]">
                The portfolio will continue to grow as new residential,
                hospitality, and outdoor living environments are completed
                across the Okanagan.
              </p>

              <ButtonLink
                href="/consultation"
                variant="outline"
                className="mt-7"
                showArrow
              >
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}