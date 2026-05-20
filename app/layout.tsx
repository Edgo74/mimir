import type { Metadata } from "next";
import {
  Syne,
  Inter,
  JetBrains_Mono,
  Noto_Sans_Runic,
  Noto_Sans_SC,
} from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const notoRunic = Noto_Sans_Runic({
  subsets: ["runic"],
  weight: ["400"],
  variable: "--font-noto-runic",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIMIR — L'IA des cabinets d'expertise comptable, à la source.",
  description:
    "Audit, plan d'action et formation packagés en 90 jours pour les cabinets d'expertise comptable. Finançable OPCO jusqu'à 100 %.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoRunic.variable} ${notoSC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
