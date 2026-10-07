import type { Metadata } from "next";

/**
 * /contact was a "use client" component (it needs useSearchParams to preselect
 * the inquiry type), and client components cannot export `metadata`. Without
 * this layout the page silently inherited the homepage's title and
 * description, so it competed with the homepage in search results while
 * describing itself as the homepage. The page is a server component now (only
 * ContactForm.tsx is client-side), but the metadata stays here.
 */
export const metadata: Metadata = {
  title:
    "Contact — Request the Technical Package or a Demo | Excavator Foot",
  description:
    "Talk to the inventor of the Excavator Foot. Request the NDA-gated engineering package — drawings, hydraulic schematics, load analysis, claim chart and royalty model — or schedule a working-prototype demonstration.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
