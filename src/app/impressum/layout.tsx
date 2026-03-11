import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Demir SpeedConnect UG (haftungsbeschränkt) – Angaben gemäß § 5 TMG. Talstraße 67, 66701 Beckingen. Handelsregister: HRB 111710, AG Saarbrücken.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://demir-speedconnect.de/impressum",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
