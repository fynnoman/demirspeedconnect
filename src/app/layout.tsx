import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://demir-speedconnect.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Demir SpeedConnect – Glasfaser & Tiefbau",
    template: "%s | Demir SpeedConnect",
  },
  description:
    "Demir SpeedConnect UG – Ihr Spezialist für Glasfaserverlegung, Lichtleitfaser-Spleißen, Tiefbauarbeiten und Hausanschlüsse. Deutschlandweit tätig, Sitz in Beckingen (Saarland).",
  keywords: [
    "Glasfaser",
    "Glasfaserverlegung",
    "Tiefbau",
    "Spleißen",
    "LWL",
    "Hausanschlüsse",
    "Glasfaser Saarland",
    "Glasfaser Beckingen",
    "Demir SpeedConnect",
    "Glasfaserausbau",
    "Internetausbau",
  ],
  authors: [{ name: "Demir SpeedConnect UG", url: BASE_URL }],
  creator: "Demir SpeedConnect UG",
  publisher: "Demir SpeedConnect UG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Demir SpeedConnect",
    title: "Demir SpeedConnect – Glasfaser & Tiefbau",
    description:
      "Professionelle Glasfaserverlegung, Spleißen, Tiefbau und Hausanschlüsse – deutschlandweit. Demir SpeedConnect UG, Beckingen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Demir SpeedConnect – Glasfaser & Tiefbau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demir SpeedConnect – Glasfaser & Tiefbau",
    description:
      "Professionelle Glasfaserverlegung, Spleißen, Tiefbau und Hausanschlüsse – deutschlandweit. Demir SpeedConnect UG, Beckingen.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="DE-SL" />
        <meta name="geo.placename" content="Beckingen" />
        <meta name="geo.position" content="49.448;6.758" />
        <meta name="ICBM" content="49.448, 6.758" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
