import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { BottomNav } from "@/components/layout/BottomNav";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import "@/styles/themes/pulag-alpine.css";
import "@/styles/themes/pulag-hike.css";
import "@/styles/themes/dinagat-tropical.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travel Hub",
    template: "%s | Travel Hub",
  },
  description: "Travel guides and itineraries",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Travel Hub",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0e14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
