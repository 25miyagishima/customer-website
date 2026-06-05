import { ButtonLink } from "@/components/ui/ButtonLink";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 pb-36 pt-24 md:px-8 md:pb-40"
    >
      <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2b2926] px-7 py-14 text-center text-white shadow-[0_30px_90px_rgba(43,41,38,0.18)] md:rounded-[3rem] md:px-12 md:py-20">
        <p className="text-sm tracking-[0.16em] text-[#c6a66d]">
          Consultation
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-5xl font-light tracking-[-0.05em] md:text-6xl">
          Start the conversation.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
          Whether you're planning a larger installation or a smaller lighting
          upgrade, every project begins with a conversation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/consultation" variant="gold">
            Request a Consultation
          </ButtonLink>

          <ButtonLink href="#services" variant="outlineDark">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}