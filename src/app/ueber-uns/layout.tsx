import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Demir SpeedConnect UG kennen – Ihr zuverlässiger Partner für Glasfaser-Infrastruktur, Tiefbau und Hausanschlüsse mit Sitz in Beckingen, Saarland.",
  keywords: [
    "Demir SpeedConnect",
    "Über uns",
    "Glasfaser Unternehmen Saarland",
    "Glasfaser Beckingen",
    "Adem Demir",
    "Glasfaser Partner",
  ],
  alternates: {
    canonical: "https://demir-speedconnect.de/ueber-uns",
  },
  openGraph: {
    title: "Über uns – Demir SpeedConnect",
    description:
      "Demir SpeedConnect UG – Ihr verlässlicher Spezialist für Glasfaser-Infrastruktur, Tiefbau und Hausanschlüsse aus Beckingen.",
    url: "https://demir-speedconnect.de/ueber-uns",
  },
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
