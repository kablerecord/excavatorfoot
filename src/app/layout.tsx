import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Excavator Foot — Factory-Installable Pivot Technology for Tracked Excavators",
  description: "Patented hydraulic pivot mechanism that lets tracked excavators rotate in place using the machine's own rotary motor. Validated across 2-, 5-, and 8-ton classes. Available for OEM licensing. U.S. Patent Application 18/594,097.",
  keywords: ["OEM licensing", "tracked excavator", "pivot mechanism", "hydraulic turntable", "patent licensing", "construction equipment innovation", "Caterpillar", "Bobcat", "Kubota", "Komatsu", "ground damage prevention", "undercarriage wear"],
  authors: [{ name: "Kable Darren Record" }],
  openGraph: {
    title: "Excavator Foot — Factory-Installable Pivot Technology",
    description: "Patented mechanism that rotates tracked excavators in place using the machine's own rotary motor. Available for OEM licensing.",
    url: "https://excavatorfoot.com",
    siteName: "Excavator Foot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excavator Foot — Factory-Installable Pivot Technology",
    description: "Patented mechanism that rotates tracked excavators in place. Available for OEM licensing.",
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
