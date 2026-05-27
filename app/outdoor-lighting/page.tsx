import type { Metadata } from "next";
import OutdoorLightingClient from "./OutdoorLightingClient";

export const metadata: Metadata = {
  title: "Outdoor Lighting",
  description:
    "Outdoor lighting designed for patios, pathways, landscapes, gathering spaces, and exterior environments throughout the Okanagan.",
};

export default function OutdoorLightingPage() {
  return <OutdoorLightingClient />;
}