import type { Metadata } from "next";
import ConsultationClient from "./ConsultationClient";

export const metadata: Metadata = {
  title: "Consultation",
  description:
    "Request a lighting consultation for residential, outdoor living, winery, brewery, and hospitality lighting projects throughout the Okanagan.",
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}