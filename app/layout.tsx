import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fotografía 360 Costa Rica | Tours Virtuales & Fotografía Profesional",
  description:
    "Tours virtuales 360°, fotografía inmobiliaria, Google Street View e inspección de obra en Costa Rica. Entrega en 3–5 días hábiles.",
  metadataBase: new URL("https://www.fotografia360cr.com"),
  alternates: {
    canonical: "https://www.fotografia360cr.com",
  },
  openGraph: {
    title: "Fotografía 360 Costa Rica | Tours Virtuales & Fotografía Profesional",
    description:
      "Tours virtuales 360°, fotografía inmobiliaria, Google Street View e inspección de obra en Costa Rica. Entrega en 3–5 días hábiles.",
    url: "https://www.fotografia360cr.com",
    siteName: "Fotografía 360 Costa Rica",
    images: [
      {
        url: "/hero-360.jpeg",
        width: 1200,
        height: 630,
        alt: "Fotografía 360 Costa Rica — Tour virtual estudio de pilates",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotografía 360 Costa Rica | Tours Virtuales & Fotografía Profesional",
    description:
      "Tours virtuales 360°, fotografía inmobiliaria, Google Street View e inspección de obra en Costa Rica.",
    images: ["/hero-360.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${cormorant.variable} ${jost.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
