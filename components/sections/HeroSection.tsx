"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const atmosphereImages = {
  hero: "/images/hero/hero.jpg",
};

function AtmosphereImage() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#1a120d]">
      <Image
        src={atmosphereImages.hero}
        alt="Warm Okanagan exterior lighting atmosphere"
        fill
        priority
        sizes="(min-width: 1024px) 56vw, 100vw"
        className="scale-105 object-cover opacity-70 blur-[1px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-[#1b140f]/35 to-[#2b1d12]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,191,102,0.10),transparent_55%)]" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="px-5 pb-20 pt-32 sm:pt-36 md:px-8 md:pb-36 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-12 md:gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <p className="text-sm tracking-[0.18em] text-[#8a7f73]">
            Okanagan · Indoor & Outdoor Lighting
          </p>

          <h1 className="mt-5 text-4xl font-light leading-[1.03] tracking-[-0.05em] text-[#24221f] sm:text-5xl md:text-7xl">
            Lighting design for Okanagan living.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#625b52] sm:text-lg sm:leading-8">
            Thoughtful indoor and outdoor lighting designed around atmosphere,
            comfort, and the way each space is lived in.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="/consultation" showArrow>
              Consultation
            </ButtonLink>

            <ButtonLink href="#work" variant="outline">
              View Work
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] bg-[#cfc3b1] shadow-[0_30px_90px_rgba(24,18,12,0.16)] sm:rounded-[2.8rem] md:rounded-[3.4rem]"
        >
          <div className="aspect-[5/4]">
            <AtmosphereImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}