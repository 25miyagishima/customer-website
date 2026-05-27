import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okanaganlighting.ca"),

  title: {
    default: "Okanagan Lighting | Indoor & Outdoor Lighting Design",
    template: "%s | Okanagan Lighting",
  },

  description:
    "Thoughtfully planned indoor and outdoor lighting environments for residential properties, outdoor spaces, wineries, breweries, and hospitality settings throughout the Okanagan.",

  openGraph: {
    title: "Okanagan Lighting",
    description:
      "Thoughtfully planned indoor and outdoor lighting environments throughout the Okanagan.",
    url: "https://okanaganlighting.ca",
    siteName: "Okanagan Lighting",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Okanagan Lighting",
    description:
      "Thoughtfully planned indoor and outdoor lighting environments throughout the Okanagan.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}