import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Demir SpeedConnect UG – Talstraße 67, 66701 Beckingen. Telefon: +49 172 7398452. E-Mail: info@speedconnect-demir.de. Angebot anfordern.",
  keywords: [
    "Kontakt Demir SpeedConnect",
    "Glasfaser Angebot",
    "Glasfaser Anfrage",
    "Tiefbau Kontakt",
    "SpeedConnect Beckingen",
  ],
  alternates: {
    canonical: "https://demir-speedconnect.de/kontakt",
  },
  openGraph: {
    title: "Kontakt – Demir SpeedConnect",
    description:
      "Nehmen Sie Kontakt auf – Talstraße 67, 66701 Beckingen. Telefon: +49 172 7398452. Wir freuen uns auf Ihre Anfrage.",
    url: "https://demir-speedconnect.de/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
