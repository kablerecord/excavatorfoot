import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Excavator Foot - Turn Without Ground Damage | Patented Pivot System",
  description: "Patented pivot system lets excavators turn without damaging ground. Reduces track wear, saves money, protects surfaces. For Cat 302, 305, 308 models. Licensing available.",
  keywords: ["excavator pivot", "ground damage prevention", "track wear reduction", "excavator turning", "patent", "construction equipment", "Cat excavator", "mini excavator", "licensing"],
  authors: [{ name: "Kable Record" }],
  openGraph: {
    title: "Excavator Foot - Turn Without Ground Damage",
    description: "Patented pivot system for excavators. Turn without damaging lawns, pavement, or delicate surfaces.",
    url: "https://excavatorfoot.com",
    siteName: "Excavator Foot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excavator Foot - Turn Without Ground Damage",
    description: "Patented pivot system for excavators. Turn without damaging lawns, pavement, or delicate surfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-black font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
