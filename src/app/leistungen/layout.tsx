import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen im Überblick: Glasfaserverlegung, LWL-Spleißen, Tiefbauarbeiten und Glasfaser-Hausanschlüsse. Demir SpeedConnect UG – deutschlandweit tätig.",
  keywords: [
    "Glasfaserverlegung",
    "LWL Spleißen",
    "Tiefbauarbeiten",
    "Hausanschlüsse",
    "Glasfaser verlegen",
    "Lichtwellenleiter",
    "Kabelverlegung",
    "Glasfaser Leerrohre",
  ],
  alternates: {
    canonical: "https://demir-speedconnect.de/leistungen",
  },
  openGraph: {
    title: "Leistungen – Demir SpeedConnect",
    description:
      "Glasfaserverlegung, Spleißen, Tiefbau und Hausanschlüsse aus einer Hand – professionell, schnell und zuverlässig.",
    url: "https://demir-speedconnect.de/leistungen",
  },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
