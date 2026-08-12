import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Demir SpeedConnect GmbH gemäß DSGVO. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://demir-speedconnect.de/datenschutz",
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
