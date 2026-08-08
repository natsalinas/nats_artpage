import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nati Salinas Art",
    template: "%s | Nati Salinas Art",
  },
  description:
    "Orlando-based artist Nathalia Salinas explores everyday experiences, emotion, movement, and imagination through the World of Rosa.",
  metadataBase: new URL("https://art.nati.studio"),
  openGraph: {
    title: "Nati Salinas Art",
    description:
      "Explore the World of Rosa — original artwork, prints, and custom commissions by Orlando-based artist Nathalia Salinas.",
    url: "https://art.nati.studio",
    siteName: "Nati Salinas Art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}