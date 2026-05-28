import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { PageShell } from "@/components/layout/PageShell";
import { CityPageTemplate } from "@/components/sections/CityPageTemplate";
import { cityPages, type CityPageSlug } from "@/data/cityPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(cityPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = cityPages[slug as CityPageSlug];

  if (!page) {
    return {
      title: "Lighting Design | Okanagan Lighting",
    };
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const page = cityPages[slug as CityPageSlug];

  if (!page) {
    notFound();
  }

  return (
    <PageShell>
      <LocalBusinessSchema />
      <CityPageTemplate page={page} />
    </PageShell>
  );
}