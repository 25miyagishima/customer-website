export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Okanagan Lighting",
    url: "https://okanaganlighting.ca",
    image: "https://okanaganlighting.ca/og-image.jpg",
    description:
      "Thoughtfully planned indoor and outdoor lighting environments throughout the Okanagan.",
    areaServed: [
      "Penticton",
      "Summerland",
      "Peachland",
      "Kelowna",
      "West Kelowna",
      "Naramata",
      "Osoyoos",
    ],
    serviceType: [
      "Residential Lighting",
      "Outdoor Lighting",
      "Landscape Lighting",
      "Hospitality Lighting",
      "Patio Lighting",
      "Winery Lighting",
      "Brewery Lighting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}