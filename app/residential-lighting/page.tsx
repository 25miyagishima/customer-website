import type { Metadata } from "next";
import ResidentialLightingClient from "./ResidentialLightingClient";

export const metadata: Metadata = {
  title: "Residential Lighting",
  description:
    "Thoughtfully planned indoor and outdoor residential lighting for homes, patios, kitchens, pathways, landscapes, and gathering spaces throughout the Okanagan.",
};

export default function ResidentialLightingPage() {
  return <ResidentialLightingClient />;
}