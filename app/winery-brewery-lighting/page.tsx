import type { Metadata } from "next";
import WineryBreweryLightingClient from "./WineryBreweryLightingClient";

export const metadata: Metadata = {
  title: "Winery & Brewery Lighting",
  description:
    "Hospitality lighting designed for wineries, breweries, patios, tasting areas, gathering spaces, and outdoor hospitality environments throughout the Okanagan.",
};

export default function WineryBreweryLightingPage() {
  return <WineryBreweryLightingClient />;
}