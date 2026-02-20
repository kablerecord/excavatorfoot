import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Excavator Foot - Patented Ground Stabilization System",
  description: "Revolutionary patented excavator stabilization technology. Designed for Cat 302, 305, and 308 models. Licensing opportunities available.",
  keywords: ["excavator", "stabilization", "patent", "construction equipment", "Cat excavator", "ground performance", "licensing"],
  authors: [{ name: "Kable Record" }],
  openGraph: {
    title: "Excavator Foot - Patented Ground Stabilization System",
    description: "Revolutionary patented excavator stabilization technology",
    url: "https://excavatorfoot.com",
    siteName: "Excavator Foot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excavator Foot - Patented Ground Stabilization System",
    description: "Revolutionary patented excavator stabilization technology",
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
