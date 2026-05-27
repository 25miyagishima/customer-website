import type { Metadata } from "next";

import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

import { PageShell } from "@/components/layout/PageShell";

import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Indoor & Outdoor Lighting Design",
  description:
    "Thoughtfully planned indoor and outdoor lighting environments for residential properties, outdoor spaces, wineries, breweries, and hospitality settings throughout the Okanagan.",
};

export default function HomePage() {
  return (
    <PageShell>
      <LocalBusinessSchema />

      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <ServiceAreaSection />
      <ContactSection />
    </PageShell>
  );
}