import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Title and description lead with the problem an operator would actually
  // type ("turn without tearing up the ground") rather than the invented
  // category label ("factory-installable pivot technology"), which nobody
  // searches for. The licensing pitch still lands — it just comes second.
  title:
    "Excavator Foot — Turn a Tracked Excavator in Place, Without Tearing Up the Ground",
  description:
    "Patented hydraulic foot that lets a tracked excavator pivot in place instead of skid-turning — no torn turf, no gouged asphalt, no undercarriage scrub. Proven on 2-, 5- and 8-ton machines. U.S. Patent No. 12,679,457. Available for OEM licensing.",
  keywords: [
    "excavator turf damage",
    "excavator lawn damage",
    "mini excavator lawn damage",
    "turn excavator without damaging lawn",
    "excavator counter-rotation damage",
    "skid turn track wear",
    "undercarriage wear",
    "tracked excavator",
    "mini excavator attachment",
    "excavator pivot",
    "OEM licensing",
    "patent licensing",
    "Caterpillar",
    "Bobcat",
    "John Deere",
    "Kubota",
    "Komatsu",
    "Takeuchi",
  ],
  authors: [{ name: "Kable Darren Record" }],
  // Self-referencing canonical on the homepage; every other page sets its own.
  // Nothing on this site emitted a canonical before, so the apex and www
  // copies had no tiebreaker beyond the (absent) redirect.
  alternates: { canonical: "/" },
  // NOTE: no title/description/url inside openGraph or twitter, on purpose.
  //
  // Next.js inherits a parent's openGraph object wholesale into any child that
  // does not define its own. With those fields pinned here, /about and
  // /contact both previewed as the homepage no matter where they were pasted.
  // Omitting them lets each page fall back to its own title and description.
  //
  // og:image is likewise absent by design — opengraph-image.tsx in this
  // directory supplies it automatically to every route.
  openGraph: {
    siteName: "Excavator Foot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // @graph lets one script declare several linked entities that reference each
  // other by @id. Organization establishes who we are (and ties the inventor to
  // kablerecord.com so the two domains reinforce rather than compete); WebSite
  // names the search-result sitelinks target. The Product entity lives on the
  // homepage instead of here — it describes one specific thing, and repeating
  // it on /about and /contact would claim those pages are also the product.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Excavator Foot",
        url: SITE_URL,
        description:
          "Patented hydraulic mechanism that lets a tracked excavator pivot in place instead of skid-turning, eliminating turf damage and undercarriage scrub. Available for OEM licensing. U.S. Patent No. 12,679,457.",
        founder: {
          "@type": "Person",
          name: "Kable Record",
          url: "https://kablerecord.com",
        },
        sameAs: [
          "https://www.youtube.com/@kablerecord",
          "https://instagram.com/kablerecord",
          "https://twitter.com/kablerecord",
          "https://www.facebook.com/kablerecord",
          "https://www.tiktok.com/@kable.record",
          "https://www.linkedin.com/in/kable-record-4817ab13",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Excavator Foot",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-black font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
